
import Skills from "@/components/Skills";
import SmoothScroll from "@/components/SmoothScroll";
import WorkCarousel from "@/components/WorkCarousel";
import Navbar from "@/components/Navbar";
import KineticContact from "@/components/KineticContact";
import Footer from "@/components/Footer";

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