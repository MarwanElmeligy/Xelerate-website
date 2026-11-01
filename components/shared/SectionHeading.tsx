import type { ReactNode } from "react";

export function SectionHeading({
  index,
  kicker,
  title,
  accent,
  lede,
  dark = false,
  className = "",
  align = "left",
}: {
  index?: string;
  kicker?: string;
  title: ReactNode;
  accent?: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div data-reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {(index || kicker) && (
        <p className={`kicker flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${dark ? "text-brand-300" : "text-brand-700"}`}>
          {index && <span className={dark ? "text-white/40" : "text-ink-400"}>{index}</span>}
          {index && kicker && <span className={`h-px w-6 ${dark ? "bg-white/25" : "bg-ink-900/20"}`} />}
          {kicker}
        </p>
      )}
      <h2 className={`display mt-4 text-[2.25rem] sm:text-5xl lg:text-[3.5rem] ${dark ? "text-white" : "text-ink-900"}`}>
        {title} {accent && <span className={`accent-serif ${dark ? "text-brand-300" : "text-brand-700"}`}>{accent}</span>}
      </h2>
      {lede && <p className={`lede mt-5 ${dark ? "text-white/70" : "text-ink-600"}`}>{lede}</p>}
    </div>
  );
}
