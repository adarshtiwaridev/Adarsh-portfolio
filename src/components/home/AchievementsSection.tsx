import { motion } from "framer-motion";

import type { Achievement } from "@/types/home";

type AchievementsSectionProps = {
  achievements: Achievement[];
};

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="section-space">
      <div className="grid-shell space-y-10">
        <div className="space-y-4">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300">
            Achievements
          </p>
          <h2 id="achievements-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Track record of meaningful engineering progress.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            These metrics reflect sustained effort in development, learning, and product delivery.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--text-soft)]">{achievement.label}</p>
              <p className="mt-4 text-4xl font-semibold text-white">{achievement.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{achievement.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
