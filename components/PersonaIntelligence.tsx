'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Sparkles, ArrowRight, MousePointer, Clock, ShoppingCart, Heart, Brain } from 'lucide-react'
import Logo from './ui/Logo'

export default function PersonaIntelligence() {
  const [stage, setStage] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(true)

  React.useEffect(() => {
    if (!isAnimating) return
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(timer)
  }, [isAnimating])

  return (
    <section className="py-24 relative bg-white overflow-hidden" id="persona-intelligence">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
            Watch how Wivvy transforms raw behavioral data into rich user personas in real-time
          </p>
        </motion.div>

        {/* Interactive Transformation Visualization */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Progress indicators */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-8">
                {['Anonymous Data', 'Pattern Recognition', 'User Persona'].map((label, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <motion.div
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        stage >= index ? 'bg-purple-600 scale-125' : 'bg-gray-300'
                      }`}
                      animate={stage === index ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className={`text-sm mt-2 transition-all ${
                      stage >= index ? 'text-purple-700 font-medium' : 'text-gray-500'
                    }`}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main visualization area */}
            <div className="relative h-[600px] bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl overflow-hidden border border-gray-200">
              <AnimatePresence mode="wait">
                {/* Stage 1: Anonymous Clicks */}
                {stage === 0 && (
                  <motion.div
                    key="stage1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative">
                      {/* Central anonymous user */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative"
                      >
                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="w-16 h-16 text-gray-400" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-4xl font-bold text-gray-500">?</div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Floating click events */}
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * 45) * Math.PI / 180
                        const radius = 150
                        return (
                          <motion.div
                            key={i}
                            className="absolute"
                            style={{
                              left: radius * Math.cos(angle),
                              top: radius * Math.sin(angle)
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0.5, 1, 0.5],
                              x: [-20, 0, 20],
                              y: [-20, 0, 20]
                            }}
                            transition={{
                              duration: 3,
                              delay: i * 0.3,
                              repeat: Infinity
                            }}
                          >
                            <div className="bg-white rounded-lg shadow-md p-3 flex items-center gap-2">
                              <MousePointer className="w-4 h-4 text-gray-500" />
                              <span className="text-xs text-gray-600">Click</span>
                            </div>
                          </motion.div>
                        )
                      })}

                      {/* Stats floating around */}
                      <motion.div
                        className="absolute -top-20 -left-20"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="bg-white rounded-lg shadow-lg p-4">
                          <div className="text-2xl font-bold text-gray-700">2.4k</div>
                          <div className="text-xs text-gray-500">Events/hour</div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-20 -right-20"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity }}
                      >
                        <div className="bg-white rounded-lg shadow-lg p-4">
                          <div className="text-2xl font-bold text-gray-700">???</div>
                          <div className="text-xs text-gray-500">User intent</div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Stage 2: Pattern Recognition */}
                {stage === 1 && (
                  <motion.div
                    key="stage2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Data streams flowing into brain */}
                      <div className="absolute inset-0">
                        {/* Incoming data particles */}
                        {[...Array(20)].map((_, i) => {
                          const startAngle = (i * 18) * Math.PI / 180
                          const startRadius = 250
                          const startX = startRadius * Math.cos(startAngle)
                          const startY = startRadius * Math.sin(startAngle)
                          
                          return (
                            <motion.div
                              key={i}
                              className="absolute left-1/2 top-1/2"
                              initial={{ x: startX, y: startY, opacity: 0 }}
                              animate={{
                                x: [startX, 0],
                                y: [startY, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.1,
                                repeat: Infinity,
                                ease: "easeIn"
                              }}
                            >
                              <div className={`w-2 h-2 rounded-full ${
                                i % 3 === 0 ? 'bg-purple-400' : 
                                i % 3 === 1 ? 'bg-indigo-400' : 'bg-blue-400'
                              }`} />
                            </motion.div>
                          )
                        })}
                      </div>

                      {/* Central brain with pulsing effect */}
                      <div className="relative z-20">
                        {/* Outer pulsing rings */}
                        {[1, 2, 3].map((ring) => (
                          <motion.div
                            key={ring}
                            className="absolute inset-0 rounded-full"
                            style={{
                              width: `${160 + ring * 40}px`,
                              height: `${160 + ring * 40}px`,
                              left: '50%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)',
                              background: `radial-gradient(circle, transparent, rgba(139, 92, 246, ${0.1 / ring}))`
                            }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.1, 0.3]
                            }}
                            transition={{
                              duration: 3,
                              delay: ring * 0.3,
                              repeat: Infinity
                            }}
                          />
                        ))}
                        
                        {/* Brain container with glow */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                            filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="relative"
                        >
                          <div className="w-40 h-40 bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                            {/* Animated gradient overlay */}
                            <motion.div
                              className="absolute inset-0 opacity-50"
                              style={{
                                background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)'
                              }}
                              animate={{ rotate: 360 }}
                              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Wivvy Logo instead of Brain */}
                            <div className="relative z-10">
                              <Logo className="text-white" size="lg" />
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Pattern extraction visualization - staggered appearance */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[
                          { label: 'Behavioral DNA', icon: '🧬', color: 'from-purple-400 to-purple-600', position: { x: -200, y: -120 }, delay: 0.3 },
                          { label: 'Emotional State', icon: '💭', color: 'from-blue-400 to-indigo-600', position: { x: 200, y: -120 }, delay: 1.2 },
                          { label: 'Intent Mapping', icon: '🎯', color: 'from-indigo-400 to-purple-600', position: { x: 0, y: 180 }, delay: 2.1 }
                        ].map((item, i) => {
                          return (
                            <motion.div
                              key={i}
                              className="absolute z-30"
                              style={{
                                left: '50%',
                                top: '50%',
                                transform: `translate(-50%, -50%) translate(${item.position.x}px, ${item.position.y}px)`
                              }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ 
                                opacity: 1, 
                                scale: [0, 1.2, 1]
                              }}
                              transition={{ 
                                delay: item.delay,
                                duration: 0.6,
                                scale: { 
                                  times: [0, 0.8, 1],
                                  duration: 0.8
                                }
                              }}
                            >
                              <div className={`bg-gradient-to-br ${item.color} rounded-xl p-4 shadow-2xl min-w-[160px] relative overflow-hidden`}>
                                {/* Pulse effect on appearance */}
                                <motion.div
                                  className="absolute inset-0 bg-white/20 rounded-xl"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 3, opacity: 0 }}
                                  transition={{ 
                                    delay: item.delay,
                                    duration: 1,
                                    ease: "easeOut"
                                  }}
                                />
                                
                                <div className="relative">
                                  <div className="text-2xl mb-1">{item.icon}</div>
                                  <div className="text-sm font-semibold text-white">{item.label}</div>
                                  
                                  {/* Progress bar */}
                                  <div className="mt-3 h-1.5 bg-white/30 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-white"
                                      initial={{ width: 0 }}
                                      animate={{ width: '100%' }}
                                      transition={{ 
                                        delay: item.delay + 0.3,
                                        duration: 0.8,
                                        ease: "easeOut"
                                      }}
                                    />
                                  </div>
                                  
                                  {/* Status text */}
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: item.delay + 1 }}
                                    className="mt-2 text-xs text-white/80"
                                  >
                                    Analyzing...
                                  </motion.div>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>

                      {/* Floating insights */}
                      {[
                        { text: '87% Confidence', delay: 1.5 },
                        { text: 'Pattern Match', delay: 1.8 },
                        { text: 'Profile Ready', delay: 2.1 }
                      ].map((insight, i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          style={{
                            left: '50%',
                            bottom: '20px',
                            transform: 'translateX(-50%)'
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: [0, 1, 1, 0],
                            y: [20, 0, 0, -20]
                          }}
                          transition={{ 
                            delay: insight.delay,
                            duration: 2,
                            times: [0, 0.2, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        >
                          <div className="bg-white rounded-full px-3 py-1 shadow-lg">
                            <span className="text-xs font-medium text-purple-700">{insight.text}</span>
                          </div>
                        </motion.div>
                      ))}

                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {[
                          { x: -200, y: -120, delay: 0.3 },  // Behavioral DNA
                          { x: 200, y: -120, delay: 1.2 },   // Emotional State
                          { x: 0, y: 180, delay: 2.1 }      // Intent Mapping
                        ].map((pos, i) => {
                          const centerX = 50
                          const centerY = 50
                          const endX = centerX + (pos.x / 500) * 50
                          const endY = centerY + (pos.y / 500) * 50
                          return (
                            <motion.line
                              key={i}
                              x1="50%"
                              y1="50%"
                              x2={`${endX}%`}
                              y2={`${endY}%`}
                              stroke="url(#lineGradient)"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: [0, 1] }}
                              transition={{
                                duration: 0.8,
                                delay: pos.delay,
                                ease: "easeOut"
                              }}
                            />
                          )
                        })}
                      </svg>
                    </div>
                  </motion.div>
                )}

                {/* Stage 3: User Persona */}
                {stage === 2 && (
                  <motion.div
                    key="stage3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <div className="relative">
                      {/* Completed persona card */}
                      <motion.div
                        initial={{ scale: 0.8, rotateY: 180 }}
                        animate={{ scale: 1, rotateY: 0 }}
                        transition={{ type: "spring", duration: 1 }}
                        className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto"
                      >
                        {/* Persona header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                            <Users className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-gray-900">Sarah Chen</h3>
                            <p className="text-sm text-gray-600">The Cautious Explorer</p>
                          </div>
                        </div>

                        {/* Persona traits */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Decision Speed</span>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-8 rounded ${
                                    i <= 2 ? 'bg-purple-500' : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Price Sensitivity</span>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-8 rounded ${
                                    i <= 4 ? 'bg-purple-500' : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Feature Interest</span>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-8 rounded ${
                                    i <= 5 ? 'bg-purple-500' : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Key insights */}
                        <div className="border-t pt-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Insights</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <Heart className="w-4 h-4 text-red-500 mt-0.5" />
                              <span className="text-xs text-gray-600">Values trust & security above speed</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <ShoppingCart className="w-4 h-4 text-blue-500 mt-0.5" />
                              <span className="text-xs text-gray-600">Compares 3-5 options before deciding</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Clock className="w-4 h-4 text-green-500 mt-0.5" />
                              <span className="text-xs text-gray-600">Peak activity: Weekday evenings</span>
                            </div>
                          </div>
                        </div>

                        {/* Match confidence */}
                        <motion.div
                          className="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-3 text-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="text-2xl font-bold text-purple-700">87%</div>
                          <div className="text-xs text-purple-600">Confidence Match</div>
                        </motion.div>
                      </motion.div>

                      {/* Sparkles around the card */}
                      {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * Math.PI / 180
                        const radius = 200
                        return (
                          <motion.div
                            key={i}
                            className="absolute"
                            style={{
                              left: radius * Math.cos(angle),
                              top: radius * Math.sin(angle)
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              rotate: [0, 180, 360]
                            }}
                            transition={{
                              duration: 2,
                              delay: 0.5 + i * 0.1,
                              repeat: Infinity
                            }}
                          >
                            <Sparkles className="w-6 h-6 text-purple-400" />
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Play/Pause control */}
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
              >
                {isAnimating ? (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <rect x="5" y="4" width="3" height="12" rx="1" />
                    <rect x="12" y="4" width="3" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 4v12l10-6z" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Transform your analytics from numbers to narratives
          </p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Start Understanding Your Users
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}