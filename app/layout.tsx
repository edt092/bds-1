import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bayona Digital Systems | Links',
  description: 'Desarrollador web Full Stack especializado en negocios digitales, SEO y soluciones a medida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
