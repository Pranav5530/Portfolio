import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#090D16] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
