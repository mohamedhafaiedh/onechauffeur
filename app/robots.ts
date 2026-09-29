import type { MetadataRoute } from "next";
import { LANGS, SITE_URL, pagePath } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: LANGS.map((lang) => pagePath("merci", lang)),
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
