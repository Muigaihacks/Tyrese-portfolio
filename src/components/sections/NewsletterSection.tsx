"use client";

import { ArrowRight, CheckCircle2, MailCheck } from "lucide-react";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Could not subscribe right now.");
      setDone(true);
      setEmail("");
      setWebsite("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="newsletter"
      className="relative px-6 py-24 border-t border-white/5 bg-surface"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // NEWSLETTER
          </span>
        </div>

        <h2 className="font-display text-white text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em]">
          Short notes from the studio.
        </h2>
        <p className="text-white/55 text-base mt-4 leading-relaxed max-w-xl mx-auto">
          Occasional dispatches on what we&apos;re shipping, what we&apos;ve learned in production, and the trade-offs we&apos;d make again.
        </p>

        {done ? (
          <div className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-full bg-kratos-500/15 border border-kratos-500/40 text-kratos-200 text-sm">
            <MailCheck className="w-4 h-4" />
            <span>You&apos;re on the list. Talk soon.</span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-8 max-w-md mx-auto w-full"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourcompany.com"
                className="flex-1 px-4 py-3 rounded-full bg-surface-sunken border border-white/10 focus:border-kratos-500/60 focus:outline-none focus:ring-1 focus:ring-kratos-500/30 text-white text-sm placeholder-white/30 transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-kratos-500 hover:bg-kratos-400 disabled:bg-kratos-700 text-surface-ink font-semibold text-sm transition-colors shrink-0"
              >
                {submitting ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            {error && (
              <p className="mt-3 text-left text-sm text-red-300/95" role="alert">
                {error}
              </p>
            )}
            <p className="mt-3 flex items-start justify-center sm:justify-start gap-2 text-left text-[13px] text-white/45 max-w-md mx-auto sm:mx-0">
              <CheckCircle2 className="w-4 h-4 text-kratos-400 shrink-0 mt-0.5" aria-hidden />
              <span>No spam. Unsubscribe anytime.</span>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
