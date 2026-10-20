import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkCarousel from "@/components/WorkCarousel";
import Navbar from "@/components/Navbar";

import KineticContact from "@/components/KineticContact";
import SmoothScroll from "@/components/SmoothScroll";
import WhatIDo from "@/components/WhatIDo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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