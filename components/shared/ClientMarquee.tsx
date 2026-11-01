import Image from "next/image";
import { clients } from "@/lib/content/clients";

export function ClientMarquee({ label = "Organizations that run on NetSuite with Xelerate" }: { label?: string }) {
  const row = [...clients, ...clients];
  return (
    <section aria-label={label} className="border-y border-line bg-white py-10">
      <div className="container-x mb-7 flex items-center justify-between gap-6">
        <p className="text-sm font-medium text-ink-500">{label}</p>
        <span className="hidden h-px flex-1 bg-line md:block" />
      </div>
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-4">
          {row.map((c, i) => (
            <li
              key={`${c.file}-${i}`}
              aria-hidden={i >= clients.length}
              className="grid h-20 w-40 shrink-0 place-items-center rounded-xl border border-line/70 bg-white px-5"
            >
              <Image
                src={`/images/clients/${c.file}.webp`}
                alt={i >= clients.length ? "" : c.name}
                width={160}
                height={80}
                className="max-h-12 w-auto object-contain opacity-85 saturate-[0.55] transition duration-500 hover:opacity-100 hover:saturate-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
