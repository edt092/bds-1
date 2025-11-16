import Image from 'next/image'
import { Sprout, CakeSlice, Gift, CloudSun, MessageCircle } from 'lucide-react'
import WhatsAppIcon from '@/components/WhatsAppIcon'

export default function Home() {
  const links = [
    {
      title: 'WhatsApp',
      url: 'https://wa.me/593967479210',
      icon: 'whatsapp'
    },
    {
      title: 'Proyecto Crochet Plants',
      url: 'https://crochet-plants.netlify.app/',
      icon: 'sprout'
    },
    {
      title: 'Landing Repostería',
      url: 'https://landing-reposteria.netlify.app',
      icon: 'cake'
    },
    {
      title: 'Kronos Solo Promocionales',
      url: 'https://www.kronosolopromocionales.com',
      icon: 'gift'
    },
    {
      title: 'Weatherly App',
      url: 'https://wheaterly-app.netlify.app',
      icon: 'cloud'
    },
    {
      title: 'Frases Random',
      url: 'https://frases-random1.netlify.app',
      icon: 'message'
    }
  ]

  const renderIcon = (iconName: string) => {
    const iconProps = { size: 24, strokeWidth: 2 }

    switch (iconName) {
      case 'whatsapp':
        return <WhatsAppIcon size={24} />
      case 'sprout':
        return <Sprout {...iconProps} />
      case 'cake':
        return <CakeSlice {...iconProps} />
      case 'gift':
        return <Gift {...iconProps} />
      case 'cloud':
        return <CloudSun {...iconProps} />
      case 'message':
        return <MessageCircle {...iconProps} />
      default:
        return null
    }
  }

  return (
    <main className="container">
      <div className="profile-section">
        <div className="profile-image-wrapper">
          <Image
            src="/img/WhatsApp Image 2025-11-16 at 09.06.11.jpeg"
            alt="Bayona Digital Systems"
            width={120}
            height={120}
            className="profile-image"
            priority
          />
        </div>

        <h1 className="profile-name">Bayona Digital Systems</h1>

        <p className="profile-bio">
          Soy un solodev (desarrollador web Full Stack) con experiencia en negocios digitales,
          optimización y posicionamiento web en buscadores (SEO), y creación de soluciones
          digitales a medida.
        </p>
      </div>

      <div className="links-section">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <span className="link-icon">{renderIcon(link.icon)}</span>
            <span className="link-title">{link.title}</span>
            <span className="link-arrow">→</span>
          </a>
        ))}
      </div>

      <footer className="footer">
        <p>© 2024 Bayona Digital Systems</p>
      </footer>
    </main>
  )
}
