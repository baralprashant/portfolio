"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { sendEmail } from "@/lib/sendEmail";
import toast from "react-hot-toast"; // for email pop-up handling
import { logErrorEvent } from "@/lib/logError";  // for error log
import { logSessionEvent } from "@/lib/logSessionEvent";


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
    //  alert("Message sent successfully!");
      toast.success("Message sent successfully!"); // for email sent pop-up
      setForm({ name: "", email: "", subject: "", message: "" });

      // NEW: Log to backend PostgreSQL
      const sessionId = localStorage.getItem("sessionId");
      const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

      await fetch(`${backendURL}/submit-contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          session_id: sessionId, }),
      });
      
    } else {
     // alert("❌ Failed to send message. Please try again.");
      toast.error("❌ Failed to send message. Please try again.");
      console.error("EmailJS error:", result.error);
      await logErrorEvent(result.error, "EmailJS Failure");
    }
  } catch (err) {
 //   alert("❌ Something went wrong.");
    toast.error("❌ Something went wrong.");
    console.error(err);
    await logErrorEvent(err, "Contact Form Submit");
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
      className="min-h-screen px-4 pt-24 pb-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-teal-600 mb-12">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column - Description & Icons */}
        <div className="space-y-6">
          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
            I would love to hear from you — whethis you have a project idea, a
            question, or just want to connect. Feel free to email me at <a href="mailto:thedashh7@gmail.com"
              onClick={() => logSessionEvent("clicked_social", "email from contact")}
              className="text-xl text-teal-500 hover:text-teal-600 transition transform hover:scale-100">
              thedashh7@gmail.com</a> 
            , contact me through the form or reach out directly via social platforms below.
          </p>
          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
            I am always open to exciting opportunities, collaborations, and new
            ideas. Let&apos;s build something impactful together!
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <a
              href="mailto:thedashh7@gmail.com"
              target="_blank"
              className="text-3xl text-gray-700 hover:text-red-500 transition transform hover:scale-110"
              aria-label="Email"
              onClick={() => logSessionEvent("clicked_social", "email from contact")}
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-baral/"
              target="_blank"
              className="text-3xl text-gray-700 hover:text-teal-600 transition transform hover:scale-110"
              aria-label="LinkedIn"
              onClick={() => logSessionEvent("clicked_social", "linkedin from contact")}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/baralprashant"
              target="_blank"
              className="text-3xl text-gray-700 hover:text-gray-800 transition transform hover:scale-110"
              aria-label="GitHub"
              onClick={() => logSessionEvent("clicked_social", "github from contact")}
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
          className="bg-white dark:bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-400">
          <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-500 mb-6">
            Send me a Message!
          </h3>

          <div className="mb-4">
             <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="text-xl w-full mt-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-900 placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="text-xl w-full mt-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-900 placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="text-xl w-full mt-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-900 placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Subject"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="text-xl w-full mt-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-900 placeholder-gray-500 text-gray-900 dark:text-white"
              placeholder="Type Your Message Here..."
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="text-xl  w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition"
            disabled={loading}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
