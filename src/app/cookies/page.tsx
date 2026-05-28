import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";
import LegalMarkdownBody from "@/components/legal/LegalMarkdownBody";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Kratos Systems uses cookies and similar technologies consistent with Kenyan data protection expectations.",
};

export default function CookiesPage() {
  return (
    <LegalPageShell title="Cookie Policy" lastUpdated="27 May 2026">
      <LegalMarkdownBody slug="cookies" />
    </LegalPageShell>
  );
}
