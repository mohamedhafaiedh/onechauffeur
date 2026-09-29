import type { Metadata } from "next";
import { getMessages, type Messages } from "./i18n";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://onechauffeur.fr";

// Langues du site. Ajouter une langue : une entrée ici, ses slugs dans SLUGS,
// messages/<code>.json (+ lib/i18n.ts) et ses textes juridiques dans content/legal/<code>/.
// `code` sert à l'attribut lang et aux hreflang ; `ogLocale` au format Open Graph (langue_TERRITOIRE).
export const LOCALES = {
  fr: { code: "fr", ogLocale: "fr_FR", dir: "ltr", name: "Français" },
  en: { code: "en", ogLocale: "en_US", dir: "ltr", name: "English" },
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
  "politique-de-confidentialite",
] as const;

export type RouteSlug = (typeof SITE_ROUTES)[number];
export type PageKey = RouteSlug | "merci";
export const PAGE_KEYS: PageKey[] = [...SITE_ROUTES, "merci"];

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
    "politique-de-confidentialite": "politique-de-confidentialite",
    merci: "merci",
  },
  en: {
    "": "",
    services: "services",
    flotte: "fleet",
    reservation: "booking",
    contact: "contact",
    cgv: "terms-of-sale",
    "mentions-legales": "legal-notice",
    "politique-de-confidentialite": "privacy-policy",
    merci: "thank-you",
  },
};

export function langPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? "" : `/${lang}`;
}

/** Chemin relatif d'une page dans une langue : pagePath("flotte", "en") → "/en/fleet/" */
export function pagePath(page: PageKey, lang: Lang): string {
  const slug = SLUGS[lang][page];
  return `${langPrefix(lang)}/${slug ? `${slug}/` : ""}`;
}

/** Page correspondant à un slug dans une langue (undefined si inconnu) */
export function pageFromSlug(lang: Lang, slug: string): PageKey | undefined {
  return PAGE_KEYS.find((page) => SLUGS[lang][page] === slug);
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

export function buildAlternates(page: PageKey, lang: Lang) {
  return {
    canonical: `${SITE_URL}${pagePath(page, lang)}`,
    languages: {
      ...Object.fromEntries(LANGS.map((l) => [LOCALES[l].code, `${SITE_URL}${pagePath(page, l)}`])),
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
      url: `${SITE_URL}${pagePath(slug, lang)}`,
      siteName: "One Chauffeur",
      locale: LOCALES[lang].ogLocale,
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => LOCALES[l].ogLocale),
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/favicon-one-chauffeur.png`,
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
