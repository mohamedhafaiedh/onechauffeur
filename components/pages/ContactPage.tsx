import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { FaWhatsapp } from "@/components/icons";
import PageHero from "@/components/sections/PageHero";
import { getMessages } from "@/lib/i18n";
import type { Lang } from "@/lib/seo";
import styles from "./ContactPage.module.css";

export default function ContactPage({ lang }: { lang: Lang }) {
  const { contact: t, nav, common } = getMessages(lang);
  const channels = [
    { icon: <Phone size={25} strokeWidth={1.5} aria-hidden="true" />, title: common.phone, href: "tel:+33667520677" },
    { icon: <FaWhatsapp width={22} height={25} />, title: t.whatsapp, href: "https://wa.me/33667520677", external: true },
  ];

  return (
    <>
      <Header lang={lang} page="contact" />
      <main id="content">
        <PageHero title={nav.contact} />
        <section className="section">
          <div className={`container ${styles.grid}`}>
            <ul className={styles.channels}>
              {channels.map((c) => (
                <li key={c.title}>
                  <span className={styles.icon}>{c.icon}</span>
                  <h2>{c.title}</h2>
                  <a href={c.href} dir="ltr" {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    +33 (0)6 67 52 06 77
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.card}>
              <h2>{t.leaveAMessageHere}</h2>
              <ContactForm lang={lang} />
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} page="contact" />
    </>
  );
}
