import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gracias | GetPaid.law',
  description: 'Gracias por contactar a GetPaid.law. Un abogado se comunicará con usted pronto.',
  robots: 'noindex, nofollow',
}

export default function SpanishThankYouPage() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-[600px] mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gold text-black rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-6">
          ¡Gracias!
        </h1>

        <p className="text-gray-light text-xl mb-8">
          Hemos recibido su información. Un abogado se comunicará con usted dentro de las próximas 24 horas para discutir su caso.
        </p>

        {/* What to Expect */}
        <div className="bg-dark border border-gray rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-xl font-bold mb-4">¿Qué Sucede Ahora?</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <p className="font-semibold">Revisamos su caso</p>
                <p className="text-gray-light text-sm">Nuestro equipo revisa los detalles que proporcionó.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <p className="font-semibold">Lo conectamos con un abogado</p>
                <p className="text-gray-light text-sm">Encontramos el mejor abogado para su tipo de caso.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <p className="font-semibold">El abogado lo contacta</p>
                <p className="text-gray-light text-sm">Recibirá una llamada para discutir su caso en detalle.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Urgent Contact */}
        <div className="bg-dark border border-gray rounded-xl p-6 mb-8">
          <p className="text-white font-semibold mb-2">
            ¿Necesita asistencia inmediata?
          </p>
          <p className="text-gray-light text-sm mb-4">
            Para asuntos urgentes, llámenos directamente:
          </p>
          <a
            href="tel:512-883-0012"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (512) 883-0012
          </a>
        </div>

        {/* Return Home */}
        <Link
          href="/es"
          className="inline-flex items-center text-gold hover:text-gold-hover font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Regresar al Inicio
        </Link>
      </div>
    </section>
  )
}
