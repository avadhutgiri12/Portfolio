// Centralized data for the Services page and its components.
// Copy is built only from facts already on the site (portfolio.ts, KineticContact).

export interface Service {
  /** Stable anchor id for the card, used by the hero dial. */
  id: string;
  number: string;
  category: string;
  title: string;
  /** Short name shown on the hero dial. */
  dialLabel: string;
  description: string;
  tags: string[];
}

export interface ServiceHeroData {
  heroRole: string;
  followLink: {
    text: string;
    href: string;
  };
  eyebrow: string;
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
    secondaryLink: {
      text: string;
      href: string;
    };
  };
  dialCaption: string;
  heroFooter: {
    left: string;
    right: string;
  };
}

export interface ServiceSectionData {
  eyebrow: string;
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

// Service Hero Data
export const SERVICE_HERO_DATA: ServiceHeroData = {
  heroRole: "Web developer · Machine learning",
  followLink: {
    text: "Contact",
    href: "#contact",
  },
  eyebrow: "Services",
  headline: {
    line1: "Websites, ML models",
    line2: "and promo videos",
  },
  heroDescription:
    "For small businesses and teams who need something built, from the first sketch to the live site.",
  heroActions: {
    primaryButton: {
      text: "See services",
      href: "#service-list",
    },
    secondaryLink: {
      text: "Start a project",
      href: "#contact",
    },
  },
  dialCaption: "Scroll to turn the dial, or pick a service",
  heroFooter: {
    left: "Next.js · Python · scikit-learn · SQL",
    right: "Six services below",
  },
};

// Services Data
export const SERVICES_DATA: Service[] = [
  {
    id: "service-web",
    number: "01",
    category: "Web development",
    title: "Web development",
    dialLabel: "Web",
    description:
      "Responsive websites and web apps in React and Next.js, built for small businesses and full-stack projects.",
    tags: ["React", "Next.js", "UI development"],
  },
  {
    id: "service-ml",
    number: "02",
    category: "Machine learning",
    title: "Machine learning",
    dialLabel: "ML",
    description:
      "Models in Python and scikit-learn that turn data into predictions, like property price estimates or real-time fall detection.",
    tags: ["Python", "Scikit-learn", "Modeling"],
  },
  {
    id: "service-automation",
    number: "03",
    category: "AI and automation",
    title: "AI and automation",
    dialLabel: "Automation",
    description:
      "Python scripts and API connections that take repetitive steps off your plate.",
    tags: ["APIs", "Python", "Workflow"],
  },
  {
    id: "service-data",
    number: "04",
    category: "Data and dashboards",
    title: "Data solutions",
    dialLabel: "Data",
    description:
      "Cleaning, analysis and dashboards in Pandas and SQL, so trends are easy to read and share.",
    tags: ["Pandas", "SQL", "Dashboards"],
  },
  {
    id: "service-video",
    number: "05",
    category: "Video and marketing",
    title: "Promo videos",
    dialLabel: "Video",
    description:
      "Promo videos for small businesses: offers, events and product launches, made with AI tools.",
    tags: ["AI video", "Marketing", "Content creation"],
  },
  {
    id: "service-records",
    number: "06",
    category: "Management systems",
    title: "Management systems",
    dialLabel: "Records",
    description:
      "Web apps that replace paper records with a searchable database.",
    tags: ["Web apps", "Database", "Automation"],
  },
];

// Services Section Data
export const SERVICE_SECTION_DATA: ServiceSectionData = {
  eyebrow: "What I can help with",
  heading: {
    line1: "Six ways",
    line2: "I can help",
  },
  description:
    "Pick the one closest to your project. If it spans a few, that is normal. Tell me what you need and we will scope it together.",
  sectionBottom: {
    text: "Not sure which one fits?",
    link: {
      text: "Tell me about your project",
      href: "#contact",
    },
  },
};
