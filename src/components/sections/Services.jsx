"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Zap,
  Layers,
  Code2,
  Trello,
  ArrowUpRight,
} from "lucide-react";

/* =========================
   Magnetic + Spotlight Card
========================= */

const FancyCard = ({ service, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-14deg", "14deg"]);

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
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className={`relative ${service.className}`}
      style={{ perspective: 1400 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_80px_-10px_rgba(0,0,0,0.6)] dark:bg-white/5"
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-500/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
          style={{
            background: useTransform(
              smoothX,
              [-0.5, 0.5],
              [
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 60%)",
                "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15), transparent 60%)",
              ]
            ),
          }}
        />

        <div
          className="relative z-10 flex h-full flex-col justify-between"
          style={{ transform: "translateZ(80px)" }}
        >
          <div>
            <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-white shadow-xl">
              <Icon size={28} />
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-white">
              {service.title}
            </h3>

            <p className="mt-5 text-base leading-relaxed text-zinc-300">
              {service.description}
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              Discover
            </span>

            <div className="rounded-full bg-white p-3 text-black transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================
   Main Section
========================= */

const Services = () => {
  const services = [
    {
      title: "Next.js Elite",
      description:
        "Ultra-performant digital products powered by modern server components.",
      icon: Zap,
      className: "md:col-span-2",
    },
    {
      title: "MERN Architecture",
      description:
        "Robust full-stack systems engineered for scale and resilience.",
      icon: Layers,
      className: "md:row-span-2",
    },
    {
      title: "Performance Surgery",
      description:
        "Deep optimization for speed, stability and architectural clarity.",
      icon: Code2,
      className: "",
    },
    {
      title: "Product Strategy",
      description:
        "From 0 → 1M ARR with structured technical planning.",
      icon: Trello,
      className: "",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-40 text-white">
      {/* Animated Mesh Glow */}
      <div className="absolute -top-60 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Headline */}
        <div className="mb-32 text-center">
          <h2 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
            <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              DIGITAL ALCHEMY.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-zinc-400">
            We engineer powerful digital systems that don’t just look modern —
            they feel inevitable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:grid-rows-2">
          {services.map((service, index) => (
            <FancyCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
