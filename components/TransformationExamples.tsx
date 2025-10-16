'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MousePointer, Clock, ShoppingCart, X, Heart, TrendingUp, AlertCircle, Sparkles, ChevronRight, BarChart, Brain, Lightbulb } from 'lucide-react'

const TransformationExamples = () => {
  const [activeExample, setActiveExample] = React.useState(0)

  const examples = [
    {
      id: 0,
      title: "Shopping Cart Analysis",
      icon: ShoppingCart,
      color: "from-blue-500 to-indigo-500",
      rawData: {
        type: "E-commerce Funnel",
        metrics: [
          { label: "Cart additions", value: "2,847" },
          { label: "Proceeded to checkout", value: "1,423" },
          { label: "Entered payment info", value: "892" },
          { label: "Completed purchase", value: "623" }
        ],
        dropOff: "56% abandon at payment"
      },
      transformation: [
        "Analyzing mouse movement patterns",
        "Measuring hesitation time on fields",
        "Detecting rage clicks & frustration"
      ],
      insight: {
        primaryEmotion: "Uncertainty",
        confidence: "High (87%)",
        patterns: [
          { finding: "Extended hover time over security badges", confidence: 92 },
          { finding: "Multiple attempts to find shipping info", confidence: 88 },
          { finding: "Hesitation at payment method selection", confidence: 81 }
        ],
        recommendations: [
          "Add trust signals near payment form",
          "Display shipping costs earlier in flow",
          "Simplify payment options presentation"
        ]
      }
    },
    {
      id: 1,
      title: "User Onboarding Flow",
      icon: MousePointer,
      color: "from-purple-500 to-pink-500",
      rawData: {
        type: "Product Onboarding",
        metrics: [
          { label: "Sign-ups", value: "1,892" },
          { label: "Completed profile", value: "1,234" },
          { label: "First action taken", value: "567" },
          { label: "Active after 7 days", value: "234" }
        ],
        dropOff: "70% inactive by day 7"
      },
      transformation: [
        "Tracking navigation patterns",
        "Analyzing time between actions",
        "Identifying confusion points"
      ],
      insight: {
        primaryEmotion: "Overwhelm",
        confidence: "Medium (72%)",
        patterns: [
          { finding: "Rapid clicking suggests information overload", confidence: 78 },
          { finding: "Long pauses indicate decision paralysis", confidence: 71 },
          { finding: "Back button usage shows uncertainty", confidence: 68 }
        ],
        recommendations: [
          "Reduce initial options presented",
          "Add progress indicators",
          "Implement guided tour for key features"
        ]
      }
    },
    {
      id: 2,
      title: "Content Engagement Drop",
      icon: Clock,
      color: "from-green-500 to-emerald-500",
      rawData: {
        type: "User Engagement",
        metrics: [
          { label: "Page views", value: "45,234" },
          { label: "Avg. time on page", value: "0:42" },
          { label: "Scroll depth", value: "34%" },
          { label: "Return visitors", value: "12%" }
        ],
        dropOff: "88% don't return"
      },
      transformation: [
        "Analyzing scroll velocity patterns",
        "Measuring engagement zones",
        "Tracking exit intent signals"
      ],
      insight: {
        primaryEmotion: "Disinterest",
        confidence: "Medium (69%)",
        patterns: [
          { finding: "Fast scrolling indicates scanning behavior", confidence: 74 },
          { finding: "Low interaction with CTAs suggests weak value prop", confidence: 66 },
          { finding: "Early exits correlate with text density", confidence: 71 }
        ],
        recommendations: [
          "Break up content with visual elements",
          "Lead with stronger value proposition",
          "Add interactive elements to increase engagement"
        ]
      }
    }
  ]

  const currentExample = examples[activeExample]

  return (
    <section className="py-24 relative bg-white" id="transformation-examples">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">See It In Action</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Watch data become
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              actionable insights
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real examples of how Wivvy transforms your analytics into emotional intelligence
          </p>
        </motion.div>

        {/* Example Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {examples.map((example, index) => (
            <motion.button
              key={example.id}
              onClick={() => setActiveExample(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeExample === index
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <example.icon className="w-4 h-4 inline-block mr-2" />
              {example.title}
            </motion.button>
          ))}
        </div>

        {/* Transformation Visualization */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExample.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step 1: Raw Data */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                      <BarChart className="w-5 h-5 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Raw Data</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-sm text-gray-500">{currentExample.rawData.type}</div>
                    
                    {/* Metrics */}
                    <div className="space-y-3">
                      {currentExample.rawData.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <span className="font-mono font-medium text-gray-900">{metric.value}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Drop-off Alert */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200"
                    >
                      <div className="flex items-center gap-2 text-red-700">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">{currentExample.rawData.dropOff}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: AI Processing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${currentExample.color} rounded-2xl p-6 h-full text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold">Wivvy AI Processing</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {currentExample.transformation.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span className="text-sm text-white/90">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated background particles */}
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        initial={{ x: 0, y: 100 }}
                        animate={{
                          x: [0, 100, 0],
                          y: [100, 0, 100],
                        }}
                        transition={{
                          duration: 10,
                          delay: i * 2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Connection arrow */}
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-gray-300" />
                </div>
              </motion.div>

              {/* Step 3: Emotional Insight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 h-full border border-green-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Emotional Insight</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Primary Emotion */}
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 }}
                      className="bg-white rounded-lg p-4 shadow-sm border border-green-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-500" />
                          <span className="text-sm font-medium text-gray-700">Primary Emotion</span>
                        </div>
                        <span className="text-xs text-gray-500">Confidence: {currentExample.insight.confidence}</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{currentExample.insight.primaryEmotion}</p>
                    </motion.div>
                    
                    {/* Pattern Analysis */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="space-y-2"
                    >
                      <p className="text-sm font-medium text-gray-700 mb-2">Behavioral Patterns Detected:</p>
                      {currentExample.insight.patterns.map((pattern, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="mt-1 flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${
                              pattern.confidence > 80 ? 'bg-green-500' : 
                              pattern.confidence > 70 ? 'bg-yellow-500' : 'bg-orange-500'
                            }`} />
                            <span className="text-xs text-gray-500">{pattern.confidence}%</span>
                          </div>
                          <p className="text-gray-700 flex-1">{pattern.finding}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Recommendations */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="p-3 bg-indigo-50 rounded-lg border border-indigo-200"
                    >
                      <p className="text-sm font-medium text-indigo-900 mb-2">Recommended Actions:</p>
                      <ul className="text-sm text-indigo-800 space-y-1">
                        {currentExample.insight.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-indigo-600 mt-0.5">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Every insight is backed by advanced emotional analysis and behavioral psychology
          </p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Start Understanding Your Users
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default TransformationExamples