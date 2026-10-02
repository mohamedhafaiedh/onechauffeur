import type { ComponentType, SVGProps } from "react";
import styles from "./Values.module.css";

export interface ValueItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

// « Nos valeurs » : 4 colonnes → 2 (tablette) → 1 (mobile)
export default function Values({ title, items }: { title: string; items: ValueItem[] }) {
  return (
    <section className={styles.values}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <ul className={styles.grid}>
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <span className={styles.icon}>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
