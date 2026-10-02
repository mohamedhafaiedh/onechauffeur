import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaCalendarCheck, FaCar, FaStopwatch, FaUserTie } from "@/components/icons";
import HomeHero from "@/components/sections/HomeHero";
import Values from "@/components/sections/Values";
import Experience from "@/components/sections/Experience";
import { AboutBlock, ServicesBlock, StepsBlock, VehiclesBlock } from "@/components/sections/SharedBlocks";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang } from "@/lib/seo";

export default function HomePage({ lang }: { lang: Lang }) {
  const { home: t, shared: s } = getMessages(lang);

  return (
    <>
      <Header lang={lang} page="" />
      <main id="content">
        <HomeHero
          title={t.yourChauffeurDrivenCar}
          text={t.withOneChauffeurYou}
          cta={{ href: pagePath("reservation", lang), label: s.getQuoteBook }}
        />
        <Values
          title={t.ourValues}
          items={[
            { icon: FaUserTie, title: t.professionalismDiscretion, text: t.youAreDrivenBy },
            { icon: FaCar, title: t.comfortRespectForThe, text: t.ourVehiclesAreSelected },
            { icon: FaCalendarCheck, title: t.availabilityAndEfficiency, text: t.weAreAvailable24 },
            { icon: FaStopwatch, title: t.punctuality, text: t.punctualityIsANon },
          ]}
        />
        <ServicesBlock lang={lang} />
        <Experience
          title={t.anEnjoyableTransportExperience}
          text={t.atOneChauffeurWe}
          points={[t.freeCancellationUpTo, t.flexibleAndTailorMade, t.onlineOrOnBoard, t.pricesFixedInAdvance]}
          image="/images/tesla-model-3-profil.webp"
        />
        <VehiclesBlock lang={lang} />
        <StepsBlock lang={lang} />
        <AboutBlock lang={lang} />
      </main>
      <Footer lang={lang} page="" />
    </>
  );
}
