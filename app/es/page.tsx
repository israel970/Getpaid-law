import Link from 'next/link'
import { practiceAreas } from '@/lib/practiceAreas'
import { featuredCities } from '@/lib/cities'
import { getPracticeAreaTitleEs, getCityNameEs } from '@/lib/practiceAreasEs'
import Schema from '@/components/Schema'

const settlements = [
  { amount: '$13,660,000', type: 'Responsabilidad de Propiedades' },
  { amount: '$8,600,000', type: 'Accidente de Camión' },
  { amount: '$5,710,000', type: 'Lesión Laboral' },
  { amount: '$5,200,000', type: 'Responsabilidad de Propiedades' },
  { amount: '$4,300,000', type: 'Accidente de Camión' },
  { amount: '$3,680,000', type: 'Veredicto de Juicio' },
  { amount: '$3,500,000', type: 'Accidente de Auto' },
  { amount: '$3,300,000', type: 'Accidente de Camión' },
  { amount: '$2,600,000', type: 'Accidente de Motocicleta' },
  { amount: '$2,300,000', type: 'Accidente de Auto' },
  { amount: '$2,200,000', type: 'Accidente de Camión' },
  { amount: '$1,800,000', type: 'Accidente de Auto' },
]

const caseTypes = [
  { value: 'Accidente de Auto', label: 'Accidente de Auto' },
  { value: 'Accidente de Camión', label: 'Accidente de Camión' },
  { value: 'Accidente de Motocicleta', label: 'Accidente de Motocicleta' },
  { value: 'Lesión Laboral', label: 'Lesión Laboral' },
  { value: 'Resbalón y Caída', label: 'Resbalón y Caída' },
  { value: 'Muerte Injusta', label: 'Muerte Injusta' },
  { value: 'Brutalidad Policial', label: 'Brutalidad Policial' },
  { value: 'Otro', label: 'Otro' },
]

const steps = [
  { number: 1, title: 'Cuéntenos lo Que Pasó', description: 'Comparta los detalles de su lesión a través de nuestro formulario seguro o llámenos.' },
  { number: 2, title: 'Conéctese con un Abogado', description: 'Lo conectamos con un abogado experimentado que maneja su tipo de caso.' },
  { number: 3, title: 'Luche y Gane', description: 'Su abogado lucha por la máxima compensación. No paga nada a menos que gane.' },
]

export default function SpanishHomePage() {
  const featuredPracticeAreas = practiceAreas.slice(0, 6)

  return (
    <>
      <Schema type="home" lang="es" />
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
              ¿Lesionado? <span className="text-accent">Obtenga Lo Que Merece.</span>
            </h1>
            <p className="text-gray-light text-lg md:text-xl mb-8">
              Las compañías de seguros tienen ejércitos de abogados. Ahora usted también. Lo conectamos con los mejores abogados de lesiones personales a nivel nacional—gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:512-883-0012"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llame Ahora: (512) 883-0012
              </a>
            </div>
            <p className="text-gray-light text-sm mt-4">Consulta gratis • Disponible 24/7 • Sin honorarios a menos que gane</p>
          </div>

          {/* Contact Form */}
          <div className="bg-dark border border-gray rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2">Evaluación Gratis del Caso</h2>
            <p className="text-gray-light mb-6">Conéctese con el abogado correcto en minutos.</p>
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSf.../formResponse" method="POST" target="_blank">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="entry.name"
                    placeholder=""
                    required
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="entry.phone"
                    placeholder=""
                    required
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="case-type" className="block text-sm font-medium mb-2">Tipo de Lesión</label>
                  <select
                    id="case-type"
                    name="entry.case-type"
                    required
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="" disabled>Seleccione uno</option>
                    {caseTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="story" className="block text-sm font-medium mb-2">Cuéntenos Su Historia</label>
                  <textarea
                    id="story"
                    name="entry.story"
                    rows={3}
                    placeholder="Describa brevemente lo que pasó..."
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-black font-bold py-4 rounded-lg transition-colors text-lg"
                >
                  Obtener Lo Que Merezco →
                </button>
              </div>
              <p className="text-gray-light text-xs mt-4 text-center">
                Al enviar, acepta ser contactado sobre su caso. Respetamos su privacidad.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Cómo Funciona</h2>
            <p className="text-gray-light max-w-xl mx-auto">Obtener la compensación que merece no debería ser complicado.</p>
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
            <h2 className="text-3xl md:text-4xl font-black mb-4">Casos Que Manejamos</h2>
            <p className="text-gray-light max-w-xl mx-auto">Nuestra red incluye abogados experimentados para cada tipo de lesión personal.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPracticeAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/es/${area.slug}`}
                className="bg-gray rounded-xl p-6 border border-transparent hover:border-accent transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2">{getPracticeAreaTitleEs(area.shortTitle)}</h3>
                <p className="text-gray-light text-sm mb-4">{area.description}</p>
                <span className="text-accent font-semibold text-sm">Más información →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/es/car-accident-lawyer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold"
            >
              Ver todas las áreas de práctica →
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Sirviendo Todo Texas</h2>
            <p className="text-gray-light max-w-xl mx-auto">Encuentre abogados experimentados en su área.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/es/${city.slug}-personal-injury-lawyer`}
                className="bg-gray rounded-lg p-4 text-center hover:border-accent border border-transparent transition-all"
              >
                <p className="font-semibold">{getCityNameEs(city.name)}</p>
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
            ¿Listo Para Obtener Lo Que Merece?
          </h2>
          <p className="text-gray-light text-lg mb-8">
            No deje que las compañías de seguros se aprovechen de usted. Obtenga una evaluación gratis de su caso hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:512-883-0012"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llame (512) 883-0012
            </a>
            <Link
              href="/es/contacto"
              className="inline-flex items-center justify-center border-2 border-accent text-accent hover:bg-accent hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Evaluación Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
