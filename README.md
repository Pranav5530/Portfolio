# Modern Developer Portfolio Website

A high-performance personal portfolio website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**. Designed with a refined **dark-mode-first** aesthetic, fluid micro-interactions, responsive mobile-first layouts, WCAG AA accessibility, and a single centralized data file for personalization.

![Desktop Preview](C:/Users/ADMIN/.gemini/antigravity/brain/d62aa276-22cd-440f-8dbc-764a2ac002a0/screenshot-desktop.png)

---

## ✨ Key Features

- **🎨 Modern Dark-Mode-First Design**: Deep obsidian canvas (`#090D16`) with ambient radial glows, balanced by electric indigo (`#6366F1`) and emerald teal (`#10B981`) accents.
- **🌓 Seamless Theme Switcher**: Instant toggle between Dark, Light, and System modes with zero flash of unstyled content (anti-FOUC) and `localStorage` persistence.
- **⚡ Single Source of Truth**: All personal details, bio, skills, projects, timeline, and contact information are centralized in `src/data/portfolio.ts`.
- **📱 Fully Responsive (Mobile-First)**: Meticulously tested and verified at **375px** (Mobile), **768px** (Tablet), and **1440px** (Desktop).
- **♿ WCAG AA Accessible**: Semantic HTML5 landmark structure, skip-to-content link, keyboard focus-visible outlines, ARIA roles, and high contrast ratios.
- **🔍 SEO Optimized**: Dynamic metadata, Open Graph cards, Twitter cards, Schema.org `Person` JSON-LD, `sitemap.xml`, and `robots.txt`.
- **📬 Functional Contact Section**: Real-time validated contact form with Formspree webhook support and automated `mailto:` fallback, plus one-click email copy button.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components & Static Export capable)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations and color tokens
- **Typography**: Paired Google Fonts:
  - **Headings**: `Plus Jakarta Sans`
  - **Body**: `Inter`
- **Icons**: [Lucide React](https://lucide.dev/) (tree-shaken vector icons)
- **Language**: TypeScript (strict mode enabled)

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js `18.x` or higher (installed and available on your PATH)
- npm, pnpm, or yarn

### 1. Clone & Navigate to Project
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site with hot-reload enabled.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Content (Single Data File)

All portfolio copy, links, projects, and skills are stored in **one single file**:
👉 [`src/data/portfolio.ts`](file:///c:/Users/ADMIN/OneDrive/Desktop/hackthon/src/data/portfolio.ts)

You never need to touch the component code to personalize your site! Simply open `src/data/portfolio.ts` and update the fields:

### 1. Personal Information & Taglines
```typescript
personal: {
  name: "Alex Morgan",
  role: "Senior Full-Stack Engineer & Product Designer",
  tagline: "Architecting high-performance web applications...",
  shortBio: "I am a senior full-stack engineer and UI designer...",
  fullBio: [
    "Paragraph 1 about your background and philosophy...",
    "Paragraph 2 about your engineering principles...",
    "Paragraph 3 about what you enjoy outside of work..."
  ],
  location: "San Francisco, CA (Open to Remote Worldwide)",
  availability: "Available for high-impact roles & technical consulting",
  isAvailable: true, // Set to false to hide the pulsing beacon pill
  resumeUrl: "/resume.pdf", // Path to your resume in public/ or external URL
  avatarUrl: "/avatar.png"
}
```

### 2. Social Links
```typescript
socialLinks: [
  { platform: "GitHub", url: "https://github.com/yourusername", username: "@yourusername", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", username: "in/yourusername", icon: "Linkedin" },
  { platform: "Email", url: "mailto:your.email@example.com", username: "your.email@example.com", icon: "Mail" },
  { platform: "Twitter", url: "https://twitter.com/yourusername", username: "@yourusername", icon: "Twitter" }
]
```

### 3. Categorized Skills
Add, remove, or re-order skills under `skills`:
```typescript
skills: [
  {
    category: "Frontend Engineering",
    description: "Modern, responsive, accessible web interfaces",
    skills: [
      { name: "TypeScript", level: "Expert", iconName: "FileCode" },
      { name: "React 18 / 19", level: "Expert", iconName: "Atom" },
      { name: "Next.js (App Router)", level: "Expert", iconName: "Layers" },
      { name: "Tailwind CSS", level: "Expert", iconName: "Palette" }
    ]
  },
  // Backend, DevOps, Design & Quality...
]
```

### 4. Featured Projects
Update your project highlights, tech tags, and links under `projects`:
```typescript
projects: [
  {
    id: "pulse-analytics",
    title: "PulseAnalytics Real-Time Telemetry",
    category: "Full-Stack", // 'Full-Stack' | 'Frontend' | 'Cloud & Systems'
    tagline: "High-throughput telemetry and microservice observability platform.",
    description: "An enterprise monitoring dashboard...",
    highlights: [
      "Architected real-time WebSocket aggregation reducing CPU overhead by 42%",
      "Designed dark-mode visual charts with Canvas API rendering 100k data points smoothly"
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebSockets"],
    liveUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
    imageAlt: "PulseAnalytics telemetry dashboard preview"
  }
]
```

### 5. Career & Education Timeline
Edit your work milestones in `experience` and degrees/certifications in `education`.

### 6. Contact Form & Direct Email
```typescript
contact: {
  email: "your.email@example.com",
  displayEmail: "your.email@example.com",
  phone: "+1 (555) 389-2041", // Optional
  location: "San Francisco, California, USA",
  timezone: "Pacific Time (PT) / UTC-7 (Collaborates globally)",
  formspreeId: "", // Optional: Paste your Formspree Form ID here (e.g. 'mqkndbvg')
  responseExpectation: "I typically respond within 24 hours on business days."
}
```
> **Tip for Formspree**: If you leave `formspreeId: ""` empty, the form automatically uses a client-side mailto trigger so emails open directly in the user's default email client. When you paste a Formspree ID, submissions are forwarded directly to your inbox via the Formspree API!

---

## 🌐 Deployment Options

### Option 1: Deploy to Vercel (Recommended)
Vercel is the creator of Next.js and provides zero-config deployment:
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Next.js.
4. Click **"Deploy"**. Your site is live with global CDN caching and automatic HTTPS!

### Option 2: Deploy to Netlify
1. Sign in to [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Click **"Deploy"**.

### Option 3: Deploy to GitHub Pages (Static HTML Export)
To deploy as a pure static website:
1. In `next.config.mjs`, add `output: 'export'`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   export default nextConfig;
   ```
2. Run `npm run build`. This generates a static `out/` folder containing standalone HTML, CSS, and JS.
3. Push the `out/` directory to the `gh-pages` branch or configure GitHub Actions to deploy the `out` directory.

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind directives, CSS variables, anti-FOUC styles
│   │   ├── layout.tsx          # HTML shell, SEO metadata, JSON-LD, Google Fonts
│   │   ├── page.tsx            # Main page assembly
│   │   ├── icon.svg            # Modern SVG favicon
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── sitemap.ts          # Dynamic sitemap.xml
│   ├── components/
│   │   ├── Navbar.tsx          # Frosted-glass navigation with mobile drawer
│   │   ├── ThemeToggle.tsx     # Light/Dark/System theme switcher with localStorage
│   │   ├── Hero.tsx            # Headline, value prop, CTA buttons, status pill
│   │   ├── About.tsx           # Bio narrative, avatar with glow, stat cards, skills matrix
│   │   ├── Projects.tsx        # Filterable project card grid with interactive SVGs
│   │   ├── Timeline.tsx        # Experience & Education dual-tab timeline
│   │   ├── Contact.tsx         # Working contact form & direct email copy card
│   │   └── Footer.tsx          # Quick links, back-to-top button, copyright
│   └── data/
│       └── portfolio.ts        # ⭐ SINGLE SOURCE OF TRUTH FOR ALL CONTENT
├── public/                     # Static assets (favicons, PDFs)
├── tailwind.config.js          # Custom colors (brand indigo, accent emerald), dark mode class
├── tsconfig.json               # TypeScript path aliases (@/*)
├── package.json
└── README.md
```

---

## 📄 License
MIT License. Free to use, fork, and customize for your personal portfolio.
