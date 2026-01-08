import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'
import { getBlogCategoryEs } from '@/lib/practiceAreasEs'

export const metadata: Metadata = {
  title: 'Blog | Guías Legales de Lesiones Personales | GetPaid.law',
  description: 'Guías legales y recursos expertos para víctimas de lesiones personales en Texas. Conozca sus derechos, cómo manejar compañías de seguros y maximizar su compensación.',
  alternates: {
    canonical: 'https://www.getpaid.law/es/blog/',
    languages: {
      'en': 'https://www.getpaid.law/blog/',
      'es': 'https://www.getpaid.law/es/blog/',
    },
  },
}

export default function SpanishBlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Recursos <span className="text-accent">Legales</span>
          </h1>
          <p className="text-gray-light text-xl leading-relaxed">
            Guías expertas para ayudarlo a entender sus derechos, navegar el proceso legal y maximizar su compensación.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/es/blog/${post.slug}`}
                className="block bg-black border border-gray rounded-xl p-6 md:p-8 hover:border-accent transition-all group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                    {getBlogCategoryEs(post.category)}
                  </span>
                  <span className="text-gray-light text-sm">{post.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-light mb-4 leading-relaxed">
                  {post.description}
                </p>
                <span className="text-accent font-semibold flex items-center gap-2">
                  Leer artículo
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">¿Tiene Preguntas Sobre Su Caso?</h2>
          <p className="text-gray-light text-lg mb-8">
            Nuestros abogados están aquí para ayudar. Obtenga una consulta gratis hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:512-883-0012"
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llame (512) 883-0012
            </a>
            <Link
              href="/es/contacto"
              className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Evaluación Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
