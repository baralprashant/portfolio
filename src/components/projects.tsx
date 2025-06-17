"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Food Pantry Analysis System",
    image: "/images/projects/2.gif",
    description: "A data visualization system that provides analysis on donation and consumer data for forecasting seasonal trends.",
    tech: "Python, Flask, Scikit-learn, XGBoost, HTML, CSS",
    github: "https://github.com/baralprashant/FoodPantryAnalysisSystem",
  },
  {
    title: "Online Placement System",
    image: "/images/projects/3.jpg",
    description: "A platform for online job and placement management.",
    tech: "PHP, MySQL, HTML, CSS",
    github: "https://github.com/baralprashant/Online-Placement-System",
  },
  {
    title: "Web Platform for ML Models",
    image: "/images/projects/4.jpg",
    description: "A unified web platform for deploying and interacting with ML models like heart disease prediction.",
    tech: "Python, Flask, HTML, CSS",
    github: "https://github.com/baralprashant/Web-Platform-For-ML-Models",
  },
  {
    title: "Todo App",
    image: "/images/projects/5.jpg",
    description: "A simple to-do application that helps keep track of tasks.",
    tech: "JavaScript, HTML, CSS",
    github: "https://github.com/manisha525/ToDo-List",
  },
  {
    title: "Automatic Street Lighting System",
    image: "/images/projects/6.jpg",
    description: "A hardware-software system that detects motion for auto-lighting.",
    tech: "Arduino IDE, IR Sensor, LEDs",
    github: "",
  },
  {
    title: "Basic File Manager",
    image: "/images/projects/1.jpg",
    description: "A simple web-based file management tool to upload, view, and manage files in the browser",
    tech: "PHP, HTML, CSS, JavaScript(AJAX), XAMPP",
    github: "https://github.com/baralprashant/Basic-File-Manager-using-PHP/tree/master/basicfilemanager",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen px-4 py-28 pt-24 pb-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-5xl font-extrabold tracking-tight text-center text-teal-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-xl font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-2"
                  >
                    {project.title} <FaGithub />
                  </Link>
                ) : (
                  <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">{project.title}</h3>
                )}
              </div>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>
              <p className="text-lg text-gray-500 dark:text-gray-300 mt-2 italic">Tech Used: {project.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
