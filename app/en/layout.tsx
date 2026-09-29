import type { Metadata } from "next";
import BaseLayout from "@/components/BaseLayout";
import { SITE_ICONS } from "@/lib/seo";

export const metadata: Metadata = {
  icons: SITE_ICONS,
};

export default function ENLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
