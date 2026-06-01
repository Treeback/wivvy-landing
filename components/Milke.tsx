'use client'

import { Heart, MapPin, Image as ImageIcon, Lock, Film } from 'lucide-react'

const features = [
  {
    title: 'Daily connection rituals',
    body: 'Tiny prompts that turn into shared inside jokes.',
    icon: Heart,
    bg: 'bg-coral/15 text-coral',
  },
  {
    title: 'Offline date ideas',
    body: 'Curated for your city, mood, and budget.',
    icon: MapPin,
    bg: 'bg-violet/15 text-violet',
  },
  {
    title: 'Shared photos & videos',
    body: 'A private memory shelf, only yours.',
    icon: ImageIcon,
    bg: 'bg-lime/40 text-ink',
  },
  {
    title: 'Private couple space',
    body: 'No feeds, no followers — just the two of you.',
    icon: Lock,
    bg: 'bg-ink/8 text-ink',
  },
  {
    title: 'Reels-to-real-life',
    body: 'Save inspiration, turn it into plans.',
    icon: Film,
    bg: 'bg-coral/15 text-coral',
  },
]

const Milke = () => {
  return (
    <section id="milke" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-15%] top-20 h-[500px] w-[500px] rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute left-[-10%] bottom-10 h-[420px] w-[420px] rounded-full bg-violet/15 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          {/* Phone mockup */}
          <div className="relative mx-auto w-full max-w-md lg:order-2">
            <div className="absolute -inset-10 -z-10 rounded-[60px] gradient-violet-coral opacity-25 blur-3xl" />

            <div className="relative mx-auto h-[600px] w-[300px] rounded-[44px] border-[10px] border-ink bg-ink p-1.5 shadow-[0_60px_120px_-40px_rgba(20,20,31,0.5)]">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
              <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-cream">
                <div className="flex items-center justify-between px-5 pt-7 text-xs font-semibold text-ink">
                  <span>9:41</span>
                  <span className="lowercase">milke</span>
                  <span>●●●</span>
                </div>

                <div className="mt-4 px-5">
                  <p className="text-xs uppercase tracking-widest text-ink/50">today</p>
                  <h3 className="heading-display mt-1 text-2xl text-ink">
                    one tiny moment <span className="text-gradient italic">together</span>
                  </h3>
                </div>

                <div className="mx-4 mt-4 rounded-3xl bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime">
                      💭
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                      ritual
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium leading-snug text-ink">
                    What was the smallest thing that made you smile today?
                  </p>
                  <div className="mt-4 flex gap-2">
                    <div className="rounded-full bg-ink px-3 py-1.5 text-[11px] font-medium text-cream">
                      share with arjun
                    </div>
                    <div className="rounded-full bg-ink/5 px-3 py-1.5 text-[11px] font-medium text-ink">
                      skip
                    </div>
                  </div>
                </div>

                <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
                  <div className="overflow-hidden rounded-2xl">
                    <div className="h-20 gradient-coral-lime" />
                    <div className="bg-white px-2 py-1.5">
                      <p className="text-[10px] font-medium text-ink">marine drive</p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <div className="h-20 gradient-violet-coral" />
                    <div className="bg-white px-2 py-1.5">
                      <p className="text-[10px] font-medium text-ink">our park</p>
                    </div>
                  </div>
                </div>

                <div className="mx-4 mt-3 rounded-2xl bg-violet/10 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-violet">
                    saved together
                  </p>
                  <p className="mt-1 text-xs font-medium text-ink">
                    24 reels · 6 places · 3 plans
                  </p>
                </div>
              </div>
            </div>

            {/* Floating tags */}
            <div className="absolute -left-4 top-16 -rotate-6 animate-float-slow">
              <div className="card-soft px-3 py-1.5 text-xs font-semibold text-ink">
                ❤️ 218 days
              </div>
            </div>
            <div className="absolute -right-6 bottom-20 rotate-6 animate-float">
              <div className="rounded-full bg-lime px-4 py-2 text-xs font-bold text-ink shadow-lg">
                coming soon
              </div>
            </div>
          </div>

          {/* Copy + features */}
          <div className="lg:order-1">
            <div className="pill">
              <span>👀</span> First product
            </div>

            <h2 className="heading-display mt-5 text-balance text-5xl leading-[1.02] text-ink md:text-6xl lg:text-[72px]">
              Meet <span className="text-gradient italic">Milke</span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-lg text-ink/65 md:text-xl">
              Milke helps couples turn screen time into real moments — daily rituals, offline date
              ideas, private memories, and a space that belongs only to them.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group card-soft p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl ${f.bg}`}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream">
                <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
                Coming soon
              </div>
              <a
                href="mailto:hello@wivvy.ai?subject=Milke%20early%20access"
                className="text-sm font-semibold text-ink/70 underline-offset-4 hover:text-ink hover:underline"
              >
                Join the waitlist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Milke
