"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { whyChooseUs } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function WhyChooseUs() {
  const { lang } = useLanguage();
  const t = uiStrings.whyChooseUs;

  return (
    <section className="section-py bg-surface">
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <RevealOnScroll direction="right" className="relative">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] shadow-premium sm:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1400&q=80"
                alt="A verified residential property developed on land sourced through Inaya Estates"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -bottom-8 -right-4 hidden max-w-xs rounded-2xl p-5 shadow-premium sm:block">
              <p className="font-display text-3xl font-bold text-white">{t.experienceBadge[lang]}</p>
              <p className="mt-1 text-sm text-white/70">{t.experienceCaption[lang]}</p>
            </div>
          </RevealOnScroll>

          <div>
            <SectionHeading
              eyebrow={t.eyebrow[lang]}
              title={t.title[lang]}
              subtitle={t.subtitle[lang]}
              align="left"
            />

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => (
                <RevealOnScroll key={item.title.en} delay={(index % 2) * 0.08} direction="up">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink-900">{item.title[lang]}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">{item.description[lang]}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
