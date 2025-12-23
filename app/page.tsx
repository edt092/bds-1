import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton'
import BentoHero from '@/components/BentoHero'
import PageContent from '@/components/PageContent'

export default function Home() {
  return (
    <main className="landing-container">
      {/* Bento Grid Hero Section */}
      <BentoHero />

      {/* Translated Content */}
      <PageContent />

      <FloatingWhatsAppButton />
    </main>
  )
}
