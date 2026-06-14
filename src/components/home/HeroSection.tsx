import Image from "next/image";
import { ArrowUpRight, Command, Download, Sparkles, Code2, Server, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";

import { AmbientBackground } from "@/components/home/AmbientBackground";
import { SpotlightPanel } from "@/components/home/SpotlightPanel";
import type { Profile, ProofPoint, SocialLink } from "@/types/home";

type HeroSectionProps = {
  commandShortcut: string;
  onOpenCommandPalette: () => void;
  profile: Profile;
  proofPoints: ProofPoint[];
  socialLinks: SocialLink[];
};

export function HeroSection({
  commandShortcut,
  onOpenCommandPalette,
  profile,
  proofPoints,
  socialLinks,
}: HeroSectionProps) {
  return (
    <header
      id="top"
      aria-labelledby="hero-title"
      className="section-space relative isolate overflow-hidden pt-12 sm:pt-20"
    >
      <AmbientBackground />

      <div className="grid-shell relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <section
          aria-label="Hero introduction"
          className="space-y-8 lg:space-y-10"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-pill"
            >
              {profile.availability}
            </motion.p>
            <h1
              id="hero-title"
              className="max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text-strong)] sm:text-5xl lg:text-7xl"
            >
              {profile.name}
              <span className="hero-heading-accent mt-4 block">
                {profile.intro}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--text-muted)] sm:text-xl">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3" aria-label="Tech stack badges">
            {profile.heroStack?.map((tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-[color:var(--text-strong)] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="hero-button-primary"
            >
              View selected work
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="hero-button-secondary"
            >
              Open resume
              <Download className="size-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onOpenCommandPalette}
              aria-label="Open command palette"
              className="hero-button-secondary"
            >
              <Command className="size-4" aria-hidden="true" />
              Explore with command palette
              <span className="kbd">{commandShortcut}</span>
            </button>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <SpotlightPanel key={item.label} className="space-y-3 p-5">
                <dt className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                  {item.label}
                </dt>
                <dd className="text-2xl font-semibold text-[color:var(--text-strong)]">
                  {item.value}
                </dd>
                <p className="text-sm leading-6 text-[color:var(--text-muted)]">
                  {item.detail}
                </p>
              </SpotlightPanel>
            ))}
          </dl>
        </section>

        <aside aria-label="Profile summary" className="space-y-5 lg:pl-6">
          <SpotlightPanel className="hero-portrait-card overflow-hidden p-4 sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[color:var(--surface-muted)]">
              <Image
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 90vw"
                className="object-cover"
              />
              <div className="hero-image-float" aria-hidden="true">
                <span className="hero-tech-icon hero-tech-icon-1">
                  <Code2 />
                </span>
                <span className="hero-tech-icon hero-tech-icon-2">
                  <Server />
                </span>
                <span className="hero-tech-icon hero-tech-icon-3">
                  <Database />
                </span>
                <span className="hero-tech-icon hero-tech-icon-4">
                  <Layers />
                </span>
              </div>
              <div className="hero-image-shine" />
            </div>
          </SpotlightPanel>

          <SpotlightPanel className="space-y-5 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
                  Base
                </p>
                <p className="mt-2 text-lg text-[color:var(--text-strong)]">
                  {profile.location}
                </p>
              </div>
              <div className="hero-status-indicator" aria-hidden="true" />
            </div>

            <div className="rounded-[1.4rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-muted)]/70 p-4">
              <div className="flex items-center gap-3">
                <Sparkles className="size-4 text-[color:var(--accent-strong)]" aria-hidden="true" />
                <p className="text-sm font-medium text-[color:var(--text-strong)]">
                  Premium interactions, production-grade structure, recruiter-first storytelling.
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-3" aria-label="Social links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-social-chip"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </SpotlightPanel>
        </aside>
      </div>
    </header>
  );
}
