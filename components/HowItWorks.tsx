'use client'

import { motion } from 'framer-motion'
import { Upload, Sparkles, Network } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Ingest Anything',
      description: 'Drag in screenshot, drop voice note, paste link',
      icon: Upload,
      animation: 'hover:rotate-12'
    },
    {
      number: '02',
      title: 'Weave & Organize',
      description: 'AI summarizes, tags, links to people & projects',
      icon: Sparkles,
      animation: 'hover:scale-110'
    },
    {
      number: '03',
      title: 'See Connections',
      description: 'Explore your mind graph, chat for insights',
      icon: Network,
      animation: 'hover:translate-y-1'
    }
  ]

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Wivvy Works
          </h2>
          <p className="text-xl text-gray-400">
            Three simple steps to a connected mind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-wivvy-bg border border-wivvy-grid rounded-xl p-8 hover:border-wivvy-blue/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-bold gradient-text opacity-50">
                    {step.number}
                  </span>
                  <step.icon className={`w-8 h-8 text-wivvy-blue transition-transform ${step.animation}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-wivvy-blue to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks