import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button, TextLink } from "@/components/ui/Button";
import { methodology, services } from "@/lib/content/services";

/* ───────────────────────── Problems → answers ───────────────────────── */
const problems = [
  {
    problem: "Your numbers arrive too late to act on.",
    answer:
      "Month-end depends on spreadsheets and manual consolidation. We put finance on one real-time NetSuite ledger — across entities, currencies and locations — so leadership sees the business as it is today.",
    href: "/features/",
    link: "Financial visibility",
  },
  {
    problem: "Operations run on workarounds.",
    answer:
      "Orders, inventory and approvals live in separate tools and inboxes. We redesign the flow end to end and automate it in NetSuite, with controls built into every step.",
    href: "/services/netsuite-implementation/",
    link: "Operational control",
  },
  {
    problem: "Growth is outpacing your systems.",
    answer:
      "A new company, branch or market shouldn't mean another system. We build on a platform designed for multi-entity growth, and stay with you as requirements change.",
    href: "/services/netsuite-optimization/",
    link: "Scalable growth",
  },
];

export function Problems() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              kicker="What we solve"
              title="Three problems we hear in every"
              accent="first meeting."
              lede="Xelerate works with CEOs, CFOs and operations leaders whose businesses have outgrown how they run. The software matters — but the transformation is the work."
            />
          </div>
          <ol className="lg:col-span-7" data-reveal-group>
            {problems.map((p, i) => (
              <li key={p.problem} className="group relative border-t border-line py-9 first:border-t-0 lg:first:pt-2">
                <span
                  aria-hidden
                  className="absolute -top-px left-0 h-px w-0 bg-brand transition-[width] duration-700 ease-[var(--ease-out-expo)] group-hover:w-full"
                />
                <div className="flex gap-6 md:gap-10">
                  <span className="font-mono text-sm text-ink-400">0{i + 1}</span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink-900 md:text-[1.9rem] md:leading-tight">
                      {p.problem}
                    </h3>
                    <p className="mt-4 max-w-xl text-[16.5px] leading-relaxed text-ink-600">{p.answer}</p>
                    <TextLink href={p.href} className="mt-5 text-[15px]">
                      {p.link}
                    </TextLink>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Positioning / differentiation ───────────────────────── */
const differentiators: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "compass",
    title: "Business-led design",
    text: "Every project starts with your processes, controls and reporting — then NetSuite is designed around them.",
  },
  {
    icon: "globe",
    title: "Regional depth",
    text: "Arabic-speaking consultants, NetSuite Arabization and hands-on experience with how companies operate in Egypt and Saudi Arabia.",
  },
  {
    icon: "layers",
    title: "Industry solutions",
    text: "Purpose-built extensions on NetSuite — like our Poultry Solution — for operations generic ERP doesn't cover.",
  },
  {
    icon: "shield",
    title: "One accountable team",
    text: "The same people from discovery to go-live and support, so knowledge of your business never walks out the door.",
  },
];

export function Positioning() {
  return (
    <section className="px-3 md:px-5">
      <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-ink-950 py-24 text-white md:py-32">
        <div aria-hidden className="grid-lines absolute inset-0 -z-10 [mask-image:radial-gradient(60%_70%_at_20%_30%,black,transparent)]" />
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              dark
              index="02"
              kicker="Why Xelerate"
              title="Transformation first."
              accent="Technology second."
              lede="Oracle NetSuite is the platform. Xelerate is the partner that decides what should change, designs how it should work, and stays accountable until it does."
            />
            <ul className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2" data-reveal-group>
              {differentiators.map((d) => (
                <li key={d.title}>
                  <span className="grid size-11 place-items-center rounded-xl bg-white/[0.06] text-brand-300 ring-1 ring-inset ring-white/10">
                    <Icon name={d.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/65">{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative lg:col-span-6" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 sm:aspect-[3/2] lg:aspect-[4/5]">
              <Image
                src="/images/visuals/cloud-erp-transformation-unified-platform.webp"
                alt="Scattered blocks converging into one luminous, unified structure — disconnected operations becoming one platform"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="scale-110 object-cover object-[65%_50%]"
                data-parallax="0.12"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
                <p className="max-w-[16rem] text-[15px] font-medium leading-snug text-white/90">
                  From disconnected tools to one platform the whole business trusts.
                </p>
                <span className="kicker text-brand-300">Xelerate × NetSuite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Methodology ───────────────────────── */
export function Method() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            kicker="How we work"
            title="A seven-phase method,"
            accent="refined over 15 years."
            lede="Clear milestones, signed-off deliverables and your team involved at every step — so go-live is a confident handover, not a leap of faith."
          />
          <Button href="/services/netsuite-implementation/" variant="ghost-light" className="shrink-0">
            Implementation in detail
          </Button>
        </div>

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 top-[1.3rem] hidden h-0.5 w-full bg-line lg:block">
            <div className="h-full w-full origin-left bg-brand" data-grow />
          </div>
          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-7" data-reveal-group>
            {methodology.map((m, i) => (
              <li key={m.title} className="relative">
                <span className="relative z-10 grid size-11 place-items-center rounded-full border border-line bg-paper font-mono text-sm text-ink-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-900">{m.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{m.text}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand-700">
                  <Icon name="check" className="size-3.5" />
                  {m.deliverable}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */
export function ServicesGrid() {
  const [lead, ...rest] = services;
  return (
    <section className="pb-24 md:pb-36">
      <div className="container-x">
        <SectionHeading
          index="04"
          kicker="Services"
          title="Everything NetSuite needs,"
          accent="from one partner."
          lede="Consultation, implementation, integration, optimization, Arabization, training and support — wherever you are in your NetSuite journey."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3" data-reveal-group>
          <Link
            href={`/services/${lead.slug}/`}
            className="group relative isolate flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl bg-ink-900 p-8 text-white lg:row-span-2 lg:min-h-[36rem]"
          >
            <Image
              src="/images/visuals/xelerate-connected-enterprise-hero.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="-z-10 object-cover object-[75%_50%] opacity-60 transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/10" />
            <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-brand-300 ring-1 ring-inset ring-white/15 backdrop-blur">
              <Icon name={lead.icon} className="size-6" />
            </span>
            <div>
              <p className="kicker text-brand-300">Flagship service</p>
              <h3 className="display mt-3 text-4xl">{lead.name}</h3>
              <p className="mt-3 max-w-sm text-[15.5px] leading-relaxed text-white/75">{lead.short}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold">
                Explore implementation
                <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          {rest.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="group flex flex-col justify-between gap-10 rounded-3xl border border-line bg-white p-8 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgba(4,18,26,0.35)]"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-700">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <Icon
                  name="arrowUpRight"
                  className="size-5 text-ink-400 transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-ink-900">{s.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{s.short}</p>
              </div>
            </Link>
          ))}
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-dashed border-ink-900/20 p-8">
            <p className="kicker text-ink-500">Also from Xelerate</p>
            <ul className="space-y-3 text-[17px] font-semibold tracking-tight text-ink-900">
              <li>Business process consultation</li>
              <li>NetSuite Arabization</li>
              <li>User training & enablement</li>
              <li>Mobile field extensions</li>
            </ul>
            <TextLink href="/services/">All services</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Industries ───────────────────────── */
const industryCards = [
  {
    href: "/industries/poultry-agribusiness/",
    title: "Poultry & Agribusiness",
    text: "Feed mill, hatchery, farm and processing on one platform — with cost per bird and per kilogram.",
    image: "/images/visuals/poultry-agribusiness-production-campus.webp",
    alt: "Aerial view of a modern poultry and agribusiness campus with poultry houses, feed mill silos and irrigated fields at golden hour",
    tag: "Xelerate Poultry Solution",
  },
  {
    href: "/industries/precious-metals/",
    title: "Precious Metals",
    text: "Weight, purity and value carried from sourcing to the ledger — across entities and currencies.",
    image: "/images/visuals/precious-metals-gold-silver-bullion.webp",
    alt: "Fine gold bars, gold granules and a silver ingot on dark slate under soft raking light",
    tag: "New",
  },
  {
    href: "/industries/professional-services/",
    title: "Professional Services",
    text: "From opportunity to invoice: projects, people and profitability in one connected view.",
    image: "/images/visuals/professional-services-project-timeline.webp",
    alt: "Translucent green and teal glass bars arranged like a project timeline with milestone spheres",
    tag: "Project-based firms",
  },
];

export function Industries() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="05"
            kicker="Industries"
            title="Built for how your"
            accent="industry actually works."
            lede="Industry processes come first. We pair NetSuite's platform with configuration and solutions shaped by years inside these sectors."
          />
          <Button href="/industries/" variant="ghost-light" className="shrink-0">
            All industries
          </Button>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3" data-reveal-group>
          {industryCards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative isolate flex min-h-[30rem] flex-col justify-end overflow-hidden rounded-3xl bg-ink-900 p-7 text-white"
            >
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="-z-10 object-cover transition-transform duration-[1.6s] ease-[var(--ease-out-expo)] group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent" />
              <span className="absolute left-7 top-7 rounded-full bg-ink-950/55 px-3 py-1 text-[12px] font-medium ring-1 ring-inset ring-white/20 backdrop-blur">
                {c.tag}
              </span>
              <h3 className="display text-[2rem]">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/75">{c.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-300">
                Explore
                <Icon name="arrowRight" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-[15px] text-ink-500">
          Also supporting manufacturing, distribution and trading businesses.{" "}
          <Link href="/industries/" className="font-semibold text-brand-700 hover:text-ink-900">
            See all industries
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── Testimonial ───────────────────────── */
export function Testimonial() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="container-x">
        <figure data-reveal className="relative grid gap-10 rounded-[2rem] border border-line bg-white p-8 md:grid-cols-12 md:p-14">
          <div className="md:col-span-3">
            <div className="grid size-28 place-items-center rounded-2xl border border-line bg-white p-2">
              <Image src="/images/clients/taryah-poultry.webp" alt="Taryah Poultry" width={169} height={200} className="h-full w-auto object-contain" />
            </div>
          </div>
          <div className="md:col-span-9">
            <svg aria-hidden viewBox="0 0 48 36" className="h-8 w-auto text-brand">
              <path fill="currentColor" d="M0 36V22C0 9.6 6.4 2.3 19.2 0l2 4.6C14 6.5 10.5 10.6 10.2 17H20v19H0Zm28 0V22C28 9.6 34.4 2.3 47.2 0l.8 4.6C41 6.5 38.5 10.6 38.2 17H48v19H28Z" />
            </svg>
            <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-tight text-ink-900 md:text-[2rem] md:leading-[1.25]">
              Our journey with Oracle NetSuite has been a real success story. Since going live, Taryah Poultry KSA has
              been running smoothly across all operations, and the system continues to support our growth and
              efficiency.
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px]">
              <span className="font-semibold text-ink-900">Taryah Poultry</span>
              <span className="text-ink-500">Saudi Arabia · Xelerate Poultry Solution on Oracle NetSuite</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

/* ───────────────────────── Partner band ───────────────────────── */
export function PartnerBand() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-x">
        <div data-reveal className="grid items-center gap-10 border-y border-line py-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src="/images/brand/oracle-netsuite-solution-provider-partner.png"
              alt="Oracle NetSuite Solution Provider Partner"
              width={828}
              height={248}
              className="h-16 w-auto"
            />
          </div>
          <p className="text-xl leading-relaxed tracking-tight text-ink-700 md:col-span-8 md:text-2xl">
            Xelerate is an <strong className="font-semibold text-ink-900">Oracle NetSuite Solution Provider Partner</strong>.
            NetSuite gives you a proven, continuously updated cloud ERP platform; Xelerate makes sure it is designed,
            delivered and evolved around your business.
          </p>
        </div>
      </div>
    </section>
  );
}
