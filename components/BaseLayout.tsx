import React from "react";
import "@/app/globals.css";
import JsonLd from "@/components/JsonLd";
import { poppins, syne, tajawal } from "@/lib/fonts";
import { LOCALES, type Lang } from "@/lib/seo";

export default function BaseLayout({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const localeInfo = LOCALES[lang];

  return (
    <html
      lang={localeInfo.code}
      dir={localeInfo.dir}
      className={`${poppins.variable} ${syne.variable} ${tajawal.variable}`}
      // scroll-behavior: smooth (globals.css) : Next.js le suspend pendant les changements de page,
      // sinon la nouvelle page s'ouvre défilée sous le header
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/* Données structurées : Next.js recommande de les placer dans le body */}
        <JsonLd lang={lang} />
        {children}
      </body>
    </html>
  );
}
