import type { MetadataRoute } from "next";
import { DEFAULT_LANG, LANGS, SITE_URL, SITE_ROUTES, buildAlternates, hasPage, pagePath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return LANGS.flatMap((lang) => {
    const priorityFactor = lang === DEFAULT_LANG ? 1.0 : 0.9;

    return SITE_ROUTES.filter((route) => hasPage(route, lang)).map((route) => {
      const isHome = route === "";
      const isLegal = ["mentions-legales", "politique-de-confidentialite", "cgv"].includes(route);

      return {
        url: `${SITE_URL}${pagePath(route, lang)}`,
        lastModified: now,
        changeFrequency: isHome ? "daily" : isLegal ? "monthly" : "weekly",
        priority: Number(((isHome ? 1.0 : isLegal ? 0.5 : 0.8) * priorityFactor).toFixed(1)),
        alternates: { languages: buildAlternates(route, lang).languages },
      };
    });
  });
}
