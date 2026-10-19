import {
  Target,
  PenTool,
  Hexagon,
  Box,
  Layout,
  LucideIcon,
} from "lucide-react";

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  sideText: string;
  year: string;
  role: string;
  tools: string[];
  image: string;
  description: string;
  impact: string;
  tags: string[];
  // New fields for enhanced project showcase
  videoUrl?: string;
  liveSiteUrl?: string;
  repositoryUrl?: string;
  status?: string;
}

export interface Skill {
  name: string;
  percent: number;
  icon: LucideIcon;
}

export const SKILLS_DATA: Skill[] = [
  {
    name: "USER RESEARCH & ETHNOGRAPHY",
    percent: 92,
    icon: Target,
  },
  {
    name: "UI / UX DESIGN & PROTOTYPING",
    percent: 98,
    icon: PenTool,
  },
  {
    name: "DESIGN SYSTEMS & ARCHITECTURE",
    percent: 95,
    icon: Hexagon,
  },
  {
    name: "COMPLEX DATA VISUALIZATION",
    percent: 88,
    icon: Box,
  },
  {
    name: "INTERACTION & MOTION DESIGN",
    percent: 90,
    icon: Layout,
  },
];

export const METRICS_DATA = [
  {
    num: "5+",
    label: "YEARS OF INDUSTRY EXP",
  },
  {
    num: "42+",
    label: "COMPLETED SHIPMENTS",
  },
  {
    num: "28+",
    label: "CLIENTS & VENTURES",
  },
];