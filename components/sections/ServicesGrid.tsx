import Link from "next/link";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import styles from "./ServicesGrid.module.css";

export interface ServiceItem {
  icon: ComponentType<LucideProps>;
  title: string;
  text: string;
}

// « Nos différents services » : cartes 3 colonnes → 2 → 1, puis bouton
export default function ServicesGrid({
  title,
  items,
  cta,
}: {
  title: string;
  items: ServiceItem[];
  cta: { href: string; label: string };
}) {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <ul className={styles.grid}>
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className={styles.card}>
              <span className={styles.icon}>
                <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
        <div className={`btn-center ${styles.ctaRow}`}>
          <Link href={cta.href} className="btn btn-gold">
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
