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
}

export interface Skill {
  name: string;
  percent: number;
  icon: LucideIcon;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    num: "01",
    title: "LUNAR",
    subtitle: "FINTECH ASSET ENGINE",
    category: "FINTECH DASHBOARD & WEB PLATFORM",
    sideText: "HIGH SPEED & PRECISION ARCHITECTURE",
    year: "2025",
    role: "Lead Product Designer",
    tools: ["Figma", "React", "Design Systems", "Data Viz"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "An institutional multi-currency liquidity terminal offering instantaneous ledger synchronisation, real-time yield analytics, and ultra-low latency transaction tracing for next-gen hedge funds.",
    impact:
      "+140% trading velocity, $420M quarterly volume transacted with zero UI latency bottlenecks.",
    tags: ["Fintech", "SaaS", "Dark Mode UI", "High Density"],
  },

  {
    id: "02",
    num: "02",
    title: "NEXORA",
    subtitle: "MODULAR SAAS SUITE",
    category: "PRODUCT WEBSITE & ECOSYSTEM",
    sideText: "BETTER PRODUCTS FASTER & STREAMLINED",
    year: "2025",
    role: "UI/UX & Brand Director",
    tools: ["Framer", "Three.js", "Tailwind", "Design Tokens"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description:
      "A marketing ecosystem and modular software suite engineered to help enterprise engineering organizations deploy micro-frontends with drag-and-drop resilience.",
    impact:
      "Raised $12M Series A following the launch of the brand identity and interactive design system.",
    tags: ["Design System", "B2B SaaS", "Component Library"],
  },

  {
    id: "03",
    num: "03",
    title: "URBAN CULTURE",
    subtitle: "GLOBAL STREET CHRONICLE",
    category: "STREET LIFESTYLE WORLDWIDE",
    sideText: "MORE THAN A LOOK // AN IDENTITY",
    year: "2026",
    role: "Art Director & Experience Designer",
    tools: ["WebGL", "Photography Direction", "Typography", "Audio"],
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    description:
      "An immersive editorial and video archive documenting youth movements, sound systems, and street aesthetics across Tokyo, London, São Paulo, and Berlin.",
    impact:
      "Recognized as Awwwards Site of the Month with over 650,000 unique international monthly readers.",
    tags: ["Editorial", "Art Direction", "Sound & Motion", "Streetwear"],
  },

  {
    id: "04",
    num: "04",
    title: "AURORA",
    subtitle: "BIOMETRIC HEALTH OS",
    category: "MOBILE EXPERIENCE & HARDWARE COMPANION",
    sideText: "ORGANIC MOTION & INTUITIVE HARMONY",
    year: "2026",
    role: "Principal Mobile UX Designer",
    tools: ["SwiftUI", "Micro-interactions", "Haptics", "Design Tokens"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A discreet mobile operating system and hardware companion designed for circadian rhythm balancing, haptic mindfulness nudges, and real-time autonomic nervous system monitoring.",
    impact:
      "Adopted by 85,000+ active beta testers with a 94% 30-day retention index.",
    tags: ["Mobile UX", "Wearables", "Haptic Design", "iOS"],
  },

  {
    id: "05",
    num: "05",
    title: "KINETIC LAB",
    subtitle: "COMPUTATIONAL SPATIAL UI",
    category: "XR & SPATIAL INTERACTION SUITE",
    sideText: "INTERSECTION OF HUMAN INTENT & CODE",
    year: "2026",
    role: "XR Prototyper & Researcher",
    tools: ["Unity", "VisionOS", "Gesture Rigging", "Shader Graph"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    description:
      "Spatial computing interface research exploring mid-air gesture precision, gaze-driven contextual panels, and minimum eye-fatigue typographic palettes in mixed reality environments.",
    impact:
      "Filed 2 interface patents on ambient gaze prediction and contextual radial menus.",
    tags: ["Spatial UI", "VisionOS", "R&D", "Experimental"],
  },
];

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