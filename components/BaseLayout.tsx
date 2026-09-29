import React from "react";
import "@/app/globals.css";
import JsonLd from "@/components/JsonLd";
import { poppins, syne } from "@/lib/fonts";
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
      className={`${poppins.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd lang={lang} />
      </head>
      <body
        suppressHydrationWarning
        className="home wp-singular page-template-default page page-id-98 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor wp-child-theme-hello-theme-child-master translatepress-fr_FR jkit-color-scheme hello-elementor-default elementor-default elementor-kit-9 elementor-page elementor-page-98"
      >
        {children}
      </body>
    </html>
  );
}
