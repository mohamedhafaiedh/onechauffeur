import { Baby, GlassWater, Luggage, Users, Wifi } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/sections/PageHero";
import FleetRow from "@/components/sections/FleetRow";
import { AboutBlock, StepsBlock } from "@/components/sections/SharedBlocks";
import { getMessages } from "@/lib/i18n";
import type { Lang } from "@/lib/seo";

export default function FleetPage({ lang }: { lang: Lang }) {
  const { fleet: t, shared: s } = getMessages(lang);
  const features = (passengers: string, bags: string) => [
    { icon: Users, label: passengers },
    { icon: Wifi, label: t.wiFi },
    { icon: Luggage, label: bags },
    { icon: GlassWater, label: t.refreshments },
    { icon: Baby, label: t.childSeats },
  ];
  const rows = [
    { id: "berline", name: s.sedan, tagline: t.aStylishSedanCombining, image: "/images/tesla-model-3.webp", features: features(s.upTo3Passengers, s.upTo3Bags) },
    { id: "business", name: s.businessSedan, tagline: t.moreComfortMoreElegance, image: "/images/mercedes-classe-e.webp", features: features(s.upTo3Passengers, s.upTo3Bags) },
    { id: "luxe", name: s.luxurySedan, tagline: t.toGetIntoThe, image: "/images/mercedes-classe-s.webp", features: features(s.upTo3Passengers, s.upTo3Bags) },
    { id: "minivan", name: s.minivan, tagline: t.theFamousMercedesV, image: "/images/mercedes-classe-v.webp", features: features(s.upTo7Passengers, s.upTo7Bags) },
  ];

  return (
    <>
      <Header lang={lang} page="flotte" />
      <main id="content">
        <PageHero title={t.ourFleet} />
        {rows.map((row, i) => (
          <FleetRow key={row.id} {...row} reverse={i % 2 === 1} preload={i === 0} />
        ))}
        <StepsBlock lang={lang} />
        <AboutBlock lang={lang} />
      </main>
      <Footer lang={lang} page="flotte" />
    </>
  );
}
