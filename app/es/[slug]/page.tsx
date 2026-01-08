import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, cityPracticeAreas } from '@/lib/cities'
import { practiceAreas, getPracticeAreaBySlug, PracticeArea } from '@/lib/practiceAreas'
import { getPracticeAreaTitleEs, getCityNameEs, getCategoryTitleEs } from '@/lib/practiceAreasEs'

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
    const titleEs = getPracticeAreaTitleEs(practiceArea.title)
    return {
      title: `${titleEs} | Consulta Gratis | GetPaid.law`,
      description: `¿Lesionado? Conéctese con un abogado experimentado de ${getPracticeAreaTitleEs(practiceArea.shortTitle).toLowerCase()} hoy. Consulta gratis. Sin honorarios a menos que gane.`,
      alternates: {
        canonical: `https://www.getpaid.law/es/${practiceArea.slug}/`,
        languages: {
          'en': `https://www.getpaid.law/${practiceArea.slug}/`,
          'es': `https://www.getpaid.law/es/${practiceArea.slug}/`,
        },
      },
    }
  }

  // Check if it's a city+practice combination
  const { city, practiceArea: cityPractice } = parseCityPracticeSlug(slug)
  if (city && cityPractice) {
    const cityNameEs = getCityNameEs(city.name)
    const practiceEs = getPracticeAreaTitleEs(cityPractice.shortTitle)
    return {
      title: `Abogado de ${practiceEs} en ${cityNameEs} | GetPaid.law`,
      description: `Abogado experimentado de ${practiceEs.toLowerCase()} en ${cityNameEs} luchando por la máxima compensación. Consulta gratis para víctimas de ${city.county}.`,
      alternates: {
        canonical: `https://www.getpaid.law/es/${slug}/`,
        languages: {
          'en': `https://www.getpaid.law/${slug}/`,
          'es': `https://www.getpaid.law/es/${slug}/`,
        },
      },
    }
  }

  return { title: 'No Encontrado' }
}

// City-specific data
const cityDataEs: Record<string, { stats: { crashes: string, fatal: string, serious: string }, roads: { name: string, description: string, hotspots: string }[] }> = {
  austin: {
    stats: { crashes: '19,847', fatal: '87', serious: '412' },
    roads: [
      { name: 'Interestatal 35 (I-35)', description: 'La interestatal más peligrosa de Texas atraviesa el centro de Austin.', hotspots: 'I-35 en US-290, I-35 en Ben White Blvd' },
      { name: 'Autopista MoPac (Loop 1)', description: 'Corredor de alto tráfico con frecuentes colisiones traseras.', hotspots: 'MoPac en 2222, MoPac en Parmer Lane' },
      { name: 'Carretera US 183', description: 'Arteria principal norte-sur conectando Cedar Park al aeropuerto.', hotspots: '183 en Braker Lane, 183 en Research Blvd' },
    ]
  },
  houston: {
    stats: { crashes: '67,890', fatal: '378', serious: '1,245' },
    roads: [
      { name: 'Interestatal 45', description: 'Una de las carreteras más peligrosas de América.', hotspots: 'I-45 en Loop 610, I-45 en Beltway 8' },
      { name: 'Interestatal 10', description: 'La carretera más ancha del mundo aún ve congestión masiva.', hotspots: 'I-10 en Loop 610, I-10 en Beltway 8' },
      { name: 'Carretera US 290', description: 'Corredor principal de tráfico hacia suburbios del noroeste.', hotspots: '290 en Loop 610, 290 en Beltway 8' },
    ]
  },
  dallas: {
    stats: { crashes: '42,156', fatal: '198', serious: '892' },
    roads: [
      { name: 'Interestatal 35E', description: 'Corredor principal norte-sur a través del centro de Dallas.', hotspots: 'I-35E en I-30, I-35E en 635' },
      { name: 'Interestatal 635 (LBJ Freeway)', description: 'Circuito de alta velocidad alrededor de Dallas con intercambios complejos.', hotspots: '635 en I-35E, 635 en US-75' },
      { name: 'Carretera US 75', description: 'Ruta principal de tráfico conectando Dallas con suburbios del norte.', hotspots: 'US-75 en 635, US-75 en I-30' },
    ]
  },
  'san-antonio': {
    stats: { crashes: '28,456', fatal: '156', serious: '678' },
    roads: [
      { name: 'Interestatal 35', description: 'Corredor principal a través del centro de San Antonio.', hotspots: 'I-35 en I-10, I-35 en Loop 410' },
      { name: 'Interestatal 10', description: 'Corredor este-oeste conectando a Houston y El Paso.', hotspots: 'I-10 en I-35, I-10 en Loop 1604' },
      { name: 'Loop 410', description: 'Circuito interno alrededor de San Antonio con alto volumen de tráfico.', hotspots: 'Loop 410 en I-35, Loop 410 en I-10' },
    ]
  },
}

const defaultCityDataEs = {
  stats: { crashes: '15,000+', fatal: '75+', serious: '350+' },
  roads: [
    { name: 'Carreteras Principales', description: 'Las autopistas de alta velocidad ven los accidentes más graves.', hotspots: 'Intercambios interestatales, intersecciones principales' },
    { name: 'Calles Urbanas', description: 'Calles de la ciudad con tráfico pesado y peatones.', hotspots: 'Áreas del centro, distritos comerciales' },
    { name: 'Carreteras Rurales', description: 'Carreteras de dos carriles con altas velocidades y visibilidad limitada.', hotspots: 'Curvas, intersecciones sin semáforos' },
  ]
}

const locationsEs = [
  { name: 'Área de Austin', slug: 'austin', description: 'Sirviendo Austin, Round Rock, Cedar Park y el Centro de Texas.' },
  { name: 'San Antonio', slug: 'san-antonio', description: 'Sirviendo San Antonio, New Braunfels y el Sur-Centro de Texas.' },
  { name: 'Houston', slug: 'houston', description: 'Sirviendo Houston, The Woodlands, Sugar Land y el Gran Houston.' },
  { name: 'Dallas-Fort Worth', slug: 'dallas', description: 'Sirviendo Dallas, Fort Worth, Arlington y el Metroplex DFW.' },
  { name: 'Valle del Río Grande', slug: 'rio-grande-valley', description: 'Sirviendo McAllen, Brownsville, Harlingen y el RGV.' },
  { name: 'Oeste de Texas', slug: 'west-texas', description: 'Sirviendo El Paso, Midland, Odessa y el Oeste de Texas.' },
]

export default async function SpanishDynamicPage({ params }: PageProps) {
  const { slug } = await params

  // Check if it's a practice area first
  const practiceArea = getPracticeAreaBySlug(slug)
  if (practiceArea) {
    return <SpanishPracticeAreaPage practiceArea={practiceArea} />
  }

  // Check if it's a city+practice combination
  const { city, practiceArea: cityPractice } = parseCityPracticeSlug(slug)
  if (city && cityPractice) {
    return <SpanishCityPracticePage city={city} practiceArea={cityPractice} slug={slug} />
  }

  notFound()
}

// Spanish Practice Area Page Component
function SpanishPracticeAreaPage({ practiceArea }: { practiceArea: PracticeArea }) {
  const relatedAreas = practiceAreas
    .filter(a => a.category === practiceArea.category && a.slug !== practiceArea.slug)
    .slice(0, 6)

  const titleEs = getPracticeAreaTitleEs(practiceArea.title)
  const shortTitleEs = getPracticeAreaTitleEs(practiceArea.shortTitle)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": `GetPaid.law - ${titleEs}s`,
            "description": practiceArea.description,
            "url": `https://www.getpaid.law/es/${practiceArea.slug}/`,
            "telephone": "(512) 883-0012",
            "inLanguage": "es",
            "areaServed": [
              { "@type": "State", "name": "Texas" },
              { "@type": "Country", "name": "United States" }
            ],
            "priceRange": "Consulta Gratis"
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              ¿Lesionado? <span className="text-accent">Obtenga la Compensación Que Merece</span>
            </h1>
            <p className="text-gray-light text-lg mb-8">
              {practiceArea.description} Las compañías de seguros intentarán pagarle menos. Nuestra red de abogados experimentados lucha por la máxima compensación—y no paga nada a menos que gane.
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:512-883-0012" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llame Ahora: (512) 883-0012
              </a>
              <p className="text-gray-light text-sm text-center">Consulta gratis • Disponible 24/7 • Sin honorarios a menos que gane</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-accent">
            <img
              src={`/images/heroes/${practiceArea.heroImage}`}
              alt={titleEs}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Location Selection */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Seleccione Su Ubicación</h2>
            <p className="text-gray-light">Encuentre un abogado de {shortTitleEs.toLowerCase()} cerca de usted.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {locationsEs.map((location) => (
              <Link key={location.slug} href={`/es/${location.slug}-${practiceArea.slug.replace('-lawyer', '')}-lawyer`} className="bg-black border border-gray rounded-xl p-6 hover:border-accent transition-all group">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location.name}
                </h3>
                <p className="text-gray-light text-sm mb-3">{location.description}</p>
                <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver abogados en {location.name}
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
          <h2 className="text-2xl md:text-3xl font-black mb-6">Por Qué Necesita un Abogado de {shortTitleEs}</h2>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            Cuando está lidiando con un caso de {shortTitleEs.toLowerCase()}, las compañías de seguros inmediatamente comienzan a trabajar para minimizar lo que le pagan—no para ayudarlo a recuperarse.
          </p>
          <p className="text-gray-light text-lg mb-8 leading-relaxed">
            Un abogado experimentado de {shortTitleEs.toLowerCase()} nivela el campo de juego. Ellos manejan los ajustadores de seguros, reúnen evidencia, documentan sus lesiones y luchan por cada dólar que merece. Y porque trabajan por contingencia, no paga ni un centavo a menos que ganen su caso.
          </p>
          <h3 className="text-xl font-bold mb-4">Lo Que Las Compañías de Seguros No Quieren Que Sepa</h3>
          <ul className="text-gray-light space-y-3 mb-8 list-disc pl-6">
            <li><strong className="text-white">Ofertas de acuerdo rápido</strong> — Le ofrecerán dinero rápido, antes de que sepa el alcance total de sus lesiones.</li>
            <li><strong className="text-white">Declaraciones grabadas</strong> — Le pedirán una declaración grabada esperando que diga algo que puedan usar en su contra.</li>
            <li><strong className="text-white">Tácticas de demora</strong> — Alargarán el proceso esperando que se frustre y acepte menos.</li>
            <li><strong className="text-white">Minimizar sus lesiones</strong> — Cuestionarán si sus lesiones son realmente tan graves como usted dice.</li>
          </ul>
        </div>
      </section>

      {/* Texas Laws */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Leyes de Texas Que Necesita Conocer</h2>
          <h3 className="text-xl font-bold mb-3 mt-8">Estatuto de Limitaciones: 2 Años</h3>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            En Texas, tiene <strong className="text-white">2 años desde la fecha de su lesión</strong> para presentar una demanda por lesiones personales. Si pierde esta fecha límite, pierde su derecho a demandar para siempre.
          </p>
          <h3 className="text-xl font-bold mb-3 mt-8">Culpa Comparativa Modificada (Regla del 51%)</h3>
          <p className="text-gray-light text-lg mb-4 leading-relaxed">Texas sigue un sistema de &quot;culpa comparativa modificada&quot;:</p>
          <ul className="text-gray-light space-y-2 mb-6 list-disc pl-6">
            <li>Puede recuperar daños siempre que tenga <strong className="text-white">50% o menos</strong> de culpa</li>
            <li>Si tiene 51% o más de culpa, no recupera nada</li>
            <li>Su compensación se reduce por su porcentaje de culpa</li>
          </ul>
          <h3 className="text-xl font-bold mb-3 mt-8">Sin Límite en Daños</h3>
          <p className="text-gray-light text-lg leading-relaxed">
            A diferencia de algunos estados, Texas no limita los daños en la mayoría de los casos de lesiones personales. Puede buscar compensación completa por todos los daños económicos y no económicos.
          </p>
        </div>
      </section>

      {/* Related Practice Areas */}
      {relatedAreas.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Áreas de Práctica Relacionadas</h2>
              <p className="text-gray-light">Nuestros abogados también manejan estos tipos de casos.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedAreas.map((related) => (
                <Link key={related.slug} href={`/es/${related.slug}`} className="bg-dark border border-gray rounded-xl p-6 hover:border-accent transition-all">
                  <h3 className="text-lg font-bold mb-2">{getPracticeAreaTitleEs(related.shortTitle)}</h3>
                  <p className="text-gray-light text-sm mb-3">{related.description}</p>
                  <span className="text-accent font-semibold text-sm">Más información →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="border-t border-gray">
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">¿Cuánto cuesta un abogado de {shortTitleEs.toLowerCase()}?</h3>
              <p className="text-gray-light leading-relaxed">La mayoría de los abogados trabajan por contingencia, lo que significa que no paga nada por adelantado. El abogado solo cobra si gana su caso, típicamente 33% de su acuerdo.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">¿Cuánto tiempo tengo para presentar un reclamo en Texas?</h3>
              <p className="text-gray-light leading-relaxed">En Texas, tiene 2 años desde la fecha de la lesión para presentar una demanda por lesiones personales. Contacte a un abogado lo antes posible para proteger sus derechos.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">¿Cuánto vale mi caso?</h3>
              <p className="text-gray-light leading-relaxed">Los valores de los casos dependen de gastos médicos, salarios perdidos, dolor y sufrimiento, y gravedad de las lesiones. Casos menores pueden resolverse por $10,000-$25,000, mientras que lesiones graves pueden valer $100,000 a varios millones de dólares.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">¿Debo aceptar la primera oferta de la compañía de seguros?</h3>
              <p className="text-gray-light leading-relaxed">Casi nunca. Las compañías de seguros hacen ofertas rápidas y bajas esperando que acepte antes de entender sus lesiones. Siempre consulte a un abogado antes de aceptar cualquier oferta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark to-black text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">No Deje Que Las Compañías de Seguros Se Aprovechen de Usted</h2>
          <p className="text-gray-light text-lg mb-8">
            Cada día que espera, la evidencia desaparece. Obtenga un abogado experimentado de {shortTitleEs.toLowerCase()} en su esquina hoy.
          </p>
          <a href="tel:512-883-0012" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llame Ahora: (512) 883-0012
          </a>
        </div>
      </section>
    </>
  )
}

// Spanish City + Practice Area Page Component
function SpanishCityPracticePage({ city, practiceArea, slug }: { city: typeof cities[0], practiceArea: PracticeArea, slug: string }) {
  const cityInfo = cityDataEs[city.slug] || defaultCityDataEs
  const relatedCities = cities.filter(c => c.slug !== city.slug).slice(0, 5)
  const relatedPracticeAreas = cityPracticeAreas
    .filter(p => p !== practiceArea.slug)
    .slice(0, 4)
    .map(slug => getPracticeAreaBySlug(slug))
    .filter(Boolean) as PracticeArea[]

  const cityNameEs = getCityNameEs(city.name)
  const shortTitleEs = getPracticeAreaTitleEs(practiceArea.shortTitle)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": `GetPaid.law - Abogado de ${shortTitleEs} en ${cityNameEs}`,
            "description": `Abogado experimentado de ${shortTitleEs.toLowerCase()} en ${cityNameEs} luchando por la máxima compensación.`,
            "url": `https://www.getpaid.law/es/${slug}/`,
            "telephone": "(512) 883-0012",
            "inLanguage": "es",
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
              Abogado de {shortTitleEs} en {cityNameEs}
            </h1>
            <p className="text-gray-light text-lg mb-8">
              ¿Lesionado en {cityNameEs}? Nuestros abogados experimentados luchan contra las compañías de seguros para obtener la máxima compensación por sus lesiones. Consulta gratis para residentes de {city.county}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:512-883-0012" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llame: (512) 883-0012
              </a>
              <Link href="/es/contacto" className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                Consulta Gratis
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-accent">
            <img
              src={`/images/heroes/${city.heroImage}`}
              alt={`Abogado de ${shortTitleEs} en ${cityNameEs}`}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why You Need a Local Lawyer */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Por Qué Necesita un Abogado de {shortTitleEs} en {cityNameEs}</h2>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            Los casos de {shortTitleEs.toLowerCase()} son de los reclamos de lesiones personales más comunes en Texas, y {cityNameEs} no es la excepción. Cuando está lesionado por la negligencia de alguien más, necesita un abogado experimentado de {cityNameEs} que entienda las carreteras locales, los tribunales locales y cómo maximizar su compensación.
          </p>
          <p className="text-gray-light text-lg leading-relaxed">
            Texas sigue un sistema de culpa comparativa modificada, lo que significa que puede recuperar daños siempre que tenga menos del 51% de culpa. Nuestros abogados conocen las tácticas de las compañías de seguros y luchan agresivamente para proteger sus derechos.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Estadísticas de {shortTitleEs} en {cityNameEs}</h2>
            <p className="text-gray-light">{cityNameEs} y {city.county} ven miles de accidentes cada año.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-gray rounded-xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">{cityInfo.stats.crashes}</div>
              <div className="text-gray-light">Total de Choques (2023)</div>
            </div>
            <div className="bg-black border border-gray rounded-xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">{cityInfo.stats.fatal}</div>
              <div className="text-gray-light">Choques Fatales</div>
            </div>
            <div className="bg-black border border-gray rounded-xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">{cityInfo.stats.serious}</div>
              <div className="text-gray-light">Choques con Lesiones Graves</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dangerous Roads */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Carreteras Peligrosas en {cityNameEs}</h2>
          <div className="space-y-6">
            {cityInfo.roads.map((road, index) => (
              <div key={index} className="bg-dark border border-gray rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{road.name}</h3>
                <p className="text-gray-light mb-3">{road.description}</p>
                <p className="text-sm"><strong className="text-accent">Áreas de alto riesgo:</strong> <span className="text-gray-light">{road.hotspots}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">¿Por Qué Elegir un Abogado Local de {cityNameEs}?</h2>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            Un abogado local de {shortTitleEs.toLowerCase()} en {cityNameEs} ofrece ventajas significativas. Sabemos qué intersecciones son peligrosas, qué carreteras tienen defectos de diseño y qué ajustadores de seguros son más propensos a ofrecer poco.
          </p>
          <p className="text-gray-light text-lg leading-relaxed">
            Hemos aparecido ante jueces en los tribunales de {city.county} cientos de veces. El tiempo es crítico—la evidencia desaparece, y el estatuto de limitaciones en Texas es solo dos años.
          </p>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Otros Casos Que Manejamos en {cityNameEs}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedPracticeAreas.map((area) => (
              <Link key={area.slug} href={`/es/${city.slug}-${area.slug.replace('-lawyer', '')}-lawyer`} className="bg-dark border border-gray rounded-xl p-6 hover:border-accent transition-all">
                <h3 className="text-lg font-bold mb-2">{getPracticeAreaTitleEs(area.shortTitle)}</h3>
                <span className="text-accent font-semibold text-sm">Más información →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Abogados de {shortTitleEs} en Otras Ciudades de Texas</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedCities.map((relatedCity) => (
              <Link key={relatedCity.slug} href={`/es/${relatedCity.slug}-${practiceArea.slug.replace('-lawyer', '')}-lawyer`} className="bg-black border border-gray rounded-lg p-4 text-center hover:border-accent transition-all">
                <p className="font-semibold">{getCityNameEs(relatedCity.name)}</p>
                <p className="text-gray-light text-sm">{relatedCity.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="border-t border-gray">
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">¿Cuánto vale mi caso en {cityNameEs}?</h3>
              <p className="text-gray-light leading-relaxed">Los valores de acuerdo dependen de la gravedad de la lesión, facturas médicas, salarios perdidos y cobertura de seguro. Lesiones menores pueden resolverse por $10,000-$25,000, mientras que lesiones graves a menudo exceden $100,000.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">¿Debo aceptar la primera oferta de la compañía de seguros?</h3>
              <p className="text-gray-light leading-relaxed">Casi nunca. Las ofertas iniciales típicamente están muy por debajo del valor justo. Un abogado experimentado a menudo puede negociar acuerdos significativamente más altos.</p>
            </div>
            <div className="py-6 border-b border-gray">
              <h3 className="text-lg font-semibold mb-3">¿Cuánto tiempo toman los acuerdos en {cityNameEs}?</h3>
              <p className="text-gray-light leading-relaxed">Casos simples pueden resolverse en 3-6 meses. Casos más complejos típicamente toman 12-24 meses. Trabajamos eficientemente mientras aseguramos una compensación justa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark to-black text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Obtenga Su Evaluación Gratis del Caso Hoy</h2>
          <p className="text-gray-light text-lg mb-8">
            No deje que las compañías de seguros se aprovechen de usted. Obtenga un abogado experimentado de {shortTitleEs.toLowerCase()} en {cityNameEs} en su esquina hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:512-883-0012" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llame: (512) 883-0012
            </a>
            <Link href="/es/contacto" className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg">
              Consulta Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
