import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'
import ScrollReveal from '@/components/ScrollReveal'
import TiltCard from '@/components/TiltCard'

export const metadata: Metadata = {
  title: 'Blog | Personal Injury Legal Guides | GetPaid.law',
  description: 'Expert legal guides and resources for Texas personal injury victims. Learn about your rights, how to handle insurance companies, and maximize your compensation.',
  alternates: {
    canonical: 'https://www.getpaid.law/blog/',
  },
}

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Legal <span className="text-gold">Resources</span>
            </h1>
            <p className="text-gray-light text-xl leading-relaxed">
              Expert guides to help you understand your rights, navigate the legal process, and maximize your compensation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 100}>
                <TiltCard>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block glass rounded-xl p-6 md:p-8 hover:border-accent transition-all group"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                        {post.category}
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
                      Read article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-black mb-4">Have Questions About Your Case?</h2>
            <p className="text-gray-light text-lg mb-8">
              Our attorneys are here to help. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:512-883-0012"
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (512) 883-0012
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Free Case Review
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
