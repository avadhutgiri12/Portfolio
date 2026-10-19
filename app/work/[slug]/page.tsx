import { notFound } from "next/navigation";
import { PROJECT_DATA } from "@/data/ProjectData";
import {
  ChevronLeft,
  ChevronRight,
  Link2,
  PlayCircle,
  Zap,
  Layout,
} from "lucide-react";
import Link from "next/link";
import Overlays from "@/components/Overlays";

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
  className="pointer-events-none absolute inset-0 -z-0"
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
        <div className="mb-8">
          {/* Back to work and project number on same line */}
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/#work"
              className="flex items-center gap-2 text-[#fe4c12] transition-colors hover:text-white"
            >
              <ChevronLeft size={20} />
              Back to Work
            </Link>
            <div className="text-2xl font-bold">{project.num}</div>
          </div>

          {/* Project name on next line with Bebas Neue font */}
          <h1 className="text-9xl font-bold tracking-tight bebas-neue">
            {project.title}
          </h1>
        </div>

        {/* Project introduction */}
        <div className="mb-8">
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveSiteUrl && (
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#fe4c12]/50 bg-[#fe4c12]/20 px-6 py-3 text-[#fe4c12] transition-all hover:bg-[#fe4c12]/30 hover:text-white"
              >
                Visit Live
                <Link2 size={20} />
              </a>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#fe4c12]/50 bg-[#fe4c12]/20 px-6 py-3 text-[#fe4c12] transition-all hover:bg-[#fe4c12]/30 hover:text-white"
              >
                View Code
                <Link2 size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Project video */}
        {project.videoUrl && (
          <div className="mb-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
              <video
                src={project.videoUrl}
                controls
                playsInline
                className="h-full w-full object-contain"
              >
                Your browser does not support video playback.
              </video>

              <PlayCircle
                size={40}
                className="pointer-events-none absolute right-4 top-4 text-[#fe4c12]"
              />
            </div>
          </div>
        )}

        {/* Project impact */}
        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-[#fe4c12]">
            What it does
          </h2>

          <p className="leading-relaxed text-gray-300">
            {project.impact}
          </p>
        </div>

        {/* Key features */}
        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-[#fe4c12]">
            Key Features
          </h2>

          <div className="space-y-3">
            {project.tags.map((tag) => (
              <div key={tag} className="flex items-center gap-3">
                <div className="h-3 w-3 rounded bg-[#fe4c12]" />
                <span className="text-gray-300">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-[#fe4c12]">
            How it works
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Zap size={24} className="mt-1 shrink-0 text-[#fe4c12]" />

              <div>
                <h3 className="mb-1 font-semibold text-gray-100">
                  Instantaneous Processing
                </h3>

                <p className="text-sm text-gray-400">
                  Real-time processing and efficient data handling
                  tailored to the project's requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Layout
                size={24}
                className="mt-1 shrink-0 text-[#fe4c12]"
              />

              <div>
                <h3 className="mb-1 font-semibold text-gray-100">
                  Modular Architecture
                </h3>

                <p className="text-sm text-gray-400">
                  A structured architecture designed for maintainability
                  and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-[#fe4c12]">
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

                <h3 className="break-words font-semibold text-white">
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

                <h3 className="break-words font-semibold text-white">
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