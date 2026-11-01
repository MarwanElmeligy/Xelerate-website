"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { mainNav } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (state adjusted during render, per React guidance).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobile(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <div
        className={`mx-auto flex h-16 max-w-[82rem] items-center justify-between gap-4 rounded-2xl border bg-white/90 pl-4 pr-2 backdrop-blur-xl transition-[box-shadow,border-color] duration-500 md:h-[4.25rem] md:pl-5 ${
          scrolled ? "border-ink-900/10 shadow-[0_18px_50px_-24px_rgba(4,18,26,0.45)]" : "border-white/40 shadow-none"
        }`}
      >
        <Logo priority />

        <nav ref={navRef} aria-label="Primary" className="hidden items-center lg:flex">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={open === item.label}
                      aria-controls={`menu-${item.label}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(open === item.label ? null : item.label);
                      }}
                      onMouseEnter={() => setOpen(item.label)}
                      className={`inline-flex h-10 items-center gap-1 rounded-full px-3.5 text-[14.5px] font-medium transition-colors hover:bg-ink-900/5 ${
                        isActive(item.href) ? "text-brand-700" : "text-ink-800"
                      }`}
                    >
                      {item.label}
                      <Icon
                        name="chevronDown"
                        className={`size-3.5 transition-transform duration-300 ${open === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      id={`menu-${item.label}`}
                      onMouseLeave={() => setOpen(null)}
                      className={`absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-300 ease-[var(--ease-out-expo)] ${
                        open === item.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white p-2 shadow-[0_30px_70px_-30px_rgba(4,18,26,0.5)]">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-paper"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-150" />
                            <span>
                              <span className="block text-[15px] font-semibold text-ink-900">{c.label}</span>
                              <span className="mt-0.5 block text-[13.5px] leading-snug text-ink-500">{c.description}</span>
                            </span>
                          </Link>
                        ))}
                        <Link
                          href={item.href}
                          className="mt-1 flex items-center justify-between rounded-xl bg-ink-900 px-4 py-3 text-sm font-semibold text-white"
                        >
                          All {item.label.toLowerCase()}
                          <Icon name="arrowRight" className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`inline-flex h-10 items-center rounded-full px-3.5 text-[14.5px] font-medium transition-colors hover:bg-ink-900/5 ${
                      isActive(item.href) ? "text-brand-700" : "text-ink-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact-us/"
            className="hidden h-11 items-center gap-2 rounded-xl bg-ink-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:inline-flex"
          >
            Book a consultation
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl text-ink-900 hover:bg-ink-900/5 lg:hidden"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            onClick={() => setMobile(!mobile)}
          >
            <Icon name={mobile ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-3 top-[5.25rem] bottom-3 overflow-y-auto rounded-2xl border border-ink-900/10 bg-white p-5 shadow-2xl transition-[opacity,transform,visibility] duration-300 lg:hidden ${
          mobile ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile">
          {mainNav.map((item) => (
            <div key={item.label} className="border-b border-line py-3 last:border-0">
              <Link href={item.href} className="block py-1 text-xl font-semibold tracking-tight text-ink-900">
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-2 space-y-1">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="block py-1.5 text-[15px] text-ink-600">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        <Link
          href="/contact-us/"
          className="mt-6 flex h-12 items-center justify-center rounded-xl bg-brand-600 font-semibold text-white"
        >
          Book a consultation
        </Link>
      </div>
    </header>
  );
}
