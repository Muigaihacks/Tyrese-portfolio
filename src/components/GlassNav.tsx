"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { CALENDLY_INTRO_URL } from "@/lib/contact-email";
import Link from "next/link";
import { useState } from "react";
import Atom from "./Atom";

type NavLink = { href: string; label: string };

const LINKS: NavLink[] = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const BOOK_A_CALL_URL = CALENDLY_INTRO_URL;

/**
 * Floating glass navbar, iOS 26 Liquid Glass aesthetic.
 *
 * Composes two effects on the same surface:
 *  - scroll-driven base opacity (transparent over hero, denser past 64px)
 *  - cursor-tracking specular highlight (radial gradient follows the mouse)
 *
 * Includes a theme toggle that flips `dark` on <html>, persisted to localStorage.
 */
export default function GlassNav() {
  const { scrollY } = useScroll();
  const baseAlpha = useTransform(scrollY, [0, 64], [0.45, 0.78]);
  const bg = useMotionTemplate`rgba(11, 15, 15, ${baseAlpha})`;

  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setMouse({
            x: ((e.clientX - r.left) / r.width) * 100,
            y: ((e.clientY - r.top) / r.height) * 100,
          });
        }}
        style={{ backgroundColor: bg }}
        className="
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          hidden md:flex items-center gap-5 pl-3 pr-2 py-2
          rounded-full border border-white/10
          shadow-glass
          backdrop-blur-[24px] backdrop-saturate-[180%]
        "
      >
        {/* Rotating shimmer ring, subtle bright arc travels around the border */}
        <div aria-hidden className="glass-shimmer-ring" />

        {/* Cursor-tracking specular highlight, sits above the bg, below content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            backgroundImage: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(94,192,184,0.22), transparent 55%)`,
          }}
        />

        {/* Brand lockup */}
        <Link href="/" className="relative flex items-center gap-2.5 group">
          <span className="relative inline-flex">
            {/* halo to keep the atom legible on any background */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-kratos-500/35 blur-[8px]"
            />
            <Atom size={36} variant="mark" className="relative" />
          </span>
          <span className="font-display text-white text-sm tracking-wordmark uppercase whitespace-nowrap">
            Kratos Systems
          </span>
        </Link>

        {/* Links */}
        <ul className="relative flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="
                  px-3 py-1.5 rounded-full text-[13px] font-medium
                  text-white/70 hover:text-white
                  hover:bg-white/5 transition-colors
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="relative flex items-center">
          <a
            href={BOOK_A_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5 py-2 rounded-full
              bg-kratos-500 hover:bg-kratos-400
              text-surface-ink text-[13px] font-semibold
              whitespace-nowrap leading-none
              transition-colors
            "
          >
            Book a Call
          </a>
        </div>
      </motion.nav>

      {/* ============ Mobile ============ */}
      <motion.nav
        style={{ backgroundColor: bg }}
        className="
          fixed top-4 left-4 right-4 z-50
          md:hidden flex items-center justify-between px-4 py-3
          rounded-full border border-white/10
          shadow-glass
          backdrop-blur-[24px] backdrop-saturate-[180%]
        "
      >
        <Link href="/" className="flex items-center gap-2">
          <Atom size={28} variant="mark" />
          <span className="font-display text-white text-sm tracking-wordmark uppercase">
            Kratos
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] md:hidden bg-surface-sunken/95 backdrop-blur-xl flex flex-col"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full text-white/80 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex-1 flex flex-col items-center justify-center gap-6">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-white text-3xl tracking-wordmark uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-8">
              <a
                href={BOOK_A_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 rounded-full bg-kratos-500 hover:bg-kratos-400 text-surface-ink text-sm font-semibold uppercase tracking-wider"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}

