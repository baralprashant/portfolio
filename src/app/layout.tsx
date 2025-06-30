import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GemAI from "@/components/GemAI";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import { Toaster } from "react-hot-toast"; //for cute pop-up

import SessionInitializer from "@/components/SessionInitializer";

export const metadata: Metadata = {
  title: "Prashant Baral | Full-Stack & AI Developer Portfolio",
  description: "Explore Prashant Baral's professional portfolio — showcasing AI/ML projects, Game Development, Academic background, and an embedded AI agent (GemAI).",
  keywords: [
      "Prashant Baral", "AI Developer", "Frontend Developer", 
      "Next.js", "Machine Learning", "Full Stack Developer",
      "Python Developer", "Resume", "Projects", "TypeScript",
      "Pace University", "Pokhara University", "Nepal", "GemAI"
    ],
  robots: "index, follow",
  authors: [{ name: "Prashant Baral", url: "https://prashantbaral.com.np"}],
  openGraph: {
    title: "Prashant Baral | AI Developer Portfolio",
    description: "Meet Prashant — a passionate full-stack and AI/ML developer with industry experience and academic strength.",
    url: "https://prashantbaral.com.np",
    siteName: "Prashant Baral",
    images: [
      {
        url: "https://prashantbaral.com.np/prashant.webp",
        width: 1200,
        height: 630,
        alt: "Prashant Baral",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Baral | Full-Stack & AI Developer",
    description: "Explore Prashant's projects, resume, and GemAI agent.",
    images: ["https://prashantbaral.com.np/prashant.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href="https://prashantbaral.com.np" />
        <link rel="preload" as="image" href="/Prashant.webp" />
        {/* -- Google tag (gtag.js) -- */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HBMTWGXVWD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HBMTWGXVWD', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Prashant Baral",
            url: "https://prashantbaral.com.np",
            sameAs: [
              "https://www.linkedin.com/in/prashant-baral/",
              "https://github.com/baralprashant"
            ],
            "publisher": {
              "@type": "Person",
              "name": "Prashant Baral"
            },
            jobTitle: "AI/ML & Full-Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Pace University"
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Pace University"
            },
            description: "Explore Prashant Baral's portfolio highlighting AI/ML and React-based projects with a built-in AI agent.",
          }),
        }} />

      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white ">
          <ThemeProvider>
              <SessionInitializer />
              <div className="flex flex-col min-h-screen relative">
                <Navbar />
                <ThemeToggleButton />
                <Toaster position="top-center" reverseOrder={false} /> {/* email sent pop-up */}
                <main className="flex-1 w-full pt-24 px-5">{children}</main>
                <Footer />
                <GemAI /> {/* Floating button now correctly inside layout */}
                <ScrollToTopButton />
              </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
