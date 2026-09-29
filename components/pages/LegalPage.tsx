import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Lang, PageKey } from "@/lib/seo";

// Gabarit commun des pages juridiques ; le texte lui-même vient de content/legal/<langue>/.
export default function LegalPage({ lang, page, children }: { lang: Lang; page: PageKey; children: ReactNode }) {
  return (
    <div>
      <Header lang={lang} page={page} />
      {children}
      <Footer lang={lang} page={page} />
    </div>
  );
}
