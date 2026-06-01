'use client'

import Image from 'next/image'
import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Heart, MapPin, Image as ImageIcon, Lock, Film } from 'lucide-react'
import Reveal from './ui/Reveal'

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

const InteractivePhone = () => {
  const wrapRef = useRef<HTMLDivElement>(null)

  // Cursor position normalized 0..1 inside the phone wrapper
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const springCfg = { stiffness: 180, damping: 22, mass: 0.6 }
  const rotateY = useSpring(useTransform(mx, [0, 1], [-14, 14]), springCfg)
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), springCfg)

  // Glow drifts opposite to tilt for parallax depth
  const glowX = useSpring(useTransform(mx, [0, 1], [24, -24]), { stiffness: 80, damping: 20 })
  const glowY = useSpring(useTransform(my, [0, 1], [24, -24]), { stiffness: 80, damping: 20 })
  const glowOpacity = useSpring(0.25, { stiffness: 80, damping: 20 })

  // Rim halo — sits right behind the phone and tilts with it
  const rimOpacity = useSpring(0.55, { stiffness: 90, damping: 20 })

  // Specular highlight follows cursor across the screen
  const sheenX = useTransform(mx, (v) => `${v * 100}%`)
  const sheenY = useTransform(my, (v) => `${v * 100}%`)
  const sheenOpacity = useSpring(0, { stiffness: 120, damping: 22 })
  const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.55), transparent 50%)`

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
    glowOpacity.set(0.4)
    rimOpacity.set(0.9)
    sheenOpacity.set(0.6)
  }

  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
    glowOpacity.set(0.25)
    rimOpacity.set(0.55)
    sheenOpacity.set(0)
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative"
      style={{ perspective: 1400 }}
    >
      {/* Magnetic glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[64px] gradient-violet-coral blur-3xl"
        style={{ x: glowX, y: glowY, opacity: glowOpacity }}
      />

      {/* Tilt wrapper — holds the rim halo + phone, both rotate together */}
      <motion.div
        className="relative will-change-transform"
        style={{
          aspectRatio: '695 / 1503',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Rim halo behind the phone */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-2 rounded-[58px] blur-2xl"
          style={{
            background:
              'linear-gradient(125deg, #7C3AED 0%, #B05CFF 35%, #FF6B57 70%, #FFB29B 100%)',
            opacity: rimOpacity,
          }}
        />

        {/* iPhone body */}
        <div className="relative h-full w-full rounded-[50px] bg-ink p-[8px] shadow-[0_60px_120px_-30px_rgba(20,20,31,0.45)]">
          {/* Side buttons */}
          <span className="absolute -left-[3px] top-[110px] h-10 w-[3px] rounded-l-md bg-ink/80" />
          <span className="absolute -left-[3px] top-[170px] h-16 w-[3px] rounded-l-md bg-ink/80" />
          <span className="absolute -left-[3px] top-[250px] h-16 w-[3px] rounded-l-md bg-ink/80" />
          <span className="absolute -right-[3px] top-[150px] h-24 w-[3px] rounded-r-md bg-ink/80" />

          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[42px]">
            <Image
              src="/milke/screen.png"
              alt="Milke app — less scrolling, more us"
              width={695}
              height={1503}
              priority
              className="block h-full w-full object-cover"
            />

            {/* Specular highlight follows the cursor */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-overlay"
              style={{ background: sheen, opacity: sheenOpacity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

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
          <Reveal y={40} className="relative mx-auto w-[300px] sm:w-[340px] lg:order-2 lg:w-[360px]">
            <InteractivePhone />

            {/* Floating tag */}
            <div className="pointer-events-none absolute -right-2 bottom-24 rotate-6 animate-float sm:-right-6">
              <div className="rounded-full bg-lime px-4 py-2 text-xs font-bold text-ink shadow-lg">
                coming soon
              </div>
            </div>
          </Reveal>

          {/* Copy + features */}
          <div className="lg:order-1">
            <Reveal>
              <div className="pill">
                <span>👀</span> First product
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="heading-display mt-5 text-balance text-5xl leading-[1.02] text-ink md:text-6xl lg:text-[72px]">
                Meet <span className="text-gradient italic">Milke</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-pretty text-lg text-ink/65 md:text-xl">
                Milke helps couples turn screen time into real moments — daily rituals, offline date
                ideas, private memories, and a space that belongs only to them.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={0.1 + i * 0.08}>
                  <div className="group card-soft p-5 transition-transform duration-300 hover:-translate-y-1">
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl ${f.bg}`}
                    >
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-ink">{f.title}</h3>
                    <p className="mt-1 text-sm text-ink/60">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Milke
