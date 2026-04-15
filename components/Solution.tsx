'use client'

import { motion } from 'framer-motion'
import { Layers, Search, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Layers,
    title: 'Viral Breakdown',
    description: 'Every viral video is broken down into its core components — hook, structure, emotion, and delivery.',
    color: 'yellow',
    iconBg: 'bg-yellow-400/10',
    iconColor: 'text-yellow-400',
    borderColor: 'border-yellow-400/20',
    glowColor: 'shadow-yellow-400/5',
  },
  {
    icon: Search,
    title: 'Pattern Detection',
    description: 'We identify patterns across creators — not just what worked once, but what works repeatedly.',
    color: 'sky',
    iconBg: 'bg-sky-400/10',
    iconColor: 'text-sky-400',
    borderColor: 'border-sky-400/20',
    glowColor: 'shadow-sky-400/5',
  },
  {
    icon: Zap,
    title: 'Actionable Insights',
    description: 'Get insights you can apply instantly — from hook styles to content formats that drive engagement.',
    color: 'emerald',
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    glowColor: 'shadow-emerald-400/5',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Not another AI tool.
            <br />
            <span className="text-gradient-blue">A system that understands what works.</span>
          </h2>
        </motion.div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className={`glass-card glass-card-hover p-8 h-full relative overflow-hidden`}>
                {/* Subtle top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${pillar.color}-400/40 to-transparent`} />

                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${pillar.iconBg} border ${pillar.borderColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
