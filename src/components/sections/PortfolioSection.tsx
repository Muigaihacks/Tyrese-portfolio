"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, Play } from "lucide-react";

interface Project {
  index: string;
  name: string;
  year: string;
  category: string;
  blurb: string;
  description: string;
  role: string;
  highlights: string[];
  stack: string[];
  /** Primary CTA (usually contact anchor) */
  href: string;
  /** Two CSS gradient stops when `imageSrc` is absent */
  gradient: [string, string];
  /** Public path under /public, from legacy portfolio exports */
  imageSrc?: string;
  /** Opens in new tab, production product URL */
  liveUrl?: string;
  /** e.g. YouTube demo, opens in new tab */
  demoVideoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "GlycoSafe",
    year: "2024",
    category: "AI · Health",
    blurb: "AI-assisted diabetes care platform.",
    description:
      "A patient-facing health platform that turns continuous glucose data into actionable guidance. Custom ML models flag risk windows, generate personalised meal and activity suggestions, and surface trends in plain language so patients and clinicians act on the same page.",
    highlights: [
      "Custom ML model for glucose trend prediction",
      "Patient + clinician dashboards in one platform",
      "Personalised meal and activity recommendations",
      "Audit-ready clinical event log",
    ],
    stack: ["Flutter", "Next.js", "Python", "PyTorch", "Postgres", "AWS"],
    role: "Data Engineer & UI/UX Contributor",
    href: "/#contact",
    gradient: ["#1F8E86", "#125652"],
    imageSrc: "/glycosafecard.jpg",
    liveUrl: "https://glycosafe.jhubafrica.com",
    demoVideoUrl: "https://youtu.be/LS817Ood-0A?si=ivn-ujEsP2O6dsuY",
  },
  {
    index: "02",
    name: "Acquisition OS",
    year: "2026",
    category: "Internal Tools · Automation",
    blurb: "Lead-to-Booking Operating System.",
    description:
      "An internal operating system that ingests inquiries from every channel, qualifies them with AI, schedules first response in under 60 seconds, and runs the full pipeline through to booking. Built as deployable architecture, not a form builder. Dashboards, APIs, and n8n automations stay in lockstep with one normalised lead model.",
    highlights: [
      "Universal multi-channel ingest with dedupe",
      "AI-assisted qualification using GPT-4o-mini",
      "n8n automation backbone with secure server-to-server auth",
      "Cal.com / WhatsApp / SendGrid / Slack integrations",
    ],
    stack: ["Next.js 15", "Node", "TypeScript", "Prisma", "Postgres", "n8n", "OpenAI"],
    role: "Sole Engineer: Architecture, Build & Deployment",
    href: "/#contact",
    gradient: ["#34A89F", "#0E403D"],
    liveUrl: "https://acquisition-os.agency",
  },
  {
    index: "03",
    name: "Ashgate",
    year: "2025",
    category: "Real Estate · Marketplace",
    blurb: "End-to-end property ecosystem for East Africa.",
    description:
      "A full-stack real estate platform covering listings, communities, news, and property management. Advanced listings carry 3D virtual tours and floor plans. A vetted expert network keeps users on platform from due diligence to landscaping. The roadmap layers in M-Pesa rent collection and property development advisory.",
    highlights: [
      "3D virtual tours + floor plan integration",
      "Vetted expert community (legal, utilities, staging)",
      "News & Insights educative hub",
      "M-Pesa rent collection on the roadmap",
    ],
    stack: ["Next.js", "Laravel", "GCP", "Postgres", "M-Pesa Daraja"],
    role: "Sole Engineer: Architecture, Build & Deployment",
    href: "/#contact",
    gradient: ["#5FC0B8", "#176F69"],
    imageSrc: "/ashgate-card.jpg",
    liveUrl: "https://www.ashgate.co.ke",
  },
  {
    index: "04",
    name: "SmartPOS",
    year: "2023",
    category: "Retail · Point of Sale",
    blurb: "Multi-store POS with supermarket-style loyalty.",
    description:
      "A retail point-of-sale and back-office platform built for Kenyan shops and growing chains. The architecture is multi-tenant: an owner with two, three, or more stores runs every location from one dashboard, with inventory, sales, staff, and reporting without switching systems. Checkout is M-Pesa-first with offline-capable terminals. A smart loyalty engine lets customers earn bonus reward points on every purchase and redeem them at the till, the way supermarkets do.",
    highlights: [
      "Multi-store management from a single owner dashboard",
      "Multi-tenant architecture: one business, many locations",
      "Intelligent loyalty points: earn on purchase, redeem at checkout",
      "M-Pesa STK Push checkout at point of sale",
      "Stock control, reordering, and cross-store reporting",
    ],
    stack: ["Django", "Django Unfold", "AWS", "PostgreSQL", "M-Pesa Daraja"],
    role: "Sole Engineer: Architecture, Build & Deployment",
    href: "/#contact",
    gradient: ["#94D6D0", "#0A2B29"],
    imageSrc: "/liqourstorecardprofile.png",
    liveUrl: "https://liqourstoresystem.onrender.com",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-32 px-6 border-t border-white/5 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // PORTFOLIO
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="max-w-3xl mb-20">
          <h2 className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            Selected work.
          </h2>
          <p className="text-white/55 text-base md:text-lg mt-5 leading-relaxed">
            A handful of the systems I&apos;ve put into production. Each one was designed around a specific business problem and shipped for the team that runs it.
          </p>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.index} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const hasImage = Boolean(project.imageSrc);

  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative group">
        <div
          className={`aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative ${
            !hasImage ? "" : ""
          }`}
          style={
            !hasImage
              ? {
                  background: `linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`,
                }
              : undefined
          }
        >
          {hasImage && project.imageSrc ? (
            <>
              <Image
                src={project.imageSrc}
                alt={`${project.name} preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"
              />
              <span className="absolute inset-0 flex items-center justify-center font-display text-white/[0.08] text-[clamp(6rem,14vw,12rem)] leading-none select-none pointer-events-none">
                {project.index}
              </span>
              <div
                aria-hidden
                className="absolute inset-0 opacity-25 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.18),transparent_55%)]"
              />
            </>
          ) : (
            <>
              <span className="absolute inset-0 flex items-center justify-center font-display text-white/15 text-[clamp(8rem,18vw,16rem)] leading-none select-none">
                {project.index}
              </span>
              <div
                aria-hidden
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%)",
                }}
              />
            </>
          )}

          <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] flex items-center gap-2">
            <span>{project.index}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300 mb-4">
          <span>{project.index}</span>
          <span className="h-px w-6 bg-kratos-300/40" />
          <span className="text-white/40">{project.category}</span>
        </div>
        <h3 className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]">
          {project.name}
        </h3>
        <p className="text-kratos-200 text-base md:text-lg mt-3 italic">
          {project.blurb}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 mt-3">
          Role: {project.role}
        </p>
        <p className="text-white/55 text-base mt-5 leading-relaxed max-w-xl">{project.description}</p>

        <ul className="mt-6 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13px] text-white/70 leading-relaxed">
              <span className="text-kratos-400 mt-[2px] flex-shrink-0">→</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-6">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-md font-mono text-[10px] uppercase tracking-wider text-white/45 bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Date line under stack, explicit for accessibility / clarity */}
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
          Shipped · {project.index} · {project.year}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center">
          <a
            href={project.href}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-kratos-300 hover:text-kratos-200 transition-colors group/cta"
          >
            <span>Discuss a similar project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/85 hover:text-kratos-200 border border-white/15 hover:border-kratos-500/45 rounded-full px-4 py-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live system
            </a>
          ) : null}

          {project.demoVideoUrl ? (
            <a
              href={project.demoVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/85 hover:text-kratos-200 border border-white/15 hover:border-white/25 rounded-full px-4 py-2 transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
              Demo video
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
