'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ArrowUp, Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#070b13] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-white/5">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                {portfolioData.personal.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
              <span>{portfolioData.personal.name}</span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
              {portfolioData.personal.role} — Available for opportunities worldwide.
            </p>
          </div>

          {/* Quick Section Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top of page"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1">
            © {currentYear} {portfolioData.personal.name}. Built with{' '}
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> using Next.js & Tailwind.
          </p>

          <div className="flex items-center gap-3">
            {portfolioData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.platform}`}
                className="p-2 rounded-lg text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
