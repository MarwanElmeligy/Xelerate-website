import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost-dark" | "ghost-light" | "white";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_10px_30px_-12px_rgba(0,132,63,0.7)]",
  white: "bg-white text-ink-900 hover:bg-paper",
  secondary: "bg-ink-900 text-white hover:bg-ink-800",
  "ghost-dark": "text-white ring-1 ring-inset ring-white/25 hover:ring-white/60 hover:bg-white/5",
  "ghost-light": "text-ink-900 ring-1 ring-inset ring-ink-900/15 hover:ring-ink-900/40 hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  size?: "md" | "lg";
}) {
  const sz = size === "lg" ? "h-13 px-7 text-[15px]" : "h-11 px-5 text-sm";
  const external = href.startsWith("mailto:") || href.startsWith("http");
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.005em] transition-[background-color,box-shadow,color] duration-300 ${sz} ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrowRight"
          className="size-4 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
        />
      )}
    </>
  );
  if (external)
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-ink-900 ${className}`}
    >
      {children}
      <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
