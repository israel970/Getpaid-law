import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, cityPracticeAreas } from '@/lib/cities'
import { practiceAreas, getPracticeAreaBySlug, PracticeArea } from '@/lib/practiceAreas'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Parse the combined slug to extract city and practice area
function parseCityPracticeSlug(slug: string): { city: typeof cities[0] | undefined, practiceArea: PracticeArea | undefined } {
  for (const city of cities) {
    for (const practiceSlug of cityPracticeAreas) {
      const expectedSlug = `${city.slug}-${practiceSlug.replace('-lawyer', '')}-lawyer`
      if (slug === expectedSlug) {
        const practiceArea = getPracticeAreaBySlug(practiceSlug)
        return { city, practiceArea }
      }
    }
    // Also check for personal-injury-lawyer format
    if (slug === `${city.slug}-personal-injury-lawyer`) {
      return {
        city,
        practiceArea: {
          slug: 'personal-injury-lawyer',
          title: 'Personal Injury Lawyer',
          shortTitle: 'Personal Injury',
          description: 'Comprehensive personal injury legal services.',
          heroImage: 'personal-injury.jpg',
          category: 'General'
        }
      }
    }
  }
  return { city: undefined, practiceArea: undefined }
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []

  // Add all practice area slugs
  for (const area of practiceAreas) {
    params.push({ slug: area.slug })
  }

  // Add all city+practice combinations
  for (const city of cities) {
    for (const practiceSlug of cityPracticeAreas) {
      const combinedSlug = `${city.slug}-${practiceSlug.replace('-lawyer', '')}-lawyer`
      params.push({ slug: combinedSlug })
    }
  }

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  // Check if it's a practice area first
  const practiceArea = getPracticeAreaBySlug(slug)
  if (practiceArea) {
    return {
      title: `${practiceArea.title} | Free Consultation | GetPaid.law`,
      description: `Injured? Get matched with an experienced ${practiceArea.shortTitle.toLowerCase()} attorney today. Free consultation. No fees unless you win.`,
      alternates: {
        canonical: `https://www.getpaid.law/${practiceArea.slug}/`,
      },
    }
  }

  // Check if it's a city+practice combination
  const { city, practiceArea: cityPractice } = parseCityPracticeSlug(slug)
  if (city && cityPractice) {
    return {
      title: `${city.name} ${cityPractice.shortTitle} Lawyer | GetPaid.law`,
      description: `Experienced ${city.name} ${cityPractice.shortTitle.toLowerCase()} lawyer fighting for maximum compensation. Free consultation for ${city.county} victims.`,
      alternates: {
        canonical: `https://www.getpaid.law/${slug}/`,
      },
    }
  }

  return { title: 'Not Found' }
}

// City-specific data
const cityData: Record<string, { stats: { crashes: string, fatal: string, serious: string }, roads: { name: string, description: string, hotspots: string }[] }> = {
  austin: {
    stats: { crashes: '19,847', fatal: '87', serious: '412' },
    roads: [
      { name: 'Interstate 35 (I-35)', description: "Texas's deadliest interstate runs through downtown Austin.", hotspots: 'I-35 at US-290, I-35 at Ben White Blvd' },
      { name: 'MoPac Expressway (Loop 1)', description: 'High-speed commuter corridor with frequent rear-end collisions.', hotspots: 'MoPac at 2222, MoPac at Parmer Lane' },
      { name: 'US Highway 183', description: 'Major north-south artery connecting Cedar Park to the airport.', hotspots: '183 at Braker Lane, 183 at Research Blvd' },
    ]
  },
  houston: {
    stats: { crashes: '67,890', fatal: '378', serious: '1,245' },
    roads: [
      { name: 'Interstate 45', description: 'One of the deadliest highways in America.', hotspots: 'I-45 at 610 Loop, I-45 at Beltway 8' },
      { name: 'Interstate 10', description: 'The widest highway in the world still sees massive congestion.', hotspots: 'I-10 at 610 Loop, I-10 at Beltway 8' },
      { name: 'US Highway 290', description: 'Major commuter corridor to northwest suburbs.', hotspots: '290 at 610 Loop, 290 at Beltway 8' },
    ]
  },
  dallas: {
    stats: { crashes: '42,156', fatal: '198', serious: '892' },
    roads: [
      { name: 'Interstate 35E', description: 'Major north-south corridor through downtown Dallas.', hotspots: 'I-35E at I-30, I-35E at 635' },
      { name: 'Interstate 635 (LBJ Freeway)', description: 'High-speed loop around Dallas with complex interchanges.', hotspots: '635 at I-35E, 635 at US-75' },
      { name: 'US Highway 75', description: 'Major commuter route connecting Dallas to northern suburbs.', hotspots: 'US-75 at 635, US-75 at I-30' },
    ]
  },
  'san-antonio': {
    stats: { crashes: '28,456', fatal: '156', serious: '678' },
    roads: [
      { name: 'Interstate 35', description: 'Major corridor through downtown San Antonio.', hotspots: 'I-35 at I-10, I-35 at Loop 410' },
      { name: 'Interstate 10', description: 'East-west corridor connecting to Houston and El Paso.', hotspots: 'I-10 at I-35, I-10 at Loop 1604' },
      { name: 'Loop 410', description: 'Inner loop around San Antonio with high traffic volume.', hotspots: 'Loop 410 at I-35, Loop 410 at I-10' },
    ]
  },
}

const defaultCityData = {
  stats: { crashes: '15,000+', fatal: '75+', serious: '350+' },
  roads: [
    { name: 'Major Highways', description: 'High-speed highways see the most serious accidents.', hotspots: 'Interstate interchanges, major intersections' },
    { name: 'Urban Roads', description: 'City streets with heavy traffic and pedestrians.', hotspots: 'Downtown areas, shopping districts' },
    { name: 'Rural Roads', description: 'Two-lane roads with high speeds and limited visibility.', hotspots: 'Curves, intersections without signals' },
  ]
}

const locations = [
  { name: 'Austin Area', slug: 'austin', description: 'Serving Austin, Round Rock, Cedar Park, and Central Texas.' },
  { name: 'San Antonio', slug: 'san-antonio', description: 'Serving San Antonio, New Braunfels, and South Central Texas.' },
  { name: 'Houston', slug: 'houston', description: 'Serving Houston, The Woodlands, Sugar Land, and Greater Houston.' },
  { name: 'Dallas-Fort Worth', slug: 'dallas', description: 'Serving Dallas, Fort Worth, Arlington, and the DFW Metroplex.' },
  { name: 'Rio Grande Valley', slug: 'rio-grande-valley', description: 'Serving McAllen, Brownsville, Harlingen, and the RGV.' },
  { name: 'West Texas', slug: 'west-texas', description: 'Serving El Paso, Midland, Odessa, and West Texas.' },
]

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params

  // Check if it's a practice area first
  const practiceArea = getPracticeAreaBySlug(slug)
  if (practiceArea) {
    return <PracticeAreaPage practiceArea={practiceArea} />
  }

  // Check if it's a city+practice combination
  const { city, practiceArea: cityPractice } = parseCityPracticeSlug(slug)
  if (city && cityPractice) {
    return <CityPracticePage city={city} practiceArea={cityPractice} slug={slug} />
  }

  notFound()
}

// Practice Area Page Component
function PracticeAreaPage({ practiceArea }: { practiceArea: PracticeArea }) {
  const relatedAreas = practiceAreas
    .filter(a => a.category === practiceArea.category && a.slug !== practiceArea.slug)
    .slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": `GetPaid.law - ${practiceArea.title}s`,
            "description": practiceArea.description,
            "url": `https://www.getpaid.law/${practiceArea.slug}/`,
            "telephone": "(512) 883-0012",
            "areaServed": [
              { "@type": "State", "name": "Texas" },
              { "@type": "Country", "name": "United States" }
            ],
            "priceRange": "Free Consultation"
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              Injured? <span className="text-accent">Get the Compensation You Deserve</span>
            </h1>
            <p className="text-gray-light text-lg mb-8">
              {practiceArea.description} Insurance companies will try to lowball you. Our network of experienced attorneys fights for maximum compensation—and you pay nothing unless you win.
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:512-883-0012" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (512) 883-0012
              </a>
              <p className="text-gray-light text-sm text-center">Free consultation • Available 24/7 • No fee unless you win</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-accent">
            <div className="aspect-[4/3] bg-gray flex items-center justify-center">
              <span className="text-gray-light text-sm">{practiceArea.shortTitle}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Selection */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Select Your Location</h2>
            <p className="text-gray-light">Find a {practiceArea.shortTitle.toLowerCase()} lawyer near you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((location) => (
              <Link key={location.slug} href={`/${location.slug}-${practiceArea.slug.replace('-lawyer', '')}-lawyer`} className="bg-black border border-gray rounded-xl p-6 hover:border-accent transition-all group">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location.name}
                </h3>
                <p className="text-gray-light text-sm mb-3">{location.description}</p>
                <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  View {location.name} lawyers
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why You Need a Lawyer */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Why You Need a {practiceArea.shortTitle} Lawyer</h2>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            When you&apos;re dealing with a {practiceArea.shortTitle.toLowerCase()} case, insurance companies immediately start working to minimize what they pay you—not to help you get better.
          </p>
          <p className="text-gray-light text-lg mb-8 leading-relaxed">
            An experienced {practiceArea.shortTitle.toLowerCase()} lawyer levels the playing field. They handle the insurance adjusters, gather evidence, document your injuries, and fight for every dollar you deserve. And because they work on contingency, you don&apos;t pay a dime unless they win your case.
          </p>
          <h3 className="text-xl font-bold mb-4">What Insurance Companies Don&apos;t Want You to Know</h3>
          <ul className="text-gray-light space-y-3 mb-8 list-disc pl-6">
            <li><strong className="text-white">Quick settlement offers</strong> — They&apos;ll offer money fast, before you know the full extent of your injuries.</li>
            <li><strong className="text-white">Recorded statements</strong> — They&apos;ll ask for a recorded statement hoping you&apos;ll say something they can use against you.</li>
            <li><strong className="text-white">Delay tactics</strong> — They&apos;ll drag out the process hoping you&apos;ll get frustrated and accept less.</li>
            <li><strong className="text-white">Minimize your injuries</strong> — They&apos;ll question whether your injuries are really as serious as you claim.</li>
          </ul>
        </div>
      </section>

      {/* Texas Laws */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Texas Laws You Need to Know</h2>
          <h3 className="text-xl font-bold mb-3 mt-8">Statute of Limitations: 2 Years</h3>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            In Texas, you have <strong className="text-white">2 years from the date of your injury</strong> to file a personal injury lawsuit. If you miss this deadline, you lose your right to sue forever.
          </p>
          <h3 className="text-xl font-bold mb-3 mt-8">Modified Comparative Fault (51% Rule)</h3>
          <p className="text-gray-light text-lg mb-4 leading-relaxed">Texas follows a &quot;modified comparative fault&quot; system:</p>
          <ul className="text-gray-light space-y-2 mb-6 list-disc pl-6">
            <li>You can recover damages as long as you&apos;re <strong className="text-white">50% or less</strong> at fault</li>
            <li>If you&apos;re 51% or more at fault, you recover nothing</li>
            <li>Your compensation is reduced by your percentage of fault</li>
          </ul>
          <h3 className="text-xl font-bold mb-3 mt-8">No Cap on Damages</h3>
          <p className="text-gray-light text-lg leading-relaxed">
            Unlike some states, Texas does not cap damages in most personal injury cases. You can pursue full compensation for all economic and non-economic damages.
          </p>
        </div>
      </section>

      {/* Related Practice Areas */}
      {relatedAreas.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Related Practice Areas</h2>
              <p className="text-gray-light">Our attorneys also handle these types of cases.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedAreas.map((related) => (
                <Link key={related.slug} href={`/${related.slug}`} className="bg-dark border border-gray rounded-xl p-6 hover:border-accent transition-all">
                  <h3 className="text-lg font-bold mb-2">{related.shortTitle}</h3>
                  <p className="text-gray-light text-sm mb-3">{related.description}</p>
                  <span className="text-accent font-semibold text-sm">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Frequently Asked Questions</h2>
          <div className="border-t border-gray">
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">How much does a {practiceArea.shortTitle.toLowerCase()} lawyer cost?</h3>
              <p className="text-gray-light leading-relaxed">Most lawyers work on contingency, meaning you pay nothing upfront. The attorney only gets paid if you win your case, typically 33% of your settlement.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">How long do I have to file a claim in Texas?</h3>
              <p className="text-gray-light leading-relaxed">In Texas, you have 2 years from the date of the injury to file a personal injury lawsuit. Contact an attorney as soon as possible to protect your rights.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">How much is my case worth?</h3>
              <p className="text-gray-light leading-relaxed">Case values depend on medical expenses, lost wages, pain and suffering, and injury severity. Minor cases might settle for $10,000-$25,000, while serious injuries can be worth $100,000 to several million dollars.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">Should I accept the insurance company&apos;s first offer?</h3>
              <p className="text-gray-light leading-relaxed">Almost never. Insurance companies make quick, low offers hoping you&apos;ll settle before understanding your injuries. Always consult an attorney before accepting any offer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark to-black text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Don&apos;t Let Insurance Companies Take Advantage of You</h2>
          <p className="text-gray-light text-lg mb-8">
            Every day you wait, evidence disappears. Get an experienced {practiceArea.shortTitle.toLowerCase()} lawyer in your corner today.
          </p>
          <a href="tel:512-883-0012" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now: (512) 883-0012
          </a>
        </div>
      </section>
    </>
  )
}

// City + Practice Area Page Component
function CityPracticePage({ city, practiceArea, slug }: { city: typeof cities[0], practiceArea: PracticeArea, slug: string }) {
  const cityInfo = cityData[city.slug] || defaultCityData
  const relatedCities = cities.filter(c => c.slug !== city.slug).slice(0, 5)
  const relatedPracticeAreas = cityPracticeAreas
    .filter(p => p !== practiceArea.slug)
    .slice(0, 4)
    .map(slug => getPracticeAreaBySlug(slug))
    .filter(Boolean) as PracticeArea[]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": `GetPaid.law - ${city.name} ${practiceArea.shortTitle} Lawyer`,
            "description": `Experienced ${city.name} ${practiceArea.shortTitle.toLowerCase()} lawyer fighting for maximum compensation.`,
            "url": `https://www.getpaid.law/${slug}/`,
            "telephone": "(512) 883-0012",
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "containedInPlace": { "@type": "State", "name": "Texas" }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              {city.name} {practiceArea.shortTitle} Lawyer
            </h1>
            <p className="text-gray-light text-lg mb-8">
              Injured in {city.name}? Our experienced attorneys fight insurance companies to get you maximum compensation for your injuries. Free consultation for {city.county} residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:512-883-0012" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: (512) 883-0012
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                Free Consultation
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-accent">
            <div className="aspect-[4/3] bg-gray flex items-center justify-center">
              <span className="text-gray-light text-sm">{city.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need a Local Lawyer */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Why You Need a {city.name} {practiceArea.shortTitle} Lawyer</h2>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            {practiceArea.shortTitle} cases are among the most common personal injury claims in Texas, and {city.name} is no exception. When you&apos;re injured due to someone else&apos;s negligence, you need an experienced {city.name} attorney who understands local roads, local courts, and how to maximize your compensation.
          </p>
          <p className="text-gray-light text-lg leading-relaxed">
            Texas follows a modified comparative fault system, meaning you can recover damages as long as you&apos;re less than 51% at fault. Our attorneys know insurance company tactics and fight back aggressively to protect your rights.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">{practiceArea.shortTitle} Statistics in {city.name}</h2>
            <p className="text-gray-light">{city.name} and {city.county} see thousands of accidents each year.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-gray rounded-xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">{cityInfo.stats.crashes}</div>
              <div className="text-gray-light">Total Crashes (2023)</div>
            </div>
            <div className="bg-black border border-gray rounded-xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">{cityInfo.stats.fatal}</div>
              <div className="text-gray-light">Fatal Crashes</div>
            </div>
            <div className="bg-black border border-gray rounded-xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">{cityInfo.stats.serious}</div>
              <div className="text-gray-light">Serious Injury Crashes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dangerous Roads */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Dangerous Roads in {city.name}</h2>
          <div className="space-y-6">
            {cityInfo.roads.map((road, index) => (
              <div key={index} className="bg-dark border border-gray rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{road.name}</h3>
                <p className="text-gray-light mb-3">{road.description}</p>
                <p className="text-sm"><strong className="text-accent">High-risk areas:</strong> <span className="text-gray-light">{road.hotspots}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Why Choose a Local {city.name} Attorney?</h2>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            A local {city.name} {practiceArea.shortTitle.toLowerCase()} attorney offers significant advantages. We know which intersections are dangerous, which roads have design flaws, and which insurance adjusters are most likely to lowball claims.
          </p>
          <p className="text-gray-light text-lg leading-relaxed">
            We&apos;ve appeared before judges in {city.county} courts hundreds of times. Time is critical—evidence disappears, and the statute of limitations in Texas is just two years.
          </p>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Other Cases We Handle in {city.name}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedPracticeAreas.map((area) => (
              <Link key={area.slug} href={`/${city.slug}-${area.slug.replace('-lawyer', '')}-lawyer`} className="bg-dark border border-gray rounded-xl p-6 hover:border-accent transition-all">
                <h3 className="text-lg font-bold mb-2">{area.shortTitle}</h3>
                <span className="text-accent font-semibold text-sm">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">{practiceArea.shortTitle} Lawyers in Other Texas Cities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedCities.map((relatedCity) => (
              <Link key={relatedCity.slug} href={`/${relatedCity.slug}-${practiceArea.slug.replace('-lawyer', '')}-lawyer`} className="bg-black border border-gray rounded-lg p-4 text-center hover:border-accent transition-all">
                <p className="font-semibold">{relatedCity.name}</p>
                <p className="text-gray-light text-sm">{relatedCity.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Frequently Asked Questions</h2>
          <div className="border-t border-gray">
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">How much is my {city.name} case worth?</h3>
              <p className="text-gray-light leading-relaxed">Settlement values depend on injury severity, medical bills, lost wages, and insurance coverage. Minor injuries may settle for $10,000-$25,000, while serious injuries often exceed $100,000.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">Should I accept the insurance company&apos;s first offer?</h3>
              <p className="text-gray-light leading-relaxed">Almost never. Initial offers are typically far below fair value. An experienced attorney can often negotiate significantly higher settlements.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">How long do settlements take in {city.name}?</h3>
              <p className="text-gray-light leading-relaxed">Simple cases may settle in 3-6 months. More complex cases typically take 12-24 months. We work efficiently while ensuring fair compensation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark to-black text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Get Your Free Case Review Today</h2>
          <p className="text-gray-light text-lg mb-8">
            Don&apos;t let insurance companies take advantage of you. Get an experienced {city.name} {practiceArea.shortTitle.toLowerCase()} lawyer in your corner today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:512-883-0012" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
              Call: (512) 883-0012
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
