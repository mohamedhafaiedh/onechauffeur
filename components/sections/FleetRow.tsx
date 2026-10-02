import Image from "next/image";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import styles from "./FleetRow.module.css";

export interface Feature {
  icon: ComponentType<LucideProps>;
  label: string;
}

// Page Flotte : un véhicule par ligne, texte et photo alternés
export default function FleetRow({
  id,
  name,
  tagline,
  features,
  image,
  reverse = false,
  preload = false,
}: {
  id: string;
  name: string;
  tagline: string;
  features: Feature[];
  image: string;
  reverse?: boolean;
  /** image principale de la page (première ligne) : préchargée */
  preload?: boolean;
}) {
  return (
    <section id={id} className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h2>{name}</h2>
          <p>{tagline}</p>
          <ul className={styles.features}>
            {features.map(({ icon: Icon, label }) => (
              <li key={label}>
                <span className={styles.icon}>
                  <Icon size={12} strokeWidth={2} aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className={styles.image}
          src={image}
          alt={name}
          width={439}
          height={340}
          sizes="(max-width: 767px) 100vw, 530px"
          preload={preload}
          fetchPriority={preload ? "high" : undefined}
        />
      </div>
    </section>
  );
}
