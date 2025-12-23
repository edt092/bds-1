'use client'

import { useState, useEffect } from 'react'
import WhatsAppIcon from './WhatsAppIcon'
import { useLanguage } from '@/lib/LanguageContext'

export default function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, lang } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const message = encodeURIComponent(t('whatsappMessage'))
  const badge = lang === 'en' ? 'FREE' : 'GRATIS'

  return (
    <a
      href={`https://wa.me/593967479210?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-container"
      aria-label="Contactar por WhatsApp"
    >
      <div className={`whatsapp-tooltip ${isVisible ? 'visible' : ''}`}>
        <div className="tooltip-badge">{badge}</div>
        <p className="tooltip-title">{t('whatsappTitle')}</p>
        <p className="tooltip-cta">{t('whatsappCta')}</p>
        <span className="tooltip-arrow"></span>
      </div>
      <div className="floating-whatsapp">
        <WhatsAppIcon size={32} />
      </div>
    </a>
  )
}
