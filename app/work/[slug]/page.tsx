import { notFound } from "next/navigation";
import { PROJECT_DATA } from "@/data/ProjectData";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import Overlays from "@/components/Overlays";

// Import case study JSON files for howItWorks data
import housePriceData from "@/case-studies/01-house-price-prediction-system.json";
import fallDetectionData from "@/case-studies/02-fall-detection.json";
import libraryHubData from "@/case-studies/03-libraryhub.json";

// Map of project IDs to their corresponding JSON data
const caseStudyMap: Record<string, any> = {
  "01": housePriceData,
  "02": fallDetectionData,
  "03": libraryHubData,
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

  const videoSrc = caseStudyMap[project.id]?.videoUrl;
  const howItWorks = caseStudyMap[project.id]?.extra?.howItWorks;
  const metrics = caseStudyMap[project.id]?.extra?.metrics;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white font-sans antialiased">
      <Overlays />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/#work"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ChevronLeft size={18} />
              All work
            </Link>
            <span className="text-sm font-mono text-white/40 tabular-nums">
              {project.num} / {PROJECT_DATA.length.toString().padStart(2, '0')}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight roboto leading-[1.05]">
            {project.title}
          </h1>
        </div>

        {/* Hero: Video left, intro right */}
        <div className="mb-20 md:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Video/Preview — 7/12 */}
            <div className="lg:col-span-7">
              {videoSrc ? (
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video rounded-xl bg-[#111] object-cover"
                />
              ) : project.image ? (
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111]">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="aspect-video rounded-xl bg-[#111] flex items-center justify-center text-white/40 font-mono text-sm">
                  Preview unavailable
                </div>
              )}
            </div>

            {/* Intro — 5/12 */}
            <div className="lg:col-span-5 flex flex-col justify-start pt-2 lg:pt-0">
              <p className="mb-8 text-white/70 leading-relaxed text-base md:text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {project.liveSiteUrl && (
                  <a
                    href={project.liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-[#fe4c12] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#e84510] active:scale-[0.98]"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}

                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-white/30 hover:bg-white/5 active:scale-[0.98]"
                  >
                    <GitBranch size={16} />
                    Source
                  </a>
                )}
              </div>

              {/* Subtitle/meta */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/50 font-mono">
                <span>{project.year}</span>
                <span className="text-white/20">·</span>
                <span>{project.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-20 md:mb-24">
          <h2 className="mb-6 text-3xl md:text-4xl font-light tracking-tight roboto">
            How {project.title} works
          </h2>
          <p className="max-w-3xl leading-relaxed text-white/70 text-base md:text-lg">
            {project.impact}
          </p>
        </div>

        {/* Key Features + How it works */}
        <div className="mb-20 md:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Key Features — 5/12 */}
            <div className="lg:col-span-5">
              <h3 className="mb-4 text-sm font-semibold text-white/60 uppercase tracking-wider font-mono">
                Key features
              </h3>
              <ul className="space-y-3" role="list">
                {project.tags.map((tag, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-white/10 font-mono text-[10px] text-white/40">
                      {index + 1}
                    </span>
                    <code className="text-sm font-mono bg-white/5 px-2 py-0.5 rounded text-white/90">
                      {tag}
                    </code>
                  </li>
                ))}
              </ul>
            </div>

            {/* How it works — 7/12 */}
            <div className="lg:col-span-7">
              <h3 className="mb-4 text-sm font-semibold text-white/60 uppercase tracking-wider font-mono">
                How it works
              </h3>
              {howItWorks && howItWorks.length > 0 ? (
                <ol className="space-y-5" role="list">
                  {howItWorks.map((item: any, index: number) => (
                    <li key={index} className="relative pl-8 md:pl-10">
                      <span className="absolute left-0 top-1 font-mono text-lg font-medium text-white/30 tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h4 className="mb-1.5 font-medium text-white roboto">
                        {item.title}
                      </h4>
                      <p className="text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-white/50 font-mono text-sm">No technical breakdown available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="mb-20 md:mb-24">
            <h3 className="mb-6 text-sm font-semibold text-white/60 uppercase tracking-wider font-mono">
              Metrics
            </h3>
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" role="list">
              {metrics.map((metric: any, index: number) => (
                <div key={index} className="rounded-lg border border-white/10 p-4 md:p-6 bg-white/2">
                  <dt className="mb-1.5 text-xs font-semibold text-white/50 uppercase tracking-wider font-mono">
                    {metric.label}
                  </dt>
                  <dd className="text-xl md:text-2xl font-medium text-white roboto tabular-nums">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Stack */}
        <div className="mb-20 md:mb-24">
          <h3 className="mb-4 text-sm font-semibold text-white/60 uppercase tracking-wider font-mono">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2" role="list">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center px-3 py-1.5 rounded bg-white/5 text-sm font-mono text-white/80 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Project navigation */}
        <nav className="pt-8 border-t border-white/10" aria-label="Project navigation">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link
              href={`/work/${prevSlug}`}
              className="flex items-center gap-3 w-full md:w-auto text-left transition-opacity hover:opacity-70 group"
            >
              <ChevronLeft
                size={20}
                className="shrink-0 text-white/50 group-hover:text-white transition-colors"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider font-mono">
                  Previous
                </p>
                <h3 className="mt-0.5 font-medium text-white roboto truncate">
                  {prevProject.title}
                </h3>
              </div>
            </Link>

            <Link
              href={`/work/${nextSlug}`}
              className="flex items-center gap-3 w-full md:w-auto text-right transition-opacity hover:opacity-70 group"
            >
              <div className="min-w-0 text-right">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider font-mono">
                  Next
                </p>
                <h3 className="mt-0.5 font-medium text-white roboto truncate">
                  {nextProject.title}
                </h3>
              </div>
              <ChevronRight
                size={20}
                className="shrink-0 text-white/50 group-hover:text-white transition-colors"
                aria-hidden="true"
              />
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}