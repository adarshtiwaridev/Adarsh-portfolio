import type { Principle } from "@/types/home";

import { SectionHeading } from "./SectionHeading";

type PrinciplesSectionProps = {
  principles: Principle[];
};

export function PrinciplesSection({
  principles,
}: PrinciplesSectionProps) {
  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className="section-space"
    >
      <div className="grid-shell space-y-10">
        <SectionHeading
          eyebrow="Approach"
          title="Built like a maintainable product surface, not a decorative landing page"
          description="This homepage is organized around stable layout primitives, typed content, and interactions that make decision-making easier for employers."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} data-card className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {principle.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
