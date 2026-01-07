import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Process | How to Get Paid | GetPaid.law',
  description: 'See how GetPaid.law connects injured Texans with top personal injury attorneys. Free consultation, no upfront costs, and you don\'t pay unless you win.',
  alternates: {
    canonical: 'https://www.getpaid.law/our-process/',
  },
}

const steps = [
  {
    number: 1,
    title: 'Free Consultation',
    description: 'Contact us for a free case evaluation. We\'ll review your situation and determine if you have a valid claim. This consultation is 100% free with no obligation.',
    details: [
      'Call us or fill out our online form',
      'Tell us about your injury and how it happened',
      'We\'ll assess the strength of your potential case',
      'No cost, no pressure, no obligation'
    ]
  },
  {
    number: 2,
    title: 'Get Matched with the Right Attorney',
    description: 'Based on your case type and location, we connect you with an experienced attorney who specializes in your type of injury case.',
    details: [
      'We match you with attorneys who handle your specific case type',
      'All our attorneys are vetted for experience and track record',
      'Your attorney will contact you directly to discuss your case',
      'You\'ll get personal attention from a legal professional'
    ]
  },
  {
    number: 3,
    title: 'Your Attorney Fights for You',
    description: 'Your attorney handles everything—gathering evidence, dealing with insurance companies, negotiating settlements, and if necessary, taking your case to trial.',
    details: [
      'Your attorney investigates and builds your case',
      'They handle all communication with insurance companies',
      'They negotiate for maximum compensation',
      'If needed, they\'ll take your case to trial'
    ]
  },
  {
    number: 4,
    title: 'You Get Paid',
    description: 'When your case is resolved, you receive your compensation. You only pay attorney fees if you win—and only from the settlement or verdict.',
    details: [
      'No upfront costs or hidden fees',
      'You only pay if you win your case',
      'Attorney fees come from your settlement',
      'You keep the majority of your compensation'
    ]
  }
]

export default function OurProcessPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Get Paid for Your Personal Injury",
            "description": "See how GetPaid.law connects injured Texans with top personal injury attorneys.",
            "step": steps.map(step => ({
              "@type": "HowToStep",
              "name": step.title,
              "text": step.description
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            How to <span className="text-accent">Get Paid</span>
          </h1>
          <p className="text-gray-light text-xl md:text-2xl leading-relaxed">
            Getting the compensation you deserve shouldn&apos;t be complicated. Here&apos;s how our process works.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex flex-col md:flex-row gap-8 ${index < steps.length - 1 ? 'mb-16 pb-16 border-b border-gray' : ''}`}>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center font-black text-2xl">
                  {step.number}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black mb-4">{step.title}</h2>
                <p className="text-gray-light text-lg mb-6 leading-relaxed">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Why This Process Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-dark border border-gray rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-accent mb-3">$0</div>
              <h3 className="text-lg font-bold mb-2">Upfront Cost</h3>
              <p className="text-gray-light text-sm">You never pay anything out of pocket. Ever.</p>
            </div>
            <div className="bg-dark border border-gray rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-accent mb-3">24/7</div>
              <h3 className="text-lg font-bold mb-2">Availability</h3>
              <p className="text-gray-light text-sm">We&apos;re here when you need us, day or night.</p>
            </div>
            <div className="bg-dark border border-gray rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-accent mb-3">100%</div>
              <h3 className="text-lg font-bold mb-2">Commitment</h3>
              <p className="text-gray-light text-sm">Our attorneys fight for maximum compensation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Common Questions</h2>
          <div className="space-y-6">
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">How much does it cost to use GetPaid.law?</h3>
              <p className="text-gray-light">Nothing. Our service is completely free to you. You only pay attorney fees if you win your case, and those fees come from your settlement—not your pocket.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">How quickly will I hear from an attorney?</h3>
              <p className="text-gray-light">In most cases, an attorney will contact you within 24 hours of your initial consultation. For urgent cases, it may be even faster.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">What if I&apos;m not sure I have a case?</h3>
              <p className="text-gray-light">That&apos;s what the free consultation is for. We&apos;ll help you understand whether you have a valid claim and what your options are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to Start?</h2>
          <p className="text-gray-light text-lg mb-8">
            The sooner you start, the sooner you can get paid. Contact us now for your free consultation.
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
              className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Free Case Review
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
