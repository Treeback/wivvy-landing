const principles = [
  {
    n: '01',
    title: 'Less passive scrolling, more intentional living.',
    body: 'We design for the moments after you put the phone down.',
  },
  {
    n: '02',
    title: 'Build for Indian behavior, not copied Western templates.',
    body: 'Our users live, love, and joke differently. Our products do too.',
  },
  {
    n: '03',
    title: 'Make technology feel warm, playful, and human.',
    body: 'Soft edges, real voices, products that smile back at you.',
  },
  {
    n: '04',
    title: 'Design for rituals, memories, relationships, and identity.',
    body: 'The deepest tech is the kind that holds your life inside it.',
  },
  {
    n: '05',
    title: 'Move fast, but build with taste.',
    body: 'Speed without taste is noise. Taste without speed is missed time.',
  },
]

const Philosophy = () => {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-violet/30 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-coral/25 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-xs font-medium text-cream/70 backdrop-blur">
              studio philosophy
            </div>

            <h2 className="heading-display mt-6 text-balance text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
              How we{' '}
              <span className="italic text-lime">think</span>
            </h2>

            <p className="mt-6 max-w-md text-pretty text-cream/65 md:text-lg">
              A handful of beliefs we keep coming back to as we sketch, ship, and shape what young
              India spends its hours with.
            </p>
          </div>

          <ol className="space-y-2">
            {principles.map((p) => (
              <li
                key={p.n}
                className="group flex gap-6 rounded-3xl border border-transparent px-2 py-6 transition-all hover:border-cream/10 hover:bg-cream/5 md:px-6"
              >
                <span className="heading-display shrink-0 text-2xl text-cream/40 md:text-3xl">
                  {p.n}
                </span>
                <div>
                  <h3 className="heading-display text-balance text-2xl leading-snug md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/55 md:text-base">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
