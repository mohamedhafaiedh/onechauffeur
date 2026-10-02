import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang, type PageKey } from "@/lib/seo";
import styles from "./Header.module.css";

interface HeaderProps {
  lang: Lang;
  page: PageKey;
  /** false sur les pages hors navigation (404) : aucun lien marqué comme actif */
  highlight?: boolean;
}

export default function Header({ lang, page, highlight = true }: HeaderProps) {
  const { header: t, nav: labels } = getMessages(lang);
  const nav: { page: PageKey; label: string }[] = [
    { page: "", label: labels.home },
    { page: "services", label: labels.services },
    { page: "flotte", label: labels.fleet },
    { page: "contact", label: labels.contact },
  ];
  const isActive = (p: PageKey) => highlight && p === page;

  return (
    <>
      <a className="skip-link" href="#content">
        {t.skipToContent}
      </a>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <nav className={styles.nav} aria-label={t.menu}>
            <ul>
              {nav.map((item) => (
                <li key={item.page}>
                  <Link
                    href={pagePath(item.page, lang)}
                    aria-current={isActive(item.page) ? "page" : undefined}
                    className={isActive(item.page) ? styles.active : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href={pagePath("", lang)} className={styles.brand} aria-label={labels.home}>
            <Image
              className={styles.logo}
              src="/images/logo-one-chauffeur.webp"
              alt="One Chauffeur"
              width={1000}
              height={140}
              sizes="(max-width: 767px) 156px, (max-width: 1024px) 240px, 280px"
              loading="eager"
            />
          </Link>

          <div className={styles.actions}>
            <LanguageSwitcher lang={lang} page={page} />
            <Link href={pagePath("reservation", lang)} className={styles.cta}>
              {t.bookMyDriver}
            </Link>
            <div className={styles.burger}>
              <MobileMenu
                items={[
                  ...nav.map((item) => ({ href: pagePath(item.page, lang), label: item.label, active: isActive(item.page) })),
                  { href: pagePath("reservation", lang), label: labels.booking, active: isActive("reservation") },
                ]}
                homeHref={pagePath("", lang)}
                cta={{ href: pagePath("reservation", lang), label: t.bookMyDriver }}
                phone={{ href: "tel:+33667520677", label: "+33 6 67 52 06 77" }}
                labels={{ open: t.openMenu, close: t.closeMenu, home: labels.home, menu: t.menu }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
