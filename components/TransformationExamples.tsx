'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Eye, TrendingUp, Zap, MessageCircle, Bookmark, Share2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const examples = [
  {
    id: 0,
    image: '/creators/creator-2.jpg',
    creator: 'Rohit S.',
    hook: '"Aap galat kar rahe ho..."',
    hookEnglish: 'You\'re doing it wrong...',
    format: 'Direct + Authority',
    views: '8.2M',
    retention: 2.1,
    retentionLabel: '2.1x higher',
    saves: '340K',
    comments: '28K',
    shares: '95K',
    insight: 'Across 42 similar videos, authority-based hooks drove 2.1x higher retention in the first 3 seconds.',
    sampleCount: 42,
    niche: 'Finance',
    comparison: { label: 'vs. avg finance hook', thisHook: 82, average: 39 },
  },
  {
    id: 1,
    image: '/creators/creator-4.jpg',
    creator: 'Priya M.',
    hook: '"Ye galti maine bhi ki thi..."',
    hookEnglish: 'I made this mistake too...',
    format: 'Mistake + Vulnerability',
    views: '5.7M',
    retention: 1.8,
    retentionLabel: '1.8x higher',
    saves: '280K',
    comments: '41K',
    shares: '62K',
    insight: 'Vulnerability-based hooks in Hindi content generate 1.8x more comments and 67% higher save rate.',
    sampleCount: 38,
    niche: 'Storytelling',
    comparison: { label: 'vs. avg storytelling hook', thisHook: 74, average: 41 },
  },
  {
    id: 2,
    image: '/creators/creator-3.jpg',
    creator: 'Karthik R.',
    hook: '"Sirf 1% log ye jaante hain..."',
    hookEnglish: 'Only 1% of people know this...',
    format: 'Exclusivity + Curiosity',
    views: '11.4M',
    retention: 2.7,
    retentionLabel: '2.7x higher',
    saves: '520K',
    comments: '35K',
    shares: '148K',
    insight: 'Exclusivity-framed hooks outperform generic educational hooks by 2.7x in retention across growth niches.',
    sampleCount: 56,
    niche: 'Growth',
    comparison: { label: 'vs. avg growth hook', thisHook: 91, average: 34 },
  },
]

const AUTO_PLAY_DURATION = 8000

export default function PatternShowcase() {
  const [active, setActive] = React.useState(0)
  const [progress, setProgress] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const current = examples[active]

  React.useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActive((a) => (a + 1) % examples.length)
          return 0
        }
        return prev + (100 / (AUTO_PLAY_DURATION / 50))
      })
    }, 50)
    return () => clearInterval(interval)
  }, [isPaused, active])

  const goTo = (index: number) => {
    setActive(index)
    setProgress(0)
  }

  return (
    <section
      className="py-24 relative"
      id="insights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-400 text-sm mb-6"
          >
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            Live pattern analysis
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            See the patterns behind virality
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real breakdowns from real viral videos. This is what data-driven content creation looks like.
          </p>
        </motion.div>

        {/* Tab selector with progress bars */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="grid grid-cols-3 gap-3">
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
                  i === active
                    ? 'border-white/[0.1] bg-white/[0.04]'
                    : 'border-white/[0.04] bg-transparent hover:bg-white/[0.02]'
                }`}
              >
                {/* Progress bar for active tab */}
                {i === active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/[0.06]">
                    <motion.div
                      className="h-full bg-yellow-400/60"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image src={ex.image} alt={ex.creator} fill className="object-cover" sizes="40px" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold truncate ${i === active ? 'text-white' : 'text-gray-500'}`}>
                      {ex.creator}
                    </p>
                    <p className="text-xs text-gray-600 truncate">{ex.niche} &middot; {ex.views} views</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Showcase Card */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left: Video thumbnail with real image */}
                <div className="md:col-span-2 relative">
                  <div className="aspect-[9/14] md:aspect-auto md:h-full relative overflow-hidden bg-black">
                    <Image
                      src={current.image}
                      alt={current.creator}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

                    {/* Play badge */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5">
                        <Play className="w-3 h-3 text-white fill-white" />
                        <span className="text-xs text-white font-medium">{current.niche}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5">
                        <Eye className="w-3 h-3 text-white" />
                        <span className="text-xs text-white font-semibold">{current.views}</span>
                      </div>
                    </div>

                    {/* Creator name */}
                    <div className="absolute top-5 left-5">
                      <div className="bg-black/50 backdrop-blur-md rounded-lg px-3 py-1.5">
                        <span className="text-xs text-white font-semibold">{current.creator}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Analysis */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                  {/* Hook */}
                  <div className="mb-5">
                    <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-2 font-medium">Hook</div>
                    <p className="text-xl md:text-2xl font-bold text-white leading-snug mb-1">
                      {current.hook}
                    </p>
                    <p className="text-sm text-gray-500 italic">{current.hookEnglish}</p>
                  </div>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-4 gap-3 mb-5">
                    <MetricPill icon={TrendingUp} label="Retention" value={current.retentionLabel} color="text-yellow-400" />
                    <MetricPill icon={Bookmark} label="Saves" value={current.saves} color="text-sky-400" />
                    <MetricPill icon={MessageCircle} label="Comments" value={current.comments} color="text-emerald-400" />
                    <MetricPill icon={Share2} label="Shares" value={current.shares} color="text-purple-400" />
                  </div>

                  {/* Comparison bar */}
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mb-5">
                    <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                      3-second retention rate <span className="normal-case text-gray-600">({current.comparison.label})</span>
                    </div>
                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-yellow-400 font-medium">This hook pattern</span>
                          <span className="text-yellow-400 font-bold">{current.comparison.thisHook}%</span>
                        </div>
                        <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                          <motion.div
                            key={`bar-this-${current.id}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${current.comparison.thisHook}%` }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500 font-medium">Category average</span>
                          <span className="text-gray-500 font-bold">{current.comparison.average}%</span>
                        </div>
                        <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                          <motion.div
                            key={`bar-avg-${current.id}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${current.comparison.average}%` }}
                            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                            className="h-full bg-white/10 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Insight box */}
                  <div className="bg-yellow-400/[0.06] border border-yellow-400/10 rounded-xl p-5 mt-auto">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] text-yellow-400/80 uppercase tracking-widest mb-1.5 font-medium">
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
            </motion.div>
          </AnimatePresence>

          {/* Mobile nav arrows */}
          <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={() => goTo(active === 0 ? examples.length - 1 : active - 1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {examples.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-yellow-400' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(active === examples.length - 1 ? 0 : active + 1)}
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

function MetricPill({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType
  label: string
  value: string
  color: string
}) {
  return (
    <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06] text-center">
      <Icon className={`w-4 h-4 ${color} mx-auto mb-1.5 opacity-70`} />
      <div className={`text-sm font-bold ${color}`}>{value}</div>
      <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-0.5">{label}</div>
    </div>
  )
}
