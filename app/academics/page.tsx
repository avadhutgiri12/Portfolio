import Academic from "@/components/Academic";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import KineticContact from "@/components/KineticContact";
import Footer from "@/components/Footer";

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
    <SmoothScroll />
      <Academic />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />
      <Footer />
    </>
  );
}