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
