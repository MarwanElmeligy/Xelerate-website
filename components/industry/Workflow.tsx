"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Icon } from "@/components/icons";
import { deliveryLabel, type DeliveryKind, type Workflow as WorkflowData, type WorkflowTheme } from "@/lib/content/workflows";

/* ───────────────────────────── Theme identities ─────────────────────────────
   Each industry gets its own palette, node geometry and packet shape while the
   storytelling mechanics stay identical. */
type ThemeDef = {
  surface: string;
  accent: string;
  accent2: string;
  strand: string;
  text: string;
  muted: string;
  faint: string;
  chip: string;
  nodeIdle: string;
  nodeDone: string;
  nodeActive: string;
  panel: string;
  hairline: string;
  backdrop: string;
};

const THEMES: Record<WorkflowTheme, ThemeDef> = {
  gold: {
    surface: "bg-ink-950 on-dark",
    accent: "#E5B957",
    accent2: "#F6DD9C",
    strand: "rgba(229,185,87,0.20)",
    text: "text-white",
    muted: "text-white/70",
    faint: "text-white/45",
    chip: "bg-white/[0.06] ring-1 ring-inset ring-white/10 text-white/90",
    nodeIdle: "bg-ink-900 ring-1 ring-inset ring-white/15 text-white/70",
    nodeDone: "bg-[#2a2414] ring-1 ring-inset ring-[#E5B957]/45 text-[#F6DD9C]",
    nodeActive: "bg-[#E5B957] ring-2 ring-inset ring-[#F6DD9C] text-ink-950 shadow-[0_0_40px_-4px_rgba(229,185,87,0.65)]",
    panel: "bg-white/[0.035] ring-1 ring-inset ring-white/10",
    hairline: "border-white/10",
    backdrop:
      "radial-gradient(60% 80% at 85% 0%, rgba(229,185,87,0.16), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(0,93,116,0.25), transparent 60%)",
  },
  emerald: {
    surface: "bg-white",
    accent: "#00995A",
    accent2: "#0E7C86",
    strand: "rgba(0,120,110,0.16)",
    text: "text-ink-900",
    muted: "text-ink-600",
    faint: "text-ink-500",
    chip: "bg-paper ring-1 ring-inset ring-ink-900/10 text-ink-800",
    nodeIdle: "bg-white ring-1 ring-inset ring-ink-900/15 text-ink-500 shadow-sm",
    nodeDone: "bg-brand-100 ring-1 ring-inset ring-[#00995A]/35 text-brand-700",
    nodeActive: "bg-gradient-to-br from-[#00995A] to-[#0E7C86] ring-2 ring-inset ring-white/40 text-white shadow-[0_18px_40px_-10px_rgba(0,153,90,0.55)]",
    panel: "bg-paper/70 ring-1 ring-inset ring-ink-900/10",
    hairline: "border-ink-900/10",
    backdrop:
      "radial-gradient(55% 70% at 90% 0%, rgba(0,153,90,0.10), transparent 60%), radial-gradient(45% 60% at 0% 100%, rgba(14,124,134,0.10), transparent 60%)",
  },
  harvest: {
    surface: "bg-ink-900 on-dark",
    accent: "#8BD46B",
    accent2: "#E9B44C",
    strand: "rgba(139,212,107,0.20)",
    text: "text-white",
    muted: "text-white/70",
    faint: "text-white/45",
    chip: "bg-white/[0.06] ring-1 ring-inset ring-white/10 text-white/90",
    nodeIdle: "bg-ink-800 ring-1 ring-inset ring-white/15 text-white/70",
    nodeDone: "bg-[#1d3322] ring-1 ring-inset ring-[#8BD46B]/45 text-[#bfeaa9]",
    nodeActive: "bg-gradient-to-br from-[#8BD46B] to-[#E9B44C] ring-2 ring-inset ring-white/40 text-ink-950 shadow-[0_0_40px_-4px_rgba(139,212,107,0.6)]",
    panel: "bg-white/[0.035] ring-1 ring-inset ring-white/10",
    hairline: "border-white/10",
    backdrop:
      "radial-gradient(60% 80% at 90% 0%, rgba(233,180,76,0.14), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(139,212,107,0.14), transparent 60%)",
  },
};

const VB_W = 1200;
const VB_H = 170;
const MID = 85;
const INTERVAL = 4800;

/* Build braided strands that meet at every node: a calm centre line plus two
   counter-phase curves, so data visibly "converges" at each stage. */
function strandPath(xs: number[], amp: number, phase: 1 | -1) {
  let d = `M ${xs[0]} ${MID}`;
  for (let i = 0; i < xs.length - 1; i++) {
    const a = xs[i];
    const b = xs[i + 1];
    const dx = b - a;
    const s = (i % 2 === 0 ? 1 : -1) * phase * amp;
    d += ` C ${a + dx * 0.35} ${MID + s}, ${b - dx * 0.35} ${MID - s}, ${b} ${MID}`;
  }
  return d;
}

function DeliveryMark({ kind, color }: { kind: DeliveryKind; color: string }) {
  const common = { width: 12, height: 12, viewBox: "0 0 12 12", "aria-hidden": true } as const;
  if (kind === "standard")
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="4.5" fill={color} />
      </svg>
    );
  if (kind === "configured")
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="4" fill="none" stroke={color} strokeWidth="1.8" />
      </svg>
    );
  if (kind === "integration")
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="4" fill="none" stroke={color} strokeWidth="1.6" strokeDasharray="2 1.6" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="2.3" y="2.3" width="7.4" height="7.4" transform="rotate(45 6 6)" fill={color} />
    </svg>
  );
}

function Packet({ shape, color }: { shape: WorkflowData["packet"]; color: string }) {
  if (shape === "diamond")
    return (
      <>
        <circle r="9" fill={color} opacity="0.16" />
        <rect x="-3.5" y="-3.5" width="7" height="7" transform="rotate(45)" fill={color} />
      </>
    );
  if (shape === "capsule")
    return (
      <>
        <rect x="-12" y="-5" width="24" height="10" rx="5" fill={color} opacity="0.16" />
        <rect x="-8" y="-2.5" width="16" height="5" rx="2.5" fill={color} />
      </>
    );
  return (
    <>
      <circle r="8" fill={color} opacity="0.18" />
      <circle r="3.2" fill={color} />
    </>
  );
}

export function Workflow({ data, label }: { data: WorkflowData; label: string }) {
  const t = THEMES[data.theme];
  const uid = useId().replace(/:/g, "");
  const n = data.stages.length;
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [motionOK, setMotionOK] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const xs = useMemo(() => Array.from({ length: n }, (_, i) => 90 + (i * (VB_W - 180)) / (n - 1)), [n]);
  const paths = useMemo(
    () => ({
      main: strandPath(xs, 10, 1),
      a: strandPath(xs, 42, 1),
      b: strandPath(xs, 42, -1),
    }),
    [xs],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionOK(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Pause SVG (SMIL) packets when off-screen — no wasted frames.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !motionOK) return;
    if (inView) svg.unpauseAnimations?.();
    else svg.pauseAnimations?.();
  }, [inView, motionOK]);

  useEffect(() => {
    if (!playing || !inView || !motionOK) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), INTERVAL);
    return () => clearInterval(id);
  }, [playing, inView, motionOK, n]);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const select = useCallback((i: number) => {
    setActive(i);
    setPlaying(false);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPlaying(true), 15000);
  }, []);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      select(next);
      tabsRef.current[next]?.focus();
    }
  };

  const nodeShape =
    data.shape === "diamond" ? "rotate-45 rounded-[14px]" : data.shape === "square" ? "rounded-2xl" : "rounded-full";
  const iconCounter = data.shape === "diamond" ? "-rotate-45" : "";
  const activeIcon = data.theme === "emerald" ? "#ffffff" : "#04121a";
  const doneIcon = data.theme === "emerald" ? "#007236" : t.accent2;
  const progress = n > 1 ? active / (n - 1) : 1;
  const kinds = Array.from(new Set(data.stages.flatMap((s) => s.delivery.map((d) => d.kind))));

  return (
    <div
      ref={rootRef}
      className={`relative isolate overflow-hidden rounded-[2rem] ${t.surface} ${t.text}`}
      style={{ backgroundImage: t.backdrop } as CSSProperties}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 ${data.theme === "emerald" ? "grid-lines-light" : "grid-lines"} [mask-image:radial-gradient(80%_70%_at_50%_40%,black,transparent)]`}
      />

      {/* ─────────────── Desktop: braided rail + tabbed stage panels ─────────────── */}
      <div className="hidden px-10 pb-10 pt-8 lg:block xl:px-14">
        <div className="relative">
          <div className="relative" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
            <svg
              ref={svgRef}
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="absolute inset-0 size-full overflow-visible"
              aria-hidden
            >
              <defs>
                <linearGradient id={`g-${uid}`} x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor={t.accent} />
                  <stop offset="100%" stopColor={t.accent2} />
                </linearGradient>
              </defs>
              <path d={paths.a} fill="none" stroke={t.strand} strokeWidth="1.2" />
              <path d={paths.b} fill="none" stroke={t.strand} strokeWidth="1.2" />
              <path d={paths.main} fill="none" stroke={t.strand} strokeWidth="2" />
              {/* progress through the journey */}
              <path
                d={paths.main}
                fill="none"
                stroke={`url(#g-${uid})`}
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="1 1"
                style={{
                  strokeDashoffset: 1 - progress,
                  transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
              {motionOK &&
                (
                  [
                    { d: paths.main, dur: 7, begins: [0, 2.4, 4.8], color: t.accent2 },
                    { d: paths.a, dur: 10, begins: [0.8, 5.8], color: t.accent },
                    { d: paths.b, dur: 11, begins: [3.2, 8.4], color: t.accent },
                  ] as const
                ).flatMap((lane, li) =>
                  lane.begins.map((b, bi) => (
                    <g key={`${li}-${bi}`} opacity="0">
                      <Packet shape={data.packet} color={lane.color} />
                      <animateMotion
                        dur={`${lane.dur}s`}
                        begin={`${b}s`}
                        repeatCount="indefinite"
                        rotate="auto"
                        path={lane.d}
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.06;0.92;1"
                        dur={`${lane.dur}s`}
                        begin={`${b}s`}
                        repeatCount="indefinite"
                      />
                    </g>
                  )),
                )}
            </svg>

            <div role="tablist" aria-label={label} aria-orientation="horizontal">
              {data.stages.map((s, i) => {
                const state = i === active ? "active" : i < active ? "done" : "idle";
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabsRef.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${uid}-${i}`}
                    aria-selected={i === active}
                    aria-controls={`panel-${uid}-${i}`}
                    tabIndex={i === active ? 0 : -1}
                    onClick={() => select(i)}
                    onKeyDown={(e) => onKey(e, i)}
                    className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center outline-none"
                    style={{ left: `${(xs[i] / VB_W) * 100}%`, top: "50%" }}
                  >
                    <span className="relative grid size-[4.25rem] place-items-center">
                      {state === "active" && motionOK && (
                        <span
                          aria-hidden
                          className={`pulse-ring absolute inset-0 ${nodeShape}`}
                          style={{ boxShadow: `0 0 0 1.5px ${t.accent}` }}
                        />
                      )}
                      <span
                        className={`absolute inset-1.5 transition-[background-color,box-shadow,color,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105 group-focus-visible:ring-2 ${nodeShape} ${
                          state === "active" ? t.nodeActive : state === "done" ? t.nodeDone : t.nodeIdle
                        }`}
                      />
                      <Icon
                        name={s.icon}
                        className={`relative size-6 transition-colors duration-500 ${iconCounter} ${state === "idle" ? t.muted : ""}`}
                        style={{ color: state === "active" ? activeIcon : state === "done" ? doneIcon : undefined }}
                      />
                    </span>
                    <span className="pointer-events-none absolute top-[calc(100%+0.9rem)] flex w-40 flex-col items-center text-center">
                      <span className={`kicker ${t.faint}`}>{String(i + 1).padStart(2, "0")}</span>
                      <span
                        className={`mt-1 text-[15px] font-semibold leading-tight tracking-tight transition-opacity duration-500 ${
                          state === "active" ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-2 block h-[2px] w-12 overflow-hidden rounded-full" style={{ background: t.strand }}>
                        {state === "active" && playing && inView && motionOK && (
                          <span
                            key={`${active}-timer`}
                            className="block h-full origin-left rounded-full"
                            style={{
                              background: t.accent,
                              animation: `stage-timer ${INTERVAL}ms linear both`,
                            }}
                          />
                        )}
                        {state === "active" && !(playing && inView && motionOK) && (
                          <span className="block h-full w-full rounded-full" style={{ background: t.accent }} />
                        )}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panels share one grid cell, so swapping content never shifts layout. */}
          <div className="mt-24 grid">
            {data.stages.map((s, i) => {
              const on = i === active;
              const next = data.stages[i + 1];
              return (
                <div
                  key={s.id}
                  role="tabpanel"
                  id={`panel-${uid}-${i}`}
                  aria-labelledby={`tab-${uid}-${i}`}
                  aria-hidden={!on}
                  tabIndex={on ? 0 : -1}
                  className={`[grid-area:1/1] grid grid-cols-12 gap-6 rounded-3xl p-8 transition-[opacity,transform,visibility] duration-700 ease-[var(--ease-out-expo)] ${t.panel} ${
                    on ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"
                  }`}
                >
                  <div className="col-span-7 pr-6">
                    <p className={`kicker ${t.faint}`}>
                      Stage {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                    </p>
                    <h3 className="display mt-3 text-[2.25rem]">{s.title}</h3>
                    <p className={`mt-4 max-w-xl text-[17px] leading-relaxed ${t.muted}`}>{s.summary}</p>
                    <p className={`kicker mt-7 ${t.faint}`}>Data captured here</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.signals.map((sig, si) => (
                        <li
                          key={sig}
                          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13.5px] font-medium transition-[opacity,transform] duration-500 ${t.chip} ${
                            on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                          }`}
                          style={{ transitionDelay: on ? `${150 + si * 70}ms` : "0ms" }}
                        >
                          <span className="size-1.5 rounded-full" style={{ background: t.accent }} />
                          {sig}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`col-span-5 flex flex-col border-l pl-8 ${t.hairline}`}>
                    <p className={`kicker ${t.faint}`}>How it&apos;s delivered</p>
                    <ul className="mt-4 space-y-4">
                      {s.delivery.map((d) => (
                        <li key={d.text} className="flex gap-3">
                          <span className="mt-1.5">
                            <DeliveryMark kind={d.kind} color={t.accent} />
                          </span>
                          <span>
                            <span className={`block text-[12.5px] font-medium ${t.faint}`}>{deliveryLabel[d.kind]}</span>
                            <span className="block text-[15px] leading-snug">{d.text}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-auto pt-8 text-[14px] ${t.muted}`}>
                      {next ? (
                        <button
                          type="button"
                          tabIndex={on ? 0 : -1}
                          onClick={() => select(i + 1)}
                          className="group inline-flex items-center gap-2 font-semibold"
                        >
                          Hands off to <span style={{ color: t.accent }}>{next.title}</span>
                          <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          tabIndex={on ? 0 : -1}
                          onClick={() => select(0)}
                          className="group inline-flex items-center gap-2 font-semibold"
                        >
                          One connected record, end to end — <span style={{ color: t.accent }}>replay</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─────────────── Mobile & tablet: vertical rail, everything readable ─────────────── */}
      <div className="px-5 py-8 sm:px-8 lg:hidden">
        <ol className="relative">
          <span
            aria-hidden
            className="absolute bottom-6 left-[1.6rem] top-6 w-px overflow-hidden"
            style={{ background: t.strand }}
          >
            {motionOK &&
              [0, 1.6, 3.2].map((delay) => (
                <span
                  key={delay}
                  className="absolute inset-x-0 top-0 h-full"
                  style={{ animation: `rail-flow 4.8s linear ${delay}s infinite` }}
                >
                  <span
                    className="absolute -left-[3px] top-0 block h-3 w-[7px] rounded-full"
                    style={{ background: t.accent, boxShadow: `0 0 12px ${t.accent}` }}
                  />
                </span>
              ))}
          </span>
          {data.stages.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.id} className="relative pb-8 pl-[4.5rem] last:pb-0">
                <span className="absolute left-0 top-0 grid size-[3.25rem] place-items-center">
                  <span
                    className={`absolute inset-1 transition-[background-color,box-shadow] duration-500 ${nodeShape} ${
                      on ? t.nodeActive : t.nodeIdle
                    }`}
                  />
                  <Icon
                    name={s.icon}
                    className={`relative size-5 transition-colors duration-500 ${iconCounter} ${on ? "" : t.muted}`}
                    style={{ color: on ? activeIcon : undefined }}
                  />
                </span>
                <p className={`kicker pt-1 ${t.faint}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${t.muted}`}>{s.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {s.signals.map((sig) => (
                    <li key={sig} className={`rounded-full px-3 py-1 text-[12.5px] font-medium ${t.chip}`}>
                      {sig}
                    </li>
                  ))}
                </ul>
                <ul className="mt-3 space-y-1.5">
                  {s.delivery.map((d) => (
                    <li key={d.text} className={`flex items-start gap-2 text-[13px] ${t.muted}`}>
                      <span className="mt-[3px]">
                        <DeliveryMark kind={d.kind} color={t.accent} />
                      </span>
                      <span>{d.text}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Legend + honest scope note */}
      <div className={`flex flex-col gap-4 border-t px-5 py-6 text-[13px] sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-14 ${t.hairline} ${t.faint}`}>
        <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legend">
          {kinds.map((k) => (
            <li key={k} className="inline-flex items-center gap-2">
              <DeliveryMark kind={k} color={t.accent} />
              {deliveryLabel[k]}
            </li>
          ))}
        </ul>
        {data.footnote && <p className="max-w-xl lg:text-right">{data.footnote}</p>}
      </div>
    </div>
  );
}
