import {
  Target,
  PenTool,
  Hexagon,
  Box,
  Layout,
  LucideIcon,
} from "lucide-react";
import { socialLinks } from "./socialIcons";

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

export { socialLinks };

// Hero Section Data
export interface HeroData {
  backgroundImage: string;
  logo: {
    name: string;
    accent: string;
    size: number;
  };
  contactButton: {
    text: string;
  };
  intro: {
    name: string;
    title: string;
    accentColor: string;
  };
  headline: {
    line1: string;
    line2: string;
    line2Color: string;
    line3: string;
  };
  specialties: string[];
  cta: {
    text: string;
    href: string;
    hoverBgColor: string;
    iconBgColor: string;
  };
  description: string;
  scrollIndicator: {
    text: string;
  };
}

export const HERO_DATA: HeroData = {
  // Background Image
  backgroundImage: "/images/new-hero-img.png",

  // Pill Logo
  logo: {
    name: "Avadhut",
    accent: "#ffbe38",
    size: 16,
  },

  // Top right button
  contactButton: {
    text: "Get in touch",
  },

  // Intro label
  intro: {
    name: "Avadhut Giri",
    title: "Developer & ML Enthusiast",
    accentColor: "rgb(258, 190, 56)",
  },

  // Main headline
  headline: {
    line1: "I BUILD DIGITAL",
    line2: "EXPERIENCES",
    line2Color: "rgb(258, 190, 56)",
    line3: "THAT STAND OUT.",
  },

  // Status tags
  specialties: [
    "WEB DEVELOPMENT",
    "MACHINE LEARNING",
    "CREATIVE DESIGN",
  ],

  // CTA Button
  cta: {
    text: "Portfolio",
    href: "#about",
    hoverBgColor: "rgb(258, 190, 56)",
    iconBgColor: "rgb(258, 190, 56)",
  },

  // Supporting text
  description: "Turning ideas into interactive digital experiences through development, design, and intelligent technology.",

  // Scroll indicator
  scrollIndicator: {
    text: "Scroll to explore",
  },
};