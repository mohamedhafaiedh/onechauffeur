import { ArrowUpRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { FaWhatsapp } from "@/components/icons";
import PageHero from "@/components/sections/PageHero";
import { getMessages } from "@/lib/i18n";
import type { Lang } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";
import styles from "./ContactPage.module.css";

export default function ContactPage({ lang }: { lang: Lang }) {
  const { contact: t, nav, common } = getMessages(lang);
  const channels = [
    { icon: <Phone size={25} strokeWidth={1.5} aria-hidden="true" />, title: common.phone, href: PHONE_HREF },
    { icon: <FaWhatsapp width={22} height={25} />, title: t.whatsapp, href: WHATSAPP_HREF, external: true },
  ];

  return (
    <>
      <Header lang={lang} page="contact" />
      <main id="content">
        <PageHero lang={lang} title={nav.contact} />
        <section className="section">
          <div className={`container ${styles.grid}`}>
            <ul className={styles.channels}>
              {channels.map((c) => (
                <li key={c.title}>
                  {/* Tout le bloc est cliquable */}
                  <a href={c.href} className={styles.channel} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <span className={styles.icon}>{c.icon}</span>
                    <span className={styles.channelText}>
                      <span className={styles.channelTitle}>{c.title}</span>
                      <span className={styles.number} dir="ltr">
                        {PHONE_DISPLAY}
                      </span>
                    </span>
                    <ArrowUpRight className={`${styles.arrow} flip-rtl`} size={22} strokeWidth={1.5} aria-hidden="true" />
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
