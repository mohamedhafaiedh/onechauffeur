import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import LegalPage from "@/components/pages/LegalPage";
import LegalNoticeContent from "@/content/legal/fr/mentions-legales";

export const metadata: Metadata = createPageMetadata("mentions-legales", "fr");

export default function Page() {
  return (
    <LegalPage lang="fr" page="mentions-legales">
      <LegalNoticeContent />
    </LegalPage>
  );
}
