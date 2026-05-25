"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
}

interface CursorTrailProps {
  className?: string;
  /** HSL hue range for sparks. Default: teal-cyan. */
  hueRange?: [number, number];
  /** Particle pool cap. */
  maxParticles?: number;
}

/**
 * Active-Theory-style cursor "fireworks" trail.
 *
 * Renders a `pointer-events-none` canvas that fills its parent container,
 * listens to `pointermove` on the parent, and emits short-lived sparks
 * perpendicular to cursor motion. Sparks decay over ~1s with a tiny gravity.
 *
 * Drop this inside any `position: relative` element to scope the effect.
 */
export default function CursorTrail({
  className = "",
  hueRange = [170, 195],
  maxParticles = 220,
}: CursorTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    let last: { x: number; y: number } | null = null;

    function resize() {
      const r = parent!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width  = Math.max(1, r.width  * dpr);
      canvas!.height = Math.max(1, r.height * dpr);
      canvas!.style.width  = `${r.width}px`;
      canvas!.style.height = `${r.height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    // Distance between interpolated emission points (in CSS px).
    // Smaller = denser trail on fast movement.
    const STEP_PX = 8;

    function emitAt(cx: number, cy: number, dx: number, dy: number) {
      const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.4;
      const burstSpeed = 0.4 + Math.random() * 1.6;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * burstSpeed,
        vy: Math.sin(angle) * burstSpeed,
        life: 1.0,
        size: 0.8 + Math.random() * 1.6,
        hue: hueRange[0] + Math.random() * (hueRange[1] - hueRange[0]),
      });
    }

    function onMove(e: PointerEvent) {
      const r = parent!.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (!last) {
        last = { x, y };
        return;
      }
      const dx = x - last.x;
      const dy = y - last.y;
      const dist = Math.hypot(dx, dy);

      // Path interpolation, emit sparks at fixed spacing along the line from
      // the previous cursor position to the current one. Keeps the trail
      // continuous even when pointermove fires at large gaps (fast motion).
      const steps = Math.max(1, Math.ceil(dist / STEP_PX));
      for (let s = 1; s <= steps; s++) {
        const t  = s / steps;
        const ix = last.x + dx * t;
        const iy = last.y + dy * t;
        const sparksHere = Math.min(3, Math.max(1, Math.floor(dist / steps / 3)));
        for (let i = 0; i < sparksHere; i++) {
          emitAt(ix, iy, dx, dy);
        }
      }
      last = { x, y };

      if (particles.length > maxParticles) {
        particles.splice(0, particles.length - maxParticles);
      }
    }
    parent.addEventListener("pointermove", onMove);

    let rafId = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // tiny gravity for arc feel
        p.life -= 0.018;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle   = `hsla(${p.hue}, 75%, 70%, ${p.life})`;
        ctx.shadowColor = `hsla(${p.hue}, 85%, 60%, 0.7)`;
        ctx.shadowBlur  = 8;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [hueRange, maxParticles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}
