import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = createPageMetadata("contact", "en");

export default function Page() {
  return <ContactPage lang="en" />;
}
