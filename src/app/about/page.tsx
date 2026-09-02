"use client";

import GlassNav from "@/components/GlassNav";
import ScrollToTop from "@/components/ScrollToTop";
import {
  CALENDLY_INTRO_URL,
  COMPANY_EMAIL_DISPLAY,
  PERSONAL_EMAIL_MAILTO,
} from "@/lib/contact-email";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";

const SOCIALS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tyrese-muigai-32a62630b/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/Muigaihacks", label: "GitHub" },
];

const FAQs: { q: string; a: ReactNode }[] = [
  {
    q: "How can I get a quote or consultation?",
    a: (
      <>
        Send a note through the{" "}
        <Link
          href="/#contact"
          className="text-kratos-300 underline underline-offset-2 hover:text-kratos-200"
        >
          contact form
        </Link>
        , reply to emails from{" "}
        <a
          href={PERSONAL_EMAIL_MAILTO}
          className="text-kratos-300 underline underline-offset-2 hover:text-kratos-200"
        >
          {COMPANY_EMAIL_DISPLAY}
        </a>
        , or{" "}
        <a
          href={CALENDLY_INTRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-kratos-300 underline underline-offset-2 hover:text-kratos-200"
        >
          book a 30-minute intro on Calendly
        </a>
        . The first conversation is usually enough to clarify scope and next steps.
      </>
    ),
  },
  {
    q: "How much does website or product work cost?",
    a: (
      <>
        Scope drives cost, so I do not quote from a brochure. Share your goals briefly, then{" "}
        <a
          href={CALENDLY_INTRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-kratos-300 underline underline-offset-2 hover:text-kratos-200"
        >
          book a call
        </a>{" "}
        and I will follow up with a clear, itemized proposal once I understand integrations,
        timelines, and who needs to approve what.
      </>
    ),
  },
  {
    q: "How long does it take to build a website?",
    a: (
      <>
        A focused marketing site is often on the order of two to four weeks once content and
        approvals are in flow. Larger commerce or custom builds take longer depending on
        integrations and compliance checkpoints. Dates are agreed up front so you can plan
        launches and stakeholders without guesswork.
      </>
    ),
  },
  {
    q: "Do you provide hosting, domains, and technical setup?",
    a: (
      <>
        Yes. I can carry domain registration (including common choices around Kenya and global
        zones), cloud hosting, SSL, email setup where needed, and the usual production hygiene
        so you are not glueing providers together alone.
      </>
    ),
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: (
      <>
        I do. Many clients want a steady rhythm for updates, backups, patching, incident
        response, and small enhancements. Packages are scoped to how critical the system is to
        revenue and operations rather than a one-size-fits-all brochure.
      </>
    ),
  },
  {
    q: "What about payment milestones or commercial terms?",
    a: (
      <>
        Typical projects split into phased payments tied to milestones, but the split depends on
        size and risk. We walk through billing and timelines on a discovery call rather than
        pinning numbers in an FAQ so the terms match both sides fairly.
      </>
    ),
  },
  {
    q: "How do you approach data protection and cybersecurity?",
    a: (
      <>
        Cybersecurity has been central to my trajectory, and engineering choices lean toward
        least privilege, sane secrets handling, patching discipline, backups, encryption in
        transit and at rest where it matters, and honest documentation against Kenya&apos;s KDPA
        posture. Contract language should still be reviewed by your lawyer for your industry.
      </>
    ),
  },
  {
    q: "Do you work outside Kenya?",
    a: "Yes. I run the studio from Nairobi and collaborate remotely with teams in other regions while staying explicit about contracting, invoicing, and data jurisdiction expectations.",
  },
  {
    q: "What stack do you standardise on?",
    a: "I'm pragmatic: often TypeScript, Node or similar runtimes, Next.js for suitable web surfaces, PostgreSQL-family data stores, Docker-friendly deployments, plus whatever your regulators or partners insist on integrating with.",
  },
  {
    q: "Can you augment an existing engineering team?",
    a: "Yes. That can look like short audits, hardened delivery on a bottleneck, remediation sprints after an incident, or a fractional technical lead pairing with people you already hired when ownership and rituals are clear.",
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-surface text-white">
      <GlassNav />
      <main className="max-w-3xl lg:max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-20">
        <nav className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300 mb-10">
          <Link href="/" className="hover:text-kratos-200 transition-colors">
            Home
          </Link>
          <span className="text-white/25 mx-2">/</span>
          <span className="text-white/55">About</span>
        </nav>

        <header className="mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // ENGINEER · STUDIO
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em] text-white mt-3 leading-[1.05]">
            The Engineer Behind Kratos
          </h1>
        </header>

        <article className="space-y-6 [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-white/70">
          <p>
            Kratos Systems is a one-person software studio. I&apos;m Tyrese Muigai, a software
            engineer and cloud architect based in Nairobi, Kenya, with a BSc in Computer Science
            from JKUAT.
          </p>
          <p>
            I started Kratos as my professional studio brand and living portfolio, a place to
            ship serious engineering for real businesses instead of building in a vacuum. Every
            system on this site was designed, built, and shipped by me, from the data model to the
            deployment pipeline.
          </p>
          <p>
            My core work sits across three areas: full-stack product engineering, cloud
            infrastructure (Google Cloud certified, AWS in progress), and automation systems that
            replace manual operations with workflows that run themselves.
          </p>
          <p>
            Before I started Kratos, I contributed as a data engineer and UI/UX contributor on
            GlycoSafe, an AI-assisted diabetes care platform built with JHub Africa. In 2021 I was
            a finalist to the{" "}
            <strong className="text-white/88 font-medium">African Leadership Academy</strong> in
            Johannesburg, a milestone that sits alongside a drive to build serious systems on the
            continent and collaborate with multinationals and African conglomerates on ambitious
            builds.
          </p>
          <p>
            Outside of engineering, I&apos;m an active rotaractor at the{" "}
            <strong className="text-white/88 font-medium">Rotary Club of Lavington</strong> and a
            volunteer with the Malindi Red Cross. Recent outreach includes support for{" "}
            <strong className="text-white/88 font-medium">Sunrise of Africa School</strong> in
            Kitengela and sessions at{" "}
            <strong className="text-white/88 font-medium">Zaelyn Academy</strong> in Silanga
            Kibera, Nairobi.
          </p>
        </article>

        {/* Mastercard Foundation Associate */}
        <div className="mt-12 rounded-2xl border border-kratos-500/25 bg-surface-raised/40 p-7 relative overflow-hidden">
          {/* Subtle background accent */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(31,142,134,0.08), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-kratos-500/15 flex items-center justify-center">
                {/* MasterCard-style two-circle mark */}
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden>
                  <circle cx="12" cy="16" r="9" fill="#EB001B" fillOpacity="0.85" />
                  <circle cx="20" cy="16" r="9" fill="#F79E1B" fillOpacity="0.85" />
                  <path d="M16 9.27a9 9 0 0 1 0 13.46A9 9 0 0 1 16 9.27Z" fill="#FF5F00" fillOpacity="0.9" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-display text-white text-lg leading-tight">
                    Mastercard Foundation Associate
                  </h3>
                  <span className="px-2 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-[0.16em] text-kratos-300 bg-kratos-500/15 border border-kratos-500/30">
                    Active · 2026 – Present
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 mb-3">
                  Mastercard Foundation · via Shortlist
                </p>
                <p className="text-[14px] leading-[1.75] text-white/65">
                  Selected as a Mastercard Foundation Associate through the{" "}
                  <strong className="text-white/85 font-medium">Shortlist</strong>{" "}
                  platform to gain hands-on industry experience with leading organisations across Africa and globally.
                  The programme supports emerging professionals through work-integrated learning, remote collaboration,
                  mentorship, and practical experience in real-world business and technology environments.
                </p>
                <p className="text-[14px] leading-[1.75] text-white/65 mt-3">
                  Focused on developing professional, technical, and remote work skills while contributing to impactful
                  projects and organisational goals, building the capacity to thrive in fast-paced, high-stakes
                  technology environments from day one of placement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-white/10 hover:border-kratos-500/50 hover:bg-kratos-500/10 text-white/55 hover:text-kratos-200 flex items-center justify-center transition-all"
              >
                <Icon className="w-5 h-5" strokeWidth={1.6} />
              </a>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row flex-wrap gap-4">
          <Link
            href="/#portfolio"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-kratos-500 hover:bg-kratos-400 text-surface-ink text-[13px] font-semibold transition-colors"
          >
            View portfolio
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/15 hover:border-kratos-500/45 text-[13px] font-medium text-white/90 hover:text-white transition-colors"
          >
            Start a conversation
          </Link>
          <a
            href="/Tyrese_Muigai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/15 hover:border-white/25 text-[13px] font-medium text-white/70 hover:text-white transition-colors"
          >
            Download résumé (PDF)
          </a>
        </div>

        <section className="mt-24 pt-16 border-t border-white/10" id="faqs">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
              // FAQs
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-white mb-10 tracking-[-0.02em]">
            Questions clients usually ask before a first call.
          </h2>

          <div className="space-y-3">
            {FAQs.map((item, index) => (
              <FAQItem
                key={item.q}
                question={item.q}
                answer={item.a}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
              />
            ))}
          </div>

          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[14px] text-white/55">
            <span>Still have questions?</span>
            <a
              href={PERSONAL_EMAIL_MAILTO}
              className="inline-flex items-center gap-2 text-kratos-300 underline underline-offset-[3px] decoration-kratos-500/55 hover:text-kratos-200"
            >
              <span aria-hidden className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-md border border-kratos-500/35 bg-white/[0.03] px-2 font-mono text-[11px] text-kratos-300">
                ?
              </span>
              <span>{COMPANY_EMAIL_DISPLAY}</span>
            </a>
          </p>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={[
        "rounded-2xl border bg-white/[0.02] overflow-hidden transition-colors",
        open
          ? "border-kratos-500/50 shadow-[0_0_0_1px_rgba(94,192,184,0.12)]"
          : "border-white/[0.08]",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={onToggle}
        className={[
          "flex w-full text-left px-4 py-4 sm:px-5 sm:py-4 gap-4 items-start",
          open ? "text-kratos-200" : "text-white hover:bg-white/[0.03]",
          "transition-colors",
        ].join(" ")}
        aria-expanded={open}
      >
        <span
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-mono text-lg leading-none border transition-colors",
            open
              ? "border-kratos-500 bg-kratos-500 text-surface-ink"
              : "border-white/12 bg-white/[0.06] text-kratos-400",
          ].join(" ")}
          aria-hidden
        >
          {open ? "−" : "+"}
        </span>
        <span className="text-[15px] font-semibold leading-snug pt-[7px]">{question}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 pl-[4.75rem] sm:pl-20 text-[14px] leading-relaxed text-white/65 border-t border-white/[0.06] pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}
