import { siteConfig } from "@/lib/seo";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}, operated by ${siteConfig.company}.`,
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <div className="container-px mx-auto max-w-3xl py-16 sm:py-24">
      <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">Terms of Service</h1>
      <p className="mt-4 text-sm text-ink-400">Last updated: January 2026</p>

      <div className="prose prose-ink mt-10 max-w-none space-y-6 text-ink-600">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-900">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By using {siteConfig.name}, operated by {siteConfig.company}, you agree to be bound by these terms of
            service.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-900">2. Property Listings</h2>
          <p className="mt-2">
            All land parcels listed on this platform are subject to independent verification. While we take
            reasonable steps to verify title and documentation, buyers are advised to conduct their own legal due
            diligence before finalising any transaction.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-900">3. No Guarantee of Appreciation</h2>
          <p className="mt-2">
            Any references to potential appreciation, ROI or investment value are illustrative only and do not
            constitute a guarantee of future performance.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink-900">4. Contact</h2>
          <p className="mt-2">
            For questions about these terms, contact us at{" "}
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
