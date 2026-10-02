import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/pages/HomePage";
import ServicesPage from "@/components/pages/ServicesPage";
import FleetPage from "@/components/pages/FleetPage";
import BookingPage from "@/components/pages/BookingPage";
import ContactPage from "@/components/pages/ContactPage";
import ThankYouPage from "@/components/pages/ThankYouPage";
import { LegalNoticePage, TermsPage } from "@/components/pages/LegalPage";
import { LEGAL_NOTICE, TERMS_CONTENT } from "@/content/legal";
import { getMessages } from "@/lib/i18n";
import { PAGE_KEYS, createPageMetadata, isLang, legalTextLang, pageFromSlug, slugOf, type Lang, type PageKey } from "@/lib/seo";

// Route unique de toutes les pages, dans toutes les langues. Le français est servi à la racine
// grâce à une réécriture interne (next.config.ts) : /flotte/ → /fr/flotte/, invisible pour le visiteur.
// Toutes les pages sont générées au build ; une URL inconnue passe par resolve() → notFound(),
// qui affiche la 404 traduite (app/[lang]/not-found.tsx).
export const dynamicParams = true;

type Params = Promise<{ lang: string; slug?: string[] }>;

export function generateStaticParams({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  return PAGE_KEYS.map((page) => {
    const slug = slugOf(page, lang);
    return { slug: slug ? [slug] : [] };
  });
}

async function resolve(params: Params): Promise<{ lang: Lang; page: PageKey }> {
  const { lang, slug = [] } = await params;
  const page = isLang(lang) && slug.length <= 1 ? pageFromSlug(lang, slug[0] ?? "") : undefined;
  if (!isLang(lang) || page === undefined) notFound();
  return { lang, page };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, page } = await resolve(params);
  return createPageMetadata(page, lang, { noindex: page === "merci" });
}

export default async function Page({ params }: { params: Params }) {
  const { lang, page } = await resolve(params);

  switch (page) {
    case "":
      return <HomePage lang={lang} />;
    case "services":
      return <ServicesPage lang={lang} />;
    case "flotte":
      return <FleetPage lang={lang} />;
    case "reservation":
      return <BookingPage lang={lang} />;
    case "contact":
      return <ContactPage lang={lang} />;
    case "merci":
      return <ThankYouPage lang={lang} />;
    // Textes juridiques : rédigés en français et en anglais ; dans les autres langues,
    // la page reste dans la langue du visiteur et seul le texte juridique est en anglais
    case "mentions-legales": {
      const content = LEGAL_NOTICE[legalTextLang(lang)];
      if (!content) notFound();
      return <LegalNoticePage lang={lang} textLang={legalTextLang(lang)} content={content} />;
    }
    case "cgv": {
      const Content = TERMS_CONTENT[legalTextLang(lang)];
      if (!Content) notFound();
      return (
        <TermsPage lang={lang} textLang={legalTextLang(lang)} title={getMessages(lang).footer.termsOfSale}>
          <Content />
        </TermsPage>
      );
    }
  }
}
