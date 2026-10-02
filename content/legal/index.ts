import type { ComponentType } from "react";
import type { Lang } from "@/lib/seo";
import CgvFr from "./fr/cgv";
import CgvEn from "./en/cgv";
import legalFr from "./fr";
import legalEn from "./en";
import type { LegalContent } from "./types";

// Textes juridiques, en français et en anglais seulement
// (les autres langues renvoient vers la version anglaise, voir hasPage dans lib/seo.ts).

// CGV : document long, un composant par langue
export const TERMS_CONTENT: Partial<Record<Lang, ComponentType>> = { fr: CgvFr, en: CgvEn };

// Mentions légales (confidentialité et cookies compris) : rubriques typées, modèle commun à tous les sites
export const LEGAL_NOTICE: Partial<Record<Lang, LegalContent>> = { fr: legalFr, en: legalEn };
