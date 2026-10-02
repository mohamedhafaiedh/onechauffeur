import { Poppins, Syne, Tajawal } from "next/font/google";

// Polices auto-hébergées par next/font (téléchargées au build, aucune requête vers Google
// côté visiteur). Le CSS les utilise via des variables (voir app/globals.css).
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

// Arabe : pas de préchargement, le navigateur ne télécharge ces fichiers
// que sur les pages qui affichent effectivement de l'arabe.
export const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

// Chinois traditionnel : polices système (PingFang TC, Microsoft JhengHei, Noto Sans CJK TC),
// voir app/globals.css. Une police web CJK pèserait plusieurs mégaoctets.
