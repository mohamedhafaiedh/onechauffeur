import type { ReactNode } from "react";
import { Building2, Cookie, Copyright, Languages, Server, ShieldCheck, type LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/sections/PageHero";
import type { LegalBlock, LegalContent, LegalIcon } from "@/content/legal/types";
import { getMessages } from "@/lib/i18n";
import { LOCALES, type Lang, type PageKey } from "@/lib/seo";
import styles from "./LegalPage.module.css";

const ICONS: Record<LegalIcon, LucideIcon> = {
  building: Building2,
  server: Server,
  copyright: Copyright,
  shieldCheck: ShieldCheck,
  cookie: Cookie,
};

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "facts": {
      // On ne publie que les informations renseignées
      const rows = block.rows.filter(([, value]) => value.trim() !== "");
      if (!rows.length) return null;
      return (
        <dl className={styles.facts}>
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              {/* bdi : numéros, montants et adresses restent dans le bon ordre en arabe */}
              <dd>
                <bdi dir="ltr">{value}</bdi>
              </dd>
            </div>
          ))}
        </dl>
      );
    }
  }
}

// Texte juridique : langue et sens de lecture de sa propre langue (anglais de gauche à droite dans une page en arabe)
function textAttrs(textLang: Lang) {
  return { lang: LOCALES[textLang].code, dir: LOCALES[textLang].dir };
}

// Avertissement dans la langue du visiteur quand le texte juridique n'est pas traduit
function EnglishOnly({ lang, text }: { lang: Lang; text: string }) {
  return (
    <p className={styles.notice__lang} lang={LOCALES[lang].code} dir={LOCALES[lang].dir}>
      <Languages size={18} strokeWidth={1.5} aria-hidden="true" />
      {text}
    </p>
  );
}

/* Mentions légales, modèle commun à tous les sites : introduction LCEN, puis une rubrique par thème,
   chacune précédée de sa pastille d'icône, le texte aligné sous le titre. Aucun lien dans le contenu. */
export function LegalNoticePage({ lang, textLang, content: t }: { lang: Lang; textLang: Lang; content: LegalContent }) {
  const { footer, legal } = getMessages(lang);
  return (
    <>
      <Header lang={lang} page="mentions-legales" />
      <main id="content">
        <PageHero lang={lang} title={footer.legalNotice} />
        <article className={`container ${styles.notice}`} {...textAttrs(textLang)}>
          {textLang !== lang && <EnglishOnly lang={lang} text={legal.englishOnly} />}
          <p className={styles.intro}>{t.intro}</p>
          {t.sections.map((section) => {
            const Icon = ICONS[section.icon];
            return (
              <section key={section.id} id={section.id} className={styles.section}>
                <div className={styles.head}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h2>{section.title}</h2>
                </div>
                <div className={styles.body}>
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </section>
            );
          })}
        </article>
      </main>
      <Footer lang={lang} page="mentions-legales" />
    </>
  );
}

// Conditions générales de vente : texte long en colonne de lecture ; le texte vient de content/legal/<langue>/cgv.tsx.
export function TermsPage({ lang, textLang, title, children }: { lang: Lang; textLang: Lang; title: string; children: ReactNode }) {
  const page: PageKey = "cgv";
  const { legal } = getMessages(lang);
  return (
    <>
      <Header lang={lang} page={page} />
      <main id="content">
        <PageHero lang={lang} title={title} />
        <div className="container">
          <article className={styles.prose} {...textAttrs(textLang)}>
            {textLang !== lang && <EnglishOnly lang={lang} text={legal.englishOnly} />}
            {children}
          </article>
        </div>
      </main>
      <Footer lang={lang} page={page} />
    </>
  );
}
