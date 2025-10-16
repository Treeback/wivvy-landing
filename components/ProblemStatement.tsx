'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, BarChart3, Users, Brain, Eye, Sparkles, ArrowRight, Heart, Zap, Layers, MousePointer } from 'lucide-react'
import { useState } from 'react'

export default function ProblemStatement() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeLayer, setActiveLayer] = useState<number>(0)

  const problems = [
    {
      icon: BarChart3,
      title: "Surface-level metrics",
      subtitle: "Missing the human story",
      visual: (
        <div className="relative w-full h-full">
          {/* Analytics bars that only show surface data */}
          <div className="absolute inset-0 flex items-end justify-around p-4">
            {[40, 65, 30, 80, 45].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="w-8 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t"
              />
            ))}
          </div>
          {/* Hidden emotional layer */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Brain className="w-16 h-16 text-red-300 opacity-30" />
            <div className="absolute inset-0 bg-red-500/10 blur-xl" />
          </motion.div>
        </div>
      )
    },
    {
      icon: Users,
      title: "Static personas",
      subtitle: "Real users are dynamic",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Static persona cards */}
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-16 h-20 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
              </motion.div>
            ))}
          </div>
          {/* Dynamic emotional states floating around */}
          {['😊', '😔', '😤', '😍', '😰'].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              animate={{
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 10}%`
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      )
    },
    {
      icon: Eye,
      title: "Blind spots",
      subtitle: "Missing emotional context",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Eye with blind spots */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative"
          >
            <Eye className="w-24 h-24 text-gray-400" />
            {/* Blind spot areas */}
            {[0, 72, 144, 216, 288].map((rotation, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <motion.div
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.4,
                    repeat: Infinity
                  }}
                  className="w-4 h-4 bg-red-400 rounded-full blur-sm"
                  style={{ transform: 'translateX(40px)' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )
    }
  ]

  const layers = [
    {
      name: "Behavioral Data",
      icon: MousePointer,
      color: "from-blue-400 to-blue-600",
      data: ["Click patterns", "Session duration", "Page views", "Conversion rates"]
    },
    {
      name: "Emotional Context",
      icon: Heart,
      color: "from-purple-400 to-purple-600",
      data: ["Sentiment analysis", "Frustration signals", "Delight moments", "Anxiety patterns"]
    },
    {
      name: "AI Intelligence",
      icon: Brain,
      color: "from-green-400 to-green-600",
      data: ["Pattern recognition", "Predictive modeling", "Anomaly detection", "Trend analysis"]
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="problem-solution">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-yellow-50/50" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-red-200 rounded-full mb-8 shadow-lg">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-gray-700">The Hidden Problem</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Your analytics are
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              lying to you
            </span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: hoveredCard === index ? 1.05 : 1,
                  rotateY: hoveredCard === index ? 10 : 0
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-96"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card content */}
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <problem.icon className="w-8 h-8 text-red-500 mb-2" />
                      <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                      <p className="text-sm text-gray-500">{problem.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Visual representation */}
                  <div className="flex-1 relative">
                    {problem.visual}
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-red-500/90 to-orange-500/90 flex items-center justify-center p-8"
                  >
                    <p className="text-white text-center font-medium">
                      Traditional analytics miss the emotional drivers behind every user action
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Solution section */}
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Enter Wivvy
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The first analytics platform that understands emotions, not just events
          </p>
        </div>

        {/* Layer visualization */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              See the complete picture
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three layers of intelligence working together to reveal the full story behind every user interaction
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  onClick={() => setActiveLayer(index)}
                  className={`cursor-pointer relative p-6 rounded-2xl border transition-all ${
                    activeLayer === index
                      ? 'bg-white/10 border-white/30 shadow-2xl'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${layer.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <layer.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {layer.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {layer.data.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-[400px] flex items-center justify-center">
              <div className="relative">
                {layers.map((layer, index) => (
                  <div
                    key={index}
                    className={`absolute rounded-full border-2 ${layer.color} opacity-20`}
                    style={{
                      width: `${120 + index * 60}px`,
                      height: `${120 + index * 60}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderColor: activeLayer === index ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)'
                    }}
                  />
                ))}
                
                <div className="relative w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <Layers className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Ready to unlock the emotional intelligence in your data?
            </p>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-full hover:from-green-600 hover:to-emerald-600 transition-all group"
            >
              <Zap className="w-5 h-5" />
              See it in action
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}