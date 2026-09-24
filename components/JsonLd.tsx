import React from "react";
import { SITE_URL, Lang } from "@/lib/seo";

interface JsonLdProps {
  lang?: Lang;
}

export default function JsonLd({ lang = "fr" }: JsonLdProps) {
  const isEn = lang === "en";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LimousineService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "One Chauffeur",
    legalName: "One Chauffeur SASU",
    alternateName: "One Chauffeur Paris",
    url: isEn ? `${SITE_URL}/en/` : `${SITE_URL}/`,
    logo: `${SITE_URL}/images/favicon-one-chauffeur.png`,
    image: `${SITE_URL}/images/favicon-one-chauffeur.png`,
    description: isEn
      ? "Luxury private chauffeur and VTC service in Paris and Île-de-France: airport transfers (CDG, Orly), train stations, corporate travel and 24/7 disposals."
      : "Service de chauffeur privé VTC de prestige à Paris et en Île-de-France : transferts aéroports CDG et Orly, gares, voyages d'affaires et mise à disposition 24/7.",
    telephone: "+33667520677",
    email: "contact@onechauffeur.fr",
    priceRange: "$$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "31 boulevard Troussel",
      addressLocality: "Conflans-Sainte-Honorine",
      postalCode: "78700",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9984,
      longitude: 2.0963,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Paris",
      },
      {
        "@type": "AdministrativeArea",
        name: "Île-de-France",
      },
      {
        "@type": "Airport",
        name: "Aéroport de Paris-Charles-de-Gaulle (CDG)",
      },
      {
        "@type": "Airport",
        name: "Aéroport de Paris-Orly (ORY)",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
