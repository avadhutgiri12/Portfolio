export interface SkillItem {
  name: string;
  category: 'FRONTEND' | 'BACKEND' | 'TOOLING';
}

export const FRONTEND_SKILLS: SkillItem[] = [
  { name: "React", category: "FRONTEND" },
  { name: "Next.js", category: "FRONTEND" },
  { name: "React Native / Expo", category: "FRONTEND" },
];

export const BACKEND_SKILLS: SkillItem[] = [
  { name: "Firebase", category: "BACKEND" },
  { name: "MySQL", category: "BACKEND" },
  { name: "Google Colab", category: "BACKEND" },
];

export const TOOLING_SKILLS: SkillItem[] = [
  { name: "Python", category: "TOOLING" },
  { name: "Machine Learning", category: "TOOLING" },
  { name: "EDA", category: "TOOLING" },
  { name: "NumPy", category: "TOOLING" },
  { name: "Scikit-learn", category: "TOOLING" },
  { name: "PyTorch", category: "TOOLING" },
  { name: "TensorFlow", category: "TOOLING" },
  { name: "Pandas", category: "TOOLING" },
  { name: "Model Development", category: "TOOLING" },
  { name: "Git", category: "TOOLING" },
  { name: "GitHub", category: "TOOLING" },
];

export const ALL_SKILLS = [
  ...FRONTEND_SKILLS,
  ...BACKEND_SKILLS,
  ...TOOLING_SKILLS,
];