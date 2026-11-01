import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Xelerate Business Solutions collects, uses and protects personal information submitted through xelerate.org.",
  path: "/privacy-policy/",
});

// DRAFT — requires review by Xelerate's legal counsel before launch.
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy-policy/" },
        ]}
        title="Privacy policy"
        lede="How we handle the information you share with us through this website."
      />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-8 text-[16px] leading-relaxed text-ink-700 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink-900">
          <p>
            This website is operated by {site.legalName} (&ldquo;Xelerate&rdquo;, &ldquo;we&rdquo;), {site.address.line},{" "}
            {site.address.locality}, {site.address.country}.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you submit our consultation form or email us, we collect the details you provide — such as your name,
            work email, company, phone number, country and message. If analytics are enabled, we also collect standard
            usage data (pages visited, device and approximate location) through cookies set by Google tools.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your information to respond to your enquiry, arrange consultations, and — where you have a business
            relationship with us — to provide our services. We use analytics data to understand how the website is used
            and to improve it. We do not sell personal information.
          </p>
          <h2>Sharing</h2>
          <p>
            We share information only with service providers that help us operate the website and handle enquiries
            (for example hosting, email and analytics providers), and where required by law.
          </p>
          <h2>Retention and your rights</h2>
          <p>
            We keep enquiry information for as long as needed to respond and to maintain our business records. You can
            ask us to access, correct or delete your personal information by emailing{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-700">
              {site.email}
            </a>
            .
          </p>
          <h2>Changes</h2>
          <p>We may update this policy from time to time. The latest version is always available on this page.</p>
        </div>
      </section>
    </>
  );
}
