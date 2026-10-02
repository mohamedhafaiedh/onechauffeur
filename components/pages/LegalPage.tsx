import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Lang, PageKey } from "@/lib/seo";
import styles from "./LegalPage.module.css";

// Gabarit commun des pages juridiques ; le texte lui-même vient de content/legal/<langue>/.
export default function LegalPage({ lang, page, children }: { lang: Lang; page: PageKey; children: ReactNode }) {
  return (
    <>
      <Header lang={lang} page={page} />
      <main id="content" className={styles.page}>
        <div className="container">
          <article className={styles.prose}>{children}</article>
        </div>
      </main>
      <Footer lang={lang} page={page} />
    </>
  );
}
