import type { IconName } from "@/components/icons";

export type ServiceDetail = {
  slug: string;
  name: string;
  short: string;
  icon: IconName;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroAccent: string;
  heroLede: string;
  introTitle: string;
  intro: string[];
  pillars: { title: string; text: string }[];
  processTitle: string;
  process: { title: string; text: string }[];
  audienceTitle: string;
  audience: { title: string; text: string }[];
  cta: string;
  ctaTitle: string;
  related: string[];
};

export const services: ServiceDetail[] = [
  {
    slug: "netsuite-implementation",
    name: "NetSuite Implementation",
    short: "Plan, configure and launch Oracle NetSuite with a structured, business-led approach.",
    icon: "layers",
    seoTitle: "Oracle NetSuite Implementation Services in Egypt & Saudi Arabia",
    seoDescription:
      "Business-led Oracle NetSuite implementation by Xelerate: discovery, solution design, configuration, data migration, testing, training and go-live support across the Middle East.",
    heroTitle: "Implementation built around",
    heroAccent: "how your business runs.",
    heroLede:
      "We start with your entities, approval chains, reporting needs and day-to-day processes — then design and configure NetSuite around them, so every team can work in the system from day one.",
    introTitle: "A structured path from requirements to go-live",
    intro: [
      "Xelerate implements Oracle NetSuite for organizations across Egypt, Saudi Arabia and the wider Middle East, bringing approximately 15 years of NetSuite and ERP experience to every project.",
      "Implementation is a business project, not only an IT project. Finance, operations and leadership are involved from discovery to sign-off, so the system reflects how your teams actually work.",
    ],
    pillars: [
      { title: "Business-led design", text: "We map your processes before configuring the system, so NetSuite reflects how your teams actually work." },
      { title: "Prepared data", text: "Master data and opening balances are cleaned, loaded and reconciled before go-live." },
      { title: "Support after go-live", text: "Our team stays involved after launch to stabilize the system and resolve early issues." },
    ],
    processTitle: "How we implement Oracle NetSuite",
    process: [
      { title: "Discovery & business process analysis", text: "We review current processes, systems, reports and pain points with finance, operations and IT. The outcome is an agreed scope, priorities and timeline." },
      { title: "Solution design", text: "We document how NetSuite will support each process — chart of accounts, subsidiaries, roles, approvals and reporting — and you approve it before configuration begins." },
      { title: "System configuration", text: "Records, forms, workflows, roles and permissions are configured to the approved design, with the localization your market requires." },
      { title: "Data preparation & migration", text: "We help your team clean and structure master data, open transactions and balances, load them and reconcile the results with you." },
      { title: "Integrations where required", text: "Where NetSuite needs to exchange data with other business systems, we plan and build those connections as part of the project." },
      { title: "Testing & user validation", text: "Complete business scenarios are tested end to end. Key users validate the system against real cases before sign-off." },
      { title: "Training, go-live & hypercare", text: "Users are trained on the processes they own. We plan the cutover, support go-live and monitor the first transactions closely." },
    ],
    audienceTitle: "Who we work with",
    audience: [
      { title: "CEOs & COOs", text: "Leaders who need clear visibility across operations, entities and performance." },
      { title: "CFOs & finance directors", text: "Finance teams that want a faster close, consistent controls and dependable reporting." },
      { title: "IT directors & ERP managers", text: "Teams responsible for system design, data quality, security and integrations." },
      { title: "Operations & transformation teams", text: "Teams replacing spreadsheets and disconnected tools with one system." },
    ],
    cta: "Discuss your NetSuite implementation",
    ctaTitle: "Planning a NetSuite implementation?",
    related: ["netsuite-integration", "netsuite-support"],
  },
  {
    slug: "netsuite-integration",
    name: "NetSuite Integration",
    short: "Connect NetSuite with the e-commerce, banking, payroll and operational systems you rely on.",
    icon: "plug",
    seoTitle: "Oracle NetSuite Integration Services | Connect Your Business Systems",
    seoDescription:
      "Xelerate plans, builds, tests and monitors Oracle NetSuite integrations with e-commerce, banking, payroll, warehouse and industry systems across the Middle East.",
    heroTitle: "One consistent flow of data",
    heroAccent: "across your applications.",
    heroLede:
      "When systems don't share data, teams re-key information, reconcile spreadsheets and decide on figures that don't match. We connect NetSuite to the rest of your landscape — properly designed, tested and monitored.",
    introTitle: "Connect NetSuite with the systems your business depends on",
    intro: [
      "Most organizations run NetSuite alongside other applications — e-commerce, banking, payroll, warehouse or industry-specific systems.",
      "Xelerate designs integrations around complete business processes such as order-to-cash or procure-to-pay, rather than isolated data transfers.",
    ],
    pillars: [
      { title: "Less manual data entry", text: "Data moves between systems automatically instead of being re-typed or imported by hand." },
      { title: "Consistent data", text: "Customers, items, transactions and balances stay aligned across NetSuite and connected applications." },
      { title: "Planned & supported", text: "Each integration is designed, tested and monitored, with support available after it goes live." },
    ],
    processTitle: "How we approach NetSuite integration",
    process: [
      { title: "Integration planning", text: "We identify which systems connect, what data moves in each direction, how often, and which system owns each record." },
      { title: "Business-process design", text: "Integrations follow complete processes — order-to-cash, procure-to-pay — not isolated transfers." },
      { title: "Design & build", text: "Field mappings, transformation rules, error handling and security roles are defined, then built with the approach that suits your systems." },
      { title: "Testing", text: "We test with realistic data and edge cases, including failed and duplicate records, before anything goes live." },
      { title: "Monitoring", text: "Checks track integration runs and surface errors early, rather than at month-end." },
      { title: "Ongoing support", text: "After go-live we maintain and adjust integrations as your systems and processes change." },
    ],
    audienceTitle: "Who we help",
    audience: [
      { title: "Finance teams", text: "Teams reconciling figures between NetSuite and other systems at every period close." },
      { title: "Operations teams", text: "Teams re-entering orders, shipments or inventory movements across applications." },
      { title: "IT directors & ERP managers", text: "Leaders planning a connected application landscape around NetSuite." },
      { title: "New NetSuite projects", text: "Organizations implementing NetSuite that need it to work with systems they already use." },
    ],
    cta: "Discuss your NetSuite integration",
    ctaTitle: "Planning a NetSuite integration project?",
    related: ["netsuite-implementation", "netsuite-support"],
  },
  {
    slug: "netsuite-optimization",
    name: "NetSuite Optimization",
    short: "Review and improve how your existing NetSuite system supports the business.",
    icon: "gauge",
    seoTitle: "Oracle NetSuite Optimization & Health Check Services",
    seoDescription:
      "Get more from the NetSuite you already have. Xelerate reviews configuration, workflows, reporting and integrations and delivers a prioritized improvement roadmap.",
    heroTitle: "Get more from the NetSuite",
    heroAccent: "you already have.",
    heroLede:
      "Workarounds build up, reports get rebuilt in spreadsheets and useful features stay unused. We review how NetSuite is used today and improve it so the system keeps pace with the business.",
    introTitle: "Improve what is already in place",
    intro: [
      "Many organizations go live on NetSuite and then adapt their work to the system, rather than the other way around.",
      "Xelerate reviews configuration, processes and reporting, then delivers practical changes prioritized by business impact.",
    ],
    pillars: [
      { title: "Process review", text: "We look at how your teams use NetSuite day to day and where time and accuracy are being lost." },
      { title: "Practical improvements", text: "Recommendations are prioritized by impact and delivered as configuration, workflow and reporting changes." },
      { title: "Better adoption", text: "We help users take advantage of functionality already available in your NetSuite account." },
    ],
    processTitle: "Common challenges we address",
    process: [
      { title: "Inefficient workflows", text: "Approval chains and process steps that slow work down or depend on manual follow-up by email." },
      { title: "Underused functionality", text: "Features already available in your NetSuite account that your teams are not using yet." },
      { title: "Reporting challenges", text: "Reports and dashboards that are slow to produce, difficult to trust or rebuilt outside the system." },
      { title: "Manual processes", text: "Tasks still handled in spreadsheets or email that NetSuite can automate, track or control." },
      { title: "Changing requirements", text: "New entities, products, channels or regulations the original setup was not designed to handle." },
    ],
    audienceTitle: "Where we improve NetSuite",
    audience: [
      { title: "Configuration", text: "Forms, fields, roles and settings adjusted to match your current processes." },
      { title: "Process & automation", text: "Simpler workflows and approvals, with repetitive steps automated." },
      { title: "Reporting", text: "Saved searches, reports and dashboards rebuilt so managers get reliable figures directly from NetSuite." },
      { title: "Prioritized roadmap", text: "A practical plan of improvements, ordered by business impact and effort." },
    ],
    cta: "Request a NetSuite review",
    ctaTitle: "Ready to improve your NetSuite setup?",
    related: ["netsuite-support", "netsuite-integration"],
  },
  {
    slug: "netsuite-support",
    name: "NetSuite Support",
    short: "Get help with issues, changes and day-to-day questions once NetSuite is live.",
    icon: "lifebuoy",
    seoTitle: "Oracle NetSuite Support Services | Remote & On-Site",
    seoDescription:
      "Practical Oracle NetSuite support from Xelerate: troubleshooting, configuration changes, reporting fixes, workflow issues, user assistance and enhancements — remote or on-site.",
    heroTitle: "Practical help",
    heroAccent: "once your system is live.",
    heroLede:
      "A report that no longer matches the ledger. An approval that stalls. A process that changed since go-live. Our team finds the cause and fixes it properly — not just works around it.",
    introTitle: "Support for teams already running NetSuite",
    intro: [
      "After go-live, new questions and issues keep arriving. Xelerate supports organizations across the Middle East that already use Oracle NetSuite.",
      "Assigned team members with relevant experience keep continuity and familiarity with your account, remotely or on-site.",
    ],
    pillars: [
      { title: "Problem resolution", text: "We investigate errors, failed transactions and configuration issues, and resolve the underlying cause." },
      { title: "Remote & on-site help", text: "Support is delivered remotely or on-site, depending on the issue and what your team needs." },
      { title: "Ongoing improvement", text: "Beyond fixes, we help you adapt NetSuite as your processes and requirements change." },
    ],
    processTitle: "What our support covers",
    process: [
      { title: "Troubleshooting", text: "Diagnosing errors, unexpected behavior and failed transactions, then correcting the cause so the issue does not return." },
      { title: "Configuration support", text: "Adjusting records, forms, fields, roles and permissions when the current setup no longer fits how teams work." },
      { title: "Reporting issues", text: "Fixing saved searches, financial reports and dashboards that return incomplete, slow or inconsistent results." },
      { title: "User assistance", text: "Helping users with day-to-day questions and running short refresher sessions on the processes they own." },
      { title: "Workflow & process problems", text: "Resolving approvals, automations and process steps that stall, skip steps or behave inconsistently." },
      { title: "Integration issues", text: "Investigating data that fails to sync between NetSuite and connected systems." },
      { title: "Enhancements", text: "Delivering new fields, forms and workflows, and reviewing recurring requests to see where configuration should change." },
    ],
    audienceTitle: "Who our support is for",
    audience: [
      { title: "Finance teams", text: "Teams dealing with reporting gaps, reconciliation issues or period-close delays." },
      { title: "Operations teams", text: "Users blocked by workflow, transaction or inventory problems in daily work." },
      { title: "IT & ERP managers", text: "Managers who need an experienced NetSuite team to escalate issues and changes to." },
      { title: "Recently live organizations", text: "Companies in the post-go-live period that need help stabilizing the system." },
    ],
    cta: "Get NetSuite support",
    ctaTitle: "Need help with your NetSuite system?",
    related: ["netsuite-optimization", "netsuite-integration"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Xelerate's seven-phase implementation methodology (from the live site). */
export const methodology = [
  { title: "Initiation & planning", text: "Kick-off with the whole team, objectives, timeline and risks agreed.", deliverable: "Project plan" },
  { title: "Analysis & discovery", text: "Goals, current processes and requirements captured in a BRD.", deliverable: "Business requirements" },
  { title: "Solution design", text: "Process flows, roles and financial impact documented for approval.", deliverable: "Solution document" },
  { title: "Configuration", text: "NetSuite configured in review cycles that educate your team as we build.", deliverable: "Approved configuration" },
  { title: "Validation", text: "Acceptance testing against the solution document with your key users.", deliverable: "Business acceptance" },
  { title: "Deployment", text: "Clean data loaded from legacy systems; end users trained on real flows.", deliverable: "Live system & training" },
  { title: "Optimization", text: "Post-go-live tuning and a roadmap of enhancements as usage matures.", deliverable: "Improvement roadmap" },
];
