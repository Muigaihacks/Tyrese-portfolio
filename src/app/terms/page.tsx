import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";
import LegalMarkdownBody from "@/components/legal/LegalMarkdownBody";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing access to Kratos Systems websites and professional services engagements.",
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Service" lastUpdated="27 May 2026">
      <p className="text-[15px] leading-[1.7] text-white/70 -mt-4 mb-8">
        You can also download a PDF copy:{" "}
        <a
          href="/legal/terms-of-service.pdf"
          download
          className="text-kratos-300 underline underline-offset-2 hover:text-kratos-200"
        >
          Terms of Service (PDF)
        </a>
        .
      </p>
      <LegalMarkdownBody slug="terms" />
    </LegalPageShell>
  );
}
