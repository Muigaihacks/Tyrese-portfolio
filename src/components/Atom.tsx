"use client";

import { useEffect, useState } from "react";

type AtomVariant = "mark" | "hero";

interface AtomProps {
  className?: string;
  /** Fixed pixel size. Omit if the parent already constrains width/height. */
  size?: number;
  variant?: AtomVariant;
  /** Override core teal, defaults to brand kratos-500. */
  primary?: string;
  /** Override electron color, defaults to kratos-300. */
  electron?: string;
  /** Override orbit stroke, defaults to kratos-700 at low opacity. */
  orbitStroke?: string;
  /** Override nucleus glow center, defaults to white. */
  nucleus?: string;
}

/**
 * Kratos nucleus mark.
 *
 * Anatomy: three precessing elliptical orbits, each carrying an electron with
 * a comet-style trail (5 staggered dots fading back along the path). At the
 * center, a 3-layer pulsing nucleus core with a soft ambient aura behind it.
 *
 * Two variants:
 *  - "mark"  → clean single-electron orbits, no trails. Use at <= 80px (navbar).
 *  - "hero"  → comet trails, ambient aura, full bloom. Use at >= 200px (loader/hero).
 */
export default function Atom({
  className = "",
  size,
  variant = "hero",
  primary     = "#1F8E86",   // kratos-500
  electron    = "#5FC0B8",   // kratos-300
  orbitStroke = "rgba(94, 192, 184, 0.22)",
  nucleus     = "#EAF7F6",   // kratos-50 (near white)
}: AtomProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isHero = variant === "hero";
  // Stagger offsets for comet-trail electrons (negative = earlier start = trail).
  const trailOffsets = isHero ? [0, -0.08, -0.16, -0.24, -0.32] : [0];

  // Only set inline dimensions if `size` was explicitly passed.
  // Otherwise the parent's CSS controls sizing (useful for responsive layouts).
  const style = size !== undefined ? { width: size, height: size } : undefined;

  return (
    <div className={className} style={style}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Soft bloom for electrons */}
          <filter id="electron-bloom" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong glow for nucleus core */}
          <filter id="nucleus-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial gradient, ambient aura behind the nucleus */}
          <radialGradient id="ambient-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={primary} stopOpacity="0.35" />
            <stop offset="60%"  stopColor={primary} stopOpacity="0.08" />
            <stop offset="100%" stopColor={primary} stopOpacity="0" />
          </radialGradient>

          {/* Nucleus core gradient, bright center fading to mid teal */}
          <radialGradient id="nucleus-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={nucleus} stopOpacity="1" />
            <stop offset="40%"  stopColor="#5FC0B8" stopOpacity="0.95" />
            <stop offset="100%" stopColor={primary} stopOpacity="0.9" />
          </radialGradient>

          {/* Reusable orbit paths, keep coords in sync with viewBox 120×120 */}
          <path
            id="orbit-1-path"
            d="M 20,60 a 40,12 0 1,0 80,0 a 40,12 0 1,0 -80,0"
          />
          <path
            id="orbit-2-path"
            d="M 16,60 a 44,13 0 1,0 88,0 a 44,13 0 1,0 -88,0"
          />
          <path
            id="orbit-3-path"
            d="M 24,60 a 36,11 0 1,0 72,0 a 36,11 0 1,0 -72,0"
          />
        </defs>

        {/* Ambient aura, hero only */}
        {isHero && (
          <circle cx="60" cy="60" r="50" fill="url(#ambient-aura)" />
        )}

        {/* ============ Orbit 1 ============ */}
        <g style={{ transformOrigin: "60px 60px", animation: "precession 60s linear infinite" }}>
          <use
            href="#orbit-1-path"
            fill="none"
            stroke={orbitStroke}
            strokeWidth="0.4"
            transform="rotate(60 60 60)"
          />
          <g transform="rotate(60 60 60)">
            {trailOffsets.map((offset, i) => (
              <circle
                key={`o1-${i}`}
                r={1.6 - i * 0.22}
                fill={electron}
                opacity={1 - i * 0.18}
                filter="url(#electron-bloom)"
              >
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${offset}s`}
                >
                  <mpath href="#orbit-1-path" />
                </animateMotion>
              </circle>
            ))}
          </g>
        </g>

        {/* ============ Orbit 2 ============ */}
        <g style={{ transformOrigin: "60px 60px", animation: "precession 50s linear infinite reverse" }}>
          <use
            href="#orbit-2-path"
            fill="none"
            stroke={orbitStroke}
            strokeWidth="0.4"
            transform="rotate(120 60 60)"
          />
          <g transform="rotate(120 60 60)">
            {trailOffsets.map((offset, i) => (
              <circle
                key={`o2-${i}`}
                r={1.4 - i * 0.20}
                fill={electron}
                opacity={1 - i * 0.18}
                filter="url(#electron-bloom)"
              >
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${offset}s`}
                >
                  <mpath href="#orbit-2-path" />
                </animateMotion>
              </circle>
            ))}
          </g>
        </g>

        {/* ============ Orbit 3 ============ */}
        <g style={{ transformOrigin: "60px 60px", animation: "precession 40s linear infinite" }}>
          <use
            href="#orbit-3-path"
            fill="none"
            stroke={orbitStroke}
            strokeWidth="0.4"
            transform="rotate(0 60 60)"
          />
          <g>
            {trailOffsets.map((offset, i) => (
              <circle
                key={`o3-${i}`}
                r={1.8 - i * 0.25}
                fill={electron}
                opacity={1 - i * 0.18}
                filter="url(#electron-bloom)"
              >
                <animateMotion
                  dur="5s"
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${offset}s`}
                >
                  <mpath href="#orbit-3-path" />
                </animateMotion>
              </circle>
            ))}
          </g>
        </g>

        {/* ============ Nucleus, 3 layers ============ */}
        <g
          style={{
            transformOrigin: "60px 60px",
            animation: "nucleus-pulse 4s ease-in-out infinite",
          }}
        >
          {/* Outer halo */}
          <circle cx="60" cy="60" r="5.2" fill={primary} opacity="0.35" filter="url(#nucleus-glow)" />
          {/* Mid core */}
          <circle cx="60" cy="60" r="3.4" fill="url(#nucleus-core)" filter="url(#nucleus-glow)" />
          {/* Bright center */}
          <circle cx="60" cy="60" r="1.6" fill={nucleus} />
        </g>
      </svg>
    </div>
  );
}
