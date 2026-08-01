"use client";

import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import EnquireNowButton from "@/components/ui/EnquireNowButton";
import { services } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function Services() {
  const { lang } = useLanguage();
  const t = uiStrings.services;

  return (
    <section id="services" className="section-py bg-surface">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} subtitle={t.subtitle[lang]} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title.en} delay={(index % 3) * 0.08}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-premium">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{service.title[lang]}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{service.description[lang]}</p>
                <EnquireNowButton
                  title={`${uiStrings.common.enquireNow[lang]} — ${service.title[lang]}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-700"
                >
                  {uiStrings.common.enquireNow[lang]}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </EnquireNowButton>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
