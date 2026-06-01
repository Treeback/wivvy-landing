'use client'

import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-violet/25 blur-3xl" />
        <div className="absolute right-[-10%] top-32 h-[480px] w-[480px] rounded-full bg-coral/25 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/3 h-[320px] w-[320px] rounded-full bg-lime/30 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-ink/70 backdrop-blur animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            A consumer-tech studio from India
          </div>

          <h1 className="heading-display text-balance text-[42px] leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-[88px]">
            Building apps for the way{' '}
            <span className="relative inline-block">
              <span className="text-gradient italic">young India</span>
              <svg
                aria-hidden
                viewBox="0 0 300 14"
                className="absolute -bottom-2 left-0 w-full"
              >
                <path
                  d="M2 8 C 80 -2, 220 14, 298 6"
                  fill="none"
                  stroke="#C8FF5C"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            feels, connects, and lives.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base text-ink/65 sm:text-lg md:text-xl">
            Wivvy is a consumer-tech studio creating internet-native products for everyday moments —
            from relationships and memories to AI-led personal experiences.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#milke" className="btn-ink group">
              Explore Milke
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href="#careers" className="btn-outline group">
              Work with us
              <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </Link>
          </div>

          <p className="mt-8 text-sm text-ink/55">
            First product:{' '}
            <span className="font-semibold text-ink">Milke</span> — less scrolling, more us.
          </p>
        </div>

        <div className="relative mt-20 hidden h-[280px] md:block">
          <div className="absolute left-[6%] top-2 -rotate-6 animate-float-slow">
            <div className="card-soft flex items-center gap-3 px-5 py-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-coral to-coral/60" />
              <div>
                <div className="text-xs text-ink/50">priya · just now</div>
                <div className="text-sm font-medium text-ink">date night? 🌙</div>
              </div>
            </div>
          </div>

          <div className="absolute left-[28%] top-24 rotate-3 animate-float">
            <div className="card-soft overflow-hidden">
              <div className="h-24 w-44 gradient-coral-lime" />
              <div className="px-4 py-3">
                <div className="text-xs font-medium text-ink/50">memory · goa</div>
                <div className="text-sm font-semibold text-ink">our first sunrise</div>
              </div>
            </div>
          </div>

          <div className="absolute right-[26%] top-2 -rotate-3 animate-float-fast">
            <div className="card-soft flex items-center gap-3 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime text-lg">
                💭
              </div>
              <div>
                <div className="text-xs font-medium text-ink/50">today's ritual</div>
                <div className="text-sm font-semibold text-ink">one thing you loved</div>
              </div>
            </div>
          </div>

          <div className="absolute right-[8%] top-28 rotate-6 animate-float-slow">
            <div className="flex items-center gap-3 rounded-3xl border border-ink/5 bg-white px-4 py-3 shadow-[0_30px_60px_-30px_rgba(20,20,31,0.2)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-violet-coral text-xl text-white">
                m
              </div>
              <div>
                <div className="text-sm font-bold text-ink">Milke</div>
                <div className="text-xs text-ink/50">a space for two</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
