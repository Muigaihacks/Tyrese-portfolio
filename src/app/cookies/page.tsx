import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Kratos Systems uses cookies and similar technologies consistent with Kenyan data protection expectations.",
};

export default function CookiesPage() {
  return (
    <LegalPageShell title="Cookie Policy" lastUpdated="24 May 2026">
      <section>
        <p>
          Cookies, pixels, SDK local storage echoes, comparable HTML5 caches and network tokens may constitute
          or contribute to identifiers treated as{" "}
          <strong className="text-white">personal data</strong> under Kenya’s KDPA especially when aggregated
          with logs or stitched cross-session. ODPC thematic guidance urges transparency granularity rights
          and minimisation—we align structurally awaiting your auditor sign-off on production inventories.
        </p>
      </section>

      <section>
        <h2>1. What we deploy today (baseline)</h2>

        <h3>Strictly necessary</h3>
        <ul className="!mt-2">
          <li>
            <strong className="text-white">Consent memory:</strong> localStorage slot{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[13px]">kratos_cookie_consent_v1</code>{" "}
            records your banner decision so we do not re-prompt every navigation event.
          </li>
          <li>
            <strong className="text-white">Security / resilience:</strong> edge / origin headers,
            antifraud rate limits ephemeral session integrity tokens unrelated to behavioural marketing.
          </li>
        </ul>

        <h3>Functional / preference (minimal)</h3>
        <p>
          Persisted typography or accessibility toggles stored locally only if shipped—currently none mandated
          on marketing shell.
        </p>

        <h3>Optional analytics</h3>
        <p>
          No third-party behavioural marketing pixels load by default unless you later embed them behind the{" "}
          <strong>"Accept all disclosed"</strong> branch—we will catalogue names, expiry, processors, lawful
          base, revocation route before activating.
        </p>
      </section>

      <section>
        <h2>2. Lawful bases & consent management</h2>
        <p>
          KDPA distinguishes compatible grounds—strict necessities lean on contractual / security legitimate
          interest foundations; discretionary analytics/marketing hinge on affirmative opt-in granular where
          practicable evidenced by banners plus preference centre once implemented storing audit trail timestamps
          user agent snapshot minimised hashed where feasible—not legal advice tailoring.
        </p>
      </section>

      <section>
        <h2>3. Third-party embedding</h2>
        <p>
          Inline iframes (YouTube previews, Maps, calendars) load third-party controllers under their cookie
          policies—pause autoplay trackers until user interaction or consent upgrade per design pattern we
          implement iteratively counsellor-reviewed.
        </p>
      </section>

      <section>
        <h2>4. Browser rejection & revocation</h2>
        <p>
          Visitors may purge site data via browser tooling (Chrome &gt; Privacy &gt; Cookies). Our banner
          reappears resetting choice—later we expose an in-dashboard preference revocation micro UI.
        </p>
      </section>

      <section>
        <h2>5. Data retention on device</h2>
        <p>
          Except consent JSON short TTL optional analytics ephemeral server logs rotate per infra schedule
          documented infra runbooks aligning internal retention annex cross-linked Privacy Policy retention
          headings.
        </p>
      </section>

      <section>
        <h2>6. Cross-border disclosures</h2>
        <p>
          Embedding global CDNs transports technical metadata—mirrors transfer governance block in Privacy
          Policy supplemented by DPIA artefacts for high risk profiles.
        </p>
      </section>

      <section>
        <h2>7. Children</h2>
        <p>This marketing surface not aimed at minors—no incentivised juvenile tracking.</p>
      </section>

      <section>
        <h2>8. Contact & complaints</h2>
        <p>
          Queries:{" "}
          <a href="mailto:privacy@kratossystems.africa">privacy@kratossystems.africa</a>. Supervisory escalation:{" "}
          <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer">
            ODPC
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}
