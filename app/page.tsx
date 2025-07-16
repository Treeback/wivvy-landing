import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AppScreenshot from '@/components/AppScreenshot'
import ProblemStatement from '@/components/ProblemStatement'
import HowItWorks from '@/components/HowItWorks'
import InteractiveGraph from '@/components/InteractiveGraph'
import UseCases from '@/components/UseCases'
import Privacy from '@/components/Privacy'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-wivvy-bg">
      <Header />
      <Hero />
      <AppScreenshot />
      <ProblemStatement />
      <HowItWorks />
      <InteractiveGraph />
      <UseCases />
      <Privacy />
      <CTABanner />
      <Footer />
    </main>
  )
}