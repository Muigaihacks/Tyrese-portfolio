"use client";

import { Building2, Rocket, UserCircle2, type LucideIcon } from "lucide-react";

interface Audience {
  icon: LucideIcon;
  name: string;
  pitch: string;
  bullets: string[];
}

const AUDIENCES: Audience[] = [
  {
    icon: UserCircle2,
    name: "Founders & Solo Operators",
    pitch:
      "You're shipping fast, juggling everything, and your tooling is held together by spreadsheets and good intentions.",
    bullets: [
      "Custom internal tools that replace ad-hoc spreadsheets",
      "Automated workflows so you stop doing the same task twice",
      "A real website + lead pipeline, deployed in weeks",
    ],
  },
  {
    icon: Rocket,
    name: "Startups",
    pitch:
      "You've validated the idea. Now you need engineering that scales with you, not a stack you'll rewrite at Series A.",
    bullets: [
      "Product engineering across web, mobile, and backend",
      "Cloud architecture that grows from 100 to 100k users",
      "Data + AI capabilities baked into the platform, not bolted on",
    ],
  },
  {
    icon: Building2,
    name: "Established Businesses",
    pitch:
      "You've got revenue and a tangle of off-the-shelf software. I replace it with a unified system you actually own.",
    bullets: [
      "Custom CRM/ERP replacing per-seat SaaS subscriptions",
      "Legacy modernization without ripping out what works",
      "Security audits, compliance, and operational hardening",
    ],
  },
];

export default function WhoWeServeSection() {
  return (
    <section
      id="clients"
      className="relative py-32 px-6 border-t border-white/5 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // WHO WE SERVE
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            Built for businesses that take software seriously.
          </h2>
          <p className="text-white/55 text-base md:text-lg mt-5 leading-relaxed">
            Whether you&apos;re a founder shipping your first product, a startup scaling fast, or an established business replacing legacy systems, the engineering bar is the same.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {AUDIENCES.map((a) => (
            <AudienceCard key={a.name} audience={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({ audience }: { audience: Audience }) {
  const Icon = audience.icon;
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-surface-raised/40 p-7 transition-all duration-300 hover:border-kratos-500/40 hover:bg-surface-raised/70 overflow-hidden flex flex-col">
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(31,142,134,0.10), transparent 60%)",
        }}
      />
      <div className="relative flex-1">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-kratos-500/15 text-kratos-300 group-hover:bg-kratos-500/25 group-hover:text-kratos-200 transition-colors">
          <Icon className="w-5 h-5" strokeWidth={1.6} />
        </div>
        <h3 className="font-display text-white text-xl mt-5 leading-tight">
          {audience.name}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mt-3">
          {audience.pitch}
        </p>
        <ul className="mt-5 space-y-2.5">
          {audience.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-[13px] text-white/65 leading-relaxed"
            >
              <span className="text-kratos-400 mt-[2px] flex-shrink-0">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
