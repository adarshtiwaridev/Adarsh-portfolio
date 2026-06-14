import { motion } from "framer-motion";

import type { CodingProfile } from "@/types/home";

type CodingProfilesSectionProps = {
  profiles: CodingProfile[];
};

export function CodingProfilesSection({ profiles }: CodingProfilesSectionProps) {
  return (
    <section id="coding-profiles" aria-labelledby="coding-profiles-title" className="section-space">
      <div className="grid-shell space-y-10">
        <div className="space-y-4">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300">
            Coding profiles
          </p>
          <h2 id="coding-profiles-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Performance on algorithm platforms and competitive programming.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            These profiles show my commitment to problem solving, technical growth, and interview readiness.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {profiles.map((profile) => (
            <motion.article
              key={profile.platform}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">{profile.platform}</p>
                  <p className="mt-2 text-sm text-slate-400">{profile.badge}</p>
                </div>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-400/50"
                >
                  View profile
                </a>
              </div>

              <div className="mt-6 space-y-4">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <span>{stat.label}</span>
                    <span className="font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
