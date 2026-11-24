import type { Metadata } from "next";
import { Anton } from "next/font/google";

import BizNav from "@/components/BizNav";
import BusinessNotes from "@/components/BusinessNotes";
import BizFooter from "@/components/BizFooter";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = "Free Notes — techie.addy";
const description =
  "Practical guides, checklists, and references for builders. Download, read, apply.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/business/notes" },
  openGraph: { title, description, url: "/business/notes", siteName: "techie.addy", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BusinessNotesPage() {
  return (
    <>
      <BizNav current="notes" />
      <BusinessNotes />
      <BizFooter />
    </>
  );
}