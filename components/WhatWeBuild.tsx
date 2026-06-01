const cards = [
  {
    title: 'Social apps',
    body: 'New formats for how young India talks, shares, and shows up online.',
    emoji: '💬',
    bg: 'bg-coral',
    text: 'text-white',
    rotate: '-rotate-1',
  },
  {
    title: 'Emotional tech',
    body: 'Products built around feelings — moods, memories, milestones.',
    emoji: '💗',
    bg: 'bg-violet',
    text: 'text-white',
    rotate: 'rotate-1',
  },
  {
    title: 'AI companions',
    body: 'Personal AI that feels human, warm, and on your side.',
    emoji: '🪄',
    bg: 'bg-ink',
    text: 'text-cream',
    rotate: '-rotate-1',
  },
  {
    title: 'Lifestyle tools',
    body: 'Small daily apps for habits, routines, and the way you live.',
    emoji: '🌱',
    bg: 'bg-lime',
    text: 'text-ink',
    rotate: 'rotate-2',
  },
  {
    title: 'Culture-first communities',
    body: 'Spaces shaped around taste, fandoms, and Indian internet culture.',
    emoji: '✨',
    bg: 'bg-white',
    text: 'text-ink',
    rotate: '-rotate-2',
    border: 'border border-ink/10',
  },
]

const WhatWeBuild = () => {
  return (
    <section id="what" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="pill">what we build</div>
            <h2 className="heading-display mt-5 text-balance text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              Apps across the everyday{' '}
              <span className="text-gradient italic">internet life</span> of young India.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-ink/60">
            Each category is a long-term bet on how India will spend its time, attention, and
            emotion online over the next decade.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`group relative overflow-hidden rounded-[32px] p-7 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 ${c.bg} ${c.text} ${c.rotate} ${c.border || ''} ${
                i === 0 ? 'lg:col-span-2' : i === 1 ? 'lg:col-span-2' : i === 2 ? 'lg:col-span-2' : i === 3 ? 'lg:col-span-3' : 'lg:col-span-3'
              }`}
            >
              <div className="absolute -right-6 -top-6 text-7xl opacity-20 transition-transform duration-500 group-hover:scale-110">
                {c.emoji}
              </div>
              <div className="relative">
                <div className="text-3xl">{c.emoji}</div>
                <h3 className="heading-display mt-6 text-3xl leading-tight md:text-4xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm opacity-80 md:text-base">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuild
