import type { Metadata } from "next";
import { getMessages, type Messages } from "./i18n";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://onechauffeur.fr";
export const SITE_URL = BASE_URL;

// `code` sert à l'attribut lang et aux hreflang ; `ogLocale` au format Open Graph (langue_TERRITOIRE)
export const LOCALES = {
  fr: { code: "fr", ogLocale: "fr_FR", prefix: "", dir: "ltr", name: "Français" },
  en: { code: "en", ogLocale: "en_US", prefix: "/en", dir: "ltr", name: "English" },
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
export type PageKey = RouteSlug | "merci";

// Les pages sont identifiées par leur slug français ; seule la version anglaise a des slugs traduits
const EN_SLUGS: Record<PageKey, string> = {
  "": "",
  services: "services",
  flotte: "fleet",
  reservation: "booking",
  contact: "contact",
  cgv: "terms-of-sale",
  "mentions-legales": "legal-notice",
  "politique-de-confidentialite": "privacy-policy",
  merci: "thank-you",
};

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "fr" : "en";
}

/** Chemin relatif d'une page dans une langue : pagePath("flotte", "en") → "/en/fleet/" */
export function pagePath(page: PageKey, lang: Lang): string {
  const slug = lang === "en" ? EN_SLUGS[page] : page;
  return `${LOCALES[lang].prefix}/${slug ? `${slug}/` : ""}`;
}

/** Anciennes URL anglaises (slugs français) à rediriger vers les slugs traduits */
export const LEGACY_EN_REDIRECTS = (Object.keys(EN_SLUGS) as PageKey[])
  .filter((page) => page && EN_SLUGS[page] !== page)
  .map((page) => ({ source: `/en/${page}`, destination: pagePath(page, "en") }));

export function buildAlternates(page: PageKey, lang: Lang) {
  return {
    canonical: `${BASE_URL}${pagePath(page, lang)}`,
    languages: {
      [LOCALES.fr.code]: `${BASE_URL}${pagePath(page, "fr")}`,
      [LOCALES.en.code]: `${BASE_URL}${pagePath(page, "en")}`,
      "x-default": `${BASE_URL}${pagePath(page, "fr")}`,
    },
  };
}

// Identifiant stable de chaque page dans les dictionnaires (messages/*.json → meta)
const META_KEYS = {
  "": "home",
  services: "services",
  flotte: "fleet",
  reservation: "booking",
  contact: "contact",
  cgv: "termsOfSale",
  "mentions-legales": "legalNotice",
  "politique-de-confidentialite": "privacyPolicy",
  merci: "thankYou",
} as const satisfies Record<PageKey, keyof Messages["meta"]>;

export function createPageMetadata(
  slug: PageKey,
  lang: Lang,
  options?: { noindex?: boolean }
): Metadata {
  const data = getMessages(lang).meta[META_KEYS[slug]];
  const alternates = slug === "merci" ? undefined : buildAlternates(slug, lang);

  return {
    title: data.title,
    description: data.description,
    alternates,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${BASE_URL}${pagePath(slug, lang)}`,
      siteName: "One Chauffeur",
      locale: LOCALES[lang].ogLocale,
      alternateLocale: LOCALES[otherLang(lang)].ogLocale,
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
