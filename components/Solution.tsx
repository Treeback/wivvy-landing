'use client'

import { motion } from 'framer-motion'
import { Layers, Search, Zap, ArrowRight, Check } from 'lucide-react'

const pillars = [
  {
    step: '01',
    icon: Layers,
    title: 'Viral Breakdown',
    description: 'Every viral video is broken down into its core components — hook, structure, emotion, and delivery.',
    details: [
      'First 3-second hook analysis',
      'Story arc structure mapping',
      'Emotional trigger identification',
      'Delivery style classification',
    ],
    color: 'yellow',
    iconBg: 'bg-yellow-400/10',
    iconColor: 'text-yellow-400',
    borderColor: 'border-yellow-400/20',
    stepColor: 'text-yellow-400/20',
    glowColor: 'rgba(250,204,21,0.08)',
    accentLine: 'from-yellow-400/40',
  },
  {
    step: '02',
    icon: Search,
    title: 'Pattern Detection',
    description: 'We identify patterns across creators — not just what worked once, but what works repeatedly.',
    details: [
      'Cross-creator pattern matching',
      'Niche-specific trend signals',
      'Repeat-success scoring',
      'Format performance clustering',
    ],
    color: 'sky',
    iconBg: 'bg-sky-400/10',
    iconColor: 'text-sky-400',
    borderColor: 'border-sky-400/20',
    stepColor: 'text-sky-400/20',
    glowColor: 'rgba(56,189,248,0.08)',
    accentLine: 'from-sky-400/40',
  },
  {
    step: '03',
    icon: Zap,
    title: 'Actionable Insights',
    description: 'Get insights you can apply instantly — from hook styles to content formats that drive engagement.',
    details: [
      'Ready-to-use hook templates',
      'Optimal format recommendations',
      'Timing & publishing signals',
      'Engagement prediction scores',
    ],
    color: 'emerald',
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    stepColor: 'text-emerald-400/20',
    glowColor: 'rgba(52,211,153,0.08)',
    accentLine: 'from-emerald-400/40',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-24 relative" id="how-it-works">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-sky-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-400 text-sm mb-6"
          >
            How it works
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Not another AI tool.
            <br />
            <span className="text-gradient-blue">A system that understands what works.</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our specialized AI models process viral Indian content through three stages
            to deliver insights you can act on immediately.
          </p>
        </motion.div>

        {/* Flow arrows connecting steps — desktop */}
        <div className="hidden md:flex items-center justify-center gap-0 my-12 max-w-4xl mx-auto">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className={`w-12 h-12 rounded-full ${pillar.iconBg} border ${pillar.borderColor} flex items-center justify-center`}
              >
                <pillar.icon className={`w-5 h-5 ${pillar.iconColor}`} />
              </motion.div>
              {i < pillars.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className="w-24 lg:w-40 h-px bg-gradient-to-r from-white/10 to-white/10 mx-2 origin-left flex items-center justify-center relative"
                >
                  <ArrowRight className="w-3 h-3 text-white/20 absolute -right-1" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full relative overflow-hidden transition-all duration-300 group-hover:border-white/[0.1]">
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${pillar.color}-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${pillar.glowColor}, transparent 70%)` }}
                />

                {/* Step number */}
                <span className={`text-5xl font-black ${pillar.stepColor} select-none absolute top-6 right-6`}>
                  {pillar.step}
                </span>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${pillar.iconBg} border ${pillar.borderColor} mb-5 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-5">
                  {pillar.description}
                </p>

                {/* Detail list */}
                <ul className="space-y-2.5">
                  {pillar.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.15 + i * 0.05 }}
                      className="flex items-start gap-2.5"
                    >
                      <Check className={`w-4 h-4 ${pillar.iconColor} mt-0.5 flex-shrink-0 opacity-60`} />
                      <span className="text-sm text-gray-500">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
