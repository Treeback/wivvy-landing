'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Eye, TrendingUp, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

const examples = [
  {
    id: 0,
    thumbnail: 'from-red-600 to-orange-600',
    creatorInitial: 'A',
    hook: '"Aap galat kar rahe ho..."',
    hookEnglish: 'You\'re doing it wrong...',
    format: 'Direct + Authority',
    result: '8.2M views',
    retention: '2.1x',
    insight: 'Across 42 similar videos, authority-based hooks drove 2.1x higher retention in the first 3 seconds.',
    sampleCount: 42,
    niche: 'Finance',
  },
  {
    id: 1,
    thumbnail: 'from-purple-600 to-pink-600',
    creatorInitial: 'R',
    hook: '"Ye galti maine bhi ki thi..."',
    hookEnglish: 'I made this mistake too...',
    format: 'Mistake + Vulnerability',
    result: '5.7M views',
    retention: '1.8x',
    insight: 'Vulnerability-based hooks in Hindi finance content generate 1.8x more comments and 67% higher save rate.',
    sampleCount: 38,
    niche: 'Storytelling',
  },
  {
    id: 2,
    thumbnail: 'from-emerald-600 to-teal-600',
    creatorInitial: 'S',
    hook: '"Sirf 1% log ye jaante hain..."',
    hookEnglish: 'Only 1% of people know this...',
    format: 'Exclusivity + Curiosity',
    result: '11.4M views',
    retention: '2.7x',
    insight: 'Exclusivity-framed hooks outperform generic educational hooks by 2.7x in retention across growth niches.',
    sampleCount: 56,
    niche: 'Growth',
  },
]

export default function PatternShowcase() {
  const [active, setActive] = React.useState(0)
  const current = examples[active]

  return (
    <section className="py-24 relative" id="insights">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            See the patterns behind virality
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real breakdowns from real viral videos. This is what data-driven content creation looks like.
          </p>
        </motion.div>

        {/* Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Video Thumbnail */}
                <div className="md:col-span-2 relative">
                  <div className={`aspect-[9/14] md:aspect-auto md:h-full bg-gradient-to-br ${current.thumbnail} relative overflow-hidden`}>
                    {/* Creator silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-3xl font-bold text-white/80">{current.creatorInitial}</span>
                      </div>
                    </div>

                    {/* Play icon */}
                    <div className="absolute inset-0 flex items-end justify-start p-5">
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <Play className="w-3 h-3 text-white fill-white" />
                        <span className="text-xs text-white font-medium">{current.niche}</span>
                      </div>
                    </div>

                    {/* Views badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                        <Eye className="w-3 h-3 text-white" />
                        <span className="text-xs text-white font-semibold">{current.result}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analysis */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Hook */}
                    <div className="mb-6">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Hook</div>
                      <p className="text-xl md:text-2xl font-bold text-white leading-snug mb-1">
                        {current.hook}
                      </p>
                      <p className="text-sm text-gray-500 italic">{current.hookEnglish}</p>
                    </div>

                    {/* Metrics row */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Format</div>
                        <div className="text-sm font-semibold text-sky-400">{current.format}</div>
                      </div>
                      <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Retention Lift</div>
                        <div className="text-sm font-semibold text-yellow-400 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4" />
                          {current.retention} higher
                        </div>
                      </div>
                    </div>

                    {/* Insight */}
                    <div className="bg-yellow-400/[0.06] border border-yellow-400/10 rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-yellow-400/80 uppercase tracking-wider mb-1.5 font-medium">
                            Insight from {current.sampleCount} similar videos
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {current.insight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setActive(active === 0 ? examples.length - 1 : active - 1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {examples.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-yellow-400' : 'w-1.5 bg-white/20 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive(active === examples.length - 1 ? 0 : active + 1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
