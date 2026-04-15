'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { BarChart3, Users, Compass, Brain, Sparkles } from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString())
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate(count, target, { duration: 2, ease: 'easeOut' })
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [count, target])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

const stats = [
  {
    icon: BarChart3,
    value: 10000,
    suffix: '+',
    label: 'Viral videos analyzed',
    color: 'text-yellow-400',
    dotColor: 'bg-yellow-400',
  },
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'Indian creators tracked',
    color: 'text-sky-400',
    dotColor: 'bg-sky-400',
  },
  {
    icon: Compass,
    value: 15,
    suffix: '+',
    label: 'Niches mapped',
    color: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
  },
  {
    icon: Brain,
    value: 50,
    suffix: '+',
    label: 'Pattern types detected',
    color: 'text-purple-400',
    dotColor: 'bg-purple-400',
  },
]

const niches = ['Finance', 'Storytelling', 'Motivation', 'Tech', 'Comedy', 'Education', 'Fitness', 'Growth']

export default function SocialProof() {
  return (
    <section className="relative py-16 border-t border-b border-white/[0.04] overflow-hidden">
      {/* Scrolling niche ticker behind */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-[0.04]">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap text-6xl font-bold text-white"
        >
          {[...niches, ...niches, ...niches].map((niche, i) => (
            <span key={i} className="flex items-center gap-6">
              {niche}
              <Sparkles className="w-8 h-8" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`text-center relative ${
                index < stats.length - 1 ? 'md:border-r md:border-white/[0.06]' : ''
              }`}
            >
              {/* Live indicator dot */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className={`w-1.5 h-1.5 rounded-full ${stat.dotColor} animate-pulse`} />
                <stat.icon className={`w-4 h-4 ${stat.color} opacity-60`} />
              </div>

              <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color} tabular-nums`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-gray-500 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Niche tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-10"
        >
          <span className="text-gray-600 text-xs uppercase tracking-wider mr-2">Tracking patterns across</span>
          {niches.map((niche, i) => (
            <motion.span
              key={niche}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-gray-400 text-xs"
            >
              {niche}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
