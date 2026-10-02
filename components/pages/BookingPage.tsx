import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";
import PageHero from "@/components/sections/PageHero";
import { getMessages } from "@/lib/i18n";
import type { Lang } from "@/lib/seo";
import styles from "./BookingPage.module.css";

export default function BookingPage({ lang }: { lang: Lang }) {
  const { booking: t, nav } = getMessages(lang);

  return (
    <>
      <Header lang={lang} page="reservation" />
      <main id="content">
        <PageHero lang={lang} title={t.privateDriverOnlineBooking} crumb={nav.booking} />
        {/* Formulaire en colonne étroite et centrée, plus lisible que la pleine largeur */}
        <section className={styles.form}>
          <ReservationForm lang={lang} />
        </section>
      </main>
      <Footer lang={lang} page="reservation" />
    </>
  );
}
