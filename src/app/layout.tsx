import type { Metadata } from 'next';
import './globals.css';
import { portfolioData } from '@/data/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexmorgan.dev'),
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  description: portfolioData.personal.shortBio,
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'Web Architecture',
    portfolioData.personal.name,
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexmorgan.dev',
    title: `${portfolioData.personal.name} — ${portfolioData.personal.role}`,
    description: portfolioData.personal.tagline,
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description: portfolioData.personal.tagline,
    creator: '@alexmorgan_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    description: portfolioData.personal.shortBio,
    url: 'https://alexmorgan.dev',
    sameAs: portfolioData.socialLinks.map((link) => link.url),
    knowsAbout: portfolioData.skills.flatMap((cat) => cat.skills.map((s) => s.name)),
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Anti-FOUC Dark-Mode-First Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('portfolio-theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-brand-500 selection:text-white bg-light-bg dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
