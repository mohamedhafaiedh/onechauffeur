import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BaseLayout from "@/components/BaseLayout";
import { LANGS, SITE_ICONS, isLang } from "@/lib/seo";

// Une version par langue générée au build ; une langue inconnue renvoie la 404 (notFound ci-dessous)
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  icons: SITE_ICONS,
  // Safari iOS ne transforme pas les numéros et e-mails en liens (mentions légales : texte simple) ;
  // les vrais boutons d'appel du site restent des liens tel:
  formatDetection: { telephone: false, email: false, address: false },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <BaseLayout lang={lang}>{children}</BaseLayout>;
}
