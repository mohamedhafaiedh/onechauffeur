import { Poppins, Syne } from "next/font/google";

// Polices auto-hébergées par next/font (téléchargées au build, aucune requête vers Google
// côté visiteur). Le CSS les utilise via var(--font-poppins) et var(--font-syne).
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});
