"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);
const STORAGE_KEY = "inaya-lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "hi") {
      setLangState(stored);
      document.documentElement.lang = stored === "hi" ? "hi-IN" : "en-IN";
    }
  }, []);

  function setLang(nextLang) {
    setLangState(nextLang);
    window.localStorage.setItem(STORAGE_KEY, nextLang);
    document.documentElement.lang = nextLang === "hi" ? "hi-IN" : "en-IN";
  }

  function toggleLang() {
    setLang(lang === "en" ? "hi" : "en");
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/** Resolve a bilingual field: either a plain string or a { en, hi } object. */
export function pick(field, lang) {
  if (field == null) return field;
  if (typeof field === "string") return field;
  return field[lang] ?? field.en;
}
