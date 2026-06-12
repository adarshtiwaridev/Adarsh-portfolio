import type { Project } from "@/types/home";

import { SectionHeading } from "./SectionHeading";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-space">
      <div className="grid-shell space-y-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Project stories framed around engineering judgment"
          description="Each card emphasizes why the work mattered, not just which framework was used. That makes the homepage feel more senior and more credible."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              data-card
              className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <span className="rounded-full border border-white/12 px-3 py-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                  Live
                </span>
              </div>

              <p className="mt-4 text-base leading-7 text-slate-300">
                {project.summary}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {project.impact}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} stack`}>
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/6 px-3 py-1 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  View project
                </a>
                {project.repoHref ? (
                  <a
                    href={project.repoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/60"
                  >
                    View source
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
