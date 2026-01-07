import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark py-12 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="text-2xl font-black mb-6">
          Get<span className="text-accent">Paid</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          <Link href="/our-mission" className="text-gray-light hover:text-white transition-colors no-underline">
            Our Mission
          </Link>
          <Link href="/blog" className="text-gray-light hover:text-white transition-colors no-underline">
            Blog
          </Link>
          <Link href="/our-process" className="text-gray-light hover:text-white transition-colors no-underline">
            Our Process
          </Link>
          <Link href="/austin-personal-injury-lawyer" className="text-gray-light hover:text-white transition-colors no-underline">
            Austin
          </Link>
          <Link href="/houston-personal-injury-lawyer" className="text-gray-light hover:text-white transition-colors no-underline">
            Houston
          </Link>
          <Link href="/dallas-personal-injury-lawyer" className="text-gray-light hover:text-white transition-colors no-underline">
            Dallas
          </Link>
        </div>

        <p className="text-gray-light text-sm max-w-3xl mx-auto leading-relaxed">
          GetPaid.law is a lawyer referral service. We are not a law firm and do not provide legal advice.
          By submitting your information, you consent to be contacted by a participating attorney.
          Past results do not guarantee future outcomes. Each case is unique.
        </p>
      </div>
    </footer>
  )
}
