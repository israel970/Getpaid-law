import { practiceAreas } from '@/lib/practiceAreas'
import { cities } from '@/lib/cities'
import { getPracticeAreaTitleEs, getCityNameEs } from '@/lib/practiceAreasEs'

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
  lang?: 'en' | 'es'
}

export default function Schema({ type, practiceArea, city, blogPost, lang = 'en' }: SchemaProps) {
  const baseUrl = 'https://www.getpaid.law'
  const langPrefix = lang === 'es' ? '/es' : ''
  const isSpanish = lang === 'es'

  // Organization schema (used on all pages)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'GetPaid.law',
    description: isSpanish
      ? 'Servicio de referencia de abogados de lesiones personales en Texas conectando víctimas de accidentes con abogados experimentados.'
      : 'Texas personal injury lawyer referral service connecting accident victims with experienced attorneys.',
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
    priceRange: isSpanish ? 'Consulta Gratis' : 'Free Consultation',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [],
    inLanguage: lang,
  }

  // Home page schema
  if (type === 'home') {
    const homeSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'GetPaid.law',
      url: `${baseUrl}${langPrefix}`,
      description: isSpanish
        ? 'Abogados de lesiones personales en Texas listos para luchar por su máxima compensación. Consulta gratis, sin honorarios a menos que gane.'
        : 'Texas personal injury lawyers ready to fight for your maximum compensation. Free consultation, no fees unless you win.',
      inLanguage: lang,
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
    const titleEs = isSpanish ? getPracticeAreaTitleEs(practiceArea.title) : practiceArea.title
    const shortTitleEs = isSpanish ? getPracticeAreaTitleEs(practiceArea.shortTitle) : practiceArea.shortTitle

    const practiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: `${titleEs} | GetPaid.law`,
      description: practiceArea.description,
      url: `${baseUrl}${langPrefix}/${practiceArea.slug}`,
      telephone: '+1-512-883-0012',
      areaServed: {
        '@type': 'State',
        name: 'Texas',
      },
      serviceType: titleEs.replace(isSpanish ? ' Abogado' : ' Lawyer', ''),
      priceRange: isSpanish ? 'Consulta Gratis - Sin Honorarios a Menos Que Gane' : 'Free Consultation - No Fee Unless You Win',
      provider: organizationSchema,
      inLanguage: lang,
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: isSpanish ? 'Inicio' : 'Home',
          item: `${baseUrl}${langPrefix}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: titleEs,
          item: `${baseUrl}${langPrefix}/${practiceArea.slug}`,
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
    const cityNameEs = isSpanish ? getCityNameEs(city.name) : city.name
    const titleEs = isSpanish ? getPracticeAreaTitleEs(practiceArea.title) : practiceArea.title
    const shortTitleEs = isSpanish ? getPracticeAreaTitleEs(practiceArea.shortTitle) : practiceArea.shortTitle
    const pageSlug = `${city.slug}-${practiceArea.slug.replace('-lawyer', '')}-lawyer`

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: isSpanish
        ? `Abogado de ${shortTitleEs} en ${cityNameEs} | GetPaid.law`
        : `${city.name} ${practiceArea.title} | GetPaid.law`,
      description: isSpanish
        ? `Abogados experimentados de ${shortTitleEs.toLowerCase()} sirviendo ${cityNameEs}, Texas. Consulta gratis, sin honorarios a menos que gane.`
        : `Experienced ${practiceArea.shortTitle.toLowerCase()} lawyers serving ${city.name}, Texas. Free consultation, no fees unless you win.`,
      url: `${baseUrl}${langPrefix}/${pageSlug}`,
      telephone: '+1-512-883-0012',
      areaServed: {
        '@type': 'City',
        name: city.name,
        containedInPlace: {
          '@type': 'State',
          name: 'Texas',
        },
      },
      serviceType: titleEs.replace(isSpanish ? ' Abogado' : ' Lawyer', ''),
      priceRange: isSpanish ? 'Consulta Gratis - Sin Honorarios a Menos Que Gane' : 'Free Consultation - No Fee Unless You Win',
      inLanguage: lang,
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: isSpanish ? 'Inicio' : 'Home',
          item: `${baseUrl}${langPrefix}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: titleEs,
          item: `${baseUrl}${langPrefix}/${practiceArea.slug}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: isSpanish ? `${shortTitleEs} en ${cityNameEs}` : `${city.name} ${practiceArea.shortTitle}`,
          item: `${baseUrl}${langPrefix}/${pageSlug}`,
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
      url: `${baseUrl}${langPrefix}/blog/${blogPost.slug}`,
      datePublished: blogPost.date,
      dateModified: blogPost.date,
      inLanguage: lang,
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
      name: isSpanish ? 'Contacte GetPaid.law' : 'Contact GetPaid.law',
      description: isSpanish
        ? 'Contacte a nuestros abogados de lesiones personales en Texas para una consulta gratis.'
        : 'Contact our Texas personal injury lawyers for a free consultation.',
      url: `${baseUrl}${langPrefix}/${isSpanish ? 'contacto' : 'contact'}`,
      mainEntity: organizationSchema,
      inLanguage: lang,
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
