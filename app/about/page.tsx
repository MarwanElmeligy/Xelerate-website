import type { Metadata } from "next";
import Image from "next/image";
import { Icon, type IconName } from "@/components/icons";
import { ClientMarquee } from "@/components/shared/ClientMarquee";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/about/";
export const metadata: Metadata = pageMetadata({
  title: "About Xelerate | Middle East Oracle NetSuite Partner",
  description:
    "Xelerate Business Solutions is an Oracle NetSuite Solution Provider Partner and part of UNITED OFOQ Group, with approximately 15 years of NetSuite and ERP experience across Egypt, Saudi Arabia and the Middle East.",
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

const pillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "globe",
    title: "Deep regional roots",
    text: "Local teams who understand how businesses in Egypt, Saudi Arabia and the wider region operate — culturally and commercially.",
  },
  {
    icon: "shield",
    title: "Partner expertise",
    text: "An Oracle NetSuite Solution Provider Partner with consultants experienced across finance, operations and industry processes.",
  },
  {
    icon: "report",
    title: "Localized compliance",
    text: "Configuration for local tax and reporting requirements, plus NetSuite Arabization for Arabic-speaking teams.",
  },
];

const facts = [
  { k: `~${site.experienceYears} yrs`, v: "NetSuite & ERP experience" },
  { k: String(site.parent.since), v: `${site.parent.name} technology heritage` },
  { k: "7", v: "Phase implementation methodology" },
  { k: "4", v: "Core NetSuite services" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker="About Xelerate"
        title="Prosperity through technology,"
        accent="delivered locally."
        lede={`Xelerate Business Solutions helps Middle East organizations thrive on Oracle NetSuite. We are part of ${site.parent.name}, whose enterprise-technology heritage dates to ${site.parent.since}.`}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6" data-reveal>
            <h2 className="display text-4xl sm:text-5xl">
              Global cloud ERP. <span className="accent-serif text-brand-700">Local insight.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink-700">
              <p>
                For approximately {site.experienceYears} years, Xelerate&apos;s team has helped organizations use NetSuite and
                ERP to improve financial visibility, operational control and business processes across the Middle East.
              </p>
              <p>
                We combine the depth of a proven global platform with the judgment of consultants who know the region —
                its regulations, its languages and the way its businesses grow.
              </p>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
              {facts.map((f) => (
                <div key={f.v} className="bg-white p-6">
                  <dt className="sr-only">{f.v}</dt>
                  <dd>
                    <span className="display block text-4xl text-ink-900">{f.k}</span>
                    <span className="mt-2 block text-[14px] text-ink-600">{f.v}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-6" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/visuals/xelerate-connected-enterprise-hero.webp"
                alt="Glass geometric forms connected by green light lines rising along an accelerating arc"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[72%_50%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <SectionHeading kicker="Why Xelerate for the Middle East" title="Your local" accent="NetSuite partner." />
          <ul className="mt-14 grid gap-4 md:grid-cols-3" data-reveal-group>
            {pillars.map((p) => (
              <li key={p.title} className="rounded-3xl border border-line bg-paper p-8">
                <Icon name={p.icon} className="size-6 text-brand-700" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClientMarquee label="Proud to serve" />
      <div className="pt-6">
        <CTASection />
      </div>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
