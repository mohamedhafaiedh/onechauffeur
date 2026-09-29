import type { MetadataRoute } from "next";
import { SITE_URL, pagePath } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [pagePath("merci", "fr"), pagePath("merci", "en")],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
