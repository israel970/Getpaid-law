import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nuestro Proceso | Cómo Obtener Compensación | GetPaid.law',
  description: 'Vea cómo GetPaid.law conecta a texanos lesionados con los mejores abogados de lesiones personales. Consulta gratis, sin costos iniciales, y no paga a menos que gane.',
  alternates: {
    canonical: 'https://www.getpaid.law/es/nuestro-proceso/',
    languages: {
      'en': 'https://www.getpaid.law/our-process/',
      'es': 'https://www.getpaid.law/es/nuestro-proceso/',
    },
  },
}

const steps = [
  {
    number: 1,
    title: 'Consulta Gratis',
    description: 'Contáctenos para una evaluación gratis del caso. Revisaremos su situación y determinaremos si tiene un reclamo válido. Esta consulta es 100% gratis sin obligación.',
    details: [
      'Llámenos o complete nuestro formulario en línea',
      'Cuéntenos sobre su lesión y cómo sucedió',
      'Evaluaremos la fortaleza de su caso potencial',
      'Sin costo, sin presión, sin obligación'
    ]
  },
  {
    number: 2,
    title: 'Conéctese con el Abogado Correcto',
    description: 'Basándonos en su tipo de caso y ubicación, lo conectamos con un abogado experimentado que se especializa en su tipo de caso de lesión.',
    details: [
      'Lo conectamos con abogados que manejan su tipo específico de caso',
      'Todos nuestros abogados son verificados por experiencia e historial',
      'Su abogado lo contactará directamente para discutir su caso',
      'Recibirá atención personal de un profesional legal'
    ]
  },
  {
    number: 3,
    title: 'Su Abogado Lucha Por Usted',
    description: 'Su abogado maneja todo—reunir evidencia, tratar con compañías de seguros, negociar acuerdos y, si es necesario, llevar su caso a juicio.',
    details: [
      'Su abogado investiga y construye su caso',
      'Manejan toda la comunicación con compañías de seguros',
      'Negocian por la máxima compensación',
      'Si es necesario, llevarán su caso a juicio'
    ]
  },
  {
    number: 4,
    title: 'Usted Recibe Su Compensación',
    description: 'Cuando su caso se resuelve, recibe su compensación. Solo paga honorarios de abogado si gana—y solo del acuerdo o veredicto.',
    details: [
      'Sin costos iniciales ni tarifas ocultas',
      'Solo paga si gana su caso',
      'Los honorarios del abogado vienen de su acuerdo',
      'Usted se queda con la mayoría de su compensación'
    ]
  }
]

export default function SpanishProcessPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Cómo Obtener Compensación Por Su Lesión Personal",
            "description": "Vea cómo GetPaid.law conecta a texanos lesionados con los mejores abogados de lesiones personales.",
            "inLanguage": "es",
            "step": steps.map(step => ({
              "@type": "HowToStep",
              "name": step.title,
              "text": step.description
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Cómo <span className="text-accent">Obtener Compensación</span>
          </h1>
          <p className="text-gray-light text-xl md:text-2xl leading-relaxed">
            Obtener la compensación que merece no debería ser complicado. Así es como funciona nuestro proceso.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex flex-col md:flex-row gap-8 ${index < steps.length - 1 ? 'mb-16 pb-16 border-b border-gray' : ''}`}>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center font-black text-2xl">
                  {step.number}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black mb-4">{step.title}</h2>
                <p className="text-gray-light text-lg mb-6 leading-relaxed">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Por Qué Funciona Este Proceso</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-dark border border-gray rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-accent mb-3">$0</div>
              <h3 className="text-lg font-bold mb-2">Costo Inicial</h3>
              <p className="text-gray-light text-sm">Nunca paga nada de su bolsillo. Nunca.</p>
            </div>
            <div className="bg-dark border border-gray rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-accent mb-3">24/7</div>
              <h3 className="text-lg font-bold mb-2">Disponibilidad</h3>
              <p className="text-gray-light text-sm">Estamos aquí cuando nos necesita, día o noche.</p>
            </div>
            <div className="bg-dark border border-gray rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-accent mb-3">100%</div>
              <h3 className="text-lg font-bold mb-2">Compromiso</h3>
              <p className="text-gray-light text-sm">Nuestros abogados luchan por la máxima compensación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">¿Cuánto cuesta usar GetPaid.law?</h3>
              <p className="text-gray-light">Nada. Nuestro servicio es completamente gratis para usted. Solo paga honorarios de abogado si gana su caso, y esos honorarios vienen de su acuerdo—no de su bolsillo.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">¿Qué tan rápido me contactará un abogado?</h3>
              <p className="text-gray-light">En la mayoría de los casos, un abogado lo contactará dentro de 24 horas de su consulta inicial. Para casos urgentes, puede ser incluso más rápido.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">¿Qué pasa si no estoy seguro de tener un caso?</h3>
              <p className="text-gray-light">Para eso es la consulta gratis. Le ayudaremos a entender si tiene un reclamo válido y cuáles son sus opciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">¿Listo Para Comenzar?</h2>
          <p className="text-gray-light text-lg mb-8">
            Mientras más pronto comience, más pronto puede recibir compensación. Contáctenos ahora para su consulta gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:512-883-0012"
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
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
