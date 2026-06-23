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
// name: "Adarsh Tiwari",

intro:
"Adarsh Tiwari — SDE-1 | Full Stack Engineer | Building Scalable Web Applications.",

role:
"Full Stack Engineer specializing in React, Next.js, Node.js, and cloud-native applications with a strong foundation in Data Structures, Algorithms, and system design.",

summary:
"Passionate software engineer focused on building high-performance, scalable, and user-centric web applications. Experienced in developing end-to-end products using modern JavaScript frameworks, backend architectures, cloud services, and DevOps practices. Committed to writing clean, maintainable code and delivering business impact through technology.",

heroStack: [
"Data Structures & Algorithms",
"System Design",
"React",
"Next.js",
"TypeScript",
"JavaScript",
"Node.js",
"Express.js",
"MongoDB",
"REST APIs",
"AWS",
"Docker",
"CI/CD",
"Git",
"GitHub"
],

location: "India · Remote Ready",

availability:
"Open to SDE-1, Full Stack Developer, Product Engineer, and Software Engineering opportunities",

email: "[adarshtiwaridev01@gmail.com](mailto:adarshtiwaridev01@gmail.com)",

resumeHref: "/Adarsh_Nextjs.pdf",

portrait: {
src: "/image/logo/profile.jpg",
alt: "Adarsh Tiwari - Software Engineer",
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
name: "GNB EV Service Platform",
headline:
"A production-ready EV service ecosystem powering bookings, payments, fleet operations, and business analytics.",
summary:
"Designed and developed a full-stack platform for EV service centers and fleet operators. The system streamlines customer bookings, secure payments, vehicle management, and operational workflows through a centralized dashboard.",
metrics: [
"30% faster API performance through backend optimization",
"25% reduction in operational workload via admin automation",
"Secure Razorpay payment verification and transaction handling",
],
impact:
"Enabled EV businesses to manage service operations, payments, and customer interactions from a single platform.",
status: "Live Product",
features: [
"Service booking and scheduling",
"Razorpay payment integration",
"Fleet and vehicle management",
"Admin analytics dashboard",
],
caseStudyId: "gnb-ev-platform",
stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
href: "https://www.gridaneobharat.com/",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "Explore Platform",
image: {
src: "/projects/gnb-1.png",
alt: "GNB EV Service Platform Dashboard",
width: 1600,
height: 900,
},
video: {
src: "/projects/gnb-demo.mp4",
poster: "/projects/gnb-1.png",
},
},

{
name: "Kodemate Learning Platform",
headline:
"A modern EdTech platform delivering secure learning experiences, content management, and instructor workflows.",
summary:
"Built a scalable learning management system featuring authentication, protected course access, role-based dashboards, and optimized media delivery for online education.",
metrics: [
"40% faster media delivery through Cloudinary CDN",
"Role-based access control for learners and instructors",
"Secure JWT authentication and protected routes",
],
impact:
"Created a seamless digital learning environment that improves course delivery and student engagement.",
status: "Production Ready",
features: [
"Course creation and management",
"Student enrollment system",
"Instructor dashboard",
"Authentication and authorization",
"Media streaming optimization",
],
caseStudyId: "kodemate-learning-platform",
stack: ["MERN", "JWT", "Cloudinary", "Express", "MongoDB"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "View Architecture",
image: {
src: "/projects/edtech-1.png",
alt: "Kodemate Learning Platform",
width: 1600,
height: 900,
},
video: {
src: "/projects/edtech-demo.mp4",
poster: "/projects/edtech-1.png",
},
},

{
name: "CorpTube Network",
headline:
"A professional networking and video-first collaboration platform designed for creators, professionals, and communities.",
summary:
"Built a modern platform that combines professional networking, video content sharing, community engagement, and creator collaboration into a single ecosystem. The platform enables users to build professional connections while showcasing expertise through video-driven content.",
metrics: [
"Unified networking and video engagement experience",
"Scalable content delivery architecture",
"Professional profile and community ecosystem",
],
impact:
"Created a platform where professionals, creators, and businesses can connect, share knowledge, and grow their audience through engaging video content.",
status: "Active Development",
features: [
"Professional user profiles",
"Video publishing and streaming",
"Creator and community engagement",
"Networking and connection system",
"Content discovery and recommendations",
],
caseStudyId: "corptube-network",
stack: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "Explore Platform",
image: {
src: "/projects/corptube-1.png",
alt: "CorpTube Network Platform",
width: 1600,
height: 900,
},
video: {
src: "/projects/corptube-demo.mp4",
poster: "/projects/corptube-1.png",
},
},

{
name: "Aakriti Commerce",
headline:
"A scalable eCommerce platform built with modern architecture and later released as an open-source project.",
summary:
"Developed a complete online commerce solution with authentication, product management, order workflows, and an admin dashboard. The project was later open-sourced for developers and contributors.",
metrics: [
"Open-sourced for community contributions",
"End-to-end product and order management",
"Fully responsive shopping experience",
],
impact:
"Delivered a production-grade eCommerce foundation while contributing to the open-source ecosystem.",
status: "Open Source",
features: [
"Product catalog management",
"Shopping cart and checkout",
"User authentication",
"Admin dashboard",
],
caseStudyId: "aakriti-commerce",
stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "Explore Repository",
image: {
src: "/projects/aakriti-1.png",
alt: "Aakriti Commerce Storefront",
width: 1600,
height: 900,
},
video: {
src: "/projects/aakriti-demo.mp4",
poster: "/projects/aakriti-1.png",
},
},

{
name: "AI Agency Platform",
headline:
"A multi-agent AI platform automating customer support, content generation, lead qualification, and business workflows.",
summary:
"Engineered an AI-powered ecosystem that orchestrates multiple specialized AI agents to handle business automation tasks, improve customer engagement, and increase operational efficiency.",
metrics: [
"Automated repetitive business workflows",
"Integrated multiple AI agents for specialized tasks",
"Reduced response time through AI orchestration",
],
impact:
"Helped businesses leverage AI automation for customer support, productivity, content creation, and lead management.",
status: "Active Development",
features: [
"Multi-agent AI architecture",
"AI support assistant",
"Content generation workflows",
"Lead qualification automation",
"Business process automation",
],
caseStudyId: "ai-agency-platform",
stack: ["Next.js", "OpenAI", "Node.js", "MongoDB", "LangChain"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "Explore AI Architecture",
image: {
src: "/projects/ai-agency-1.png",
alt: "AI Agency Platform Dashboard",
width: 1600,
height: 900,
},
video: {
src: "/projects/ai-agency-demo.mp4",
poster: "/projects/ai-agency-1.png",
},
},

{
name: "Placement Automation System",
headline:
"A recruitment operations platform built to automate candidate tracking, scheduling, and placement workflows.",
summary:
"Developed a centralized placement management solution for institutions and placement teams, replacing manual spreadsheets with automated workflows and real-time analytics.",
metrics: [
"80% reduction in manual placement tracking",
"50% faster interview scheduling",
"Centralized student and recruiter management",
],
impact:
"Improved placement operations by digitizing recruitment processes and providing actionable insights through analytics.",
status: "Production Ready",
features: [
"Student and recruiter management",
"Interview scheduling system",
"Automated notifications",
"Placement analytics dashboard",
],
caseStudyId: "placement-automation-system",
stack: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
href: "#contact",
repoHref: "https://github.com/adarshtiwaridev",
ctaLabel: "View System Design",
image: {
src: "/projects/placement-1.png",
alt: "Placement Automation Dashboard",
width: 1600,
height: 900,
},
video: {
src: "/projects/placement-demo.mp4",
poster: "/projects/placement-1.png",
},
},
];


export const aboutItems: AboutItem[] = [
{
title: "Professional Summary",
category: "Philosophy",
description:
"Results-driven Full Stack Engineer passionate about building scalable, high-performance digital products that combine exceptional user experience with robust engineering. Experienced in transforming complex business requirements into production-ready solutions using modern web technologies, cloud infrastructure, and software engineering best practices.",
},
{
title: "B.Tech Computer Science",
category: "Education",
date: "2023 - 2027",
description:
"Strong academic foundation in Computer Science with focused expertise in Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, and Object-Oriented Design principles.",
},
{
title: "Career Objective",
category: "Objective",
description:
"To contribute as a Software Development Engineer by designing scalable systems, solving complex engineering challenges, and delivering impactful products that create measurable business value while continuously advancing technical excellence and leadership capabilities.",
},
{
title: "Current Focus",
category: "Focus",
description:
"Deepening expertise in modern full-stack development, system design, cloud-native architectures, DevOps automation, and AI-powered applications using Next.js, TypeScript, Node.js, AWS, Docker, and CI/CD workflows.",
},
];


export const skillCategories: SkillCategory[] = [
{
label: "Frontend Engineering",
details: "Building responsive, accessible, and high-performance user experiences.",
skills: [
{ name: "HTML5", level: 95 },
{ name: "CSS3", level: 92 },
{ name: "JavaScript", level: 94 },
{ name: "TypeScript", level: 90 },
{ name: "React", level: 94 },
{ name: "Next.js", level: 92 },
{ name: "Redux Toolkit", level: 85 },
{ name: "Tailwind CSS", level: 92 },
],
},

{
label: "Backend Engineering",
details: "Designing scalable APIs, business logic, and server-side systems.",
skills: [
{ name: "Node.js", level: 92 },
{ name: "Express.js", level: 90 },
{ name: "REST APIs", level: 92 },
{ name: "Authentication & Authorization", level: 85 },
{ name: "JWT", level: 85 },
],
},

{
label: "Databases",
details: "Efficient data modeling, querying, and performance optimization.",
skills: [
{ name: "MongoDB", level: 90 },
{ name: "Mongoose", level: 88 },
{ name: "MySQL", level: 82 },
],
},

{
label: "Cloud & DevOps",
details: "Modern deployment pipelines and cloud infrastructure management.",
skills: [
{ name: "AWS", level: 80 },
{ name: "Docker", level: 78 },
{ name: "CI/CD", level: 80 },
{ name: "Vercel", level: 90 },
{ name: "Linux", level: 82 },
],
},

{
label: "Developer Tools",
details: "Version control, testing, debugging, and collaboration workflows.",
skills: [
{ name: "Git", level: 95 },
{ name: "GitHub", level: 95 },
{ name: "Postman", level: 90 },
{ name: "VS Code", level: 95 },
{ name: "Chrome DevTools", level: 88 },
],
},

{
label: "Computer Science Fundamentals",
details: "Strong foundation in problem-solving and software engineering principles.",
skills: [
{ name: "Data Structures & Algorithms", level: 90 },
{ name: "Object-Oriented Programming", level: 92 },
{ name: "Database Management Systems", level: 88 },
{ name: "Operating Systems", level: 84 },
{ name: "Computer Networks", level: 82 },
{ name: "System Design", level: 75 },
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
