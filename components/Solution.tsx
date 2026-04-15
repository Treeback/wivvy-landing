'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ── signal network nodes ── */
const nodes = [
  { id: 'yt', label: 'YouTube', x: 80, y: 60, color: '#f87171', delay: 0.3 },
  { id: 'ig', label: 'Instagram', x: 280, y: 25, color: '#f472b6', delay: 0.5 },
  { id: 'tw', label: 'X / Twitter', x: 480, y: 55, color: '#38bdf8', delay: 0.7 },
  { id: 'news', label: 'News', x: 620, y: 140, color: '#fbbf24', delay: 0.9 },
  { id: 'culture', label: 'Culture', x: 550, y: 250, color: '#fb923c', delay: 1.1 },
  { id: 'trends', label: 'Trends', x: 110, y: 250, color: '#34d399', delay: 1.3 },
]
const center = { x: 350, y: 160 }

/* ── terminal feed ── */
const feedEntries = [
  { color: 'text-sky-400', prefix: 'SCAN', text: 'YouTube Finance — 4,200 creators indexed', delay: 0 },
  { color: 'text-pink-400', prefix: 'SCAN', text: 'Instagram Reels — 3,800 accounts tracked', delay: 0.6 },
  { color: 'text-yellow-400', prefix: 'NEWS', text: 'Union Budget 2025 announced', delay: 1.4 },
  { color: 'text-yellow-400', prefix: '  ↳', text: 'Finance content spike: +340% in 6 hours', delay: 2.0 },
  { color: 'text-yellow-400', prefix: '  ↳', text: 'Top hook: "Budget mein ye chhupa hai..."', delay: 2.4 },
  { color: 'text-emerald-400', prefix: 'TREND', text: 'Authority hooks ↑127% across Hindi finance', delay: 3.2 },
  { color: 'text-purple-400', prefix: 'PATTERN', text: '42 videos matched — same structure', delay: 4.0 },
  { color: 'text-purple-400', prefix: '  ↳', text: 'Retention: 82% vs 39% baseline', delay: 4.4 },
  { color: 'text-orange-400', prefix: 'CULTURE', text: 'IPL Playoffs → cricket meme surge', delay: 5.2 },
  { color: 'text-sky-400', prefix: 'SCAN', text: 'X/Twitter — 1,900 accounts monitored', delay: 6.0 },
  { color: 'text-white', prefix: 'INSIGHT', text: 'Playbook updated — 3 new recommendations', delay: 6.8 },
]

export default function WhatWeDo() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-6"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            We monitor
            <span className="text-gradient-yellow"> everything.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Virality doesn&apos;t happen in a vacuum. Our AI tracks content across platforms and
            cross-references it with news, geopolitical events, and cultural moments — to
            understand not just <em className="text-white not-italic font-medium">what</em> went viral, but <em className="text-white not-italic font-medium">why it went viral right now</em>.
          </p>
        </motion.div>

        {/* ── Animated Signal Network ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-8 hidden md:block"
        >
          <svg viewBox="0 0 700 310" className="w-full h-auto" fill="none">
            {/* Connection lines from nodes to center */}
            {nodes.map((node) => (
              <g key={node.id}>
                {/* Static line */}
                <motion.line
                  x1={node.x} y1={node.y}
                  x2={center.x} y2={center.y}
                  stroke="white" strokeOpacity={0.04} strokeWidth={1}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: node.delay, duration: 0.6 }}
                />
                {/* Animated particle along line */}
                <motion.circle
                  r={3}
                  fill={node.color}
                  opacity={0.7}
                  initial={{ cx: node.x, cy: node.y }}
                  animate={{
                    cx: [node.x, center.x],
                    cy: [node.y, center.y],
                    opacity: [0.8, 0],
                    r: [3, 2],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: node.delay + 0.8,
                    repeat: Infinity,
                    repeatDelay: 1.5 + Math.random() * 2,
                    ease: 'easeIn',
                  }}
                />
                {/* Second particle offset */}
                <motion.circle
                  r={2}
                  fill={node.color}
                  opacity={0.5}
                  initial={{ cx: node.x, cy: node.y }}
                  animate={{
                    cx: [node.x, center.x],
                    cy: [node.y, center.y],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: node.delay + 2.5,
                    repeat: Infinity,
                    repeatDelay: 2 + Math.random() * 2,
                    ease: 'easeIn',
                  }}
                />
              </g>
            ))}

            {/* Outer nodes */}
            {nodes.map((node) => (
              <motion.g
                key={`node-${node.id}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: node.delay, type: 'spring', stiffness: 120 }}
              >
                {/* Glow */}
                <circle cx={node.x} cy={node.y} r={20} fill={node.color} opacity={0.06} />
                {/* Ring */}
                <circle cx={node.x} cy={node.y} r={14} fill="none" stroke={node.color} strokeWidth={1} strokeOpacity={0.3} />
                {/* Dot */}
                <motion.circle
                  cx={node.x} cy={node.y} r={5}
                  fill={node.color}
                  animate={{ r: [5, 6, 5], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: node.delay * 0.5 }}
                />
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + (node.y < center.y ? -22 : 28)}
                  textAnchor="middle"
                  fill="white"
                  opacity={0.5}
                  fontSize={11}
                  fontFamily="Inter, system-ui, sans-serif"
                  fontWeight={500}
                >
                  {node.label}
                </text>
              </motion.g>
            ))}

            {/* Center node — Wivvy AI */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            >
              {/* Outer glow pulse */}
              <motion.circle
                cx={center.x} cy={center.y} r={40}
                fill="none" stroke="#fbbf24" strokeWidth={1}
                animate={{ r: [40, 48, 40], strokeOpacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Mid ring */}
              <circle cx={center.x} cy={center.y} r={30} fill="#fbbf24" opacity={0.04} />
              <circle cx={center.x} cy={center.y} r={30} fill="none" stroke="#fbbf24" strokeWidth={1} strokeOpacity={0.2} />
              {/* Core */}
              <circle cx={center.x} cy={center.y} r={18} fill="#fbbf24" opacity={0.15} />
              <motion.circle
                cx={center.x} cy={center.y} r={8}
                fill="#fbbf24"
                animate={{ r: [8, 10, 8], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Label */}
              <text
                x={center.x}
                y={center.y + 52}
                textAnchor="middle"
                fill="#fbbf24"
                opacity={0.7}
                fontSize={12}
                fontFamily="Inter, system-ui, sans-serif"
                fontWeight={600}
                letterSpacing={2}
              >
                WIVVY AI
              </text>
            </motion.g>
          </svg>
        </motion.div>

        {/* ── Terminal ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-[#0C0C0C] overflow-hidden shadow-2xl shadow-black/40">
            {/* Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/[0.06]" />
                <div className="w-3 h-3 rounded-full bg-white/[0.06]" />
                <div className="w-3 h-3 rounded-full bg-white/[0.06]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] text-gray-600 font-mono">wivvy — signal monitor</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Body */}
            <div className="p-5 md:p-6 font-mono text-[13px] leading-loose h-[380px] overflow-hidden relative">
              <div className="space-y-0.5">
                {feedEntries.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: entry.delay, duration: 0.3 }}
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
                        <span className="text-gray-400">{entry.text}</span>
                      </>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 7.5 }}
                  className="flex items-center gap-2 mt-2"
                >
                  <span className="text-gray-700 select-none">&gt;</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-yellow-400/70 inline-block"
                  />
                </motion.div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#0C0C0C] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {[
              { label: 'Platforms', color: 'text-sky-400 border-sky-400/20' },
              { label: 'News', color: 'text-yellow-400 border-yellow-400/20' },
              { label: 'Trends', color: 'text-emerald-400 border-emerald-400/20' },
              { label: 'Patterns', color: 'text-purple-400 border-purple-400/20' },
              { label: 'Culture', color: 'text-orange-400 border-orange-400/20' },
            ].map((tag) => (
              <span key={tag.label} className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${tag.color}`}>
                {tag.label}
              </span>
            ))}
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
