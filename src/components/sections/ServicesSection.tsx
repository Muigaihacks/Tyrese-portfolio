"use client";

import {
  ArrowUpRight,
  Boxes,
  Cloud,
  Database,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

interface ServicePillar {
  icon: LucideIcon;
  name: string;
  blurb: string;
  bullets: string[];
  tags: string[];
}

const PILLARS: ServicePillar[] = [
  {
    icon: Boxes,
    name: "Software Engineering",
    blurb:
      "Production-grade web platforms, mobile apps, and internal systems, engineered to last.",
    bullets: [
      "Full-stack web (React, Next.js, Vue, Laravel, Django)",
      "Mobile apps (React Native, Flutter)",
      "Custom internal tools & admin systems",
      "Payment integrations (M-Pesa Daraja, Stripe, Flutterwave)",
    ],
    tags: ["Next.js", "React Native", "Laravel", "Django"],
  },
  {
    icon: Sparkles,
    name: "AI & Machine Learning",
    blurb:
      "From custom models trained on your data to LLM-powered workflows that compound expertise.",
    bullets: [
      "Custom model development & fine-tuning",
      "LLM integration & RAG systems",
      "Computer vision & document AI",
      "Production deployment & monitoring",
    ],
    tags: ["PyTorch", "TensorFlow", "OpenAI", "LangChain"],
  },
  {
    icon: Cloud,
    name: "Cloud Infrastructure",
    blurb:
      "Deploy, scale, and operate workloads across AWS, GCP, and Azure, without breaking the bill.",
    bullets: [
      "Multi-cloud deployment (AWS, GCP, Azure)",
      "Kubernetes & Docker orchestration",
      "CI/CD pipelines, observability, IaC (Terraform)",
      "Managed databases (Postgres, Mongo, Redis)",
    ],
    tags: ["AWS", "Kubernetes", "Terraform", "Postgres"],
  },
  {
    icon: Workflow,
    name: "Automation Systems",
    blurb:
      "Replace repetitive work with workflows that run themselves, and learn as your business grows.",
    bullets: [
      "n8n & custom workflow engines",
      "AI chatbots & customer-facing agents",
      "Bulk SMS, email, and notification pipelines",
      "End-to-end business process automation",
    ],
    tags: ["n8n", "OpenAI", "Twilio", "Africa's Talking"],
  },
  {
    icon: Database,
    name: "Data Engineering",
    blurb:
      "Pipelines, warehouses, and analytics that turn scattered data into decisions you can defend.",
    bullets: [
      "ETL & streaming pipelines",
      "Data annotation & labelling for ML",
      "BI dashboards (Metabase, Looker, Superset)",
      "Warehousing & lakehouse architecture",
    ],
    tags: ["Airflow", "dbt", "BigQuery", "Metabase"],
  },
  {
    icon: ShieldCheck,
    name: "Cybersecurity",
    blurb:
      "Threat modeling, hardening, and pentesting, production-grade software has to be secure.",
    bullets: [
      "Threat modeling & security audits",
      "Penetration testing & red-team exercises",
      "Firewall, WAF, and zero-trust setup",
      "SIEM & incident response playbooks",
    ],
    tags: ["Burp Suite", "Wireshark", "Nessus", "OWASP"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 border-t border-white/5 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // SERVICES
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            Six pillars. One studio.
          </h2>
          <p className="text-white/55 text-base md:text-lg mt-5 leading-relaxed">
            We&apos;re a full-stack consultancy, from the database schema to the deployment pipeline to the AI workflow that runs on top of it. Every pillar is in-house.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <ServiceCard key={p.name} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ pillar }: { pillar: ServicePillar }) {
  const Icon = pillar.icon;
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-surface-raised/40 p-6 transition-all duration-300 hover:border-kratos-500/40 hover:-translate-y-1 hover:bg-surface-raised/70 overflow-hidden">
      {/* Subtle hover gradient */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(31,142,134,0.10), transparent 60%)",
        }}
      />

      <div className="relative">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-kratos-500/15 text-kratos-300 group-hover:bg-kratos-500/25 group-hover:text-kratos-200 transition-colors">
          <Icon className="w-5 h-5" strokeWidth={1.6} />
        </div>

        {/* Name */}
        <h3 className="font-display text-white text-xl mt-5 leading-tight">
          {pillar.name}
        </h3>

        {/* Blurb */}
        <p className="text-white/50 text-sm leading-relaxed mt-2">
          {pillar.blurb}
        </p>

        {/* Bullets */}
        <ul className="mt-5 space-y-2">
          {pillar.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-[13px] text-white/65 leading-relaxed"
            >
              <span className="text-kratos-400 mt-[2px] flex-shrink-0">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-white/5">
          {pillar.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-md font-mono text-[10px] uppercase tracking-wider text-white/40 bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/#contact"
          className="inline-flex items-center gap-1 mt-5 text-[12px] font-medium text-kratos-300 hover:text-kratos-200 transition-colors group/cta"
        >
          <span>Start a project</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
