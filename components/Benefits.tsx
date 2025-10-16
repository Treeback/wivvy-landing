'use client'

import { motion } from 'framer-motion'
import { Target, MessageSquare, Users, TrendingUp, Zap, Shield } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Precision targeting",
      description: "Reach the right users at the perfect emotional moment for maximum impact",
      stat: "47%",
      statLabel: "higher engagement"
    },
    {
      icon: MessageSquare,
      title: "Resonant messaging",
      description: "Craft copy that speaks directly to users' underlying psychological needs",
      stat: "3.2x",
      statLabel: "better conversion"
    },
    {
      icon: Users,
      title: "Deep understanding",
      description: "Go beyond demographics to understand core motivations and emotional triggers",
      stat: "85%",
      statLabel: "accuracy rate"
    },
    {
      icon: TrendingUp,
      title: "Predictive insights",
      description: "Anticipate user behavior and needs before they even articulate them",
      stat: "62%",
      statLabel: "reduced churn"
    },
    {
      icon: Zap,
      title: "Instant decisions",
      description: "Make confident product and marketing choices backed by emotional data",
      stat: "5x",
      statLabel: "faster insights"
    },
    {
      icon: Shield,
      title: "Ethical approach",
      description: "Privacy-first methodology that respects user data while delivering insights",
      stat: "100%",
      statLabel: "GDPR compliant"
    }
  ]

  return (
    <section className="py-24 relative bg-gray-50" id="benefits">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform data into growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading teams use Wivvy to build deeper connections and drive meaningful results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    {benefit.stat}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enterprise callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Enterprise-ready from day one
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Bank-level security, SOC 2 compliance, and dedicated support for teams at scale
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="font-medium">SOC 2 Type II</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="font-medium">GDPR Compliant</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="font-medium">99.9% Uptime SLA</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits