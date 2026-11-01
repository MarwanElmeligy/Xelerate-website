import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { Method } from "@/components/home/Sections";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/content/services";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

const path = "/services/";
export const metadata: Metadata = pageMetadata({
  title: "Oracle NetSuite Consulting & Services for the Middle East",
  description:
    "Xelerate's Oracle NetSuite services: consultation, implementation, integration, optimization, Arabization, training and support for organizations in Egypt, Saudi Arabia and the Middle East.",
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path },
];

const why: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Oracle NetSuite partner", text: "An Oracle NetSuite Solution Provider Partner focused on getting real value from the platform." },
  { icon: "compass", title: "Business knowledge", text: "Experience across industries and their processes lets us shape the right end-to-end NetSuite solution." },
  { icon: "clock", title: "~15 years of ERP experience", text: "Consultation, project management, analysis, design, implementation, development and Arabization." },
];

const extras = [
  { title: "Business process consultation", text: "Professional analysis of processes and systems to find where NetSuite can improve day-to-day operations." },
  { title: "NetSuite Arabization", text: "Arabic-language configuration, forms and outputs for teams and documents that need it." },
  { title: "Training & enablement", text: "Role-based training so each team uses the features relevant to its work." },
  { title: "Mobile field extensions", text: "Field-level extensions for handheld devices where work happens away from a desk." },
];

const supportStandards = [
  { title: "Expert support team", text: "Assigned team members with related experience to maintain continuity and familiarity." },
  { title: "Service on demand", text: "On-demand support and maintenance for NetSuite clients, remote or on-site." },
  { title: "In-depth analysis", text: "Root-cause analysis of issues, with fixes and workarounds agreed collaboratively." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker="Services"
        title="We align our success"
        accent="with yours."
        lede="Xelerate sets a clear roadmap for your digital transformation and delivers NetSuite solutions shaped around your business — before, during and long after go-live."
      >
        <Button href="/contact-us/" size="lg">
          Book a consultation
        </Button>
      </PageHero>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading kicker="Core services" title="Find the service that fits" accent="where you are." />
          <div className="mt-14 grid gap-4 md:grid-cols-2" data-reveal-group>
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group relative flex min-h-[17rem] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-8 transition-[border-color,box-shadow] duration-500 hover:border-brand/40 hover:shadow-[0_30px_60px_-34px_rgba(4,18,26,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-700">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <span className="font-mono text-sm text-ink-400">0{i + 1}</span>
                </div>
                <div>
                  <h2 className="display text-3xl">{s.name}</h2>
                  <p className="mt-2 max-w-md text-[15.5px] leading-relaxed text-ink-600">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700">
                    Learn more
                    <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 grid gap-4 rounded-3xl border border-line bg-paper-2/60 p-8 md:grid-cols-4" data-reveal-group>
            {extras.map((e) => (
              <div key={e.title}>
                <h3 className="text-lg font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 md:px-5">
        <div className="on-dark rounded-[2rem] bg-ink-950 py-24 text-white md:py-28">
          <div className="container-x grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading dark kicker="Why partner with us" title="A partner, not just" accent="a vendor." />
              <ul className="mt-10 space-y-7" data-reveal-group>
                {why.map((w) => (
                  <li key={w.title} className="flex gap-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-brand-300 ring-1 ring-inset ring-white/10">
                      <Icon name={w.icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{w.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-white/65">{w.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white/[0.04] p-8 ring-1 ring-inset ring-white/10 md:p-10" data-reveal>
              <p className="kicker text-brand-300">Post-launch support standards</p>
              <h3 className="display mt-3 text-3xl">Every step of the way.</h3>
              <ul className="mt-8 divide-y divide-white/10">
                {supportStandards.map((s) => (
                  <li key={s.title} className="py-5">
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/65">{s.text}</p>
                  </li>
                ))}
              </ul>
              <Link href="/services/netsuite-support/" className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-300">
                NetSuite support <Icon name="arrowRight" className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Method />
      <CTASection />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
