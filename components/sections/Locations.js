"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import EnquireNowButton from "@/components/ui/EnquireNowButton";
import { locations } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function Locations() {
  const { lang } = useLanguage();
  const t = uiStrings.locations;

  return (
    <section id="locations" className="section-py bg-surface">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} subtitle={t.subtitle[lang]} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <RevealOnScroll key={location.slug} delay={(index % 3) * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-ink-900 shadow-card">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={location.image}
                    alt={`Land and development in ${location.name.en}, ${location.state.en} — part of the NCR Growth Corridor`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                </div>

                <div className="relative -mt-16 flex flex-col gap-3 p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{location.name[lang]}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{location.description[lang]}</p>

                  <ul className="mt-2 flex flex-wrap gap-2">
                    {location.highlights.map((highlight) => (
                      <li
                        key={highlight.en}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        <CheckCircle2 className="h-3 w-3 text-accent" aria-hidden="true" />
                        {highlight[lang]}
                      </li>
                    ))}
                  </ul>

                  <EnquireNowButton
                    title={`${uiStrings.common.enquireNow[lang]} — ${location.name[lang]}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-200 transition-colors hover:text-accent"
                  >
                    {uiStrings.common.enquireNow[lang]}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </EnquireNowButton>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
