"use client";

import GlassNav from "@/components/GlassNav";
import ScrollToTop from "@/components/ScrollToTop";
import {
  CALENDLY_INTRO_URL,
  COMPANY_EMAIL_DISPLAY,
  PERSONAL_EMAIL_MAILTO,
} from "@/lib/contact-email";
import Link from "next/link";
import { useState, type ReactNode } from "react";

const FAQs: { q: string; a: ReactNode }[] = [
  {
    q: "How can I get a quote or consultation?",
    a: (
      <>
        Send a note through the contact form on the home page, reply to emails from{" "}
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
        Scope drives cost, so we do not quote from a brochure. Share your goals briefly, then{" "}
        <a
          href={CALENDLY_INTRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-kratos-300 underline underline-offset-2 hover:text-kratos-200"
        >
          book a call
        </a>{" "}
        and we will follow up with a clear, itemized proposal once we understand integrations, timelines,
        and who needs to approve what.
      </>
    ),
  },
  {
    q: "How long does it take to build a website?",
    a: (
      <>
        A focused marketing site is often on the order of two to four weeks once content and approvals are
        in flow. Larger commerce or custom builds take longer depending on integrations and compliance
        checkpoints. Dates are agreed up front so you can plan launches and stakeholders without guesswork.
      </>
    ),
  },
  {
    q: "Do you provide hosting, domains, and technical setup?",
    a: (
      <>
        Yes. We can carry domain registration (including common choices around Kenya and global zones),
        cloud hosting, SSL, email setup where needed, and the usual production hygiene so you are not glueing
        providers together alone.
      </>
    ),
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: (
      <>
        We do. Many clients want a steady rhythm for updates, backups, patching, incident response, and
        small enhancements. Packages are scoped to how critical the system is to revenue and operations rather
        than a one-size-fits-all brochure.
      </>
    ),
  },
  {
    q: "What about payment milestones or commercial terms?",
    a: (
      <>
        Typical projects split into phased payments tied to milestones, but the split depends on size and risk.
        We walk through billing and timelines on a discovery call rather than pinning numbers in an FAQ so the
        terms match both sides fairly.
      </>
    ),
  },
  {
    q: "How do you approach data protection and cybersecurity?",
    a: (
      <>
        Cybersecurity has been central to Tyrese&apos;s trajectory, and engineering choices lean toward least
        privilege, sane secrets handling, patching discipline, backups, encryption in transit and at rest
        where it matters, and honest documentation against Kenya&apos;s KDPA posture. Contract language should
        still be reviewed by your lawyer for your industry.
      </>
    ),
  },
  {
    q: "Do you work outside Kenya?",
    a: "Yes. The studio runs from Nairobi and collaborates remotely with teams in other regions while staying explicit about contracting, invoicing, and data jurisdiction expectations.",
  },
  {
    q: "What stack do you standardise on?",
    a: "We are pragmatic: often TypeScript, Node or similar runtimes, Next.js for suitable web surfaces, PostgreSQL-family data stores, Docker-friendly deployments, plus whatever your regulators or partners insist on integrating with.",
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
            // FOUNDER · STUDIO
          </span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em] text-white mt-3 leading-[1.05]">
            Engineering discipline, Nairobi roots, global ambitions.
          </h1>
        </header>

        <article className="space-y-6 [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-white/70">
          <p>
            Kratos Systems is led by Tyrese Muigai, the sole founder. The through line is straightforward:
            ambiguous specs become traceable milestones, leaky abstractions get refactored before they spread,
            and data handling is engineered with Kenyan compliance expectations in sight (KDPA-aware defaults,
            pragmatic logging, and retention that matches what regulators and customers actually ask for).
          </p>
          <p>
            The story begins with cybersecurity. That interest came first and never really left.
            Along the way the work leaned hard into shipping software properly, cloud infrastructure matured in
            parallel, and delivery became stronger because infra and application concerns were tied together
            instead of treated like separate errands.
          </p>
          <p>
            In 2021 Tyrese was a finalist to the{" "}
            <strong className="text-white/88 font-medium">African Leadership Academy</strong> in Johannesburg,
            South Africa. That milestone sits alongside a simple drive: build serious systems on the continent,
            then keep pushing outward with the same energy. Tyrese is actively motivated to work past the usual
            ceiling, earn a seat at bigger tables, and collaborate on serious builds with{" "}
            <strong className="text-white/88 font-medium">multinationals</strong> and{" "}
            <strong className="text-white/88 font-medium">African conglomerates</strong>, not as a distant dream
            but as a deliberate next chapter of the work.
          </p>
          <p>
            Outside billable depth, Tyrese contributes through{" "}
            <strong className="text-white/88 font-medium">Rotary Club of Lavington</strong>. Recent projects include
            support for{" "}
            <strong className="text-white/88 font-medium">Sunrise of Africa School</strong> in Kitengela, where Rotarians
            brought supplies alongside the school&apos;s own push toward sustainability, including growing food locally and
            a greenhouse on site. Separately there was outreach at{" "}
            <strong className="text-white/88 font-medium">Zaelyn Academy</strong> in Silanga Kibera, Nairobi, talking with
            young teens about confidence and follow-through while providing stationery and lunch for the afternoon.
          </p>
          <p>
            That ethos carries into engagements where AI assists rather than masks weak data modeling, inbound
            automations respect truthful CRM records, dashboards reflect operational reality, and infra choices respect
            how cost curves behave as ambitious businesses scale inside Africa and beyond.
          </p>
        </article>

        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <a
            href="/Tyrese_Muigai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-kratos-500 hover:bg-kratos-400 text-surface-ink text-[13px] font-semibold transition-colors"
          >
            Download résumé (PDF)
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/15 hover:border-kratos-500/45 text-[13px] font-medium text-white/90 hover:text-white transition-colors"
          >
            Start a conversation
          </Link>
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
