'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, BarChart3, Users, Brain, Eye, Sparkles, ArrowRight, Heart, Zap, Layers, MousePointer, TrendingUp, Shield, Lightbulb, Activity, Database, Cpu, Network, ChevronRight, Zap as Lightning, LineChart, Target, Gauge, BrainCircuit, Workflow } from 'lucide-react'

const ProblemStatement = () => {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)
  const [activeStory, setActiveStory] = React.useState<number>(0)
  const [isPlaying, setIsPlaying] = React.useState(true)

  React.useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const problems = [
    {
      icon: BarChart3,
      title: "Surface-level metrics",
      subtitle: "Missing the human story",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Animated user icons leaving */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  left: '50%',
                  top: '50%',
                  x: -12,
                  y: -12,
                  opacity: 0 
                }}
                animate={{ 
                  left: `${[10, 90, 20, 80, 15, 85, 25, 75][i]}%`,
                  top: `${[10, 20, 80, 90, 30, 70, 50, 40][i]}%`,
                  opacity: [0, 1, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              >
                <Users className="w-6 h-6 text-gray-400" />
              </motion.div>
            ))}
          </div>

          {/* Central content */}
          <div className="relative z-10 text-center">
            <div className="space-y-3">
              {/* Animated counter */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="text-6xl font-bold"
                >
                  <motion.span 
                    className="text-gray-900"
                    animate={{ 
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    73%
                  </motion.span>
                </motion.div>
                
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="w-32 h-32 bg-red-400 rounded-full blur-3xl"
                    animate={{ 
                      scale: [0.8, 1, 0.8],
                      opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-sm text-gray-600 font-medium"
              >
                users left your site
              </motion.div>

              {/* Subtle question animation */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0
                }}
                transition={{ 
                  delay: 0.8,
                  duration: 0.8
                }}
                className="text-3xl font-bold text-red-600 mt-6"
              >
                <motion.span
                  animate={{ 
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ display: 'inline-block' }}
                >
                  But why?
                </motion.span>
              </motion.div>

              {/* Subtle floating question marks */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xl text-red-300"
                  style={{
                    left: `${[25, 50, 75][i]}%`,
                    top: `${[30, 70, 45][i]}%`
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    delay: i * 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ?
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Users,
      title: "Static personas",
      subtitle: "Real users are dynamic",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
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
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative"
          >
            <Eye className="w-24 h-24 text-gray-400" />
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


  const intelligenceLayers = [
    {
      name: "Data Collection",
      description: "Capture every interaction",
      icon: Database,
      features: ["Click tracking", "Session recording", "Event streaming", "API integration"],
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Data nodes */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60) * Math.PI / 180
            const x = 100 + 60 * Math.cos(angle)
            const y = 100 + 60 * Math.sin(angle)
            return (
              <g key={i}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="url(#dataGradient)"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
                />
                <motion.line
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}
                  stroke="url(#dataGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: i * 0.1, duration: 1 }}
                />
              </g>
            )
          })}
          <circle cx="100" cy="100" r="20" fill="url(#dataGradient)" opacity="0.9" />
          <Database className="w-8 h-8 text-white" x="84" y="84" />
        </svg>
      )
    },
    {
      name: "Emotional Analysis",
      description: "Decode user feelings",
      icon: Heart,
      features: ["Sentiment mapping", "Frustration detection", "Joy identification", "Engagement scoring"],
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="emotionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Emotion waves */}
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 20 ${80 + i * 20} Q 60 ${60 + i * 20} 100 ${80 + i * 20} T 180 ${80 + i * 20}`}
              fill="none"
              stroke="url(#emotionGradient)"
              strokeWidth="2"
              opacity={0.6 - i * 0.2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
          <motion.circle
            cx="100"
            cy="100"
            r="30"
            fill="url(#emotionGradient)"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Heart className="w-10 h-10 text-white" x="80" y="80" />
        </svg>
      )
    },
    {
      name: "Predictive Insights",
      description: "Anticipate user needs",
      icon: BrainCircuit,
      features: ["Behavior prediction", "Churn prevention", "Opportunity detection", "Personalization"],
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Neural network visualization */}
          {[...Array(3)].map((_, layer) => (
            <g key={layer}>
              {[...Array(4)].map((_, node) => {
                const x = 50 + layer * 50
                const y = 50 + node * 33
                return (
                  <g key={`${layer}-${node}`}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="url(#aiGradient)"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: layer * 0.2 + node * 0.1 }}
                    />
                    {layer < 2 && [...Array(4)].map((_, nextNode) => (
                      <motion.line
                        key={`${layer}-${node}-${nextNode}`}
                        x1={x}
                        y1={y}
                        x2={100 + layer * 50}
                        y2={50 + nextNode * 33}
                        stroke="url(#aiGradient)"
                        strokeWidth="0.5"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: layer * 0.3 + node * 0.1, duration: 1 }}
                      />
                    ))}
                  </g>
                )
              })}
            </g>
          ))}
          <BrainCircuit className="w-10 h-10 text-white" x="140" y="80" />
        </svg>
      )
    }
  ]


  return (
    <section className="py-24 relative overflow-hidden" id="problem-solution">
      <div className="container mx-auto px-6 relative">
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

        {/* Problems displayed in a unique staggered layout */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="relative">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 mb-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <motion.div 
                  className="flex-1 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 h-64 overflow-hidden border border-gray-100 hover:border-red-200 transition-colors">
                    {problem.visual}
                  </div>
                </motion.div>

                {/* Content Side */}
                <div className={`flex-1 text-center lg:${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <problem.icon className={`w-12 h-12 text-red-500 mb-4 mx-auto lg:mx-0 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{problem.subtitle}</p>
                    <div className={`inline-flex items-center gap-2 text-red-600 font-medium ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                      <span className="text-sm">The truth hurts</span>
                      <ArrowRight className={`w-4 h-4 ${index % 2 === 1 ? 'rotate-180' : ''}`} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enter Wivvy Section with Story Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 relative inline-block">
                  Enter Wivvy
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <div className="h-3 bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 opacity-60 rounded-full" />
                  </motion.div>
                </h3>
              </motion.div>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The first analytics platform that understands emotions, not just events
              </p>
            </div>

            {/* Story Flow Visualization */}
            <div className="relative">
              {/* Background connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 transform -translate-y-1/2 hidden lg:block" />
              
              {/* Three-step story */}
              <div className="grid lg:grid-cols-3 gap-8 relative">
                {/* Step 1: The Problem */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10 min-h-[500px] flex flex-col">
                    {/* Step indicator */}
                    <div className="absolute -top-4 left-8 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      The Reality
                    </div>
                    
                    {/* Visual representation */}
                    <div className="mb-6 h-48 relative overflow-hidden rounded-xl bg-gray-50">
                      {/* User journey with gaps */}
                      <svg viewBox="0 0 300 150" className="w-full h-full">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="300" height="150" fill="url(#grid)" />
                        
                        {/* User path with gaps */}
                        <motion.path
                          d="M 30 120 L 80 80 L 100 90 L 150 40 L 170 50 L 220 30 L 270 60"
                          fill="none"
                          stroke="#9ca3af"
                          strokeWidth="3"
                          strokeDasharray="10 10"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        
                        {/* Question marks at gaps */}
                        {[{ x: 90, y: 85 }, { x: 160, y: 45 }, { x: 245, y: 45 }].map((pos, i) => (
                          <motion.g
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.2 }}
                          >
                            <circle cx={pos.x} cy={pos.y} r="15" fill="#ef4444" opacity="0.2" />
                            <text x={pos.x} y={pos.y + 5} textAnchor="middle" className="text-sm font-bold fill-red-500">?</text>
                          </motion.g>
                        ))}
                        
                        {/* Labels */}
                        <text x="30" y="140" className="text-xs fill-gray-500">Start</text>
                        <text x="250" y="140" className="text-xs fill-gray-500">Drop-off</text>
                      </svg>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">You see behaviors</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Users click, browse, and leave. But why? Traditional analytics shows what happened, not why it happened.
                    </p>
                    
                    {/* Key metrics */}
                    <div className="grid grid-cols-3 gap-2 text-center mt-auto">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-lg font-bold text-gray-400">73%</div>
                        <div className="text-xs text-gray-500">Exit rate</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-lg font-bold text-gray-400">2.4</div>
                        <div className="text-xs text-gray-500">Pages/session</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-lg font-bold text-gray-400">???</div>
                        <div className="text-xs text-gray-500">Reason</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2: The Wivvy Process */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10 min-h-[500px] flex flex-col">
                    {/* Step indicator */}
                    <div className="absolute -top-4 left-8 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      The Magic
                    </div>
                    
                    {/* Visual representation */}
                    <div className="mb-6 h-48 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
                      {/* Layered analysis visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Central user icon */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6, type: "spring" }}
                          className="relative flex items-center justify-center"
                        >
                          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-30 relative">
                            <Users className="w-10 h-10 text-gray-700" />
                          </div>
                          
                          {/* Scanning rings */}
                          {[1, 2, 3].map((ring) => (
                            <motion.div
                              key={ring}
                              className="absolute rounded-full border-2"
                              style={{
                                width: `${80 + ring * 40}px`,
                                height: `${80 + ring * 40}px`,
                                borderColor: ring === 1 ? '#3b82f6' : ring === 2 ? '#a855f7' : '#10b981'
                              }}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.8, 0.3, 0.8]
                              }}
                              transition={{ 
                                delay: 0.8 + ring * 0.2,
                                duration: 2,
                                repeat: Infinity
                              }}
                            />
                          ))}
                          
                          {/* Hearts flowing in */}
                          {[...Array(6)].map((_, i) => {
                            const angle = (i * 60) * Math.PI / 180
                            const startX = 100 * Math.cos(angle)
                            const startY = 100 * Math.sin(angle)
                            const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#a855f7', '#ec4899']
                            return (
                              <motion.div
                                key={i}
                                className="absolute flex items-center justify-center"
                                style={{
                                  left: '50%',
                                  top: '50%',
                                  transform: 'translate(-50%, -50%)'
                                }}
                                initial={{ x: startX, y: startY, opacity: 0, scale: 0 }}
                                animate={{ 
                                  x: 0,
                                  y: 0,
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0]
                                }}
                                transition={{
                                  delay: 1 + i * 0.2,
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatDelay: 1.5
                                }}
                              >
                                <Heart 
                                  className="w-4 h-4" 
                                  fill={colors[i]} 
                                  color={colors[i]}
                                />
                              </motion.div>
                            )
                          })}
                        </motion.div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Wivvy understands</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      We decode emotional signals, identify friction moments, and reveal the 'why' behind every action.
                    </p>
                    
                    {/* Processing layers */}
                    <div className="space-y-2 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-xs text-gray-600">Behavioral patterns analyzed</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-xs text-gray-600">Emotional context decoded</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-xs text-gray-600">AI insights generated</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3: The Result */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10 min-h-[500px] flex flex-col">
                    {/* Step indicator */}
                    <div className="absolute -top-4 left-8 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      The Result
                    </div>
                    
                    {/* Visual representation */}
                    <div className="mb-6 h-48 relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                      {/* Success metrics */}
                      <div className="absolute inset-0 p-6">
                        {/* Upward trending graph */}
                        <svg viewBox="0 0 300 150" className="w-full h-full">
                          <defs>
                            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          
                          {/* Grid */}
                          <pattern id="successGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d1fae5" strokeWidth="1"/>
                          </pattern>
                          <rect width="300" height="150" fill="url(#successGrid)" />
                          
                          {/* Success path */}
                          <motion.path
                            d="M 30 120 L 80 100 L 130 85 L 180 60 L 230 40 L 270 20"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                          />
                          
                          {/* Fill under curve */}
                          <motion.path
                            d="M 30 120 L 80 100 L 130 85 L 180 60 L 230 40 L 270 20 L 270 120 Z"
                            fill="url(#greenGradient)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                          />
                          
                          {/* Success indicators */}
                          {[{ x: 80, y: 100 }, { x: 180, y: 60 }, { x: 270, y: 20 }].map((pos, i) => (
                            <motion.g
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.3 + i * 0.2 }}
                            >
                              <circle cx={pos.x} cy={pos.y} r="4" fill="#10b981" />
                              <circle cx={pos.x} cy={pos.y} r="8" fill="#10b981" opacity="0.3" />
                            </motion.g>
                          ))}
                        </svg>
                        
                        {/* Floating insights */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 }}
                          className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-3"
                        >
                          <div className="text-xs font-medium text-green-600">Conversion</div>
                          <div className="text-lg font-bold text-gray-900">+47%</div>
                        </motion.div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">You take action</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Clear insights lead to confident decisions. Fix what matters, improve what counts.
                    </p>
                    
                    {/* Success metrics */}
                    <div className="grid grid-cols-3 gap-2 text-center mt-auto">
                      <div className="bg-green-50 rounded-lg p-2">
                        <div className="text-lg font-bold text-green-600">+47%</div>
                        <div className="text-xs text-gray-600">Conversion</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2">
                        <div className="text-lg font-bold text-green-600">-62%</div>
                        <div className="text-xs text-gray-600">Drop-offs</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2">
                        <div className="text-lg font-bold text-green-600">3.2x</div>
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center mt-20"
            >
              <p className="text-gray-600 mb-6 text-lg">
                Stop guessing. Start understanding. Start growing.
              </p>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-600 transition-all group shadow-xl shadow-green-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                See How It Works
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default ProblemStatement