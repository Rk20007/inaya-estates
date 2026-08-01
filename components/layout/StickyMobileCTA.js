"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function StickyMobileCTA() {
  const { lang } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-px border-t border-ink-100 bg-white shadow-[0_-10px_30px_-15px_rgba(15,23,42,0.3)] lg:hidden">
      <Link
        href={`tel:${siteConfig.phone}`}
        className="flex flex-1 items-center justify-center gap-2 bg-primary py-4 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {uiStrings.common.callNow[lang]}
      </Link>
      <Link
        href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20land%20opportunities%20with%20Inaya%20Estates`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-secondary py-4 text-sm font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {uiStrings.common.whatsapp[lang]}
      </Link>
    </div>
  );
}
