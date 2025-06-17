import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import GemAI from "@/components/GemAI";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";


import { Toaster } from "react-hot-toast"; //for cute pop-up



export const metadata: Metadata = {
  title: "Prashant's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />

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
      </head>
      <body className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white scroll-smooth">
          <ThemeProvider>
              <div className="flex flex-col min-h-screen relative">
                <Navbar />
                <ThemeToggleButton />
                <Toaster position="top-center" reverseOrder={false} /> {/* email sent pop-up */}
                <main className="flex-1 w-full pt-24 px-5">{children}</main>
                <Footer />
                <ScrollToTopButton />
                {/* <GemAI /> Floating button now correctly inside layout */}
              </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
