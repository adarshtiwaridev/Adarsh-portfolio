"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { CaseStudy } from "@/types/home";

type CaseStudiesSectionProps = {
  caseStudies: CaseStudy[];
};

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="section-space">
      <div className="grid-shell space-y-10">
        <div className="space-y-4">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300">
            Case studies
          </p>
          <h2 id="case-studies-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Deeper stories for the projects that matter most.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Every major project includes the problem, architecture, solution, and results so recruiters can understand the engineering value.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {caseStudies.map((study, index) => (
              <button
                key={study.projectName}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`block w-full rounded-[1.6rem] border px-5 py-4 text-left transition ${
                  activeIndex === index
                    ? "border-cyan-400/50 bg-[color:var(--surface-strong)]/90"
                    : "border-white/10 bg-[color:var(--surface)]/80 hover:border-white/20 hover:bg-[color:var(--surface)]/90"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-white">{study.projectName}</span>
                  <span className="text-sm text-slate-400">View details</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300 line-clamp-2">
                  {study.problem}
                </p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={caseStudies[activeIndex]?.projectName ?? "study"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-8 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"
            >
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
                    {caseStudies[activeIndex]?.projectName}
                  </span>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <article>
                    <h3 className="text-xl font-semibold text-white">Problem</h3>
                    <p className="mt-3 text-slate-300">{caseStudies[activeIndex]?.problem}</p>
                  </article>
                  <article>
                    <h3 className="text-xl font-semibold text-white">Architecture</h3>
                    <p className="mt-3 text-slate-300">{caseStudies[activeIndex]?.architecture}</p>
                  </article>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <article>
                    <h3 className="text-lg font-semibold text-white">Features</h3>
                    <ul className="mt-3 space-y-2 text-slate-300">
                      {caseStudies[activeIndex]?.features.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                  <article>
                    <h3 className="text-lg font-semibold text-white">Challenges</h3>
                    <ul className="mt-3 space-y-2 text-slate-300">
                      {caseStudies[activeIndex]?.challenges.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <article>
                    <h3 className="text-lg font-semibold text-white">Solution</h3>
                    <p className="mt-3 text-slate-300">{caseStudies[activeIndex]?.solution}</p>
                  </article>
                  <article>
                    <h3 className="text-lg font-semibold text-white">Results</h3>
                    <ul className="mt-3 space-y-2 text-slate-300">
                      {caseStudies[activeIndex]?.results.map((result) => (
                        <li key={result} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
                <article>
                  <h3 className="text-lg font-semibold text-white">Learning</h3>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {caseStudies[activeIndex]?.learning.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
