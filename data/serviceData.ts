// Centralized data for Services page and its components
// Following the pattern of data/portfolio.ts

export interface Service {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  tone: "peach" | "blue" | "lilac" | "green";
}

export interface ServiceHeroData {
  heroRole: string;
  followLink: {
    text: string;
    href: string;
  };
  heroMicroLeft: {
    text: string;
  };
  heroMicroRight: {
    line1: string;
    line2: string;
  };
  eyebrow: {
    label: string;
    number: string;
  };
  headline: {
    line1: string;
    line2: string;
  };
  heroDescription: string;
  heroActions: {
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };
  wheelCaption: {
    line1: string;
    line2: string;
  };
  heroFooter: {
    left: string;
    center: string;
    right: {
      text: string;
      href: string;
    };
  };
}

export interface ServiceWheelData {
  outerOrbit: string[];
  innerOrbit: string[];
  core: {
    smallText: string;
    mainText: string;
    coreArrow: string;
  };
  wheelPointer: string;
  wheelNumber: string;
}

export interface ServiceSectionData {
  eyebrow: {
    label: string;
    number: string;
  };
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  sectionBottom: {
    text: string;
    link: {
      text: string;
      href: string;
    };
  };
}

export interface ServiceContactData {
  eyebrow: string;
  heading: {
    line1: string;
    line2: string;
  };
  button: {
    text: string;
    href: string;
  };
}

// Service Hero Data
export const SERVICE_HERO_DATA: ServiceHeroData = {
  heroRole: "Web Developer · Machine Learning",
  followLink: {
    text: "LET'S CONNECT",
    href: "#contact",
  },
  heroMicroLeft: {
    text: "Scroll to explore",
  },
  heroMicroRight: {
    line1: "THOUGHTFUL CODE",
    line2: "MEANINGFUL PRODUCTS",
  },
  eyebrow: {
    label: "SERVICES",
    number: "001",
  },
  headline: {
    line1: "Ideas into",
    line2: "digital reality.",
  },
  heroDescription:
    "I build thoughtful digital experiences, intelligent machine-learning solutions, and tools that turn complex problems into useful products.",
  heroActions: {
    primaryButton: {
      text: "Explore services",
      href: "#service-list",
    },
    secondaryButton: {
      text: "Have a project?",
      href: "#contact",
    },
  },
  wheelCaption: {
    line1: "A little logic.",
    line2: "A lot of intention.",
  },
  heroFooter: {
    left: "DESIGN-MINDED DEVELOPMENT",
    center: "BUILD · LEARN · ITERATE",
    right: {
      text: "DISCOVER WHAT I DO",
      href: "#service-list",
    },
  },
};

// Services Data (replaces the array in ServicesPage.tsx)
export const SERVICES_DATA: Service[] = [
  {
    number: "01",
    category: "WEB / DEVELOPMENT",
    title: "Web Development",
    description:
      "Responsive websites and web applications that feel considered, work smoothly, and make complex things easier to use.",
    tags: ["React", "Next.js", "UI Development"],
    tone: "peach",
  },
  {
    number: "02",
    category: "ML / INTELLIGENCE",
    title: "Machine Learning",
    description:
      "Practical ML workflows that transform data into predictions, patterns, and useful decision-making tools.",
    tags: ["Python", "Scikit-learn", "Modeling"],
    tone: "blue",
  },
  {
    number: "03",
    category: "AI / AUTOMATION",
    title: "AI & Automation",
    description:
      "Connected tools and streamlined workflows that reduce repetitive work and help digital processes run smarter.",
    tags: ["APIs", "Python", "Workflow"],
    tone: "lilac",
  },
  {
    number: "04",
    category: "DATA / INSIGHTS",
    title: "Data Solutions",
    description:
      "Clean, clear data analysis and dashboards that make trends easier to understand and communicate.",
    tags: ["Pandas", "SQL", "Dashboards"],
    tone: "green",
  },
];

// Service Hero Wheel Data
export const SERVICE_WHEEL_DATA: ServiceWheelData = {
  outerOrbit: ["STRATEGY", "DESIGN", "INTELLIGENCE", "DEVELOPMENT", "AUTOMATION", "IMPACT"],
  innerOrbit: ["IDEAS", "SYSTEMS", "SOLUTIONS", "EXPERIENCE", "DATA", "DETAIL"],
  core: {
    smallText: "MADE WITH",
    mainText: "purpose.",
    coreArrow: "↗",
  },
  wheelPointer: "↗",
  wheelNumber: "SW / 01",
};

// Services Section Data
export const SERVICE_SECTION_DATA: ServiceSectionData = {
  eyebrow: {
    label: "WHAT I CAN HELP WITH",
    number: "002",
  },
  heading: {
    line1: "Thoughtful work.",
    line2: "Useful outcomes.",
  },
  description:
    "From the first sketch to the final implementation, I bring design thinking and engineering together to solve real problems.",
  sectionBottom: {
    text: "FOUR CAPABILITIES. ONE CURIOUS MIND.",
    link: {
      text: "Have something in mind?",
      href: "#contact",
    },
  },
};

// Service Contact Strip Data
export const SERVICE_CONTACT_DATA: ServiceContactData = {
  eyebrow: "HAVE A GOOD PROBLEM?",
  heading: {
    line1: "Let's make it",
    line2: "meaningful.",
  },
  button: {
    text: "Start a conversation",
    href: "mailto:hello@example.com",
  },
};