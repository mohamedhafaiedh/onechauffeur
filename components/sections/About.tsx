import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

// « À propos de One Chauffeur » : photo + texte + bouton
export default function About({
  title,
  paragraphs,
  image,
  cta,
}: {
  title: string;
  paragraphs: string[];
  image: string;
  cta: { href: string; label: string };
}) {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <Image className={styles.image} src={image} alt="" width={1080} height={1679} sizes="(max-width: 767px) 100vw, 530px" />
        <div className={styles.text}>
          <h2>{title}</h2>
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className={`btn-center ${styles.ctaRow}`}>
            <Link href={cta.href} className="btn btn-gold">
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
