import type { ComponentType } from "react";
import type { Lang } from "@/lib/seo";
import CgvFr from "./fr/cgv";
import MentionsFr from "./fr/mentions-legales";
import ConfidentialiteFr from "./fr/politique-de-confidentialite";
import CgvEn from "./en/cgv";
import MentionsEn from "./en/mentions-legales";
import ConfidentialiteEn from "./en/politique-de-confidentialite";

export type LegalPageKey = "cgv" | "mentions-legales" | "politique-de-confidentialite";

// Textes juridiques : un document complet par langue
export const LEGAL_CONTENT: Record<Lang, Record<LegalPageKey, ComponentType>> = {
  fr: { cgv: CgvFr, "mentions-legales": MentionsFr, "politique-de-confidentialite": ConfidentialiteFr },
  en: { cgv: CgvEn, "mentions-legales": MentionsEn, "politique-de-confidentialite": ConfidentialiteEn },
};
