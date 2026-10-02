import company from "@/data/company.json";

// Informations de l'entreprise : saisies une seule fois dans data/company.json,
// reprises par les mentions légales, le header, le footer, les pages contact et merci et le JSON-LD.
export const COMPANY = company;

/** Nom utilisé dans les paragraphes : dénomination sociale, sinon nom commercial */
export const COMPANY_NAME = company.legalName.trim() || company.tradeName;

/** « One Chauffeur, SASU » ; vide si la dénomination sociale n'est pas renseignée */
export const LEGAL_NAME_WITH_FORM = company.legalName.trim()
  ? [company.legalName.trim(), company.legalForm.trim()].filter(Boolean).join(", ")
  : "";

const digits = (phone: string) => phone.replace(/[^\d+]/g, "");

// Liens d'appel et WhatsApp dérivés des numéros affichés, jamais recopiés
export const PHONE_DISPLAY = company.phone;
export const PHONE_HREF = `tel:${digits(company.phone)}`;
export const WHATSAPP_HREF = `https://wa.me/${digits(company.whatsapp).replace("+", "")}`;
