import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import LegalPage from "@/components/pages/LegalPage";
import PrivacyPolicyContent from "@/content/legal/fr/politique-de-confidentialite";

export const metadata: Metadata = createPageMetadata("politique-de-confidentialite", "fr");

export default function Page() {
  return (
    <LegalPage lang="fr" page="politique-de-confidentialite">
      <PrivacyPolicyContent />
    </LegalPage>
  );
}
