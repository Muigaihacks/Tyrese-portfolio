import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Kratos Systems processes personal data in line with Kenyan law (KDPA) and ODPC expectations.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated="24 May 2026">
      <section>
        <p>
          <strong>Kratos Systems</strong> ("Kratos", "we", "us") respects your privacy. This Privacy
          Policy describes how we collect, use, disclose, retain, secure, and provide redress rights
          in connection with{" "}
          <strong className="text-white">personal data</strong>{" "}
          processed through our websites, enquiries, engagements, newsletters, recruiting, marketing,
          billing, communications, cookies, embedded content, integrations, subcontractors, cloud
          services, CRMs and support tools (<strong className="text-white">processing activities</strong>).
        </p>
        <p className="pt-5">
          The primary applicable framework is Kenya’s{" "}
          <abbr title="Kenya Data Protection Act, 2019">KDPA</abbr> and supplementary regulations and
          guidance issued by Kenya’s supervisory authority—the{" "}
          <abbr title="Office of the Data Protection Commissioner">ODPC</abbr>. Where GDPR or other foreign
          rules may apply concurrently (for example transfers or EU-facing clients),           those rules do not reduce the protections below for Kenyan data subjects.
        </p>
      </section>

      <section>
        <h2>1. Data controller identity & contact</h2>
        <p>
          <strong>Controller:</strong> Kratos Systems (commercial name).{" "}
          <strong>Nature:</strong> company / trading name under formation or registration particulars you
          will insert after incorporation and ODPC filings.
        </p>
        <p className="pt-4">
          <strong>Privacy enquiries & data subject requests:</strong>{" "}
          <a href="mailto:privacy@kratossystems.africa">privacy@kratossystems.africa</a>{" "}
          (alternate operational inbox:{" "}
          <a href="mailto:hello@kratossystems.africa">hello@kratossystems.africa</a>). If you nominate a formal
          Data Protection Officer (<abbr>DPO</abbr>) or outsourced representative registered with ODPC update
          that title and postal address once confirmed.
        </p>
      </section>

      <section>
        <h2>2. Scope & applicability</h2>
        <p>This policy applies when we act as:</p>
        <ul className="!mt-4">
          <li>
            <strong className="text-white">Independent controller:</strong> e.g., marketing website,
            business development enquiries, invoicing prospects, testimonials, testimonials with consent,
            community channels we operate ourselves.
          </li>
          <li>
            <strong className="text-white">Processor / service collaborator:</strong> when we engineer
            software for clients who remain controllers of{" "}
            <em>their</em> end-user or employee datasets—then supplemental terms in our Master Services /
            NDAs / Statements of Work govern sub-processing, instructions, breaches, deletes, DPIAs/TIAs etc.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Personal data categories we may process</h2>
        <p>Depending on how you interact, we might process categories such as:</p>
        <ul className="!mt-4">
          <li>Identity & professional (name, titles, biography text you supply).</li>
          <li>Contact fields (business email addresses, telephone numbers).</li>
          <li>Message content submitted through forms, email threads, ticketing, chats.</li>
          <li>Marketing preferences, campaign engagement metadata (delivery, opens/clicks).</li>
          <li>Cookies identifiers, approximate location from IP-derived geolocation datasets.</li>
          <li>Billing identifiers (organisation name, invoicing contacts, statutory reference numbers).</li>
          <li>Hiring / subcontracting dossiers (cover letters or CV artefacts you volunteered).</li>
          <li>Security diagnostics (minimal technical logs).</li>
        </ul>
        <p className="pt-4">
          Categories marked <strong className="text-white">special category</strong> (health data, biometric /
          genetics, childrens’ data exceeding trivial collection) arise only{" "}
          <em>explicitly documented</em> with separate consent or another KDPA-compliant ground and
          higher safeguards—including written policies and ODPC-compliant contracts.
        </p>
      </section>

      <section>
        <h2>4. Purposes & lawful bases under the KDPA</h2>
        <p>KDPA section 31 authorises lawful processing upon one or more enumerated grounds—we map typical activities:</p>
        <ul className="!mt-4">
          <li>
            <strong className="text-white">Contract / negotiation:</strong> scoping engagements, proposals,
            SOW onboarding, Statements of Works, SLA monitoring.
          </li>
          <li>
            <strong className="text-white">Legal obligation:</strong> tax bookkeeping, invoicing conformity,
            mandated regulatory correspondence.
          </li>
          <li>
            <strong className="text-white">Legitimate interests:</strong> secure operation, aggregated
            analytics, reputational safeguarding, blacklist fraud prevention balancing tests documented
            internally.
          </li>
          <li>
            <strong className="text-white">Consent:</strong> non-essential cookies, certain marketing /
            testimonials, discretionary newsletter—withdraw anytime without detriment unrelated to goods
            or services contracted.
          </li>
          <li>
            <strong className="text-white">Protecting vital interests / public interest</strong> only in
            narrowly exceptional rescue or statutory crisis scenarios seldom relevant to SaaS brochure sites.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Disclosures & processors</h2>
        <p>
          We may share personal data with cloud infrastructure (Compute, Storage, CDN), transactional email
          (e.g., Resend, SendGrid, Postmark equivalents), ticketing/CRM pipelines, bookkeeping, calendar
          schedulers only under written agreements articulating KDPA-aligned instructions, secrecy,
          confidentiality, assistance on subject rights, audits, subcontractor rules, deletion at contract end—
          and only on a strict need basis.
        </p>
      </section>

      <section>
        <h2>6. Cross-border transfers</h2>
        <p>
          Global clouds may process in regions outside Kenya. Where required we implement KDPA-compliant
          transfer mechanisms—notably adequacy determinations referenced by Kenyan practice, SCC-style
          processor clauses adapted to Kenyan law{" "}
          <em>until</em> formal templates are prescribed or updated by ODPC guidance you must revisit with your
          counsel—and supplementary technical / organisational safeguards (encryption, segregation,
          pseudonymisation) plus transfer impact rationales retained in your records schedule.
        </p>
      </section>

      <section>
        <h2>7. Retention</h2>
        <p>
          Personal data retained only while the purpose persists then minimised archived or erased per
          internal retention annex (contracts 7–10 yrs tax alignment, telemetry logs narrower windows,
          failed marketing unsubscribes marked promptly). Schedules undergo yearly review tied to DPIA-cycle.
        </p>
      </section>

      <section>
        <h2>8. Automated decision-making</h2>
        <p>
          We do not run solely automated lawful / similarly significant adjudications on website visitors today.
          If profiling or autonomous screening systems appear we will disclose logic, rationale, contested
          review human intervention path per KDPA safeguards.
        </p>
      </section>

      <section>
        <h2>9. Technical & organisational security (TOMS)</h2>
        <p>
          Measures include HTTPS transport, salted password hashing inside internal tools, granular access
          control, patching SLAs on dependencies, segregation of staging vs production datasets, MFA on
          admin consoles, pseudonymisation for analytics aggregates, contractual backup encryption at rest.
          Absolute security is impossible—we monitor breach hypotheses and escalate.
        </p>
      </section>

      <section>
        <h2>10. Your rights under the KDPA (data subject tools)</h2>
        <p>You may lodge requests to:</p>
        <ul className="!mt-4">
          <li>Access personal data undergoing processing,</li>
          <li>Rectify inaccurate/incomplete datasets,</li>
          <li>Erase unlawfully retained / disproportionate holdings subject to carve-outs,</li>
          <li>Object restrict or cease incompatible processing,</li>
          <li>
            Receive portability of structured machine-readable subsets you furnished where technically
            feasible,
          </li>
          <li>Withdraw freely given consent (non-retroactively affecting lawful prior processing).</li>
        </ul>
        <p className="pt-4">
          Contact <a href="mailto:privacy@kratossystems.africa">privacy@kratossystems.africa</a> with verified
          identity evidence; we ordinarily respond inside <strong>30 calendar days</strong> unless complexity
          or third-party validations extend lawfully—we will explain any extension citing KDPA-aligned
          practice.
        </p>
      </section>

      <section>
        <h2>11. Complaints to the ODPC</h2>
        <p>
          If unsatisfied escalations after our final position you may escalate to Kenya’s supervisory
          authority— Office of the Data Protection Commissioner. Consult their official complaints channels
          (web form, postal instructions) published at{" "}
          <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer">
            odpc.go.ke
          </a>
          .
        </p>
      </section>

      <section>
        <h2>12. Children's data</h2>
        <p>
          Corporate site not directed at minors. Educational outreach involving children demands parental /
          guardian authority and specialised assessment before collection.
        </p>
      </section>

      <section>
        <h2>13. Evolution of this Policy</h2>
        <p>
          Operational changes, mergers, materially new processors, lawful orders, or rewritten ODPC
          regulations may force updates—we version the heading date and summarise major revisions in archives
          you maintain privately.
        </p>
      </section>
    </LegalPageShell>
  );
}
