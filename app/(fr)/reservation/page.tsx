import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import BookingPage from "@/components/pages/BookingPage";

export const metadata: Metadata = createPageMetadata("reservation", "fr");

export default function Page() {
  return <BookingPage lang="fr" />;
}
