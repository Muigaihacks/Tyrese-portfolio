"use client";

import type { IconType } from "react-icons";
import {
  SiDjango,
  SiDocker,
  SiFlutter,
  SiGooglecloud,
  SiKubernetes,
  SiLangchain,
  SiLaravel,
  SiMetabase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiTwilio,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

interface Tech {
  icon: IconType | null;
  /** Plain-text label for tools without a Si icon. */
  label: string;
}

// Curated tools across all six pillars. ~26 entries total.
const ROW_A: Tech[] = [
  { icon: SiReact,        label: "React" },
  { icon: SiNextdotjs,    label: "Next.js" },
  { icon: SiTypescript,   label: "TypeScript" },
  { icon: SiNodedotjs,    label: "Node.js" },
  { icon: SiPython,       label: "Python" },
  { icon: SiDjango,       label: "Django" },
  { icon: SiLaravel,      label: "Laravel" },
  { icon: SiVuedotjs,     label: "Vue" },
  { icon: SiFlutter,      label: "Flutter" },
  { icon: SiTailwindcss,  label: "Tailwind" },
  { icon: SiOpenai,       label: "OpenAI" },
  { icon: SiPytorch,      label: "PyTorch" },
  { icon: SiTensorflow,   label: "TensorFlow" },
  { icon: SiLangchain,    label: "LangChain" },
];

const ROW_B: Tech[] = [
  { icon: null,           label: "AWS" },
  { icon: SiGooglecloud,  label: "GCP" },
  { icon: SiKubernetes,   label: "Kubernetes" },
  { icon: SiDocker,       label: "Docker" },
  { icon: SiTerraform,    label: "Terraform" },
  { icon: SiVercel,       label: "Vercel" },
  { icon: SiPostgresql,   label: "Postgres" },
  { icon: SiMongodb,      label: "MongoDB" },
  { icon: SiRedis,        label: "Redis" },
  { icon: SiSupabase,     label: "Supabase" },
  { icon: SiTwilio,       label: "Twilio" },
  { icon: SiMetabase,     label: "Metabase" },
  { icon: null,           label: "n8n" },
  { icon: null,           label: "M-Pesa Daraja" },
];

export default function TechnologiesMarquee() {
  return (
    <section
      id="technologies"
      className="relative py-32 border-t border-white/5 bg-surface overflow-hidden"
    >
      {/* Header, kept inside max-width container */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // TECHNOLOGIES
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 lg:items-end">
          <h2 className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            Battle-tested tools we use to ship.
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed lg:max-w-lg lg:justify-self-end">
            We&apos;re tool-agnostic but opinionated. These are the technologies we&apos;ve put into production most often, across web, mobile, AI, cloud, and data.
          </p>
        </div>
      </div>

      {/* Marquee rows, edge-to-edge, mask edges to fade into surface */}
      <div
        className="relative space-y-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <MarqueeRow techs={ROW_A} direction="left"  duration={50} />
        <MarqueeRow techs={ROW_B} direction="right" duration={55} />
      </div>
    </section>
  );
}

function MarqueeRow({
  techs,
  direction,
  duration,
}: {
  techs: Tech[];
  direction: "left" | "right";
  duration: number;
}) {
  const animationName =
    direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-center gap-12 w-max group hover:[animation-play-state:paused]"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
        }}
      >
        {[...techs, ...techs].map((t, i) => (
          <TechPill key={`${t.label}-${i}`} tech={t} />
        ))}
      </div>
    </div>
  );
}

function TechPill({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <div className="flex items-center gap-2.5 text-white/45 hover:text-kratos-300 transition-colors duration-200">
      {Icon ? (
        <Icon className="w-5 h-5 flex-shrink-0" />
      ) : (
        <span className="font-mono text-[11px] uppercase tracking-wider border border-current rounded-sm px-1.5 py-0.5">
          {tech.label.split(" ")[0].slice(0, 3)}
        </span>
      )}
      <span className="font-medium text-sm whitespace-nowrap">{tech.label}</span>
    </div>
  );
}
