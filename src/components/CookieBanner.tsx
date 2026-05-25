"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "kratos_cookie_consent_v1";

export type StoredConsent =
  | { version: 1; choice: "essential_only" | "all"; decidedAt: string }
  | null;

export function readCookieConsent(): StoredConsent {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as StoredConsent;
    if (!v || v.version !== 1) return null;
    return v;
  } catch {
    return null;
  }
}

/** Sets consent; callers may later branch analytics tags on choice. */
export function writeCookieConsent(choice: "essential_only" | "all") {
  const payload: StoredConsent = {
    version: 1,
    choice,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

/**
 * Kenyan KDPA-aligned posture: inform + obtain choice before non-essential storage
 * beyond what's strictly necessary. Details in /cookies.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = readCookieConsent();
    if (!existing) setVisible(true);
  }, []);

  if (!visible) return null;

  function pick(choice: "essential_only" | "all") {
    writeCookieConsent(choice);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie preferences"
      className="
        fixed bottom-0 inset-x-0 z-[100] md:bottom-6 md:left-auto md:right-6 md:inset-x-auto
        max-w-xl md:w-[calc(100%-3rem)] w-full px-4 pb-4 md:px-0 pointer-events-none
      "
    >
      <div
        className="
          pointer-events-auto rounded-2xl border border-white/10 bg-[#070A0A]/95 backdrop-blur-xl
          shadow-[0_-8px_40px_rgba(0,0,0,0.55)] md:shadow-glass px-5 py-4 md:py-5
        "
      >
        <button
          type="button"
          onClick={() => pick("essential_only")}
          className="absolute top-3 right-3 p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Dismiss and use essential cookies only"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300 mb-2 pr-10">
          // Cookies · KDPA notice
        </p>
        <p className="text-[13px] leading-relaxed text-white/75 pr-6">
          We use cookies and similar technologies that may qualify as{" "}
          <strong className="text-white/85">personal data</strong> under Kenyan law (
          <abbr title="Kenya Data Protection Act, 2019">KDPA</abbr>). Essentials keep the site
          secure and usable. Optional analytics or preference cookies load only if you approve.{" "}
          <Link href="/cookies" className="text-kratos-300 hover:text-kratos-200 underline underline-offset-2">
            Cookie policy
          </Link>
          {" · "}
          <Link href="/privacy" className="text-kratos-300 hover:text-kratos-200 underline underline-offset-2">
            Privacy policy
          </Link>
          .
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={() => pick("essential_only")}
            className="
              flex-1 px-4 py-2.5 rounded-full border border-white/15 text-[13px] font-medium text-white/90
              hover:bg-white/5 hover:border-white/25 transition-colors
            "
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => pick("all")}
            className="
              flex-1 px-4 py-2.5 rounded-full bg-kratos-500 hover:bg-kratos-400 text-surface-ink text-[13px] font-semibold
              transition-colors
            "
          >
            Accept all disclosed
          </button>
        </div>
      </div>
    </div>
  );
}
