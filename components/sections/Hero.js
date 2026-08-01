"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MessageCircle, Building2, CalendarCheck, Phone, ArrowRight } from "lucide-react";
import LeadForm from "@/components/ui/LeadForm";
import { siteConfig } from "@/lib/seo";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function Hero() {
  const { lang } = useLanguage();
  const t = uiStrings.hero;

  const stats = [
    { value: "7", label: t.stats.serviceAreas[lang] },
    { value: "500+", label: t.stats.acresFacilitated[lang] },
    { value: "1,200+", label: t.stats.happyClients[lang] },
  ];

  return (
    <section id="home" className="relative flex min-h-[78vh] items-center overflow-hidden bg-ink-900">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
          alt="Golden hour aerial view of highways, industrial corridors and green agricultural land across the Bhiwadi to Alwar NCR growth corridor"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 to-ink-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30" />
      </div>

      <div className="container-px relative z-10 mx-auto grid w-full max-w-8xl gap-12 pb-24 pt-8 sm:pb-24 sm:pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20 lg:pt-8">
        <div>
          <span className="eyebrow border-accent/50 bg-white/10 text-accent-200">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {t.badge[lang]}
          </span>

          <h1 className="text-balance mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {lang === "en" ? (
              <>
                Buy or Sell Land in{" "}
                <span className="bg-gradient-to-r from-accent-200 to-accent bg-clip-text text-transparent">
                  NCR&rsquo;s Fastest Growing
                </span>{" "}
                Development Corridor
              </>
            ) : (
              <>
                NCR के{" "}
                <span className="bg-gradient-to-r from-accent-200 to-accent bg-clip-text text-transparent">
                  सबसे तेज़ी से बढ़ते
                </span>{" "}
                डेवलपमेंट कॉरिडोर में ज़मीन खरीदें या बेचें
              </>
            )}
          </h1>

          <p className="text-balance mt-6 max-w-xl text-base text-white/75 sm:text-lg">
            {t.subheadingLead[lang]} <span className="font-semibold text-white">Inaya Estates</span>{" "}
            {t.subheadingRest[lang]}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#contact" className="btn-accent">
              <Building2 className="h-4 w-4" aria-hidden="true" />
              {t.buyLand[lang]}
            </Link>
            <Link href="#contact" className="btn-outline">
              {t.sellLand[lang]}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="#hero-lead-form" className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-accent">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              {t.bookFreeConsultation[lang]}
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-5">
            <Link
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {uiStrings.common.callNow[lang]}
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20land%20opportunities%20with%20Inaya%20Estates`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {uiStrings.common.whatsappUs[lang]}
            </Link>
          </div>

          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs font-medium text-white/60 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full lg:mx-0 lg:justify-self-end">
          <LeadForm id="hero-lead-form" variant="glass" title={uiStrings.leadForm.defaultTitle[lang]} />
        </div>
      </div>
    </section>
  );
}
