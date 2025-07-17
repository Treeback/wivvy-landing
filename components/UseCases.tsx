'use client'

import { motion } from 'framer-motion'
import { Rocket, Palette, Heart, Search } from 'lucide-react'

const UseCases = () => {
  const cases = [
    {
      icon: Rocket,
      title: 'Founder',
      pain: 'Ideas scattered across Notion, Slack, screenshots',
      outcome: 'All thoughts connected, patterns emerge'
    },
    {
      icon: Palette,
      title: 'Creative Thinker',
      pain: 'Inspiration strikes, then vanishes in the noise',
      outcome: 'Every spark captured, creativity compounds'
    },
    {
      icon: Heart,
      title: 'Inner Explorer',
      pain: 'Journal entries isolated, no growth tracking',
      outcome: 'See your evolution, understand patterns'
    },
    {
      icon: Search,
      title: 'Researcher',
      pain: 'Sources everywhere, synthesis takes forever',
      outcome: 'Knowledge web builds itself as you learn'
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for how you think
          </h2>
          <p className="text-xl text-gray-400">
            Whatever your mind creates, Wivvy connects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover border border-polygon-border rounded-xl p-6 hover:border-polygon-purple/50 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-polygon-purple/10 mb-4 group-hover:bg-polygon-purple/20 transition-all group-hover:scale-110">
                <useCase.icon className="w-6 h-6 text-polygon-purple" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
              
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="text-red-400/70">Pain:</span>
                  <p className="text-gray-400 mt-1">{useCase.pain}</p>
                </div>
                
                <div className="text-sm">
                  <span className="text-green-400/70">Outcome:</span>
                  <p className="text-gray-300 mt-1">{useCase.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases