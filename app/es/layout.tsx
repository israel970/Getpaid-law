import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abogados de Lesiones Personales en Texas | Consulta Gratis | GetPaid.law',
  description: '¿Lesionado en un accidente? Conectamos con un abogado de lesiones personales experimentado en minutos. Evaluación gratis del caso. Sin honorarios a menos que gane.',
}

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
