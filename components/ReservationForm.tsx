"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getMessages } from "@/lib/i18n";
import { DEFAULT_LANG, pagePath, type Lang } from "@/lib/seo";
import {
  MapPin,
  Navigation,
  Calendar,
  Clock,
  Car,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown
} from "lucide-react";

export interface ReservationFormProps {
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
const FORM_NAME = "reservation";
const FIELDS = {
  pickup: "adresse_depart",
  dropoff: "adresse_arrivee",
  date: "date",
  time: "heure",
  vehicle: "vehicule",
  email: "email",
  phone: "telephone",
  message: "message",
};
const VEHICLE_VALUES = [
  "Berline (Tesla Model 3 ou similaire - 3 pax)",
  "Berline Business (Mercedes Classe E - 3 pax)",
  "Berline de Luxe (Mercedes Classe S - 3 pax)",
  "Van (Mercedes Classe V - 7 pax)",
];

export default function ReservationForm({ lang = "fr", redirectUrl }: ReservationFormProps) {
  const router = useRouter();
  const t = getMessages(lang).bookingForm;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [todayString] = useState(() => {
    try {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    } catch {
      return "";
    }
  });

  const formName = FORM_NAME;
  const fields = FIELDS;
  const emailSubjectPrefix = `Nouvelle demande de réservation - One Chauffeur${lang === DEFAULT_LANG ? "" : ` (${lang.toUpperCase()})`}`;
  const vehicleOptions = VEHICLE_VALUES.map((value, i) => ({ value, label: t.vehicleOptions[i] }));

  const targetRedirectUrl = redirectUrl || pagePath("merci", lang);

  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({
    [fields.pickup]: "",
    [fields.dropoff]: "",
    [fields.date]: "",
    [fields.time]: "",
    [fields.vehicle]: "",
    [fields.email]: "",
    [fields.phone]: "",
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

      const dateVal = (formData.get(fields.date) as string) || "";
      const timeVal = (formData.get(fields.time) as string) || "";
      formData.set("subject", `${emailSubjectPrefix} (${dateVal} - ${timeVal})`);

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

  const pickupVal = fieldValues[fields.pickup] || "";
  const dropoffVal = fieldValues[fields.dropoff] || "";
  const dateVal = fieldValues[fields.date] || "";
  const timeVal = fieldValues[fields.time] || "";
  const vehicleVal = fieldValues[fields.vehicle] ?? "";
  const emailVal = fieldValues[fields.email] || "";
  const phoneVal = fieldValues[fields.phone] || "";
  const messageVal = fieldValues[fields.message] || "";

  return (
    <form
      className="elementor-form"
      method="post"
      name={formName}
      aria-label={t.formLabel}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="langue" value={lang} />
      <input type="hidden" name="subject" value="" />
      <input type="hidden" name="pageUrl" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="timestamp" value="" />
      <input type="hidden" name="source" value="website" />

      <div className="elementor-form-fields-wrapper">
        {/* Champ 1 : Lieu de départ */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.pickup ? "is-focused" : ""
            } ${pickupVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <MapPin size={18} strokeWidth={2} />
            </div>
            <label htmlFor="res-field-pickup" className="floating-label">
              {t.pickupLocationLabel}
            </label>
            <input
              type="text"
              name={fields.pickup}
              id="res-field-pickup"
              className="floating-input-control"
              placeholder={t.pickupPlaceholder}
              value={pickupVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.pickup)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={t.pickupLocation}
            />
          </div>
        </div>

        {/* Champ 2 : Lieu de destination */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.dropoff ? "is-focused" : ""
            } ${dropoffVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Navigation size={18} strokeWidth={2} />
            </div>
            <label htmlFor="res-field-dropoff" className="floating-label">
              {t.dropoffDestinationLabel}
            </label>
            <input
              type="text"
              name={fields.dropoff}
              id="res-field-dropoff"
              className="floating-input-control"
              placeholder={t.dropoffPlaceholder}
              value={dropoffVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.dropoff)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={t.dropoffDestination}
            />
          </div>
        </div>

        {/* Champ 3 : Date */}
        <div className="elementor-field-type-date elementor-field-group elementor-column elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.date ? "is-focused" : ""
            } ${dateVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Calendar size={18} strokeWidth={2} />
            </div>
            <label htmlFor="res-field-date" className="floating-label">
              {t.pickupDateLabel}
            </label>
            <input
              type="date"
              name={fields.date}
              id="res-field-date"
              className="floating-input-control"
              min={todayString}
              value={dateVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.date)}
              onBlur={() => setFocusedField(null)}
              onClick={(e) => {
                try {
                  if ("showPicker" in e.currentTarget && typeof e.currentTarget.showPicker === "function") {
                    e.currentTarget.showPicker();
                  }
                } catch {}
              }}
              required={true}
              disabled={isSubmitting}
              aria-label={t.pickupDate}
            />
          </div>
        </div>

        {/* Champ 4 : Heure */}
        <div className="elementor-field-type-time elementor-field-group elementor-column elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.time ? "is-focused" : ""
            } ${timeVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Clock size={18} strokeWidth={2} />
            </div>
            <label htmlFor="res-field-time" className="floating-label">
              {t.pickupTimeLabel}
            </label>
            <input
              type="time"
              name={fields.time}
              id="res-field-time"
              className="floating-input-control"
              value={timeVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.time)}
              onBlur={() => setFocusedField(null)}
              onClick={(e) => {
                try {
                  if ("showPicker" in e.currentTarget && typeof e.currentTarget.showPicker === "function") {
                    e.currentTarget.showPicker();
                  }
                } catch {}
              }}
              required={true}
              disabled={isSubmitting}
              aria-label={t.pickupTime}
            />
          </div>
        </div>

        {/* Champ 5 : Véhicule */}
        <div className="elementor-field-type-select elementor-field-group elementor-column elementor-col-100 elementor-field-required">
          <div
            className={`floating-input-wrapper select-wrapper ${
              vehicleVal ? "has-value" : ""
            } ${focusedField === fields.vehicle ? "is-focused" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Car size={18} strokeWidth={2} />
            </div>
            <label htmlFor="res-field-vehicle" className="floating-label">
              {t.vehicleCategoryLabel}
            </label>
            <select
              name={fields.vehicle}
              id="res-field-vehicle"
              className={`floating-input-control floating-select-control ${
                !vehicleVal ? "is-placeholder" : ""
              }`}
              value={vehicleVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.vehicle)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={t.vehicleCategory}
            >
              <option value="" disabled>
                {t.vehiclePlaceholder}
              </option>
              {vehicleOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="floating-select-caret" aria-hidden="true">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Champ 6 : Email */}
        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.email ? "is-focused" : ""
            } ${emailVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Mail size={18} strokeWidth={2} />
            </div>
            <label htmlFor="res-field-email" className="floating-label">
              {t.emailAddressLabel}
            </label>
            <input
              type="email"
              name={fields.email}
              id="res-field-email"
              className="floating-input-control"
              placeholder={t.emailPlaceholder}
              value={emailVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.email)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={t.emailAddress}
            />
          </div>
        </div>

        {/* Champ 7 : Téléphone */}
        <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-col-50 elementor-field-required">
          <div
            className={`floating-input-wrapper ${
              focusedField === fields.phone ? "is-focused" : ""
            } ${phoneVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <Phone size={18} strokeWidth={2} />
            </div>
            <label htmlFor="res-field-phone" className="floating-label">
              {t.phoneNumberLabel}
            </label>
            <input
              type="tel"
              name={fields.phone}
              id="res-field-phone"
              className="floating-input-control"
              placeholder={t.phonePlaceholder}
              value={phoneVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.phone)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              pattern="[0-9()#&+*-=.\s]+"
              aria-label={t.phoneNumber}
            />
          </div>
        </div>

        {/* Champ 8 : Message / Précisions */}
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-col-100">
          <div
            className={`floating-input-wrapper textarea-wrapper ${
              focusedField === fields.message ? "is-focused" : ""
            } ${messageVal ? "has-value" : ""}`}
          >
            <div className="floating-field-icon" aria-hidden="true">
              <MessageSquare size={18} strokeWidth={2} />
            </div>
            <label htmlFor="res-field-message" className="floating-label">
              {t.message}
            </label>
            <textarea
              name={fields.message}
              id="res-field-message"
              className="floating-input-control floating-textarea"
              rows={3}
              placeholder={
                t.messagePlaceholder
              }
              value={messageVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.message)}
              onBlur={() => setFocusedField(null)}
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

        {/* Bouton de validation */}
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
                <span>{t.sending}</span>
              </>
            ) : (
              <span>{t.submit}</span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
