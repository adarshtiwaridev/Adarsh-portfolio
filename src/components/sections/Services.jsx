"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Code2, 
  Zap, 
  MessageSquare, 
  Trello, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { LucideIcon } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
}


const SERVICES: Service[] = [
  {
    id: 1,
    title: "Next.js Development",
    description: "Building SEO-optimized, lightning-fast web applications using App Router and Server Components.",
    icon: Zap,
    bullets: ["SSR & Static Generation", "API Route Integration", "Middleware & Auth Implementation"],
  },
  {
    id: 2,
    title: "MERN Stack Development",
    description: "End-to-end full-stack solutions with a focus on scalable MongoDB schemas and robust Node.js backends.",
    icon: Layers,
    bullets: ["Custom REST & GraphQL APIs", "Real-time State Management", "Secure Database Architecture"],
  },
  {
    id: 3,
    title: "Code Audit & Performance",
    description: "Deep dive into your codebase to eliminate bottlenecks and improve Core Web Vitals significantly.",
    icon: Code2,
    bullets: ["Bundle Size Optimization", "Memory Leak Detection", "Refactoring Legacy Patterns"],
  },
  {
    id: 4,
    title: "Freelance Consultation",
    description: "Tailored technical advice for individuals or teams looking to unblock specific development hurdles.",
    icon: MessageSquare,
    bullets: ["Technical Feasibility Studies", "Toolchain Selection", "Best Practices Mentorship"],
  },
  {
    id: 5,
    title: "Startup Tech Strategy",
    description: "Acting as a fractional CTO to help you architect scalable systems from day one.",
    icon: Trello,
    bullets: ["MVP Roadmap Planning", "Cloud Infrastructure (AWS/Vercel)", "Scaling Team Workflows"],
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* Background Gradient Glow - Visible on Hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 transition duration-500 group-hover:opacity-20 blur-sm" />
      
      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950 hover:border-transparent dark:hover:border-transparent shadow-sm hover:shadow-xl">
        
        <div>
          {/* Icon Header */}
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-zinc-900 dark:text-indigo-400">
            <service.icon size={24} strokeWidth={1.5} />
          </div>

          {/* Content */}
          <h3 className="mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {service.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {service.description}
          </p>

          {/* Bullet Points */}
          <ul className="mb-8 space-y-3">
            {service.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 size={14} className="text-indigo-500" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
          Discuss Your Project
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
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
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-5xl"
          >
            Professional Tech Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Scale.</span>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-7 text-zinc-600 dark:text-zinc-400"
          >
            Leveraging modern architecture to build robust digital products. 
            From code audits to full-scale enterprise solutions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* Final "Contact Me" Card for Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 p-8 text-center dark:border-zinc-800"
          >
            <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Need something custom?
            </h3>
            <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
              I'm open to custom software engineering contracts and technical leadership roles.
            </p>
            <a 
              href="mailto:your-email@example.com"
              className="text-sm font-bold text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Send me a message &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;