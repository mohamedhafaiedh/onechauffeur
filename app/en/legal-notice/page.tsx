import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import LegalPage from "@/components/pages/LegalPage";
import LegalNoticeContent from "@/content/legal/en/mentions-legales";

export const metadata: Metadata = createPageMetadata("mentions-legales", "en");

export default function Page() {
  return (
    <LegalPage lang="en" page="mentions-legales">
      <LegalNoticeContent />
    </LegalPage>
  );
}
