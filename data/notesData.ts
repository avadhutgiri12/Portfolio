export interface Note {
  slug: string;
  tag: string;
  title: string;
  description: string;
  downloadUrl: string;
  coverImage?: string;
  date: string;
}

export const NOTES: Note[] = [
  {
    slug: "building-with-ai",
    tag: "Guide",
    title: "Building with AI: A Practical Guide",
    description:
      "A comprehensive guide to integrating AI into your web applications, covering APIs, prompt engineering, and production deployment patterns.",
    downloadUrl: "/notes/building-with-ai.pdf",
    coverImage: "/images/notes/building-with-ai.jpg",
    date: "2026-01-15",
  },
  {
    slug: "nextjs-performance-checklist",
    tag: "Checklist",
    title: "Next.js Performance Checklist",
    description:
      "50+ actionable items to optimize your Next.js application — from bundle analysis to caching strategies and Core Web Vitals.",
    downloadUrl: "/notes/nextjs-performance-checklist.pdf",
    coverImage: "/images/notes/nextjs-performance.jpg",
    date: "2025-11-20",
  },
  {
    slug: "design-systems-foundations",
    tag: "Reference",
    title: "Design Systems: Foundations & Tokens",
    description:
      "How to build a maintainable design system from scratch — tokens, components, documentation, and governance for scaling teams.",
    downloadUrl: "/notes/design-systems-foundations.pdf",
    coverImage: "/images/notes/design-systems.jpg",
    date: "2025-09-10",
  },
  {
    slug: "typescript-patterns-production",
    tag: "Guide",
    title: "TypeScript Patterns for Production",
    description:
      "Advanced TypeScript patterns used in production codebases: branded types, discriminated unions, template literals, and type-safe APIs.",
    downloadUrl: "/notes/typescript-patterns-production.pdf",
    coverImage: "/images/notes/typescript-patterns.jpg",
    date: "2025-07-05",
  },
  {
    slug: "react-server-components-deep-dive",
    tag: "Deep Dive",
    title: "React Server Components: Deep Dive",
    description:
      "Understanding RSC architecture, streaming, suspense boundaries, and when to use server vs client components in Next.js 15+.",
    downloadUrl: "/notes/react-server-components-deep-dive.pdf",
    coverImage: "/images/notes/rsc-deep-dive.jpg",
    date: "2025-05-12",
  },
  {
    slug: "accessibility-audit-checklist",
    tag: "Checklist",
    title: "Web Accessibility Audit Checklist",
    description:
      "WCAG 2.2 AA compliance checklist with testing tools, common violations, and remediation patterns for modern web applications.",
    downloadUrl: "/notes/accessibility-audit-checklist.pdf",
    coverImage: "/images/notes/accessibility.jpg",
    date: "2025-03-28",
  },
];

export const notesSeries = {
  title: "Free Notes",
  line: "Practical guides, checklists, and references for builders. Download, read, apply.",
};