import { practiceAreas } from '@/lib/practiceAreas'
import { cities } from '@/lib/cities'

interface SchemaProps {
  type: 'home' | 'practiceArea' | 'cityPractice' | 'blog' | 'contact'
  practiceArea?: typeof practiceAreas[0]
  city?: typeof cities[0]
  blogPost?: {
    title: string
    description: string
    date: string
    slug: string
  }
}

export default function Schema({ type, practiceArea, city, blogPost }: SchemaProps) {
  const baseUrl = 'https://www.getpaid.law'

  // Organization schema (used on all pages)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'GetPaid.law',
    description: 'Texas personal injury lawyer referral service connecting accident victims with experienced attorneys.',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    telephone: '+1-512-883-0012',
    email: 'contact@getpaid.law',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    priceRange: 'Free Consultation',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [],
  }

  // Home page schema
  if (type === 'home') {
    const homeSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'GetPaid.law',
      url: baseUrl,
      description: 'Texas personal injury lawyers ready to fight for your maximum compensation. Free consultation, no fees unless you win.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        />
      </>
    )
  }

  // Practice area page schema
  if (type === 'practiceArea' && practiceArea) {
    const practiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: `${practiceArea.title} | GetPaid.law`,
      description: practiceArea.description,
      url: `${baseUrl}/${practiceArea.slug}`,
      telephone: '+1-512-883-0012',
      areaServed: {
        '@type': 'State',
        name: 'Texas',
      },
      serviceType: practiceArea.title.replace(' Lawyer', ''),
      priceRange: 'Free Consultation - No Fee Unless You Win',
      provider: organizationSchema,
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: practiceArea.title,
          item: `${baseUrl}/${practiceArea.slug}`,
        },
      ],
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </>
    )
  }

  // City + Practice area page schema
  if (type === 'cityPractice' && city && practiceArea) {
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: `${city.name} ${practiceArea.title} | GetPaid.law`,
      description: `Experienced ${practiceArea.shortTitle.toLowerCase()} lawyers serving ${city.name}, Texas. Free consultation, no fees unless you win.`,
      url: `${baseUrl}/${city.slug}-${practiceArea.slug.replace('-lawyer', '')}-lawyer`,
      telephone: '+1-512-883-0012',
      areaServed: {
        '@type': 'City',
        name: city.name,
        containedInPlace: {
          '@type': 'State',
          name: 'Texas',
        },
      },
      serviceType: practiceArea.title.replace(' Lawyer', ''),
      priceRange: 'Free Consultation - No Fee Unless You Win',
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: practiceArea.title,
          item: `${baseUrl}/${practiceArea.slug}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${city.name} ${practiceArea.shortTitle}`,
          item: `${baseUrl}/${city.slug}-${practiceArea.slug.replace('-lawyer', '')}-lawyer`,
        },
      ],
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </>
    )
  }

  // Blog post schema
  if (type === 'blog' && blogPost) {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: blogPost.title,
      description: blogPost.description,
      url: `${baseUrl}/blog/${blogPost.slug}`,
      datePublished: blogPost.date,
      dateModified: blogPost.date,
      author: {
        '@type': 'Organization',
        name: 'GetPaid.law',
      },
      publisher: {
        '@type': 'Organization',
        name: 'GetPaid.law',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/logo.png`,
        },
      },
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    )
  }

  // Contact page schema
  if (type === 'contact') {
    const contactSchema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact GetPaid.law',
      description: 'Contact our Texas personal injury lawyers for a free consultation.',
      url: `${baseUrl}/contact`,
      mainEntity: organizationSchema,
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    )
  }

  // Default: just organization schema
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}
