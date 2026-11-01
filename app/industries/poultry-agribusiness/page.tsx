import type { Metadata } from "next";
import Image from "next/image";
import { Icon, type IconName } from "@/components/icons";
import { RelatedIndustries } from "@/components/industry/IndustryBlocks";
import { Workflow } from "@/components/industry/Workflow";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { poultryWorkflow } from "@/lib/content/workflows";
import { breadcrumbLd, pageMetadata, serviceLd } from "@/lib/seo";

const path = "/industries/poultry-agribusiness/";
const description =
  "Xelerate NetSuite Poultry Solution: an industry-specific ERP covering feed mills, hatcheries, farms and slaughterhouses — with traceability, cost per bird and per kilogram, mobile apps and real-time analytics.";

export const metadata: Metadata = pageMetadata({
  title: "Poultry ERP on Oracle NetSuite | Xelerate Poultry Solution",
  description,
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries/" },
  { name: "Poultry & Agribusiness", path },
];

const problems = [
  "Feed waste and FCR drift",
  "Mortality spikes and health events",
  "Hatch-rate and chick-quality variation",
  "Processing yield losses",
  "Stock mismatches between sites",
  "Disconnected farm and finance data",
];

const capabilities = [
  "Batch / lot traceability, farm to fork",
  "Yield and shrink tracking in processing",
  "Forecasting for feed, growth and sales",
  "Mobile capture and approvals",
  "Multi-site consolidation",
  "Alerts and reminders",
];

const modules: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "barn",
    title: "Farm Management",
    text: "Configure farms, plan breeder and broiler cycles, and track chick placement, feed, health, weight and mortality — with cycle cost per bird and per kilogram.",
  },
  {
    icon: "egg",
    title: "Hatchery Management",
    text: "Track egg inventory, incubation conditions, hatch rates, chick quality and vaccination schedules, integrated with broiler farms.",
  },
  {
    icon: "silo",
    title: "Feed Mill Management",
    text: "Plan production, monitor raw materials, enforce quality control, manage finished feed and optimize delivery to farms.",
  },
  {
    icon: "factory",
    title: "Slaughterhouse Management",
    text: "From bird arrival to distribution: live bird handling, work orders, hygiene, waste and traceability, connected to inventory, sales and finance.",
  },
];

export default function PoultryPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker="Poultry & Agribusiness · Xelerate NetSuite Poultry Solution"
        title="From feed mill to"
        accent="final invoice."
        lede="An industry-specific ERP on Oracle NetSuite that unifies farms, hatcheries, feed mills and slaughterhouses — giving you real-time visibility of performance and cost at every stage of the poultry value chain."
        image="/images/visuals/poultry-agribusiness-production-campus.webp"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact-us/?topic=poultry" size="lg">
            Talk to our poultry team
          </Button>
          <Button href="#workflow" variant="ghost-dark" size="lg" arrow={false}>
            See the value chain
          </Button>
        </div>
      </PageHero>

      <section id="workflow" className="scroll-mt-28 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            kicker="The value chain"
            title="Five operations."
            accent="One integrated system."
            lede="Every batch, bird and kilogram moves through a single connected record — from raw feed to the consolidated P&L."
          />
          <div className="mt-14" data-reveal>
            <Workflow data={poultryWorkflow} label="Poultry value chain stages" />
          </div>
        </div>
      </section>

      {/* Problems → capabilities */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div data-reveal>
            <p className="kicker text-brand-700">Problems we solve</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Where poultry margins <span className="accent-serif text-brand-700">quietly leak.</span>
            </h2>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {problems.map((p) => (
                <li key={p} className="flex items-center gap-4 py-4 text-[17px] font-medium text-ink-800">
                  <span className="size-1.5 rounded-full bg-harvest" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <p className="kicker text-brand-700">What changes</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Control at every stage, <span className="accent-serif text-brand-700">in real time.</span>
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {capabilities.map((c) => (
                <li key={c} className="flex gap-3 rounded-2xl border border-line bg-paper p-5 text-[15.5px] font-medium text-ink-800">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-brand-700" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modules + mobility */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            kicker="Poultry modules"
            title="Purpose-built for each"
            accent="operation you run."
            lede="Built by Xelerate on Oracle NetSuite, so operational data flows straight into inventory, sales and financials."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2" data-reveal-group>
            {modules.map((m) => (
              <article key={m.title} className="group rounded-3xl border border-line bg-white p-8 transition-shadow duration-500 hover:shadow-[0_30px_60px_-34px_rgba(4,18,26,0.35)]">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#1d3322] text-[#bfeaa9]">
                  <Icon name={m.icon} className="size-6" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink-900">{m.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">{m.text}</p>
              </article>
            ))}
          </div>

          <div className="on-dark mt-4 grid gap-10 rounded-3xl bg-ink-900 p-8 text-white md:grid-cols-12 md:p-12" data-reveal>
            <div className="md:col-span-5">
              <p className="kicker text-[#bfeaa9]">Mobility at your fingertips</p>
              <h3 className="display mt-3 text-3xl md:text-4xl">Poultry operations don&apos;t stop at the office.</h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-white/70">
                Field teams record what happens where it happens, and the ERP updates instantly.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 md:col-span-7">
              {[
                { t: "Farm & Field app", d: "Track farm activities, monitor feed and flock health, and record cycle data in real time." },
                { t: "Sales & Van app", d: "Manage orders, deliveries and van sales with instant synchronization to the ERP." },
                { t: "Cost analysis", d: "Cost per bird and per kilogram, by cycle, farm and site." },
                { t: "Consolidated KPIs", d: "Feed consumption, mortality and weight dashboards at cycle level." },
              ].map((x) => (
                <li key={x.t} className="rounded-2xl bg-white/[0.05] p-6 ring-1 ring-inset ring-white/10">
                  <Icon name={x.t.includes("app") ? "phone" : "ledger"} className="size-5 text-[#8BD46B]" />
                  <h4 className="mt-4 font-semibold">{x.t}</h4>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/65">{x.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="pb-24 md:pb-32">
        <div className="container-x grid gap-4 lg:grid-cols-12">
          <article className="rounded-3xl border border-line bg-white p-8 md:p-10 lg:col-span-7" data-reveal>
            <div className="flex items-center gap-4">
              <Image src="/images/clients/osool-poultry.webp" alt="Osool Poultry" width={96} height={74} className="h-14 w-auto" />
              <div>
                <p className="kicker text-brand-700">Case study</p>
                <h3 className="text-xl font-semibold tracking-tight">Osool Poultry</h3>
              </div>
            </div>
            <dl className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <dt className="kicker text-ink-500">Challenge</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-700">
                  Fragmented systems made it hard to track operations and measure efficiency across the production chain.
                </dd>
              </div>
              <div>
                <dt className="kicker text-ink-500">Solution</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-700">
                  Xelerate Poultry Solution, with comprehensive training and system integration across all operational units.
                </dd>
              </div>
              <div>
                <dt className="kicker text-ink-500">Result</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-700">
                  Improved efficiency, lower costs and greater transparency across operations.
                </dd>
              </div>
            </dl>
          </article>
          <figure className="on-dark flex flex-col justify-between rounded-3xl bg-ink-950 p-8 text-white md:p-10 lg:col-span-5" data-reveal>
            <blockquote className="text-xl font-medium leading-snug tracking-tight">
              “Since going live, Taryah Poultry KSA has been running smoothly across all operations, and the system
              continues to support our growth and efficiency.”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-xl bg-white p-1.5">
                <Image src="/images/clients/taryah-poultry.webp" alt="" width={169} height={200} className="h-full w-auto object-contain" />
              </span>
              <span>
                <span className="block font-semibold">Taryah Poultry</span>
                <span className="block text-sm text-white/60">Saudi Arabia</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <RelatedIndustries current={path} />
      <CTASection
        title="Ready to take your poultry business"
        accent="to the next level?"
        text="Talk to the team behind the Xelerate NetSuite Poultry Solution about your farms, hatcheries, feed mills and processing."
        cta="Talk to our poultry team"
        href="/contact-us/?topic=poultry"
      />
      <JsonLd
        data={[breadcrumbLd(crumbs), serviceLd({ name: "Xelerate NetSuite Poultry Solution", description, path })]}
      />
    </>
  );
}
