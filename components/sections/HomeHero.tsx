import Image from "next/image";
import Link from "next/link";
import styles from "./HomeHero.module.css";

// Accueil : photo pleine largeur assombrie, titre, texte et bouton.
// La photo est une vraie image (préchargée, taille adaptée à l'écran) : c'est l'élément principal de la page.
export default function HomeHero({ title, text, cta }: { title: string; text: string; cta: { href: string; label: string } }) {
  return (
    <section className={styles.hero}>
      <Image className={styles.photo} src="/images/tesla-model-3-fond.webp" alt="" fill sizes="100vw" quality={60} preload fetchPriority="high" />
      <div className="container">
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{text}</p>
          <Link href={cta.href} className={`btn btn-gold ${styles.cta}`}>
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
