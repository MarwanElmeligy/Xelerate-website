import type { IconName } from "@/components/icons";

export type DeliveryKind = "standard" | "configured" | "integration" | "solution";

export const deliveryLabel: Record<DeliveryKind, string> = {
  standard: "Oracle NetSuite standard",
  configured: "Configured by Xelerate",
  integration: "Third-party integration",
  solution: "Xelerate Poultry Solution",
};

export type WorkflowStage = {
  id: string;
  title: string;
  icon: IconName;
  summary: string;
  signals: string[];
  delivery: { kind: DeliveryKind; text: string }[];
};

export type WorkflowTheme = "gold" | "emerald" | "harvest";

export type Workflow = {
  id: string;
  theme: WorkflowTheme;
  /** visual identity of each stage node */
  shape: "diamond" | "square" | "circle";
  /** what the travelling data packets look like */
  packet: "diamond" | "capsule" | "dot";
  stages: WorkflowStage[];
  footnote?: string;
};

export const preciousMetalsWorkflow: Workflow = {
  id: "precious-metals",
  theme: "gold",
  shape: "diamond",
  packet: "diamond",
  stages: [
    {
      id: "sourcing",
      title: "Sourcing",
      icon: "sourcing",
      summary:
        "Purchases from refiners, wholesalers and traders are captured once — weight, purity and price recorded at receipt, against the right vendor and location.",
      signals: ["Vendor & terms", "Gross weight", "Purity / karat", "Purchase rate & currency"],
      delivery: [
        { kind: "standard", text: "Purchase orders, item receipts and vendor bills" },
        { kind: "configured", text: "Weight and purity captured on every receipt" },
      ],
    },
    {
      id: "inventory",
      title: "Inventory & Valuation",
      icon: "ingots",
      summary:
        "Stock is visible by location in pieces, gross weight and fine weight, with lot numbers carrying purity and origin through every movement.",
      signals: ["Location", "Lot / batch", "Fine weight", "Inventory value"],
      delivery: [
        { kind: "standard", text: "Multi-location inventory, lot-numbered items and transfers" },
        { kind: "configured", text: "Fine-weight calculation and valuation views" },
        { kind: "integration", text: "Optional market-rate feed through a connector" },
      ],
    },
    {
      id: "trading",
      title: "Trading & Sales",
      icon: "exchange",
      summary:
        "Quotes and orders are priced from the metal rate plus premium or making charge — so every sale carries its own cost, price and margin.",
      signals: ["Customer & channel", "Metal rate", "Premium / making charge", "Margin per line"],
      delivery: [
        { kind: "standard", text: "Quotes, sales orders, invoicing and multi-currency" },
        { kind: "configured", text: "Price build-up from metal rate and premium" },
      ],
    },
    {
      id: "finance",
      title: "Finance & Reporting",
      icon: "report",
      summary:
        "Every movement posts to the ledger as it happens — consolidated across entities and currencies, with margin and position reporting for leadership.",
      signals: ["Margin by trade", "Currency revaluation", "Entity consolidation", "Audit trail"],
      delivery: [
        { kind: "standard", text: "Multi-subsidiary, multi-currency ledger (NetSuite OneWorld)" },
        { kind: "configured", text: "Fine-weight position and margin dashboards" },
      ],
    },
  ],
  footnote:
    "Capabilities combine standard Oracle NetSuite features, configuration by Xelerate and, where marked, third-party integrations. Final scope depends on your NetSuite edition and is confirmed during discovery.",
};

export const professionalServicesWorkflow: Workflow = {
  id: "professional-services",
  theme: "emerald",
  shape: "square",
  packet: "capsule",
  stages: [
    {
      id: "opportunity",
      title: "Opportunity",
      icon: "target",
      summary:
        "Pipeline, estimates and pricing live in NetSuite CRM. When a deal is won, the project is created from it — no re-keying scope or rates.",
      signals: ["Opportunity & estimate", "Rate card", "Contract terms"],
      delivery: [
        { kind: "standard", text: "NetSuite CRM: opportunities, estimates and sales orders" },
        { kind: "configured", text: "Project templates triggered from won deals" },
      ],
    },
    {
      id: "planning",
      title: "Project Planning",
      icon: "plan",
      summary:
        "Templates set up tasks, milestones and budgets in minutes, so every engagement starts with a baseline you can measure against.",
      signals: ["Tasks & milestones", "Cost & revenue budget", "Billing schedule"],
      delivery: [{ kind: "standard", text: "Project records, templates and project budgets" }],
    },
    {
      id: "resources",
      title: "Resource Allocation",
      icon: "people",
      summary:
        "See who is available, and with which skills, before work is promised — then allocate people across projects with confidence.",
      signals: ["Skills & availability", "Allocation", "Utilization target"],
      delivery: [{ kind: "standard", text: "Resource allocation and availability views" }],
    },
    {
      id: "delivery",
      title: "Delivery",
      icon: "delivery",
      summary:
        "Time and expenses are captured against tasks — on desktop or mobile — and approved by project managers in the flow of work.",
      signals: ["Timesheets", "Expenses", "Approvals", "% complete"],
      delivery: [{ kind: "standard", text: "Time tracking, expense reports, approvals and mobile entry" }],
    },
    {
      id: "billing",
      title: "Billing & Profitability",
      icon: "invoice",
      summary:
        "Bill on time and materials, fixed fee, milestones or recurring schedules. Revenue, cost and margin roll up by project, client and service line.",
      signals: ["Invoices", "Revenue recognition", "Project margin", "Utilization"],
      delivery: [
        { kind: "standard", text: "Project billing, invoicing and revenue recognition" },
        { kind: "configured", text: "Profitability dashboards by project, client and service line" },
      ],
    },
  ],
  footnote:
    "Project and resource management run on NetSuite's professional services capabilities (SuiteProjects); advanced revenue recognition requires the relevant NetSuite module. Licensing is confirmed during discovery.",
};

export const poultryWorkflow: Workflow = {
  id: "poultry",
  theme: "harvest",
  shape: "circle",
  packet: "dot",
  stages: [
    {
      id: "feed",
      title: "Feed Mill",
      icon: "silo",
      summary: "Plan production, control raw materials and quality, and deliver finished feed to farms on time.",
      signals: ["Raw materials", "Batches", "Quality checks", "Farm deliveries"],
      delivery: [{ kind: "solution", text: "Feed Mill Management" }],
    },
    {
      id: "hatchery",
      title: "Hatchery",
      icon: "egg",
      summary: "Track egg inventory, incubation conditions, hatch rates, chick quality and vaccination schedules.",
      signals: ["Egg inventory", "Incubation", "Hatch rate", "Vaccinations"],
      delivery: [{ kind: "solution", text: "Hatchery Management" }],
    },
    {
      id: "farm",
      title: "Farm",
      icon: "barn",
      summary: "Plan breeder and broiler cycles; record chick placement, feed use, health, weight and mortality from the field.",
      signals: ["Placement", "Feed consumption", "Weight & mortality", "Cycle cost"],
      delivery: [
        { kind: "solution", text: "Farm Management + Farm & Field mobile app" },
      ],
    },
    {
      id: "processing",
      title: "Processing",
      icon: "factory",
      summary: "From live bird arrival to finished product: work orders, yield and shrink, hygiene, waste and lot traceability.",
      signals: ["Live weight in", "Yield & shrink", "Lot traceability", "Waste"],
      delivery: [{ kind: "solution", text: "Slaughterhouse Management" }],
    },
    {
      id: "sales",
      title: "Sales & Finance",
      icon: "truck",
      summary:
        "Orders, deliveries and van sales sync to the ERP; cost per bird and per kilogram roll into consolidated, multi-site reporting.",
      signals: ["Van sales", "Cost per kg", "Multi-site consolidation", "KPI dashboards"],
      delivery: [
        { kind: "solution", text: "Sales & Van mobile app" },
        { kind: "standard", text: "Financials, inventory and consolidated reporting" },
      ],
    },
  ],
};
