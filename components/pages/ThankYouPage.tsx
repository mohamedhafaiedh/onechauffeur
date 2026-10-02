import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";
import styles from "./StatusPage.module.css";

export default function ThankYouPage({ lang }: { lang: Lang }) {
  const { thankYou: t, common } = getMessages(lang);

  return (
    <div>
      <Header lang={lang} page="merci" />

      <main className={styles.main} id="content">
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">
            <CheckCircle2 size={40} strokeWidth={1.8} />
          </div>

          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.message}>{t.message}</p>

          <div className={styles.urgent}>
            <p className={styles.urgentLabel}>{t.urgent}</p>
            <div className={styles.links}>
              <a href={PHONE_HREF} dir="ltr">
                <Phone size={16} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <Link href={pagePath("", lang)} className={styles.back}>
            <ArrowLeft size={18} aria-hidden="true" />
            {common.backHome}
          </Link>
        </div>
      </main>

      <Footer lang={lang} page="merci" />
    </div>
  );
}
