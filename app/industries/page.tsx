import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

const path = "/industries/";
export const metadata: Metadata = pageMetadata({
  title: "Industries | Oracle NetSuite Solutions by Sector",
  description:
    "Xelerate delivers Oracle NetSuite for poultry & agribusiness, precious metals, professional services, manufacturing, distribution and trading businesses across the Middle East.",
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path },
];

const featured = [
  {
    href: "/industries/poultry-agribusiness/",
    title: "Poultry & Agribusiness",
    text: "Farms, hatcheries, feed mills and processing on one platform with full traceability and cost per kilogram.",
    image: "/images/visuals/poultry-agribusiness-production-campus.webp",
    alt: "Aerial view of a modern poultry production campus at golden hour",
  },
  {
    href: "/industries/precious-metals/",
    title: "Precious Metals",
    text: "Weight, purity and value carried through sourcing, inventory, trading and finance.",
    image: "/images/visuals/precious-metals-gold-silver-bullion.webp",
    alt: "Gold bars and granules beside a silver ingot on dark slate",
  },
  {
    href: "/industries/professional-services/",
    title: "Professional Services",
    text: "Opportunity to invoice — projects, resources, time, billing and profitability connected.",
    image: "/images/visuals/professional-services-project-timeline.webp",
    alt: "Glass bars arranged like a project timeline with milestone spheres",
  },
];

const more: { icon: IconName; title: string; text: string }[] = [
  { icon: "factory", title: "Manufacturing", text: "Control over production, inventory, costing and financial reporting in one system." },
  { icon: "truck", title: "Distribution", text: "Purchasing, warehouses, order fulfillment and financials across locations." },
  { icon: "exchange", title: "Trading", text: "Multi-currency buying and selling with landed cost, margins and consolidated reporting." },
];

const whyNetSuite: { icon: IconName; title: string; text: string }[] = [
  { icon: "globe", title: "Cloud delivery", text: "No on-premise servers to buy, run or upgrade." },
  { icon: "layers", title: "One integrated suite", text: "ERP, CRM and commerce on a single data model — fewer handoffs, fewer errors." },
  { icon: "ledger", title: "Real-time visibility", text: "Dashboards and reports drawn from live data instead of spreadsheets." },
  { icon: "phone", title: "Access anywhere", text: "Browser and mobile access for teams in the office, warehouse or field." },
  { icon: "compass", title: "Built for growth", text: "Multi-subsidiary, multi-currency capability that scales with new entities." },
  { icon: "shield", title: "Customize with confidence", text: "Tailor the platform without locking yourself out of twice-yearly releases." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker="Industries"
        title="Industry knowledge first."
        accent="Platform second."
        lede="Over approximately 15 years, Xelerate has learned how different industries really operate — and how to shape Oracle NetSuite around them."
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-4 lg:grid-cols-3" data-reveal-group>
            {featured.map((f) => (
              <Link key={f.href} href={f.href} className="group overflow-hidden rounded-3xl border border-line bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-ink-900">{f.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{f.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700">
                    Explore
                    <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3" data-reveal-group>
            {more.map((m) => (
              <div key={m.title} className="rounded-3xl border border-line bg-paper-2/60 p-7">
                <Icon name={m.icon} className="size-6 text-brand-700" />
                <h2 className="mt-5 text-xl font-semibold tracking-tight">{m.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{m.text}</p>
                <Link href="/contact-us/" className="mt-4 inline-block text-[14.5px] font-semibold text-brand-700 hover:text-ink-900">
                  Discuss your requirements →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            kicker="Why run on NetSuite"
            title="A platform that keeps up"
            accent="with your ambitions."
            lede="Oracle NetSuite gives growing businesses one cloud platform for accounting, ERP, CRM and commerce."
          />
          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {whyNetSuite.map((w) => (
              <li key={w.title} className="border-t border-line pt-6">
                <Icon name={w.icon} className="size-6 text-brand-700" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{w.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-6">
        <CTASection title="Not sure where your industry fits?" accent="Let's talk it through." />
      </div>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
