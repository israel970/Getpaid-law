import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug } from '@/lib/blogPosts'
import { getBlogCategoryEs } from '@/lib/practiceAreasEs'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return { title: 'No Encontrado' }
  }

  return {
    title: `${post.title} | GetPaid.law`,
    description: post.description,
    alternates: {
      canonical: `https://www.getpaid.law/es/blog/${post.slug}/`,
      languages: {
        'en': `https://www.getpaid.law/blog/${post.slug}/`,
        'es': `https://www.getpaid.law/es/blog/${post.slug}/`,
      },
    },
  }
}

export default async function SpanishBlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Simple markdown-like content rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: JSX.Element[] = []
    let currentList: string[] = []
    let listType: 'ul' | 'ol' | null = null

    const flushList = () => {
      if (currentList.length > 0) {
        const ListTag = listType === 'ol' ? 'ol' : 'ul'
        elements.push(
          <ListTag key={elements.length} className="text-gray-light text-lg mb-6 pl-6 space-y-2 list-disc">
            {currentList.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
            ))}
          </ListTag>
        )
        currentList = []
        listType = null
      }
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      if (trimmedLine === '') {
        flushList()
        return
      }

      // H2
      if (trimmedLine.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        )
        return
      }

      // H3
      if (trimmedLine.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={index} className="text-xl font-bold mt-8 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        )
        return
      }

      // List items
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList()
          listType = 'ul'
        }
        currentList.push(trimmedLine.replace(/^[-*] /, ''))
        return
      }

      // Numbered list
      if (/^\d+\. /.test(trimmedLine)) {
        if (listType !== 'ol') {
          flushList()
          listType = 'ol'
        }
        currentList.push(trimmedLine.replace(/^\d+\. /, ''))
        return
      }

      // Regular paragraph
      flushList()
      elements.push(
        <p
          key={index}
          className="text-gray-light text-lg mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
          }}
        />
      )
    })

    flushList()
    return elements
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.description,
            "inLanguage": "es",
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "GetPaid.law"
            },
            "datePublished": post.date,
            "dateModified": post.date
          })
        }}
      />

      {/* Breadcrumb */}
      <div className="max-w-[800px] mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-light">
          <Link href="/es" className="hover:text-gold">Inicio</Link>
          <span className="mx-2">›</span>
          <Link href="/es/blog" className="hover:text-gold">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-white">{post.title}</span>
        </nav>
      </div>

      {/* Article */}
      <article className="max-w-[800px] mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
              {getBlogCategoryEs(post.category)}
            </span>
            <span className="text-gray-light text-sm">{post.date}</span>
            <span className="text-gray-light text-sm">• Por {post.author}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-gray-light text-xl leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-dark border border-gold rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesita Ayuda Legal?</h2>
          <p className="text-gray-light mb-6">
            Si ha sido lesionado, nuestros abogados experimentados están aquí para ayudar. Obtenga una consulta gratis hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:512-883-0012"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (512) 883-0012
            </a>
            <Link
              href="/es/contacto"
              className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-black font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Evaluación Gratis
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-black mb-8 text-center">Más Artículos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/es/blog/${relatedPost.slug}`}
                  className="bg-black border border-gray rounded-xl p-6 hover:border-gold transition-all group"
                >
                  <span className="text-gold text-xs font-semibold uppercase">{getBlogCategoryEs(relatedPost.category)}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-gold transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-light text-sm line-clamp-2">{relatedPost.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
