import KineticContact from "@/components/KineticContact";
import SmoothScroll from "@/components/SmoothScroll";

export default function ContactPage() {
  return (
    <>
    <SmoothScroll />
      <KineticContact
        lead="Let's talk|About your next project"
        liveLabel="View my work"
      />
    </>
  );
}