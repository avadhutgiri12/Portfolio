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
];

export const notesSeries = {
  title: "Free Notes",
  line: "Practical guides, checklists, and references for builders. Download, read, apply.",
};