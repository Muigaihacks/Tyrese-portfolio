"use client";

import { useEffect, useState } from "react";
import Atom from "./Atom";
import CursorTrail from "./CursorTrail";
import HeroShader from "./HeroShader";

/**
 * Hero section.
 *
 * Layered effects (back to front):
 *   1. Ambient center glow, fat soft kratos teal radial behind everything
 *   2. WebGL noise shader, cursor-warped FBM noise field (HeroShader)
 *      Disabled on mobile / reduced-motion clients to save battery and GPU.
 *   3. Dot grid texture, subtle CSS overlay for technical feel
 *   4. CursorTrail, 2D canvas fireworks particles
 *   5. Edge vignette
 *   6. Content, Atom + thesis + CTAs
 *   7. Corner labels, coordinates + scroll cue
 */
export default function Hero() {
  // Gate the WebGL shader on capable clients. We only enable it on
  // non-mobile viewports where the user has not requested reduced motion.
  const [shaderEnabled, setShaderEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isNarrow        = window.matchMedia("(max-width: 768px)").matches;
    const reducedMotion   = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isCoarsePointer && !isNarrow && !reducedMotion) {
      setShaderEnabled(true);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-surface overflow-hidden"
    >
      {/* (1) Center ambient glow, always visible */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(1100px,140vw)] aspect-square rounded-full bg-kratos-500/10 blur-[140px]" />
      </div>

      {/* (2) WebGL noise shader, desktop + fine-pointer only */}
      {shaderEnabled && <HeroShader />}

      {/* (3) Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      {/* (4) Cursor trail fireworks, harmless on touch (no events) */}
      <CursorTrail />

      {/* (5) Edge vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.55)_100%)]" />

      {/* (6) Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <div className="w-[280px] sm:w-[360px] md:w-[420px] aspect-square">
          <Atom variant="hero" className="w-full h-full" />
        </div>

        <h1 className="font-display text-white text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.0] mt-10 max-w-3xl tracking-[-0.02em]">
          Engineered software for ambitious businesses.
        </h1>

        <p className="text-white/60 text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
          Production-grade web platforms, AI workflows, and internal tooling, built in Nairobi, shipped across Africa and beyond.
        </p>

        <div className="flex flex-wrap gap-3 mt-10 justify-center">
          <a
            href="/#contact"
            className="px-7 py-3 rounded-full bg-kratos-500 hover:bg-kratos-400 text-surface-ink font-semibold text-sm transition-colors"
          >
            Book a Call
          </a>
          <a
            href="/#portfolio"
            className="px-7 py-3 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 text-white/80 hover:text-white font-medium text-sm transition-all"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* (7) Corner labels */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30 hidden sm:block">
        NBO · KE · 01°17′S 36°49′E
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30 items-center gap-2 hidden sm:flex">
        <span>SCROLL</span>
        <span aria-hidden className="animate-bounce inline-block">↓</span>
      </div>
    </section>
  );
}
