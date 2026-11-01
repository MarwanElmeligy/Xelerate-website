"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const HeroGeometry = dynamic(() => import("./HeroGeometry").then((m) => m.HeroGeometry), { ssr: false });

const query = "(min-width: 768px)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/** Only load the decorative geometry (and its GSAP) on tablet/desktop. */
export function HeroGeometryLoader() {
  const wide = useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);
  return wide ? <HeroGeometry /> : null;
}
