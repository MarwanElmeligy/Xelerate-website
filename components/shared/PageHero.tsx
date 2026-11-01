import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, dark = true }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-[13px] ${dark ? "text-white/55" : "text-ink-500"}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <Link href={c.path} className={dark ? "hover:text-white" : "hover:text-ink-900"}>
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className={dark ? "text-white/85" : "text-ink-800"}>
                {c.name}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Dark editorial hero used by inner pages. Optional Higgsfield visual on the right. */
export function PageHero({
  crumbs,
  kicker,
  title,
  accent,
  lede,
  children,
  image,
  imageAlt = "",
  tone = "dark",
  accentClass,
}: {
  crumbs: Crumb[];
  kicker?: string;
  title: ReactNode;
  accent?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  tone?: "dark" | "light";
  accentClass?: string;
}) {
  const dark = tone === "dark";
  return (
    <section className="px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={`relative isolate overflow-hidden rounded-[2rem] ${dark ? "on-dark bg-ink-950 text-white" : "bg-white text-ink-900 ring-1 ring-inset ring-line"}`}
      >
        {image && (
          <div aria-hidden={imageAlt === ""} className="absolute inset-0 -z-10">
            <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-right" />
            <div
              className={`absolute inset-0 ${
                dark
                  ? "bg-[linear-gradient(90deg,#04121a_0%,rgba(4,18,26,0.95)_38%,rgba(4,18,26,0.6)_58%,rgba(4,18,26,0.12)_100%)]"
                  : "bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_38%,rgba(255,255,255,0.2)_75%,transparent_100%)]"
              } max-md:bg-[linear-gradient(180deg,rgba(4,18,26,0.55),#04121a_75%)] ${dark ? "" : "max-md:bg-[linear-gradient(180deg,rgba(255,255,255,0.5),#ffffff_70%)]"}`}
            />
          </div>
        )}
        {!image && (
          <div aria-hidden className={`absolute inset-0 -z-10 ${dark ? "grid-lines" : "grid-lines-light"} [mask-image:radial-gradient(70%_90%_at_80%_20%,black,transparent)]`} />
        )}
        <div className="container-x pb-16 pt-32 md:pb-24 md:pt-44">
          <Breadcrumbs items={crumbs} dark={dark} />
          {kicker && <p className={`kicker rise mt-8 ${dark ? "text-brand-300" : "text-brand-700"}`}>{kicker}</p>}
          <h1 className="display rise mt-4 max-w-4xl text-[2.6rem] sm:text-6xl lg:text-7xl" style={{ ["--d" as string]: "80ms" }}>
            {title} {accent && <span className={`accent-serif ${accentClass ?? (dark ? "text-brand-300" : "text-brand-700")}`}>{accent}</span>}
          </h1>
          {lede && (
            <p className={`lede rise mt-6 max-w-2xl ${dark ? "text-white/75" : "text-ink-600"}`} style={{ ["--d" as string]: "180ms" }}>
              {lede}
            </p>
          )}
          {children && (
            <div className="rise mt-10" style={{ ["--d" as string]: "280ms" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
