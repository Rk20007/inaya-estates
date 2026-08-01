"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

const EnquiryModalContext = createContext(null);

export function EnquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(null);

  function openModal(customTitle) {
    setTitle(customTitle || null);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm"
              onClick={closeModal}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="enquiry-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[92vh] w-full max-w-md overflow-y-auto"
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-700 shadow-card transition-transform hover:scale-105"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <LeadForm id="enquiry-modal-form" variant="light" title={title} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return ctx;
}
