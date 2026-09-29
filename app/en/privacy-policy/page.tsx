import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import LegalPage from "@/components/pages/LegalPage";
import PrivacyPolicyContent from "@/content/legal/en/politique-de-confidentialite";

export const metadata: Metadata = createPageMetadata("politique-de-confidentialite", "en");

export default function Page() {
  return (
    <LegalPage lang="en" page="politique-de-confidentialite">
      <PrivacyPolicyContent />
    </LegalPage>
  );
}
