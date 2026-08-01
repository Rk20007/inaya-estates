"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail, MapPin, Wallet, MessageSquare, Tag, Clock } from "lucide-react";

function Row({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{label}</p>
        <p className="text-sm text-ink-800">{value}</p>
      </div>
    </div>
  );
}

export default function LeadDetailsModal({ lead, onClose }) {
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

            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Lead Details</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink-900">{lead.name}</h2>

            <div className="mt-6 flex flex-col gap-5">
              <Row icon={Phone} label="Phone" value={lead.phone} />
              <Row icon={Mail} label="Email" value={lead.email} />
              <Row icon={Tag} label="Requirement" value={lead.requirement} />
              <Row icon={MapPin} label="Preferred Location" value={lead.location} />
              <Row icon={Wallet} label="Budget" value={lead.budget} />
              <Row icon={MessageSquare} label="Message" value={lead.message} />
              <Row icon={Tag} label="Source" value={lead.source} />
              <Row
                icon={Clock}
                label="Submitted"
                value={lead.createdAt ? new Date(lead.createdAt).toLocaleString("en-IN") : ""}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
