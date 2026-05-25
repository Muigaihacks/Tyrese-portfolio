import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing access to Kratos Systems websites and standard professional services engagements governed by Kenyan law.",
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Service" lastUpdated="24 May 2026">
      <section>
        <p>
          These Terms of Service ("<strong>Terms</strong>") govern general access and use of the public
          website(s) branded <strong>Kratos Systems</strong> and prescribe default commercial frames for
          software engineering consultancy or related deliverables absent a superseding Statement of Work
          (<strong>SOW</strong>) physically or electronically countersigned incorporating priority clauses.
          They are construed under the <strong>Laws of the Republic of Kenya</strong>; exclusive Kenyan
          courts in <strong>Nairobi</strong> hold subject-matter competence unless mutually elevated
          arbitration is signed elsewhere.
        </p>
      </section>

      <section>
        <h2>1. Acceptance & evolution</h2>
        <p>
          Visiting, browsing newsletter subscription, initiating contact demos or downloading artefacts
          implies informed acceptance plus cookie choices defined in{" "}
          <a href="/cookies">Cookies Policy</a>. We revise Terms—continued substantive use after conspicuous
          notice equals acceptance absent timely objection cancelling future optional modules.
        </p>
      </section>

      <section>
        <h2>2. Eligibility</h2>
        <p>
          You affirm capacity to bind your organisation—not individuals under 18 unassisted—or that a
          statutory guardian empowers educational outreach engagements.
        </p>
      </section>

      <section>
        <h2>3. Services description — informational layer</h2>
        <p>
          Portfolio case studies summarise historical engineering—we do{" "}
          <strong className="text-white">not</strong> promise identical latency, SLA, licences, uptime, ROI,
          timelines, integrations, approvals, licences, visas, tariffs, telecom routing, treasury rules,
          or third-party behavioural reliability. Binding SLAs emerge only executed SOWs / MSAs.
        </p>
      </section>

      <section>
        <h2>4. Client obligations cooperation</h2>
        <p>
          Productive delivery depends on stakeholders supplying timely artefacts: API keys (least privilege),
          test accounts scrubbed datasets, stakeholder availability, lawful marketing consents upstream,
          change-control discipline, escalation paths—we may pause timelines if blocked credibly notifying
          in writing without waiving accrued fees milestone-based.
        </p>
      </section>

      <section>
        <h2>5. Intellectual property</h2>
        <p>
          Public site copyrights, typography, shaders, orbital artwork, codebase derivatives remain Kratos
          unless OSS licences stated. Paid deliverables: IP assignment/licensing specified per SOW (often
          source code assigns post payment milestones while library boilerplate licences remain ours or
          MIT stack). Moral waivers Kenyan Copyright Act-aligned after counsel review.
        </p>
      </section>

      <section>
        <h2>6. Confidentiality</h2>
        <p>
          Each party protects non-public technical or strategic information using reasonable secrecy for
          three (3) rolling years—or duration SOW dictates—subject to lawful disclosure subpoenas prompting
          notice where allowed.
        </p>
      </section>

      <section>
        <h2>7. Fees, expenses, taxation</h2>
        <p>
          Quoted Kenyan Shilling (<strong>KES</strong>) or invoiced convertible USD equivalents per mutually
          agreed FX tables; VAT applicability follows Finance Act—you supply tax certificates timely.
          Reimbursed travel only pre-authorised evidenced receipts.
        </p>
      </section>

      <section>
        <h2>8. Warranties & disclaimers</h2>
        <p>
          Services supplied <strong>"as-is"</strong> maximum extent Kenyan consumer law admits for B2B
          contexts—merchantability / fitness disclaimers notwithstanding non-excludable implied duties.
          Experimental AI outputs require human supervisory validation—clients assume domain compliance
          regimes (financial, health advertising, telecommunications).
        </p>
      </section>

      <section>
        <h2>9. Liability cap ladder</h2>
        <p>
          Aggregate liability (contract / tort statutory) capped at{" "}
          <strong className="text-white">fees paid six (6) months preceding claim event</strong> unless
          fraud wilful misconduct personal injury undeniable—then Kenyan limits govern. Neither side liable
          for indirect / consequential speculative damages category subject to Kenyan jurisprudence
          sharpening—your counsel adjusts numeric bands.
        </p>
      </section>

      <section>
        <h2>10. Indemnities</h2>
        <p>
          Mutual narrow indemnities: Client indemnifies ingestion of infringing training seeds / credentials
          / marketing claims supplied; Kratos indemnifies direct damages from wilful reuse of unauthorised GPL
          viral artefacts when proven post audit.
        </p>
      </section>

      <section>
        <h2>11. Suspension termination</h2>
        <p>
          Cure windows for breaches (default 14 business days materially). Non-payment milestone pause with
          reactivation surcharge. Survival: confidentiality accrued payment IP licences narrow privacy
          accrued audit rights indemnities limitation liability where applicable logically persist.
        </p>
      </section>

      <section>
        <h2>12. Privacy cross-reference</h2>
        <p>
          <a href="/privacy">Privacy Policy</a> is incorporated materially—processors list evolves as stack
          matures aligning KDPA registrations where compulsory thresholds emerge per ODPC Public Notices &
          Gazette instruments.
        </p>
      </section>

      <section>
        <h2>13. Regulatory compliance cooperation</h2>
        <p>
          Each party aligns with Kenyan communications data export anti-bribery competition labour rules;
          AML/KYC if financial flows demand—supplement onboarding packs accordingly.
        </p>
      </section>

      <section>
        <h2>14. Force majeure</h2>
        <p>
          Electricity grid volatility, geopolitical outages, submarine cable disruptions, sanctioned cloud
          region suspensions excuse delay not permanent cancellation—commercially renegotiated timeline.
        </p>
      </section>

      <section>
        <h2>15. Dispute escalation</h2>
        <p>
          Good-faith managerial negotiation (14 days) before filing suit/arbitr seat Nairobi English
          language unless replaced by subscribed institutional rules (CRCICA etc.) negotiated.
        </p>
      </section>

      <section>
        <h2>16. Contact</h2>
        <p>
          Legal ops: <a href="mailto:legal@kratossystems.africa">legal@kratossystems.africa</a> fallback{" "}
          <a href="mailto:hello@kratossystems.africa">hello@kratossystems.africa</a>. Route physical
          Registered Office once letterhead stationery exists.
        </p>
      </section>
    </LegalPageShell>
  );
}
