'use client'

import Image from 'next/image'
import { Code2, Rocket, Zap, Database, Smartphone, Globe, ExternalLink } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { useLanguage } from '@/lib/LanguageContext'

const projects = [
  {
    title: 'PromoGimmicks',
    descriptionEs: 'Landing page profesional para empresa de productos promocionales y merchandising. Diseño moderno con animaciones fluidas.',
    descriptionEn: 'Professional landing page for promotional products and merchandising company. Modern design with fluid animations.',
    url: 'https://github.com/edt092/promogimmicks',
    image: '/img/projects/promogimmicks.png',
    tags: ['Next.js 14', 'TypeScript', 'Framer Motion']
  },
  {
    title: 'KS Promocionales',
    descriptionEs: 'Catálogo digital interactivo con editor visual de logos y cotización directa por WhatsApp. +500 productos personalizables.',
    descriptionEn: 'Interactive digital catalog with visual logo editor and direct WhatsApp quotation. +500 customizable products.',
    url: 'https://github.com/edt092/ksp-tienda',
    image: '/img/projects/ksp-tienda.png',
    tags: ['Next.js 14', 'React-Konva', 'SEO']
  },
  {
    title: 'MindsetMugs',
    descriptionEs: 'E-commerce premium de mugs para emprendedores con diseño minimalista. Integración de pagos con PayPhone API.',
    descriptionEn: 'Premium e-commerce for entrepreneur mugs with minimalist design. Payment integration with PayPhone API.',
    url: 'https://github.com/edt092/tienda-mugs',
    image: '/img/projects/mindset-mugs.png',
    tags: ['Next.js', 'TypeScript', 'PayPhone API']
  },
  {
    title: 'BB Seguro Store',
    descriptionEs: 'Tienda online de cascos protectores para bebés con diseño emocional enfocado en seguridad infantil. Pagos integrados con PayPhone.',
    descriptionEn: 'Online store for baby protective helmets with emotional design focused on child safety. Integrated payments with PayPhone.',
    url: 'https://github.com/edt092/tienda-bb-seguro',
    image: '/img/projects/tienda-bb-seguro.png',
    tags: ['Next.js 14', 'Framer Motion', 'PayPhone API']
  }
]

export default function PageContent() {
  const { t, lang } = useLanguage()

  const skills = [
    { name: t('frontendDev'), icon: Code2, level: 90 },
    { name: t('backendApis'), icon: Database, level: 85 },
    { name: t('responsiveDesign'), icon: Smartphone, level: 95 },
    { name: t('seoMarketing'), icon: Rocket, level: 88 },
    { name: t('performanceOpt'), icon: Zap, level: 87 },
    { name: t('webDev'), icon: Globe, level: 92 }
  ]

  return (
    <>
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2 className="section-title">{t('aboutTitle')}</h2>
          <p className="section-subtitle">{t('aboutSubtitle')}</p>
        </div>

        <div className="about-content">
          <p className="about-text" dangerouslySetInnerHTML={{ __html: t('aboutText1') }} />
          <p className="about-text" dangerouslySetInnerHTML={{ __html: t('aboutText2') }} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2 className="section-title">{t('skillsTitle')}</h2>
          <p className="section-subtitle">{t('skillsSubtitle')}</p>
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
          <h2 className="section-title">{t('projectsTitle')}</h2>
          <p className="section-subtitle">{t('projectsSubtitle')}</p>
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
              <div className="project-image-wrapper">
                <Image
                  src={project.image}
                  alt={`Preview ${project.title}`}
                  width={640}
                  height={400}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {lang === 'en' ? project.descriptionEn : project.descriptionEs}
                </p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-link">
                  {t('viewProject')} <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">{t('contactTitle')}</h2>
          <p className="contact-description">{t('contactDescription')}</p>
          <div className="contact-buttons">
            <a
              href="https://wa.me/593967479210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-whatsapp"
            >
              <WhatsAppIcon size={20} />
              WhatsApp
            </a>
            <a href="mailto:info@edwinbayonaitmanager.online" className="btn-secondary">
              {t('sendEmail')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-acronym">BDS</span>
          <span className="footer-brand-name">Bayona Digital Systems</span>
        </div>
        <p>© 2024 BDS - {t('footerText')}</p>
        <p className="footer-subtitle">{t('footerSubtitle')}</p>
      </footer>
    </>
  )
}
