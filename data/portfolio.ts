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
    label: "Years of industry exp",
  },
  {
    num: "42+",
    label: "Completed shipments",
  },
  {
    num: "28+",
    label: "Clients & ventures",
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
  businessCta: {
    text: string;
    href: string;
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
    accentColor: "#ffbe38",
  },

  // Main headline
  headline: {
    line1: "I BUILD WEB APPS",
    line2: "AND ML THAT",
    line2Color: "#ffbe38",
    line3: "ACTUALLY SHIP.",
  },

  // Status tags
  specialties: [
    "Web development",
    "Machine learning",
    "Creative design",
  ],

  // CTA Button
  cta: {
    text: "Portfolio",
    href: "#about",
    hoverBgColor: "#ffbe38",
    iconBgColor: "#ffbe38",
  },

  // Business CTA Button
  businessCta: {
    text: "Business",
    href: "/business",
  },

  // Supporting text
  description: "CS student shipping full-stack apps and ML projects, like CareSight AI fall detection and the HomeWorth house-price model.",

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
      label: "Computer science",
      name: "Avadhut Giri",
    },
    footer: {
      figureLabel: "Fig. 01 — Profile",
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
    title: "Skills",
    countLabel: "6 items",
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
    title: "My focus",
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
    subtext: "Completed the IIT Guwahati Data Science course. Building freelance sites for small businesses.",
  },
  footer: {
    copyright: "Avadhut Giri © 2026",
    tagline: "Design · Development · ML",
    backToTop: {
      text: "Back to top",
      hoverColor: "#ffbe38",
      buttonHoverColor: "#ffbe38",
    },
  },
};

// What I Do Section Data
export interface Service {
  id: string;
  number: string;
  title: string;
  heading: string;
  description: string;
  tags: string[];
}

export const SERVICES_DATA: Service[] = [
  {
    id: "1",
    number: "01",
    title: "Web development",
    heading: "Web Development",
    description: "I create modern, responsive and high-performance websites with clean interfaces and smooth user experiences.",
    tags: ["Web development", "01"],
  },
  {
    id: "2",
    number: "02",
    title: "Full stack development",
    heading: "Full Stack Development",
    description: "End-to-end development from database design to frontend deployment, building scalable full-stack applications.",
    tags: ["Full stack", "02"],
  },
  {
    id: "3",
    number: "03",
    title: "Machine learning",
    heading: "Machine Learning",
    description: "I build and train machine learning models using real-world datasets, feature engineering and model evaluation.",
    tags: ["Machine learning", "03"],
  },
  {
    id: "4",
    number: "04",
    title: "Intelligent systems",
    heading: "Intelligent Systems",
    description: "I develop practical ML solutions and transform trained models into usable applications and intelligent systems.",
    tags: ["Intelligent systems", "04"],
  },
  {
    id: "5",
    number: "05",
    title: "Data & database",
    heading: "Data & Database",
    description: "I work with data processing, visualization and databases to turn raw information into useful insights.",
    tags: ["Data & database", "05"],
  },
];