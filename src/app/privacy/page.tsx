import type { Metadata } from "next";
import LegalPageShell from "@/components/legal/LegalPageShell";
import LegalMarkdownBody from "@/components/legal/LegalMarkdownBody";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Kratos Systems processes personal data in line with Kenyan law (KDPA) and ODPC expectations.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated="27 May 2026">
      <LegalMarkdownBody slug="privacy" />
    </LegalPageShell>
  );
}
