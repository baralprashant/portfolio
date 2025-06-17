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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-auto">
      <div
        className={`flex flex-wrap justify-center items-center gap-1 sm:gap-3 md:gap-5 
          px-3 sm:px-5 py-2 text-[12px] sm:text-sm md:text-base font-medium 
          rounded-full shadow-xl transition-all duration-300 backdrop-blur-md 
          ${scrolled ? "bg-white/90 dark:bg-gray-900/90" : "bg-white/70 dark:bg-gray-900/70"}
        `}
      >
        {navLinks.map((link) => {
          const linkId = link.href.replace("#", "").toLowerCase();
          const isActive = activeSection === linkId;

          return (
            <a
              key={link.name}
              href={link.href}
              className={`transition whitespace-nowrap ${
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
    </nav>
  );

}
