"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

const SESSION_KEY = "inaya-lead-modal-shown";
const SHOW_DELAY_MS = 5000;

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-700 shadow-card transition-transform hover:scale-105"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <LeadForm id="modal-lead-form" variant="light" title={uiStrings.leadModal.title[lang]} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
