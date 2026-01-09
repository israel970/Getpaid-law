import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Socios | GetPaid.law',
  description: 'Abogados y profesionales: Asóciese con GetPaid.law para referencias de casos. Trabajamos con firmas de todo Texas.',
  alternates: {
    canonical: 'https://www.getpaid.law/es/socios/',
    languages: {
      'en': 'https://www.getpaid.law/partners/',
      'es': 'https://www.getpaid.law/es/socios/',
    },
  },
}

export default function SpanishPartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Asóciese con <span className="text-gold">GetPaid.law</span>
          </h1>
          <p className="text-gray-light text-xl leading-relaxed">
            ¿Es abogado o profesional que trabaja con víctimas de lesiones? Trabajemos juntos para ayudar a más personas a obtener la compensación que merecen.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Por Qué Asociarse Con Nosotros</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray rounded-xl p-6">
              <div className="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Honorarios de Referencia Competitivos</h3>
              <p className="text-gray-light">Ofrecemos honorarios de referencia competitivos de acuerdo con las reglas del Colegio de Abogados de Texas.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <div className="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Red de Abogados Experimentados</h3>
              <p className="text-gray-light">Nuestra red incluye abogados verificados con historiales comprobados en todo Texas.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <div className="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Comunicación Clara</h3>
              <p className="text-gray-light">Lo mantenemos informado sobre el estado de los casos referidos en cada paso.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <div className="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excelente Servicio al Cliente</h3>
              <p className="text-gray-light">Sus clientes referidos reciben la misma dedicación y atención que todos nuestros clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cases */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Tipos de Casos Que Manejamos</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Accidentes de Auto</p>
            </div>
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Accidentes de Camión</p>
            </div>
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Accidentes de Motocicleta</p>
            </div>
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Lesiones Laborales</p>
            </div>
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Resbalones y Caídas</p>
            </div>
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Muerte Injusta</p>
            </div>
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Mala Práctica Médica</p>
            </div>
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Brutalidad Policial</p>
            </div>
            <div className="bg-dark border border-gray rounded-lg p-4">
              <p className="font-semibold">Productos Defectuosos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-dark text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">¿Listo Para Asociarse?</h2>
          <p className="text-gray-light text-lg mb-8">
            Contáctenos hoy para discutir cómo podemos trabajar juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:512-883-0012"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llame (512) 883-0012
            </a>
            <Link
              href="/es/contacto"
              className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Contáctenos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
