'use client'

import { motion } from 'framer-motion'
import { Database, Brain, LineChart, PlayCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Connect your data",
      description: "Seamlessly integrate analytics, CRM, support tickets, and social channels. No complex setup required.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      number: "02", 
      icon: Brain,
      title: "AI analyzes emotions",
      description: "Our engine decodes tone, sentiment, and behavioral patterns to build deep psychographic profiles.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: "03",
      icon: LineChart,
      title: "Act on insights",
      description: "Get real-time recommendations for messaging, features, and experiences that truly resonate.",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-24 relative bg-white" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple setup, profound insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes, not months. No data science team required.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid lg:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Demo section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600" />
              <div className="relative p-12 text-center text-white">
                <PlayCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">See Wivvy in action</h3>
                <p className="text-indigo-100 mb-6 max-w-md mx-auto">
                  Watch how leading brands transform user data into emotional intelligence
                </p>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors inline-flex items-center gap-2">
                  Watch 2-minute demo
                  <PlayCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks