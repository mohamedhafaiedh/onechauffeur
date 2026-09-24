import type { Metadata } from "next";
import BaseLayout from "@/components/BaseLayout";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/images/favicon-one-chauffeur.png" }, { url: "/favicon.ico" }],
    apple: [{ url: "/images/favicon-one-chauffeur.png" }],
  },
};

export default function ENLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
