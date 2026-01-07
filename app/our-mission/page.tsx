import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Mission | GetPaid.law',
  description: 'GetPaid.law was built because too many injury victims get ripped off. We connect you with attorneys who fight for YOU, not their fee.',
  alternates: {
    canonical: 'https://www.getpaid.law/our-mission/',
  },
}

export default function OurMissionPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Our Mission - GetPaid.law",
            "description": "GetPaid.law was built because too many injury victims get ripped off.",
            "url": "https://www.getpaid.law/our-mission/"
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Our <span className="text-accent">Mission</span>
          </h1>
          <p className="text-gray-light text-xl md:text-2xl leading-relaxed">
            GetPaid.law was built because too many injury victims get ripped off. We connect you with attorneys who fight for YOU, not their fee.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">The Problem We&apos;re Solving</h2>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            When you&apos;re injured, you&apos;re vulnerable. You&apos;re dealing with pain, medical bills, and lost income. The last thing you need is to worry about whether your lawyer is actually fighting for your best interests—or just looking for a quick settlement to pad their fee.
          </p>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            Too many personal injury firms prioritize volume over quality. They settle cases quickly for less than they&apos;re worth, move on to the next client, and leave injured victims without the compensation they deserve.
          </p>
          <p className="text-gray-light text-lg leading-relaxed">
            Insurance companies count on this. They know that inexperienced or overworked attorneys will accept lowball offers. They bank on you not knowing the true value of your case.
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">How We&apos;re Different</h2>
          <p className="text-gray-light text-lg mb-8 leading-relaxed">
            GetPaid.law connects you with experienced, vetted attorneys who have a track record of fighting for maximum compensation. We don&apos;t work with high-volume settlement mills. We work with lawyers who:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="text-white font-semibold">Take the time to understand your case</p>
                <p className="text-gray-light">Every injury is different. Your attorney should know the details that make your case unique.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="text-white font-semibold">Fight for maximum compensation</p>
                <p className="text-gray-light">Not quick settlements. Real compensation that accounts for all your damages—current and future.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="text-white font-semibold">Aren&apos;t afraid to go to trial</p>
                <p className="text-gray-light">Insurance companies settle for more when they know your lawyer will take them to court if necessary.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <p className="text-white font-semibold">Communicate clearly and often</p>
                <p className="text-gray-light">You should never feel in the dark about your case. Our attorneys keep you informed every step of the way.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Our Promise to You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">Free Consultation</h3>
              <p className="text-gray-light">You&apos;ll never pay for an initial case review. We evaluate your situation at no cost to you.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">No Fee Unless You Win</h3>
              <p className="text-gray-light">Our attorneys work on contingency. You pay nothing unless they recover compensation for you.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">Vetted Attorneys Only</h3>
              <p className="text-gray-light">We only work with experienced attorneys who have proven track records of success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to Get What You Deserve?</h2>
          <p className="text-gray-light text-lg mb-8">
            Don&apos;t settle for less. Let us connect you with an attorney who will fight for your rights.
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
