"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, MapPin, MessageSquare, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { locations } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { uiStrings } from "@/lib/i18n/uiStrings";

const initialState = {
  name: "",
  phone: "",
  requirement: "buy",
  location: "",
  message: "",
};

export default function LeadForm({ variant = "glass", title, id }) {
  const { lang } = useLanguage();
  const t = uiStrings.leadForm;
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const isGlass = variant === "glass";

  const requirementOptions = [
    { value: "buy", label: t.requirementBuy[lang] },
    { value: "sell", label: t.requirementSell[lang] },
    { value: "investment", label: t.requirementInvestment[lang] },
  ];

  function validate() {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = t.fullNameError[lang];
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      nextErrors.phone = t.phoneError[lang];
    }
    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setServerError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: id || "website" }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setServerError(data.message || t.genericError[lang]);
        setStatus("idle");
        return;
      }

      setStatus("success");
      setFormData(initialState);
    } catch {
      setServerError(t.networkError[lang]);
      setStatus("idle");
    }
  }

  const inputClasses = isGlass
    ? "w-full rounded-xl border border-white/25 bg-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/50 backdrop-blur-md transition-colors focus:border-accent focus:bg-white/15"
    : "w-full rounded-xl border border-ink-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-primary";

  const textareaClasses = isGlass
    ? "w-full rounded-xl border border-white/25 bg-white/10 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/50 backdrop-blur-md transition-colors focus:border-accent focus:bg-white/15"
    : "w-full rounded-xl border border-ink-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-primary";

  const labelClasses = `mb-1.5 block text-xs font-semibold uppercase tracking-wide ${
    isGlass ? "text-white/70" : "text-ink-500"
  }`;

  const iconClasses = `absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 ${
    isGlass ? "text-white/50" : "text-ink-400"
  }`;

  return (
    <div
      id={id}
      className={
        isGlass
          ? "glass w-full max-w-md rounded-3xl p-6 shadow-premium sm:p-8"
          : "w-full max-w-md rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8"
      }
    >
      <h3 className={`font-display text-xl font-bold sm:text-2xl ${isGlass ? "text-white" : "text-ink-900"}`}>
        {title || t.defaultTitle[lang]}
      </h3>
      <p className={`mt-1 text-sm ${isGlass ? "text-white/70" : "text-ink-500"}`}>{t.subtitle[lang]}</p>

      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-8 flex flex-col items-center gap-3 rounded-2xl py-8 text-center ${
              isGlass ? "text-white" : "text-ink-900"
            }`}
          >
            <CheckCircle2 className="h-12 w-12 text-secondary-400" aria-hidden="true" />
            <p className="text-lg font-semibold">{t.thankYou[lang]}</p>
            <p className={`text-sm ${isGlass ? "text-white/70" : "text-ink-500"}`}>{t.successMessage[lang]}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className={`mt-2 text-sm font-semibold underline underline-offset-4 ${
                isGlass ? "text-accent-200" : "text-primary"
              }`}
            >
              {t.submitAnother[lang]}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="mt-6 flex flex-col gap-4"
          >
            <div>
              <label htmlFor={`${id}-name`} className={labelClasses}>
                {t.fullName[lang]}
              </label>
              <div className="relative">
                <User className={iconClasses} aria-hidden="true" />
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t.fullNamePlaceholder[lang]}
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${id}-name-error` : undefined}
                />
              </div>
              {errors.name && (
                <p id={`${id}-name-error`} className="mt-1 text-xs font-medium text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${id}-phone`} className={labelClasses}>
                {t.phoneNumber[lang]}
              </label>
              <div className="relative">
                <Phone className={iconClasses} aria-hidden="true" />
                <input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder={t.phonePlaceholder[lang]}
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
                />
              </div>
              {errors.phone && (
                <p id={`${id}-phone-error`} className="mt-1 text-xs font-medium text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <span className={labelClasses}>{t.requirement[lang]}</span>
              <div className="grid grid-cols-3 gap-2">
                {requirementOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-center justify-center rounded-xl border px-2 py-3 text-center text-xs font-semibold transition-colors sm:text-sm ${
                      formData.requirement === option.value
                        ? isGlass
                          ? "border-accent bg-accent/20 text-white"
                          : "border-primary bg-primary/5 text-primary"
                        : isGlass
                        ? "border-white/25 text-white/70"
                        : "border-ink-200 text-ink-500"
                    }`}
                  >
                    <input
                      type="radio"
                      name="requirement"
                      value={option.value}
                      checked={formData.requirement === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor={`${id}-location`} className={labelClasses}>
                {t.preferredLocation[lang]}
              </label>
              <div className="relative">
                <MapPin className={iconClasses} aria-hidden="true" />
                <select
                  id={`${id}-location`}
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="" className="text-ink-900">
                    {t.selectLocation[lang]}
                  </option>
                  {locations.map((location) => (
                    <option key={location.slug} value={location.slug} className="text-ink-900">
                      {location.name[lang]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor={`${id}-message`} className={labelClasses}>
                {t.message[lang]}
              </label>
              <div className="relative">
                <MessageSquare className={`${iconClasses} top-6 -translate-y-0`} aria-hidden="true" />
                <textarea
                  id={`${id}-message`}
                  name="message"
                  rows={3}
                  placeholder={t.messagePlaceholder[lang]}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${textareaClasses} resize-none`}
                />
              </div>
            </div>

            {serverError && (
              <p
                className={`flex items-start gap-2 rounded-xl px-3 py-2.5 text-xs font-medium ${
                  isGlass ? "bg-red-500/15 text-red-200" : "bg-red-50 text-red-600"
                }`}
              >
                <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-accent mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  {t.submitting[lang]}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {t.submit[lang]}
                </>
              )}
            </button>
            <p className={`text-center text-xs ${isGlass ? "text-white/50" : "text-ink-400"}`}>
              {t.disclaimer[lang]}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
