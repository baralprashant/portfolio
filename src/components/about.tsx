"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {

  const handleResumeDownload = async () => {
    
    window.open("/files/PrashantResume.pdf", "_blank");

    const sessionId = localStorage.getItem("sessionId");

    fetch("http://3.149.229.174:8080/log-session-event/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "clicked_resume",
        details: "from about section",
        session_id: sessionId,
      }),
    });
    
  };

    useEffect(() => {
      const sessionId = localStorage.getItem("sessionId");

      fetch("http://3.149.229.174:8080/log-page-visit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ page: "about", session_id: sessionId }),
      });
    }, []);



  
  
  return (
    <section id="about" className="min-h-screen px-4 pt-24 pb-10 bg-transparent">        
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-teal-600 mb-12">
        About Me
      </h2>
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
      
        {/* Left: Text Content */}
        <div className="flex-1 text-left">

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hi, I am <span className="font-semibold text-teal-600">Prashant Baral</span> — a passionate full-stack developer and AI/ML enthusiast. I am currently pursuing my <span className="font-semibold"> Master’s in Computer Science at Pace University</span>.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I thrive at the intersection of creativity and logic, designing clean UIs backed by powerful technology stacks like React, FastAPI, and machine learning tools. I enjoy building smart, elegant digital experiences that solve real-world problems.
          </p>

          <motion.button
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="text-lg mt-8 inline-block bg-gradient-to-r from-teal-500 via-emerald-500 to-lime-400 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-teal-500/20"
          >
            View Resume
          </motion.button>

        </div>

        {/* Right: Image with Glowing Aura */}
        <div className="relative w-[300px] h-[300px] md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-lg z-0 scale-125 blur-xl
              bg-gradient-to-br from-lime-400 via-purple-500 to-pink-400
              opacity-30 dark:opacity-40"
          />

          {/* Profile Image */}
          <div className="will-change-transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3">
            <Image
              src="/prashant.webp"
              alt="Prashant Baral"
              width={256}
              height={256}
              className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>

        </div>

      </motion.div>
    </section>
  );
}
