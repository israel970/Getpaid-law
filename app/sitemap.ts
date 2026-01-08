import { MetadataRoute } from 'next'
import { practiceAreas } from '@/lib/practiceAreas'
import { cities, cityPracticeAreas } from '@/lib/cities'
import { blogPosts } from '@/lib/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.getpaid.law'

  // Static pages - English
  const staticPagesEn: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/our-mission`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Static pages - Spanish
  const staticPagesEs: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/nuestra-mision`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es/nuestro-proceso`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/es/socios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Practice area pages - English
  const practiceAreaPagesEn: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${baseUrl}/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Practice area pages - Spanish
  const practiceAreaPagesEs: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${baseUrl}/es/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // City + Practice area combination pages - English
  const cityPracticePagesEn: MetadataRoute.Sitemap = cities.flatMap((city) =>
    cityPracticeAreas.map((practiceSlug) => ({
      url: `${baseUrl}/${city.slug}-${practiceSlug.replace('-lawyer', '')}-lawyer`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  // City + Practice area combination pages - Spanish
  const cityPracticePagesEs: MetadataRoute.Sitemap = cities.flatMap((city) =>
    cityPracticeAreas.map((practiceSlug) => ({
      url: `${baseUrl}/es/${city.slug}-${practiceSlug.replace('-lawyer', '')}-lawyer`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  // Blog posts - English
  const blogPagesEn: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  // Blog posts - Spanish
  const blogPagesEs: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/es/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [
    ...staticPagesEn,
    ...staticPagesEs,
    ...practiceAreaPagesEn,
    ...practiceAreaPagesEs,
    ...cityPracticePagesEn,
    ...cityPracticePagesEs,
    ...blogPagesEn,
    ...blogPagesEs,
  ]
}
