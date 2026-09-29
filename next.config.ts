import type { NextConfig } from "next";
import { LEGACY_EN_REDIRECTS } from "./lib/seo";

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
    ];
  },
};

export default nextConfig;
