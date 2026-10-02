import type { NextConfig } from "next";
import { DEFAULT_LANG, LANGS, LEGACY_EN_REDIRECTS } from "./lib/seo";

// Préfixes réservés aux autres langues (ex. « en ») : tout le reste est servi en langue par défaut
const OTHER_LANGS = LANGS.filter((lang) => lang !== DEFAULT_LANG).join("|");

// En-têtes de sécurité appliqués à toutes les réponses.
// CSP : tout vient du site lui-même ; 'unsafe-inline' reste nécessaire pour les scripts
// d'hydratation injectés par Next.js et les styles des polices (next/font).
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  // Qualités autorisées pour next/image : 75 par défaut, 60 pour la photo assombrie de l'accueil
  images: { qualities: [60, 75] },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return [
      {
        source: "/a-propos",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/author/oncmoudir",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/boutique",
        destination: "/flotte/",
        permanent: true,
      },
      {
        source: "/category/uncategorized",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/commander",
        destination: "/reservation/",
        permanent: true,
      },
      {
        source: "/devis",
        destination: "/reservation/",
        permanent: true,
      },
      {
        source: "/hello-world",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/mon-compte",
        destination: "/reservation/",
        permanent: true,
      },
      {
        source: "/paiement-recu",
        destination: "/merci/",
        permanent: true,
      },
      {
        source: "/panier",
        destination: "/reservation/",
        permanent: true,
      },
      {
        source: "/reservation-recue",
        destination: "/merci/",
        permanent: true,
      },
      ...LEGACY_EN_REDIRECTS.map((r) => ({ ...r, permanent: true })),
      // la langue par défaut n'a pas de préfixe public : /fr/flotte/ → /flotte/
      { source: `/${DEFAULT_LANG}`, destination: "/", permanent: true },
      { source: `/${DEFAULT_LANG}/:path+`, destination: "/:path+/", permanent: true },
    ];
  },
  async rewrites() {
    return {
      // La langue par défaut est servie à la racine : /flotte/ affiche app/[lang]/…/ avec lang = fr.
      // Exclus : préfixes des autres langues, fichiers (extension), ressources Next.js et Netlify.
      beforeFiles: [
        { source: "/", destination: `/${DEFAULT_LANG}/` },
        {
          source: `/:path((?!(?:${OTHER_LANGS}|${DEFAULT_LANG})(?:/|$))(?!_next/|\.netlify/)(?!.*\.[a-zA-Z0-9]+$).+)`,
          destination: `/${DEFAULT_LANG}/:path`,
        },
      ],
    };
  },
};

export default nextConfig;
