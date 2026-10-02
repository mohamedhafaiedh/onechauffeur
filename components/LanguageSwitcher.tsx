"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { getMessages } from "@/lib/i18n";
import { LOCALES, pagePath, type Lang, type PageKey } from "@/lib/seo";
import styles from "./LanguageSwitcher.module.css";

const LANGS = Object.keys(LOCALES) as Lang[];

// Sélecteur de langue : globe + code de la langue active ; le menu liste les langues
// en toutes lettres, chacune dans sa propre langue, vers la page équivalente.
export default function LanguageSwitcher({
  lang,
  page,
  placement = "down",
}: {
  lang: Lang;
  page: PageKey;
  placement?: "down" | "up";
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${placement === "up" ? styles.up : ""} ${open ? styles.open : ""}`}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={menuId}
        // le nom accessible commence par le texte visible (« FR »), règle WCAG 2.5.3
        aria-label={`${lang.toUpperCase()} – ${getMessages(lang).languageSwitcher.chooseLanguage} (${LOCALES[lang].name})`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg className={styles.globe} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9.25" />
          <path d="M2.75 12h18.5M12 2.75c2.4 2.5 3.6 5.6 3.6 9.25s-1.2 6.75-3.6 9.25M12 2.75C9.6 5.25 8.4 8.35 8.4 12s1.2 6.75 3.6 9.25" />
        </svg>
        <span className={styles.code}>{lang.toUpperCase()}</span>
        <svg className={styles.chevron} viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" />
        </svg>
      </button>

      <ul id={menuId} className={styles.menu}>
        {LANGS.map((l) => {
          const current = l === lang;
          const href = pagePath(page, l);
          return (
            <li key={l}>
              <Link
                href={href}
                hrefLang={LOCALES[l].code}
                lang={LOCALES[l].code}
                aria-current={current ? "page" : undefined}
                className={`${styles.item} ${current ? styles.current : ""}`}
                onClick={() => setOpen(false)}
              >
                <span>{LOCALES[l].name}</span>
                {current && (
                  <svg className={styles.check} viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                  </svg>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
