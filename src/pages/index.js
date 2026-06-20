const _jsxFileName = "src\\pages\\index.tsx"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import Head from "next/head";

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
import React from "react";
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
  kind: (r.cta ? "external" : "info") ,
  keywords: [_optionalChain([r, 'access', _ => _.label, 'optionalAccess', _2 => _2.toLowerCase, 'optionalCall', _3 => _3()]) || ""],
}));

// Provide a small default `principles` array if one isn't exported from data/home.
const principles = [
  { title: "Product-minded code", description: "Build maintainable UI and predictable APIs." },
  { title: "Performance first", description: "Prioritize fast load times and runtime efficiency." },
  { title: "Design + engineering", description: "Ship polished interfaces with clear intent." },
];

export default function HomePage() {
  const palette = useCommandPalette(commandActions);

  return (
    React.createElement(React.Fragment, null
      , React.createElement(Head, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}
        , React.createElement('title', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}, title)
        , React.createElement('meta', { name: "description", content: description, __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}} )
        , React.createElement('meta', {
          name: "keywords",
          content: "Adarsh Tiwari, Frontend Architect, Next.js Engineer, React Engineer, TypeScript Portfolio, Software Engineer"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
        )
        , React.createElement('meta', { name: "author", content: profile.name, __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}} )
        , React.createElement('meta', { name: "robots", content: "index,follow,max-image-preview:large", __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}} )
        , React.createElement('meta', { name: "viewport", content: "width=device-width, initial-scale=1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}} )
        , React.createElement('meta', { name: "theme-color", content: "#07111f", __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}} )

        , React.createElement('link', { rel: "canonical", href: siteUrl, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}} )
        , React.createElement('link', { rel: "icon", href: "/favicon.jpg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}} )
        , React.createElement('link', { rel: "apple-touch-icon", href: "/favicon.jpg", __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}} )
        , React.createElement('link', { rel: "manifest", href: "/site.webmanifest", __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}} )

        , React.createElement('meta', { property: "og:type", content: "website", __self: this, __source: {fileName: _jsxFileName, lineNumber: 119}} )
        , React.createElement('meta', { property: "og:site_name", content: "Adarsh Tiwari Portfolio"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}} )
        , React.createElement('meta', { property: "og:locale", content: "en_US", __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}} )
        , React.createElement('meta', { property: "og:title", content: title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}} )
        , React.createElement('meta', { property: "og:description", content: description, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}} )
        , React.createElement('meta', { property: "og:url", content: siteUrl, __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}} )
        , React.createElement('meta', { property: "og:image", content: ogImage, __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}} )
        , React.createElement('meta', { property: "og:image:width", content: "1200", __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}} )
        , React.createElement('meta', { property: "og:image:height", content: "630", __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}} )

        , React.createElement('meta', { name: "twitter:card", content: "summary_large_image", __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}} )
        , React.createElement('meta', { name: "twitter:title", content: title, __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}} )
        , React.createElement('meta', { name: "twitter:description", content: description, __self: this, __source: {fileName: _jsxFileName, lineNumber: 131}} )
        , React.createElement('meta', { name: "twitter:image", content: ogImage, __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}} )
        , React.createElement('meta', { name: "twitter:creator", content: "@adarshtiwaridev", __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}} )

        , React.createElement('script', {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify(personSchema),
          }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}
        )
      )

      , React.createElement(SiteShell, {
        navigation: navigation,
        onOpenCommandPalette: palette.openPalette, __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}}

        , React.createElement('main', { id: "main-content", role: "main", __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}
          , React.createElement(HeroSection, {
            commandShortcut: "Ctrl+K / Cmd+K"  ,
            onOpenCommandPalette: palette.openPalette,
            profile: profile,
            proofPoints: proofPoints,
            socialLinks: socialLinks, __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}
          )
          , React.createElement(AboutSection, { aboutItems: aboutItems, __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}} )
          , React.createElement(SkillsSection, { categories: skillCategories, __self: this, __source: {fileName: _jsxFileName, lineNumber: 156}} )
          , React.createElement(PrinciplesSection, { principles: principles, __self: this, __source: {fileName: _jsxFileName, lineNumber: 157}} )
          , React.createElement(ProjectsSection, { projects: projects, __self: this, __source: {fileName: _jsxFileName, lineNumber: 158}} )
          , React.createElement(CaseStudiesSection, { caseStudies: caseStudies, __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}} )
          , React.createElement(ProcessSection, { steps: processSteps, __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}} )
          , React.createElement(ExperienceSection, { timeline: experienceTimeline, __self: this, __source: {fileName: _jsxFileName, lineNumber: 161}} )
          , React.createElement(GitHubSection, { metrics: githubMetrics, __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}} )
          , React.createElement(CodingProfilesSection, { profiles: codingProfiles, __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}} )
          , React.createElement(AchievementsSection, { achievements: achievements, __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}} )
          , React.createElement(CertificationsSection, { certifications: certifications, __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}} )
          , React.createElement(TestimonialsSection, { testimonials: testimonials, __self: this, __source: {fileName: _jsxFileName, lineNumber: 166}} )
          , React.createElement(ContactSection, { profile: profile, socialLinks: socialLinks, __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}} )
        )

        , React.createElement(CommandPalette, {
          activeIndex: palette.activeIndex,
          filteredActions: palette.filteredActions,
          isOpen: palette.isOpen,
          onClose: palette.closePalette,
          onQueryChange: palette.setQuery,
          onSelect: palette.runAction,
          query: palette.query,
          setActiveIndex: palette.setActiveIndex, __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}
        )
      )
    )
  );
}
