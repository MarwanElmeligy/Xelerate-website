"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

const topics = [
  { v: "implementation", l: "NetSuite implementation" },
  { v: "integration", l: "NetSuite integration" },
  { v: "optimization", l: "Optimizing an existing NetSuite" },
  { v: "support", l: "NetSuite support" },
  { v: "poultry", l: "Poultry & agribusiness solution" },
  { v: "precious-metals", l: "Precious metals" },
  { v: "professional-services", l: "Professional services" },
  { v: "other", l: "Something else" },
];

const countries = ["Egypt", "Saudi Arabia", "United Arab Emirates", "Kuwait", "Qatar", "Bahrain", "Oman", "Jordan", "Other"];

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mailto, setMailto] = useState(`mailto:${site.email}`);
  const topicRef = useRef<HTMLSelectElement>(null);

  // Pre-select the topic from ?topic= links on industry pages.
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic");
    if (t && topicRef.current && topics.some((x) => x.v === t)) topicRef.current.value = t;
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus("sending");
    setErrors({});
    const body = `Name: ${data.name}\nCompany: ${data.company}\nPhone: ${data.phone || "-"}\nCountry: ${data.country}\nTopic: ${data.topic}\n\n${data.message}`;
    setMailto(
      `mailto:${site.email}?subject=${encodeURIComponent(`Consultation request — ${data.company || ""}`)}&body=${encodeURIComponent(body)}`,
    );
    try {
      const r = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await r.json().catch(() => ({}));
      if (r.ok) {
        setStatus("sent");
        window.dataLayer?.push({ event: "generate_lead", form: "consultation", topic: data.topic });
        form.reset();
        return;
      }
      if (r.status === 422 && json.errors) {
        setErrors(json.errors);
        setStatus("idle");
        return;
      }
      setStatus(r.status === 503 ? "fallback" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent")
    return (
      <div role="status" className="rounded-3xl border border-brand/30 bg-brand-100/60 p-10">
        <span className="grid size-12 place-items-center rounded-full bg-brand-600 text-white">
          <Icon name="check" className="size-6" />
        </span>
        <h2 className="display mt-6 text-3xl">Thank you — we&apos;ve got it.</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
          A Xelerate consultant will get back to you shortly to arrange your session.
        </p>
      </div>
    );

  const field =
    "mt-2 block w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand/15";
  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-[13px] font-medium text-red-700">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: string) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {});

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgba(4,18,26,0.4)] md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-[14px] font-medium text-ink-800">
          Full name *
          <input name="name" autoComplete="name" required className={field} {...aria("name")} />
          {err("name")}
        </label>
        <label className="block text-[14px] font-medium text-ink-800">
          Work email *
          <input name="email" type="email" autoComplete="email" required className={field} {...aria("email")} />
          {err("email")}
        </label>
        <label className="block text-[14px] font-medium text-ink-800">
          Company *
          <input name="company" autoComplete="organization" required className={field} {...aria("company")} />
          {err("company")}
        </label>
        <label className="block text-[14px] font-medium text-ink-800">
          Phone <span className="font-normal text-ink-500">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block text-[14px] font-medium text-ink-800">
          Country
          <select name="country" defaultValue="Egypt" className={field}>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="block text-[14px] font-medium text-ink-800">
          I&apos;m interested in *
          <select ref={topicRef} name="topic" defaultValue="implementation" className={field} {...aria("topic")}>
            {topics.map((t) => (
              <option key={t.v} value={t.v}>
                {t.l}
              </option>
            ))}
          </select>
          {err("topic")}
        </label>
        <label className="block text-[14px] font-medium text-ink-800 md:col-span-2">
          What would you like to achieve? *
          <textarea name="message" rows={5} required className={field} placeholder="A few lines about your business, systems and priorities." {...aria("message")} />
          {err("message")}
        </label>
        {/* Honeypot */}
        <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      {(status === "fallback" || status === "error") && (
        <div role="alert" className="mt-6 rounded-2xl border border-harvest/50 bg-[#fdf6e7] p-5 text-[14.5px] text-ink-800">
          {status === "fallback" ? "Online submissions are being set up." : "We couldn't send your request just now."}{" "}
          Please{" "}
          <a href={mailto} className="font-semibold text-brand-700 underline underline-offset-4">
            send it by email instead
          </a>{" "}
          — your details are already filled in.
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[13px] leading-relaxed text-ink-500">
          By submitting, you agree that Xelerate may contact you about your enquiry. See our{" "}
          <a href="/privacy-policy/" className="underline underline-offset-4 hover:text-ink-900">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Request my consultation"}
          <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
