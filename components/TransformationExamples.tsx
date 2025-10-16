'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MousePointer, Clock, ShoppingCart, Heart, TrendingUp, AlertCircle, Sparkles, ChevronRight, BarChart, Lightbulb, ArrowRight, Activity, Brain, Zap, Users, Target } from 'lucide-react'
import Logo from './ui/Logo'

const TransformationExamples = () => {
  const [activeExample, setActiveExample] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)

  React.useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPlaying, activeExample])

  const examples = [
    {
      id: 0,
      title: "The Abandoned Cart Mystery",
      icon: ShoppingCart,
      color: "from-blue-500 to-indigo-600",
      metric: "$47,283",
      metricLabel: "Lost Revenue",
      story: "Every day, hundreds abandon their carts at checkout",
      rawData: {
        events: ["Added premium product", "Browsed shipping info", "Entered payment", "Suddenly left"],
        metrics: {
          cartValue: "$523 avg",
          timeSpent: "4m 32s",
          returnRate: "12%"
        }
      },
      transformation: {
        discovering: ["Analyzing cursor hesitation patterns", "Measuring form field interactions", "Tracking viewport focus areas"],
        insights: [
          { icon: "🔍", finding: "3.2s hesitation on shipping cost" },
          { icon: "😰", finding: "Anxiety spike at payment security" },
          { icon: "🤔", finding: "Confusion over return policy" }
        ]
      },
      solution: {
        emotion: "Trust Anxiety",
        confidence: "87%",
        recommendations: [
          "Add free shipping threshold indicator",
          "Display security badges prominently", 
          "Simplify return policy visibility"
        ],
        impact: "+32% conversion"
      }
    },
    {
      id: 1,
      title: "The Onboarding Drop-off",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      metric: "68%",
      metricLabel: "User Loss",
      story: "New users excited to start, but most never finish setup",
      rawData: {
        events: ["Signed up enthusiastically", "Started profile setup", "Explored features", "Never returned"],
        metrics: {
          signups: "1,847/week",
          completion: "32%",
          timeToQuit: "2m 14s"
        }
      },
      transformation: {
        discovering: ["Tracking navigation patterns", "Analyzing click sequences", "Monitoring scroll behavior"],
        insights: [
          { icon: "😵", finding: "Overwhelm at feature selection" },
          { icon: "⏱️", finding: "Impatience with long forms" },
          { icon: "🎯", finding: "Unclear value proposition" }
        ]
      },
      solution: {
        emotion: "Decision Fatigue",
        confidence: "91%",
        recommendations: [
          "Progressive disclosure approach",
          "Reduce initial options to 3",
          "Add progress indicators"
        ],
        impact: "+54% activation"
      }
    },
    {
      id: 2,
      title: "The Content Engagement Crisis",
      icon: Activity,
      color: "from-green-500 to-emerald-600",
      metric: "23s",
      metricLabel: "Avg. Time on Page",
      story: "Your best content ignored, readers leaving unsatisfied",
      rawData: {
        events: ["Landed from search", "Scrolled 30%", "Rapid scanning", "Exited quickly"],
        metrics: {
          bounceRate: "76%",
          scrollDepth: "34%",
          shares: "0.2%"
        }
      },
      transformation: {
        discovering: ["Measuring scroll velocity", "Tracking attention zones", "Analyzing exit intent"],
        insights: [
          { icon: "📖", finding: "Scanning, not reading behavior" },
          { icon: "😴", finding: "Boredom from text walls" },
          { icon: "🔍", finding: "Can't find key information" }
        ]
      },
      solution: {
        emotion: "Information Frustration",
        confidence: "84%",
        recommendations: [
          "Add visual content breaks",
          "Highlight key takeaways",
          "Implement smart summarization"
        ],
        impact: "+3.2x engagement"
      }
    }
  ]

  const currentExample = examples[activeExample]

  return (
    <section className="py-12 relative bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden" id="use-cases">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Real-World Impact</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Watch data become
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 ml-2">
              actionable insights
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories of how Wivvy transforms confusion into clarity
          </p>
        </motion.div>

        {/* Story Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-4">
            <div className="inline-flex bg-white rounded-full p-1 shadow-lg border border-gray-200">
            {examples.map((example, index) => (
              <button
                key={example.id}
                onClick={() => {
                  setActiveExample(index)
                  setIsPlaying(false)
                }}
                className={`relative px-6 py-3 rounded-full font-medium transition-all ${
                  activeExample === index
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <example.icon className="w-4 h-4 inline-block mr-2" />
                {example.title.split(' ')[1]} {example.title.split(' ')[2]}
              </button>
            ))}
            </div>
            
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="6" y="5" width="3" height="10" rx="1" />
                  <rect x="11" y="5" width="3" height="10" rx="1" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 4v12l9-6z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Transformation Story */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExample.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Story Header - Compact */}
            <div className="mb-6">
              <div className="flex items-start justify-between max-w-6xl mx-auto">
                {/* Left: Title and Story */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentExample.color} flex items-center justify-center shadow-lg`}
                    >
                      <currentExample.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentExample.title}</h3>
                  </div>
                  <p className="text-gray-600 max-w-md">{currentExample.story}</p>
                </motion.div>
                
                {/* Right: Key Metric - Compact */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 border border-red-100 shadow-md"
                >
                  <div className="text-center">
                    <div className="text-xs uppercase tracking-wide text-red-600 font-semibold mb-1">
                      Critical Metric
                    </div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-3xl font-bold text-red-600"
                    >
                      {currentExample.metric}
                    </motion.div>
                    <div className="text-sm font-medium text-gray-700">
                      {currentExample.metricLabel}
                    </div>
                    
                    {/* Subtle pulse effect */}
                    <motion.div
                      className="absolute inset-0 bg-red-400 rounded-full blur-2xl opacity-10"
                      animate={{ 
                        scale: [0.8, 1.1, 0.8],
                        opacity: [0.05, 0.15, 0.05]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ zIndex: -1 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Three-Stage Transformation */}
            <div className="grid lg:grid-cols-3 gap-4 mb-8">
              {/* Stage 1: The Problem */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <BarChart className="w-5 h-5 text-gray-600" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">What You See</h4>
                </div>

                {/* Event Timeline */}
                <div className="space-y-2 mb-4">
                  {currentExample.rawData.events.map((event, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        i === currentExample.rawData.events.length - 1 ? 'bg-red-500' : 'bg-gray-400'
                      }`} />
                      <span className="text-sm text-gray-600">{event}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Raw Metrics */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  {Object.entries(currentExample.rawData.metrics).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-sm font-mono font-medium text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stage 2: Wivvy Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 shadow-xl border border-purple-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Logo className="text-purple-600" size="sm" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">Wivvy Discovers</h4>
                </div>

                {/* Analysis in Progress */}
                <div className="space-y-2 mb-6">
                  {currentExample.transformation.discovering.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-purple-700"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                        className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full"
                      />
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Insights Found */}
                <div className="bg-white rounded-lg p-4 space-y-3">
                  {currentExample.transformation.insights.map((insight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-xl">{insight.icon}</span>
                      <span className="text-sm text-gray-700">{insight.finding}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stage 3: Actionable Solution */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 shadow-xl border border-green-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">Your Action Plan</h4>
                </div>

                {/* Primary Insight */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="bg-white rounded-lg p-4 mb-4 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium text-gray-700">Root Emotion</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{currentExample.solution.emotion}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {currentExample.solution.confidence} confidence
                  </div>
                </motion.div>

                {/* Recommendations */}
                <div className="space-y-2 mb-4">
                  {currentExample.solution.recommendations.map((rec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 + i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{rec}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Expected Impact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="bg-green-100 rounded-lg p-3 text-center"
                >
                  <div className="text-2xl font-bold text-green-700">{currentExample.solution.impact}</div>
                  <div className="text-xs text-green-600">Expected improvement</div>
                </motion.div>
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
          className="text-center mt-8"
        >
          <p className="text-gray-600 mb-4">
            Stop guessing. Start understanding. See the story behind your data.
          </p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Transform Your Analytics
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default TransformationExamples