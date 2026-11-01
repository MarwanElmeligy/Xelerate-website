import Image from "next/image";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { HeroGeometry } from "./HeroGeometry";

const outcomes = [
  { k: "Financial visibility", v: "One real-time ledger across entities and currencies" },
  { k: "Operational control", v: "Inventory, orders and approvals in a single flow" },
  { k: "Scalable growth", v: "New companies, sites and markets without new systems" },
  { k: "Industry depth", v: "Solutions shaped for poultry, metals and services" },
];

export function Hero() {
  return (
    <section className="px-3 pt-3 md:px-5 md:pt-4">
      <div className="on-dark relative isolate flex min-h-[min(100svh,980px)] flex-col overflow-hidden rounded-[2rem] bg-ink-950 text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/visuals/xelerate-connected-enterprise-hero.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[70%_50%] opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#04121a_0%,rgba(4,18,26,0.88)_32%,rgba(4,18,26,0.25)_65%,rgba(4,18,26,0.1)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(4,18,26,0.35)_0%,rgba(4,18,26,0.85)_55%,#04121a_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
        </div>
        <div className="absolute inset-0 -z-10 hidden md:block">
          <HeroGeometry />
        </div>

        <div className="container-x flex flex-1 flex-col justify-center pb-10 pt-32 md:pt-40">
          <div className="max-w-[46rem]">
            <p className="rise inline-flex items-center gap-2.5 rounded-full bg-white/[0.07] py-1.5 pl-2 pr-4 text-[13px] font-medium text-white/85 ring-1 ring-inset ring-white/15 backdrop-blur">
              <span className="relative grid size-5 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand/40 motion-reduce:hidden" />
                <span className="size-2 rounded-full bg-brand-300" />
              </span>
              {site.partnerBadge}
            </p>
            <h1 className="display mt-7 text-[2.65rem] sm:text-7xl lg:text-[5.6rem]">
              <span className="rise block" style={{ ["--d" as string]: "60ms" }}>
                Accelerate how
              </span>
              <span className="rise block" style={{ ["--d" as string]: "140ms" }}>
                your business <span className="accent-serif text-brand-300">runs.</span>
              </span>
            </h1>
            <p className="lede rise mt-7 max-w-[38rem] text-white/75" style={{ ["--d" as string]: "240ms" }}>
              Xelerate is the business transformation partner for growing companies in Egypt, Saudi Arabia and the
              wider Middle East. We redesign how finance, operations and leadership work — then run it on Oracle
              NetSuite.
            </p>
            <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "340ms" }}>
              <Button href="/contact-us/" size="lg">
                Book a consultation
              </Button>
              <Button href="/services/netsuite-implementation/" variant="ghost-dark" size="lg">
                How we implement
              </Button>
            </div>
            <dl className="rise mt-12 grid max-w-[44rem] grid-cols-1 gap-5 border-t border-white/10 pt-7 text-sm sm:grid-cols-[auto_auto_auto] sm:gap-x-10" style={{ ["--d" as string]: "440ms" }}>
              <div>
                <dt className="kicker text-white/45">Experience</dt>
                <dd className="mt-1.5 font-medium text-white/90">~{site.experienceYears} years in NetSuite & ERP</dd>
              </div>
              <div>
                <dt className="kicker text-white/45">Markets</dt>
                <dd className="mt-1.5 font-medium text-white/90">Egypt · Saudi Arabia · Middle East</dd>
              </div>
              <div>
                <dt className="kicker text-white/45">Backed by</dt>
                <dd className="mt-1.5 font-medium text-white/90">
                  {site.parent.name}, est. {site.parent.since}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* What we solve — scannable on the first screen */}
        <div className="relative border-t border-white/10 bg-ink-950/60 backdrop-blur-md">
          <ul className="container-x grid grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <li
                key={o.k}
                className={`rise group py-6 pr-4 ${i % 2 === 1 ? "pl-4 lg:pl-6" : "lg:pl-6"} ${i > 0 ? "lg:border-l lg:border-white/10" : "lg:!pl-0"} ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""}`}
                style={{ ["--d" as string]: `${520 + i * 80}ms` }}
              >
                <p className="flex items-center gap-2 text-[15px] font-semibold">
                  <Icon name="check" className="size-4 text-brand-300" />
                  {o.k}
                </p>
                <p className="mt-1 text-[13.5px] leading-snug text-white/60">{o.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
