import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";

export function ValueProps({
  kicker,
  title,
  accent,
  lede,
  items,
  tone = "light",
  accentColor,
}: {
  kicker: string;
  title: string;
  accent: string;
  lede?: string;
  items: { title: string; text: string }[];
  tone?: "light" | "white";
  accentColor: string;
}) {
  return (
    <section className={`py-24 md:py-32 ${tone === "white" ? "bg-white" : ""}`}>
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32" data-reveal>
            <p className="kicker" style={{ color: accentColor }}>
              {kicker}
            </p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              {title} <span className="accent-serif text-brand-700">{accent}</span>
            </h2>
            {lede && <p className="lede mt-5 text-ink-600">{lede}</p>}
          </div>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:col-span-8" data-reveal-group>
          {items.map((it, i) => (
            <li key={it.title} className="group relative bg-white p-8 md:p-10">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
                style={{ background: accentColor }}
              />
              <span className="font-mono text-sm text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-[1.6rem] font-semibold leading-tight tracking-tight text-ink-900">{it.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const approach = [
  { title: "Map how you operate", text: "A discovery workshop with your finance and operations leads to understand processes, controls and reporting." },
  { title: "Design on NetSuite", text: "Standard capability first; configuration and integrations only where your business genuinely needs them." },
  { title: "Go live and evolve", text: "Data migration, training and hypercare — then continuous improvement as you grow." },
];

export function ApproachStrip({ accentColor, children }: { accentColor: string; children?: ReactNode }) {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-x">
        <div className="rounded-[2rem] border border-line bg-paper-2/60 p-8 md:p-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div data-reveal>
              <p className="kicker text-ink-500">How Xelerate starts</p>
              <h2 className="display mt-3 text-3xl md:text-4xl">Three steps from conversation to clarity.</h2>
            </div>
            <Link href="/services/netsuite-implementation/" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700">
              Our implementation method
              <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ol className="mt-10 grid gap-8 md:grid-cols-3" data-reveal-group>
            {approach.map((a, i) => (
              <li key={a.title} className="flex gap-4">
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full font-mono text-[13px] text-white"
                  style={{ background: accentColor }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink-900">{a.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
          {children}
        </div>
      </div>
    </section>
  );
}

export function RelatedIndustries({ current }: { current: string }) {
  const all = [
    { href: "/industries/poultry-agribusiness/", label: "Poultry & Agribusiness" },
    { href: "/industries/precious-metals/", label: "Precious Metals" },
    { href: "/industries/professional-services/", label: "Professional Services" },
    { href: "/services/netsuite-integration/", label: "NetSuite Integration" },
    { href: "/features/", label: "NetSuite capabilities" },
  ].filter((x) => x.href !== current);
  return (
    <nav aria-label="Related pages" className="container-x flex flex-wrap items-center gap-2 pb-16 text-[14px]">
      <span className="mr-2 text-ink-500">Explore next:</span>
      {all.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="rounded-full border border-line bg-white px-4 py-2 font-medium text-ink-800 transition-colors hover:border-brand/50 hover:text-brand-700"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
