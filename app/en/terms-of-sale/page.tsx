import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import LegalPage from "@/components/pages/LegalPage";
import TermsOfSaleContent from "@/content/legal/en/cgv";

export const metadata: Metadata = createPageMetadata("cgv", "en");

export default function Page() {
  return (
    <LegalPage lang="en" page="cgv">
      <TermsOfSaleContent />
    </LegalPage>
  );
}
