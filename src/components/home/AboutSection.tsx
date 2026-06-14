import { motion } from "framer-motion";

import type { AboutItem } from "@/types/home";

type AboutSectionProps = {
  aboutItems: AboutItem[];
};

export function AboutSection({ aboutItems }: AboutSectionProps) {
  return (
    <section id="about" aria-labelledby="about-title" className="section-space">
      <div className="grid-shell space-y-10">
        <div className="space-y-4">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300">
            About Me
          </p>
          <h2 id="about-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A focused developer narrative that connects intent, craft, and impact.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            I translate business requirements into stable product surfaces, build systems engineers can maintain, and keep user experience grounded in clarity.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {aboutItems.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--text-soft)]">
                  {item.category}
                </p>
                {item.date ? (
                  <p className="rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-slate-200">
                    {item.date}
                  </p>
                ) : null}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
