"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaBrain,
  FaDatabase,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const skills = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-lime-500 text-2xl" />,
    skills: [
      "HTML5", "CSS3", "JavaScript", "Next.js", "React",
      "TypeScript", "Tailwind CSS", "Bootstrap", "Responsive Web Design",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-purple-500 text-2xl" />,
    skills: [
      "Python (FastAPI, Flask, Django)", "Node.js", "Java (OOP, APIs)",
      "C", "C++", "C#", "PHP", "REST APIs", "Progress OpenEdge ABL",
    ],
  },
  {
    title: "AI & ML Technologies",
    icon: <FaBrain className="text-pink-500 text-2xl" />,
    skills: [
      "Scikit-learn", "Pandas", "NumPy", "NLP", "Sentiment Analysis",
      "LLMs (Mistral, ChatGPT)", "Generative AI", "TensorFlow", "XGBoost", "Time Series Forecasting",
    ],
  },
  {
    title: "Data & Visualization",
    icon: <FaDatabase className="text-blue-500 text-2x l" />,
    skills: [
      "SQL", "MySQL", "PostgreSQL", "Jupyter", "Google Colab",
      "Power BI", "Tableau", "Google Suite", "MS 365",
    ],
  },
  {
    title: "Dev Tools & Workflow",
    icon: <FaTools className="text-orange-500 text-2xl" />,
    skills: [
      "Git & GitHub", "TortoiseSVN", "VS Code", "Postman",
      "Linux/Unix", "Agile", "Scrum", "Docker",
    ],
  },
  {
    title: "Deployment & Platforms",
    icon: <FaRocket className="text-yellow-500 text-2xl" />,
    skills: [
      "Firebase", "AWS & EC2", "Vercel", "Unity (Game Dev)",
      "Anaconda", "Visual Studio", "Canva", "Adobe Photoshop",
    ],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="min-h-screen px-4 py-28 pt-24 pb-16 bg-transparent text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-5xl font-extrabold tracking-tight text-center text-teal-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skills.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400"
          >
            <div className="flex items-center gap-3 mb-4">
              {cat.icon}
              <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">{cat.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2 mt-2">
              {cat.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="px-3 py-1 text-lg rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-teal-100 dark:hover:bg-teal-700 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
