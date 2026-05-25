"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Atom from "./Atom";

const DEFAULT_DURATION_MS = 4000;

interface AtomLoaderProps {
  /** Fires once the loader has fully exited and content should be revealed. */
  onComplete: () => void;
  /** Total visible duration in ms. Default 4000. */
  duration?: number;
  brand?: string;
}

/**
 * Branded loading sequence, 4s total on first visit, instant on repeat.
 *
 * Phases:
 *   0–300     surface fade-in (just dark)
 *   300–1100  nucleus scales in, orbits begin
 *   1100–1900 KRATOS SYSTEMS wordmark fades up
 *   1900–3500 00 → 100 counter ramp + cycling technical caption
 *   3500–4000 exit fade
 *
 * Behavior:
 *   - Shown only once per browser session (sessionStorage flag).
 *   - prefers-reduced-motion → skipped entirely.
 *   - ESC key or "skip" button exits early.
 */
export default function AtomLoader({
  onComplete,
  duration = DEFAULT_DURATION_MS,
  brand = "KRATOS SYSTEMS",
}: AtomLoaderProps) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState<boolean | null>(null);
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [pct, setPct] = useState(0);

  // Decide whether to show on mount.
  // The loader runs on every page load (no per-session suppression), this is
  // intentional so the brand moment happens every visit.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reduced) {
      setVisible(false);
      onComplete();
      return;
    }
    setVisible(true);
  }, [reduced, onComplete]);

  // Phase progression.
  useEffect(() => {
    if (!visible) return;
    const p1   = setTimeout(() => setPhase(1), 300);
    const p2   = setTimeout(() => setPhase(2), 1100);
    const p3   = setTimeout(() => setPhase(3), 1900);
    const exit = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500);
    }, duration);
    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(exit);
    };
  }, [visible, duration, onComplete]);

  // Counter ramp 0 → 100 once phase 3 begins.
  useEffect(() => {
    if (phase < 3) return;
    const start = performance.now();
    const rampMs = 1500; // finish counter before exit fade starts
    let rafId = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / rampMs);
      setPct(Math.floor(t * 100));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [phase]);

  // ESC = skip.
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function skip() {
    setVisible(false);
    setTimeout(onComplete, 300);
  }

  if (visible === null) return null;

  const caption = captionFor(pct);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="atom-loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface-sunken"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Skip control */}
          <button
            onClick={skip}
            className="absolute top-6 right-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 hover:text-white/80 transition-colors"
          >
            skip <span aria-hidden>→</span>
          </button>

          {/* Top-left build hash flavor */}
          <div className="absolute top-6 left-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            kratos.systems · v0.1
          </div>

          {/* Nucleus */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: phase >= 1 ? 1 : 0.4, opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Atom size={320} variant="hero" />
          </motion.div>

          {/* Wordmark */}
          <motion.h1
            className="font-display text-white text-[clamp(1.5rem,3vw,2.5rem)] mt-10 tracking-wordmark"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: phase >= 2 ? 0 : 12, opacity: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {brand}
          </motion.h1>

          {/* Counter row, caption · percentage · dot ticker */}
          <motion.div
            className="mt-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55 min-h-[1em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-white/40">//</span>
            <span className="w-[140px] text-white/80">{caption}</span>
            <span className="text-kratos-300 tabular-nums">
              {pct.toString().padStart(3, "0")}%
            </span>
            <span className="flex gap-1">
              <DotTicker />
            </span>
          </motion.div>

          {/* Progress bar, thin teal line that fills with the counter */}
          <motion.div
            className="mt-3 h-px w-[280px] bg-white/10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="h-full bg-kratos-400 transition-[width] duration-150 ease-out"
              style={{ width: `${pct}%` }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function captionFor(pct: number): string {
  if (pct < 30) return "LOADING ASSETS";
  if (pct < 60) return "COMPILING MODULES";
  if (pct < 90) return "INITIALIZING SYSTEM";
  return "READY";
}

/** Animated 3-dot ticker. */
function DotTicker() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1 h-1 rounded-full bg-kratos-300"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </>
  );
}
