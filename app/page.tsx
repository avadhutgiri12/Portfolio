import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkCarousel from "@/components/WorkCarousel";
import Navbar from "@/components/Navbar";

import KineticContact from "@/components/KineticContact";
import SmoothScroll from "@/components/SmoothScroll";
import WhatIDo from "@/components/WhatIDo";
import Footer from "@/components/Footer";
// import LoaderWrapper from "@/components/LoaderWrapper";

export const metadata = {
  title: "Avadhut Giri — ML Engineer & Full-Stack Developer",
  description:
    "Machine Learning Engineer & Full-Stack Developer building AI-powered applications, ML systems, and scalable web apps with Next.js, React, Python, and cloud technologies.",
  metadataBase: new URL("https://avadhutgiri.in"),
  openGraph: {
    type: "website",
    url: "https://avadhutgiri.in",
    title: "Avadhut Giri — ML Engineer & Full-Stack Developer",
    description:
      "Machine Learning Engineer & Full-Stack Developer building AI-powered applications and scalable web systems.",
    siteName: "Avadhut Giri",
    images: [
      {
        url: "https://avadhutgiri.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avadhut Giri - ML Engineer & Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avadhut Giri — ML Engineer & Full-Stack Developer",
    description:
      "Machine Learning Engineer & Full-Stack Developer building AI-powered applications and scalable web systems.",
    images: ["https://avadhutgiri.in/og-image.png"],
    creator: "@avadhutgiri12",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      {/* <LoaderWrapper /> */}
      <Navbar />
    <SmoothScroll />
      <Hero />
      <About />
      <WorkCarousel />
      <WhatIDo />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />
      <Footer />

    </>
  );
}