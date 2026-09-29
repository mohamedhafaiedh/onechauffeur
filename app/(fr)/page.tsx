import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = createPageMetadata("", "fr");

export default function Page() {
  return <HomePage lang="fr" />;
}
