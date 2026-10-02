"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuLines } from "@/components/icons";
import styles from "./MobileMenu.module.css";

export interface MobileMenuItem {
  href: string;
  label: string;
  active: boolean;
}

// Menu mobile : bouton « hamburger » + panneau latéral (côté début de ligne, donc à droite en arabe).
// Fermeture par la croix, Échap, clic sur le fond ou sur un lien ; défilement de la page bloqué.
export default function MobileMenu({
  items,
  homeHref,
  cta,
  phone,
  labels,
}: {
  items: MobileMenuItem[];
  homeHref: string;
  cta: { href: string; label: string };
  phone: { href: string; label: string };
  labels: { open: string; close: string; home: string; menu: string };
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      const html = document.documentElement;
      const previous = html.style.overflow;
      html.style.overflow = "hidden";
      // différé : sur écran tactile, le navigateur rend le focus au bouton après l'événement
      const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 50);
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKeyDown);
      return () => {
        window.clearTimeout(focusTimer);
        html.style.overflow = previous;
        document.removeEventListener("keydown", onKeyDown);
      };
    }
    if (wasOpen.current) triggerRef.current?.focus();
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-label={labels.open}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        <MenuLines className={styles.triggerIcon} />
      </button>

      <div className={`${styles.overlay} ${open ? styles.open : ""}`} onClick={close} aria-hidden="true" />

      <div
        id={panelId}
        className={`${styles.panel} ${open ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={labels.menu}
        inert={!open}
      >
        <div className={styles.top}>
          <Link href={homeHref} aria-label={labels.home} className={styles.logo} onClick={close}>
            <Image alt="One Chauffeur" src="/images/logo-one-chauffeur.webp" width={1000} height={140} sizes="180px" />
          </Link>
          <button ref={closeRef} type="button" className={styles.close} aria-label={labels.close} onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <nav className={styles.nav}>
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={item.active ? styles.active : undefined}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.bottom}>
          <Link href={cta.href} className={styles.cta} onClick={close}>
            {cta.label}
          </Link>
          <a href={phone.href} className={styles.phone}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 3.5h2.6l1.4 4-2 1.3a11 11 0 0 0 6.6 6.6l1.3-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
            </svg>
            {phone.label}
          </a>
        </div>
      </div>
    </>
  );
}
