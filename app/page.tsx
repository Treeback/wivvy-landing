import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Milke from '@/components/Milke'
import WhyWivvy from '@/components/WhyWivvy'
import WhatWeBuild from '@/components/WhatWeBuild'
import Philosophy from '@/components/Philosophy'
import FutureApps from '@/components/FutureApps'
import Careers from '@/components/Careers'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-cream text-ink">
      <Header />
      <Hero />
      <Milke />
      <WhyWivvy />
      <WhatWeBuild />
      <Philosophy />
      <FutureApps />
      <Careers />
      <Footer />
    </main>
  )
}
