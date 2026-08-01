"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { navLinks } from "@/lib/constants";
import { siteConfig } from "@/lib/seo";
import Logo from "@/components/ui/Logo";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

const footerServices = [
  { en: "Buy Land", hi: "ज़मीन खरीदें" },
  { en: "Sell Land", hi: "ज़मीन बेचें" },
  { en: "Investment Consultation", hi: "निवेश परामर्श" },
  { en: "Site Visit", hi: "साइट विज़िट" },
  { en: "Legal Verification", hi: "कानूनी सत्यापन" },
  { en: "Documentation Support", hi: "दस्तावेज़ीकरण सहायता" },
];

const socialLinks = [
  { icon: Facebook, href: siteConfig.sameAs[0], label: "Facebook" },
  { icon: Instagram, href: siteConfig.sameAs[1], label: "Instagram" },
  { icon: Linkedin, href: siteConfig.sameAs[2], label: "LinkedIn" },
  { icon: Youtube, href: siteConfig.sameAs[3], label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const t = uiStrings.footer;

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-px mx-auto grid max-w-8xl gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo href="#home" size={40} wordmarkClassName="font-display text-xl font-bold text-white" />
          <p className="mt-2 text-sm font-medium text-white/50">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {siteConfig.company} {t.description[lang]}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <social.icon className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">{t.quickLinks[lang]}</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-accent">
                  {link.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">{t.services[lang]}</h3>
          <ul className="mt-4 space-y-3">
            {footerServices.map((service) => (
              <li key={service.en} className="text-sm text-white/60">
                {service[lang]}
              </li>
            ))}
          </ul>
          <h3 className="mt-6 font-display text-base font-semibold text-white">{t.legal[lang]}</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/privacy-policy" className="text-sm text-white/60 transition-colors hover:text-accent">
                {t.privacyPolicy[lang]}
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-sm text-white/60 transition-colors hover:text-accent">
                {t.termsConditions[lang]}
              </Link>
            </li>
          </ul>
        </div>

        <div id="contact-footer">
          <h3 className="font-display text-base font-semibold text-white">{t.contact[lang]}</h3>
          <ul className="mt-4 space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {[
                  siteConfig.address.street,
                  siteConfig.address.city,
                  siteConfig.address.region,
                  siteConfig.address.postalCode,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </span>
            </li>
            {siteConfig.contacts.map((contact) => (
              <li key={contact.phone} className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <Link href={`tel:${contact.phone}`} className="hover:text-accent">
                  {contact.phoneDisplay} ({contact.name})
                </Link>
              </li>
            ))}
            {siteConfig.emails.map((email) => (
              <li key={email} className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <Link href={`mailto:${email}`} className="hover:text-accent">
                  {email}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{t.hours[lang]}</span>
            </li>
          </ul>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Inaya Estates office location map — Tijara, Rajasthan"
              src="https://www.google.com/maps?q=Chanderlok+City,+Tijara-Alwar+Road,+Tijara,+Rajasthan&output=embed"
              width="100%"
              height="160"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} Inaya Estates — {t.rightsReserved[lang]}
          </p>
          <p>{t.reraNote[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
