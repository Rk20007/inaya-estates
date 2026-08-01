"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, Menu, X, CalendarCheck } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { siteConfig } from "@/lib/seo";

const navPhoneContact = siteConfig.contacts.find((contact) => contact.name === "Mislu") ?? siteConfig.contacts[0];
import Logo from "@/components/ui/Logo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-px mx-auto flex h-16 max-w-8xl items-center justify-between"
      >
        <Logo href="#home" size={48} className="shrink-0" />

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-3 py-2 text-[13px] font-medium text-ink-600 transition-colors after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100"
              >
                {link.label[lang]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 xl:flex">
          <LanguageToggle />
          <Link
            href={`tel:${navPhoneContact.phone}`}
            className="flex items-center gap-2 rounded-full border border-ink-200 px-3.5 py-2 text-[13px] font-semibold text-ink-700 transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {navPhoneContact.phoneDisplay}
          </Link>
          <Link href="#contact" className="btn-secondary px-5 py-2.5 text-[13px]">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            {uiStrings.common.enquireNow[lang]}
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-100 bg-white shadow-card xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-primary/5 hover:text-primary"
                  >
                    {link.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 border-t border-ink-100 px-5 py-4">
              <Link href={`tel:${navPhoneContact.phone}`} className="btn-ghost flex-1">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {navPhoneContact.phoneDisplay}
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20land%20opportunities%20with%20Inaya%20Estates`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {uiStrings.common.whatsapp[lang]}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
