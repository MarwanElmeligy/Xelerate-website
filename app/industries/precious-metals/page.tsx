import type { Metadata } from "next";
import { ApproachStrip, RelatedIndustries, ValueProps } from "@/components/industry/IndustryBlocks";
import { Workflow } from "@/components/industry/Workflow";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { preciousMetalsWorkflow } from "@/lib/content/workflows";
import { breadcrumbLd, pageMetadata, serviceLd } from "@/lib/seo";

const path = "/industries/precious-metals/";
const description =
  "Oracle NetSuite for gold and precious metals businesses in Egypt, Saudi Arabia and the Middle East. Xelerate connects sourcing, inventory and valuation, trading and finance — with weight, purity and value in every transaction.";

export const metadata: Metadata = pageMetadata({
  title: "NetSuite ERP for Precious Metals & Gold Trading",
  description,
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries/" },
  { name: "Precious Metals", path },
];

const GOLD = "#8a6516";

export default function PreciousMetalsPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker="Precious Metals · Oracle NetSuite"
        title="Every gram, accounted for."
        accent="From vault to ledger."
        lede="Xelerate helps gold and precious metals traders, refiners and jewelry businesses run purchasing, inventory, trading and finance on Oracle NetSuite — with weight, purity and value carried through every transaction."
        image="/images/visuals/precious-metals-gold-silver-bullion.webp"
        accentClass="text-gold-300"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact-us/?topic=precious-metals" size="lg">
            Book a consultation
          </Button>
          <Button href="#workflow" variant="ghost-dark" size="lg" arrow={false}>
            See the workflow
          </Button>
        </div>
      </PageHero>

      <section id="workflow" className="scroll-mt-28 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            kicker="The metal flow"
            title="One journey."
            accent="Four connected stages."
            lede="Follow a lot from purchase to profit. Select any stage to see what's captured there — and how it's delivered on NetSuite."
          />
          <div className="mt-14" data-reveal>
            <Workflow data={preciousMetalsWorkflow} label="Precious metals workflow stages" />
          </div>
        </div>
      </section>

      <ValueProps
        tone="white"
        accentColor={GOLD}
        kicker="Why it matters"
        title="Built for the people"
        accent="accountable for the metal."
        lede="CFOs, operations leaders and owners who need to know what they hold, what it's worth and what every trade earned."
        items={[
          {
            title: "Every gram accounted for",
            text: "Weight and purity travel with the stock from receipt to sale, so inventory is reported in pieces, weight and value.",
          },
          {
            title: "Margins visible on every trade",
            text: "Metal rate, premium and cost captured per line — margin by item, customer and location without rebuilding it in spreadsheets.",
          },
          {
            title: "One ledger, every entity and currency",
            text: "Multi-subsidiary, multi-currency accounting with consolidated reporting for group leadership.",
          },
          {
            title: "Controls and traceability built in",
            text: "Role-based approvals, lot traceability and a full change history on every record.",
          },
        ]}
      />

      <ApproachStrip accentColor={GOLD} />
      <RelatedIndustries current={path} />
      <CTASection
        title="Bring precision to your precious metals operation."
        accent="Start with one conversation."
        text="Walk us through how metal moves through your business today. We'll show what NetSuite covers as standard, what we'd configure, and where an integration makes sense."
        href="/contact-us/?topic=precious-metals"
      />
      <JsonLd
        data={[
          breadcrumbLd(crumbs),
          serviceLd({ name: "Oracle NetSuite for Precious Metals", description, path }),
        ]}
      />
    </>
  );
}
