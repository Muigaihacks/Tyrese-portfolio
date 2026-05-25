"use client";

import { Banknote, Network, Scissors, UserRound, type LucideIcon } from "lucide-react";

interface Differentiator {
  icon: LucideIcon;
  title: string;
  body: string;
}

const POINTS: Differentiator[] = [
  {
    icon: Scissors,
    title: "Bespoke, not boilerplate",
    body:
      "Every system we build is engineered around your business logic, not bent to fit someone else's template. No \"configuration\" workarounds. No paying for features you'll never use.",
  },
  {
    icon: Banknote,
    title: "Own your stack, stop renting it",
    body:
      "Per-seat SaaS subscriptions compound fast. We build the system you'd otherwise rent, your data, your code, your savings accumulating instead of vanishing into annual license renewals.",
  },
  {
    icon: Network,
    title: "One intelligent ecosystem",
    body:
      "CRM, ERP, accounting, comms, analytics, built as a unified system around your workflow, not patched together from five separate vendors. Everything talks to everything.",
  },
  {
    icon: UserRound,
    title: "Direct line to the engineers",
    body:
      "No project manager telephone game. You meet weekly with the people writing the code, see what's shipping, and steer the build in real time.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative py-32 px-6 border-t border-white/5 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // WHY KRATOS
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:items-end">
          <h2 className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            We build systems your business actually owns.
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed lg:max-w-md lg:justify-self-end">
            Most agencies hand you a stack of subscriptions. We hand you a stack of code, purpose-built for how your company actually works, and yours to keep.
          </p>
        </div>

        {/* Differentiator grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {POINTS.map((p) => (
            <DifferentiatorCard key={p.title} point={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorCard({ point }: { point: Differentiator }) {
  const Icon = point.icon;
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-surface-raised/40 p-7 md:p-8 transition-all duration-300 hover:border-kratos-500/40 hover:bg-surface-raised/70 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-kratos-500/0 group-hover:bg-kratos-500/10 blur-3xl transition-colors duration-500"
      />
      <div className="relative flex items-start gap-5">
        <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kratos-500/15 text-kratos-300 group-hover:bg-kratos-500/25 group-hover:text-kratos-200 transition-colors">
          <Icon className="w-5 h-5" strokeWidth={1.6} />
        </div>
        <div>
          <h3 className="font-display text-white text-xl md:text-2xl leading-tight">
            {point.title}
          </h3>
          <p className="text-white/55 text-sm md:text-base leading-relaxed mt-3">
            {point.body}
          </p>
        </div>
      </div>
    </article>
  );
}
