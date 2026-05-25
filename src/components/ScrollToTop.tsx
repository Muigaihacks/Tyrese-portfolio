"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

const RING_RADIUS = 22;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/**
 * Floating "back to top" button.
 *
 * Two visual layers:
 *   - A glass disc with the up-arrow icon.
 *   - An SVG ring whose stroke fills clockwise in lockstep with overall page
 *     scroll progress (0% at top → 100% at bottom).
 *
 * Fades in past 25% scroll. Click scrolls smoothly to top.
 */
export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();

  // Visibility, invisible (opacity 0) and click-blocked above ~25% scroll.
  const opacity = useTransform(scrollYProgress, [0.20, 0.32], [0, 1]);
  const scale   = useTransform(scrollYProgress, [0.20, 0.32], [0.7, 1]);
  const pointerEvents = useTransform(scrollYProgress, (p) =>
    p > 0.22 ? "auto" : "none"
  );

  // Ring fill, strokeDashoffset goes from full circumference (empty) to 0 (full).
  const dashOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [RING_CIRCUMFERENCE, 0]
  );

  return (
    <motion.button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
      style={{ opacity, scale, pointerEvents }}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 flex items-center justify-center group"
    >
      {/* Glass disc + progress ring */}
      <svg
        viewBox="0 0 48 48"
        aria-hidden
        className="absolute inset-0 w-full h-full -rotate-90"
      >
        {/* Track */}
        <circle
          cx="24"
          cy="24"
          r={RING_RADIUS}
          fill="rgba(11, 15, 15, 0.65)"
          stroke="rgba(255, 255, 255, 0.10)"
          strokeWidth="1"
        />
        {/* Progress fill */}
        <motion.circle
          cx="24"
          cy="24"
          r={RING_RADIUS}
          fill="none"
          stroke="rgb(31, 142, 134)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>

      {/* Arrow */}
      <ArrowUp
        className="relative w-4 h-4 text-white/85 group-hover:text-kratos-300 transition-colors"
        strokeWidth={2.2}
      />
    </motion.button>
  );
}
