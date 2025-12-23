'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { useLanguage } from '@/lib/LanguageContext'

const stackItems = [
  { name: 'React / Next.js', className: 'react' },
  { name: 'Node.js', className: 'node' },
  { name: 'Python', className: 'python' },
]

export default function BentoHero() {
  const { t } = useLanguage()

  return (
    <section className="bento-hero bg-noise">
      <motion.div
        className="bento-grid"
        initial="hidden"
        animate="visible"
      >
        {/* Bloque 1: Intro Principal (2x2) */}
        <SpotlightCard className="bento-col-span-2 bento-row-span-2 bento-intro" delay={0}>
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="brand-logo">
                <span className="brand-acronym">BDS</span>
                <span className="brand-divider"></span>
                <span className="brand-name">Bayona Digital Systems</span>
              </div>
              <span className="tagline">{t('tagline')}</span>
              <h1>
                {t('heroTitle1')} <br />
                <span className="gradient-text">{t('heroTitle2')}</span>
                <br />{t('heroTitle3')}
              </h1>
            </div>
            <p className="description">
              {t('heroDescription')}
            </p>
          </div>
        </SpotlightCard>

        {/* Bloque 2: Estado Disponible (1x1) */}
        <SpotlightCard className="bento-status" delay={0.1}>
          <div className="status-indicator">
            <span className="status-ping" />
            <span className="status-dot" />
          </div>
          <h3>{t('available')}</h3>
          <span className="label">{t('forProjects')}</span>
        </SpotlightCard>

        {/* Bloque 3: Core Stack (1x2) */}
        <SpotlightCard className="bento-row-span-2 bento-stack" delay={0.2}>
          <h3>{t('coreStack')}</h3>
          <div className="stack-list">
            {stackItems.map((item, index) => (
              <motion.div
                key={item.name}
                className={`stack-item ${item.className}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {item.name}
              </motion.div>
            ))}
          </div>
        </SpotlightCard>

        {/* Bloque 4: CTA (1x1) */}
        <motion.a
          href="#contact"
          className="bento-card bento-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="cta-header">
            <span className="cta-label">{t('contact')}</span>
            <ArrowRight className="cta-arrow" />
          </div>
          <h2>{t('startProject')}</h2>
        </motion.a>

        {/* Bloque 5: Code Snippet (2x1) */}
        <SpotlightCard className="bento-col-span-2 bento-code" delay={0.4}>
          <div className="code-info">
            <h3>{t('cleanCode')}</h3>
            <p>{t('cleanCodeDesc')}</p>
          </div>
          <div className="code-snippet">
            <pre>
              <span className="string">const</span> <span className="variable">portfolio</span> = <span className="keyword">new</span> <span className="function">Future</span>();
            </pre>
          </div>
        </SpotlightCard>

        {/* Bloque 6: Location (1x1) */}
        <SpotlightCard className="bento-location" delay={0.5}>
          <h3>LATAM</h3>
          <span className="label">{t('remoteWorldwide')}</span>
        </SpotlightCard>
      </motion.div>
    </section>
  )
}
