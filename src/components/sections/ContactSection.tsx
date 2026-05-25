"use client";

import { CalendarDays, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import {
  CALENDLY_INTRO_URL,
  COMPANY_EMAIL_DISPLAY,
  PERSONAL_EMAIL_MAILTO,
} from "@/lib/contact-email";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string; // honeypot
}

const EMPTY: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null
  >(null);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setStatus({
        type: "success",
        message: "Message received. We'll get back to you within one business day.",
      });
      setForm(EMPTY);
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error ? err.message : "Something went wrong sending your message.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 px-6 border-t border-white/5 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-kratos-300">
            // CONTACT
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: pitch + contact details */}
          <div>
            <h2 className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
              Let&apos;s talk about what you&apos;re building.
            </h2>
            <p className="text-white/55 text-base md:text-lg mt-5 leading-relaxed max-w-xl">
              Send a brief on what you need. We respond within one business day, and most discovery calls happen the same week.
            </p>

            {/* Direct contact strip */}
            <ul className="mt-10 space-y-4">
              <ContactRow
                icon={Mail}
                label="Email"
                value={COMPANY_EMAIL_DISPLAY}
                href={PERSONAL_EMAIL_MAILTO}
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value="+254 718 004 282"
                href="tel:+254718004282"
              />
              <ContactRow
                icon={MapPin}
                label="Studio"
                value="Nairobi, Kenya"
              />
            </ul>

            {/* Calendly CTA */}
            <a
              href={CALENDLY_INTRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 px-5 py-3 rounded-full border border-kratos-500/40 hover:border-kratos-500 bg-kratos-500/10 hover:bg-kratos-500/20 text-kratos-200 hover:text-white text-sm font-medium transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book a 30-min intro on Calendly</span>
            </a>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-surface-raised/40 p-6 md:p-8"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={onChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
              />
              <Field
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="mt-4">
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={onChange}
                required
              />
            </div>

            <div className="mt-4">
              <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 mb-2">
                Project brief
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                required
                placeholder="What are you building, what problem does it solve, and what's the rough scope?"
                className="w-full px-4 py-3 rounded-xl bg-surface-sunken border border-white/10 focus:border-kratos-500/60 focus:outline-none focus:ring-1 focus:ring-kratos-500/30 text-white text-sm placeholder-white/30 resize-none transition-colors"
              />
            </div>

            {status && (
              <div
                className={`mt-4 px-4 py-3 rounded-xl text-sm border ${
                  status.type === "success"
                    ? "bg-kratos-500/10 border-kratos-500/40 text-kratos-200"
                    : "bg-red-500/10 border-red-500/40 text-red-300"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-kratos-500 hover:bg-kratos-400 disabled:bg-kratos-700 disabled:cursor-not-allowed text-surface-ink font-semibold text-sm transition-colors w-full md:w-auto"
            >
              {submitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-kratos-500/10 text-kratos-300 flex items-center justify-center group-hover:bg-kratos-500/20 transition-colors">
        <Icon className="w-4 h-4" strokeWidth={1.6} />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </div>
        <div className="text-white text-sm mt-0.5">{value}</div>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block hover:opacity-90 transition-opacity">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

function Field({
  label,
  ...rest
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 mb-2">
        {label}
      </label>
      <input
        {...rest}
        className="w-full px-4 py-3 rounded-xl bg-surface-sunken border border-white/10 focus:border-kratos-500/60 focus:outline-none focus:ring-1 focus:ring-kratos-500/30 text-white text-sm placeholder-white/30 transition-colors"
      />
    </div>
  );
}
