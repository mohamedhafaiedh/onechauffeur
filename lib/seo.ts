import type { Metadata } from "next";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://onechauffeur.fr";
export const SITE_URL = BASE_URL;

export const LOCALES = {
  fr: { code: "fr-FR", prefix: "", dir: "ltr" },
  en: { code: "en-US", prefix: "/en", dir: "ltr" },
} as const;

export type Lang = keyof typeof LOCALES;

export const SITE_ROUTES = [
  "",
  "services",
  "flotte",
  "reservation",
  "contact",
  "cgv",
  "mentions-legales",
  "politique-de-confidentialite",
] as const;

export type RouteSlug = (typeof SITE_ROUTES)[number];

export function buildAlternates(slug: string, lang: Lang) {
  const cleanSlug = slug.replace(/^\/|\/$/g, "");
  const path = cleanSlug ? `${cleanSlug}/` : "";

  const canonical = lang === "en" ? `${BASE_URL}/en/${path}` : `${BASE_URL}/${path}`;

  return {
    canonical,
    languages: {
      "fr-FR": `${BASE_URL}/${path}`,
      "en-US": `${BASE_URL}/en/${path}`,
      "x-default": `${BASE_URL}/${path}`,
    },
  };
}

export interface PageSeoConfig {
  title: string;
  description: string;
}

export const SEO_DATA: Record<Lang, Record<RouteSlug | "merci", PageSeoConfig>> = {
  fr: {
    "": {
      title: "One Chauffeur – Votre chauffeur privé à Paris et Île-de-France",
      description:
        "One Chauffeur propose un service de chauffeur privé VTC haut de gamme à Paris et en Île-de-France : transferts aéroports (CDG, Orly), gares parisiennes, trajets professionnels et mise à disposition 24/7.",
    },
    services: {
      title: "Services – One Chauffeur",
      description:
        "Découvrez nos prestations de chauffeur privé VTC à Paris : transferts aéroports CDG et Orly, gares parisiennes, déplacements professionnels et mise à disposition avec chauffeur.",
    },
    flotte: {
      title: "Flotte – One Chauffeur",
      description:
        "Explorez la flotte de véhicules haut de gamme One Chauffeur : berlines et vans de luxe Mercedes Classe E, Classe S, Classe V et Tesla avec chauffeur privé à Paris.",
    },
    reservation: {
      title: "Réservation – One Chauffeur",
      description:
        "Réservez votre chauffeur privé en ligne à Paris et en Île-de-France avec One Chauffeur. Tarification transparente, confirmation immédiate et service de prestige.",
    },
    contact: {
      title: "Contact – One Chauffeur",
      description:
        "Contactez l'équipe One Chauffeur pour vos réservations de VTC, devis sur mesure ou demandes urgentes à Paris au +33 6 67 52 06 77 ou via notre formulaire.",
    },
    cgv: {
      title: "Conditions Générales de Vente – One Chauffeur",
      description:
        "Consultez les conditions générales de vente et d'utilisation des services de transport avec chauffeur privé de prestige proposés par One Chauffeur à Paris.",
    },
    "mentions-legales": {
      title: "Mentions Légales – One Chauffeur",
      description:
        "Consultez les mentions légales de One Chauffeur : informations sur l'éditeur SASU, le siège social, le directeur de publication et l'hébergement web.",
    },
    "politique-de-confidentialite": {
      title: "Politique de confidentialité – One Chauffeur",
      description:
        "Politique de confidentialité et protection des données personnelles de la société One Chauffeur conformément au RGPD pour tous ses clients et utilisateurs.",
    },
    merci: {
      title: "Merci pour votre demande – One Chauffeur",
      description:
        "Confirmation de votre demande de réservation ou de contact auprès de votre service de chauffeur privé One Chauffeur.",
    },
  },
  en: {
    "": {
      title: "One Chauffeur – Private Chauffeur Service in Paris",
      description:
        "One Chauffeur offers luxury private chauffeur services in Paris and Île-de-France: airport transfers (CDG, Orly), train stations, corporate travel and 24/7 hourly service.",
    },
    services: {
      title: "Chauffeur Services – One Chauffeur",
      description:
        "Discover our premium private driver services in Paris: airport transfers (CDG, Orly), Parisian train stations, corporate transport and VIP hourly disposal.",
    },
    flotte: {
      title: "Fleet – One Chauffeur",
      description:
        "Explore our prestigious luxury vehicle fleet in Paris: premium Mercedes E-Class, S-Class, V-Class vans and Tesla with professional chauffeur.",
    },
    reservation: {
      title: "Booking – One Chauffeur",
      description:
        "Book your luxury private chauffeur in Paris online with One Chauffeur. Transparent pricing, instant confirmation and executive travel.",
    },
    contact: {
      title: "Contact Us – One Chauffeur",
      description:
        "Contact One Chauffeur in Paris 24/7. Call us at +33 6 67 52 06 77 or send an inquiry for bookings, bespoke corporate travel, and airport transfers.",
    },
    cgv: {
      title: "Terms and Conditions of Sale – One Chauffeur",
      description:
        "General terms and conditions of sale for premium chauffeur transport services provided by One Chauffeur in Paris and the Île-de-France region.",
    },
    "mentions-legales": {
      title: "Legal Notices – One Chauffeur",
      description:
        "Legal notices and corporate details of One Chauffeur SASU: company registration, registered headquarters, publication manager, and hosting information.",
    },
    "politique-de-confidentialite": {
      title: "Privacy Policy – One Chauffeur",
      description:
        "Privacy policy and personal data protection principles applied by One Chauffeur for its private driver clients in Paris in accordance with GDPR.",
    },
    merci: {
      title: "Thank You for Your Request – One Chauffeur",
      description:
        "Confirmation of your booking or inquiry submission with One Chauffeur private driver service in Paris.",
    },
  },
};

export function createPageMetadata(
  slug: RouteSlug | "merci",
  lang: Lang,
  options?: { noindex?: boolean }
): Metadata {
  const data = SEO_DATA[lang][slug];
  const alternates = slug === "merci" ? undefined : buildAlternates(slug, lang);

  return {
    title: data.title,
    description: data.description,
    alternates,
    openGraph: {
      title: data.title,
      description: data.description,
      url: alternates?.canonical || `${BASE_URL}${lang === "en" ? "/en" : ""}/${slug ? `${slug}/` : ""}`,
      siteName: "One Chauffeur",
      locale: lang === "en" ? "en_US" : "fr_FR",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/favicon-one-chauffeur.png`,
          width: 192,
          height: 192,
          alt: "One Chauffeur",
        },
      ],
    },
    robots: options?.noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
