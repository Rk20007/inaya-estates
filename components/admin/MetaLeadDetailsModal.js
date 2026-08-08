"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Clock, MessageSquare } from "lucide-react";
import { prettifyFieldName } from "@/lib/metaLeadDisplay";

export default function MetaLeadDetailsModal({ lead, onClose }) {
  return (
    <AnimatePresence>
      {lead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-premium sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-50 hover:text-ink-700"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Meta Lead Details</p>
            <h2 className="mt-1 font-display text-xl font-bold text-ink-900">
              Submitted via Facebook / Instagram
            </h2>

            <div className="mt-2 flex items-center gap-2 text-xs text-ink-400">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {lead.createdTime ? new Date(lead.createdTime).toLocaleString("en-IN") : "—"}
            </div>

            <div className="mt-6 flex flex-col divide-y divide-ink-100 rounded-2xl border border-ink-100">
              {(lead.fieldData ?? []).map((entry) => (
                <div key={entry.name} className="px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    {prettifyFieldName(entry.name)}
                  </p>
                  <p className="mt-1 text-sm text-ink-800">{(entry.values ?? []).join(", ") || "—"}</p>
                </div>
              ))}
            </div>

            {lead.remarks && (
              <div className="mt-4 flex items-start gap-2 rounded-2xl bg-accent/10 p-4">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">Remarks</p>
                  <p className="mt-1 text-sm text-ink-800">{lead.remarks}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
