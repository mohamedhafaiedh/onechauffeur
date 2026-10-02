import type { Metadata } from "next";
import { getMessages, type Messages } from "./i18n";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://onechauffeur.fr";

// Langues du site. Ajouter une langue : une entrée ici, ses slugs dans SLUGS,
// messages/<code>.json (+ lib/i18n.ts). La clé (fr, en, zh…) sert de préfixe d'URL ;
// `code` sert à l'attribut lang et aux hreflang ; `ogLocale` au format Open Graph (langue_TERRITOIRE).
export const LOCALES = {
  fr: { code: "fr", ogLocale: "fr_FR", dir: "ltr", name: "Français" },
  en: { code: "en", ogLocale: "en_US", dir: "ltr", name: "English" },
  es: { code: "es", ogLocale: "es_ES", dir: "ltr", name: "Español" },
  it: { code: "it", ogLocale: "it_IT", dir: "ltr", name: "Italiano" },
  ar: { code: "ar", ogLocale: "ar_AR", dir: "rtl", name: "العربية" },
  zh: { code: "zh-Hant", ogLocale: "zh_TW", dir: "ltr", name: "繁體中文" },
} as const;

export type Lang = keyof typeof LOCALES;

// Langue par défaut : servie à la racine (/flotte/), les autres sous leur préfixe (/en/fleet/)
export const DEFAULT_LANG: Lang = "fr";
export const LANGS = Object.keys(LOCALES) as Lang[];

export function isLang(value: string): value is Lang {
  return value in LOCALES;
}

export const SITE_ROUTES = [
  "",
  "services",
  "flotte",
  "reservation",
  "contact",
  "cgv",
  "mentions-legales",
] as const;

export type RouteSlug = (typeof SITE_ROUTES)[number];
export type PageKey = RouteSlug | "merci";
export const PAGE_KEYS: PageKey[] = [...SITE_ROUTES, "merci"];

const EN_SLUGS: Record<PageKey, string> = {
  "": "",
  services: "services",
  flotte: "fleet",
  reservation: "booking",
  contact: "contact",
  cgv: "terms-of-sale",
  "mentions-legales": "legal-notice",
  merci: "thank-you",
};

// Slug de chaque page dans chaque langue (les pages sont identifiées par leur slug français)
const SLUGS: Record<Lang, Record<PageKey, string>> = {
  fr: {
    "": "",
    services: "services",
    flotte: "flotte",
    reservation: "reservation",
    contact: "contact",
    cgv: "cgv",
    "mentions-legales": "mentions-legales",
    merci: "merci",
  },
  en: EN_SLUGS,
  es: {
    "": "",
    services: "servicios",
    flotte: "flota",
    reservation: "reserva",
    contact: "contacto",
    cgv: "condiciones-de-venta",
    "mentions-legales": "aviso-legal",
    merci: "gracias",
  },
  it: {
    "": "",
    services: "servizi",
    flotte: "flotta",
    reservation: "prenotazione",
    contact: "contatti",
    cgv: "condizioni-di-vendita",
    "mentions-legales": "note-legali",
    merci: "grazie",
  },
  // arabe et chinois : URL en lettres latines (mêmes slugs que l'anglais)
  ar: EN_SLUGS,
  zh: EN_SLUGS,
};

// Textes juridiques : publiés en français et en anglais seulement ;
// les autres langues renvoient vers la version anglaise.
const LEGAL_PAGES: PageKey[] = ["cgv", "mentions-legales"];
const LEGAL_LANGS: Lang[] = ["fr", "en"];
const LEGAL_FALLBACK: Lang = "en";

/** La page existe-t-elle dans cette langue ? */
export function hasPage(page: PageKey, lang: Lang): boolean {
  return !LEGAL_PAGES.includes(page) || LEGAL_LANGS.includes(lang);
}

function langPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? "" : `/${lang}`;
}

/** Chemin relatif d'une page dans une langue : pagePath("flotte", "en") → "/en/fleet/".
 *  Page absente dans cette langue (textes juridiques) → version anglaise. */
export function pagePath(page: PageKey, lang: Lang): string {
  if (!hasPage(page, lang)) lang = LEGAL_FALLBACK;
  const slug = SLUGS[lang][page];
  return `${langPrefix(lang)}/${slug ? `${slug}/` : ""}`;
}

/** Page correspondant à un slug dans une langue (undefined si inconnu) */
export function pageFromSlug(lang: Lang, slug: string): PageKey | undefined {
  return PAGE_KEYS.find((page) => hasPage(page, lang) && SLUGS[lang][page] === slug);
}

/** Slug d'une page dans une langue, pour la route app/[lang]/[[...slug]] */
export function slugOf(page: PageKey, lang: Lang): string {
  return SLUGS[lang][page];
}

/** Anciennes URL anglaises (slugs français) à rediriger vers les slugs traduits */
export const LEGACY_EN_REDIRECTS = PAGE_KEYS.filter((page) => page && SLUGS.en[page] !== page).map((page) => ({
  source: `/en/${page}`,
  destination: pagePath(page, "en"),
}));

/** Ancienne politique de confidentialité, fusionnée dans les mentions légales (rubrique #confidentialite) */
export const PRIVACY_REDIRECTS = [
  { source: "/politique-de-confidentialite", destination: `${pagePath("mentions-legales", "fr")}#confidentialite` },
  { source: "/en/privacy-policy", destination: `${pagePath("mentions-legales", "en")}#confidentialite` },
  { source: "/en/politique-de-confidentialite", destination: `${pagePath("mentions-legales", "en")}#confidentialite` },
];

export function buildAlternates(page: PageKey, lang: Lang) {
  return {
    canonical: `${SITE_URL}${pagePath(page, lang)}`,
    languages: {
      ...Object.fromEntries(
        LANGS.filter((l) => hasPage(page, l)).map((l) => [LOCALES[l].code, `${SITE_URL}${pagePath(page, l)}`])
      ),
      "x-default": `${SITE_URL}${pagePath(page, DEFAULT_LANG)}`,
    },
  };
}

// Icônes du site (app/favicon.ico est déclaré automatiquement par Next.js)
export const SITE_ICONS: Metadata["icons"] = {
  icon: [{ url: "/images/favicon-one-chauffeur.png", type: "image/png", sizes: "192x192" }],
  apple: [{ url: "/images/favicon-one-chauffeur.png", sizes: "192x192" }],
};

// Identifiant stable de chaque page dans les dictionnaires (messages/*.json → meta)
const META_KEYS = {
  "": "home",
  services: "services",
  flotte: "fleet",
  reservation: "booking",
  contact: "contact",
  cgv: "termsOfSale",
  "mentions-legales": "legalNotice",
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
      url: `${SITE_URL}${pagePath(slug, lang)}`,
      siteName: "One Chauffeur",
      locale: LOCALES[lang].ogLocale,
      alternateLocale: LANGS.filter((l) => l !== lang && hasPage(slug, l)).map((l) => LOCALES[l].ogLocale),
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/one-chauffeur-og.jpg`,
          width: 1200,
          height: 630,
          alt: "One Chauffeur",
        },
      ],
    },
    // Grande vignette sur X/Twitter (reprend automatiquement titre, description et image Open Graph)
    twitter: { card: "summary_large_image" },
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
