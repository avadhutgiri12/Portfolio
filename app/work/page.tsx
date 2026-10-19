import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import SmoothScroll from "@/components/SmoothScroll";
import WorkCarousel from "@/components/WorkCarousel";

export default function WorkPage() {
  return (
    <>
    <SmoothScroll />
      <WorkCarousel />
      <ProjectShowcase />
      <Skills />
    </>
  );
}