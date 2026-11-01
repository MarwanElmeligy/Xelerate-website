import type { SVGProps } from "react";

/* A small, consistent 24px stroke icon set drawn for Xelerate. */
type P = SVGProps<SVGSVGElement>;
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const icons = {
  arrowRight: (p: P) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUpRight: (p: P) => (
    <svg {...base} {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  chevronDown: (p: P) => (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  check: (p: P) => (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  ),
  menu: (p: P) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  ),
  close: (p: P) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  mail: (p: P) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  ),
  pin: (p: P) => (
    <svg {...base} {...p}>
      <path d="M12 21s-7-5.6-7-11.2A7 7 0 0 1 19 9.8C19 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  clock: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  /* Business / capability icons */
  ledger: (p: P) => (
    <svg {...base} {...p}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  layers: (p: P) => (
    <svg {...base} {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  ),
  globe: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  ),
  shield: (p: P) => (
    <svg {...base} {...p}>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  plug: (p: P) => (
    <svg {...base} {...p}>
      <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v4" />
    </svg>
  ),
  gauge: (p: P) => (
    <svg {...base} {...p}>
      <path d="M4.5 18a9 9 0 1 1 15 0" />
      <path d="m12 13 4-5" />
      <circle cx="12" cy="13" r="1.2" />
    </svg>
  ),
  lifebuoy: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m5.6 5.6 3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9" />
    </svg>
  ),
  compass: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  ),
  /* Precious metals workflow */
  sourcing: (p: P) => (
    <svg {...base} {...p}>
      <path d="M12 3v9M8.5 8.5 12 12l3.5-3.5" />
      <path d="M3 13h5l1.5 3h5L16 13h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Z" />
    </svg>
  ),
  ingots: (p: P) => (
    <svg {...base} {...p}>
      <path d="M3 20 5 15h6l2 5H3ZM11 20l2-5h6l2 5H11ZM7 15l2-5h6l2 5" />
      <path d="M12 3v3M8.5 4.5 10 6M15.5 4.5 14 6" />
    </svg>
  ),
  balance: (p: P) => (
    <svg {...base} {...p}>
      <path d="M12 4v16M7 20h10M5 7h14" />
      <path d="M5 7 2.5 13a2.5 2.5 0 0 0 5 0L5 7ZM19 7l-2.5 6a2.5 2.5 0 0 0 5 0L19 7Z" />
    </svg>
  ),
  exchange: (p: P) => (
    <svg {...base} {...p}>
      <path d="M4 8h14l-3-3M20 16H6l3 3" />
    </svg>
  ),
  report: (p: P) => (
    <svg {...base} {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 16v-3M12 16V9M16 16v-5" />
    </svg>
  ),
  /* Professional services workflow */
  target: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </svg>
  ),
  plan: (p: P) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 13h6M10 17h7M8 2v4M16 2v4" />
    </svg>
  ),
  people: (p: P) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16.5 14.6c2.3.2 4 1.9 4.5 4.6" />
    </svg>
  ),
  delivery: (p: P) => (
    <svg {...base} {...p}>
      <path d="M4 12.5 9 17.5 20 6.5" />
      <path d="M4 6.5h6M4 9.5h3" />
    </svg>
  ),
  invoice: (p: P) => (
    <svg {...base} {...p}>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  ),
  /* Poultry workflow */
  silo: (p: P) => (
    <svg {...base} {...p}>
      <path d="M5 21V8a4 4 0 0 1 8 0v13M13 21V12h6v9M3 21h18" />
      <path d="M5 12h8M5 16h8" />
    </svg>
  ),
  egg: (p: P) => (
    <svg {...base} {...p}>
      <path d="M12 3c3.6 0 6.5 5.4 6.5 10a6.5 6.5 0 0 1-13 0C5.5 8.4 8.4 3 12 3Z" />
    </svg>
  ),
  barn: (p: P) => (
    <svg {...base} {...p}>
      <path d="M3 10 12 4l9 6v11H3V10Z" />
      <path d="M9 21v-6h6v6M9 15l6 6M15 15l-6 6" />
    </svg>
  ),
  factory: (p: P) => (
    <svg {...base} {...p}>
      <path d="M3 21V11l5 3V11l5 3V11l5 3V5h3v16H3Z" />
      <path d="M7 18h2M12 18h2" />
    </svg>
  ),
  truck: (p: P) => (
    <svg {...base} {...p}>
      <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  ),
  phone: (p: P) => (
    <svg {...base} {...p}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M11 18.5h2" />
    </svg>
  ),
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & P) {
  const C = icons[name];
  return <C {...props} />;
}
