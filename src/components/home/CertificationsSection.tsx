import { motion } from "framer-motion";

import type { Certification } from "@/types/home";

type CertificationsSectionProps = {
  certifications: Certification[];
};

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="section-space">
      <div className="grid-shell space-y-10">
        <div className="space-y-4">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300">
            Certifications
          </p>
          <h2 id="certifications-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Recognized credentials that support the product story.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Verified industry certifications show the professional practices and discipline I bring to engineering work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <motion.a
              key={cert.title}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="group rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-950/60">
                <img src={cert.image} alt={cert.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-5">
                <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--text-soft)]">{cert.issuer}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{cert.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
