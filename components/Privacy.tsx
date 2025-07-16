'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye } from 'lucide-react'

const Privacy = () => {
  const features = [
    {
      icon: Lock,
      title: 'Local mode available',
      description: 'Keep everything on your device'
    },
    {
      icon: Shield,
      title: 'End-to-end encrypted sync',
      description: 'Your data, always secure'
    },
    {
      icon: Eye,
      title: 'Granular source permissions',
      description: 'Control what gets connected'
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
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wivvy-blue/10 mb-6">
            <Shield className="w-8 h-8 text-wivvy-blue" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your mind, your data
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Privacy isn't a feature, it's the foundation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-wivvy-bg border border-wivvy-grid mb-4">
                  <feature.icon className="w-6 h-6 text-wivvy-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Privacy