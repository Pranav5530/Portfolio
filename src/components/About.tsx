'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import {
  Code,
  Layers,
  Server,
  Zap,
  Globe,
  Database,
  Terminal,
  Cpu,
  Boxes,
  FileCode,
  Flame,
  Cloud,
  Rocket,
  CheckCircle,
  Eye,
  Smartphone,
  GitMerge,
  Atom,
  Palette,
  PenTool,
} from 'lucide-react';

export function About() {
  const getSkillIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'atom':
        return <Atom className="w-4 h-4 text-cyan-400" />;
      case 'filecode':
        return <FileCode className="w-4 h-4 text-blue-400" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'palette':
        return <Palette className="w-4 h-4 text-teal-400" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'zap':
        return <Zap className="w-4 h-4 text-amber-400" />;
      case 'server':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'terminal':
        return <Terminal className="w-4 h-4 text-yellow-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-blue-400" />;
      case 'flame':
        return <Flame className="w-4 h-4 text-red-400" />;
      case 'boxes':
        return <Boxes className="w-4 h-4 text-indigo-400" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'rocket':
        return <Rocket className="w-4 h-4 text-pink-400" />;
      case 'globe':
        return <Globe className="w-4 h-4 text-emerald-400" />;
      case 'gitmerge':
        return <GitMerge className="w-4 h-4 text-orange-400" />;
      case 'pentool':
        return <PenTool className="w-4 h-4 text-violet-400" />;
      case 'eye':
        return <Eye className="w-4 h-4 text-teal-400" />;
      case 'smartphone':
        return <Smartphone className="w-4 h-4 text-blue-400" />;
      case 'checkcircle':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      default:
        return <Code className="w-4 h-4 text-brand-400" />;
    }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            Background & Philosophy
          </p>
          <h2
            id="about-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight"
          >
            Engineering with Purpose & Craft
          </h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full" />
        </div>

        {/* Top Grid: Bio & Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Avatar Graphic / Photo Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 via-indigo-500 to-accent-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 group-hover:scale-105" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-slate-900 border border-slate-800 p-3 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                {/* Modern Avatar Vector Illustration */}
                <svg
                  className="w-full h-full text-slate-700 dark:text-slate-600"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="100" fill="#0c1220" />
                  <path
                    d="M100 45C80.67 45 65 60.67 65 80C65 99.33 80.67 115 100 115C119.33 115 135 99.33 135 80C135 60.67 119.33 45 100 45Z"
                    fill="#1f293d"
                  />
                  <path
                    d="M32 185C32 145 62 135 100 135C138 135 168 145 168 185"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <circle cx="100" cy="80" r="28" fill="#6366f1" fillOpacity="0.8" />
                  <circle cx="140" cy="65" r="8" fill="#10b981" />
                  <path d="M75 140L100 155L125 140" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
                </svg>
                {/* Floating pill badge */}
                <div className="absolute bottom-4 inset-x-4 py-2 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center">
                  <span className="text-xs font-semibold text-slate-300">
                    📍 {portfolioData.personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {portfolioData.personal.fullBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {portfolioData.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 text-center shadow-sm hover:border-brand-500/50 transition-colors"
                >
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-600 dark:text-brand-400">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Matrix Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
              Technical Competencies & Tooling
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Battle-tested frameworks, modern libraries, and architectural standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.skills.map((category, catIdx) => (
              <div
                key={catIdx}
                className="rounded-2xl p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                  <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                    {category.category}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-brand-500/40 transition-colors"
                    >
                      {getSkillIcon(skill.iconName)}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
