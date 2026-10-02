import HeaderBar from "@/components/HeaderBar";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang, type PageKey } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

interface HeaderProps {
  lang: Lang;
  page: PageKey;
  /** false sur les pages hors navigation (404) : aucun lien marqué comme actif */
  highlight?: boolean;
}

// Prépare les textes côté serveur ; la mise en page adaptative et le menu sont dans HeaderBar (client).
export default function Header({ lang, page, highlight = true }: HeaderProps) {
  const { header: t, nav: labels } = getMessages(lang);
  const isActive = (p: PageKey) => highlight && p === page;
  const nav = (["", "services", "flotte", "contact"] as const).map((p) => ({
    href: pagePath(p, lang),
    label: { "": labels.home, services: labels.services, flotte: labels.fleet, contact: labels.contact }[p],
    active: isActive(p),
  }));

  return (
    <>
      <a className="skip-link" href="#content">
        {t.skipToContent}
      </a>
      <HeaderBar
        lang={lang}
        page={page}
        nav={nav}
        homeHref={pagePath("", lang)}
        cta={{ href: pagePath("reservation", lang), label: t.bookMyDriver }}
        phone={{ href: PHONE_HREF, label: PHONE_DISPLAY }}
        labels={{ open: t.openMenu, close: t.closeMenu, home: labels.home, menu: t.menu }}
      />
    </>
  );
}
