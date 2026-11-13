export interface Note {
  slug: string;
  tag: string;
  title: string;
  description: string;
  downloadUrl: string;
  date: string;
}

export const NOTES: Note[] = [
  {
    slug: "data-science-roadmap",
    tag: "Roadmap",
    title: "Data Science Roadmap 2026: From Zero to Job-Ready",
    description:
      "A 6-step, ~6-month roadmap covering Python, statistics, SQL and Pandas, data visualization, machine learning and portfolio projects, with free resources and a mini project for every step.",
    downloadUrl: "/notes/Data_Science_Roadmap_2026.pdf",
    date: "2026-10-25",
  },
  {
    slug: "github-guide",
    tag: "Guide",
    title: "GitHub for Beginners: Git, Branches and Pull Requests",
    description:
      "A beginner-friendly guide to Git and GitHub covering repositories, commits, branches, pull requests and merging, with the commands and workflow you need to start contributing.",
    downloadUrl: "/notes/GitHub_Guide.pdf",
    date: "2026-10-25",
  },
  {
    slug: "unlimited-videos-claude-code",
    tag: "Guide",
    title: "3 GitHub Repos: Unlimited Videos in Any Style with Claude Code",
    description:
      "A step-by-step guide to generating unlimited videos using Claude Code and three open-source GitHub repositories: HyperFrames, onetake, and Lemo Opuscar, covering setup, prompts, and reel workflows.",
    downloadUrl: "/notes/unlimited_videos_guide.pdf",
    date: "2026-10-26",
  },
  {
    slug: "building-with-ai",
    tag: "Guide",
    title: "Building with AI: Practical Patterns for Developers",
    description:
      "Essential patterns and workflows for integrating AI into your development process, from prompt engineering to building AI-powered features.",
    downloadUrl: "/notes/Building_with_AI.pdf",
    date: "2026-10-23",
  },
  {
    slug: "ai-kaise-sochta-hai",
    tag: "Guide",
    title: "AI Kaise Sochta Hai: Understanding How AI Thinks",
    description:
      "A deep dive into how large language models process information, make decisions, and generate responses — explained in simple terms.",
    downloadUrl: "/notes/AI-kaise-sochta-hai-guide.pdf",
    date: "2026-11-13",
  },
  {
    slug: "clean-your-tv",
    tag: "Guide",
    title: "Clean Your TV: Step-by-Step Guide",
    description:
      "A practical guide to safely cleaning your TV screen and removing dust, smudges, and fingerprints without damaging the display.",
    downloadUrl: "/notes/CleanYourTV_Step_by_Step_Guide.pdf",
    date: "2026-11-13",
  },
  {
    slug: "datacamp-free-access",
    tag: "Guide",
    title: "DataCamp Free Access Week Guide",
    description:
      "How to make the most of DataCamp's free access week — courses to prioritize, learning paths, and tips for maximizing your free trial.",
    downloadUrl: "/notes/DataCamp_Free_Access_Week_Guide.pdf",
    date: "2026-11-13",
  },
  {
    slug: "emergence-world-research",
    tag: "Research",
    title: "Emergence World Research Paper Guide",
    description:
      "A comprehensive guide to understanding the Emergence World research paper — key concepts, methodology, and implications for AI development.",
    downloadUrl: "/notes/Emergence_World_Research_Paper_Guide.pdf",
    date: "2026-11-13",
  },
  {
    slug: "git-undo-cheatsheet",
    tag: "Cheatsheet",
    title: "Git Undo Cheatsheet: Fix Mistakes Fast",
    description:
      "Quick reference for undoing common Git mistakes — uncommitted changes, wrong commits, pushed changes, merge conflicts, and more.",
    downloadUrl: "/notes/git-undo-cheatsheet.pdf",
    date: "2026-11-13",
  },
  {
    slug: "heretic-guide",
    tag: "Guide",
    title: "Heretic Guide: Unconventional Development Wisdom",
    description:
      "A collection of contrarian but practical development principles that challenge conventional wisdom and help you ship better code.",
    downloadUrl: "/notes/heretic_guide.pdf",
    date: "2026-11-13",
  },
  {
    slug: "thinkrail-step-by-step",
    tag: "Guide",
    title: "ThinkRail: Step-by-Step Guide",
    description:
      "Complete walkthrough for setting up and using ThinkRail — from installation to advanced features for structured thinking and note-taking.",
    downloadUrl: "/notes/ThinkRail-Step-by-Step-Guide-1.pdf",
    date: "2026-11-13",
  },
  {
    slug: "unslop-guide",
    tag: "Guide",
    title: "Unslop Guide: Anti-AI Design Principles",
    description:
      "A practical guide to identifying and fixing 'AI slop' in design — making interfaces feel human, intentional, and premium.",
    downloadUrl: "/notes/Unslop_Guide.pdf",
    date: "2026-11-13",
  },
  {
    slug: "3-free-apps-guide",
    tag: "Guide",
    title: "3 Free Apps Guide: Build Without Budget",
    description:
      "Three powerful free applications you can build today — complete with architecture, code samples, and deployment guides.",
    downloadUrl: "/notes/3-free-apps-guide.pdf",
    date: "2026-11-13",
  },
  {
    slug: "dreambeans-guide",
    tag: "Guide",
    title: "Dreambeans Guide: Complete Reference",
    description:
      "Comprehensive guide to Dreambeans — setup, configuration, advanced features, and best practices for getting the most out of the platform.",
    downloadUrl: "/notes/Dreambeans_Guide.pdf",
    date: "2026-11-13",
  },
];

export const notesSeries = {
  title: "Free Notes",
  line: "Practical guides, checklists, and references for builders. Download, read, apply.",
};