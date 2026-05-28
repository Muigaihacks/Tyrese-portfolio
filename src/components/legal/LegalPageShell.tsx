import type { ReactNode } from "react";
import Link from "next/link";
import GlassNav from "@/components/GlassNav";
import ScrollToTop from "@/components/ScrollToTop";

interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

/**
 * Minimal shell for KDPA-aligned legal pages plus marketing chrome.
 */
export default function LegalPageShell({
  title,
  lastUpdated,
  children,
}: LegalPageShellProps) {
  return (
    <div className="min-h-screen bg-surface text-white">
      <GlassNav />
      <main className="max-w-3xl mx-auto px-6 pt-28 md:pt-36 pb-20">
        <nav className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300 mb-8">
          <Link href="/" className="hover:text-kratos-200 transition-colors">
            Home
          </Link>
          <span className="text-white/25 mx-2">/</span>
          <span className="text-white/55">{title}</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display text-3xl md:text-4xl tracking-[-0.02em] text-white">
            {title}
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            Last updated: {lastUpdated}
          </p>
          <div className="mt-10 h-px bg-white/10" />
        </header>

        <div
          className="
          legal-prose space-y-10
          [&_h2]:font-display [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:text-white [&_h2]:tracking-[-0.02em] [&_h2]:mt-12 [&_h2]:mb-4
          [&_h3]:font-sans [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-kratos-200 [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:uppercase [&_h3]:tracking-wider
          [&_p]:text-[15px] [&_p]:leading-[1.7] [&_p]:text-white/70
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:text-[15px] [&_ul]:text-white/70 [&_ul]:leading-[1.7]
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:text-[15px] [&_ol]:text-white/70
          [&_a]:text-kratos-300 [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-kratos-200
          [&_strong]:text-white [&_strong]:font-medium
          [&_table]:w-full [&_table]:text-[14px] [&_table]:border-collapse [&_th]:border [&_th]:border-white/15 [&_th]:p-2 [&_th]:text-left [&_td]:border [&_td]:border-white/10 [&_td]:p-2 [&_thead]:bg-white/[0.04]
          "
        >
          {children}
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
}
