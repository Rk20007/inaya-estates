"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { whyInvestPoints } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function WhyInvest() {
  const { lang } = useLanguage();
  const t = uiStrings.whyInvest;

  return (
    <section id="why-invest" className="section-py bg-white">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} subtitle={t.subtitle[lang]} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyInvestPoints.map((point, index) => (
            <RevealOnScroll key={point.title.en} delay={(index % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-premium">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <point.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{point.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{point.description[lang]}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
