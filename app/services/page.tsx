import ServicesPage from "@/components/ServicesPage";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import KineticContact from "@/components/KineticContact";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <SmoothScroll />
      <ServicesPage />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />
      <Footer />
    </>
  );
}