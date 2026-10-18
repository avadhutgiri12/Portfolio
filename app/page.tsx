import Hero from "@/components/Hero";
import About from "@/components/About";
import KineticContact from "@/components/KineticContact";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <SmoothScroll />
      <Hero />
      <About />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />
    </>
  );
}