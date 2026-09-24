import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Chauffeur – Votre chauffeur privé à Paris et Île-de-France",
  description: "One Chauffeur propose un service de chauffeur privé VTC haut de gamme à Paris et en Île-de-France : transferts aéroports (CDG, Orly), gares parisiennes, trajets professionnels et mise à disposition.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/cropped-favicon-one-chauffeur-32x32.png", sizes: "32x32" },
      { url: "/images/cropped-favicon-one-chauffeur-192x192.png", sizes: "192x192" },
    ],
    apple: [
      { url: "/images/cropped-favicon-one-chauffeur-180x180.png" }
    ],
  },
  openGraph: {
    title: "One Chauffeur – Votre chauffeur privé à Paris et Île-de-France",
    description: "Service de transport avec chauffeur privé de luxe à Paris et Île-de-France. Flotte prestigieuse Mercedes Classe E, Classe S, Classe V et Tesla.",
    url: "https://onechauffeur.fr",
    siteName: "One Chauffeur",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" suppressHydrationWarning>
      <head>
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
