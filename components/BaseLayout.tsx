import React from "react";
import "@/app/globals.css";
import JsonLd from "@/components/JsonLd";
import { LOCALES, Lang } from "@/lib/seo";

export default function BaseLayout({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const localeInfo = LOCALES[lang];

  return (
    <html lang={localeInfo.code} dir={localeInfo.dir} suppressHydrationWarning>
      <head>
        <JsonLd lang={lang} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@300;400;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
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
