import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/sections/PageHero";
import { AboutBlock, ServicesBlock, StepsBlock, VehiclesBlock } from "@/components/sections/SharedBlocks";
import { getMessages } from "@/lib/i18n";
import type { Lang } from "@/lib/seo";

export default function ServicesPage({ lang }: { lang: Lang }) {
  const { services: t } = getMessages(lang);

  return (
    <>
      <Header lang={lang} page="services" />
      <main id="content">
        <PageHero title={t.ourPrivateDriverServices} />
        <ServicesBlock lang={lang} />
        <VehiclesBlock lang={lang} />
        <StepsBlock lang={lang} />
        <AboutBlock lang={lang} />
      </main>
      <Footer lang={lang} page="services" />
    </>
  );
}
