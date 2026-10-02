"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getMessages } from "@/lib/i18n";
import f from "./Form.module.css";
import { DEFAULT_LANG, pagePath, type Lang } from "@/lib/seo";
import {
  User,
  Phone,
  Mail,
  HelpCircle,
  MessageSquare,
  ChevronDown
} from "lucide-react";

export interface ContactFormProps {
  lang?: Lang;
  redirectUrl?: string;
}

function getFormattedTimestamp() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("fr-FR", {
    timeZone: "Europe/Paris",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${dateStr} à ${timeStr} (heure de Paris)`;
}

// Configuration Netlify Forms : un seul formulaire pour toutes les langues (déclaré dans public/form.html).
// Champs et valeurs en français pour des e-mails homogènes ; la langue du visiteur est dans le champ « langue ».
const FORM_NAME = "contact";
const FIELDS = { name: "nom", phone: "telephone", email: "email", subject: "objet", message: "message" };
const SUBJECT_VALUES = ["Information", "Devis", "Réservation"];

export default function ContactForm({ lang = "fr", redirectUrl }: ContactFormProps) {
  const router = useRouter();
  const t = getMessages(lang).contactForm;
  const common = getMessages(lang).common;
  const formName = FORM_NAME;
  const fields = FIELDS;
  const emailSubject = `Nouvelle demande de contact - One Chauffeur${lang === DEFAULT_LANG ? "" : ` (${lang.toUpperCase()})`}`;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const subjectOptions = SUBJECT_VALUES.map((value, i) => ({ value, label: t.subjectOptions[i] }));

  const targetRedirectUrl = redirectUrl || pagePath("merci", lang);

  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({
    [fields.name]: "",
    [fields.phone]: "",
    [fields.email]: "",
    [fields.subject]: "",
    [fields.message]: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFieldValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("form-name", formName);
      formData.set("subject", emailSubject);

      if (typeof window !== "undefined") {
        formData.set("pageUrl", window.location.href);
        formData.set("timestamp", getFormattedTimestamp());
        formData.set("source", "website");
      }

      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, value.toString());
      }

      const res = await fetch("/form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      });

      if (res.ok || (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"))) {
        router.push(targetRedirectUrl);
      } else {
        throw new Error("Erreur réseau");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage(
        t.submitError
      );
      setIsSubmitting(false);
    }
  };

  const nameVal = fieldValues[fields.name] || "";
  const phoneVal = fieldValues[fields.phone] || "";
  const emailVal = fieldValues[fields.email] || "";
  const subjectVal = fieldValues[fields.subject] ?? "";
  const messageVal = fieldValues[fields.message] || "";

  return (
    <form
      className={f.form}
      method="post"
      name={formName}
      aria-label={t.formLabel}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="langue" value={lang} />
      {/* Piège anti-spam Netlify : invisible pour les visiteurs, rempli seulement par les robots */}
      <p className={f.honeypot} aria-hidden="true">
        <label>
          Ne pas remplir <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <input type="hidden" name="subject" value="" />
      <input type="hidden" name="pageUrl" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="timestamp" value="" />
      <input type="hidden" name="source" value="website" />

      <div className={f.fields}>
        {/* Name (Full Width - 100%) */}
        <div className={f.full}>
          <div
            className={`${f.control} ${
              focusedField === fields.name ? f.focused : ""
            } ${nameVal ? f.filled : ""}`}
          >
            <div className={f.icon} aria-hidden="true">
              <User size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-name" className={f.label}>
              {t.nameLabel}
            </label>
            <input
              type="text"
              name={fields.name}
              id="contact-field-name"
              className={f.input}
              placeholder={t.namePlaceholder}
              value={nameVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.name)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={t.name}
            />
          </div>
        </div>

        {/* Email (50%) */}
        <div className={f.half}>
          <div
            className={`${f.control} ${
              focusedField === fields.email ? f.focused : ""
            } ${emailVal ? f.filled : ""}`}
          >
            <div className={f.icon} aria-hidden="true">
              <Mail size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-email" className={f.label}>
              {t.emailLabel}
            </label>
            <input
              type="email"
              name={fields.email}
              id="contact-field-email"
              className={f.input}
              placeholder={t.emailPlaceholder}
              value={emailVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.email)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={t.email}
            />
          </div>
        </div>

        {/* Phone (50%) */}
        <div className={f.half}>
          <div
            className={`${f.control} ${
              focusedField === fields.phone ? f.focused : ""
            } ${phoneVal ? f.filled : ""}`}
          >
            <div className={f.icon} aria-hidden="true">
              <Phone size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-phone" className={f.label}>
              {t.phoneLabel}
            </label>
            <input
              type="tel"
              name={fields.phone}
              id="contact-field-phone"
              className={f.input}
              placeholder={t.phonePlaceholder}
              value={phoneVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.phone)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              pattern="[0-9()#&+*-=.\s]+"
              aria-label={t.phone}
            />
          </div>
        </div>

        {/* Subject (Full Width - 100%) */}
        <div className={f.full}>
          <div
            className={`${f.control} ${f.select} ${
              subjectVal ? f.filled : ""
            } ${focusedField === fields.subject ? f.focused : ""}`}
          >
            <div className={f.icon} aria-hidden="true">
              <HelpCircle size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-subject" className={f.label}>
              {t.subjectLabel}
            </label>
            <select
              name={fields.subject}
              id="contact-field-subject"
              className={`${f.input} ${f.selectInput} ${
                !subjectVal ? f.placeholder : ""
              }`}
              value={subjectVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.subject)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={t.subject}
            >
              <option value="" disabled>
                {t.subjectPlaceholder}
              </option>
              {subjectOptions.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className={f.caret} aria-hidden="true">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className={f.full}>
          <div
            className={`${f.control} ${f.textarea} ${
              focusedField === fields.message ? f.focused : ""
            } ${messageVal ? f.filled : ""}`}
          >
            <div className={f.icon} aria-hidden="true">
              <MessageSquare size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-message" className={f.label}>
              {t.messageLabel}
            </label>
            <textarea
              name={fields.message}
              id="contact-field-message"
              className={`${f.input} ${f.textareaInput}`}
              rows={4}
              placeholder={t.messagePlaceholder}
              value={messageVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.message)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={t.message}
            ></textarea>
          </div>
        </div>

        {errorMessage && (
          <div
            style={{
              color: "#f87171",
              backgroundColor: "rgba(185, 28, 28, 0.2)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              borderRadius: "6px",
              padding: "12px 16px",
              marginBottom: "16px",
              fontSize: "13.5px",
              fontWeight: "500",
              width: "100%"
            }}
          >
            {errorMessage}
          </div>
        )}

        <div className={f.submitRow}>
          <button
            className={`${f.submit} ${isSubmitting ? f.disabled : ""}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className={f.spinner} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" fill="none" />
                  <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
                <span>{t.sending}</span>
              </>
            ) : (
              <span>{t.submit}</span>
            )}
          </button>
          <p className={f.privacy}>
            {common.privacyNote}{" "}
            <Link href={`${pagePath("mentions-legales", lang)}#confidentialite`}>{common.privacyLink}</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
