"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Site-wide scroll choreography, loaded lazily so GSAP never blocks first paint.
 *
 *  [data-reveal]          fade/rise in when scrolled into view (below-the-fold only,
 *                         so nothing visible at load ever flashes or shifts)
 *  [data-reveal-group]    staggers its direct children
 *  [data-parallax="0.15"] gentle scroll-linked drift (transform only)
 *  [data-draw]            SVG paths that draw themselves (needs pathLength="1")
 *  [data-grow]            bars that fill left-to-right with scroll
 */
export function MotionManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const vh = window.innerHeight;
        const belowFold = (el: Element) => el.getBoundingClientRect().top > vh * 0.92;

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          if (!belowFold(el)) return;
          gsap.from(el, {
            opacity: 0,
            y: 36,
            duration: 1.1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
          if (!belowFold(group)) return;
          gsap.from(group.children, {
            opacity: 0,
            y: 28,
            duration: 1,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.15");
          gsap.fromTo(
            el,
            { yPercent: -speed * 50 },
            {
              yPercent: speed * 50,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-grow]").forEach((bar) => {
          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: { trigger: bar.closest("section") || bar, start: "top 70%", end: "center 45%", scrub: 0.6 },
            },
          );
        });

        gsap.utils.toArray<SVGPathElement>("[data-draw]").forEach((path) => {
          gsap.fromTo(
            path,
            { strokeDasharray: 1, strokeDashoffset: 1 },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: { trigger: path.closest("section") || path, start: "top 75%", end: "bottom 60%", scrub: 0.6 },
            },
          );
        });
      });

      // Keyboard users tabbing ahead of the scroll position must never land on faded content.
      const onFocus = (e: FocusEvent) => {
        const host = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-reveal], [data-reveal-group] > *");
        if (host) gsap.set(host, { opacity: 1, y: 0 });
      };
      document.addEventListener("focusin", onFocus);
      const prevRevert = ctx;
      ctx = { revert: () => { document.removeEventListener("focusin", onFocus); prevRevert?.revert(); } };

      // Images/fonts can change layout after load; keep trigger positions honest.
      requestAnimationFrame(() => ScrollTrigger.refresh());
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
