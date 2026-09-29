import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import ThankYouPage from "@/components/pages/ThankYouPage";

export const metadata: Metadata = createPageMetadata("merci", "fr", { noindex: true });

export default function Page() {
  return <ThankYouPage lang="fr" />;
}
