import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Industries, Method, PartnerBand, Positioning, Problems, ServicesGrid, Testimonial } from "@/components/home/Sections";
import { ClientMarquee } from "@/components/shared/ClientMarquee";
import { CTASection } from "@/components/shared/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Xelerate | Oracle NetSuite Partner for Egypt, Saudi Arabia & the Middle East",
  description:
    "Xelerate is the business transformation partner that implements, integrates, optimizes and supports Oracle NetSuite for growing companies across Egypt, Saudi Arabia and the Middle East.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="pt-6">
        <ClientMarquee />
      </div>
      <Problems />
      <Positioning />
      <Method />
      <ServicesGrid />
      <Industries />
      <Testimonial />
      <PartnerBand />
      <CTASection />
    </>
  );
}
