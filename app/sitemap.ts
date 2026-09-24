import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const makeEntries = (localePrefix: string, priorityFactor: number): MetadataRoute.Sitemap => {
    return SITE_ROUTES.map((route) => {
      const path = route ? `${route}/` : "";
      const isHome = route === "";
      const isLegal = ["mentions-legales", "politique-de-confidentialite", "cgv"].includes(route);
      const url = localePrefix ? `${SITE_URL}/${localePrefix}/${path}` : `${SITE_URL}/${path}`;

      return {
        url,
        lastModified: now,
        changeFrequency: isHome ? "daily" : isLegal ? "monthly" : "weekly",
        priority: isHome
          ? Number((1.0 * priorityFactor).toFixed(1))
          : isLegal
          ? Number((0.5 * priorityFactor).toFixed(1))
          : Number((0.8 * priorityFactor).toFixed(1)),
      };
    });
  };

  const frEntries = makeEntries("", 1.0);
  const enEntries = makeEntries("en", 0.9);

  return [...frEntries, ...enEntries];
}
