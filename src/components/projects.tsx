"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Food Pantry Analysis System",
    image: "/images/projects/2.webp",
    description: "A data visualization system that provides analysis on donation and consumer data for forecasting seasonal trends.",
    tech: "Python, Flask, Scikit-Learn, XGBoost, HTML, CSS",
    github: "https://github.com/baralprashant/FoodPantryAnalysisSystem",
  },
  {
    title: "Online Placement System",
    image: "/images/projects/3.webp",
    description: "A platform for online job and placement management.",
    tech: "PHP, MySQL, HTML, CSS",
    github: "https://github.com/baralprashant/Online-Placement-System",
  },
  {
    title: "Web Platform for ML Models",
    image: "/images/projects/4.webp",
    description: "A unified web platform for deploying and interacting with ML models like heart disease prediction.",
    tech: "Python, Flask, HTML, CSS",
    github: "https://github.com/baralprashant/Web-Platform-For-ML-Models",
  },
  {
    title: "Todo App",
    image: "/images/projects/5.webp",
    description: "A simple to-do application that helps keep track of tasks.",
    tech: "JavaScript, HTML, CSS",
    github: "https://github.com/manisha525/ToDo-List",
  },
  {
    title: "Automatic Street Lighting System",
    image: "/images/projects/6.webp",
    description: "A hardware-software system that detects motion for auto-lighting.",
    tech: "Arduino IDE, IR Sensor, LEDs",
    github: "",
  },
  {
    title: "Basic File Manager",
    image: "/images/projects/1.webp",
    description: "A simple web-based file management tool to upload, view, and manage files in the browser",
    tech: "PHP, HTML, CSS, JavaScript(AJAX), XAMPP",
    github: "https://github.com/baralprashant/Basic-File-Manager-using-PHP/tree/master/basicfilemanager",
  },
 
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="min-h-screen px-4 pt-24 pb-10 bg-transparent text-gray-800 dark:text-gray-200"
    >
      <motion.h2
        className="text-4xl font-extrabold text-teal-600 text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
              unoptimized={project.image.includes("2.webp")}
              loading="lazy"

            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                {project.github ? (
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-2xl font-semibold text-teal-600 hover:underline flex items-center gap-2"
                    >
                      {project.title} <FaGithub />
                    </Link>
                  </div>
                ) : (
                  <h3 className="text-2xl font-semibold text-teal-600">{project.title}</h3>
                )}
              </div>
              <p className="text-gray-800 dark:text-gray-200 mt-2 text-lg">{project.description}</p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-2 italic">Tech Used: {project.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* View More Toggle Button */}
      {projects.length > 6 && (
        <div className="max-w-6xl mx-auto flex justify-end mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className=" text-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:scale-105 transition-transform"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}
