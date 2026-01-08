import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contáctenos | Consulta Gratis | GetPaid.law',
  description: 'Contáctenos para una evaluación gratis del caso. Nuestros abogados de lesiones personales están listos para ayudarlo a obtener la compensación que merece.',
  alternates: {
    canonical: 'https://www.getpaid.law/es/contacto/',
    languages: {
      'en': 'https://www.getpaid.law/contact/',
      'es': 'https://www.getpaid.law/es/contacto/',
    },
  },
}

const caseTypes = [
  { value: 'Accidente de Auto', label: 'Accidente de Auto' },
  { value: 'Accidente de Camión', label: 'Accidente de Camión' },
  { value: 'Accidente de Motocicleta', label: 'Accidente de Motocicleta' },
  { value: 'Lesión Laboral', label: 'Lesión Laboral' },
  { value: 'Resbalón y Caída', label: 'Resbalón y Caída' },
  { value: 'Muerte Injusta', label: 'Muerte Injusta' },
  { value: 'Mordedura de Perro', label: 'Mordedura de Perro' },
  { value: 'Brutalidad Policial', label: 'Brutalidad Policial' },
  { value: 'Mala Práctica Médica', label: 'Mala Práctica Médica' },
  { value: 'Otro', label: 'Otro' },
]

export default function SpanishContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Obtenga Su <span className="text-accent">Evaluación Gratis</span>
            </h1>
            <p className="text-gray-light text-lg mb-8">
              Complete el formulario y un abogado se comunicará con usted dentro de 24 horas. Sin costo, sin obligación—solo respuestas honestas sobre su caso.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent text-black rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Llame Ahora</h3>
                  <a href="tel:512-883-0012" className="text-accent text-xl font-bold hover:text-accent-hover">(512) 883-0012</a>
                  <p className="text-gray-light text-sm">Disponible 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-dark border border-gray rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Lo Que Puede Esperar</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-light">Evaluación gratis del caso sin obligación</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-light">Respuesta dentro de 24 horas</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-light">Sin honorarios a menos que gane su caso</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-light">Abogados experimentados que luchan por usted</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark border border-gray rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Cuéntenos Sobre Su Caso</h2>
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSf.../formResponse" method="POST" target="_blank">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2">Nombre</label>
                    <input
                      type="text"
                      id="first-name"
                      name="entry.first-name"
                      required
                      className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2">Apellido</label>
                    <input
                      type="text"
                      id="last-name"
                      name="entry.last-name"
                      required
                      className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="entry.phone"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="entry.email"
                    placeholder="correo@ejemplo.com"
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="case-type" className="block text-sm font-medium mb-2">Tipo de Caso</label>
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
                  <label htmlFor="story" className="block text-sm font-medium mb-2">Cuéntenos Qué Pasó</label>
                  <textarea
                    id="story"
                    name="entry.story"
                    rows={5}
                    placeholder="Por favor describa su lesión y cómo sucedió..."
                    required
                    className="w-full bg-gray border border-gray rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-black font-bold py-4 rounded-lg transition-colors text-lg"
                >
                  Obtener Evaluación Gratis →
                </button>
              </div>
              <p className="text-gray-light text-xs mt-4 text-center">
                Al enviar, acepta ser contactado sobre su caso. Respetamos su privacidad.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
