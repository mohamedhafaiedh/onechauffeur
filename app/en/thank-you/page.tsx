import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import ThankYouPage from "@/components/pages/ThankYouPage";

export const metadata: Metadata = createPageMetadata("merci", "en", { noindex: true });

export default function Page() {
  return <ThankYouPage lang="en" />;
}
