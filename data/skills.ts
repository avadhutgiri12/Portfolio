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