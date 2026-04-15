import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import Solution from '@/components/Solution'
import TransformationExamples from '@/components/TransformationExamples'
import Benefits from '@/components/Benefits'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255 255 255 / 0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <Header />
      <Hero />
      <ProblemStatement />
      <Solution />
      <TransformationExamples />
      <Benefits />
      <CTABanner />
      <Footer />
    </main>
  )
}
