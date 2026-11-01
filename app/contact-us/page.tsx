import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/contact-us/";
export const metadata: Metadata = pageMetadata({
  title: "Contact Xelerate | Talk to an Oracle NetSuite Consultant",
  description:
    "Book a free consultation with Xelerate's Oracle NetSuite consultants. Offices in New Cairo, Egypt, serving Egypt, Saudi Arabia and the Middle East.",
  path,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path },
];

const next = [
  { t: "We review your request", d: "A consultant reads your note and prepares relevant questions." },
  { t: "A focused working session", d: "We discuss your processes, systems and priorities — no generic demo." },
  { t: "A practical path forward", d: "You leave with clear next steps, whether or not you work with us." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker="Contact"
        title="Talk to an Oracle NetSuite"
        accent="consultant."
        lede="Tell us where your business is heading. We'll schedule a free consultation session to review what will work for you — and how NetSuite can help."
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="space-y-8 lg:col-span-5">
            <div className="rounded-3xl border border-line bg-white p-8">
              <h2 className="text-xl font-semibold tracking-tight">What happens next</h2>
              <ol className="mt-6 space-y-5">
                {next.map((n, i) => (
                  <li key={n.t} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-100 font-mono text-[13px] text-brand-700">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{n.t}</h3>
                      <p className="mt-0.5 text-[14.5px] leading-relaxed text-ink-600">{n.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="on-dark rounded-3xl bg-ink-950 p-8 text-white">
              <h2 className="text-xl font-semibold tracking-tight">Reach us directly</h2>
              <ul className="mt-6 space-y-5 text-[15px]">
                <li className="flex gap-3">
                  <Icon name="mail" className="mt-0.5 size-5 shrink-0 text-brand-300" />
                  <a href={`mailto:${site.email}`} className="hover:text-brand-300">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="pin" className="mt-0.5 size-5 shrink-0 text-brand-300" />
                  <span>
                    {site.address.line}
                    <br />
                    {site.address.locality}, {site.address.region}, {site.address.country}
                    <br />
                    <a href={site.address.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold text-brand-300 hover:text-white">
                      Open in Google Maps ↗
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Icon name="clock" className="mt-0.5 size-5 shrink-0 text-brand-300" />
                  <span>{site.hours}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
