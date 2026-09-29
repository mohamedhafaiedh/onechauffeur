import React from "react";
import { getMessages } from "@/lib/i18n";
import { SITE_URL, pagePath, type Lang } from "@/lib/seo";

interface JsonLdProps {
  lang?: Lang;
}

export default function JsonLd({ lang = "fr" }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LimousineService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "One Chauffeur",
    legalName: "One Chauffeur SASU",
    alternateName: "One Chauffeur Paris",
    url: `${SITE_URL}${pagePath("", lang)}`,
    logo: `${SITE_URL}/images/favicon-one-chauffeur.png`,
    image: `${SITE_URL}/images/favicon-one-chauffeur.png`,
    description: getMessages(lang).jsonLd.description,
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
