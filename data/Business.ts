// Business Page Data
// Centralized data for all business page components
// Following the pattern of data/portfolio.ts

// ============================================
// HERO DATA
// ============================================

export interface BizHeroData {
  eyebrow: string;
  heading: {
    line1: string;
    line2: string;
  };
  badge: string;
  description: string;
  actions: {
    primary: {
      text: string;
      href: string;
      icon: string;
    };
    secondary: {
      text: string;
      href: string;
      icon: string;
    };
  };
}

export const BIZ_HERO_DATA: BizHeroData = {
  eyebrow: "Web apps and websites for",
  heading: {
    line1: "Business",
    line2: "That Ships.",
  },
  badge: "Live in Weeks",
  description:
    "I build modern, responsive websites and practical applications that help small businesses and organizations establish an online presence and simplify their daily operations.",
  actions: {
    primary: {
      text: "Start a project",
      href: "#contact",
      icon: "→",
    },
    secondary: {
      text: "Free notes",
      href: "/notes",
      icon: "↓",
    },
  },
};

// ============================================
// ABOUT / TECH STACK DATA
// ============================================

export interface TechStackGroup {
  number: string;
  title: string;
  technologies: string[];
}

export const BIZ_ABOUT_TECH_STACK: TechStackGroup[] = [
  {
    number: "01",
    title: "Frontend",
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    technologies: ["PYTHON", "FASTAPI", "REST APIs"],
  },
  {
    number: "03",
    title: "Database & Cloud",
    technologies: ["SUPABASE", "FIREBASE", "FIRESTORE"],
  },
];

// ============================================
// SERVICES DATA
// ============================================

export interface BizService {
  number: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

// Using the richer service data from serviceData.ts SERVICES_DATA
// but adapted to the simpler BizService interface
export const BIZ_SERVICES: BizService[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive websites and web applications that feel considered, work smoothly, and make complex things easier to use.",
    link: "#projects",
    linkText: "Explore projects",
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "Practical ML workflows that transform data into predictions, patterns, and useful decision-making tools.",
    link: "#projects",
    linkText: "Explore projects",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Connected tools and streamlined workflows that reduce repetitive work and help digital processes run smarter.",
    link: "#projects",
    linkText: "Explore projects",
  },
  {
    number: "04",
    title: "Data Solutions",
    description:
      "Clean, clear data analysis and dashboards that make trends easier to understand and communicate.",
    link: "#projects",
    linkText: "Explore projects",
  },
  {
    number: "05",
    title: "Promo Videos",
    description:
      "I create promo videos using AI for small businesses covering their offers, events and product promotion.",
    link: "#projects",
    linkText: "Explore projects",
  },
  {
    number: "06",
    title: "Management Systems",
    description:
      "Web applications that replace manual records converting it into digital records for easier findings.",
    link: "#projects",
    linkText: "Explore projects",
  },
];

// ============================================
// FREE NOTES DATA (re-export from notesData.ts)
// ============================================

export { NOTES, notesSeries, type Note } from "./notesData";