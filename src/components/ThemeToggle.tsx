'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('portfolio-theme') as 'light' | 'dark' | 'system' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setTheme('dark');
      applyTheme('dark');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const currentStored = localStorage.getItem('portfolio-theme');
      if (currentStored === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (mode: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else if (mode === 'light') {
      root.classList.remove('dark');
    } else {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isSystemDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  const cycleTheme = () => {
    let nextTheme: 'light' | 'dark' | 'system';
    if (theme === 'dark') nextTheme = 'light';
    else if (theme === 'light') nextTheme = 'system';
    else nextTheme = 'dark';

    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400"
      >
        <Moon className="w-4 h-4 text-brand-400" />
      </button>
    );
  }

  return (
    <button
      onClick={cycleTheme}
      type="button"
      title={`Theme: ${theme.toUpperCase()} (Click to cycle)`}
      aria-label={`Current theme is ${theme}. Click to switch between dark, light, and system modes.`}
      className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      {theme === 'dark' && <Moon className="w-4 h-4 text-brand-400" />}
      {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
      {theme === 'system' && <Monitor className="w-4 h-4 text-slate-400 dark:text-slate-300" />}
      <span className="sr-only">Toggle theme: currently {theme}</span>
    </button>
  );
}
