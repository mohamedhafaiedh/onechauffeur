import { FaWhatsapp } from "@/components/icons";
import { getMessages } from "@/lib/i18n";
import type { Lang } from "@/lib/seo";
import { WHATSAPP_HREF } from "@/lib/site";
import styles from "./WhatsAppButton.module.css";

// Bulle WhatsApp flottante en bas à droite de toutes les pages (même principe que Diamond Services),
// avec une pastille rouge qui pulse pour attirer l'œil.
export default function WhatsAppButton({ lang }: { lang: Lang }) {
  return (
    <a
      className={styles.fab}
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={getMessages(lang).common.whatsappAria}
    >
      <span className={styles.badge} aria-hidden="true" />
      <FaWhatsapp className={styles.glyph} />
    </a>
  );
}
