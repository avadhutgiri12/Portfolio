import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkCarousel from "@/components/WorkCarousel";

import KineticContact from "@/components/KineticContact";
import SmoothScroll from "@/components/SmoothScroll";
import WhatIDo from "@/components/WhatIDo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <SmoothScroll />
      <Hero />
      <About />
      <WorkCarousel />
      <WhatIDo />
      
    </>
  );
}