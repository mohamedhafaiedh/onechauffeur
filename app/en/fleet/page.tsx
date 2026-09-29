import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import FleetPage from "@/components/pages/FleetPage";

export const metadata: Metadata = createPageMetadata("flotte", "en");

export default function Page() {
  return <FleetPage lang="en" />;
}
