import type { ExperienceItem } from "@/types/home";

import { SectionHeading } from "./SectionHeading";

type ExperienceSectionProps = {
  timeline: ExperienceItem[];
};

export function ExperienceSection({ timeline }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-space"
    >
      <div className="grid-shell space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Signals that this portfolio was shaped by real delivery work"
          description="The goal is to communicate readiness for engineering teams: clear ownership, production habits, and increasing product responsibility."
        />

        <ol className="grid gap-5">
          {timeline.map((item) => (
            <li key={`${item.company}-${item.period}`} data-card className="p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.role} · {item.company}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {item.period} · {item.location}
                  </p>
                </div>

                <ul className="max-w-2xl space-y-3 text-sm leading-7 text-slate-300">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
