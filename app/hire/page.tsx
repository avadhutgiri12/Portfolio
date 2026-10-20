import Experience from "@/components/Experience";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import KineticContact from "@/components/KineticContact";
import Footer from "@/components/Footer";

export default function HirePage() {
  return (
    <>
      <Navbar />
    <SmoothScroll />
      <Experience />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />
      <Footer />
    </>
  );
}