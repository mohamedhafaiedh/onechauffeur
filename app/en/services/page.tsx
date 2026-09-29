import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = createPageMetadata("services", "en");

export default function Page() {
  return <ServicesPage lang="en" />;
}
