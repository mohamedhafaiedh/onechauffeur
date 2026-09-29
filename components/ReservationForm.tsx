"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { pagePath } from "@/lib/seo";
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

export default function ReservationForm({ lang = "fr", redirectUrl }: ReservationFormProps) {
  const router = useRouter();
  const isEn = lang === "en";

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

  const formName = isEn ? "reservation-en" : "reservation";

  const fields = isEn
    ? {
        pickup: "pickup_address",
        dropoff: "dropoff_address",
        date: "date",
        time: "time",
        vehicle: "vehicle",
        email: "email",
        phone: "phone",
        message: "message"
      }
    : {
        pickup: "adresse_depart",
        dropoff: "adresse_arrivee",
        date: "date",
        time: "heure",
        vehicle: "vehicule",
        email: "email",
        phone: "telephone",
        message: "message"
      };

  const vehicleOptions = isEn
    ? [
        { value: "Sedan (Tesla Model 3 or similar - 3 pax)", label: "Sedan (Tesla Model 3 or similar - 3 pax)" },
        { value: "Business Sedan (Mercedes E-Class - 3 pax)", label: "Business Sedan (Mercedes E-Class - 3 pax)" },
        { value: "Luxury Sedan (Mercedes S-Class - 3 pax)", label: "Luxury Sedan (Mercedes S-Class - 3 pax)" },
        { value: "Van (Mercedes V-Class - 7 pax)", label: "Van (Mercedes V-Class - 7 pax)" }
      ]
    : [
        { value: "Berline (Tesla Model 3 ou similaire - 3 pax)", label: "Berline (Tesla Model 3 ou similaire - 3 pax)" },
        { value: "Berline Business (Mercedes Classe E - 3 pax)", label: "Berline Business (Mercedes Classe E - 3 pax)" },
        { value: "Berline de Luxe (Mercedes Classe S - 3 pax)", label: "Berline de Luxe (Mercedes Classe S - 3 pax)" },
        { value: "Van (Mercedes Classe V - 7 pax)", label: "Van (Mercedes Classe V - 7 pax)" }
      ];

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
      const emailSubjectPrefix = isEn ? "New Booking Request - One Chauffeur" : "Nouvelle demande de réservation - One Chauffeur";
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
        isEn
          ? "An error occurred while sending your booking request. Please try again or call us directly."
          : "Une erreur est survenue lors de l'envoi de votre réservation. Veuillez réessayer ou nous contacter par téléphone."
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
      aria-label={isEn ? "Online Booking Quote" : "Devis réservation en ligne"}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
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
              {isEn ? "Pickup Location *" : "Lieu de prise en charge *"}
            </label>
            <input
              type="text"
              name={fields.pickup}
              id="res-field-pickup"
              className="floating-input-control"
              placeholder={isEn ? "e.g. CDG Airport Terminal 2E, Hotel Ritz..." : "Ex. : Aéroport CDG Terminal 2E, Hôtel Ritz, Paris 8e..."}
              value={pickupVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.pickup)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={isEn ? "Pickup Location" : "Lieu de prise en charge"}
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
              {isEn ? "Dropoff Destination *" : "Lieu de destination *"}
            </label>
            <input
              type="text"
              name={fields.dropoff}
              id="res-field-dropoff"
              className="floating-input-control"
              placeholder={isEn ? "e.g. Gare de Lyon, Eiffel Tower, Versailles..." : "Ex. : Gare de Lyon, Tour Eiffel, Versailles, Paris 16e..."}
              value={dropoffVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.dropoff)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={isEn ? "Dropoff Destination" : "Lieu de destination"}
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
              {isEn ? "Pickup Date *" : "Date de prise en charge *"}
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
              aria-label={isEn ? "Pickup Date" : "Date de prise en charge"}
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
              {isEn ? "Pickup Time *" : "Heure de prise en charge *"}
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
              aria-label={isEn ? "Pickup Time" : "Heure de prise en charge"}
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
              {isEn ? "Vehicle Category *" : "Catégorie de véhicule *"}
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
              aria-label={isEn ? "Vehicle Category" : "Catégorie de véhicule"}
            >
              <option value="" disabled>
                {isEn ? "— Please choose a vehicle category —" : "— Veuillez choisir une catégorie de véhicule —"}
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
              {isEn ? "Email Address *" : "Adresse e-mail *"}
            </label>
            <input
              type="email"
              name={fields.email}
              id="res-field-email"
              className="floating-input-control"
              placeholder={isEn ? "e.g. client@company.com" : "Ex. : contact@entreprise.com"}
              value={emailVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.email)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              aria-label={isEn ? "Email Address" : "Adresse e-mail"}
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
              {isEn ? "Phone Number *" : "Numéro de téléphone *"}
            </label>
            <input
              type="tel"
              name={fields.phone}
              id="res-field-phone"
              className="floating-input-control"
              placeholder={isEn ? "e.g. +33 6 67 52 06 77" : "Ex. : +33 6 67 52 06 77"}
              value={phoneVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.phone)}
              onBlur={() => setFocusedField(null)}
              required={true}
              disabled={isSubmitting}
              pattern="[0-9()#&+*-=.\s]+"
              aria-label={isEn ? "Phone Number" : "Numéro de téléphone"}
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
              {isEn ? "Special Requests or Instructions" : "Précisions ou demandes particulières"}
            </label>
            <textarea
              name={fields.message}
              id="res-field-message"
              className="floating-input-control floating-textarea"
              rows={3}
              placeholder={
                isEn
                  ? "e.g. Flight number, child seat needed, oversized luggage..."
                  : "Ex. : Numéro de vol, besoin d'un siège bébé, nombre de bagages volumineux..."
              }
              value={messageVal}
              onChange={handleChange}
              onFocus={() => setFocusedField(fields.message)}
              onBlur={() => setFocusedField(null)}
              disabled={isSubmitting}
              aria-label={isEn ? "Special Requests or Instructions" : "Précisions ou demandes particulières"}
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
                <span>{isEn ? "Sending your booking..." : "Envoi de votre réservation en cours..."}</span>
              </>
            ) : (
              <span>{isEn ? "Book / Get Free Quote" : "Demander mon devis / Réserver"}</span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
