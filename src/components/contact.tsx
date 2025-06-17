"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { sendEmail } from "@/lib/sendEmail";
import toast from "react-hot-toast"; // for email pop-up handling


export default function Contact() {

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const result = await sendEmail(form.name, form.email, form.subject, form.message);

    if (result.success) {
      alert("Message sent successfully!");
      toast.success("Message sent successfully!"); // for email sent pop-up
      setForm({ name: "", email: "", subject: "", message: "" });

    } else {
      toast.error("❌ Failed to send message. Please try again.");
      console.error("EmailJS error:", result.error);
    }
  } catch (err) {
    toast.error("❌ Something went wrong.");
    console.error(err);
  } finally {
    setLoading(false);
  }
};


  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 py-28 pt-24 pb-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-5xl font-extrabold tracking-tight text-center text-teal-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column - Description & Icons */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I would love to hear from you — whether you have a project idea, a
            question, or just want to connect. Feel free to message me through
            the form or reach out directly via social platforms below.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I am always open to exciting opportunities, collaborations, and new
            ideas. Let&apos;s build something impactful together!
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <a
              href="mailto:shah98176@gmail.com"
              target="_blank"
              className="text-3xl text-gray-700 hover:text-red-500 transition transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-baral/"
              target="_blank"
              className="text-3xl text-gray-700 hover:text-blue-600 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/baralprashant"
              target="_blank"
              className="text-3xl text-gray-700 hover:text-black transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400"
        >
          <motion.h3
            className="text-3xl font-extrabold text-teal-600 mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h3>

          <div className="mb-4">
            <label className="block text-dark font-medium dark:text-white">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-900 placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark font-medium dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-900 placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark font-medium dark:text-white">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-900 placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Your Subject"
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark font-medium dark:text-white">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-900 placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Your Message"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition"
            disabled={loading}
          >
            Send Message 
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
