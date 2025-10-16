'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Youtube, Smartphone, Megaphone, Quote } from 'lucide-react'

const UseCases = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      company: 'Bloom Beauty',
      type: 'DTC Brand',
      challenge: 'High cart abandonment despite premium products',
      insight: 'Discovered trust anxiety in first-time buyers',
      action: 'Added security badges and testimonials at checkout',
      result: '37% increase in conversion rate',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Youtube,
      company: 'TechExplained',
      type: 'Content Creator',
      challenge: 'Engagement plateau at 100K subscribers',
      insight: 'Audience craved authenticity over polish',
      action: 'Shifted to raw, behind-the-scenes content',
      result: '2.5x engagement, 50K new subs in 2 months',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Smartphone,
      company: 'FitTrack',
      type: 'Mobile App',
      challenge: '60% users quit after onboarding',
      insight: 'New users felt overwhelmed by features',
      action: 'Simplified to 3-step progressive onboarding',
      result: '85% completion rate achieved',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Megaphone,
      company: 'Nexus Agency',
      type: 'Marketing Agency',
      challenge: 'Generic campaigns underperforming',
      insight: 'Each segment had distinct emotional triggers',
      action: 'Created psychographic-based campaigns',
      result: '4x improvement in CTR and conversions',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  return (
    <section className="py-24 relative bg-white" id="use-cases">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success stories across industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how teams transform emotional insights into tangible business results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${useCase.color}`} />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{useCase.company}</h3>
                    <p className="text-sm text-gray-500">{useCase.type}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-gray-700">{useCase.challenge}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-1">Key Insight</p>
                    <p className="text-gray-700 italic">{useCase.insight}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Action Taken</p>
                    <p className="text-gray-700">{useCase.action}</p>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      {useCase.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12 relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-indigo-200" />
            <blockquote className="text-2xl font-light text-gray-800 italic text-center mb-6">
              "Wivvy transformed how we think about our users. We stopped guessing and started knowing. 
              The emotional insights we gained revolutionized our entire product strategy."
            </blockquote>
            <div className="text-center">
              <div className="inline-flex items-center gap-4">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen" 
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">VP of Product, Mindful</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCases