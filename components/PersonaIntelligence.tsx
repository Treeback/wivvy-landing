'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Brain, Database, Sparkles, ArrowRight, UserCheck, Target, Lightbulb, Network, Fingerprint, Activity, TrendingUp, Library } from 'lucide-react'

export default function PersonaIntelligence() {
  const [activePersona, setActivePersona] = React.useState(0)
  const [isMatching, setIsMatching] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsMatching(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [activePersona])

  const personaLibrary = [
    {
      id: 'cautious-explorer',
      name: 'Cautious Explorer',
      traits: ['High research time', 'Multiple comparisons', 'Trust-seeking'],
      color: 'from-blue-500 to-indigo-500',
      match: 87
    },
    {
      id: 'impulse-buyer',
      name: 'Impulse Buyer',
      traits: ['Quick decisions', 'Visual-driven', 'Emotion-led'],
      color: 'from-purple-500 to-pink-500',
      match: 72
    },
    {
      id: 'methodical-analyst',
      name: 'Methodical Analyst',
      traits: ['Data-focused', 'Feature comparison', 'ROI-driven'],
      color: 'from-green-500 to-emerald-500',
      match: 94
    }
  ]

  const dataPoints = [
    { type: 'Click patterns', icon: '👆', value: '2.3k events' },
    { type: 'Time on page', icon: '⏱️', value: '3m 42s avg' },
    { type: 'Scroll depth', icon: '📜', value: '67% avg' },
    { type: 'Hesitation zones', icon: '🤔', value: '4 detected' },
    { type: 'Return visits', icon: '🔄', value: '3.2 avg' },
    { type: 'Feature interest', icon: '⭐', value: 'Pricing focus' }
  ]

  return (
    <section className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-full mb-8">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Persona Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From anonymous clicks to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
              understood individuals
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wivvy builds dynamic user personas in real-time, then matches them against 
            our extensive behavioral library for incredibly accurate predictions
          </p>
        </motion.div>

        {/* Main Visualization */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Data Collection and Processing */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-indigo-600" />
                Real-time Data Collection
              </h3>

              {/* Data flowing animation */}
              <div className="relative bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="space-y-4">
                  {dataPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{point.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{point.type}</span>
                      </div>
                      <span className="text-sm font-mono text-gray-600">{point.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Data flow arrows */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-indigo-600" />
                  </motion.div>
                </div>
              </div>

              {/* AI Processing indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                  <Brain className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-700">
                    AI processes behavioral patterns
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Persona Creation and Matching */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Fingerprint className="w-6 h-6 text-purple-600" />
                Dynamic Persona Creation
              </h3>

              {/* Persona visualization */}
              <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 mb-8">
                {/* DNA-like visualization */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-purple-700">Building User DNA</div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  </motion.div>
                </div>

                {/* Trait Assembly */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: '🎯', label: 'Goal-oriented', value: 85 },
                    { icon: '💡', label: 'Innovation seeker', value: 72 },
                    { icon: '📊', label: 'Data-driven', value: 90 },
                    { icon: '🔍', label: 'Detail-focused', value: 78 }
                  ].map((trait, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg p-3 border border-purple-100"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{trait.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{trait.label}</span>
                      </div>
                      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${trait.value}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Persona synthesis animation */}
                <div className="relative h-32 bg-white rounded-lg border border-purple-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central persona result */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.5, type: "spring" }}
                      className="relative z-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full p-4 shadow-xl"
                    >
                      <Users className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-2 left-0 right-0 text-center"
                  >
                    <span className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                      Persona Created ✓
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Matching with library */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="space-y-3"
              >
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Matching with Persona Library
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    10,000+ behavioral patterns analyzed
                  </p>
                </div>

                {personaLibrary.map((persona, index) => (
                  <motion.div
                    key={persona.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      activePersona === index
                        ? 'border-purple-300 bg-purple-50'
                        : 'border-gray-200 bg-white hover:border-purple-200'
                    }`}
                    onClick={() => {
                      setActivePersona(index)
                      setIsMatching(false)
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold text-gray-900">{persona.name}</h5>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {persona.traits.map((trait, i) => (
                            <span key={i} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <motion.div
                          className={`text-2xl font-bold ${
                            activePersona === index && isMatching 
                              ? 'text-green-600' 
                              : 'text-gray-500'
                          }`}
                          animate={{
                            scale: activePersona === index && isMatching ? [1, 1.1, 1] : 1
                          }}
                        >
                          {activePersona === index && isMatching ? `${persona.match}%` : '—'}
                        </motion.div>
                        <span className="text-xs text-gray-500">Match rate</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Prediction Results */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
                <Target className="w-6 h-6 text-green-600" />
                Prediction Power Unlocked
              </h3>
              <p className="text-gray-600">
                When we know who your users are, we can predict what they'll do next
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">92%</div>
                <div className="text-sm text-gray-600">Behavior prediction accuracy</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <UserCheck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">3.5x</div>
                <div className="text-sm text-gray-600">Better user understanding</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <Activity className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">68%</div>
                <div className="text-sm text-gray-600">Reduced churn rate</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <Lightbulb className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Real-time insights</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Stop treating users as numbers. Start understanding them as people.
            </p>
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              See Your Users Differently
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}