import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/ui/animated-background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashfak.dev"),
  title: {
    default: "Ashfak Seinudeen | Software Engineering Intern",
    template: "%s | Ashfak Seinudeen",
  },
  description:
    "Full-stack developer building shipped products with React, Node.js, Java & Spring Boot. 3rd-year IT undergraduate at SLIIT, Sri Lanka.",
  keywords: [
    "Software Engineering Intern",
    "Full-stack Developer",
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
    "SLIIT",
    "Sri Lanka",
    "Portfolio",
  ],
  authors: [{ name: "Ashfak Seinudeen" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ashfak Seinudeen",
    title: "Ashfak Seinudeen | Software Engineering Intern",
    description:
      "Full-stack developer building shipped products with React, Node.js, Java & Spring Boot.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashfak Seinudeen | Software Engineering Intern",
    description:
      "Full-stack developer building shipped products with React, Node.js, Java & Spring Boot.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
