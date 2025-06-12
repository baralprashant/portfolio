"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Qualification", href: "#qualification" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => {
        const el = document.querySelector(link.href);
        return {
          name: link.name.toLowerCase(),
          top: el?.getBoundingClientRect().top ?? 9999,
        };
      });

      const current = sections.find((s) => s.top >= 0 && s.top < window.innerHeight / 2);
      if (current) {
        setActiveSection(current.name);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 
          px-3 sm:px-5 md:px-10 py-2 sm:py-3 md:py-4 
          text-sm sm:text-base font-medium rounded-full shadow-xl transition-all duration-300 backdrop-blur-md
          ${scrolled ? "bg-white/90 dark:bg-gray-900/90" : "bg-white/70 dark:bg-gray-900/70"}
        `}
      >

        {/* Nav Links */}
        <div className="flex justify-center items-center whitespace-nowrap gap-2 sm:gap-4 text-md sm:text-md overflow-x-auto px-2">
          {navLinks.map((link) => {
            const linkId = link.href.replace("#", "").toLowerCase();
            const isActive = activeSection === linkId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>

    </nav>
  );
}
