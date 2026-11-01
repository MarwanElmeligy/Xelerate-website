import type { Metadata } from "next";
import { ApproachStrip, RelatedIndustries, ValueProps } from "@/components/industry/IndustryBlocks";
import { Workflow } from "@/components/industry/Workflow";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { professionalServicesWorkflow } from "@/lib/content/workflows";
import { breadcrumbLd, pageMetadata, serviceLd } from "@/lib/seo";

const path = "/industries/professional-services/";
const description =
  "Oracle NetSuite for consulting firms, IT services and system integrators, engineering, advisory and agencies. Xelerate connects opportunities, projects, resources, time, billing and profitability in one system.";

export const metadata: Metadata = pageMetadata({
  title: "NetSuite for Professional Services Firms | Projects, Resources & Billing",
  description,
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries/" },
  { name: "Professional Services", path },
];

const segments = [
  "Consulting & advisory",
  "IT services & system integrators",
  "Engineering firms",
  "Agencies",
  "Project-based organizations",
];

const EMERALD = "#00843f";

export default function ProfessionalServicesPage() {
  return (
    <>
      <PageHero
        tone="light"
        crumbs={crumbs}
        kicker="Professional Services · Oracle NetSuite"
        title="Run every project"
        accent="like your best one."
        lede="Xelerate connects opportunities, projects, people and billing on Oracle NetSuite — so project-based firms see margin while the work is still in progress, not after it's invoiced."
        image="/images/visuals/professional-services-project-timeline.webp"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact-us/?topic=professional-services" size="lg">
            Book a consultation
          </Button>
          <Button href="#workflow" variant="ghost-light" size="lg" arrow={false}>
            See the workflow
          </Button>
        </div>
        <ul className="mt-10 flex max-w-2xl flex-wrap gap-2" aria-label="Built for">
          {segments.map((s) => (
            <li key={s} className="rounded-full bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-ink-700 ring-1 ring-inset ring-ink-900/10 backdrop-blur">
              {s}
            </li>
          ))}
        </ul>
      </PageHero>

      <section id="workflow" className="scroll-mt-28 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            kicker="Contract to cash"
            title="From first conversation"
            accent="to final margin."
            lede="Five stages, one record. Select a stage to see what's captured and how NetSuite carries it forward."
          />
          <div className="mt-14 rounded-[2.1rem] p-px shadow-[0_40px_90px_-50px_rgba(4,18,26,0.45)] [background:linear-gradient(135deg,rgba(0,153,90,0.35),rgba(14,124,134,0.15),rgba(7,28,36,0.08))]" data-reveal>
            <Workflow data={professionalServicesWorkflow} label="Professional services workflow stages" />
          </div>
        </div>
      </section>

      <ValueProps
        tone="white"
        accentColor={EMERALD}
        kicker="Business benefits"
        title="Less chasing."
        accent="More delivering."
        lede="For managing partners, delivery leads and finance teams who need one honest picture of every engagement."
        items={[
          {
            title: "Know your margin before the project ends",
            text: "Budgets, approved time and costs sit together, so profitability is visible mid-project — not discovered at year-end.",
          },
          {
            title: "Put the right people on the right work",
            text: "Skills, availability and utilization in one view, so you staff engagements with confidence and protect billable capacity.",
          },
          {
            title: "Bill faster, with fewer disputes",
            text: "Time and materials, fixed-fee, milestone and recurring billing drawn straight from approved time and project data.",
          },
          {
            title: "One view across every project and entity",
            text: "Executive dashboards across projects, clients, service lines and subsidiaries — from the same numbers finance closes on.",
          },
        ]}
      />

      <ApproachStrip accentColor={EMERALD} />
      <RelatedIndustries current={path} />
      <CTASection
        title="See your firm's projects, people and profit"
        accent="in one place."
        text="Tell us how work flows from proposal to invoice today. We'll map it onto NetSuite and show where the time, leakage and visibility gains are."
        href="/contact-us/?topic=professional-services"
      />
      <JsonLd
        data={[
          breadcrumbLd(crumbs),
          serviceLd({ name: "Oracle NetSuite for Professional Services", description, path }),
        ]}
      />
    </>
  );
}
