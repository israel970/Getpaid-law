import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Consultation | Contact Us | GetPaid.law',
  description: 'Get a free case review from an experienced Texas personal injury attorney. Call (512) 883-0012 or fill out our form. No fees unless you win.',
  alternates: {
    canonical: 'https://www.getpaid.law/contact/',
  },
}

const caseTypes = [
  { value: 'Car Accident', label: 'Car Accident' },
  { value: 'Truck Accident', label: 'Truck Accident' },
  { value: 'Motorcycle Accident', label: 'Motorcycle Accident' },
  { value: 'Workplace Injury', label: 'Workplace Injury' },
  { value: 'Slip & Fall', label: 'Slip & Fall' },
  { value: 'Wrongful Death', label: 'Wrongful Death' },
  { value: 'Police Brutality', label: 'Police Brutality' },
  { value: 'Brain Injury', label: 'Brain Injury / TBI' },
  { value: 'Spinal Cord Injury', label: 'Spinal Cord Injury' },
  { value: 'Back Injury', label: 'Back / Neck Injury' },
  { value: 'Dog Bite', label: 'Dog Bite' },
  { value: 'Other', label: 'Other' },
]

export default function ContactPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact GetPaid.law",
            "description": "Get a free case review from an experienced Texas personal injury attorney.",
            "url": "https://www.getpaid.law/contact/",
            "mainEntity": {
              "@type": "Organization",
              "name": "GetPaid.law",
              "telephone": "+1-512-883-0012"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Get Your <span className="text-accent">Free Case Review</span>
            </h1>
            <p className="text-gray-light text-lg mb-8 leading-relaxed">
              Injured and not sure what to do next? Our team is here to help. Fill out the form or call us now to speak with an experienced attorney about your case.
            </p>

            {/* Phone CTA */}
            <div className="bg-dark border border-gray rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Prefer to Talk?</h2>
              <a
                href="tel:512-883-0012"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (512) 883-0012
              </a>
              <p className="text-gray-light text-sm mt-3">Available 24/7 for emergencies</p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold">100% Free Consultation</p>
                  <p className="text-gray-light text-sm">No cost to talk to us about your case</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold">No Fee Unless You Win</p>
                  <p className="text-gray-light text-sm">You only pay if we get you compensation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold">Fast Response</p>
                  <p className="text-gray-light text-sm">We&apos;ll get back to you within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark border border-gray rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2">Tell Us About Your Case</h2>
            <p className="text-gray-light mb-6">Fill out the form below and we&apos;ll be in touch shortly.</p>

            <form action="https://script.google.com/macros/s/AKfycbwu-Yc8nPaHrdJj3KEz8jvZJF6I51o7-ZIGYjBarvEPPPOzvNYWhqoQ7AxTrlINgmbAspw/exec" method="GET" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  required
                  className="w-full bg-black border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=""
                  required
                  className="w-full bg-black border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=""
                  className="w-full bg-black border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="caseType" className="block text-sm font-medium mb-2">Type of Injury *</label>
                <select
                  id="caseType"
                  name="caseType"
                  required
                  className="w-full bg-black border border-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select one</option>
                  {caseTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="story" className="block text-sm font-medium mb-2">Tell Us What Happened</label>
                <textarea
                  id="story"
                  name="story"
                  rows={4}
                  placeholder="Describe your injury and how it happened..."
                  className="w-full bg-black border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-black font-bold py-4 rounded-lg transition-colors text-lg"
              >
                Get My Free Case Review
              </button>

              <p className="text-gray-light text-xs text-center">
                By submitting, you agree to be contacted about your case. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
