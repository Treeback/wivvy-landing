import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AppScreenshot from '@/components/AppScreenshot'
import ProblemStatement from '@/components/ProblemStatement'
import IngestToInsightsFlow from '@/components/IngestToInsightsFlow'
import UseCases from '@/components/UseCases'
import Privacy from '@/components/Privacy'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-polygon-bg relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh -z-10" />
      <div className="absolute inset-0 noise opacity-20 -z-10" />
      <Header />
      <Hero />
      <AppScreenshot />
      <ProblemStatement />
      <IngestToInsightsFlow />
      <UseCases />
      <Privacy />
      <CTABanner />
      <Footer />
    </main>
  )
}