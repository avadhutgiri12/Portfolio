import type { Metadata } from "next";
import { Anton } from "next/font/google";

import BizHero from "@/components/BizHero";
import BizNav from "@/components/BizNav";
import BizAbout from "@/components/BizAbout";
import BizService from "@/components/BizService";
import FreeNotes from "@/components/FreeNotes";
import BizFooter from "@/components/BizFooter";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = "techie.addy — Web apps and websites for business";
const description =
  "techie.addy builds web apps, websites and AI tools for businesses and institutions, and shares free PDF notes on building with AI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/business" },
  openGraph: { title, description, url: "/business", siteName: "techie.addy", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BusinessPage() {
  return (
   <>
   <BizNav />
   <BizHero />
   <BizAbout />
   <BizService />
   <FreeNotes />
   <BizFooter />
   </>
  );
}