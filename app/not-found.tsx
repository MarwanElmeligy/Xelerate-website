import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="px-3 pt-3 md:px-5 md:pt-4">
      <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-ink-950 text-white">
        <div aria-hidden className="grid-lines absolute inset-0 -z-10 [mask-image:radial-gradient(60%_70%_at_50%_40%,black,transparent)]" />
        <div className="container-x flex min-h-[70svh] flex-col items-start justify-center pb-20 pt-36">
          <p className="kicker text-brand-300">404</p>
          <h1 className="display mt-4 text-5xl sm:text-7xl">
            This page took a <span className="accent-serif text-brand-300">different route.</span>
          </h1>
          <p className="lede mt-6 max-w-xl text-white/70">
            The page you&apos;re looking for has moved or no longer exists. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/contact-us/" variant="ghost-dark">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
