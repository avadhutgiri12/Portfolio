import { notFound } from "next/navigation";
import { PROJECT_DATA } from "@/data/ProjectData";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Overlays from "@/components/Overlays";

// Import case study JSON files for howItWorks data
import storewayData from "@/case-studies/01-storeway.json";
import housePriceData from "@/case-studies/02-house-price-prediction-system.json";
import urbanCultureData from "@/case-studies/03-urban-culture.json";
import auroraData from "@/case-studies/04-aurora.json";
import kineticLabData from "@/case-studies/05-kinetic-lab.json";

// Map of project IDs to their corresponding JSON data
const caseStudyMap: Record<string, any> = {
  "01": storewayData,
  "02": housePriceData,
  "03": urbanCultureData,
  "04": auroraData,
  "05": kineticLabData,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate a consistent slug for every project.
function createSlug(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Generate metadata for each project.
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const project = PROJECT_DATA.find(
    (p) => createSlug(p.title) === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
  };
}

// Generate static pages for all projects.
export function generateStaticParams() {
  return PROJECT_DATA.map((project) => ({
    slug: createSlug(project.title),
  }));
}

export default async function WorkCaseStudy({ params }: PageProps) {
  const { slug } = await params;

  const project = PROJECT_DATA.find(
    (p) => createSlug(p.title) === slug
  );

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECT_DATA.findIndex(
    (p) => p.id === project.id
  );

  const prevProject =
    PROJECT_DATA[
      (currentIndex - 1 + PROJECT_DATA.length) %
        PROJECT_DATA.length
    ];

  const nextProject =
    PROJECT_DATA[
      (currentIndex + 1) % PROJECT_DATA.length
    ];

  const prevSlug = createSlug(prevProject.title);
  const nextSlug = createSlug(nextProject.title);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <Overlays />
      {/* Background glow */}{/* Cinematic black background with orange ambient glow */}
<div
  className="pointer-events-none absolute inset-0 z-0"
  style={{
    background: `
      radial-gradient(
        ellipse 70% 45% at 85% 18%,
        rgba(201, 85, 46, 0.65) 0%,
        rgba(150, 55, 25, 0.35) 25%,
        rgba(65, 27, 15, 0.18) 50%,
        transparent 75%
      ),
      linear-gradient(
        180deg,
        #0a0807 0%,
        #050505 55%,
        #000000 100%
      )
    `,
  }}
/>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="mb-25">
          {/* Back to work and project number on same line */}
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/#work"
              className="flex items-center gap-2 text-sm text-white transition-colors hover:text-[#fe4c12]"
            >
              <ChevronLeft size={20} />
              All work
            </Link>
            <div className="text-sm font-bold text-white/50">
              {project.num} / {PROJECT_DATA.length.toString().padStart(2, '0')}
            </div>
          </div>

          {/* Project name on next line with Roboto font */}
        </div>

        {/* Project introduction */}
          <h1 className="md:text-9xl text-6xl mb-4 font-bold tracking-tight roboto">
            {project.title}
          </h1>
        <div className="mb-8 md:w-2xl w-vw">
          <p className="mb-4 leading-relaxed text-white/70">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveSiteUrl && (
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-transparent bg-[#fd4b16] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Visit Live
                <ArrowUpRight size={20} />
              </a>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-transparent bg-white px-6 py-3 text-black transition-all duration-200"
              >
                Code
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Project video */}
        {/* Project UI Showcase */}
{(project.videoUrl || project.image) && (
  <div className="mb-16 mt-12">
    {/* Browser Window */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#e9e4d6] shadow-[0_25px_100px_rgba(0,0,0,0.4)]">

      {/* Browser Header */}
      <div className="flex h-8 items-center gap-2 bg-[#e9e4d6] px-4 sm:h-10 sm:px-6">

        {/* Browser Controls */}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#c9c2b1]" />
          <span className="h-2 w-2 rounded-full bg-[#c9c2b1]" />
          <span className="h-2 w-2 rounded-full bg-[#c9c2b1]" />
        </div>

        {/* Website Address */}
        <div className="ml-3 truncate font-mono text-[9px] tracking-[0.15em] text-[#817967] sm:text-[10px]">
          WWW.{project.title.toUpperCase().replace(/\s+/g, "")}.COM
        </div>
      </div>

      {/* Website Preview */}
      <div className="relative aspect-16/10 overflow-hidden bg-white sm:aspect-video">

        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            loop
            playsInline
            preload="metadata"
            poster={project.image}
            className="h-full w-full object-cover object-top"
          >
            Your browser does not support video playback.
          </video>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
        )}

      </div>
    </div>
  </div>
)}

        {/* Project impact */}
        <div className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold text-white roboto w-4xl">
            What it does
          </h2>

          <p className="leading-relaxed text-white/70">
            {project.impact}
          </p>
        </div>

          <div className="flex gap-2">
          {/* Key features */}
          <div className="w-[40%]">
            <h2 className="mb-2 text-[14px] font-semibold text-[#fe4c12] roboto leading-tight">
              Key Features
            </h2>

            <div className="space-y-2">
              {project.tags.map((tag, index) => (
                <div key={index} className="border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
                  <span className="text-gray-300 leading-tight">{tag}</span>
                </div>
              ))}
            </div>
          </div>

        {/* How it works */}
        <div className="w-[60%]">
          <h2 className="mb-2 text-[14px] font-semibold text-[#fe4c12] roboto leading-tight">
            How it works
          </h2>

          <div className="space-y-2">
            {caseStudyMap[project.id]?.extra?.howItWorks?.map((item: any, index: number) => (
              <div key={index} className="flex items-start gap-2 border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
                <div className="mt-0.5 shrink-0">
                  {index + 1}.
                </div>

                <div>
                  <h3 className="mb-1 font-semibold text-gray-100 roboto">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-[#fe4c12] roboto">
            Tools Used
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#fe4c12]/50 bg-[#fe4c12]/20 px-3 py-1 text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Project navigation */}
        <div className="mt-12 border-t border-[#fe4c12]/20 pt-8">
          <div className="flex items-center justify-between gap-4">
            {/* Previous project */}
            <Link
              href={`/work/${prevSlug}`}
              className="flex max-w-[48%] items-center gap-3 transition-opacity hover:opacity-70"
            >
              <ChevronLeft
                size={24}
                className="shrink-0 text-[#fe4c12]"
              />

              <div className="min-w-0">
                <p className="text-sm text-gray-400">
                  Previous Project
                </p>

                <h3 className="wrap-break-word font-semibold text-white roboto">
                  {prevProject.title}
                </h3>
              </div>
            </Link>

            {/* Next project */}
            <Link
              href={`/work/${nextSlug}`}
              className="flex max-w-[48%] items-center gap-3 text-right transition-opacity hover:opacity-70"
            >
              <div className="min-w-0">
                <p className="text-sm text-gray-400">
                  Next Project
                </p>

                <h3 className="wrap-break-word font-semibold text-white roboto">
                  {nextProject.title}
                </h3>
              </div>

              <ChevronRight
                size={24}
                className="shrink-0 text-[#fe4c12]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}