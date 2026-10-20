import KineticContact from "@/components/KineticContact";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
    <SmoothScroll />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />
      <Footer />
    </>
  );
}