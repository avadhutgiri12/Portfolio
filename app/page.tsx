import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseGrid from "@/components/MouseGrid";
import WhatIDo from "@/components/WhatIDo";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Academic from "@/components/Academic";
import SectionStack from "@/components/SectionStack";

export default function Home() {
  return (
    <div className="relative bg-[#080808]">

      <MouseGrid />

      <Navbar />

      <main className="relative z-10">

       
          
          <Hero />
          <About />
          <WhatIDo />
          <ProjectShowcase />
          <Skills />
          <Experience />
          <Academic />
          <Contact />
        

        <div className="relative z-50">
          <Footer />
        </div>

      </main>
    </div>
  );
}