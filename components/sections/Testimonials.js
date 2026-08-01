"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { testimonials } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

const avatarPalette = [
  "from-primary to-primary-700",
  "from-secondary to-secondary-700",
  "from-accent to-accent-600",
];

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = uiStrings.testimonials;

  return (
    <section id="testimonials" className="section-py bg-ink-900">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} subtitle={t.subtitle[lang]} light />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.name} delay={(index % 3) * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Quote className="h-8 w-8 text-accent/60" aria-hidden="true" />
                <div className="mt-3 flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                  &ldquo;{testimonial.quote[lang]}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${
                      avatarPalette[index % avatarPalette.length]
                    }`}
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.role[lang]}</p>
                  </div>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
