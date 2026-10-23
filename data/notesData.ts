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
    slug: "building-with-ai",
    tag: "Guide",
    title: "Building with AI: A Practical Guide",
    description:
      "A comprehensive guide to integrating AI into your web applications, covering APIs, prompt engineering, and production deployment patterns.",
    downloadUrl: "/notes/Building_with_AI.pdf",
    date: "2026-01-15",
  },
];

export const notesSeries = {
  title: "Free Notes",
  line: "Practical guides, checklists, and references for builders. Download, read, apply.",
};