import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/icons";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

const path = "/features/";
export const metadata: Metadata = pageMetadata({
  title: "Oracle NetSuite ERP Capabilities | Finance, CRM, Supply Chain & More",
  description:
    "Explore Oracle NetSuite capabilities — ERP and financials, professional services automation, CRM, supply chain, planning and budgeting, cash management, consolidation and tax — delivered by Xelerate.",
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "NetSuite capabilities", path },
];

const groups: { icon: IconName; title: string; lead: string; items: { t: string; d: string }[] }[] = [
  {
    icon: "ledger",
    title: "Enterprise resource planning",
    lead: "Make smarter decisions, faster.",
    items: [
      { t: "Better decisions", d: "Customizable dashboards, reports and analytics — from summary view to transaction detail." },
      { t: "Simpler operations", d: "Automate manual processes to free people for customers and new opportunities." },
      { t: "Run a global business", d: "Real-time visibility at local, regional and headquarters levels with standardized processes across subsidiaries." },
    ],
  },
  {
    icon: "people",
    title: "Professional services automation",
    lead: "Run great projects, start to finish.",
    items: [
      { t: "On time, within budget", d: "Current project status and accurate expense insight so issues are handled on the spot." },
      { t: "Skills & availability", d: "Find and assign available consultants to raise utilization." },
    ],
  },
  {
    icon: "target",
    title: "Customer relationship management",
    lead: "Manage current and potential customers.",
    items: [
      { t: "Sales force automation", d: "Opportunity, upsell and quote management through forecasting, orders, fulfillment and commissions." },
      { t: "Single customer view", d: "Every online, in-store and phone interaction in one record." },
      { t: "Customer satisfaction", d: "Multi-channel campaigns and instant access to customer information to drive retention." },
    ],
  },
  {
    icon: "truck",
    title: "Supply chain management",
    lead: "Manage and optimize the flow of goods.",
    items: [
      { t: "One system, real-time data", d: "Production, inventory, financials and open orders updated as they happen." },
      { t: "Oversee the flow of goods", d: "Understand demand, allocate resources and schedule production to deliver as promised." },
      { t: "Increased profitability", d: "Lower planning and execution costs and identify risk earlier." },
    ],
  },
  {
    icon: "plan",
    title: "Planning & budgeting",
    lead: "Faster, more accurate budgets and forecasts.",
    items: [
      { t: "Data synchronization", d: "Automated access to current financial data, reducing manual input and reconciliation." },
      { t: "Participation & accountability", d: "Operational managers contribute directly, so finance gets meaningful input." },
      { t: "One version of the truth", d: "Changes flow automatically into reports and dashboards." },
    ],
  },
  {
    icon: "gauge",
    title: "Profitability & cost management",
    lead: "Track project profitability.",
    items: [
      { t: "Real-time profitability", d: "Revenue, cost, profit and margin per project, tied back to the general ledger." },
      { t: "Job costing", d: "Labor cost from tracked time, accounted for in the general ledger." },
    ],
  },
  {
    icon: "balance",
    title: "Cash management",
    lead: "Real-time cash-flow insight.",
    items: [
      { t: "Account reconciliation", d: "Automated bank reconciliation with transactions created from imported bank data." },
      { t: "Working capital", d: "Accurate reporting to forecast cash requirements and optimize working capital." },
      { t: "Treasury controls", d: "Automate the repetitive steps behind financial-risk policies and procedures." },
    ],
  },
  {
    icon: "layers",
    title: "Financial consolidation",
    lead: "Centralized oversight, reduced risk.",
    items: [
      { t: "Centralized oversight", d: "Real-time financials at subsidiary and parent level." },
      { t: "Reduced risk of fraud", d: "Continuous monitoring and role- and user-based access controls on sensitive data." },
      { t: "One platform", d: "Retire the cost and complexity of multiple accounting systems." },
    ],
  },
  {
    icon: "report",
    title: "Tax reporting",
    lead: "Tax determination and compliance.",
    items: [
      { t: "Configurable tax engine", d: "Handle local taxes across subsidiaries with historical rate changes retained (SuiteTax)." },
      { t: "Detailed reporting", d: "Analyze taxable transactions in real time without manual calculation." },
      { t: "Integrated", d: "Tax determination in the same system used for sales, billing and revenue." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker="Oracle NetSuite capabilities"
        title="One platform."
        accent="Shaped around you by Xelerate."
        lede="We help you select the NetSuite capabilities that matter, then tailor them to your processes, reporting, user roles and Arabic-language needs."
        image="/images/visuals/cloud-erp-transformation-unified-platform.webp"
      />
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            kicker="Capabilities"
            title="A unified ERP and CRM that"
            accent="scales with the business."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
            {groups.map((g) => (
              <article key={g.title} className="flex flex-col rounded-3xl border border-line bg-white p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon name={g.icon} className="size-5" />
                </span>
                <h2 className="mt-5 text-xl font-semibold tracking-tight">{g.title}</h2>
                <p className="mt-1 text-[14.5px] text-brand-700">{g.lead}</p>
                <ul className="mt-5 space-y-3 border-t border-line pt-5">
                  {g.items.map((it) => (
                    <li key={it.t}>
                      <h3 className="text-[15px] font-semibold text-ink-900">{it.t}</h3>
                      <p className="mt-0.5 text-[14.5px] leading-relaxed text-ink-600">{it.d}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Which capabilities does your business need?" accent="We'll help you decide." />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
