import Image from "next/image";
import Link from "next/link";
import styles from "./Steps.module.css";

export interface StepItem {
  icon: string;
  title: string;
  text?: string;
}

// « Des étapes simples pour réserver » : bloc gris arrondi, étapes numérotées, bouton
export default function Steps({
  title,
  intro,
  steps,
  cta,
}: {
  title: string;
  intro: string;
  steps: StepItem[];
  cta: { href: string; label: string };
}) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.box}>
          <h2 className="section-title">{title}</h2>
          <p className="section-intro">{intro}</p>
          <ol className={styles.list}>
            {steps.map((step) => (
              <li key={step.title}>
                <span className={styles.badge}>
                  <Image src={step.icon} alt="" width={64} height={64} />
                </span>
                <div>
                  <h3>{step.title}</h3>
                  {step.text && <p>{step.text}</p>}
                </div>
              </li>
            ))}
          </ol>
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
