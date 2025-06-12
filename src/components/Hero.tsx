"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleResumeDownload = () => {
    window.open("/files/Resume_Prashant.pdf", "_blank");
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="text-teal-600 dark:text-teal-400">Prashant Baral</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-3xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A Computer Science grad student, full-stack developer & AI/ML enthusiast. I design meaningful and functional digital experiences.
      </motion.p>
    </motion.section>
  );
}
