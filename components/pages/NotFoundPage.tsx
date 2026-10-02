"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, MapPinOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMessages } from "@/lib/i18n";
import { DEFAULT_LANG, LANGS, pagePath, type Lang } from "@/lib/seo";
import styles from "./StatusPage.module.css";

// Les pages 404 ne reçoivent pas les paramètres de route : la langue est déduite de l'URL visitée
// (/en/… → anglais ; sans préfixe → langue par défaut).
function langFromPath(pathname: string | null): Lang {
  const first = pathname?.split("/")[1] ?? "";
  return LANGS.find((l) => l !== DEFAULT_LANG && l === first) ?? DEFAULT_LANG;
}

export default function NotFoundPage() {
  const lang = langFromPath(usePathname());
  const { notFound: t, nav: h, common } = getMessages(lang);
  const links = [
    { href: pagePath("services", lang), label: h.services },
    { href: pagePath("flotte", lang), label: h.fleet },
    { href: pagePath("reservation", lang), label: h.booking },
    { href: pagePath("contact", lang), label: h.contact },
  ];

  return (
    <div>
      <title>{t.metaTitle}</title>
      <Header lang={lang} page="" highlight={false} />

      <main className={styles.main} id="content">
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">
            <MapPinOff size={36} strokeWidth={1.8} />
          </div>

          <p className={styles.code}>404</p>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.message}>{t.message}</p>

          <nav className={styles.urgent}>
            <div className={styles.links}>
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <Link href={pagePath("", lang)} className={styles.back}>
            <ArrowLeft size={18} aria-hidden="true" />
            {common.backHome}
          </Link>
        </div>
      </main>

      <Footer lang={lang} page="" />
    </div>
  );
}
