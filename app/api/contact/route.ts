import { NextResponse } from "next/server";

/**
 * Consultation requests.
 *
 * Delivery is configured with environment variables (never committed):
 *   RESEND_API_KEY + CONTACT_TO_EMAIL [+ CONTACT_FROM_EMAIL]  → email via Resend
 *   CONTACT_WEBHOOK_URL                                        → JSON POST (CRM, Zapier, Make, NetSuite RESTlet…)
 * If neither is set the endpoint answers 503 and the form offers a pre-filled email instead,
 * so no enquiry is ever silently lost.
 */

export const runtime = "nodejs";

const TOPICS = new Set([
  "implementation",
  "integration",
  "optimization",
  "support",
  "poultry",
  "precious-metals",
  "professional-services",
  "other",
]);

const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > 10 * 60_000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  h.n += 1;
  return h.n > 5;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real users never fill this field.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 160),
    company: clean(body.company, 160),
    phone: clean(body.phone, 40),
    country: clean(body.country, 60),
    topic: clean(body.topic, 40),
    message: clean(body.message, 4000),
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Please enter a valid work email.";
  if (data.company.length < 2) errors.company = "Please enter your company.";
  if (!TOPICS.has(data.topic)) errors.topic = "Please choose a topic.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (10+ characters).";
  if (Object.keys(errors).length) return NextResponse.json({ error: "validation", errors }, { status: 422 });

  const subject = `New consultation request — ${data.company} (${data.topic})`;
  const text = Object.entries(data)
    .map(([k, v]) => `${k}: ${v || "—"}`)
    .join("\n");

  try {
    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "Xelerate Website <onboarding@resend.dev>",
          to: process.env.CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
          reply_to: data.email,
          subject,
          text,
          html: `<h2>${esc(subject)}</h2><pre style="font:14px/1.5 monospace">${esc(text)}</pre>`,
        }),
      });
      if (!r.ok) throw new Error(`resend ${r.status}`);
      return NextResponse.json({ ok: true });
    }
    if (process.env.CONTACT_WEBHOOK_URL) {
      const r = await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "xelerate.org", submittedAt: new Date().toISOString() }),
      });
      if (!r.ok) throw new Error(`webhook ${r.status}`);
      return NextResponse.json({ ok: true });
    }
  } catch (e) {
    console.error("contact delivery failed", e);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ error: "not_configured" }, { status: 503 });
}
