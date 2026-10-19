import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono, Frijole } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGrid from "@/components/MouseGrid";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

// JetBrains Mono font for footer text
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: "400",
  subsets: ["latin"],
});

// Frijole font for hero text
const frijole = Frijole({
  variable: "--font-frijole",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Avadhut Giri | Machine Learning Enthusiast",
  description:
    "Portfolio of Avadhut Giri — Computer Science student and Machine Learning enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={`${bebasNeue.variable} ${jetBrainsMono.variable} ${frijole.variable}`}>
        {/* Dark background */}
        <div className="relative bg-[#080808]">
          {/* Background mouse effect */}
          <MouseGrid />

          {/* Navigation */}
          <Navbar />

          {/* Page content */}
          <main className="relative min-h-[100svh] z-10">
            {children}
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}