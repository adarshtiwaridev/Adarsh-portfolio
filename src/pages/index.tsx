import Head from "next/head";

import { CommandPalette } from "@/components/home/CommandPalette";
import { AboutSection } from "@/components/home/AboutSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { CodingProfilesSection } from "@/components/home/CodingProfilesSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { GitHubSection } from "@/components/home/GitHubSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import {
  navigation,
  profile,
  projects,
  socialLinks,
  heroHighlights,
  engineeringExperience,
  recruiterActions,
  aboutItems,
  skillCategories,
  processSteps,
  achievements,
  certifications,
  testimonials,
  codingProfiles,
  githubMetrics,
  caseStudies,
} from "@/data/home";
import { useCommandPalette } from "@/hooks/use-command-palette";

const siteUrl = "https://www.adarshtiwaridev.com";
const title = "Adarsh Tiwari | Frontend Architect & Product Engineer";
const description =
  "Frontend Architect portfolio for Adarsh Tiwari, focused on design systems, performance, product thinking, and production-grade React and Next.js engineering.";
const ogImage = `${siteUrl}/image/Hero/Hero.png`;

// Build a lightweight JSON-LD person schema for SEO. Use safe fallbacks if data is missing.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: (profile && profile.name) || "",
  url: siteUrl,
  image: siteUrl + ((profile && profile.portrait && profile.portrait.src) || ""),
  jobTitle: (profile && profile.role) || "",
  description,
  email: profile && profile.email ? `mailto:${profile.email}` : undefined,
  sameAs: (socialLinks || []).map((link) => link.href).filter(Boolean),
  knowsAbout: [
    "Frontend Architecture",
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "Web Performance",
    "Accessibility",
    "Node.js",
    "AI Automation",
  ],
  mainEntityOfPage: siteUrl,
};

// Map available data to the shapes expected by components.
const proofPoints = (heroHighlights || []).map((h) => ({
  label: h.label,
  value: h.value,
  detail: "",
}));

// Experience timeline component expects an array named `timeline` — the data file uses `engineeringExperience`.
const experienceTimeline = engineeringExperience || [];

// The command palette expects actions with `{ id, label, description, href, kind, keywords }`.
const commandActions = (recruiterActions || []).map((r) => ({
  id: r.id,
  label: r.label,
  description: r.reply || "",
  href: r.cta && r.cta.href ? r.cta.href : "#contact",
  kind: (r.cta ? "external" : "info") as "anchor" | "external" | "info",
  keywords: [r.label?.toLowerCase?.() || ""],
}));

const principles = [
  {
    title: "Scalable Architecture",
    description:
      "Building robust systems with clean code, modular design, and long-term maintainability in mind.",
  },
  {
    title: "Performance Driven",
    description:
      "Delivering lightning-fast experiences through optimization, efficient rendering, and modern web technologies.",
  },
  {
    title: "Crafted Experiences",
    description:
      "Blending design precision and engineering expertise to create products that users genuinely enjoy using.",
  },
];

export default function HomePage() {
  const palette = useCommandPalette(commandActions);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Adarsh Tiwari, Frontend Architect, Next.js Engineer, React Engineer, TypeScript Portfolio, Software Engineer"
        />
        <meta name="author" content={profile.name} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07111f" />

        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Adarsh Tiwari Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@adarshtiwaridev" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </Head>

      <SiteShell
        navigation={navigation}
        onOpenCommandPalette={palette.openPalette}
      >
        <main id="main-content" role="main">
          <HeroSection
            commandShortcut="Ctrl+K / Cmd+K"
            onOpenCommandPalette={palette.openPalette}
            profile={profile}
            proofPoints={proofPoints}
            socialLinks={socialLinks}
          />
          <AboutSection aboutItems={aboutItems} />
          <SkillsSection categories={skillCategories} />
          <PrinciplesSection principles={principles} />
          <ProjectsSection projects={projects} />
          <CaseStudiesSection caseStudies={caseStudies} />
          <ProcessSection steps={processSteps} />
          <ExperienceSection timeline={experienceTimeline} />
          <GitHubSection metrics={githubMetrics} />
          <CodingProfilesSection profiles={codingProfiles} />
          <AchievementsSection achievements={achievements} />
          <CertificationsSection certifications={certifications} />
          <TestimonialsSection testimonials={testimonials} />
          <ContactSection profile={profile} socialLinks={socialLinks} />
        </main>

        <CommandPalette
          activeIndex={palette.activeIndex}
          filteredActions={palette.filteredActions}
          isOpen={palette.isOpen}
          onClose={palette.closePalette}
          onQueryChange={palette.setQuery}
          onSelect={palette.runAction}
          query={palette.query}
          setActiveIndex={palette.setActiveIndex}
        />
      </SiteShell>
    </>
  );
}
