"use client";

import { useEffect, useRef } from "react";

/**
 * Floating geometry + interconnected nodes over the hero visual.
 * The arc and arrow echo the trajectory in the Xelerate "X" mark.
 * CSS draws the arc on load; GSAP (lazy) adds float + pointer parallax.
 */
const nodes = [
  { x: 760, y: 470 },
  { x: 880, y: 360 },
  { x: 1010, y: 300 },
  { x: 1120, y: 205 },
  { x: 940, y: 520 },
  { x: 1180, y: 420 },
  { x: 820, y: 250 },
];
const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [2, 5],
  [6, 1],
  [4, 5],
];
const ARC = "M 760 720 C 940 660, 1100 470, 1290 110";

export function HeroGeometry() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      svg.pauseAnimations?.();
      return;
    }
    let revert: (() => void) | undefined;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      const ctx = gsap.context(() => {
        gsap.utils.toArray<SVGGElement>("[data-float]").forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 ? -14 : 12,
            rotation: i % 3 === 0 ? 8 : -6,
            svgOrigin: el.dataset.origin,
            duration: 5 + (i % 4),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.25,
          });
        });
        gsap.from("[data-node]", {
          scale: 0,
          transformOrigin: "50% 50%",
          duration: 0.8,
          ease: "back.out(2)",
          stagger: 0.07,
          delay: 0.6,
        });
        gsap.from("[data-link]", { opacity: 0, duration: 1.2, stagger: 0.06, delay: 0.9 });
      }, svg);

      // Pointer parallax on fine pointers only.
      const fine = window.matchMedia("(pointer: fine)").matches;
      const layers = gsap.utils.toArray<SVGGElement>("[data-depth]", svg);
      const movers = layers.map((l) => ({
        x: gsap.quickTo(l, "x", { duration: 1.2, ease: "power3.out" }),
        y: gsap.quickTo(l, "y", { duration: 1.2, ease: "power3.out" }),
        d: parseFloat(l.dataset.depth || "1"),
      }));
      const onMove = (e: PointerEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        movers.forEach((m) => {
          m.x(nx * 28 * m.d);
          m.y(ny * 18 * m.d);
        });
      };
      if (fine) window.addEventListener("pointermove", onMove, { passive: true });
      revert = () => {
        ctx.revert();
        window.removeEventListener("pointermove", onMove);
      };
    })();
    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full"
    >
      <defs>
        <linearGradient id="hero-arc" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor="#005d74" stopOpacity="0" />
          <stop offset="0.45" stopColor="#14b8a6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#4fd18b" />
        </linearGradient>
      </defs>

      {/* Depth 0.4 — faint outline geometry */}
      <g data-depth="0.4" opacity="0.5">
        <g data-float data-origin="1250 600">
          <polygon points="1250,560 1285,580 1285,620 1250,640 1215,620 1215,580" fill="none" stroke="#4fd18b" strokeOpacity="0.35" />
        </g>
        <g data-float data-origin="860 140">
          <rect x="840" y="120" width="40" height="40" rx="4" fill="none" stroke="#7dd3c8" strokeOpacity="0.35" transform="rotate(20 860 140)" />
        </g>
        <g data-float data-origin="1340 300">
          <circle cx="1340" cy="300" r="26" fill="none" stroke="#4fd18b" strokeOpacity="0.3" strokeDasharray="3 5" />
        </g>
        <g data-float data-origin="1330 720">
          <path d="M 1330 695 L 1355 738 L 1305 738 Z" fill="none" stroke="#7dd3c8" strokeOpacity="0.3" />
        </g>
      </g>

      {/* Depth 1 — node network */}
      <g data-depth="1">
        {links.map(([a, b], i) => (
          <line
            key={i}
            data-link
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#7dd3c8"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i} data-node>
            <circle cx={n.x} cy={n.y} r="9" fill="#4fd18b" opacity="0.12" />
            <circle cx={n.x} cy={n.y} r="2.6" fill={i === 3 ? "#4fd18b" : "#bdf2d5"} />
          </g>
        ))}
        {/* data pulses travelling the network */}
        {links.slice(0, 5).map(([a, b], i) => (
          <circle key={`p${i}`} r="2" fill="#bdf2d5">
            <animateMotion
              dur={`${3 + i * 0.7}s`}
              begin={`${1.5 + i * 0.4}s`}
              repeatCount="indefinite"
              path={`M ${nodes[a].x} ${nodes[a].y} L ${nodes[b].x} ${nodes[b].y}`}
            />
          </circle>
        ))}
      </g>

      {/* Depth 1.6 — the acceleration arc */}
      <g data-depth="1.6">
        <path
          d={ARC}
          fill="none"
          stroke="url(#hero-arc)"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          style={{ animation: "draw 2.4s cubic-bezier(0.65,0,0.35,1) 0.4s forwards" }}
        />
        <path
          d="M 1262 104 L 1296 104 L 1290 140"
          fill="none"
          stroke="#4fd18b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fade-in"
          style={{ ["--d" as string]: "2.3s" }}
        />
        <g>
          <circle r="10" fill="#4fd18b" opacity="0.18" />
          <circle r="3.5" fill="#d9fbe8" />
          <animateMotion dur="5s" begin="2.8s" repeatCount="indefinite" path={ARC} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.45 0 0.55 1" />
        </g>
      </g>
    </svg>
  );
}
