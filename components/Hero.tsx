'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import MomentMarquee from './MomentMarquee'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

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
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-ink/70 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            A consumer-tech studio from India
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="heading-display text-balance text-[42px] leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-[88px]"
          >
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
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-pretty text-base text-ink/65 sm:text-lg md:text-xl"
          >
            Wivvy is a consumer-tech studio creating internet-native products for everyday moments —
            from relationships and memories to AI-led personal experiences.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="#milke" className="btn-ink group">
              Explore Milke
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href="#careers" className="btn-outline group">
              Work with us
              <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </Link>
          </motion.div>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-sm text-ink/55"
          >
            First product:{' '}
            <span className="font-semibold text-ink">Milke</span> — less scrolling, more us.
          </motion.p>
        </div>

        <MomentMarquee />
      </div>
    </section>
  )
}

export default Hero
