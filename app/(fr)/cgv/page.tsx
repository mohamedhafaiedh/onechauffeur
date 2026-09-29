import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import LegalPage from "@/components/pages/LegalPage";
import TermsOfSaleContent from "@/content/legal/fr/cgv";

export const metadata: Metadata = createPageMetadata("cgv", "fr");

export default function Page() {
  return (
    <LegalPage lang="fr" page="cgv">
      <TermsOfSaleContent />
    </LegalPage>
  );
}
