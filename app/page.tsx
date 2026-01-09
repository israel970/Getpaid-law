'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { practiceAreas } from '@/lib/practiceAreas'
import { featuredCities } from '@/lib/cities'
import Schema from '@/components/Schema'
import ScrollReveal from '@/components/ScrollReveal'
import TiltCard from '@/components/TiltCard'
import AnimatedCounter from '@/components/AnimatedCounter'
import TexasMap from '@/components/TexasMap'

const settlements = [
  { amount: 13660000, display: '$13.66M', type: 'Premises Liability' },
  { amount: 8600000, display: '$8.6M', type: 'Trucking Accident' },
  { amount: 5710000, display: '$5.71M', type: 'Workplace Injury' },
  { amount: 5200000, display: '$5.2M', type: 'Premises Liability' },
  { amount: 4300000, display: '$4.3M', type: 'Trucking Accident' },
  { amount: 3680000, display: '$3.68M', type: 'Trial Verdict' },
  { amount: 3500000, display: '$3.5M', type: 'Auto Accident' },
  { amount: 3300000, display: '$3.3M', type: 'Trucking Accident' },
  { amount: 2600000, display: '$2.6M', type: 'Motorcycle Accident' },
  { amount: 2300000, display: '$2.3M', type: 'Auto Accident' },
  { amount: 2200000, display: '$2.2M', type: 'Trucking Accident' },
  { amount: 1800000, display: '$1.8M', type: 'Auto Accident' },
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

// Media logos for "As Seen On" section
const mediaLogos = [
  { name: 'CNN', src: '/images/media/cnn.svg', width: 80, height: 32 },
  { name: 'NBC', src: '/images/media/nbc.svg', width: 60, height: 40 },
  { name: 'Telemundo', src: '/images/media/telemundo.svg', width: 140, height: 32 },
  { name: 'Univision', src: '/images/media/univision.svg', width: 130, height: 32 },
  { name: 'Daily Mail', src: '/images/media/dailymail.svg', width: 130, height: 32 },
]

// Award badges
const awardBadges = [
  { name: 'Million Dollar Advocates Forum', subtitle: 'Member', src: '/images/badges/million-dollar-advocates.svg' },
  { name: 'Super Lawyers', subtitle: 'Rising Stars', src: '/images/badges/super-lawyers.svg' },
  { name: 'Top 100', subtitle: 'Trial Lawyers', src: '/images/badges/top-100-trial-lawyers.svg' },
  { name: 'AV Rated', subtitle: 'Martindale-Hubbell', src: '/images/badges/av-rated.svg' },
]

export default function HomePage() {
  const featuredPracticeAreas = practiceAreas.slice(0, 6)
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const ctaRef = useRef<HTMLElement>(null)

  // Parallax effect for final CTA
  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const scrollProgress = 1 - (rect.top / windowHeight)
        if (scrollProgress > 0 && scrollProgress < 2) {
          setParallaxOffset(scrollProgress * 50)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Schema type="home" />

      {/* Settlement Ticker with Gold Amounts */}
      <div className="bg-dark py-3 overflow-hidden border-b border-gray">
        <div className="flex animate-scroll">
          {[...settlements, ...settlements].map((settlement, index) => (
            <div key={index} className="flex-shrink-0 px-8 flex items-center gap-2">
              <span className="text-gold font-bold text-lg">{settlement.display}</span>
              <span className="text-gray-light text-sm">{settlement.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Video Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/heroes/hero-poster.jpg"
        >
          <source src="https://cdn.coverr.co/videos/coverr-traffic-at-night-510/1080p.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 w-full py-16 md:py-24 px-4">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" duration={800}>
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
            </ScrollReveal>

            {/* Glassmorphism Contact Form */}
            <ScrollReveal direction="right" duration={800} delay={200}>
              <div className="glass rounded-2xl p-6 md:p-8">
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
                        placeholder=""
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="entry.phone"
                        placeholder=""
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="case-type" className="block text-sm font-medium mb-2">Type of Injury</label>
                      <select
                        id="case-type"
                        name="entry.case-type"
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
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
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors resize-none backdrop-blur-sm"
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* As Seen On - Media Logo Ticker */}
      <section className="py-8 bg-black border-y border-gray/50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 mb-4">
          <p className="text-center text-gray-light text-sm uppercase tracking-widest">As Seen On</p>
        </div>
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex animate-scroll">
            {[...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center group cursor-pointer"
              >
                <div className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,184,0,0.5)]">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-8 md:h-10 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Settlement Stats */}
      <section className="py-12 px-4 bg-dark border-y border-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal delay={0}>
              <div>
                <div className="text-3xl md:text-4xl font-black text-gold">
                  <AnimatedCounter target={500} suffix="+" duration={2000} />
                </div>
                <p className="text-gray-light text-sm mt-1">Cases Won</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <div className="text-3xl md:text-4xl font-black text-gold">
                  $<AnimatedCounter target={150} suffix="M+" duration={2000} />
                </div>
                <p className="text-gray-light text-sm mt-1">Recovered</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <div className="text-3xl md:text-4xl font-black text-gold">
                  <AnimatedCounter target={98} suffix="%" duration={2000} />
                </div>
                <p className="text-gray-light text-sm mt-1">Success Rate</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <div className="text-3xl md:text-4xl font-black text-gold">
                  <AnimatedCounter target={50} suffix="+" duration={2000} />
                </div>
                <p className="text-gray-light text-sm mt-1">Partner Attorneys</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">How It Works</h2>
              <p className="text-gray-light max-w-xl mx-auto">Getting the compensation you deserve shouldn&apos;t be complicated.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 150}>
                <div className="bg-gray border border-gray rounded-2xl p-8 text-center h-full">
                  <div className="w-12 h-12 bg-accent text-black rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-light">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Award Badges Ticker */}
      <section className="py-10 bg-black overflow-hidden border-b border-gray/30">
        <div className="max-w-[1200px] mx-auto px-4 mb-6">
          <p className="text-center text-gray-light text-sm uppercase tracking-widest">Recognized Excellence</p>
        </div>
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex animate-scroll" style={{ animationDuration: '25s' }}>
            {[...awardBadges, ...awardBadges, ...awardBadges, ...awardBadges].map((badge, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center"
              >
                <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,184,0,0.4)] group cursor-pointer">
                  {/* Badge Image */}
                  <Image
                    src={badge.src}
                    alt={badge.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 mb-2"
                  />
                  <span className="text-white text-xs md:text-sm font-semibold text-center leading-tight max-w-[120px]">{badge.name}</span>
                  <span className="text-gold text-xs">{badge.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Types with Video Background */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-2387/1080p.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay - 80% opacity */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Cases We Handle</h2>
              <p className="text-gray-light max-w-xl mx-auto">Our network includes experienced attorneys for every type of personal injury.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPracticeAreas.map((area, index) => (
              <ScrollReveal key={area.slug} delay={index * 100}>
                <TiltCard className="h-full">
                  <Link
                    href={`/${area.slug}`}
                    className="block glass rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-colors h-full"
                  >
                    <h3 className="text-xl font-bold mb-2">{area.shortTitle}</h3>
                    <p className="text-gray-light text-sm mb-4">{area.description}</p>
                    <span className="text-accent font-semibold text-sm">Learn more →</span>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={600}>
            <div className="text-center mt-8">
              <Link
                href="/car-accident-lawyer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold"
              >
                View all practice areas →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Locations with Interactive Map */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Serving All of Texas</h2>
              <p className="text-gray-light max-w-xl mx-auto">Click on a city to find experienced attorneys in your area.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <TexasMap />
          </ScrollReveal>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-20 md:py-28 px-4 overflow-hidden"
      >
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent/20 via-gold/10 to-black"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 184, 0, 0.2) 0%, transparent 50%)',
            transform: `translateY(${parallaxOffset * 0.5}px)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Ready to Get What You <span className="text-gold">Deserve</span>?
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
