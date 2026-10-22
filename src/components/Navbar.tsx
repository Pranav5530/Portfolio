'use client';

import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { portfolioData } from '@/data/portfolio';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const initials = portfolioData.personal.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#090D16]/85 glass-header border-b border-slate-200/80 dark:border-white/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            aria-label={`${portfolioData.personal.name} home`}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1 shrink-0"
          >
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-700 text-white flex items-center justify-center font-heading font-bold text-sm sm:text-lg shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              {initials}
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-slate-900 dark:text-white leading-tight tracking-tight text-sm sm:text-base">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-brand-500" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              className="p-1.5 sm:p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-16 z-50 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs ml-auto h-full bg-white dark:bg-[#0c1220] border-l border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-100 dark:border-white/10">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Navigation</p>
              </div>
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-white/10">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-white bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-500/20 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-center text-slate-400">
                © {new Date().getFullYear()} {portfolioData.personal.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
