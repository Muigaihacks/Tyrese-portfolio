/**
 * Validates env vars shared by `/api/contact` and `/api/newsletter` (Resend).
 */

export function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, "").trim();
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function normalizeFromValue(value: string) {
  const cleaned = value.replace(/^['"]|['"]$/g, "").trim();
  const displayMatch = cleaned.match(/^(.*)<([^<>@\s]+@[^<>@\s]+\.[^<>@\s]+)>$/);
  if (displayMatch) {
    const displayName = displayMatch[1].trim();
    const address = displayMatch[2].trim();
    if (!isValidEmail(address)) return null;
    return displayName ? `${displayName} <${address}>` : address;
  }

  return isValidEmail(cleaned) ? cleaned : null;
}

export type ResolvedResendMailConfig =
  | { ok: true; apiKey: string; toEmail: string; fromEmail: string }
  | { ok: false; error: string };

export function resolveResendMailConfig(): ResolvedResendMailConfig {
  const apiKey = sanitizeHeaderValue(process.env.RESEND_API_KEY || "");
  const toEmail = sanitizeHeaderValue(process.env.CONTACT_TO_EMAIL || "");
  const fromRaw = (process.env.CONTACT_FROM_EMAIL || "").trim();

  const missing: string[] = [];
  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!toEmail) missing.push("CONTACT_TO_EMAIL");
  if (!fromRaw) missing.push("CONTACT_FROM_EMAIL");

  const devHint =
    process.env.NODE_ENV === "development"
      ? " For local testing: copy .env.example to .env.local and set every variable."
      : " In Vercel: Project → Settings → Environment Variables (apply to Production and Preview).";

  if (missing.length > 0) {
    return {
      ok: false,
      error: `Email is not configured. Set these environment variables: ${missing.join(", ")}.${devHint}`,
    };
  }

  if (!isValidEmail(toEmail)) {
    return { ok: false, error: "CONTACT_TO_EMAIL must be a valid email address." };
  }

  const fromEmail = normalizeFromValue(fromRaw);
  if (!fromEmail) {
    return {
      ok: false,
      error:
        "CONTACT_FROM_EMAIL must be either a bare address (hello@yourdomain.com) or display plus address (Kratos Systems <hello@yourdomain.com>). The address must exist in Resend for your verified domain.",
    };
  }

  return { ok: true, apiKey, toEmail, fromEmail };
}

/** Human-readable snippet from failed Resend API responses */
export async function formatResendApiError(response: Response): Promise<string> {
  const text = await response.text();
  try {
    const j = JSON.parse(text) as { message?: string };
    if (typeof j.message === "string" && j.message.trim()) return j.message.trim();
  } catch {
    /* ignore */
  }
  const short = text.replace(/\s+/g, " ").trim();
  return short.length > 400 ? `${short.slice(0, 400)}…` : short;
}
