'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

// Language Toggle Component
function LanguageToggle() {
  const pathname = usePathname()
  const isSpanish = pathname.startsWith('/es')

  // Always returns the opposite language link (for toggle behavior)
  const getToggleLink = () => {
    if (isSpanish) {
      // Spanish to English
      if (pathname === '/es') return '/'
      if (pathname === '/es/nuestra-mision') return '/our-mission'
      if (pathname === '/es/nuestro-proceso') return '/our-process'
      if (pathname === '/es/socios') return '/partners'
      if (pathname === '/es/contacto') return '/contact'
      if (pathname === '/es/gracias') return '/thank-you'
      if (pathname === '/es/blog') return '/blog'
      if (pathname.startsWith('/es/blog/')) return pathname.replace('/es/blog/', '/blog/')
      if (pathname.startsWith('/es/')) {
        const rest = pathname.substring(4)
        return '/' + rest
      }
      return '/'
    } else {
      // English to Spanish
      if (pathname === '/') return '/es'
      if (pathname === '/our-mission') return '/es/nuestra-mision'
      if (pathname === '/our-process') return '/es/nuestro-proceso'
      if (pathname === '/partners') return '/es/socios'
      if (pathname === '/contact') return '/es/contacto'
      if (pathname === '/thank-you') return '/es/gracias'
      if (pathname === '/blog') return '/es/blog'
      if (pathname.startsWith('/blog/')) return '/es' + pathname
      return '/es' + pathname
    }
  }

  const toggleLink = getToggleLink()

  return (
    <Link
      href={toggleLink}
      className="relative flex items-center bg-dark/80 backdrop-blur-sm rounded-full p-0.5 md:p-1 border border-white/10 no-underline cursor-pointer hover:border-white/20 active:scale-95 transition-all touch-manipulation"
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
    >
      {/* Sliding pill background */}
      <div
        className={`absolute top-0.5 md:top-1 bottom-0.5 md:bottom-1 w-[calc(50%-2px)] bg-gold rounded-full transition-all duration-300 ease-out shadow-lg ${
          isSpanish ? 'left-[calc(50%+1px)]' : 'left-0.5 md:left-1'
        }`}
      />

      {/* English option */}
      <div
        className={`relative z-10 flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1.5 md:py-1.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 ${
          !isSpanish ? 'text-black' : 'text-gray-light'
        }`}
      >
        <span className="text-sm md:text-base">🇺🇸</span>
        <span>EN</span>
      </div>

      {/* Spanish option */}
      <div
        className={`relative z-10 flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1.5 md:py-1.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300 ${
          isSpanish ? 'text-black' : 'text-gray-light'
        }`}
      >
        {/* Realistic globe icon with green accent */}
        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
          {/* Ocean background */}
          <circle cx="12" cy="12" r="9" fill="#22c55e" opacity="0.2"/>
          {/* Globe outline */}
          <circle cx="12" cy="12" r="9" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
          {/* Latitude lines */}
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#22c55e" strokeWidth="1" fill="none"/>
          <ellipse cx="12" cy="12" rx="9" ry="7" stroke="#22c55e" strokeWidth="0.75" fill="none" opacity="0.6"/>
          {/* Longitude line */}
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#22c55e" strokeWidth="1" fill="none"/>
          {/* Center vertical line */}
          <line x1="12" y1="3" x2="12" y2="21" stroke="#22c55e" strokeWidth="0.75" opacity="0.6"/>
          {/* Center horizontal line */}
          <line x1="3" y1="12" x2="21" y2="12" stroke="#22c55e" strokeWidth="0.75" opacity="0.6"/>
        </svg>
        <span>ES</span>
      </div>
    </Link>
  )
}

const practiceAreas = [
  { name: 'Car Accidents', href: '/car-accident-lawyer' },
  { name: 'Truck Accidents', href: '/truck-accident-lawyer' },
  { name: 'Motorcycle Accidents', href: '/motorcycle-accident-lawyer' },
  { name: 'Wrongful Death', href: '/wrongful-death-lawyer' },
  { name: 'Slip & Fall', href: '/slip-and-fall-lawyer' },
  { name: 'Workplace Injuries', href: '/workplace-injury-lawyer' },
  { name: 'Police Brutality', href: '/police-brutality-lawyer' },
]

const locations = [
  { name: 'Austin', href: '/austin-personal-injury-lawyer' },
  { name: 'San Antonio', href: '/san-antonio-personal-injury-lawyer' },
  { name: 'Houston', href: '/houston-personal-injury-lawyer' },
  { name: 'Dallas-Fort Worth', href: '/dallas-personal-injury-lawyer' },
  { name: 'Rio Grande Valley', href: '/rio-grande-valley-personal-injury-lawyer' },
  { name: 'West Texas', href: '/west-texas-personal-injury-lawyer' },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.classList.remove('menu-open')
  }

  return (
    <div className="sticky top-0 left-0 right-0 bg-black border-b border-gray z-[1000]">
      <header className="px-4 md:px-8 py-6 flex justify-between items-center max-w-[1200px] mx-auto">
        <Link href="/" className="text-2xl font-black tracking-tight text-white no-underline">
          Get<span className="text-accent">Paid</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-white no-underline font-semibold text-[1.05rem] hover:text-accent transition-colors">
            Home
          </Link>

          {/* Practice Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('practice')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="text-white font-semibold text-[1.05rem] cursor-pointer flex items-center gap-1 hover:text-accent transition-colors">
              Practice Areas
              <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'practice' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            {openDropdown === 'practice' && (
              <div className="absolute top-full left-0 bg-dark border border-gray rounded-lg py-2 min-w-[200px] mt-1 z-[1001]">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="block px-5 py-2.5 text-gray-light text-base no-underline hover:bg-gray hover:text-white transition-all"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('locations')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="text-white font-semibold text-[1.05rem] cursor-pointer flex items-center gap-1 hover:text-accent transition-colors">
              Locations
              <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'locations' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            {openDropdown === 'locations' && (
              <div className="absolute top-full left-0 bg-dark border border-gray rounded-lg py-2 min-w-[200px] mt-1 z-[1001]">
                {locations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="block px-5 py-2.5 text-gray-light text-base no-underline hover:bg-gray hover:text-white transition-all"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/our-mission" className="text-white no-underline font-semibold text-[1.05rem] hover:text-accent transition-colors">
            Our Mission
          </Link>
          <Link href="/blog" className="text-white no-underline font-semibold text-[1.05rem] hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/our-process" className="text-white no-underline font-semibold text-[1.05rem] hover:text-accent transition-colors">
            Our Process
          </Link>
        </nav>

        {/* Phone Number & Language Toggle (far right) */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:512-883-0012" className="flex items-center gap-2 text-white no-underline font-bold text-xl hover:text-accent transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(512) 883-0012</span>
          </a>
          <LanguageToggle />
        </div>

        {/* Mobile: Language Toggle & Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageToggle />
          <button
            className="p-2"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-[999] pt-20 px-4 overflow-y-auto">
          <nav className="flex flex-col">
            <Link href="/" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Home
            </Link>
            <Link href="/car-accident-lawyer" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Car Accidents
            </Link>
            <Link href="/truck-accident-lawyer" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Truck Accidents
            </Link>
            <Link href="/motorcycle-accident-lawyer" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Motorcycle Accidents
            </Link>
            <Link href="/workplace-injury-lawyer" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Workplace Injuries
            </Link>
            <Link href="/wrongful-death-lawyer" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Wrongful Death
            </Link>
            <Link href="/our-mission" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Our Mission
            </Link>
            <Link href="/blog" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Blog
            </Link>
            <Link href="/our-process" onClick={closeMobileMenu} className="py-4 text-white text-lg font-medium border-b border-gray no-underline">
              Our Process
            </Link>
            {/* Call & Text Buttons */}
            <div className="mt-6 flex gap-3">
              <a href="tel:512-883-0012" className="flex-1 py-4 bg-accent text-black text-center font-bold rounded-lg no-underline flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
              </a>
              <a
                href="sms:5128830012?body=Match%20me%20with%20the%20perfect%20attorney"
                className="flex-1 py-4 bg-gold text-black text-center font-bold rounded-lg no-underline flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Text Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
