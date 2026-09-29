import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES, buildAlternates, pagePath, type Lang } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const makeEntries = (lang: Lang, priorityFactor: number): MetadataRoute.Sitemap => {
    return SITE_ROUTES.map((route) => {
      const isHome = route === "";
      const isLegal = ["mentions-legales", "politique-de-confidentialite", "cgv"].includes(route);

      return {
        url: `${SITE_URL}${pagePath(route, lang)}`,
        lastModified: now,
        changeFrequency: isHome ? "daily" : isLegal ? "monthly" : "weekly",
        priority: isHome
          ? Number((1.0 * priorityFactor).toFixed(1))
          : isLegal
          ? Number((0.5 * priorityFactor).toFixed(1))
          : Number((0.8 * priorityFactor).toFixed(1)),
        alternates: { languages: buildAlternates(route, lang).languages },
      };
    });
  };

  const frEntries = makeEntries("fr", 1.0);
  const enEntries = makeEntries("en", 0.9);

  return [...frEntries, ...enEntries];
}
