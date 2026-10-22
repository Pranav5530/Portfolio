'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ArrowDown, Mail, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

export function Hero() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'twitter':
        return <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Mail className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden ambient-glow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Status Badge */}
          {portfolioData.personal.isAvailable && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-medium bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 mb-6 sm:mb-8 animate-in fade-in slide-in-from-top duration-500 shadow-sm max-w-[94vw] text-left sm:text-center">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate sm:whitespace-normal">{portfolioData.personal.availability}</span>
            </div>
          )}

          {/* Headline & Name */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight max-w-full break-words">
            Hi, I’m{' '}
            <span className="bg-gradient-to-r from-brand-600 via-indigo-500 to-cyan-500 dark:from-brand-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent inline-block">
              {portfolioData.personal.name}
            </span>
          </h1>

          {/* Subtitle / Role */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4 font-heading">
            {portfolioData.personal.role}
          </p>

          {/* One-Line Value Proposition */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-8 sm:mb-10 leading-relaxed px-2">
            {portfolioData.personal.tagline}
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" />
              <span>View Projects</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-white/10 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
              Connect
            </span>
            {portfolioData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.platform} profile`}
                className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-105 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="group flex flex-col items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            <span>Explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
