'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const useCases = [
  {
    id: 'creators',
    image: '/creators/creator-2.jpg',
    label: 'creators',
    tagline: 'who want to stop guessing.',
    stat: '12x',
    statLabel: 'more views',
    color: 'text-yellow-400',
    statColor: 'text-yellow-400/60',
    lineColor: 'bg-yellow-400/20',
    detail: 'Rohit went from 40K to 500K views per video. He didn\u2019t change his niche. He changed his hooks \u2014 using patterns we surfaced from 42 similar creators who were already winning.',
    cta: 'creators',
  },
  {
    id: 'agencies',
    image: '/creators/creator-1.jpg',
    label: 'agencies',
    tagline: 'who need to scale results.',
    stat: '67%',
    statLabel: 'faster strategy',
    color: 'text-sky-400',
    statColor: 'text-sky-400/60',
    lineColor: 'bg-sky-400/20',
    detail: 'CreatorScale manages 25 Indian creators. Before Wivvy, each strategy was gut feel. Now they have auto-generated niche playbooks \u2014 and 3 creators crossed 1M subs in 6 months.',
    cta: 'agencies',
  },
  {
    id: 'brands',
    image: '/creators/creator-4.jpg',
    label: 'brands',
    tagline: 'that want real conversions.',
    stat: '4.2x',
    statLabel: 'ROAS',
    color: 'text-emerald-400',
    statColor: 'text-emerald-400/60',
    lineColor: 'bg-emerald-400/20',
    detail: 'A D2C skincare brand discovered that "myth-busting" hooks convert 4x better than product demos for Gen Z. They matched with the right creators and saw 4.2x ROAS in their first quarter.',
    cta: 'brands',
  },
]

export default function UseCases() {
  const [expanded, setExpanded] = React.useState<string | null>(null)

  return (
    <section className="py-24 relative" id="use-cases">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Who it&apos;s for</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for people who are
            <br />
            <span className="text-gray-500">tired of guessing.</span>
          </h2>
        </motion.div>

        {/* Use case rows — typography-driven */}
        <div className="max-w-6xl space-y-0">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Main row */}
              <button
                onClick={() => setExpanded(expanded === uc.id ? null : uc.id)}
                className="w-full text-left group py-8 md:py-10 border-b border-white/[0.06] cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {/* Inline photo + text */}
                  <div className="flex items-center gap-4 md:gap-5 flex-1 min-w-0">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden flex-shrink-0 relative ring-2 ring-white/[0.06] group-hover:ring-white/[0.15] transition-all"
                    >
                      <Image src={uc.image} alt={uc.label} fill className="object-cover" sizes="64px" />
                    </motion.div>

                    {/* Typography */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                      <span className="text-white">For </span>
                      <span className={`${uc.color}`}>{uc.label}</span>
                      <span className="text-gray-500"> {uc.tagline}</span>
                    </h3>
                  </div>

                  {/* Stat + arrow */}
                  <div className="flex items-center gap-4 md:gap-6 pl-[4.5rem] md:pl-0">
                    <div className="text-right">
                      <span className={`text-3xl md:text-4xl font-black ${uc.color}`}>{uc.stat}</span>
                      <p className="text-xs text-gray-600 uppercase tracking-wider">{uc.statLabel}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === uc.id ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-500 group-hover:border-white/[0.15] group-hover:text-white transition-all flex-shrink-0"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </button>

              {/* Expanded detail */}
              <AnimatePresence>
                {expanded === uc.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pt-2 pl-[4.5rem] md:pl-[5.25rem] pr-4 max-w-3xl">
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {uc.detail}
                      </p>
                      <a
                        href="#cta"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${uc.color} hover:opacity-80 transition-opacity`}
                      >
                        Request early access for {uc.cta}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
