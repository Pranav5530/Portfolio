'use client';

import React, { useState } from 'react';
import { portfolioData, Project } from '@/data/portfolio';
import { ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'Frontend' | 'Cloud & Systems'>('All');

  const filterOptions = ['All', 'Full-Stack', 'Frontend', 'Cloud & Systems'] as const;

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeFilter);

  // SVG Project Mockup Visualizer
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'pulse-analytics':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-[#0e1726] p-4 flex flex-col justify-between border-b border-white/10 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10px] text-slate-400 font-mono">telemetry.pulse.live</span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                ● 58,420 eps
              </span>
            </div>
            {/* Mock Chart Wave */}
            <div className="my-auto py-2">
              <svg className="w-full h-20" viewBox="0 0 300 80" fill="none">
                <defs>
                  <linearGradient id="gradPulse" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 60 Q 30 20, 60 50 T 120 30 T 180 55 T 240 25 T 300 45 L 300 80 L 0 80 Z"
                  fill="url(#gradPulse)"
                />
                <path
                  d="M0 60 Q 30 20, 60 50 T 120 30 T 180 55 T 240 25 T 300 45"
                  stroke="#818cf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* Micro Metrics */}
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Avg Latency: 18ms</span>
              <span>Cluster: us-west-2 (12 nodes)</span>
            </div>
          </div>
        );

      case 'synthetix-design-tokens':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-[#141529] p-4 flex flex-col justify-between border-b border-white/10 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">tokens.config.json</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/20 text-brand-300">
                WCAG AAA Compliant
              </span>
            </div>
            {/* Color token swatches */}
            <div className="grid grid-cols-4 gap-2 my-auto">
              <div className="h-14 rounded-lg bg-indigo-500 p-1.5 flex flex-col justify-between shadow">
                <span className="text-[9px] text-white/90 font-mono">primary</span>
                <span className="text-[8px] text-white/70 font-mono">#6366F1</span>
              </div>
              <div className="h-14 rounded-lg bg-emerald-500 p-1.5 flex flex-col justify-between shadow">
                <span className="text-[9px] text-white/90 font-mono">accent</span>
                <span className="text-[8px] text-white/70 font-mono">#10B981</span>
              </div>
              <div className="h-14 rounded-lg bg-amber-500 p-1.5 flex flex-col justify-between shadow">
                <span className="text-[9px] text-white/90 font-mono">warning</span>
                <span className="text-[8px] text-white/70 font-mono">#F59E0B</span>
              </div>
              <div className="h-14 rounded-lg bg-slate-800 p-1.5 flex flex-col justify-between border border-white/10 shadow">
                <span className="text-[9px] text-slate-300 font-mono">surface</span>
                <span className="text-[8px] text-slate-400 font-mono">#1E293B</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Synced with Figma v2.8</span>
              <span>45 Export Primitives</span>
            </div>
          </div>
        );

      case 'aura-headless-store':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 to-[#0e1a18] p-4 flex flex-col justify-between border-b border-white/10 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-slate-400">store.aura.design</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                0.4s LCP
              </span>
            </div>
            {/* E-Commerce Cards Simulation */}
            <div className="flex items-center justify-center gap-3 my-auto">
              <div className="w-24 h-20 rounded-lg bg-slate-800/80 border border-white/10 p-2 flex flex-col justify-between shadow-lg">
                <div className="w-8 h-8 rounded-full bg-brand-500/30 mx-auto" />
                <div className="text-[9px] text-center font-medium text-slate-200">Edition One</div>
                <div className="text-[8px] text-center font-bold text-emerald-400">$249.00</div>
              </div>
              <div className="w-24 h-20 rounded-lg bg-slate-800/80 border border-emerald-500/40 p-2 flex flex-col justify-between shadow-lg relative">
                <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[7px] font-bold px-1 rounded-full">
                  BEST
                </div>
                <div className="w-8 h-8 rounded-full bg-accent-500/30 mx-auto" />
                <div className="text-[9px] text-center font-medium text-slate-200">Studio Pro</div>
                <div className="text-[8px] text-center font-bold text-emerald-400">$389.00</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Next.js App Router + Stripe</span>
              <span>100% Core Web Vitals</span>
            </div>
          </div>
        );

      case 'hyperflow-cloud-sdk':
      default:
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#0c0f1d] to-[#12182b] p-4 flex flex-col justify-between border-b border-white/10 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">terminal — bash</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                3.2k ★ Stars
              </span>
            </div>
            {/* Terminal snippet */}
            <div className="my-auto font-mono text-[11px] leading-tight space-y-1 bg-black/40 p-2.5 rounded-lg border border-white/5">
              <div className="text-slate-300">
                <span className="text-brand-400">$</span> hyperflow deploy --env=prod
              </div>
              <div className="text-emerald-400">✔ AWS ECS cluster provisioned (1.2s)</div>
              <div className="text-emerald-400">✔ Edge SSL verified & DNS propagated</div>
              <div className="text-cyan-400 font-bold">🚀 Release v2.4.0 live across 8 regions</div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Zero-config Orchestration</span>
              <span>TypeScript & Rust</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            Selected Work
          </p>
          <h2
            id="projects-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight"
          >
            Featured Projects & Architectures
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3">
            A curated collection of production platforms, developer utilities, and high-performance applications.
          </p>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                activeFilter === filter
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl dark:hover:border-brand-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview */}
                {renderProjectVisual(project)}

                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/50">
                      <Sparkles className="w-3 h-3" />
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800/40">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    {project.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded p-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded p-1"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
