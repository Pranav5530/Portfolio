'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields.');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }

    try {
      // If user configured a Formspree ID, send via Formspree API
      if (portfolioData.contact.formspreeId) {
        const res = await fetch(`https://formspree.io/f/${portfolioData.contact.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setFormStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      }

      // Default fallback: simulate fast dispatch and launch native mailto
      await new Promise((resolve) => setTimeout(resolve, 600));

      const mailtoUrl = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setErrorMessage('Something went wrong while sending. Please email directly.');
      setFormStatus('error');
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 border-t border-slate-200/60 dark:border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
            Let’s Connect
          </p>
          <h2
            id="contact-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight"
          >
            Get In Touch
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3">
            Have a project in mind, a technical question, or an exciting opportunity? Send a note or reach out directly.
          </p>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                    Direct Email
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {portfolioData.contact.responseExpectation}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200/80 dark:border-white/5 mb-3">
                <span className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 select-all truncate">
                  {portfolioData.contact.displayEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-500/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail Client</span>
              </a>
            </div>

            {/* Location & Timezone Card */}
            <div className="rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent-500/10 text-accent-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {portfolioData.contact.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Timezone & Availability</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {portfolioData.contact.timezone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-10 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-brand-500" />
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  Send a Message
                </h3>
              </div>

              {/* Status Announcements */}
              <div aria-live="polite" className="mb-4">
                {formStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
                    <p className="text-sm font-medium">
                      Thank you! Your message has been prepared/dispatched. I will get back to you shortly.
                    </p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Advisory"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-500 active:scale-[0.99] disabled:opacity-60 shadow-lg shadow-brand-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
