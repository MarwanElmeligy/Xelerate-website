import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services/", priority: 0.9 },
  { path: "/services/netsuite-implementation/", priority: 0.9 },
  { path: "/services/netsuite-integration/", priority: 0.8 },
  { path: "/services/netsuite-optimization/", priority: 0.8 },
  { path: "/services/netsuite-support/", priority: 0.8 },
  { path: "/industries/", priority: 0.8 },
  { path: "/industries/poultry-agribusiness/", priority: 0.8 },
  { path: "/industries/precious-metals/", priority: 0.8 },
  { path: "/industries/professional-services/", priority: 0.8 },
  { path: "/features/", priority: 0.7 },
  { path: "/about/", priority: 0.7 },
  { path: "/contact-us/", priority: 0.7 },
  { path: "/careers/", priority: 0.4 },
  { path: "/privacy-policy/", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({ url: `${site.url}${r.path}`, lastModified, changeFrequency: "monthly", priority: r.priority }));
}
