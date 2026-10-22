export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Cloud & Systems';
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  imageAlt: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Expert"
  iconName: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string; // "Full-time", "Contract"
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  details: string[];
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    shortBio: string;
    fullBio: string[];
    location: string;
    availability: string;
    isAvailable: boolean;
    resumeUrl: string;
    avatarUrl?: string;
  };
  stats: StatItem[];
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: {
    email: string;
    displayEmail: string;
    phone?: string;
    location: string;
    timezone: string;
    formspreeId?: string; // Optional: Paste your Formspree endpoint ID here (e.g., 'mqkndbvg')
    responseExpectation: string;
  };
}

/**
 * =======================================================================
 * CENTRAL PORTFOLIO DATA FILE
 * Edit all your personal information, links, projects, and skills here!
 * =======================================================================
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: "Pranav",
    role: "Full-Stack Developer & UI Designer",
    tagline: "Architecting high-performance web applications and human-centered digital experiences.",
    shortBio: "I am a full-stack developer and UI designer passionate about building resilient web applications, modern APIs, and polished interfaces. I combine deep engineering fundamentals with clean design precision to deliver fast, accessible products that users love.",
    fullBio: [
      "I specialize in modern JavaScript/TypeScript ecosystems, responsive frontend architectures, and high-performance backend systems.",
      "My philosophy centers on simplicity, clean code, and intuitive user experiences. Whether optimizing Core Web Vitals for sub-second paint times, crafting modular design systems, or structuring REST & GraphQL APIs, I build for maintainability and speed.",
      "When I am not coding, you can find me contributing to open-source developer tooling, exploring modern web standards, and experimenting with new tech stacks."
    ],
    location: "Available for Remote Worldwide",
    availability: "Available for new opportunities & collaboration",
    isAvailable: true,
    resumeUrl: "#resume",
    avatarUrl: "/avatar.png"
  },

  stats: [
    { label: "Years Experience", value: "3+", description: "Building web platforms" },
    { label: "Shipped Projects", value: "15+", description: "From inception to launch" },
    { label: "Code Commits", value: "1,200+", description: "Open source & production" },
    { label: "Average Lighthouse", value: "98+", description: "Performance & A11y focus" }
  ],

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Pranav5530",
      username: "@Pranav5530",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/pranav",
      username: "in/pranav",
      icon: "Linkedin"
    },
    {
      platform: "Email",
      url: "mailto:contact.pranav.dev@gmail.com",
      username: "contact.pranav.dev@gmail.com",
      icon: "Mail"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      username: "@pranav_dev",
      icon: "Twitter"
    }
  ],
      icon: "Mail"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      username: "@alexmorgan_dev",
      icon: "Twitter"
    }
  ],

  skills: [
    {
      category: "Frontend Engineering",
      description: "Modern, responsive, accessible web interfaces",
      skills: [
        { name: "TypeScript", level: "Expert", iconName: "FileCode" },
        { name: "React 18 / 19", level: "Expert", iconName: "Atom" },
        { name: "Next.js (App Router)", level: "Expert", iconName: "Layers" },
        { name: "Tailwind CSS", level: "Expert", iconName: "Palette" },
        { name: "State Management", level: "Advanced", iconName: "Cpu" },
        { name: "Web Performance & Core Vitals", level: "Expert", iconName: "Zap" }
      ]
    },
    {
      category: "Backend & Systems",
      description: "Scalable APIs, databases, and distributed services",
      skills: [
        { name: "Node.js & Express", level: "Expert", iconName: "Server" },
        { name: "Python / FastAPI", level: "Advanced", iconName: "Terminal" },
        { name: "PostgreSQL & Prisma", level: "Advanced", iconName: "Database" },
        { name: "Redis & In-Memory Caching", level: "Advanced", iconName: "Flame" },
        { name: "GraphQL & RESTful APIs", level: "Expert", iconName: "Network" },
        { name: "Microservices Architecture", level: "Advanced", iconName: "Boxes" }
      ]
    },
    {
      category: "DevOps & Cloud",
      description: "Automated deployment, observability, and infrastructure",
      skills: [
        { name: "Docker & Containerization", level: "Advanced", iconName: "Container" },
        { name: "AWS (S3, CloudFront, Lambda)", level: "Advanced", iconName: "Cloud" },
        { name: "CI/CD & GitHub Actions", level: "Expert", iconName: "GitMerge" },
        { name: "Vercel & Netlify Deployment", level: "Expert", iconName: "Rocket" },
        { name: "Edge Functions & Workers", level: "Advanced", iconName: "Globe" }
      ]
    },
    {
      category: "Design & Quality",
      description: "User experience, design systems, and reliability",
      skills: [
        { name: "Figma & Design Systems", level: "Expert", iconName: "PenTool" },
        { name: "WCAG AA Accessibility", level: "Expert", iconName: "Eye" },
        { name: "Responsive Mobile-First UI", level: "Expert", iconName: "Smartphone" },
        { name: "Unit & E2E Testing", level: "Advanced", iconName: "CheckCircle" },
        { name: "Semantic HTML5 Architecture", level: "Expert", iconName: "Code" }
      ]
    }
  ],

  projects: [
    {
      id: "pulse-analytics",
      title: "PulseAnalytics Real-Time Telemetry",
      category: "Full-Stack",
      tagline: "High-throughput telemetry and microservice observability platform.",
      description: "An enterprise monitoring dashboard capable of processing 60,000+ metrics events per second with sub-50ms render latency. Features real-time WebSocket charts, AI-driven anomaly detection, and automated incident triage alerts.",
      highlights: [
        "Architected real-time WebSocket aggregation reducing CPU overhead by 42%",
        "Designed dark-mode visual charts with Canvas API rendering 100k data points smoothly",
        "Built role-based multi-tenant organization workspaces with zero-latency switching"
      ],
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebSockets", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com/pulse-analytics",
      githubUrl: "https://github.com/example/pulse-analytics",
      featured: true,
      imageAlt: "PulseAnalytics telemetry dashboard preview showing real-time event graphs and system health gauges"
    },
    {
      id: "synthetix-design-tokens",
      title: "Synthetix Design Token Orchestrator",
      category: "Frontend",
      tagline: "Cross-platform design token generator and accessible component compiler.",
      description: "A centralized token distribution engine that syncs design variables directly from Figma into production-ready Tailwind, CSS variables, and iOS/Android styles. Accelerated team release cycles by 60%.",
      highlights: [
        "Automated semantic color contrast validation complying with WCAG 2.1 AAA",
        "Exported tree-shakable React component library with 45+ primitives",
        "Adopted by 12 cross-functional product squads across 3 business units"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Figma REST API", "Vite"],
      liveUrl: "https://example.com/synthetix",
      githubUrl: "https://github.com/example/synthetix-design-tokens",
      featured: true,
      imageAlt: "Synthetix UI design token editor interface with interactive color schemes and typography preview"
    },
    {
      id: "aura-headless-store",
      title: "Aura Headless E-Commerce Suite",
      category: "Full-Stack",
      tagline: "Ultra-fast headless commerce platform with sub-second page transitions.",
      description: "A high-performance modern commerce storefront built for direct-to-consumer brands. Features edge-cached dynamic product catalogs, seamless Stripe checkout integration, and 99+ mobile Lighthouse scores.",
      highlights: [
        "Achieved 0.4s Largest Contentful Paint (LCP) via Next.js ISR and edge middleware",
        "Integrated localized currency conversion and automated tax computation with Stripe",
        "Decreased cart abandonment rate by 18% through a streamlined 2-step checkout flow"
      ],
      techStack: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Stripe API", "PostgreSQL"],
      liveUrl: "https://example.com/aura-commerce",
      githubUrl: "https://github.com/example/aura-commerce",
      featured: true,
      imageAlt: "Aura commerce minimalist product catalog with high-resolution imagery and interactive cart drawer"
    },
    {
      id: "hyperflow-cloud-sdk",
      title: "HyperFlow Distributed Cloud CLI",
      category: "Cloud & Systems",
      tagline: "Developer-first CLI and runtime SDK for multi-cloud workflow orchestration.",
      description: "An open-source developer tool that automates ephemeral staging environments and container rollouts across AWS, GCP, and DigitalOcean with zero configuration overhead.",
      highlights: [
        "Earned over 3,200+ GitHub stars with active community contributions",
        "Implemented concurrent dependency resolution reducing pipeline build times by 45%",
        "Designed lightweight terminal UI with interactive progress spinners and color-coded telemetry"
      ],
      techStack: ["TypeScript", "Node.js", "Docker", "AWS SDK", "GitHub Actions"],
      liveUrl: "https://example.com/hyperflow-cli",
      githubUrl: "https://github.com/example/hyperflow-cli",
      featured: false,
      imageAlt: "HyperFlow terminal CLI tool executing multi-container deployment stages with telemetry logs"
    }
  ],

  experience: [
    {
      id: "nexus-cloud-labs",
      role: "Lead Full-Stack Architect",
      company: "Nexus Cloud Labs",
      companyUrl: "https://example.com",
      period: "2022 — Present",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      description: "Spearhead the core platform team building cloud infrastructure visualization and developer tooling for Fortune 500 engineering organizations.",
      achievements: [
        "Led migration of monolithic dashboard into Next.js App Router micro-frontends, cutting initial bundle size by 54%",
        "Designed and instituted the company-wide accessible component library used across 8 consumer-facing products",
        "Mentored a distributed engineering team of 9 engineers across front-end, backend, and DevOps domains"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "AWS", "Docker", "GraphQL"]
    },
    {
      id: "horizon-design-systems",
      role: "Senior Frontend Engineer",
      company: "Horizon Interactive",
      companyUrl: "https://example.com",
      period: "2020 — 2022",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Developed mission-critical web applications and design systems for enterprise SaaS clients, prioritizing accessibility, design fidelity, and sub-second load times.",
      achievements: [
        "Refactored legacy customer portal into React and TypeScript, boosting customer satisfaction scores by 38%",
        "Implemented automated visual regression testing pipeline with zero false-positive escapees",
        "Optimized Web Vitals across 14 high-traffic landing pages to achieve 95+ average performance scores"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Jest", "Storybook", "CI/CD"]
    },
    {
      id: "vertex-software",
      role: "Software Engineer",
      company: "Vertex Digital Solutions",
      companyUrl: "https://example.com",
      period: "2018 — 2020",
      location: "San Jose, CA",
      type: "Full-time",
      description: "Built responsive client portals, backend REST microservices, and interactive data visualization interfaces for fin-tech and healthcare clients.",
      achievements: [
        "Delivered 12 complete full-stack web applications on schedule with 100% test coverage on business logic",
        "Collaborated closely with UX designers to translate wireframes into accessible, pixel-perfect web interfaces",
        "Authored comprehensive developer onboarding manuals that reduced new hire ramp-up time by 2 weeks"
      ],
      technologies: ["JavaScript (ES6+)", "React", "Node.js", "PostgreSQL", "CSS3 / Sass"]
    }
  ],

  education: [
    {
      id: "uc-berkeley",
      degree: "B.S. in Computer Science & Human-Computer Interaction",
      institution: "University of California, Berkeley",
      period: "2014 — 2018",
      location: "Berkeley, CA",
      honors: "Dean's Honors List • Magna Cum Laude",
      details: [
        "Coursework: Distributed Systems, Operating Systems, Computer Graphics, UI/UX Design, Data Structures & Algorithms",
        "Lead Developer for Berkeley Web Development Student Association",
        "Undergraduate Teaching Assistant for CS61B (Data Structures)"
      ]
    },
    {
      id: "aws-certification",
      degree: "AWS Certified Solutions Architect – Associate",
      institution: "Amazon Web Services",
      period: "2023 — 2026",
      location: "Global Credential",
      details: [
        "Credential ID: AWS-ASA-8492019",
        "Specialization: High-availability architectures, serverless computing, edge CDN networks, and cloud security"
      ]
    }
  ],

  contact: {
    email: "contact.pranav.dev@gmail.com",
    displayEmail: "contact.pranav.dev@gmail.com",
    phone: "+1 (555) 019-2834",
    location: "Remote / Worldwide",
    timezone: "UTC / IST / Flexible for global teams",
    formspreeId: "", // Optional: Enter your Formspree ID here (e.g. "xpvzlbak")
    responseExpectation: "I typically respond within 24 hours."
  }
};
