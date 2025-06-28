"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaCode, FaPython, FaRobot, FaGamepad} from "react-icons/fa";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 py-28 pt-28 pb-10 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-5xl font-extrabold tracking-tight text-center text-teal-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        <ServiceCard
          Icon={FaCode}
          title="Frontend Developer"
          description="Specializing in building responsive, and visually appealing interfaces using modern frameworks like React, Next.js and Tailwind CSS. Skilled in translating design into smooth user experiences across devices."
        />

        <ServiceCard
          Icon={FaPython}
          title="Backend Developer"
          description="Developing robust server-side logic, APIs, and microservices using Python, Node.js, and C++. Experienced in secure data handling, database design, and performance optimization."
        />

        <ServiceCard
          Icon={FaRobot}
          title="AI/ML Developer"
          description="Solving real-world problems using AI and Machine Learning. Experienced in Data Science, LLMs, and predictive modeling using tools like Scikit-learn, TensorFlow, and Jupyter."
        />
        <ServiceCard
          Icon={FaGamepad}
          title="Game Developer"
          description="Creating 2D/3D games using Unity and C#, with strong knowledge of gameplay mechanics, physics, and interactive design."
        />

      </div>
    </motion.section>
  );
}

function ServiceCard({
  Icon,
  title,
  description,
}: {
  Icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-300 text-teal-600 dark:text-teal-900 mb-4 mx-auto shadow group-hover:shadow-lg transition">
        <Icon className="text-2xl" />
      </div>
      <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-400 mb-2">{title}</h3>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
