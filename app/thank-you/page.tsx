import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Your Case is in Good Hands | GetPaid.law',
  description: 'Thank you for submitting your case. Our team is reviewing your information and will connect you with an experienced attorney shortly.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-[600px] mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-6">
          Thank You!
        </h1>

        <p className="text-gray-light text-xl mb-8 leading-relaxed">
          Your case information has been submitted successfully. Our team is reviewing your details and will connect you with an experienced attorney shortly.
        </p>

        {/* What to Expect */}
        <div className="bg-dark border border-gray rounded-xl p-6 mb-8 text-left">
          <h2 className="text-xl font-bold mb-4 text-center">What Happens Next?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent text-black rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
              <p className="text-gray-light">We review your case details within 24 hours</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent text-black rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
              <p className="text-gray-light">We match you with an attorney who specializes in your type of case</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent text-black rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
              <p className="text-gray-light">Your attorney contacts you to discuss your case and next steps</p>
            </li>
          </ul>
        </div>

        {/* Urgent Contact */}
        <div className="bg-dark border border-accent rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold mb-2">Need Immediate Help?</h2>
          <p className="text-gray-light mb-4">Call us directly to speak with someone right now.</p>
          <a
            href="tel:512-883-0012"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (512) 883-0012
          </a>
        </div>

        <Link
          href="/"
          className="text-accent hover:text-accent-hover font-semibold"
        >
          ← Return to Homepage
        </Link>
      </div>
    </section>
  )
}
