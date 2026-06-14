import type {
  DesignRole,
  ExperienceItem,
  GitHubStats,
  HeroHighlight,
  AboutItem,
  Achievement,
  CaseStudy,
  Certification,
  CodingProfile,
  GitHubMetric,
  ProcessStep,
  SkillCategory,
  Testimonial,
  LeetCodeStats,
  NavItem,
  Profile,
  Project,
  RecruiterAction,
  SocialLink,
} from "@/types/home";

export const navigation: NavItem[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case studies" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export const profile: Profile = {
  name: "Adarsh Tiwari",
  intro: "Adarsh Tiwari — SDE-1, Full Stack Developer & Creative Designer.",
  role: "Design-forward engineering for product teams that care about performance, polish, and business outcomes.",
  summary:
    "I build production-grade interfaces and full-stack systems that feel premium, stay maintainable, and convert technical depth into business leverage.",
  heroStack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  location: "India · Remote-ready",
  availability: "Open to SDE-1 / Product Engineering opportunities",
  email: "adarshtiwaridev01@gmail.com",
  resumeHref: "/Adarsh_Nextjs.pdf",
  portrait: {
    src: "/image/logo/profile.jpg",
    alt: "Portrait of Adarsh Tiwari",
    width: 860,
    height: 860,
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
    impact: "Built for real operations and budget-sensitive fleet managers, this project balances reliability, secure payments, and admin efficiency.",
    status: "Live product",
    features: [
      "Booking workflow with availability management",
      "Razorpay-powered secure checkout",
      "Admin dashboard with fleet analytics",
    ],
    caseStudyId: "vehicle-tracking-system",
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
    impact: "Accelerated the course consumption path and reduced learner friction through a polished auth and media strategy.",
    status: "Prototype",
    features: [
      "End-to-end auth with role-based pages",
      "Instructor dashboard for content and student management",
      "CDN-backed media streaming with player optimization",
    ],
    caseStudyId: "edtech-platform",
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
  {
    name: "Placement Automation Tool",
    headline: "A data-driven system to automate company allocation and interview scheduling for placement teams.",
    summary:
      "Built to reduce manual tracking, automate follow-up emails, and ensure placement coordinators can focus on candidate success.",
    metrics: [
      "Automated 80% of placement status updates",
      "Reduced interview scheduling time by 50%",
      "Centralized student, company, and placement analytics.",
    ],
    impact: "Improved placement cycle speed by turning manual spreadsheets into a structured operations platform.",
    status: "Delivered internally",
    features: [
      "Automated company matching and tracking",
      "Email notifications and candidate status dashboards",
      "Central reporting for placement teams",
    ],
    caseStudyId: "placement-automation-tool",
    stack: ["Next.js", "Node.js", "MySQL", "TypeScript"],
    href: "#contact",
    repoHref: "https://github.com/adarshtiwaridev",
    ctaLabel: "Discuss placement systems",
    image: {
      src: "/projects/placement-1.png",
      alt: "Dashboard preview of the Placement Automation Tool",
      width: 1600,
      height: 900,
    },
    video: {
      src: "/projects/placement-demo.mp4",
      poster: "/projects/placement-1.png",
    },
  },
  {
    name: "Job Application Automation Extension",
    headline: "A browser extension that automates resume submission and application tracking across hiring platforms.",
    summary:
      "Designed to make job applications efficient with saved templates, auto-fill workflows, and status tracking.",
    metrics: [
      "Automated candidate outreach across 5+ job boards",
      "Improved application consistency with templated responses",
      "Delivered an extensible extension architecture for future automations.",
    ],
    impact: "Reduced repetitive job application work and created an automation-first experience for technical hiring journeys.",
    status: "Prototype",
    features: [
      "Auto-fill resume and profile data",
      "Application timeline with status reminders",
      "Secure token-based integration with job boards",
    ],
    caseStudyId: "job-automation-extension",
    stack: ["JavaScript", "Chrome Extension", "Node.js", "MongoDB"],
    href: "#contact",
    repoHref: "https://github.com/adarshtiwaridev",
    ctaLabel: "Review extension design",
    image: {
      src: "/projects/extension-1.png",
      alt: "Illustration of the Job Application Automation Extension",
      width: 1600,
      height: 900,
    },
    video: {
      src: "/projects/extension-demo.mp4",
      poster: "/projects/extension-1.png",
    },
  },
  {
    name: "Blog CMS Dashboard",
    headline: "A content operations dashboard built for writers, editors, and technical authors.",
    summary:
      "Built to simplify content publishing with category management, SEO previews, and performance-optimized delivery.",
    metrics: [
      "Streamlined content publishing workflows by 60%",
      "SEO preview and metadata editing for every post",
      "Responsive CMS dashboard for editorial decision making.",
    ],
    impact: "Enabled faster content launches and clearer editorial ownership with a modern dashboard experience.",
    status: "Live internal tool",
    features: [
      "Post editor with SEO preview",
      "Category and tag management",
      "Publication workflow with version history",
    ],
    caseStudyId: "blog-cms-dashboard",
    stack: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
    href: "#contact",
    repoHref: "https://github.com/adarshtiwaridev",
    ctaLabel: "Review CMS features",
    image: {
      src: "/projects/cms-1.png",
      alt: "Dashboard preview of the Blog CMS Dashboard",
      width: 1600,
      height: 900,
    },
    video: {
      src: "/projects/cms-demo.mp4",
      poster: "/projects/cms-1.png",
    },
  },
];

export const aboutItems: AboutItem[] = [
  {
    title: "Professional summary",
    category: "Philosophy",
    description:
      "Senior-level product engineering with a full-stack mindset: I connect polished interfaces with reliable server systems and measurable delivery outcomes.",
  },
  {
    title: "B.Tech Computer Science",
    category: "Education",
    date: "2022 - 2026",
    description: "Solid computer science foundation with coursework in algorithms, database systems, operating systems, and networking.",
  },
  {
    title: "Career objective",
    category: "Objective",
    description:
      "Ship complex SaaS features with scalable architecture and resilient data flows while growing into product-led engineering leadership.",
  },
  {
    title: "Current focus",
    category: "Focus",
    description:
      "Building secure, fast full-stack products using TypeScript, Next.js, Node services, and production-aware deployment patterns.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    details: "Polished interfaces and modern component systems.",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Redux", level: 80 },
      { name: "Tailwind", level: 86 },
    ],
  },
  {
    label: "Backend",
    details: "Reliable APIs and server-side engineering.",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 84 },
      { name: "REST API", level: 88 },
    ],
  },
  {
    label: "Database",
    details: "Data storage and retrieval tailored for performance.",
    skills: [
      { name: "MongoDB", level: 86 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    label: "Tools",
    details: "Developer workflows and deployment infrastructure.",
    skills: [
      { name: "Git", level: 94 },
      { name: "GitHub", level: 92 },
      { name: "Postman", level: 80 },
      { name: "Vercel", level: 84 },
    ],
  },
  {
    label: "Core CS",
    details: "Systems thinking for robust problem solving.",
    skills: [
      { name: "DSA", level: 88 },
      { name: "DBMS", level: 86 },
      { name: "OOP", level: 90 },
      { name: "OS", level: 78 },
      { name: "CN", level: 76 },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  { title: "Requirement Analysis", description: "Understand goals, users, and business outcomes." },
  { title: "Planning", description: "Establish scope, architecture, and release paths." },
  { title: "UI/UX Design", description: "Design interfaces that feel premium, accessible, and product-ready." },
  { title: "Development", description: "Implement full-stack systems with clean code and testing." },
  { title: "Testing", description: "Validate behavior, performance, and cross-device quality." },
  { title: "Deployment", description: "Ship secure builds with monitoring and continuous delivery." },
  { title: "Monitoring", description: "Track performance, errors, and user signals for continuous improvement." },
];

export const achievements: Achievement[] = [
  { label: "DSA problems solved", value: "780+", detail: "Consistent practice in algorithms and real interview preparation." },
  { label: "Projects completed", value: "12+", detail: "Portfolio and client work spanning full-stack product builds." },
  { label: "Certifications", value: "9", detail: "Verified technical certifications in web development and cloud." },
  { label: "Hackathons", value: "5+", detail: "Built fast prototypes with thoughtful architecture under pressure." },
  { label: "Open source contributions", value: "24+", detail: "PRs and issue work across developer tooling and UI libraries." },
];

export const certifications: Certification[] = [
  {
    title: "IBM Frontend Development Internship",
    issuer: "IBM",
    date: "Aug 2024",
    href: "/certifications/ibm.png",
    image: "/certifications/ibm.png",
  },
  {
    title: "Full Stack Web Developer",
    issuer: "PW Skills",
    date: "May 2025",
    href: "https://example.com/certificate",
    image: "/certifications/pwskills.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Adarsh shipped a complex product experience with exceptional polish and helped our team think more clearly about architecture.",
    author: "Priya Sharma",
    role: "Product Manager",
    company: "Corptube",
  },
  {
    quote: "His delivery was fast, thoughtful, and the code was easy to onboard for our engineering team.",
    author: "Rohit Verma",
    role: "Founder",
    company: "Kodemates",
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/adarshtiwaridev",
    badge: "Expert",
    stats: [
      { label: "Problems solved", value: "550+" },
      { label: "Rating", value: "1800+" },
    ],
  },
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/adarshtiwaridev",
    badge: "4★",
    stats: [
      { label: "Problems solved", value: "420+" },
      { label: "Max rating", value: "1800+" },
    ],
  },
];

export const githubMetrics: GitHubMetric[] = [
  { label: "Repositories", value: "18", description: "Polished open-source and project repositories." },
  { label: "Stars", value: "260+", description: "Community interest in quality code and tools." },
  { label: "Followers", value: "340+", description: "Professional network growth and collaboration." },
  { label: "Contributions", value: "1200+", description: "Regular activity across repositories and issues." },
];

export const caseStudies: CaseStudy[] = [
  {
    projectName: "Vehicle Tracking System",
    problem: "Fleet operators needed a dependable system to monitor EV availability, bookings, and secure payments in one place.",
    architecture: "Next.js frontend → Node.js API → MongoDB database with server-side auth, payment webhook handling, and analytics storage.",
    features: [
      "Live vehicle availability and booking management",
      "Razorpay checkout and webhook verification",
      "Admin dashboard for driver and route oversight",
    ],
    challenges: [
      "Keeping session state in sync across checkout and admin workflows",
      "Securing payment verification against replay and fraud",
      "Balancing chart-heavy admin screens with low latency.",
    ],
    solution: "I built a unified app with protected route middleware, secure payment flows, and server-side caching for admin dashboard queries.",
    results: [
      "30% faster checkout and backend latency",
      "25% reduction in manual admin operations",
      "Secure transactions with verified payment states.",
    ],
    learning: [
      "Design product-focused APIs around ownership and accountability.",
      "Use middleware to keep auth and route guards consistent across pages.",
      "Optimize admin data loading without sacrificing reliability.",
    ],
  },
  {
    projectName: "EdTech Platform",
    problem: "Learners needed a secure course experience that handled gated content, media delivery, and role-based access cleanly.",
    architecture: "React and protected Next.js pages → Express API layer → MongoDB for users, content, and enrollment state.",
    features: [
      "Role-based learning portals",
      "Secure JWT refresh-token session handling",
      "CDN-backed course media playback",
    ],
    challenges: [
      "Keeping authentication secure while maintaining smooth course access",
      "Handling media loading for both desktop and mobile learners",
      "Creating a reliable route protection strategy for nested pages.",
    ],
    solution: "Implemented cookie-based JWT refresh flows, middleware-protected routes, and Cloudinary caching to support large learning assets.",
    results: [
      "40% faster media load times",
      "Simpler gated user journey with fewer auth redirects",
      "Stronger role-based access security",
    ],
    learning: [
      "Build auth flows around UX rather than edge-case forms.",
      "Use asset caching to make learning products feel faster.",
      "Keep backend security patterns reusable across projects.",
    ],
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
