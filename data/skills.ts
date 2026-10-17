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

// export const FRONTEND_SKILLS: SkillItem[] = [
//   { name: "React", category: "FRONTEND" },
//   { name: "Next.js", category: "FRONTEND" },
//   { name: "React Native / Expo", category: "FRONTEND" },
// ];

// export const BACKEND_SKILLS: SkillItem[] = [
//   { name: "Firebase", category: "BACKEND" },
//   { name: "MySQL", category: "BACKEND" },
//   { name: "Google Colab", category: "BACKEND" },
// ];

// export const TOOLING_SKILLS: SkillItem[] = [
//   { name: "Python", category: "TOOLING" },
//   { name: "Machine Learning", category: "TOOLING" },
//   { name: "EDA", category: "TOOLING" },
//   { name: "NumPy", category: "TOOLING" },
//   { name: "Scikit-learn", category: "TOOLING" },
//   { name: "PyTorch", category: "TOOLING" },
//   { name: "TensorFlow", category: "TOOLING" },
//   { name: "Pandas", category: "TOOLING" },
//   { name: "Model Development", category: "TOOLING" },
//   { name: "Git", category: "TOOLING" },
//   { name: "GitHub", category: "TOOLING" },
// ];

// export const ALL_SKILLS = [
//   ...FRONTEND_SKILLS,
//   ...BACKEND_SKILLS,
//   ...TOOLING_SKILLS,
// ];