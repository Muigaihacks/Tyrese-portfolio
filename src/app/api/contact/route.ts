import {
  formatResendApiError,
  resolveResendMailConfig,
  sanitizeHeaderValue,
  isValidEmail,
} from "@/lib/resend-mail-config";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map<string, number[]>();

function checkRateLimit(ip: string) {
  const now = Date.now();
  const recentRequests = (ipRequestLog.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  recentRequests.push(now);
  ipRequestLog.set(ip, recentRequests);
  return recentRequests.length <= RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  const host = request.headers.get("host");
  const origin = request.headers.get("origin");
  if (host && origin && !origin.includes(host)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = sanitizeHeaderValue(body.name || "");
  const email = sanitizeHeaderValue(body.email || "");
  const subject = sanitizeHeaderValue(body.subject || "");
  const message = body.message?.trim() || "";
  const company = body.company?.trim() || "";

  if (company) {
    // Honeypot field - if this is filled, the submission is likely automated.
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (name.length > 120 || email.length > 160 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 }
    );
  }

  const mailConfig = resolveResendMailConfig();
  if (!mailConfig.ok) {
    return NextResponse.json({ error: mailConfig.error }, { status: 500 });
  }

  const { apiKey, toEmail, fromEmail } = mailConfig;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Kratos Systems] ${subject}`,
        text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const detail = await formatResendApiError(response);
      return NextResponse.json(
        { error: `Could not send message (${response.status}). ${detail}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while sending your message." },
      { status: 500 }
    );
  }
}
