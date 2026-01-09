import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Texas Personal Injury Lawyers | Free Consultation | GetPaid.law',
  description: 'Injured in an accident? Get matched with an experienced personal injury attorney in minutes. Free case review. No fees unless you win your case.',
  icons: {
    icon: [
      { url: '/images/logos/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logos/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/logos/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://www.getpaid.law/',
    languages: {
      'en-US': 'https://www.getpaid.law/',
      'es-US': 'https://www.getpaid.law/es/',
      'x-default': 'https://www.getpaid.law/',
    },
  },
}

// WebSite and Organization Schema with language support
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GetPaid.law',
  url: 'https://www.getpaid.law',
  description: 'Texas Personal Injury Lawyer Referral Service',
  inLanguage: ['en-US', 'es-US'],
  availableLanguage: [
    {
      '@type': 'Language',
      name: 'English',
      alternateName: 'en',
    },
    {
      '@type': 'Language',
      name: 'Spanish',
      alternateName: 'es',
    },
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.getpaid.law/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'GetPaid.law',
  url: 'https://www.getpaid.law',
  logo: 'https://www.getpaid.law/images/logos/favicon.svg',
  description: 'Texas Personal Injury Lawyer Referral Service. Free consultations, no fees unless you win.',
  telephone: '+1-512-883-0012',
  areaServed: {
    '@type': 'State',
    name: 'Texas',
    sameAs: 'https://en.wikipedia.org/wiki/Texas',
  },
  availableLanguage: ['English', 'Spanish'],
  priceRange: 'Free Consultation',
  knowsLanguage: ['en', 'es'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org WebSite and Organization markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7MSFEBBEWP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7MSFEBBEWP');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uvdykjy6g2");
            `,
          }}
        />
        {/* CallRail */}
        <script async src="//cdn.callrail.com/companies/362899256/4008e07fcf3ba5d73fc1/12/swap.js" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
