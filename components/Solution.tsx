'use client'

import React from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Newspaper, Globe, TrendingUp, Zap } from 'lucide-react'

/* ── Platform SVG icons ── */
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

/* ── Signal sources ── */
const sources = [
  {
    id: 'all',
    label: 'All Signals',
    icon: Zap,
    iconType: 'lucide' as const,
    stat: 'Live',
    color: '#fbbf24',
    bg: 'bg-yellow-400/[0.08]',
    border: 'border-yellow-400/20',
    textColor: 'text-yellow-400',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: YoutubeIcon,
    iconType: 'svg' as const,
    stat: '4,200 creators',
    color: '#f87171',
    bg: 'bg-red-400/[0.08]',
    border: 'border-red-400/20',
    textColor: 'text-red-400',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: InstagramIcon,
    iconType: 'svg' as const,
    stat: '3,800 accounts',
    color: '#f472b6',
    bg: 'bg-pink-400/[0.08]',
    border: 'border-pink-400/20',
    textColor: 'text-pink-400',
  },
  {
    id: 'twitter',
    label: 'X / Twitter',
    icon: XIcon,
    iconType: 'svg' as const,
    stat: '1,900 accounts',
    color: '#38bdf8',
    bg: 'bg-sky-400/[0.08]',
    border: 'border-sky-400/20',
    textColor: 'text-sky-400',
  },
  {
    id: 'news',
    label: 'News & Geo',
    icon: Newspaper,
    iconType: 'lucide' as const,
    stat: '24/7 monitoring',
    color: '#fbbf24',
    bg: 'bg-yellow-400/[0.08]',
    border: 'border-yellow-400/20',
    textColor: 'text-yellow-400',
  },
  {
    id: 'culture',
    label: 'Culture',
    icon: Globe,
    iconType: 'lucide' as const,
    stat: 'IPL, Bollywood...',
    color: '#fb923c',
    bg: 'bg-orange-400/[0.08]',
    border: 'border-orange-400/20',
    textColor: 'text-orange-400',
  },
  {
    id: 'trends',
    label: 'Trends',
    icon: TrendingUp,
    iconType: 'lucide' as const,
    stat: 'Real-time',
    color: '#34d399',
    bg: 'bg-emerald-400/[0.08]',
    border: 'border-emerald-400/20',
    textColor: 'text-emerald-400',
  },
]

/* ── Feed entries with source tags ── */
const feedEntries = [
  { source: 'youtube', color: 'text-red-400', prefix: 'YT', text: 'Finance niche — 4,200 creators indexed, 82 new this week', delay: 0 },
  { source: 'instagram', color: 'text-pink-400', prefix: 'IG', text: 'Reels — 3,800 accounts tracked, authority hooks surging', delay: 0.5 },
  { source: 'news', color: 'text-yellow-400', prefix: 'NEWS', text: 'Union Budget 2025 announced by FM Sitharaman', delay: 1.0 },
  { source: 'news', color: 'text-yellow-400', prefix: '  ↳', text: 'Finance content spike: +340% in 6 hours', delay: 1.4 },
  { source: 'trends', color: 'text-emerald-400', prefix: 'TREND', text: 'Authority hooks ↑127% this week in Hindi finance', delay: 2.0 },
  { source: 'youtube', color: 'text-red-400', prefix: 'YT', text: 'Pattern: 42 videos, same Problem→Shock→Reveal arc', delay: 2.6 },
  { source: 'youtube', color: 'text-red-400', prefix: '  ↳', text: 'Avg retention: 82% vs 39% category baseline', delay: 3.0 },
  { source: 'culture', color: 'text-orange-400', prefix: 'CULTURE', text: 'IPL Playoffs week — comedy pivoting to cricket memes', delay: 3.6 },
  { source: 'twitter', color: 'text-sky-400', prefix: 'X', text: '1,900 accounts — Bollywood trailer discourse trending', delay: 4.2 },
  { source: 'instagram', color: 'text-pink-400', prefix: 'IG', text: 'New format detected: POV challenge + text overlay', delay: 4.8 },
  { source: 'news', color: 'text-yellow-400', prefix: 'NEWS', text: 'RBI rate cut — personal finance content wave incoming', delay: 5.4 },
  { source: 'all', color: 'text-white', prefix: 'INSIGHT', text: '→ Your niche playbook updated with 3 new recommendations', delay: 6.0 },
]

export default function WhatWeDo() {
  const [activeSource, setActiveSource] = React.useState('all')
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filteredEntries = activeSource === 'all'
    ? feedEntries
    : feedEntries.filter((e) => e.source === activeSource || e.source === 'all')

  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            We monitor
            <span className="text-gradient-yellow"> everything.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Platforms. News. Geopolitics. Cultural moments.
            Our AI cross-references it all to understand not just <em className="text-white not-italic font-medium">what</em> went viral,
            but <em className="text-white not-italic font-medium">why it went viral right now</em>.
          </p>
        </motion.div>

        {/* ── Source selector cards ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-4xl mx-auto">
          {sources.map((source, i) => {
            const isActive = activeSource === source.id
            const Icon = source.icon
            return (
              <motion.button
                key={source.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => setActiveSource(source.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? `${source.bg} ${source.border} ${source.textColor}`
                    : 'border-white/[0.06] bg-white/[0.02] text-gray-500 hover:bg-white/[0.04] hover:border-white/[0.1]'
                }`}
                style={isActive ? { boxShadow: `0 0 20px ${source.color}15` } : {}}
              >
                <Icon className={`w-4 h-4 ${isActive ? source.textColor : 'text-gray-600'} transition-colors`} />
                <span className="text-sm font-medium">{source.label}</span>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[10px] opacity-60 ml-1"
                  >
                    {source.stat}
                  </motion.span>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* ── Terminal ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-[#0C0C0C] overflow-hidden shadow-2xl shadow-black/50">
            {/* Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] text-gray-500 font-mono">wivvy signal-monitor — live</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-mono">connected</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 md:p-6 font-mono text-[13px] leading-loose min-h-[340px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSource}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-0.5"
                >
                  {filteredEntries.map((entry, i) => (
                    <motion.div
                      key={`${activeSource}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.12, duration: 0.25 }}
                      className="flex gap-0"
                    >
                      {entry.prefix.startsWith('  ') ? (
                        <>
                          <span className="text-gray-700 select-none whitespace-pre">{'  '}</span>
                          <span className={`${entry.color} opacity-50`}>{entry.prefix.trim()}</span>
                          <span className="text-gray-400 ml-2">{entry.text}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-gray-700 select-none mr-2">&gt;</span>
                          <span className={`${entry.color} font-semibold mr-2`}>[{entry.prefix}]</span>
                          <span className="text-gray-300">{entry.text}</span>
                        </>
                      )}
                    </motion.div>
                  ))}

                  {/* Cursor */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: filteredEntries.length * 0.12 + 0.3 }}
                    className="flex items-center gap-2 mt-3"
                  >
                    <span className="text-gray-700 select-none">&gt;</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-4 bg-yellow-400/70 inline-block"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="#insights"
              className="group inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              See what we&apos;re tracking right now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
