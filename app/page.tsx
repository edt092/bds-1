import Image from 'next/image'
import { Sprout, CakeSlice, Gift, CloudSun, MessageCircle, Code2, Rocket, Zap, Database, Smartphone, Globe, ExternalLink } from 'lucide-react'
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton'

export default function Home() {
  const projects = [
    {
      title: 'Crochet Plants',
      description: 'E-commerce moderno de plantas de crochet con carrito de compras y sistema de pagos integrado.',
      url: 'https://crochet-plants.netlify.app/',
      icon: 'sprout',
      tags: ['React', 'E-commerce', 'UI/UX']
    },
    {
      title: 'Landing Repostería',
      description: 'Landing page optimizada para negocio de repostería con diseño atractivo y call-to-actions.',
      url: 'https://landing-reposteria.netlify.app',
      icon: 'cake',
      tags: ['Landing', 'Marketing', 'Responsive']
    },
    {
      title: 'Kronos Promocionales',
      description: 'Sitio web corporativo completo para empresa de artículos promocionales.',
      url: 'https://www.kronosolopromocionales.com',
      icon: 'gift',
      tags: ['WordPress', 'SEO', 'Corporate']
    },
    {
      title: 'Weatherly App',
      description: 'Aplicación del clima en tiempo real con API integration y diseño limpio.',
      url: 'https://wheaterly-app.netlify.app',
      icon: 'cloud',
      tags: ['API', 'React', 'Real-time']
    },
    {
      title: 'Frases Random',
      description: 'Generador de frases motivacionales aleatorias con interfaz minimalista.',
      url: 'https://frases-random1.netlify.app',
      icon: 'message',
      tags: ['JavaScript', 'UI', 'API']
    }
  ]

  const skills = [
    { name: 'Frontend Development', icon: Code2, level: 90 },
    { name: 'Backend & APIs', icon: Database, level: 85 },
    { name: 'Responsive Design', icon: Smartphone, level: 95 },
    { name: 'SEO & Marketing', icon: Rocket, level: 88 },
    { name: 'Performance Optimization', icon: Zap, level: 87 },
    { name: 'Web Development', icon: Globe, level: 92 }
  ]

  const renderIcon = (iconName: string) => {
    const iconProps = { size: 24, strokeWidth: 2 }

    switch (iconName) {
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
    <main className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image-wrapper">
            <Image
              src="/img/WhatsApp Image 2025-11-16 at 09.06.11.jpeg"
              alt="Bayona Digital Systems"
              width={140}
              height={140}
              className="profile-image"
              priority
            />
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Bayona Digital Systems</span>
          </h1>

          <p className="hero-subtitle">Full Stack Developer & Digital Solutions Architect</p>

          <p className="hero-description">
            Transformo ideas en experiencias digitales extraordinarias. Especializado en
            desarrollo web full stack, SEO y negocios digitales que generan resultados reales.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              <Rocket size={20} />
              Ver Proyectos
            </a>
            <a href="#contact" className="btn-secondary">
              <MessageCircle size={20} />
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">Pasión por crear soluciones digitales innovadoras</p>
        </div>

        <div className="about-content">
          <p className="about-text">
            Soy un <strong>solodev full stack</strong> con amplia experiencia en el desarrollo de
            soluciones digitales completas. Mi enfoque combina código limpio, diseño intuitivo y
            estrategias de negocio para crear productos que no solo se ven bien, sino que generan
            valor real.
          </p>
          <p className="about-text">
            Especializado en <strong>React, Next.js, Node.js</strong> y optimización SEO.
            He trabajado con diversos clientes ayudándoles a establecer su presencia digital
            y hacer crecer sus negocios online.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">Tecnologías y expertise</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">Trabajos recientes que demuestran mi experiencia</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-icon">
                {renderIcon(project.icon)}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-link">
                Ver proyecto <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">¿Listo para tu próximo proyecto?</h2>
          <p className="contact-description">
            Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales.
            Estoy disponible para proyectos freelance y colaboraciones.
          </p>
          <div className="contact-buttons">
            <a
              href="https://wa.me/593967479210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a href="mailto:info@edwinbayonaitmanager.online" className="btn-secondary">
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Bayona Digital Systems - Full Stack Developer</p>
        <p className="footer-subtitle">Creando experiencias digitales extraordinarias</p>
      </footer>

      <FloatingWhatsAppButton />
    </main>
  )
}
