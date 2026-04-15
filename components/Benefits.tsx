'use client'

import { motion } from 'framer-motion'
import { Video, Building2, BarChart3 } from 'lucide-react'

const useCases = [
  {
    icon: Video,
    title: 'Creators',
    tagline: 'Make better videos faster',
    description: 'Stop guessing what works. See the exact patterns behind viral content in your niche and apply them to your next video.',
    color: 'yellow',
    iconBg: 'bg-yellow-400/10',
    iconColor: 'text-yellow-400',
    borderColor: 'border-yellow-400/20',
  },
  {
    icon: Building2,
    title: 'Agencies',
    tagline: 'Scale performance across creators',
    description: 'Manage multiple creators with data-backed strategies. Know what formats, hooks, and structures drive results — before you publish.',
    color: 'sky',
    iconBg: 'bg-sky-400/10',
    iconColor: 'text-sky-400',
    borderColor: 'border-sky-400/20',
  },
  {
    icon: BarChart3,
    title: 'Brands',
    tagline: 'Understand what actually converts',
    description: 'Go beyond vanity metrics. Understand the content patterns that drive real engagement and conversion with Indian audiences.',
    color: 'emerald',
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
  },
]

export default function UseCases() {
  return (
    <section className="py-24 relative" id="use-cases">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for creators who want to win
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="glass-card glass-card-hover p-8 h-full relative overflow-hidden">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${item.iconBg} border ${item.borderColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className={`text-sm font-medium mb-4 ${
                  item.color === 'yellow' ? 'text-yellow-400' :
                  item.color === 'sky' ? 'text-sky-400' :
                  'text-emerald-400'
                }`}>
                  {item.tagline}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
