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
import BizService from "@/components/BizService";
import Footer from "@/components/Footer";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = "Services — techie.addy";
const description =
  "Explore the services I offer: web development, full-stack applications, machine learning, intelligent systems, data & database, and user interface design.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/business/services" },
  openGraph: { title, description, url: "/business/services", siteName: "techie.addy", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesPage() {
  const youtubeSet = YOUTUBE_URL.length > 0;
  const latest = notes.slice(0, 4);

  return (
    <>
      <BizNav current="services" />
      <BizHero />
      <BizService />
      <Footer />
    </>
  );
}