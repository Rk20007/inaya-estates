"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function GroupAffiliationBar() {
  const { lang } = useLanguage();

  return (
    <div className="border-t border-white/10 bg-ink-900 py-3">
      <p className="container-px mx-auto max-w-8xl text-center text-xs text-white/50">
        {uiStrings.groupBar.text[lang]}
      </p>
    </div>
  );
}
