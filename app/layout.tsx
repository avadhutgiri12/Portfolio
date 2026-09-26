import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
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
      <body className={bebasNeue.variable}>
        {children}
      </body>
    </html>
  );
}