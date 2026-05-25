/** Preliminary legal notice — KDPA-aligned drafts require qualified Kenyan counsel before reliance. */

export default function LegalDisclaimer() {
  return (
    <aside
      role="note"
      className="rounded-2xl border border-amber-500/35 bg-amber-500/[0.07] px-5 py-4 text-[13px] leading-relaxed text-amber-100/90 mb-10"
    >
      <strong className="font-semibold text-amber-200">Important:</strong> these documents are
      working drafts informed by the{" "}
      <span className="text-white font-medium">
        Kenya Data Protection Act, 2019 (KDPA)
      </span>{" "}
      and guidance published by the{" "}
      <span className="text-white font-medium">
        Office of the Data Protection Commissioner (ODPC)
      </span>
      . They are <strong>not</strong> legal advice. Kratos Systems should instruct a Kenyan
      advocate/legal team to review alignments with current ODPC registrations, contractual
      terms, processors, transfers, sector rules, and your actual data flows prior to relying on
      them commercially.
    </aside>
  );
}
