import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang, type PageKey } from "@/lib/seo";
import styles from "./Footer.module.css";

export default function Footer({ lang, page }: { lang: Lang; page: PageKey }) {
  const { footer: t, nav, common } = getMessages(lang);
  const quickLinks: [PageKey, string][] = [
    ["services", nav.services],
    ["flotte", nav.fleet],
    ["contact", nav.contact],
    ["reservation", nav.booking],
  ];
  const legalLinks: [PageKey, string][] = [
    ["cgv", t.termsOfSale],
    ["politique-de-confidentialite", t.privacyPolicy],
    ["mentions-legales", t.legalNotice],
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href={pagePath("", lang)}>
              <Image src="/images/logo-one-chauffeur.webp" alt="One Chauffeur" width={1000} height={140} sizes="280px" />
            </Link>
            <p>{t.tagline}</p>
          </div>

          <div>
            <h2>{t.quickLinks}</h2>
            <ul>
              {quickLinks.map(([p, label]) => (
                <li key={p}>
                  <Link href={pagePath(p, lang)}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>{t.legal}</h2>
            <ul>
              {legalLinks.map(([p, label]) => (
                <li key={p}>
                  <Link href={pagePath(p, lang)}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>{common.phone}</h2>
            <ul>
              <li>
                <a href="tel:+33667520677" dir="ltr">
                  +33 (0)6 67 52 06 77
                </a>
              </li>
            </ul>
            <h2 className={styles.second}>WhatsApp</h2>
            <ul>
              <li>
                <a href="https://wa.me/33667520677" target="_blank" rel="noopener noreferrer" dir="ltr">
                  +33 (0)6 67 52 06 77
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            {t.copyright}
            <br />
            31 boulevard Troussel – 78700 Conflans-Sainte-Honorine
          </p>
          <LanguageSwitcher lang={lang} page={page} placement="up" />
        </div>
      </div>
    </footer>
  );
}
