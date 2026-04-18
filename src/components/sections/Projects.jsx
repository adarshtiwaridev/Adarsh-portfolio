"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= PROJECT DATA ================= */
const projects = [
{
id: 1,
name: "GNB EV Service Platform",
tech: ["Next.js", "Tailwind", "Razorpay", "MongoDB"],
description: "A multi-role EV service platform with secure dashboards and payments.",
points: [
"Admin, Partner & User dashboards with secure CRUD",
"Razorpay payment gateway with backend validation",
"SSR + SEO optimized architecture",
],
media: [
{ type: "image", src: "/projects/gnb-1.png" },
{ type: "video", src: "/projects/gnb-demo.mp4" },
],
live: "https://www.gridaneobharat.com/",
github: "https://github.com/adarshtiwaridev",
},
{
id: 2,
name: "Corptube – Social Media",
tech: ["Next.js", "Node.js", "MERN", "REST APIs"],
description: "Production-grade features for a scalable social media ecosystem.",
points: [
"Built responsive frontend components",
"Improved backend API performance",
"Collaborated in Agile sprints & reviews",
],
media: [
{ type: "image", src: "/projects/corptube-1.png" },
{ type: "video", src: "/projects/corptube-demo.mp4" },
],
live: "https://www.corptube.in/",
github: "https://github.com/adarshtiwaridev",
},
{
id: 3,
name: "Full-Stack EdTech",
tech: ["MERN", "JWT Auth", "Razorpay", "Cloudinary"],
description: "A complete learning management platform with auth & payments.",
points: [
"Course creation, progress tracking & dashboards",
"JWT authentication with role-based access",
"Optimized MongoDB schema for scalability",
],
media: [
{ type: "image", src: "/projects/edtech-1.png" },
{ type: "video", src: "/projects/edtech-demo.mp4" },
],
live: "#",
github: "#",
},
];

/* ================= COMPONENTS ================= */

function MediaSlider({ media, activeProjectIndex }) {
const [index, setIndex] = useState(0);

useEffect(() => {
setIndex(0);
}, [activeProjectIndex]);

useEffect(() => {
const timer = setInterval(() => {
setIndex((prev) => (prev + 1) % media.length);
}, 5000);
return () => clearInterval(timer);
}, [media.length]);

const active = media[index];

return ( <div className="relative group"> <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

```
  <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-black shadow-2xl">
    <AnimatePresence mode="wait">
      <motion.div
        key={`${activeProjectIndex}-${index}`}
        initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="w-full h-full"
      >
        {active.type === "image" ? (
          <img src={active.src} alt="" className="w-full h-full object-cover" />
        ) : (
          <video src={active.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        )}
      </motion.div>
    </AnimatePresence>

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
      {media.map((_, i) => (
        <div key={i} className="h-1 w-6 rounded-full bg-white/30 overflow-hidden">
          {index === i && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-white"
            />
          )}
        </div>
      ))}
    </div>
  </div>
</div>

);
}

export default function Projects() {
const [active, setActive] = useState(0);
const currentProject = projects[active];

return ( <section id="projects" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-700">

```
  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

  <div className="max-w-6xl mx-auto relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white">
        SELECTED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">WORKS</span>
      </h2>
    </motion.div>

    {/* 🔥 TOP BUTTONS ADDED */}
    <div className="flex flex-wrap gap-3 mb-12">
      {projects.map((proj, i) => (
        <motion.button
          key={proj.id}
          onClick={() => setActive(i)}
          className="relative px-6 py-2 rounded-full text-sm font-semibold overflow-hidden"
        >
          {active === i && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}

          <span className={`relative z-10 ${
            active === i
              ? "text-white dark:text-black"
              : "text-zinc-600 dark:text-zinc-400"
          }`}>
            {proj.name}
          </span>
        </motion.button>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

      <div className="lg:col-span-7 sticky top-24">
        <MediaSlider media={currentProject.media} activeProjectIndex={active} />
      </div>

      <div className="lg:col-span-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                {currentProject.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {currentProject.description}
            </p>

            <ul className="space-y-4">
              {currentProject.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-6">
              <a href={currentProject.live} className="px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-sm">
                Launch Project
              </a>
              <a href={currentProject.github} className="px-8 py-4 rounded-full border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white font-bold text-sm">
                Source Code
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* KEEPING YOUR ORIGINAL DOTS */}
        <div className="mt-16 flex items-center gap-6">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className="py-4">
                <div className={`h-1 rounded-full ${active === i ? 'w-12 bg-blue-600 dark:bg-cyan-400' : 'w-4 bg-zinc-300 dark:bg-zinc-800'}`} />
              </button>
            ))}
          </div>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            0{active + 1} / 0{projects.length}
          </span>
        </div>

      </div>
    </div>
  </div>
</section>

);
}
