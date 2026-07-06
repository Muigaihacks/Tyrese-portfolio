import {
  COMPANY_EMAIL_DISPLAY,
  CALENDLY_INTRO_URL,
  PERSONAL_EMAIL_MAILTO,
} from "@/lib/contact-email";
import { Github, Linkedin, Mail } from "lucide-react";
import Atom from "../Atom";
import KratosLogo from "../KratosLogo";

const NAV_GROUPS = [
  {
    title: "Services",
    links: [
      { label: "Software Engineering", href: "/#services" },
      { label: "AI & Machine Learning", href: "/#services" },
      { label: "Cloud Infrastructure",  href: "/#services" },
      { label: "Automation Systems",    href: "/#services" },
      { label: "Data Engineering",      href: "/#services" },
      { label: "Cybersecurity",         href: "/#services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Portfolio",     href: "/#portfolio" },
      { label: "Process",       href: "/#process" },
      { label: "Why Kratos",    href: "/#why-us" },
      { label: "Testimonials",  href: "/#testimonials" },
      { label: "About",         href: "/about" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact",          href: "/#contact" },
      { label: "Book a Call",      href: CALENDLY_INTRO_URL },
      { label: "Newsletter",       href: "/#newsletter" },
      { label: COMPANY_EMAIL_DISPLAY, href: PERSONAL_EMAIL_MAILTO },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Cookie settings", href: "/cookies#your-cookie-choices-and-consent" },
    ],
  },
];

const SOCIALS = [
  { icon: Mail,     href: PERSONAL_EMAIL_MAILTO, label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tyrese-muigai-32a62630b/", label: "LinkedIn" },
  { icon: Github,   href: "https://github.com/Muigaihacks", label: "GitHub" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-surface-sunken px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Top: brand + nav groups */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2.6fr] gap-12 lg:gap-16">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative inline-flex">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-kratos-500/35 blur-[8px]"
                />
                <Atom size={44} variant="mark" className="relative" />
              </div>
              <KratosLogo size="medium" layout="inline" variant="dark" />
            </div>
            <p className="text-white/55 text-sm leading-relaxed mt-6 max-w-sm">
              Production-grade software systems, engineered for businesses on the rise. Built in Nairobi, shipped across Africa and beyond.
            </p>
            <p className="text-white/40 text-xs mt-3 max-w-sm leading-relaxed">
              Operated by Tyrese Muigai, Software Engineer {"&"} Cloud Architect
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-7">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/10 hover:border-kratos-500/50 hover:bg-kratos-500/10 text-white/55 hover:text-kratos-200 flex items-center justify-center transition-all"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.6} />
                  </a>
                );
              })}
            </div>

            {/* Address line */}
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30 mt-8">
              NBO · KE · 01°17′S 36°49′E
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300 mb-4">
                  {group.title}
                </div>
                <ul className="space-y-2.5">
                  {group.links.map((l) => (
                    <li key={`${group.title}-${l.label}`}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          l.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-white/55 hover:text-white text-sm transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
          <span>© {year} Kratos Systems. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-kratos-400 animate-pulse" />
            <span>Available for new engagements</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
