import { BriefcaseBusiness, Clock, MapPinned, PartyPopper, PlaneTakeoff, Route } from "lucide-react";
import ServicesGrid from "./ServicesGrid";
import VehiclesGrid from "./VehiclesGrid";
import Steps from "./Steps";
import About from "./About";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang } from "@/lib/seo";

// Sections présentes sur plusieurs pages, remplies depuis messages/*.json → shared

export function ServicesBlock({ lang }: { lang: Lang }) {
  const s = getMessages(lang).shared;
  return (
    <ServicesGrid
      title={s.ourServices}
      items={[
        { icon: PlaneTakeoff, title: s.transfers, text: s.airportTransfersTrainStation },
        { icon: Clock, title: s.carHourlyDisposal, text: s.aVehicleWithDriver },
        { icon: MapPinned, title: s.cityTours, text: s.packagesToHelpYou },
        { icon: BriefcaseBusiness, title: s.businessTrips, text: s.forYourTransportNeeds },
        { icon: Route, title: s.longDistances, text: s.forLongDistanceJourneys },
        { icon: PartyPopper, title: s.privateEvents, text: s.aServiceAdaptedTo },
      ]}
      cta={{ href: pagePath("reservation", lang), label: s.getQuoteBook }}
    />
  );
}

export function VehiclesBlock({ lang }: { lang: Lang }) {
  const s = getMessages(lang).shared;
  const fleet = pagePath("flotte", lang);
  return (
    <VehiclesGrid
      title={s.chooseTheCarYou}
      intro={s.aLargeFleetOf}
      details={s.details}
      vehicles={[
        { name: s.sedan, passengers: s.upTo3Passengers, bags: s.upTo3Bags, image: "/images/tesla-model-3.webp", href: `${fleet}#berline` },
        { name: s.businessSedan, passengers: s.upTo3Passengers, bags: s.upTo3Bags, image: "/images/mercedes-classe-e.webp", href: `${fleet}#business` },
        { name: s.luxurySedan, passengers: s.upTo3Passengers, bags: s.upTo3Bags, image: "/images/mercedes-classe-s.webp", href: `${fleet}#luxe` },
        { name: s.minivan, passengers: s.upTo7Passengers, bags: s.upTo7Bags, image: "/images/mercedes-classe-v.webp", href: `${fleet}#minivan` },
      ]}
    />
  );
}

export function StepsBlock({ lang }: { lang: Lang }) {
  const s = getMessages(lang).shared;
  return (
    <Steps
      title={s.simpleStepsToBook}
      intro={s.toBookYourCar}
      steps={[
        { icon: "/images/icone-contact.png", title: s.n1ContactUs, text: s.emailTelephoneContactForm },
        { icon: "/images/icone-livraison.png", title: s.n2ConfirmYourBooking, text: s.tellUsAboutYour },
        { icon: "/images/icone-reservation.png", title: s.n3YourDriverWill },
      ]}
      cta={{ href: pagePath("reservation", lang), label: s.getQuoteBook }}
    />
  );
}

export function AboutBlock({ lang }: { lang: Lang }) {
  const s = getMessages(lang).shared;
  return (
    <About
      title={s.aboutOneChauffeur}
      paragraphs={[s.byOfferingATailor, s.theVehiclesWeProvide]}
      image="/images/tesla-model-3-calandre.webp"
      cta={{ href: pagePath("reservation", lang), label: s.getQuoteBook }}
    />
  );
}
