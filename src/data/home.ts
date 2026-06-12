import type {
  DesignRole,
  ExperienceItem,
  GitHubStats,
  HeroHighlight,
  LeetCodeStats,
  NavItem,
  Profile,
  Project,
  RecruiterAction,
  SocialLink,
} from "@/types/home";

export const navigation: NavItem[] = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const profile: Profile = {
  name: "Adarsh Tiwari",
  intro: "Adarsh Tiwari — SDE-1, Full Stack Developer & Creative Designer.",
  role: "Design-forward engineering for product teams that care about performance, polish, and business outcomes.",
  summary:
    "I build production-grade interfaces and full-stack systems that feel premium, stay maintainable, and convert technical depth into business leverage.",
  location: "India · Remote-ready",
  availability: "Open to SDE-1 / Product Engineering opportunities",
  email: "adarshtiwaridev01@gmail.com",
  resumeHref: "/Adarsh_Nextjs.pdf",
  portrait: {
    src: "/image/logo/profile.jpg",
    alt: "Portrait of Adarsh Tiwari",
    width: 960,
    height: 960,
  },
};

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/adarshtiwaridev", label: "GitHub" },
  { href: "https://www.linkedin.com/in/adarshtiwaridev", label: "LinkedIn" },
  { href: "https://twitter.com/adarshtiwaridev", label: "Twitter" },
];

export const heroHighlights: HeroHighlight[] = [
  { label: "Stack", value: "Next.js · TypeScript · Node.js · MongoDB" },
  { label: "Focus", value: "High-performance products, SEO systems, and design-grade UX" },
  { label: "Edge", value: "Hybrid engineer-designer with delivery + storytelling range" },
];

export const mockGithubStats: GitHubStats = {
  contributions: 624,
  commits: 382,
  pullRequests: 46,
  topLanguages: [
    { label: "TypeScript", value: 42, tone: "violet" },
    { label: "JavaScript", value: 24, tone: "sky" },
    { label: "Node.js", value: 18, tone: "emerald" },
    { label: "CSS", value: 16, tone: "amber" },
  ],
};

export const mockLeetCodeStats: LeetCodeStats = {
  totalSolved: 418,
  streak: 93,
  distribution: [
    { label: "Easy", value: 204, tone: "emerald" },
    { label: "Medium", value: 163, tone: "sky" },
    { label: "Hard", value: 51, tone: "violet" },
  ],
};

export const engineeringExperience: ExperienceItem[] = [
  {
    company: "Freelance Web Developer",
    role: "Independent Product Engineer",
    period: "Apr 2025 - Present",
    location: "Remote",
    outcomes: [
      "Delivered end-to-end Next.js builds with payment flows, e-commerce surfaces, and custom API integrations tailored to real client constraints.",
      "Implemented advanced SEO foundations, technical content structure, and performance work that improved ranking potential and crawl quality.",
      "Shipped interfaces with tighter design execution, cleaner code boundaries, and production-aware deployment patterns.",
    ],
  },
  {
    company: "Corptube Internship",
    role: "Full-Stack Developer",
    period: "Dec 2025 - Mar 2026",
    location: "Remote",
    outcomes: [
      "Engineered social product flows across Next.js and Node.js with emphasis on responsiveness and maintainable component patterns.",
      "Optimized database queries and request orchestration to reduce latency by roughly 40% in critical user paths.",
      "Managed sprint tasks in Agile rituals while contributing features that were reviewable, testable, and easier to extend.",
    ],
  },
  {
    company: "GridaNeo Bharat",
    role: "Full-Stack Developer Intern",
    period: "Aug 2025 - Nov 2025",
    location: "Remote",
    outcomes: [
      "Launched Project GridaNeo Bharat and translated the shipped product into a direct internship opportunity.",
      "Implemented JWT and role-based access control patterns to secure dashboards, workflows, and privileged actions.",
      "Built reusable UI primitives and shared product surfaces that reduced duplication across collaborating teams.",
    ],
  },
  {
    company: "IBM Internship",
    role: "Frontend Web Developer",
    period: "Jun 2024 - Aug 2024",
    location: "Remote",
    outcomes: [
      "Built responsive React.js interfaces while aligning with enterprise expectations around communication, iteration, and review cadence.",
      "Participated in daily standups and contributed to front-end delivery with stronger browser consistency and layout stability.",
      "Troubleshot compatibility issues across devices and browsers without sacrificing interface polish.",
    ],
  },
];

export const designRoles: DesignRole[] = [
  {
    organization: "CodeX",
    title: "Graphic Designer",
    period: "Aug 2024 - Present",
    focus: "Adobe Photoshop · Typography Theory",
    impact:
      "Managing 5-8 high-impact promotional assets each month with stronger hierarchy, motion awareness, and event-driven storytelling.",
  },
  {
    organization: "PW Skills",
    title: "PW Campus Ambassador",
    period: "Apr 2025 - May 2026",
    focus: "Community Growth · Acquisition",
    impact:
      "Driving awareness, user acquisition, and learning-track adoption through student-facing outreach and clear product communication.",
  },
  {
    organization: "InAmigos Foundation",
    title: "Junior Graphic Designer & Data Research Specialist",
    period: "Jan 2025 - Aug 2025",
    focus: "Design Operations · Google Sheets · Data Cleaning",
    impact:
      "Combined visual design with structured data support, improving research hygiene and content quality across internal workflows.",
  },
];

export const projects: Project[] = [
  {
    name: "GNB EV Fleet Platform",
    headline: "An operational EV fleet product built for bookings, payments, and admin velocity.",
    summary:
      "Full-stack platform work spanning transaction reliability, admin workflows, and more efficient data handling for a live service business.",
    metrics: [
      "Backend route optimization cut latency by 30%",
      "Secure Razorpay verification hardened transaction integrity",
      "Admin panel reduced operations time by 25%",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
    href: "https://www.gridaneobharat.com/",
    repoHref: "https://github.com/adarshtiwaridev",
    ctaLabel: "Open live platform",
    image: {
      src: "/projects/gnb-1.png",
      alt: "Dashboard preview of the GNB EV Fleet Platform",
      width: 1600,
      height: 900,
    },
    video: {
      src: "/projects/gnb-demo.mp4",
      poster: "/projects/gnb-1.png",
    },
  },
  {
    name: "Kodemates EdTech Platform",
    headline: "A learning platform focused on secure sessions, protected routing, and faster media delivery.",
    summary:
      "Engineered a cleaner learner journey with reliable auth flows, protected routes, and CDN-backed media performance for content-heavy experiences.",
    metrics: [
      "JWT refresh-token middleware secured cookie sessions",
      "Routing middleware protected gated experiences",
      "Cloudinary CDN caching accelerated media loads by 40%",
    ],
    stack: ["MERN", "Cloudinary", "JWT", "Express"],
    href: "#contact",
    repoHref: "https://github.com/adarshtiwaridev",
    ctaLabel: "Discuss the architecture",
    image: {
      src: "/projects/edtech-1.png",
      alt: "Course and dashboard preview from the Kodemates EdTech Platform",
      width: 1600,
      height: 900,
    },
    video: {
      src: "/projects/edtech-demo.mp4",
      poster: "/projects/edtech-1.png",
    },
  },
];

export const recruiterActions: RecruiterAction[] = [
  {
    id: "next-experience",
    label: "Review Next.js Experience",
    reply:
      "My strongest frontend delivery work is in Next.js, where I focus on performance-safe UI systems, SEO structure, auth flows, and production polish.",
  },
  {
    id: "ibm-certificate",
    label: "View IBM Certificate",
    reply:
      "You can review my IBM internship credential here. It highlights my frontend delivery exposure in a structured enterprise workflow.",
    cta: {
      href: "/certifications/ibm.png",
      label: "Open IBM Certificate",
    },
  },
  {
    id: "resume",
    label: "Download Full Resume",
    reply:
      "Opening the latest resume now. It includes my full experience timeline, internships, project work, and technical focus areas.",
    cta: {
      href: "/Adarsh_Nextjs.pdf",
      label: "Open Resume",
    },
  },
];
