import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import TransformationExamples from '@/components/TransformationExamples'
import Benefits from '@/components/Benefits'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle geometric patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <Header />
      <Hero />
      <ProblemStatement />
      <TransformationExamples />
      <Benefits />
      <CTABanner />
      <Footer />
    </main>
  )
}