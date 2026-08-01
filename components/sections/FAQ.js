"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { faqCategories } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

export default function FAQ() {
  const { lang } = useLanguage();
  const t = uiStrings.faq;
  const [activeCategoryKey, setActiveCategoryKey] = useState(faqCategories[0].category.en);
  const [openIndex, setOpenIndex] = useState(0);

  const activeCategoryData = faqCategories.find((c) => c.category.en === activeCategoryKey);
  const activeItems = activeCategoryData?.items ?? [];

  function handleCategoryChange(categoryKey) {
    setActiveCategoryKey(categoryKey);
    setOpenIndex(0);
  }

  return (
    <section id="faq" className="section-py bg-surface">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow={t.eyebrow[lang]} title={t.title[lang]} subtitle={t.subtitle[lang]} />

        <RevealOnScroll className="mt-10 flex flex-wrap justify-center gap-2" delay={0.1}>
          {faqCategories.map((category) => (
            <button
              key={category.category.en}
              type="button"
              onClick={() => handleCategoryChange(category.category.en)}
              aria-pressed={activeCategoryKey === category.category.en}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeCategoryKey === category.category.en
                  ? "bg-primary text-white shadow-premium"
                  : "bg-white text-ink-600 hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {category.category[lang]}
            </button>
          ))}
        </RevealOnScroll>

        <div className="mt-8 flex flex-col gap-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategoryKey}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4"
            >
              {activeItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.question.en}
                    className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card"
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${activeCategoryKey}-${index}`}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">
                          {item.question[lang]}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${activeCategoryKey}-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm leading-relaxed text-ink-500">{item.answer[lang]}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
