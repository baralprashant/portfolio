"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const handleResumeDownload = () => {
    window.open("/files/Resume_Prashant.pdf", "_blank");
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-28 pt-28 pb-16 flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Left Text Content */}
        <div className="text-center md:text-left flex-1">
          <motion.h2
            className="text-5xl font-extrabold tracking-tight text-teal-600 mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About me
          </motion.h2>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hi, I’m <span className="font-semibold text-teal-600">Prashant Baral</span> — a passionate full-stack developer and AI/ML enthusiast. I’m currently pursuing my <span className="font-semibold"> Master’s in Computer Science at Pace University</span>.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I thrive at the intersection of creativity and logic, designing clean UIs backed by powerful technology stacks like React, FastAPI, and machine learning tools. I enjoy building smart, elegant digital experiences that solve real-world problems.
          </p>

          <motion.button
            onClick={handleResumeDownload}
            className="mt-8 px-6 py-3 bg-teal-600 text-lg md:text-xl text-white font-semibold rounded-full shadow-md hover:bg-teal-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.button>
          
        </div>

        {/* Right Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400"
        >
          <Image
            src="/prashant.jpg"
            alt="Prashant Baral"
            width={320}
            height={320}
            className=" rounded-3xl object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
