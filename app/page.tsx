import Link from 'next/link'
import { practiceAreas, categories } from '@/lib/practiceAreas'
import { featuredCities } from '@/lib/cities'
import Schema from '@/components/Schema'

const settlements = [
  { amount: '$13,660,000', type: 'Premises Liability' },
  { amount: '$8,600,000', type: 'Trucking Accident' },
  { amount: '$5,710,000', type: 'Workplace Injury' },
  { amount: '$5,200,000', type: 'Premises Liability' },
  { amount: '$4,300,000', type: 'Trucking Accident' },
  { amount: '$3,680,000', type: 'Trial Verdict' },
  { amount: '$3,500,000', type: 'Auto Accident' },
  { amount: '$3,300,000', type: 'Trucking Accident' },
  { amount: '$2,600,000', type: 'Motorcycle Accident' },
  { amount: '$2,300,000', type: 'Auto Accident' },
  { amount: '$2,200,000', type: 'Trucking Accident' },
  { amount: '$1,800,000', type: 'Auto Accident' },
]

const caseTypes = [
  { value: 'Car Accident', label: 'Car Accident' },
  { value: 'Truck Accident', label: 'Truck Accident' },
  { value: 'Motorcycle Accident', label: 'Motorcycle Accident' },
  { value: 'Workplace Injury', label: 'Workplace Injury' },
  { value: 'Slip & Fall', label: 'Slip & Fall' },
  { value: 'Wrongful Death', label: 'Wrongful Death' },
  { value: 'Police Brutality', label: 'Police Brutality' },
  { value: 'Other', label: 'Other' },
]

const steps = [
  { number: 1, title: 'Tell Us What Happened', description: 'Share the details of your injury through our secure form or call.' },
  { number: 2, title: 'Get Matched', description: 'We connect you with an experienced attorney who handles your type of case.' },
  { number: 3, title: 'Fight & Win', description: 'Your attorney fights for maximum compensation. You pay nothing unless you win.' },
]

export default function HomePage() {
  const featuredPracticeAreas = practiceAreas.slice(0, 6)

  return (
    <>
      <Schema type="home" />
      {/* Settlement Ticker */}
      <div className="bg-dark py-3 overflow-hidden border-b border-gray">
        <div className="flex animate-scroll">
          {[...settlements, ...settlements].map((settlement, index) => (
            <div key={index} className="flex-shrink-0 px-8 flex items-center gap-2">
              <span className="text-accent font-bold text-lg">{settlement.amount}</span>
              <span className="text-gray-light text-sm">{settlement.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Injured? <span className="text-accent">Get What You Deserve.</span>
            </h1>
            <p className="text-gray-light text-lg md:text-xl mb-8">
              Insurance companies have armies of lawyers. Now you do too. We connect you with top personal injury attorneys nationwide—for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:512-883-0012"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (512) 883-0012
              </a>
            </div>
            <p className="text-gray-light text-sm mt-4">Free consultation • Available 24/7 • No fee unless you win</p>
          </div>

          {/* Contact Form */}
          <div className="bg-dark border border-gray rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2">Free Case Review</h2>
            <p className="text-gray-light mb-6">Get matched with the right attorney in minutes.</p>
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSf.../formResponse" method="POST" target="_blank">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="entry.name"
                    placeholder="John Smith"
                    required
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="entry.phone"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="case-type" className="block text-sm font-medium mb-2">Type of Injury</label>
                  <select
                    id="case-type"
                    name="entry.case-type"
                    required
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="" disabled>Select one</option>
                    {caseTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="story" className="block text-sm font-medium mb-2">Tell Us Your Story</label>
                  <textarea
                    id="story"
                    name="entry.story"
                    rows={3}
                    placeholder="Briefly describe what happened..."
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-black font-bold py-4 rounded-lg transition-colors text-lg"
                >
                  Get What I Deserve →
                </button>
              </div>
              <p className="text-gray-light text-xs mt-4 text-center">
                By submitting, you agree to be contacted about your case. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">How It Works</h2>
            <p className="text-gray-light max-w-xl mx-auto">Getting the compensation you deserve shouldn&apos;t be complicated.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-gray border border-gray rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-accent text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Types */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Cases We Handle</h2>
            <p className="text-gray-light max-w-xl mx-auto">Our network includes experienced attorneys for every type of personal injury.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPracticeAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="bg-gray rounded-xl p-6 border border-transparent hover:border-accent transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2">{area.shortTitle}</h3>
                <p className="text-gray-light text-sm mb-4">{area.description}</p>
                <span className="text-accent font-semibold text-sm">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/car-accident-lawyer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold"
            >
              View all practice areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Serving All of Texas</h2>
            <p className="text-gray-light max-w-xl mx-auto">Find experienced attorneys in your area.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}-personal-injury-lawyer`}
                className="bg-gray rounded-lg p-4 text-center hover:border-accent border border-transparent transition-all"
              >
                <p className="font-semibold">{city.name}</p>
                <p className="text-gray-light text-sm">{city.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Get What You Deserve?
          </h2>
          <p className="text-gray-light text-lg mb-8">
            Don&apos;t let insurance companies take advantage of you. Get a free case review today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:512-883-0012"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
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
