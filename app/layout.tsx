import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { LanguageProvider } from '@/lib/LanguageContext'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'BDS | Bayona Digital Systems - Full Stack Developer',
  description: 'Desarrollo web Full Stack especializado en Next.js, React, Node.js y Python. Creamos e-commerce, landing pages y aplicaciones web con integración de pagos PayPhone. Demo gratis.',
  keywords: [
    'desarrollador full stack',
    'desarrollo web Next.js',
    'programador React freelance',
    'e-commerce PayPhone',
    'landing page profesional',
    'aplicaciones web a medida',
    'desarrollo MVP startups',
    'BDS Bayona Digital Systems'
  ],
  authors: [{ name: 'BDS - Bayona Digital Systems' }],
  creator: 'Bayona Digital Systems',
  publisher: 'BDS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'BDS | Bayona Digital Systems - Full Stack Developer',
    description: 'Desarrollo web profesional con Next.js, React y Node.js. E-commerce, landing pages y apps web. Solicita tu demo gratis.',
    siteName: 'BDS - Bayona Digital Systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDS | Bayona Digital Systems',
    description: 'Full Stack Developer - Next.js, React, Node.js. Demo gratis de tu web.',
    creator: '@bayonadigital',
  },
  verification: {
    google: 'tu-codigo-verificacion-google',
  },
  alternates: {
    canonical: 'https://bayonadigitalsystems.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BDS | Bayona Digital Systems',
  description: 'Desarrollo web Full Stack especializado en Next.js, React, Node.js y soluciones e-commerce con integración PayPhone.',
  url: 'https://bayonadigitalsystems.com',
  telephone: '+593967479210',
  priceRange: '$$',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide'
  },
  serviceType: [
    'Desarrollo Web Full Stack',
    'E-commerce Development',
    'Landing Pages',
    'Aplicaciones Web',
    'Integración de APIs',
    'Consultoría Técnica'
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'Node.js',
    'Python',
    'TypeScript',
    'Tailwind CSS',
    'PayPhone API',
    'Framer Motion',
    'AWS'
  ],
  sameAs: [
    'https://github.com/edt092',
    'https://wa.me/593967479210'
  ],
  founder: {
    '@type': 'Person',
    name: 'Edwin Bayona',
    jobTitle: 'Full Stack Developer'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Desarrollo Web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Demo Web Gratis',
          description: 'Versión de prueba gratuita de tu página web'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce con PayPhone',
          description: 'Tienda online con integración de pagos PayPhone'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Landing Page Profesional',
          description: 'Páginas de aterrizaje optimizadas para conversión'
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
