import type { Metadata } from "next";
import Link from "next/link";
import { Anton } from "next/font/google";

import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
  notes,
  series,
} from "@/lib/notes.config";
import BizHero from "@/components/BizHero";
import BizNav from "@/components/BizNav";

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
  const youtubeSet = YOUTUBE_URL.length > 0;
  const latest = notes.slice(0, 4);

  return (
   <>
   <BizNav />
   <BizHero />
   
   </>
  );
}