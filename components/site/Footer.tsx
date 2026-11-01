import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { industriesNav, servicesNav, site } from "@/lib/site";
import { Logo } from "./Logo";

const company = [
  { label: "About Xelerate", href: "/about/" },
  { label: "NetSuite capabilities", href: "/features/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact-us/" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-paper">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-600">
            Xelerate is a business transformation partner helping organizations across {site.markets} run on
            Oracle NetSuite — from first design workshop to long-term support.
          </p>
          <div className="mt-7 inline-flex rounded-xl border border-line bg-white px-4 py-3">
            <Image
              src="/images/brand/oracle-netsuite-solution-provider-partner.png"
              alt="Oracle NetSuite Solution Provider Partner"
              width={828}
              height={248}
              className="h-11 w-auto"
            />
          </div>
        </div>

        <FooterCol title="Services" items={[{ label: "All services", href: "/services/" }, ...servicesNav]} />
        <FooterCol title="Industries" items={[{ label: "All industries", href: "/industries/" }, ...industriesNav]} />
        <FooterCol title="Company" items={company} />

        <div className="md:col-span-2">
          <h2 className="kicker text-ink-500">Contact</h2>
          <ul className="mt-4 space-y-3 text-[14.5px] text-ink-700">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-brand-700">
                <Icon name="mail" className="size-4 shrink-0" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 hover:text-brand-700"
              >
                <Icon name="pin" className="mt-0.5 size-4 shrink-0" />
                <span>
                  {site.address.locality}, {site.address.region}, {site.address.country}
                </span>
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <Icon name="clock" className="mt-0.5 size-4 shrink-0" />
              <span>Sun – Thu, 9:00 – 17:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-[13px] text-ink-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Part of {site.parent.name}.
          </p>
          <p className="max-w-xl md:text-right">
            Oracle and NetSuite are registered trademarks of Oracle and/or its affiliates.{" "}
            <Link href="/privacy-policy/" className="underline-offset-4 hover:text-ink-900 hover:underline">
              Privacy policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="md:col-span-2">
      <h2 className="kicker text-ink-500">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-[14.5px] text-ink-700 transition-colors hover:text-brand-700">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
