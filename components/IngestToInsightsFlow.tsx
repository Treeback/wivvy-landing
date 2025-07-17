'use client'

import { motion } from 'framer-motion'
import { Brain, FileText, Link2, Mic, Sparkles, ChevronRight, Users, TrendingUp, Lightbulb } from 'lucide-react'
import { useEffect, useState } from 'react'

const IngestToInsightsFlow = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: 'Capture Everything',
      description: 'Add thoughts, meetings, documents, links',
      icon: Brain,
      items: [
        { icon: Brain, label: 'Quick thought', color: 'text-blue-400' },
        { icon: FileText, label: 'Meeting notes', color: 'text-green-400' },
        { icon: Link2, label: 'Important link', color: 'text-purple-400' },
        { icon: Mic, label: 'Voice memo', color: 'text-orange-400' },
      ]
    },
    {
      title: 'AI Processing',
      description: 'Wivvy analyzes and connects your content',
      icon: Sparkles,
      items: [
        { label: 'Extracting key topics...', progress: 100 },
        { label: 'Finding connections...', progress: 100 },
        { label: 'Generating insights...', progress: 100 },
        { label: 'Building knowledge graph...', progress: 100 },
      ]
    },
    {
      title: 'Discover Insights',
      description: 'Uncover patterns and connections',
      icon: Lightbulb,
      items: [
        { icon: Users, label: '3 related meetings found', insight: true },
        { icon: TrendingUp, label: 'Recurring theme detected', insight: true },
        { icon: Brain, label: 'Connected to 5 past ideas', insight: true },
        { icon: Sparkles, label: 'New opportunity identified', insight: true },
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [steps.length])

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
            From Information to Intelligence
          </h2>
          <p className="text-xl text-gray-400">
            Watch how Wivvy transforms your scattered thoughts into actionable insights
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative ${currentStep === index ? 'z-10' : 'z-0'}`}
              >
                <motion.div
                  animate={{
                    scale: currentStep === index ? 1.05 : 1,
                    opacity: currentStep >= index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`glass-card border rounded-xl p-6 h-full transition-all ${
                    currentStep === index 
                      ? 'border-polygon-purple shadow-lg shadow-polygon-purple/20 glass-card-hover' 
                      : 'border-polygon-border'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${
                      currentStep === index ? 'bg-polygon-purple/20' : 'bg-polygon-card'
                    }`}>
                      <step.icon size={24} className={
                        currentStep === index ? 'text-polygon-purple' : 'text-gray-400'
                      } />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: currentStep === index ? 1 : 0.3,
                          x: currentStep === index ? 0 : -20,
                        }}
                        transition={{ 
                          duration: 0.3, 
                          delay: currentStep === index ? itemIndex * 0.1 : 0 
                        }}
                      >
                        {index === 1 ? (
                          <div className="space-y-1">
                            <p className="text-sm text-gray-300">{item.label}</p>
                            <div className="w-full bg-polygon-card rounded-full h-1.5">
                              <motion.div
                                className="bg-gradient-to-r from-polygon-purple to-polygon-purple-light h-1.5 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ 
                                  width: currentStep === index ? `${item.progress}%` : '0%' 
                                }}
                                transition={{ 
                                  duration: 1, 
                                  delay: currentStep === index ? itemIndex * 0.2 : 0 
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className={`flex items-center gap-2 p-3 rounded-lg ${
                            item.insight 
                              ? 'bg-polygon-purple/10 border border-polygon-purple/30' 
                              : 'bg-polygon-card/50'
                          }`}>
                            {item.icon && (
                              <item.icon size={18} className={item.color || 'text-polygon-purple'} />
                            )}
                            <span className="text-sm">{item.label}</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                    animate={{
                      opacity: currentStep === index ? 1 : 0.3,
                      x: currentStep === index ? [0, 5, 0] : 0,
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      x: { duration: 1, repeat: Infinity, repeatType: 'reverse' },
                    }}
                  >
                    <ChevronRight size={32} className="text-polygon-purple" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentStep === index 
                    ? 'w-8 bg-polygon-purple' 
                    : 'w-2 bg-polygon-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IngestToInsightsFlow