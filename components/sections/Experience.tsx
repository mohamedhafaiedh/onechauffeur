import Image from "next/image";
import { Check } from "lucide-react";
import styles from "./Experience.module.css";

// Accueil : texte + points forts cochés, photo à côté
export default function Experience({
  title,
  text,
  points,
  image,
}: {
  title: string;
  text: string;
  points: string[];
  image: string;
}) {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2>{title}</h2>
          <p className={styles.text}>{text}</p>
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point}>
                <span className={styles.check}>
                  <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <Image className={styles.image} src={image} alt="" width={413} height={415} sizes="(max-width: 767px) 100vw, 530px" />
      </div>
    </section>
  );
}
