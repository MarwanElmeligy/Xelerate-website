import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTASection({
  title = "Let's design how your business should run.",
  accent = "Then make it real.",
  text = "Book a working session with Xelerate's NetSuite consultants. We'll review your processes, priorities and systems — and outline a practical path forward.",
  cta = "Book a consultation",
  href = "/contact-us/",
}: {
  title?: string;
  accent?: string;
  text?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-20 text-white md:px-14 md:py-28">
        <div aria-hidden className="grid-lines absolute inset-0 -z-10 [mask-image:radial-gradient(70%_80%_at_70%_30%,black,transparent)]" />
        <div aria-hidden className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(0,153,73,0.35),transparent_65%)]" />
        <div aria-hidden className="absolute -bottom-48 -left-24 -z-10 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(0,93,116,0.45),transparent_65%)]" />
        <svg aria-hidden viewBox="0 0 600 300" className="absolute right-0 top-0 -z-10 hidden h-full w-auto opacity-60 md:block">
          <path d="M40 280 C 220 260, 380 180, 560 30" fill="none" stroke="url(#ctag)" strokeWidth="1.5" pathLength={1} data-draw />
          <path d="M546 22 L 566 26 L 556 44" fill="none" stroke="#4fd18b" strokeWidth="1.5" />
          <defs>
            <linearGradient id="ctag" x1="0" x2="1">
              <stop offset="0" stopColor="#005d74" stopOpacity="0" />
              <stop offset="1" stopColor="#4fd18b" />
            </linearGradient>
          </defs>
        </svg>
        <div className="container-x !px-0">
          <div data-reveal className="max-w-3xl">
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
              {title} <span className="accent-serif text-brand-300">{accent}</span>
            </h2>
            <p className="lede mt-6 max-w-2xl text-white/70">{text}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={href} size="lg">
                {cta}
              </Button>
              <a href={`mailto:${site.email}`} className="text-[15px] font-medium text-white/75 underline-offset-4 hover:text-white hover:underline">
                or email {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
