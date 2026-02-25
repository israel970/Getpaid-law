'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

// City/scene images split into 3 rows for scrolling background
const row1Images = [
  'austin.jpg', 'dallas.jpg', 'houston.jpg', 'san-antonio.jpg',
  'car-accident.jpg', 'truck-accident.jpg', 'motorcycle-accident.jpg', 'workplace-injury.jpg',
]
const row2Images = [
  'round-rock.jpg', 'cedar-park.jpg', 'pflugerville.jpg', 'georgetown.jpg',
  'slip-and-fall.jpg', 'wrongful-death.jpg', 'brain-injury.jpg', 'spinal-injury.jpg',
]
const row3Images = [
  'kyle.jpg', 'lakeway.jpg', 'leander.jpg', 'san-marcos.jpg',
  'bee-cave.jpg', 'rio-grande-valley.jpg', 'west-texas.jpg', 'premises-liability.jpg',
]

const chipsEN = [
  'I was hit by a truck on I-35',
  'I slipped at a store',
  'I lost a family member',
  'I was in a car accident',
  'I was hurt at work',
  'I was hit on my motorcycle',
]

const chipsES = [
  'Me golpeó un camión en la I-35',
  'Me resbalé en una tienda',
  'Perdí a un familiar',
  'Estuve en un accidente de auto',
  'Me lesioné en el trabajo',
  'Me atropellaron en mi motocicleta',
]

interface HeroSectionProps {
  lang?: 'en' | 'es'
}

function ScrollingRow({
  images,
  direction,
  priority = false,
}: {
  images: string[]
  direction: 'left' | 'right' | 'left-slow'
  priority?: boolean
}) {
  const doubled = [...images, ...images]
  const animClass =
    direction === 'left'
      ? 'animate-city-scroll-left'
      : direction === 'right'
        ? 'animate-city-scroll-right'
        : 'animate-city-scroll-left-slow'

  return (
    <div className="flex gap-4 w-max" aria-hidden="true">
      <div className={`flex gap-4 ${animClass}`}>
        {doubled.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className="flex-shrink-0 w-[200px] h-[134px] sm:w-[280px] sm:h-[187px] rounded-xl overflow-hidden"
          >
            <Image
              src={`/images/heroes/${img}`}
              alt=""
              width={280}
              height={187}
              className="w-full h-full object-cover"
              priority={priority && i < images.length}
              loading={priority ? undefined : 'lazy'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection({ lang = 'en' }: HeroSectionProps) {
  const [caseText, setCaseText] = useState('')
  const [selectedChip, setSelectedChip] = useState<number | null>(null)

  const isES = lang === 'es'
  const chips = isES ? chipsES : chipsEN
  const contactPath = isES ? '/es/contacto' : '/contact'

  const handleChipClick = (chip: string, index: number) => {
    setCaseText(chip)
    setSelectedChip(index)
  }

  const t = {
    eyebrow: isES ? 'Abogados de Lesiones Personales en Texas' : 'Texas Personal Injury Attorneys',
    headline: isES ? '¿Lesionado?' : 'Injured?',
    headlineAccent: isES ? 'Obtenga Lo Que Merece.' : 'Get What You Deserve.',
    subtitle: isES
      ? 'Las compañías de seguros tienen ejércitos de abogados. Ahora usted también. Lo conectamos con los mejores abogados de lesiones personales a nivel nacional.'
      : 'Insurance companies have armies of lawyers. Now you do too. We connect you with top personal injury attorneys nationwide.',
    placeholder: isES ? 'Cuéntenos qué pasó...' : 'Tell us what happened...',
    cta: isES ? 'Obtener Evaluación Gratis' : 'Get Free Case Review',
    trust1: isES ? 'Consulta gratis' : 'Free consultation',
    trust2: isES ? 'Disponible 24/7' : 'Available 24/7',
    trust3: isES ? 'Sin honorarios a menos que gane' : 'No fee unless you win',
  }

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
      {/* z-0: Scrolling city image rows */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 py-8">
        <ScrollingRow images={row1Images} direction="left" priority />
        <ScrollingRow images={row2Images} direction="right" />
        <ScrollingRow images={row3Images} direction="left-slow" />
      </div>

      {/* z-10: Radial glow overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.05) 100%)',
        }}
      />
      {/* Extra mobile overlay for readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none sm:hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* z-20: Hero content */}
      <div className="relative z-20 w-full py-16 md:py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <ScrollReveal direction="left" duration={800}>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-white/90 font-medium">{t.eyebrow}</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                {t.headline}{' '}
                <span className="text-accent">{t.headlineAccent}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed">
                {t.subtitle}
              </p>

              {/* Interactive Case Input Box */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 mb-6">
                <textarea
                  value={caseText}
                  onChange={(e) => {
                    setCaseText(e.target.value)
                    setSelectedChip(null)
                  }}
                  rows={2}
                  placeholder={t.placeholder}
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors resize-none backdrop-blur-sm text-base"
                />

                {/* Clickable chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {chips.map((chip, i) => (
                    <button
                      key={i}
                      onClick={() => handleChipClick(chip, i)}
                      className={`text-sm px-3 py-1.5 rounded-full border transition-all ${
                        selectedChip === i
                          ? 'bg-accent text-black border-accent font-semibold'
                          : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-white/40'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* CTA button */}
                <Link
                  href={caseText ? `${contactPath}?message=${encodeURIComponent(caseText)}` : contactPath}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-xl transition-colors text-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {t.cta}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t.trust1}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t.trust2}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t.trust3}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
