"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck, Mail } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import LeadForm from "@/components/ui/LeadForm";
import { siteConfig } from "@/lib/seo";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function Contact() {
  const { lang } = useLanguage();
  const t = uiStrings.contact;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 section-py"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-20" aria-hidden="true" />
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />

      <div className="container-px relative mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <RevealOnScroll direction="right">
          <span className="eyebrow border-accent/50 bg-white/10 text-accent-200">{t.eyebrow[lang]}</span>
          <h2 className="text-balance mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t.title[lang]}
          </h2>
          <p className="mt-4 max-w-lg text-balance text-lg text-white/75">{t.subtitle[lang]}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={`tel:${siteConfig.phone}`} className="btn-accent">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {uiStrings.common.callNow[lang]}
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20land%20opportunities%20with%20Inaya%20Estates`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {uiStrings.common.whatsapp[lang]}
            </Link>
            <Link href="#contact-lead-form" className="btn-outline">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              {t.bookConsultation[lang]}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{t.callUs[lang]}</p>
              <ul className="mt-3 space-y-2">
                {siteConfig.contacts.map((contact) => (
                  <li key={contact.phone}>
                    <Link
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-2 text-sm font-medium text-white/85 hover:text-accent"
                    >
                      <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      {contact.phoneDisplay}
                      <span className="text-white/50">({contact.name})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{t.emailUs[lang]}</p>
              <ul className="mt-3 space-y-2">
                {siteConfig.emails.map((email) => (
                  <li key={email}>
                    <Link
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 text-sm font-medium text-white/85 hover:text-accent"
                    >
                      <Mail className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      {email}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="left" className="mx-auto w-full lg:mx-0 lg:justify-self-end">
          <LeadForm id="contact-lead-form" variant="glass" title={t.formTitle[lang]} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
