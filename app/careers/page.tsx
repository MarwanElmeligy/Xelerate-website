import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/careers/";
export const metadata: Metadata = pageMetadata({
  title: "Careers at Xelerate Business Solutions",
  description:
    "Join Xelerate — we hire and subcontract motivated NetSuite and ERP professionals. Competitive packages, training, mentorship and flexible working.",
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Careers", path },
];

const benefits = [
  "Competitive packages",
  "Educational programs and training",
  "Mentorship program",
  "Flexible schedule and remote working",
  "Paid holidays and volunteer days",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker="Careers"
        title="Grow with the team"
        accent="behind the transformation."
        lede="We invest in our people's skills and knowledge, because talented professionals are the backbone of our success and growth."
      >
        <Button href={`mailto:${site.email}?subject=Careers%20at%20Xelerate`} size="lg">
          Send us your CV
        </Button>
      </PageHero>
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div data-reveal>
            <h2 className="display text-4xl sm:text-5xl">
              Join Xelerate <span className="accent-serif text-brand-700">as we grow.</span>
            </h2>
            <p className="lede mt-6 text-ink-600">
              We&apos;re looking to hire — and to subcontract with — motivated individuals and qualified subcontractors in
              NetSuite consulting, development, project management and business analysis.
            </p>
            <p className="mt-6 text-[15.5px] text-ink-600">
              Email your CV and a short note about your experience to{" "}
              <a className="font-semibold text-brand-700 hover:text-ink-900" href={`mailto:${site.email}?subject=Careers%20at%20Xelerate`}>
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 md:p-10" data-reveal>
            <p className="kicker text-ink-500">Benefits</p>
            <ul className="mt-6 divide-y divide-line">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 py-4 text-[17px] font-medium">
                  <Icon name="check" className="size-5 text-brand-700" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTASection title="Looking for a NetSuite partner instead?" accent="Let's talk." />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
