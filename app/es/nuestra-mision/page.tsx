import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nuestra Misión | GetPaid.law',
  description: 'GetPaid.law fue creado porque demasiadas víctimas de lesiones son estafadas. Lo conectamos con abogados que luchan por USTED, no por sus honorarios.',
  alternates: {
    canonical: 'https://www.getpaid.law/es/nuestra-mision/',
    languages: {
      'en': 'https://www.getpaid.law/our-mission/',
      'es': 'https://www.getpaid.law/es/nuestra-mision/',
    },
  },
}

export default function SpanishMissionPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Nuestra Misión - GetPaid.law",
            "description": "GetPaid.law fue creado porque demasiadas víctimas de lesiones son estafadas.",
            "url": "https://www.getpaid.law/es/nuestra-mision/",
            "inLanguage": "es"
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Nuestra <span className="text-gold">Misión</span>
          </h1>
          <p className="text-gray-light text-xl md:text-2xl leading-relaxed">
            GetPaid.law fue creado porque demasiadas víctimas de lesiones son estafadas. Lo conectamos con abogados que luchan por USTED, no por sus honorarios.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">El Problema Que Estamos Resolviendo</h2>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            Cuando está lesionado, está vulnerable. Está lidiando con dolor, facturas médicas e ingresos perdidos. Lo último que necesita es preocuparse si su abogado realmente está luchando por sus mejores intereses—o solo buscando un acuerdo rápido para aumentar sus honorarios.
          </p>
          <p className="text-gray-light text-lg mb-6 leading-relaxed">
            Demasiadas firmas de lesiones personales priorizan el volumen sobre la calidad. Resuelven casos rápidamente por menos de lo que valen, pasan al siguiente cliente y dejan a las víctimas lesionadas sin la compensación que merecen.
          </p>
          <p className="text-gray-light text-lg leading-relaxed">
            Las compañías de seguros cuentan con esto. Saben que abogados inexpertos o sobrecargados aceptarán ofertas bajas. Apuestan a que usted no conoce el verdadero valor de su caso.
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Cómo Somos Diferentes</h2>
          <p className="text-gray-light text-lg mb-8 leading-relaxed">
            GetPaid.law lo conecta con abogados experimentados y verificados que tienen un historial de luchar por la máxima compensación. No trabajamos con fábricas de acuerdos de alto volumen. Trabajamos con abogados que:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="text-white font-semibold">Se toman el tiempo para entender su caso</p>
                <p className="text-gray-light">Cada lesión es diferente. Su abogado debe conocer los detalles que hacen único su caso.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="text-white font-semibold">Luchan por la máxima compensación</p>
                <p className="text-gray-light">No acuerdos rápidos. Compensación real que considera todos sus daños—actuales y futuros.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="text-white font-semibold">No tienen miedo de ir a juicio</p>
                <p className="text-gray-light">Las compañías de seguros pagan más cuando saben que su abogado los llevará a la corte si es necesario.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <p className="text-white font-semibold">Se comunican clara y frecuentemente</p>
                <p className="text-gray-light">Nunca debe sentirse en la oscuridad sobre su caso. Nuestros abogados lo mantienen informado en cada paso.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-6">Nuestra Promesa</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Consulta Gratis</h3>
              <p className="text-gray-light">Nunca pagará por una revisión inicial del caso. Evaluamos su situación sin costo.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Sin Honorarios Si No Gana</h3>
              <p className="text-gray-light">Nuestros abogados trabajan por contingencia. No paga nada a menos que recuperen compensación para usted.</p>
            </div>
            <div className="bg-black border border-gray rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gold">Solo Abogados Verificados</h3>
              <p className="text-gray-light">Solo trabajamos con abogados experimentados que tienen historiales comprobados de éxito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-4">¿Listo Para Obtener Lo Que Merece?</h2>
          <p className="text-gray-light text-lg mb-8">
            No se conforme con menos. Permítanos conectarlo con un abogado que luchará por sus derechos.
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
              Evaluación Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
