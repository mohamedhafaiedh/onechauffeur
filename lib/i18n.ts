import fr from "../messages/fr.json";
import en from "../messages/en.json";
import es from "../messages/es.json";
import it from "../messages/it.json";
import ar from "../messages/ar.json";
import zh from "../messages/zh.json";
import type { Lang } from "./seo";

// Le français est la langue de référence : toute autre langue doit avoir exactement
// la même structure. Une clé absente de en.json fait échouer la compilation.
export type Messages = typeof fr;

const MESSAGES: Record<Lang, Messages> = { fr, en, es, it, ar, zh };

export function getMessages(lang: Lang): Messages {
  return MESSAGES[lang];
}
