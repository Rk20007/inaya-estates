"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink-200 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Select language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          lang === "en" ? "bg-primary text-white" : "text-ink-500 hover:text-primary"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          lang === "hi" ? "bg-primary text-white" : "text-ink-500 hover:text-primary"
        }`}
      >
        हिं
      </button>
    </div>
  );
}
