import {
  Target,
  PenTool,
  Hexagon,
  Box,
  Layout,
  LucideIcon,
  Code2,
  BrainCircuit,
  Palette,
  Globe,
  Sparkles,
} from "lucide-react";
import { socialLinks, SKILL_ICONS } from "./socialIcons";

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

// About Section Data
export interface AboutData {
  portrait: {
    image: string;
    alt: string;
    caption: {
      label: string;
      name: string;
    };
    footer: {
      figureLabel: string;
      role: string;
    };
  };
  greeting: {
    text: string;
    iconBgColor: string;
    icon: LucideIcon;
  };
  introduction: {
    paragraphs: string[];
  };
  specialties: Array<{
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  skills: {
    title: string;
    countLabel: string;
    technologies: Array<{
      name: string;
      short: string;
      icon: React.ComponentType<{ size?: number; color?: string }>;
      color: string;
    }>;
  };
  focus: {
    title: string;
    icon: LucideIcon;
    description: string;
    items: Array<{
      number: string;
      label: string;
    }>;
  };
  personalNote: {
    bgColor: string;
    blurColor: string;
    icon: LucideIcon;
    iconColor: string;
    headline: string;
    subtext: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    backToTop: {
      text: string;
      hoverColor: string;
      buttonHoverColor: string;
    };
  };
}

export const ABOUT_DATA: AboutData = {
  portrait: {
    image: "/about-img.webp",
    alt: "Portrait of Avadhut Giri",
    caption: {
      label: "COMPUTER SCIENCE",
      name: "Avadhut Giri",
    },
    footer: {
      figureLabel: "FIG. 001 — PROFILE",
      role: "Developer & ML Enthusiast",
    },
  },
  greeting: {
    text: "Hello!",
    iconBgColor: "#ffbe38",
    icon: Code2,
  },
  

introduction: {
  paragraphs: [
    "I'm <strong class=\"font-semibold text-[#252630]\">Avadhut Giri</strong>, a Computer Science student, full-stack developer, and machine-learning enthusiast. I build things that work beautifully—and solve real problems. With training in Data Science and Machine Learning from IIT Guwahati and a self-driven approach to learning, I build interactive websites, full-stack applications, and AI-powered solutions.",

    "I care about more than making things work. I care about how they look, how fast they run, and whether people can actually use them. From building <strong class=\"font-semibold text-[#252630]\">CareSight AI</strong>, a real-time fall detection system that alerts caregivers, to developing <strong class=\"font-semibold text-[#252630]\">HomeWorth</strong>, a machine-learning application for house price prediction, I enjoy taking ideas from concept to deployment and making them reliable, efficient, and useful.",

    "Along the way, I've earned first prize at TechNova 2026 and secured second place in the B Zone Inter-Collegiate Chess Tournament. Chess has taught me to think strategically, stay patient, and approach challenges from different angles. I'm always exploring new technologies, refining my craft, and looking for opportunities to build meaningful products through internships and freelance projects."
  ],
},


  specialties: [
    {
      number: "01",
      title: "Web Development",
      description: "Building modern digital experiences.",
      icon: Code2,
    },
    {
      number: "02",
      title: "Machine Learning",
      description: "Turning data into intelligent solutions.",
      icon: BrainCircuit,
    },
    {
      number: "03",
      title: "Creative Development",
      description: "Combining design with technology.",
      icon: Palette,
    },
  ],
  skills: {
    title: "SKILLS",
    countLabel: "06 ITEMS",
    technologies: [
      { name: "React", short: "Re", icon: SKILL_ICONS[0].icon, color: "#ffbe38" },
      { name: "Next.js", short: "N", icon: SKILL_ICONS[1].icon, color: "#ffbe38" },
      { name: "Python", short: "Py", icon: SKILL_ICONS[2].icon, color: "#ffbe38" },
      { name: "TypeScript", short: "TS", icon: SKILL_ICONS[3].icon, color: "#ffbe38" },
      { name: "Machine Learning", short: "ML", icon: SKILL_ICONS[5].icon, color: "#ffbe38" },
      { name: "Tailwind CSS", short: "Tw", icon: SKILL_ICONS[4].icon, color: "#ffbe38" },
    ],
  },
  focus: {
    title: "MY FOCUS",
    icon: Globe,
    description: "Exploring the intersection of software engineering, intelligent systems, and creative problem-solving.",
    items: [
      { number: "01", label: "Full-Stack Development" },
      { number: "02", label: "AI-Powered Applications" },
      { number: "03", label: "Data & ML Solutions" },
      { number: "04", label: "Interactive UI/UX" },
    ],
  },
  personalNote: {
    bgColor: "#252630",
    blurColor: "#ffbe38",
    icon: Sparkles,
    iconColor: "#ffbe38",
    headline: "Always learning.\nAlways building.",
    subtext: "Turning curiosity into projects and ideas into reality.",
  },
  footer: {
    copyright: "AVADHUT GIRI © 2026",
    tagline: "DESIGN · DEVELOPMENT · INTELLIGENCE",
    backToTop: {
      text: "BACK TO TOP",
      hoverColor: "#ffbe38",
      buttonHoverColor: "#ffbe38",
    },
  },
};