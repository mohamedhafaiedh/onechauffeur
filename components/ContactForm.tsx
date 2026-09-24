"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Phone,
  Mail,
  HelpCircle,
  MessageSquare,
  ChevronDown
} from "lucide-react";

export interface ContactFormProps {
  lang?: "fr" | "en";
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

export default function ContactForm({ lang = "fr", redirectUrl }: ContactFormProps) {
  const router = useRouter();
  const isEn = lang === "en";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formName = isEn ? "contact-en" : "contact";
  const emailSubject = isEn ? "Contact Request - One Chauffeur" : "Nouvelle demande de contact - One Chauffeur";

  const fields = isEn
    ? { name: "name", phone: "phone", email: "email", subject: "topic", message: "message" }
    : { name: "nom", phone: "telephone", email: "email", subject: "objet", message: "message" };

  const subjectOptions = isEn
    ? [
        { value: "Information", label: "Request Information" },
        { value: "Quote", label: "Request Quote" },
        { value: "Booking", label: "Booking" }
      ]
    : [
        { value: "Information", label: "Demande d'information" },
        { value: "Devis", label: "Demande de devis" },
        { value: "Réservation", label: "Réservation" }
      ];

  const targetRedirectUrl = redirectUrl || (isEn ? "/en/merci" : "/merci");

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
        isEn
          ? "An error occurred while sending your message. Please try again or call us directly."
          : "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ou nous contacter par téléphone."
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
      className="elementor-form"
      method="post"
      name={formName}
      aria-label={isEn ? "Contact Form" : "Formulaire de contact"}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value="" />
      <input type="hidden" name="pageUrl" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="timestamp" value="" />
      <input type="hidden" name="source" value="website" />

      <div className="elementor-form-fields-wrapper">
        {/* Name (Full Width - 100%) */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.name ? "is-focused" : ""
            } ${nameVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <User size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-name" className="floating-label">
              {isEn ? "Name *" : "Nom *"}
            </label>
            <input
              type="text"
              name={fields.name}
              id="contact-field-name"
              className="floating-input-control"
              placeholder={isEn ? "Your name" : "Votre nom"}
              value={nameVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.name)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={isEn ? "Name" : "Nom"}
            />
          </div>
        </div>

        {/* Email (50%) */}
        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.email ? "is-focused" : ""
            } ${emailVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Mail size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-email" className="floating-label">
              {isEn ? "Email *" : "E-mail *"}
            </label>
            <input
              type="email"
              name={fields.email}
              id="contact-field-email"
              className="floating-input-control"
              placeholder={isEn ? "Your email" : "Votre e-mail"}
              value={emailVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.email)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={isEn ? "Email" : "E-mail"}
            />
          </div>
        </div>

        {/* Phone (50%) */}
        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.phone ? "is-focused" : ""
            } ${phoneVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Phone size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-phone" className="floating-label">
              {isEn ? "Phone *" : "Téléphone *"}
            </label>
            <input
              type="tel"
              name={fields.phone}
              id="contact-field-phone"
              className="floating-input-control"
              placeholder={isEn ? "e.g. +33 6 67 52 06 77" : "Ex. : +33 6 67 52 06 77"}
              value={phoneVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.phone)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              pattern="[0-9()#&+*-=.\s]+"
              aria-label={isEn ? "Phone" : "Téléphone"}
            />
          </div>
        </div>

        {/* Subject (Full Width - 100%) */}
        <div className="elementor-field-type-select elementor-field-group elementor-column elementor-col-100 elementor-field-required">
          <div
            className={`floating-input-wrapper select-wrapper ${
              subjectVal ? "has-value" : ""
            } ${focusedField === fields.subject ? "is-focused" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <HelpCircle size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-subject" className="floating-label">
              {isEn ? "Subject *" : "Objet de la demande *"}
            </label>
            <select
              name={fields.subject}
              id="contact-field-subject"
              className={`floating-input-control floating-select-control ${
                !subjectVal ? "is-placeholder" : ""
              }`}
              value={subjectVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.subject)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={isEn ? "Subject" : "Objet de la demande"}
            >
              <option value="" disabled>
                {isEn ? "— Please choose a topic —" : "— Veuillez choisir un objet —"}
              </option>
              {subjectOptions.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="floating-select-caret" aria-hidden="true">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-col-100 elementor-field-required">
          <div
            className={`floating-input-wrapper textarea-wrapper ${
              focusedField === fields.message ? "is-focused" : ""
            } ${messageVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <MessageSquare size={18} strokeWidth={2} />
            </div>
            <label htmlFor="contact-field-message" className="floating-label">
              {isEn ? "Message *" : "Message *"}
            </label>
            <textarea
              name={fields.message}
              id="contact-field-message"
              className="floating-input-control floating-textarea"
              rows={4}
              placeholder={isEn ? "Your message here..." : "Votre message ici..."}
              value={messageVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.message)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={isEn ? "Message" : "Message"}
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

        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
          <button
            className={`elementor-button elementor-size-sm ${isSubmitting ? "btn-disabled" : ""}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="btn-spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" fill="none" />
                  <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
                <span>{isEn ? "Sending..." : "Envoi en cours..."}</span>
              </>
            ) : (
              <span>{isEn ? "Send Message" : "Envoyer le message"}</span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
