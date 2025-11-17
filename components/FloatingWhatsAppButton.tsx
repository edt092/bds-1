import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/593967479210"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
