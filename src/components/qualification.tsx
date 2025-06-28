"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const qualifications = [
  {
    type: "education",
    title: "Master of Science in Computer Science",
    institution: "Pace University, New York, NY",
    time: "Expected Dec 2025",
    description:
      "Gained expertise in Algorithms, Data Science, and Game Development through advanced coursework and hands-on projects. Transferred from Troy University after one semester.",
  },
  {
    type: "education",
    title: "Master of Science in Computer Science",
    institution: "Troy University, Troy, AL",
    time: "January 2024 - May 2024",
    description:
      "Specialization in Artificial Intelligence. Gained expertise in AI/ML, NLP, Data Mining and Database Management System through advanced coursework and hands-on projects.",
  },
  {
    type: "education",
    title: "Bachelor of Engineering in Information Technology",
    institution: "Pokhara University, Nepal",
    time: "September 2016 - June 2021",
    description:
      "Specialized in Web Technology. Learned core concepts of data structures, OOP, networking, databases, and built several academic projects including web platforms and automation tools.",
  },
  {
    type: "experience",
    title: "Software Engineer",
    institution: "Javra Software Pvt. Ltd.",
    time: "Jan 2022 - June 2023",
    description:
      "Built performant web apps with reusable components and responsive layouts. Optimized frontend performance and participated in daily Agile stand-ups, sprints, and code reviews.",
  },
  {
    type: "experience",
    title: "Progress Intern",
    institution: "Javra Software Pvt. Ltd.",
    time: "Nov 2021 - Feb 2022",
    description:
      "Facilitated 3 Agile team workshops and engaged in over 100+ hours of hands-on learning with React stack, focusing on component design and development best practices.",
  },
];

export default function Qualification() {
  const education = qualifications.filter((q) => q.type === "education");
  const experience = qualifications.filter((q) => q.type === "experience");

  const renderSection = (data: typeof qualifications, label: string) => (
    <>
      <h3 className="text-3xl font-bold text-teal-600 mb-10">{label}</h3>
      <div className="relative border-l-4 border-teal-500 pl-6 mb-16">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-md">
                {item.type === "education" ? <FaGraduationCap /> : <FaBriefcase />}
              </div>
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400"
              >
                <h4 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-1">
                  {item.title}
                </h4>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{item.institution}</p>
                <p className="text-md text-gray-500 mb-2">{item.time}</p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );

  return (
    <motion.section
      id="qualification"
      className="min-h-screen px-4 py-28 pt-24 pb-10 bg-transparent text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-5xl font-extrabold tracking-tight text-center text-teal-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Qualification 
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        {renderSection(education, "Education")}
        {renderSection(experience, "Work Experience")}
      </div>
    </motion.section>
  );
}
