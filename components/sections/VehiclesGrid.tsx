import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Luggage, Users } from "lucide-react";
import styles from "./VehiclesGrid.module.css";

export interface VehicleCard {
  name: string;
  passengers: string;
  bags: string;
  image: string;
  href: string;
}

// « Choisissez le véhicule qui vous convient » : 4 cartes → 2 → 1
export default function VehiclesGrid({
  title,
  intro,
  details,
  vehicles,
}: {
  title: string;
  intro: string;
  details: string;
  vehicles: VehicleCard[];
}) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-intro">{intro}</p>
        <ul className={styles.grid}>
          {vehicles.map((v) => (
            <li key={v.name} className={styles.card}>
              <h3>{v.name}</h3>
              <ul className={styles.specs}>
                <li>
                  <Users size={17} strokeWidth={1.5} aria-hidden="true" />
                  {v.passengers}
                </li>
                <li>
                  <Luggage size={17} strokeWidth={1.5} aria-hidden="true" />
                  {v.bags}
                </li>
              </ul>
              <Image src={v.image} alt={v.name} width={439} height={340} sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 265px" />
              <Link href={v.href} className={styles.details}>
                {details}
                <ChevronRight size={16} aria-hidden="true" className="flip-rtl" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
