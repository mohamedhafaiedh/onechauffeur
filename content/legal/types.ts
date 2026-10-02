// Une ligne « facts » sans valeur ("") n'est pas affichée : on ne publie que ce qui est renseigné.
// Les champs obligatoires encore vides sont signalés au build (scripts/check-legal.mjs).
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "facts"; rows: [string, string][] }
  | { type: "h3"; text: string };

export type LegalIcon = "building" | "server" | "copyright" | "shieldCheck" | "cookie";

export interface LegalSection {
  // Ancre stable (#editeur, #hebergement, #propriete, #confidentialite, #cookies)
  id: string;
  icon: LegalIcon;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalContent {
  title: string;
  subtitle: string;
  intro: string;
  sections: LegalSection[];
}
