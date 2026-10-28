import type { Metadata } from "next";
import { Bebas_Neue, Lexend, Roboto } from "next/font/google";
import "./globals.css";
import "./loader.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

// Xmind font for introduction text
const xmind = Lexend({
  variable: "--font-xmind",
  weight: "400",
  subsets: ["latin"],
});

// Roboto font for project names
const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://avadhutgiri.in";
const siteName = "Avadhut Giri";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Avadhut Giri | ML Engineer & Full-Stack Developer",
    template: "%s | Avadhut Giri",
  },
  description:
    "Avadhut Giri — Machine Learning Engineer & Full-Stack Developer. Building AI-powered applications, ML systems, and scalable web apps with Next.js, React, Python, and cloud technologies. Portfolio showcasing projects in ML, Computer Vision, and Web Development.",
  keywords: [
    "Avadhut Giri",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "ML Engineer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Frontend Designer",
    "Computer Vision",
    "Deep Learning",
    "MLOps",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Avadhut Giri", url: siteUrl }],
  creator: "Avadhut Giri",
  publisher: "Avadhut Giri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Avadhut Giri | ML Engineer & Full-Stack Developer",
    description:
      "Machine Learning Engineer & Full-Stack Developer building AI-powered applications and scalable web systems.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Avadhut Giri - ML Engineer & Full-Stack Developer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#080808",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Person/Portfolio
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Avadhut Giri",
    url: siteUrl,
    image: `${siteUrl}/avatar.png`,
    sameAs: [
      "https://github.com/avadhutgiri12",
      "https://www.linkedin.com/in/avadhutgiri181?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    ],
    jobTitle: "Machine Learning Engineer & Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Open to opportunities",
    },
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Next.js",
      "React",
      "Python",
      "TypeScript",
      "Node.js",
      "MLOps",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Git",
      "GitHub",
      "Firebase",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Science",
    },
    description:
      "Machine Learning Engineer & Full-Stack Developer building AI-powered applications, ML systems, and scalable web apps.",
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=assignment_ind,commit,linked_camera&display=block"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${xmind.variable} ${roboto.variable}`}>
        {/* Dark background */}
        <div className="relative bg-[#080808]">

          {/* Navigation */}

          {/* Page content */}
          <main className="relative min-h-[100svh] z-10">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}