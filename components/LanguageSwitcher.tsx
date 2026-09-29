import Link from "next/link";
import { LOCALES, otherLang, pagePath, type Lang, type PageKey } from "@/lib/seo";

// Sélecteur de langue : codes de langue (pas de drapeaux, qui désignent des pays),
// et le lien pointe toujours vers la page équivalente dans l'autre langue.
export default function LanguageSwitcher({ lang, page }: { lang: Lang; page: PageKey }) {
  const target = otherLang(lang);

  return (
    <>
      <div className="trp-ls-shortcode-current-language">
        <a
          className="trp-ls-shortcode-disabled-language trp-ls-disabled-language"
          href="#"
          title={LOCALES[lang].name}
          lang={LOCALES[lang].code}
          aria-current="true"
        >
          {lang.toUpperCase()}
        </a>
      </div>
      <div className="trp-ls-shortcode-language">
        <Link
          href={pagePath(page, target)}
          title={LOCALES[target].name}
          lang={LOCALES[target].code}
          hrefLang={LOCALES[target].code}
        >
          {target.toUpperCase()}
        </Link>
      </div>
    </>
  );
}
