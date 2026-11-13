
import Skills from "@/components/Skills";
import SmoothScroll from "@/components/SmoothScroll";
import WorkCarousel from "@/components/WorkCarousel";
import Navbar from "@/components/Navbar";
import KineticContact from "@/components/KineticContact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work — Avadhut Giri",
  description:
    "Explore my portfolio of products, case studies, and ML/AI projects. From ML-powered applications to real-time computer vision systems.",
  metadataBase: new URL("https://avadhutgiri.in"),
  openGraph: {
    type: "website",
    url: "https://avadhutgiri.in/work",
    title: "Work — Avadhut Giri",
    description:
      "Explore my portfolio of products, case studies, and ML/AI projects.",
    siteName: "Avadhut Giri",
    images: [
      {
        url: "https://avadhutgiri.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avadhut Giri Work Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Avadhut Giri",
    description:
      "Explore my portfolio of products, case studies, and ML/AI projects.",
    images: ["https://avadhutgiri.in/og-image.png"],
    creator: "@avadhutgiri12",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
    <SmoothScroll />
      <WorkCarousel />
      
      <Skills />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />
      <Footer />
    </>
  );
}