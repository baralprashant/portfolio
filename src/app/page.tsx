"use client";

import { motion } from "framer-motion";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Qualification from "@/components/qualification";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen px-4 pt-24 pb-10 bg-white dark:bg-gray-900 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex-1 text-center">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Hi, I am <span className="from-teal-500 via-emerald-500 to-lime-400 dark:text-teal-400">Prashant Baral</span>
          </h1>

        <p className="text-lg md:text-xl mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          A Computer Science grad student, full-stack developer & AI/ML enthusiast. I design meaningful and functional digital experiences.
        </p>
      </div>

      {/* Render All Sections Inline */}
      <About />
      <Skills />
      <Projects />
      <Qualification />
      <Services />
      <Contact />
    </motion.div>
  );
}
