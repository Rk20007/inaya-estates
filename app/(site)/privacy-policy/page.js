import { siteConfig } from "@/lib/seo";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}, operated by ${siteConfig.company}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-px mx-auto max-w-3xl py-16 sm:py-24">
      <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink-400">Last updated: January 2026</p>

      <div className="prose prose-ink mt-10 max-w-none space-y-6 text-ink-600">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-900">1. Information We Collect</h2>
          <p className="mt-2">
            When you submit an enquiry on {siteConfig.name}, we collect your name, phone number, budget range,
            requirement type and preferred location so that our property consultants at {siteConfig.company} can
            respond to your query.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-900">2. How We Use Your Information</h2>
          <p className="mt-2">
            Information collected is used solely to contact you regarding land buying, selling or investment
            enquiries, and to improve our services. We do not sell your personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-900">3. Data Security</h2>
          <p className="mt-2">
            We take reasonable technical and organisational measures to protect your data from unauthorised
            access, alteration or disclosure.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-900">4. Contact Us</h2>
          <p className="mt-2">
            For any privacy-related queries, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
