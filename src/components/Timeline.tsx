'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export function Timeline() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            Career Milestones
          </p>
          <h2
            id="experience-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight"
          >
            Experience & Education
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3">
            A chronological track record of leadership, system engineering, and continuous learning.
          </p>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full" />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('experience')}
              type="button"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              type="button"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Experience Tab Content */}
        {activeTab === 'experience' && (
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-12">
            {portfolioData.experience.map((item) => (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                {/* Glowing Node */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-500 group-hover:scale-125 group-hover:bg-brand-500 transition-all shadow-sm shadow-brand-500/50" />

                <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-sm hover:border-brand-500/40 transition-colors">
                  {/* Role & Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <time>{item.period}</time>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    {item.achievements.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack used */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab Content */}
        {activeTab === 'education' && (
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-12">
            {portfolioData.education.map((item) => (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-accent-500 group-hover:scale-125 group-hover:bg-accent-500 transition-all shadow-sm shadow-accent-500/50" />

                <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-sm hover:border-accent-500/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <time>{item.period}</time>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {item.honors && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-4">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.honors}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
