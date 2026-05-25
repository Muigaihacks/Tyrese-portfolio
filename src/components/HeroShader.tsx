"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero background, WebGL fragment shader with FBM noise + cursor-driven warp.
 *
 * Replaces the CSS `radial-gradient` spotlight with actual real-time pixel
 * distortion. The cursor position is mapped to a `uMouse` uniform that warps
 * the noise field around it, producing a liquid / heat-haze effect.
 *
 * The canvas is set to `pointer-events: none` so the parent hero section can
 * still capture pointer events for the cursor-trail. The cursor position
 * is forwarded via a ref to a uniform on each frame.
 */
export default function HeroShader() {
  // Mouse position in normalized 0..1 UV space. Updated by listener below.
  const mouseRef = useRef(new THREE.Vector2(0.5, 0.5));
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = targetRef.current;
    if (!el?.parentElement) return;
    const parent = el.parentElement;

    function onMove(e: PointerEvent) {
      const r = parent.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      // Flip Y so UV space matches mouse coords (UV.y goes up, mouse.y goes down).
      const y = 1 - (e.clientY - r.top) / r.height;
      mouseRef.current.set(x, y);
    }
    parent.addEventListener("pointermove", onMove);
    return () => parent.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={targetRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden
    >
      <Canvas
        orthographic
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 1], zoom: 1 }}
        style={{ position: "absolute", inset: 0 }}
      >
        <ShaderPlane mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}

interface ShaderPlaneProps {
  mouseRef: React.MutableRefObject<THREE.Vector2>;
}

function ShaderPlane({ mouseRef }: ShaderPlaneProps) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const lerpedMouse = useRef(new THREE.Vector2(0.5, 0.5));

  useFrame((state) => {
    const mat = matRef.current;
    if (!mat) return;
    mat.uniforms.uTime.value = state.clock.elapsedTime;
    // Ease the uniform toward the actual mouse to soften jitter.
    lerpedMouse.current.lerp(mouseRef.current, 0.08);
    (mat.uniforms.uMouse.value as THREE.Vector2).copy(lerpedMouse.current);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        transparent
        uniforms={{
          uTime:  { value: 0 },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
        vertexShader={VERT}
        fragmentShader={FRAG}
      />
    </mesh>
  );
}

// ---------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// Fragment shader: FBM noise warped by cursor, blended with dark surface +
// kratos teal. Includes Ashima 2D simplex noise (snoise2).
const FRAG = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2  uMouse;
  varying vec2  vUv;

  // ---- 2D Simplex noise (Ashima Arts, MIT) ----
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(
      0.211324865405187,
      0.366025403784439,
     -0.577350269189626,
      0.024390243902439
    );
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v   - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(
        i.y + vec3(0.0, i1.y, 1.0)) +
        i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(
        dot(x0, x0),
        dot(x12.xy, x12.xy),
        dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x  = 2.0 * fract(p * C.www) - 1.0;
    vec3 h  = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // FBM, layered noise.
  float fbm(vec2 p) {
    float total = 0.0;
    float amp   = 0.5;
    for (int i = 0; i < 4; i++) {
      total += amp * snoise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return total;
  }

  void main() {
    // Aspect-correct the UV so noise scale isn't squashed on wide viewports.
    vec2 uv = vUv;

    // Cursor influence, stronger near the mouse, fades with distance.
    float dist = distance(uv, uMouse);
    float influence = 0.6 / (1.0 + dist * 7.0);

    // Domain-warp the sample point with another noise layer, weighted by
    // the cursor's nearby influence. This is what makes the field "flow."
    vec2 warp = vec2(
      fbm(uv * 1.5 + uTime * 0.06),
      fbm(uv * 1.5 + uTime * 0.06 + 100.0)
    ) * influence * 1.6;

    vec2 nUv = uv * 2.4 + uTime * 0.04 + warp;
    float n  = fbm(nUv);
    n = n * 0.5 + 0.5; // remap -1..1 → 0..1

    // Colors, keep dark; teal only flickers in the brighter peaks.
    vec3 surfaceDark = vec3(0.043, 0.059, 0.059); // ~#0B0F0F
    vec3 kratosTeal  = vec3(0.122, 0.557, 0.525); // ~#1F8E86

    float teal = smoothstep(0.55, 0.78, n) * 0.55;
    vec3  col  = mix(surfaceDark, kratosTeal, teal);

    // Mouse halo, soft glow at cursor.
    col += kratosTeal * smoothstep(0.22, 0.0, dist) * 0.45;

    // Subtle vignette to keep edges from drawing the eye.
    float vig = smoothstep(1.3, 0.4, distance(uv, vec2(0.5)));
    col *= vig * 0.5 + 0.5;

    // Output with alpha so the underlying surface bg bleeds through edges.
    gl_FragColor = vec4(col, 0.85);
  }
`;
