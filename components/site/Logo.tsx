import Image from "next/image";
import Link from "next/link";

/** Official Xelerate logo (sourced from xelerate.org). */
export function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="Xelerate — home" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src="/images/brand/xelerate-logo.png"
        alt="Xelerate — Business Enabling Technologies"
        width={324}
        height={119}
        priority={priority}
        className="h-10 w-auto md:h-11"
      />
    </Link>
  );
}
