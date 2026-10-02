"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Lang, PageKey } from "@/lib/seo";
import styles from "./Header.module.css";

export interface NavItem {
  href: string;
  label: string;
  active: boolean;
}

/**
 * En-tête adaptatif : la disposition n'est pas figée par des points de rupture,
 * l'en-tête mesure la place réelle (polices et langue comprises) et retient
 * la première disposition qui tient sur une seule ligne :
 *   full    : menu | logo centré | langue + bouton de réservation
 *   book    : logo | langue + bouton de réservation + burger
 *   compact : logo | langue + burger (le bouton de réservation passe dans le menu)
 * Le texte du bouton n'est jamais réduit : faute de place, il passe dans le menu.
 *
 * Le burger ouvre un menu plein écran en <dialog> modal (même principe que Driver Line) :
 * focus gardé dans le menu, Échap pour fermer, page inerte et immobile derrière ;
 * la barre du haut est reproduite dans le menu, la croix tombe exactement à la place du burger.
 */
type Mode = "full" | "book" | "compact";

export default function HeaderBar({
  lang,
  page,
  nav,
  menuItems,
  homeHref,
  cta,
  phone,
  labels,
}: {
  lang: Lang;
  page: PageKey;
  nav: NavItem[];
  menuItems: NavItem[];
  homeHref: string;
  cta: { href: string; label: string };
  phone: { href: string; label: string };
  labels: { open: string; close: string; home: string; menu: string };
}) {
  const [mode, setMode] = useState<Mode | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Choix de la disposition à partir des largeurs réelles
  const fit = useCallback(() => {
    const bar = barRef.current;
    const m = measureRef.current;
    if (!bar || !m || !brandRef.current || !langRef.current || !actionsRef.current) return;
    const width = (el: Element | null | undefined) => el?.getBoundingClientRect().width ?? 0;
    const cs = getComputedStyle(bar);
    const available = bar.clientWidth - parseFloat(cs.paddingInlineStart) - parseFloat(cs.paddingInlineEnd);
    const gap = parseFloat(cs.columnGap) || 0;
    const inner = parseFloat(getComputedStyle(actionsRef.current).columnGap) || 0;
    const logo = width(brandRef.current);
    const langW = width(langRef.current);
    const navW = width(m.querySelector("[data-m='nav']"));
    const ctaW = width(m.querySelector("[data-m='cta']"));
    const burgerW = width(m.querySelector("[data-m='burger']"));
    const side = Math.max(navW, langW + inner + ctaW);

    if (2 * side + logo + 2 * gap <= available) {
      setMode("full");
      // la place revient pour le menu complet : le menu plein écran se ferme
      setMenuOpen(false);
    } else if (logo + gap + langW + inner + ctaW + inner + burgerW <= available) setMode("book");
    else setMode("compact");
  }, []);

  useLayoutEffect(() => {
    fit();
    const ro = new ResizeObserver(fit);
    if (barRef.current) ro.observe(barRef.current);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, [fit]);

  // Ouverture / fermeture du menu plein écran ; la page derrière ne défile plus
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (menuOpen && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    } else if (!menuOpen && dialog.open) {
      dialog.close();
    }
    document.documentElement.classList.toggle("menu-open", menuOpen);
    return () => document.documentElement.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const logo = (
    <Image
      className={styles.logo}
      src="/images/logo-one-chauffeur.webp"
      alt="One Chauffeur"
      width={1000}
      height={140}
      sizes="(max-width: 767px) 160px, 280px"
      loading="eager"
    />
  );

  // Barre d'en-tête, rendue dans l'en-tête et en haut du menu
  const bar = (inMenu: boolean) => (
    <div ref={inMenu ? undefined : barRef} className={`container ${styles.bar}`}>
      {!inMenu && (
        <nav className={styles.nav} aria-label={labels.menu}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={item.active ? styles.active : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <Link
        ref={inMenu ? undefined : brandRef}
        href={homeHref}
        className={styles.brand}
        aria-label={labels.home}
        onClick={inMenu ? closeMenu : undefined}
      >
        {logo}
      </Link>

      <div ref={inMenu ? undefined : actionsRef} className={styles.actions}>
        <div ref={inMenu ? undefined : langRef} className={styles.lang}>
          <LanguageSwitcher lang={lang} page={page} />
        </div>
        {!inMenu && (
          <Link href={cta.href} className={styles.cta}>
            {cta.label}
          </Link>
        )}
        {inMenu ? (
          <button
            ref={closeRef}
            type="button"
            className={`${styles.burger} ${styles.isClose}`}
            aria-label={labels.close}
            onClick={closeMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={labels.open}
            onClick={() => setMenuOpen(true)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <header className={styles.header} data-mode={mode ?? undefined}>
        {bar(false)}

        {/* Copie invisible qui sert uniquement à mesurer la largeur naturelle du menu et du bouton */}
        <div ref={measureRef} className={styles.measure} aria-hidden="true">
          <div data-m="nav" className={styles.nav}>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <span data-m="cta" className={styles.cta}>
            {cta.label}
          </span>
          <span data-m="burger" className={styles.burger} />
        </div>
      </header>

      <dialog
        id="site-menu"
        ref={dialogRef}
        className={styles.dialog}
        data-mode={mode ?? undefined}
        aria-label={labels.menu}
        onClose={closeMenu}
      >
        {bar(true)}
        <nav className={styles.menu} aria-label={labels.menu}>
          <div className="container">
            <ul>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className={item.active ? styles.active : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                    <ArrowRight size={22} strokeWidth={1.5} aria-hidden="true" className="flip-rtl" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.menuActions}>
              <Link href={cta.href} className={styles.menuCta} onClick={closeMenu}>
                {cta.label}
              </Link>
              <a href={phone.href} className={styles.menuPhone} dir="ltr">
                <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                {phone.label}
              </a>
            </div>
          </div>
        </nav>
      </dialog>
    </>
  );
}
