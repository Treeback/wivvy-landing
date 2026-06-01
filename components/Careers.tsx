'use client'

import { ArrowUpRight } from 'lucide-react'

const tags = [
  'product',
  'culture',
  'design',
  'storytelling',
  'engineering',
  'emotional intelligence',
]

const Careers = () => {
  return (
    <section id="careers" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[40px] bg-cream p-8 sm:p-12 md:p-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-[380px] w-[380px] rounded-full bg-violet/25 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-[420px] w-[420px] rounded-full bg-coral/25 blur-3xl" />
            <div className="absolute right-1/3 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-lime/30 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="pill mx-auto">careers · collaborators</div>

            <h2 className="heading-display mt-6 text-balance text-4xl leading-[1.02] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Come build the next{' '}
              <span className="text-gradient italic">consumer internet</span> from India.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink/65 md:text-xl">
              We're looking for people who understand product, culture, design, storytelling,
              engineering, and the emotional lives of young users.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {tags.map((t, i) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm font-medium text-ink/80 shadow-sm"
                  style={{ transform: `rotate(${(i - 2) * 1.5}deg)` }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <a href="mailto:hello@wivvy.ai" className="btn-ink group text-base">
                hello@wivvy.ai
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-4 text-sm text-ink/55">
                Drop a line. Tell us what you're obsessed with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
