import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkCarousel from "@/components/WorkCarousel";

import KineticContact from "@/components/KineticContact";
import SmoothScroll from "@/components/SmoothScroll";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <>
    <SmoothScroll />
      <Hero />
      <About />
      <WorkCarousel />
      <WhatIDo />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />

    </>
  );
}