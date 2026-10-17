export type Skill = {
  name: string;
};

export const FRONTEND_SKILLS: Skill[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Framer Motion" }
];

export const BACKEND_SKILLS: Skill[] = [
  { name: "Node.js" },
  { name: "Python" },
  { name: "Firebase" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "REST API" },
  { name: "Express.js" },
  { name: "Django" }
];

export const TOOLING_SKILLS: Skill[] = [
  { name: "GSAP" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Vercel" },
  { name: "VS Code" },
  { name: "Figma" },
  { name: "Docker" },
  { name: "Webpack" }
];

// Optional: Keep the original SKILLS_DATA for backward compatibility if needed elsewhere
export type SkillCategory = {
  id: string;
  number: string;
  title: string;
  accentColor: string;
  skills: string[];
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    accentColor: "#C65335", // Warm orange/rust for frontend
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Framer Motion"
    ]
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    accentColor: "#87996D", // Muted green for backend
    skills: [
      "Node.js",
      "Python",
      "Firebase",
      "MySQL",
      "MongoDB",
      "REST API",
      "Express.js",
      "Django"
    ]
  },
  {
    id: "tooling",
    number: "03",
    title: "Tooling",
    accentColor: "#6686A4", // Muted blue for tooling
    skills: [
      "GSAP",
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Figma",
      "Docker",
      "Webpack"
    ]
  }
];