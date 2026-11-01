export const site = {
  name: "Xelerate",
  legalName: "Xelerate Business Solutions",
  tagline: "Business Enabling Technologies",
  url: "https://xelerate.org",
  email: "info@xelerate.org",
  address: {
    line: "United OFOQ – EDNC, South 90 Street, Building 7, Third Floor, Office 070309",
    locality: "New Cairo",
    region: "Cairo",
    country: "Egypt",
    countryCode: "EG",
    mapUrl: "https://maps.app.goo.gl/NmN9q5KNevqBmfkc6",
  },
  hours: "Sunday – Thursday, 9:00 am – 5:00 pm (Cairo)",
  parent: { name: "UNITED OFOQ Group", since: 1997 },
  experienceYears: 15,
  partnerBadge: "Oracle NetSuite Solution Provider Partner",
  markets: "Egypt, Saudi Arabia and the wider Middle East",
};

export type NavItem = { label: string; href: string; description?: string };

export const servicesNav: NavItem[] = [
  { label: "NetSuite Implementation", href: "/services/netsuite-implementation/", description: "Business-led design, configuration and go-live." },
  { label: "NetSuite Integration", href: "/services/netsuite-integration/", description: "Connect NetSuite with the systems you rely on." },
  { label: "NetSuite Optimization", href: "/services/netsuite-optimization/", description: "Get more from the NetSuite you already run." },
  { label: "NetSuite Support", href: "/services/netsuite-support/", description: "Responsive help once you are live." },
];

export const industriesNav: NavItem[] = [
  { label: "Poultry & Agribusiness", href: "/industries/poultry-agribusiness/", description: "Farm, hatchery, feed mill and processing on one platform." },
  { label: "Precious Metals", href: "/industries/precious-metals/", description: "Weight, purity and value — from sourcing to ledger." },
  { label: "Professional Services", href: "/industries/professional-services/", description: "Projects, people and profitability in one view." },
];

export const mainNav = [
  { label: "Services", href: "/services/", children: servicesNav },
  { label: "Industries", href: "/industries/", children: industriesNav },
  { label: "NetSuite", href: "/features/" },
  { label: "About", href: "/about/" },
  { label: "Careers", href: "/careers/" },
];
