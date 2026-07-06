"use client";

import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, mapping current systems, and identifying where engineering can move the needle. No assumptions, just questions, data, and a clear scope.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "We design end-to-end: data model, tech stack, integration surface, deployment topology. You get a written architecture doc and a working prototype before we write production code.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Weekly demos, transparent progress, and direct access to me, the person writing the code. You see exactly what's shipping each week, and we course-correct fast when reality diverges from the spec.",
  },
  {
    number: "04",
    title: "Launch & Operate",
    description:
      "I deploy, instrument, and hand over with documentation that doesn't lie. Optional operate-and-evolve retainer for businesses that want to keep shipping after launch.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  // Progress = 0 when section's top enters 70% from viewport top
  //          = 1 when section's bottom passes 30% from viewport top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.3"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative py-32 px-6 border-t border-white/5 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // PROCESS
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            How we work.
          </h2>
          <p className="text-white/55 text-base md:text-lg mt-5 leading-relaxed">
            Four phases. No vendor lock-in, no surprise scope creep, no &ldquo;we&apos;ll figure it out as we go.&rdquo; You see the plan before we touch your codebase.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl pl-20 md:pl-24">
          {/* Track, neutral */}
          <div
            aria-hidden
            className="absolute left-[14px] md:left-[34px] top-3 bottom-3 w-px bg-white/10"
          />
          {/* Fill, teal, driven by scroll */}
          <motion.div
            aria-hidden
            className="absolute left-[14px] md:left-[34px] top-3 w-px bg-kratos-500 origin-top"
            style={{ height: fillHeight }}
          />

          {STEPS.map((step, i) => (
            <ProcessStepRow
              key={step.number}
              step={step}
              isLast={i === STEPS.length - 1}
              activeThreshold={(i + 0.5) / STEPS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProcessStepRowProps {
  step: ProcessStep;
  isLast: boolean;
  activeThreshold: number;
  scrollYProgress: MotionValue<number>;
}

function ProcessStepRow({
  step,
  isLast,
  activeThreshold,
  scrollYProgress,
}: ProcessStepRowProps) {
  // Badge fills with teal when the scroll fill line reaches its threshold.
  const fillOpacity = useTransform(
    scrollYProgress,
    [activeThreshold - 0.05, activeThreshold + 0.05],
    [0, 1]
  );

  return (
    <div className={`relative ${isLast ? "" : "mb-16"}`}>
      {/* Badge, sits on the track line */}
      <div className="absolute -left-20 md:-left-24 top-0">
        <div className="relative w-[34px] h-[34px] rounded-full bg-surface-sunken border border-white/15 flex items-center justify-center overflow-hidden">
          <motion.div
            aria-hidden
            style={{ opacity: fillOpacity }}
            className="absolute inset-0 rounded-full bg-kratos-500/25 border border-kratos-500/60"
          />
          <span className="relative font-mono text-[11px] text-white/75">
            {step.number}
          </span>
        </div>
      </div>

      <div>
        <h3 className="font-display text-white text-2xl md:text-3xl leading-tight">
          {step.title}
        </h3>
        <p className="text-white/55 text-base mt-3 leading-relaxed max-w-2xl">
          {step.description}
        </p>
      </div>
    </div>
  );
}
