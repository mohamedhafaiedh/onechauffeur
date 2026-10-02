import styles from "./PageHero.module.css";

// Pages intérieures : bandeau noir avec le titre centré
export default function PageHero({ title }: { title: string }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </section>
  );
}
