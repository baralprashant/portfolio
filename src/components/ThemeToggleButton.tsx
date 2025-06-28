"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed top-20 right-4 md:right-6 z-40 p-2 w-10 h-10 rounded-full border border-gray-900 dark:border-yellow-400 bg-gray-700 dark:bg-gray-700 text-gray-100 dark:text-yellow-500 shadow-md hover:scale-105 transition-all flex items-center justify-center"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
