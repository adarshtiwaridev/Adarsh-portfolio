export type ThemeMode = "light" | "dark";

export type NavItem = {
  href: `#${string}`;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export type HeroHighlight = {
  label: string;
  value: string;
  detail?: string;
};

export type ProofPoint = HeroHighlight;

export type Principle = {
  title: string;
  description: string;
};

export type CommandAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  kind: "anchor" | "external" | "info";
  keywords: string[];
};

export type AboutItem = {
  title: string;
  description: string;
  date?: string;
  category: "Education" | "Focus" | "Philosophy" | "Objective";
};

export type SkillCategory = {
  label: string;
  details: string;
  skills: { name: string; level: number }[];
};

export type CaseStudy = {
  projectName: string;
  problem: string;
  architecture: string;
  features: string[];
  challenges: string[];
  solution: string;
  results: string[];
  learning: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type GitHubMetric = {
  label: string;
  value: string;
  description: string;
};

export type CodingProfile = {
  platform: string;
  url: string;
  badge: string;
  stats: { label: string; value: string }[];
};

export type Achievement = {
  label: string;
  value: string;
  detail: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  href: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type MetricDatum = {
  label: string;
  tone: "violet" | "emerald" | "sky" | "amber";
  value: number;
};

export type GitHubStats = {
  commits: number;
  contributions: number;
  pullRequests: number;
  topLanguages: MetricDatum[];
};

export type LeetCodeStats = {
  distribution: MetricDatum[];
  streak: number;
  totalSolved: number;
};

export type Profile = {
  availability: string;
  email: string;
  intro: string;
  location: string;
  name: string;
  heroStack?: string[];
  portrait: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
  resumeHref: string;
  role: string;
  summary: string;
};

export type ExperienceItem = {
  company: string;
  location: string;
  outcomes: string[];
  period: string;
  role: string;
};

export type DesignRole = {
  focus: string;
  impact: string;
  organization: string;
  period: string;
  title: string;
};

export type Project = {
  ctaLabel: string;
  headline: string;
  href: string;
  image: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
  metrics: string[];
  name: string;
  repoHref?: string;
  stack: string[];
  summary: string;
  video: {
    poster: string;
    src: string;
  };
  impact?: string;
  status?: string;
  features?: string[];
  caseStudyId?: string;
};

export type RecruiterAction = {
  cta?: {
    href: string;
    label: string;
  };
  id: string;
  label: string;
  reply: string;
};

export type ContactFormValues = {
  email: string;
  message: string;
  name: string;
  subject: string;
};
