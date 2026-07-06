"use client";

import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

// Placeholder testimonials. Swap with real quotes from past clients before launch.
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Kratos shipped what three vendors had told us was a 6-month build. The system pays for itself every month we don't pay for the SaaS it replaced.",
    name: "Operations Lead",
    role: "Logistics company, Nairobi",
    initials: "OL",
  },
  {
    quote:
      "We talk to the people writing the code, every week. That alone changed how fast we could course-correct.",
    name: "Founder",
    role: "Health-tech startup",
    initials: "FT",
  },
  {
    quote:
      "The dashboards aren't just pretty. They surface the operational decisions we actually had to make.",
    name: "Managing Director",
    role: "Real-estate platform",
    initials: "MD",
  },
];

const STATS = [
  { value: "10+", label: "Production systems shipped" },
  { value: "<60s", label: "First-response SLA on Acquisition OS" },
  { value: "100%", label: "Code ownership stays with the client" },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-32 px-6 border-t border-white/5 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // PROOF
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:items-end">
          <h2 className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            Built with operators who run real businesses.
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed lg:max-w-md lg:justify-self-end">
            Quotes are anonymised while I collect formal approvals. Numbers reflect production deployments, not estimates.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-6 py-8 text-center sm:text-left"
            >
              <div className="font-display text-white text-4xl md:text-5xl tracking-[-0.02em]">
                {s.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative rounded-2xl border border-white/10 bg-surface-raised/40 p-7 transition-colors hover:border-kratos-500/40 hover:bg-surface-raised/70 flex flex-col">
      <Quote
        className="absolute top-5 right-5 w-6 h-6 text-kratos-500/30"
        strokeWidth={1.5}
      />
      <p className="text-white/80 text-base leading-relaxed pr-6 flex-1">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-kratos-500/15 text-kratos-300 flex items-center justify-center font-mono text-[11px] uppercase tracking-wider">
          {testimonial.initials}
        </div>
        <div>
          <div className="text-white text-sm font-medium">{testimonial.name}</div>
          <div className="text-white/45 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </article>
  );
}
