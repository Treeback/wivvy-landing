'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Logo from './ui/Logo'

/* ── Platform SVG Icons ── */
function YoutubeIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}
function InstagramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )
}
function XIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

/* ── Orbiting nodes ── */
const orbitNodes = [
  { id: 'yt', Icon: YoutubeIcon, label: 'YouTube', color: '#f87171', angle: 0, signals: ['8.2M views', 'ये गलती मत करो', 'Authority hook'] },
  { id: 'ig', Icon: InstagramIcon, label: 'Instagram', color: '#f472b6', angle: 60, signals: ['রিলস ট্রেন্ডিং', '+127% hooks', 'நம்பிக்கை இழப்பு'] },
  { id: 'x', Icon: XIcon, label: 'X', color: '#38bdf8', angle: 120, signals: ['#बजट2025', 'ಟ್ರೆಂಡಿಂಗ್', 'Sentiment shift'] },
  { id: 'news', label: 'News', color: '#fbbf24', angle: 180, emoji: '📰', signals: ['बजट 2025', 'RBI दर कटौती', 'ఎన్నికల తరంగం'] },
  { id: 'culture', label: 'Culture', color: '#fb923c', angle: 240, emoji: '🪔', signals: ['IPL ফাইনাল', 'बॉलीवुड ट्रेलर', 'ఉత్సవ సీజన్'] },
  { id: 'trends', label: 'Trends', color: '#34d399', angle: 300, emoji: '📈', signals: ['+203% வளர்ச்சி', 'Fast cuts', 'POV ಫಾರ್ಮ್ಯಾಟ್'] },
]

const steps = [
  {
    num: '01',
    title: 'We watch everything',
    body: 'Platforms, news, geopolitics, cultural moments — anything that could trigger a content wave in India.',
  },
  {
    num: '02',
    title: 'We find what repeats',
    body: 'One viral video is luck. 42 creators using the same hook and all hitting millions — that\'s a pattern.',
  },
  {
    num: '03',
    title: 'You get a playbook',
    body: 'Specific hooks. Formats working right now. Cultural moments to ride. Before your competitors see them.',
  },
]


export default function WhatWeDo() {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            You create.
            <br />
            <span className="text-gradient-yellow">We do the homework.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We study what&apos;s winning across every platform, every trend, every cultural moment
            in India — and turn it into a playbook you can use today.
          </p>
        </motion.div>

        {/* ── Globe with orbiting platforms ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-20 w-[340px] h-[340px] md:w-[440px] md:h-[440px]"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-yellow-400/[0.04] rounded-full blur-3xl scale-125" />

          {/* Orbit rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-white/[0.04]"
            style={{ borderStyle: 'dashed' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-10 md:inset-14 rounded-full border border-white/[0.03]"
            style={{ borderStyle: 'dashed' }}
          />

          {/* Pulsing glow rings */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-[25%] rounded-full border border-yellow-400/20"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute inset-[20%] rounded-full border border-yellow-400/10"
          />

          {/* Center: Wivvy Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Logo glow */}
              <div className="absolute -inset-6 bg-yellow-400/[0.08] rounded-3xl blur-xl" />

              <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center shadow-lg shadow-yellow-400/20">
                <Logo size="lg" className="text-black" />
              </div>
            </motion.div>

            {/* Label below */}
            <div className="absolute mt-[100px] md:mt-[120px] text-center">
              <p className="text-xs text-yellow-400/50 uppercase tracking-[0.2em] font-bold">Wivvy AI</p>
            </div>
          </div>

          {/* Orbiting platform nodes */}
          {orbitNodes.map((node, i) => {
            const radius = 48
            const angleRad = (node.angle * Math.PI) / 180
            const x = 50 + radius * Math.cos(angleRad)
            const y = 50 + radius * Math.sin(angleRad)

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.12, type: 'spring', stiffness: 100 }}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <motion.div
                  animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="flex items-center justify-center">
                    {node.Icon ? (
                      <node.Icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: node.color }} />
                    ) : (
                      <span className="text-2xl md:text-3xl">{node.emoji}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">{node.label}</span>
                </motion.div>

                {/* Floating text signals to center */}
                {node.signals.map((signal, si) => (
                  <motion.div
                    key={si}
                    className="absolute top-1/2 left-1/2 pointer-events-none whitespace-nowrap"
                    animate={{
                      x: [0, (50 - x) * 3.4],
                      y: [0, (50 - y) * 3.4],
                      opacity: [0.9, 0],
                      scale: [1, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      delay: 1.5 + i * 0.6 + si * 2.5,
                      repeat: Infinity,
                      repeatDelay: node.signals.length * 2.5 - 3 + 1,
                      ease: 'easeIn',
                    }}
                  >
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: node.color }}
                    >
                      {signal}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── 3 Steps ── */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <span className="text-5xl font-black text-white/[0.05] select-none block mb-3">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
          >
            Get your first playbook
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
