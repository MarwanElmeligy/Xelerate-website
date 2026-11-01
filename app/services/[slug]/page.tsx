import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getService, services } from "@/lib/content/services";
import { breadcrumbLd, pageMetadata, serviceLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.seoTitle, description: s.seoDescription, path: `/services/${s.slug}/` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const path = `/services/${s.slug}/`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: s.name, path },
  ];
  const related = s.related.map(getService).filter(Boolean) as typeof services;

  return (
    <>
      <PageHero crumbs={crumbs} kicker={`Oracle ${s.name} Services`} title={s.heroTitle} accent={s.heroAccent} lede={s.heroLede}>
        <Button href="/contact-us/" size="lg">
          {s.cta}
        </Button>
      </PageHero>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="display text-4xl sm:text-5xl">{s.introTitle}</h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-700 lg:col-span-7" data-reveal>
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="container-x mt-16">
          <ul className="grid gap-4 md:grid-cols-3" data-reveal-group>
            {s.pillars.map((p, i) => (
              <li key={p.title} className="rounded-3xl border border-line bg-white p-8">
                <span className="font-mono text-sm text-brand-700">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-3 md:px-5">
        <div className="on-dark rounded-[2rem] bg-ink-950 py-24 text-white md:py-32">
          <div className="container-x grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHeading dark kicker="The work" title={s.processTitle} />
              </div>
            </div>
            <ol className="lg:col-span-8">
              {s.process.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-white/10 py-8 first:border-t-0 first:pt-0" data-reveal>
                  <span className="font-mono text-sm text-brand-300">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-white/65">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading kicker="Who it's for" title={s.audienceTitle} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-group>
            {s.audience.map((a) => (
              <li key={a.title} className="rounded-3xl border border-line bg-white p-7">
                <Icon name="check" className="size-5 text-brand-700" />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{a.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-20 grid gap-4 md:grid-cols-2" data-reveal-group>
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}/`} className="group flex items-center justify-between gap-6 rounded-3xl border border-line bg-paper-2/60 p-7 transition-colors hover:border-brand/40">
                <span>
                  <span className="kicker text-ink-500">Related service</span>
                  <span className="mt-2 block text-xl font-semibold tracking-tight">{r.name}</span>
                  <span className="mt-1 block text-[15px] text-ink-600">{r.short}</span>
                </span>
                <Icon name="arrowRight" className="size-5 shrink-0 text-brand-700 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={s.ctaTitle} accent="Let's scope it together." cta={s.cta} />
      <JsonLd data={[breadcrumbLd(crumbs), serviceLd({ name: `Oracle ${s.name}`, description: s.seoDescription, path })]} />
    </>
  );
}
