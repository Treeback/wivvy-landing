'use client'

import { motion } from 'framer-motion'
import { BarChart3, Users, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: BarChart3,
    value: '10,000+',
    label: 'Viral videos analyzed',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400/20',
    bgColor: 'bg-yellow-400/5',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Indian creators tracked',
    color: 'text-sky-400',
    borderColor: 'border-sky-400/20',
    bgColor: 'bg-sky-400/5',
  },
  {
    icon: TrendingUp,
    value: 'Finance, Storytelling, Growth',
    label: 'Patterns across niches',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    bgColor: 'bg-emerald-400/5',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 relative border-t border-white/[0.04]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card p-8 text-center ${stat.bgColor}`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} border ${stat.borderColor} mb-5`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-gray-500 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
