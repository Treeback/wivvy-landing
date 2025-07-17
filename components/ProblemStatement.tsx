'use client'

import { motion } from 'framer-motion'
import { Camera, MessageSquare, Lightbulb } from 'lucide-react'

const ProblemStatement = () => {
  const problems = [
    {
      icon: Camera,
      title: 'Too many screenshots, no recall',
      description: 'Screenshots pile up, context fades away'
    },
    {
      icon: MessageSquare,
      title: 'Ideas scattered across apps',
      description: 'Your thoughts fragmented in a dozen tools'
    },
    {
      icon: Lightbulb,
      title: 'No place for emotion + meaning',
      description: 'Current tools ignore how you actually think'
    }
  ]

  return (
    <section className="py-20 bg-polygon-bg/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your mind isn't linear. Your tools are.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-polygon-purple/10 mb-4 transition-all hover:scale-110 hover:bg-polygon-purple/20">
                <problem.icon className="w-8 h-8 text-polygon-purple" />
              </div>
              <h3 className="text-lg font-medium mb-2">{problem.title}</h3>
              <p className="text-gray-400 text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement