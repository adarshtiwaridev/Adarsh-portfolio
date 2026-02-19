"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Code2,
  Zap,
  MessageSquare,
  Trello,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/* =========================
   DATA
========================= */
const SERVICES = [
  {
    id: 1,
    title: "Next.js Development",
    description:
      "Building SEO-optimized, lightning-fast web applications using App Router and Server Components.",
    icon: Zap,
    bullets: [
      "SSR & Static Generation",
      "API Route Integration",
      "Middleware & Auth Implementation",
    ],
  },
  {
    id: 2,
    title: "MERN Stack Development",
    description:
      "End-to-end full-stack solutions with scalable MongoDB schemas and robust Node.js backends.",
    icon: Layers,
    bullets: [
      "Custom REST & GraphQL APIs",
      "Real-time State Management",
      "Secure Database Architecture",
    ],
  },
  {
    id: 3,
    title: "Code Audit & Performance",
    description:
      "Deep dive into your codebase to eliminate bottlenecks and improve Core Web Vitals.",
    icon: Code2,
    bullets: [
      "Bundle Size Optimization",
      "Memory Leak Detection",
      "Refactoring Legacy Patterns",
    ],
  },
  {
    id: 4,
    title: "Freelance Consultation",
    description:
      "Tailored technical advice to unblock development hurdles.",
    icon: MessageSquare,
    bullets: [
      "Technical Feasibility Studies",
      "Toolchain Selection",
      "Best Practices Mentorship",
    ],
  },
  {
    id: 5,
    title: "Startup Tech Strategy",
    description:
      "Fractional CTO guidance to architect scalable systems from day one.",
    icon: Trello,
    bullets: [
      "MVP Roadmap Planning",
      "Cloud Infrastructure",
      "Scaling Team Workflows",
    ],
  },
];

/* =========================
   CARD COMPONENT
========================= */
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative h-full"
    >
      {/* Hover Glow */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 transition duration-500 group-hover:opacity-20 blur-sm" />

      <div className="relative flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
        <div>
          {/* Icon */}
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-zinc-900 dark:text-indigo-400">
            <Icon size={24} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {service.description}
          </p>

          {/* Bullets */}
          <ul className="space-y-3">
            {service.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                <CheckCircle2 size={14} className="text-indigo-500" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
          Discuss Your Project
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
};

/* =========================
   MAIN COMPONENT
========================= */
const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
          >
            My Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-5xl"
          >
            Professional Tech Services for{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Scale.
            </span>
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
