import Link from "next/link";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang } from "@/lib/seo";
import styles from "./PageHero.module.css";

// Pages intérieures : bandeau noir, fil d'Ariane, titre centré souligné d'un trait doré.
// Les anneaux dorés en fond reprennent le « O » du logo.
export default function PageHero({
  lang,
  title,
  crumb,
  subtitle,
}: {
  lang: Lang;
  title: string;
  /** libellé court de la page dans le fil d'Ariane (par défaut : le titre) */
  crumb?: string;
  subtitle?: string;
}) {
  const { nav, header } = getMessages(lang);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <nav aria-label={header.breadcrumb}>
          <ol className={styles.crumbs}>
            <li>
              <Link href={pagePath("", lang)}>{nav.home}</Link>
            </li>
            <li aria-current="page">{crumb ?? title}</li>
          </ol>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
