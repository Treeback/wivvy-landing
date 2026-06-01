const apps = [
  {
    name: 'Social rituals',
    sub: 'small daily ways to feel close',
    gradient: 'gradient-coral-lime',
    glyph: '☀️',
  },
  {
    name: 'Personal AI',
    sub: 'a companion that knows your taste',
    gradient: 'gradient-violet-coral',
    glyph: '🪄',
  },
  {
    name: 'Memory spaces',
    sub: 'private shelves for your life',
    gradient: 'bg-lime',
    glyph: '📼',
  },
  {
    name: 'Culture tools',
    sub: 'apps shaped by Indian taste',
    gradient: 'bg-ink',
    glyph: '🎧',
    dark: true,
  },
]

const FutureApps = () => {
  return (
    <section id="future" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pill mx-auto">coming next</div>
          <h2 className="heading-display mt-5 text-balance text-4xl leading-[1.02] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            Milke is just the{' '}
            <span className="text-gradient italic">first signal.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink/65 md:text-xl">
            Wivvy will launch products across connection, culture, self-expression, personal AI,
            lifestyle, and everyday youth experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app, i) => (
            <div
              key={app.name}
              className={`group relative overflow-hidden rounded-[32px] ${app.dark ? 'text-cream' : 'text-ink'}`}
              style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)` }}
            >
              <div className={`h-44 w-full ${app.gradient}`} />
              <div
                className={`p-6 ${app.dark ? 'bg-ink' : 'bg-white'} border-t ${
                  app.dark ? 'border-cream/10' : 'border-ink/5'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="heading-display text-2xl leading-tight">{app.name}</h3>
                    <p
                      className={`mt-2 text-sm ${
                        app.dark ? 'text-cream/60' : 'text-ink/55'
                      }`}
                    >
                      {app.sub}
                    </p>
                  </div>
                  <span className="text-2xl">{app.glyph}</span>
                </div>
                <div
                  className={`mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold ${
                    app.dark
                      ? 'bg-cream/10 text-cream/70'
                      : 'bg-ink/5 text-ink/60'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                  exploring
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-ink/55">
          More signals soon. We build in waves, not roadmaps.
        </p>
      </div>
    </section>
  )
}

export default FutureApps
