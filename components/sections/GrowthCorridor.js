"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { growthCorridorHighlights } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function GrowthCorridor() {
  const { lang } = useLanguage();
  const t = uiStrings.about;

  return (
    <section id="about" className="section-py bg-white">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} subtitle={t.subtitle[lang]} />

        <RevealOnScroll className="mx-auto mt-8 max-w-3xl text-center" delay={0.1}>
          <p className="text-base leading-relaxed text-ink-500 sm:text-lg">{t.paragraph[lang]}</p>
        </RevealOnScroll>

        <RevealOnScroll className="relative mt-12 h-72 w-full overflow-hidden rounded-[2rem] shadow-premium sm:h-96" delay={0.15}>
          <Image
            src="https://images.unsplash.com/reserve/rHBf1lEaSc2nsbqYPQau_IMG_0177.jpg?auto=format&fit=crop&w=1800&q=80"
            alt="Expressway and industrial development along the Bhiwadi to Alwar growth corridor"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9">
          {growthCorridorHighlights.map((item, index) => (
            <RevealOnScroll key={item.label.en} delay={(index % 9) * 0.04}>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-ink-100 bg-surface px-3 py-5 text-center transition-colors hover:border-primary/30 hover:bg-primary/5">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <span className="text-xs font-semibold text-ink-700">{item.label[lang]}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
