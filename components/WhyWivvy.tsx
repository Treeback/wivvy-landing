import Reveal from './ui/Reveal'

const WhyWivvy = () => {
  return (
    <section id="why" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-violet/10 via-coral/10 to-lime/15 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="pill mx-auto">why wivvy exists</div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="heading-display mt-6 text-balance text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              The next wave of consumer apps won't just be useful.{' '}
              <span className="text-gradient italic">They'll feel alive.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-ink/65 md:text-xl">
              India's young internet users don't need more endless feeds. They need products that
              understand emotion, identity, play, belonging, and real life.{' '}
              <span className="font-semibold text-ink">Wivvy builds for that shift.</span>
            </p>
          </Reveal>

          {/* Visual divider with floating pills */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'emotion', cls: 'bg-coral text-white' },
              { label: 'identity', cls: 'bg-violet text-white' },
              { label: 'play', cls: 'bg-lime text-ink' },
              { label: 'belonging', cls: 'bg-ink text-cream' },
              { label: 'real life', cls: 'bg-white text-ink border border-ink/10' },
            ].map((p, i) => (
              <Reveal key={p.label} delay={0.1 + i * 0.08} y={16}>
                <span
                  className={`inline-block rounded-full px-5 py-2.5 text-sm font-semibold lowercase shadow-sm ${p.cls}`}
                  style={{ transform: `rotate(${(i - 2) * 2}deg)` }}
                >
                  {p.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWivvy
