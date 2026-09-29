import type { NextConfig } from "next";
import { DEFAULT_LANG, LANGS, LEGACY_EN_REDIRECTS } from "./lib/seo";

// Préfixes réservés aux autres langues (ex. « en ») : tout le reste est servi en langue par défaut
const OTHER_LANGS = LANGS.filter((lang) => lang !== DEFAULT_LANG).join("|");

const nextConfig: NextConfig = {
  trailingSlash: true,
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
