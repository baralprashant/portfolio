"use client";

import Hero from "@/components/Hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Qualification from "@/components/qualification";
import Services from "@/components/services";
import Contact from "@/components/contact";
// import GemAI from "@/components/GemAI";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
      <Hero />
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="qualification"><Qualification /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
}
