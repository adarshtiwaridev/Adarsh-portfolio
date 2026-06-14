import { motion } from "framer-motion";

import type { Testimonial } from "@/types/home";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-space">
      <div className="grid-shell space-y-10">
        <div className="space-y-4">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300">
            Testimonials
          </p>
          <h2 id="testimonials-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Feedback from collaborators and product partners.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            First-hand context from people who reviewed the work and experienced the outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.author}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-8 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"
            >
              <p className="text-base leading-8 text-slate-200">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
