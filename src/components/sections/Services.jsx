"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Zap, Layers, Code2, Trello, ArrowUpRight, Sparkles } from "lucide-react";

/* =========================
    Adaptive Magnetic Card
========================= */

const FancyCard = ({ service, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Increased tilt for a more "3D" premium feel
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`relative group ${service.className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-zinc-200/50 bg-white/40 p-8 shadow-xl backdrop-blur-md transition-colors duration-500 dark:border-white/10 dark:bg-zinc-900/40"
      >
        {/* Alchemy Glow - Changes color on hover */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-transparent to-emerald-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Dynamic Spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100"
          style={{
            background: useTransform(
              smoothX,
              [-0.5, 0.5],
              [
                "radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.15), transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.15), transparent 50%)",
              ]
            ),
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between" style={{ transform: "translateZ(50px)" }}>
          <div>
            <div className="mb-6 inline-flex rounded-2xl bg-zinc-900 p-4 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 dark:bg-white dark:text-black">
              <Icon size={24} />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
              {service.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              {service.description}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500">
              {service.tag || "Innovation"}
            </span>

            <div className="group/btn relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-zinc-900 text-white transition-all duration-300 group-hover:w-28 dark:bg-white dark:text-black">
              <span className="absolute left-4 opacity-0 transition-all duration-300 group-hover/btn:opacity-100 text-xs font-bold">
                EXPLORE
              </span>
              <ArrowUpRight size={18} className="absolute right-2.5 transition-transform duration-300 group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================
    The Master Container
========================= */

const Services = () => {
const services = [
  {
    title: "Modern Web Development",
    description:
      "I build fast, scalable web apps using Next.js and React. From landing pages to full platforms — everything optimized for speed and SEO.",
    icon: Zap,
    className: "md:col-span-2",
    tag: "FAST & SEO",
    hireFor: [
      "Full website or web app from scratch",
      "Landing pages with high performance",
    ],
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end development using MERN stack. I handle backend APIs, databases, and frontend UI — so you get a complete working product.",
    icon: Layers,
    className: "md:row-span-2",
    tag: "FULL STACK",
    hireFor: [
      "Backend API development",
      "Database design & integration",
      "Complete full-stack applications",
    ],
  },
  {
    title: "UI/UX Design & Frontend",
    description:
      "Clean, modern, and responsive interfaces with smooth animations. I focus on user experience that actually converts.",
    icon: Code2,
    className: "",
    tag: "UI/UX",
    hireFor: [
      "Modern UI with React & Tailwind",
      "Responsive design (mobile + desktop)",
      "Frontend performance optimization",
    ],
  },
  {
    title: "Automation & AI Solutions",
    description:
      "I create smart automation tools, bots, and AI-powered systems to save time and improve workflows.",
    icon: Trello,
    className: "",
    tag: "AI & AUTOMATION",
    hireFor: [
      "Automation tools (email bots, workflows)",
      "Web scraping & data automation",
      "AI chatbots & smart features",
    ],
  },
];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-50 py-32 transition-colors duration-700 dark:bg-black">
      {/* Background Alchemical Elements */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-600/20" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-600/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Headline Section */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6 flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-1.5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <Sparkles size={14} className="text-indigo-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
              Services & Capabilities
            </span>
          </motion.div>

          <h2 className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-7xl md:text-8xl">
            DIGITAL{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400">
              ALCHEMY
            </span>
          </h2>
          
          <p className="mt-8 max-w-xl text-lg font-medium text-zinc-500 dark:text-zinc-400">
            Blending technical precision with creative intuition to build software that feels like magic.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          {services.map((service, index) => (
            <FancyCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;