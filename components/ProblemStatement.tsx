'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, BarChart3, Users, Brain, Eye, Sparkles, ArrowRight, Heart, Zap, Layers, MousePointer, TrendingUp, Shield, Lightbulb, Activity, Database, Cpu, Network, ChevronRight, Zap as Lightning, LineChart, Target, Gauge, BrainCircuit, Workflow } from 'lucide-react'
import Logo from './ui/Logo'

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
      stats: [
        { label: "Lost insights", value: "73%" },
        { label: "User frustration", value: "High" },
        { label: "Action clarity", value: "12%" }
      ],
      insights: [
        "You see clicks, but not the hesitation before them",
        "You track conversions, but miss the emotional journey",
        "You measure time on page, but not engagement quality"
      ],
      realityCheck: "Your dashboards show growth, but customer satisfaction is plummeting",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Central analytics dashboard */}
          <div className="relative z-10">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200"
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  "0 30px 35px -5px rgba(239, 68, 68, 0.15)",
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Dashboard header */}
              <div className="text-xs text-gray-500 mb-3">Real-time Analytics</div>
              
              {/* Main metric */}
              <div className="text-center mb-4">
                <motion.div 
                  className="text-4xl font-bold text-gray-900"
                  animate={{ 
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  73%
                </motion.div>
                <div className="text-sm text-gray-500">users left</div>
              </div>

              {/* But why question */}
              <motion.div 
                className="text-lg font-bold text-red-600 text-center"
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -2, 0]
                }}
                transition={{ 
                  opacity: { delay: 0.5, duration: 0.5 },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                But why?
              </motion.div>
            </motion.div>

            {/* Subtle glow effect behind dashboard */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-red-400 rounded-2xl blur-2xl opacity-20" />
            </motion.div>
          </div>

          {/* User icons leaving */}
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
                left: [`50%`, `${[10, 90, 20, 80, 15, 85, 25, 75][i]}%`],
                top: [`50%`, `${[10, 20, 80, 90, 30, 70, 50, 40][i]}%`],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 0.8]
              }}
              transition={{ 
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              <Users className="w-6 h-6 text-gray-500" />
            </motion.div>
          ))}

          {/* Floating question marks */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`q-${i}`}
              className="absolute text-xl text-red-400"
              style={{
                left: `${[20, 50, 80][i]}%`,
                top: `${[25, 75, 45][i]}%`
              }}
              animate={{ 
                y: [0, -10, 0],
                opacity: [0, 0.6, 0],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3,
                delay: i * 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ?
            </motion.div>
          ))}
        </div>
      )
    },
    {
      icon: Users,
      title: "Static personas",
      subtitle: "Real users are dynamic",
      stats: [
        { label: "Persona accuracy", value: "34%" },
        { label: "Behavior shifts", value: "Daily" },
        { label: "Context missed", value: "91%" }
      ],
      insights: [
        "Your 'power user' is actually 5 different emotional states",
        "Morning browsers become evening buyers - you don't see why",
        "Same person, different mood, completely different behavior"
      ],
      realityCheck: "Static segments can't capture the fluidity of human emotion",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Main container */}
          <div className="relative">
            {/* Static persona card that transforms */}
            <motion.div
              className="bg-white rounded-xl shadow-xl p-6 w-44 border border-gray-200"
              animate={{
                boxShadow: [
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  "0 20px 25px -5px rgba(147, 51, 234, 0.15)",
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Profile header */}
              <div className="text-center mb-4">
                <motion.div className="relative inline-block">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto" />
                  
                  {/* Changing emotions overlay */}
                  {['😊', '😔', '😤', '🤔', '😴'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 flex items-center justify-center text-3xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: i === 0 ? [0, 1, 1, 0] : [0, 0, 1, 1, 0, 0]
                      }}
                      transition={{
                        duration: 5,
                        delay: i * 1,
                        repeat: Infinity,
                        times: i === 0 ? [0, 0.1, 0.9, 1] : [0, 0.2, 0.4, 0.6, 0.8, 1]
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </motion.div>
                
                <div className="mt-3">
                  <div className="text-sm font-medium text-gray-800">Power User</div>
                  <div className="text-xs text-gray-500">Static Segment</div>
                </div>
              </div>
              
              {/* Static vs Reality comparison */}
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-medium text-gray-400 mb-1">Expected:</div>
                  <div className="text-xs text-gray-600">Always engaged</div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="text-xs font-medium text-purple-600 mb-1">Reality:</div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-xs text-purple-700"
                  >
                    Changes every hour
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      icon: Eye,
      title: "Blind spots",
      subtitle: "Missing emotional context",
      stats: [
        { label: "Hidden friction", value: "67%" },
        { label: "Emotional data", value: "0%" },
        { label: "True intent", value: "Guessing" }
      ],
      insights: [
        "Critical decision moments happen between the clicks",
        "Frustration builds silently until users suddenly leave",
        "You're blind to the emotional journey that drives decisions"
      ],
      realityCheck: "The most important user signals are the ones you're not tracking",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Dashboard with blind spot visualization */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-5 w-52 border border-gray-200">
              <div className="text-xs font-medium text-gray-500 mb-4">What you track</div>
              
              {/* Visible metrics */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Clicks</span>
                  <span className="text-sm font-medium">892</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Time on page</span>
                  <span className="text-sm font-medium">2:34</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Bounce rate</span>
                  <span className="text-sm font-medium">47%</span>
                </div>
              </div>
              
              {/* Divider */}
              <div className="my-3 border-t border-gray-200" />
              
              {/* What's missing */}
              <div className="text-xs font-medium text-gray-500 mb-2">What you miss</div>
              <motion.div 
                className="text-center py-2"
                animate={{ 
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-lg mb-1">😤 😔 🤔</div>
                <div className="text-xs text-red-600">User emotions</div>
              </motion.div>
            </div>
            
            {/* Eye with limited vision */}
            <motion.div 
              className="absolute -top-3 right-4"
              animate={{ 
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            >
              <Eye className="w-6 h-6 text-gray-400" />
            </motion.div>
          </div>
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
        {/* Enhanced header with dramatic reveal */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-full mb-8 shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-gray-700">The Hidden Problem</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Your analytics are
            <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              lying to you
            </motion.span>
          </h2>
        </motion.div>

        {/* Enhanced cards with 3D perspective and interactive hover */}
        <div className="relative mb-32">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          </div>

          {/* Cards container with perspective */}
          <div className="relative max-w-7xl mx-auto" style={{ perspective: '1000px' }}>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="relative mb-32 last:mb-0"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Card number indicator */}
                <motion.div
                  className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-8xl font-bold text-gray-100">
                    0{index + 1}
                  </div>
                </motion.div>

                {/* Main card with tilt effect */}
                <motion.div
                  className="relative group"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? -5 : 5,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group-hover:border-red-200 transition-all duration-500">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Visual Side with overlay effect */}
                      <div className={`relative bg-gradient-to-br from-gray-50 to-white overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                          }} />
                        </div>
                        
                        {/* Visual content with parallax */}
                        <motion.div 
                          className="relative h-full flex items-center justify-center p-12 min-h-[400px]"
                          style={{ transformStyle: "preserve-3d" }}
                          whileHover={{ z: 20 }}
                        >
                          <div className="relative z-10 w-full h-full">
                            {problem.visual}
                          </div>
                          
                          {/* Hover effect overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </div>

                      {/* Content Side with enhanced typography */}
                      <div className={`relative p-12 lg:p-16 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        {/* Decorative element */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-full blur-3xl opacity-30" />
                        
                        <motion.div
                          className="relative z-10"
                          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          {/* Icon with gradient background */}
                          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                            <problem.icon className="w-8 h-8 text-red-500" />
                          </div>
                          
                          {/* Enhanced typography */}
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            {problem.title}
                          </h3>
                          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {problem.subtitle}
                          </p>
                          
                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-4 mb-8">
                            {problem.stats.map((stat, idx) => (
                              <motion.div
                                key={idx}
                                className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                              >
                                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Insights List */}
                          <div className="space-y-3 mb-8">
                            {problem.insights.map((insight, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                              >
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                <p className="text-gray-700 leading-relaxed">{insight}</p>
                              </motion.div>
                            ))}
                          </div>

                          {/* Reality Check Box */}
                          <motion.div
                            className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                          >
                            <p className="text-sm text-gray-800">
                              <span className="font-semibold text-red-600">Reality check:</span> {problem.realityCheck}
                            </p>
                          </motion.div>
                          
                          {/* Interactive CTA */}
                          <motion.div 
                            className="inline-flex items-center gap-3 text-red-600 font-semibold group/cta cursor-pointer"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-lg">See the full picture</span>
                            <div className="relative">
                              <ArrowRight className="w-5 h-5 transition-transform group-hover/cta:translate-x-1" />
                              <motion.div
                                className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-0 group-hover/cta:opacity-30"
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom insight banner with statistics */}
          <motion.div
            className="max-w-5xl mx-auto mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl text-white overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/10" />
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-64 h-64 bg-white/10 rounded-full"
                    style={{
                      left: `${i * 30}%`,
                      top: '50%',
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      x: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold mb-4">
                      The cost of not understanding your users
                    </h3>
                    <p className="text-xl opacity-90 mb-6">
                      While you rely on surface metrics, your competitors are making data-driven emotional connections
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="font-semibold">42%</span> higher conversion
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="font-semibold">3.5x</span> better retention
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="font-semibold">67%</span> less churn
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <div className="inline-flex flex-col items-center lg:items-end">
                      <div className="text-5xl font-bold mb-2">$2.6M</div>
                      <div className="text-lg opacity-90">Average annual revenue lost</div>
                      <div className="text-sm opacity-75 mt-1">to emotional blind spots</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enter Wivvy Section with Story Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header with Animated Logo */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                {/* Logo and Text Container */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  {/* Animated Logo - Small and Clean */}
                  <motion.div
                    className="relative"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  >
                    {/* Logo with morphing data bars */}
                    <div className="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          {/* Animated data bars */}
                          <motion.rect 
                            x="8" 
                            y="22" 
                            width="3" 
                            height="8" 
                            fill="#6366f1"
                            animate={{ 
                              height: [8, 12, 8],
                              y: [22, 18, 22],
                              opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.rect 
                            x="13" 
                            y="18" 
                            width="3" 
                            height="12" 
                            fill="#6366f1"
                            animate={{ 
                              height: [12, 16, 12],
                              y: [18, 14, 18],
                              opacity: [0.6, 1, 0.6]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.2
                            }}
                          />
                          <motion.rect 
                            x="18" 
                            y="14" 
                            width="3" 
                            height="16" 
                            fill="#6366f1"
                            animate={{ 
                              height: [16, 20, 16],
                              y: [14, 10, 14],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.4
                            }}
                          />
                          
                          {/* Heart that pulses with data */}
                          <g transform="translate(24, 14)">
                            <motion.path
                              d="M 6 2
                                 C 6 0.5, 4.5 0, 3 0
                                 C 1.5 0, 0 0.5, 0 2
                                 C 0 3.5, 3 7, 6 10
                                 C 9 7, 12 3.5, 12 2
                                 C 12 0.5, 10.5 0, 9 0
                                 C 7.5 0, 6 0.5, 6 2 Z"
                              fill="#ec4899"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.6
                              }}
                              style={{ transformOrigin: 'center' }}
                            />
                          </g>
                          
                          {/* Connecting gradient that pulses */}
                          <defs>
                            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <motion.stop 
                                offset="0%" 
                                stopColor="#6366f1"
                                animate={{ 
                                  stopOpacity: [0.8, 1, 0.8]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <motion.stop 
                                offset="100%" 
                                stopColor="#ec4899"
                                animate={{ 
                                  stopOpacity: [0, 0.6, 0]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            </linearGradient>
                          </defs>
                          
                          <motion.rect 
                            x="21" 
                            y="20" 
                            width="3" 
                            height="2" 
                            fill="url(#fadeGradient)"
                            animate={{ 
                              width: [3, 5, 3],
                              x: [21, 20, 21]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </g>
                      </svg>
                    </div>
                    
                    {/* Transformation particles */}
                    <motion.div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-0.5 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                          animate={{ 
                            x: [-15, 15],
                            y: [0, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                  
                  {/* Wivvy text with gradient */}
                  <motion.h3 
                    className="text-4xl lg:text-5xl font-bold"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                      Wivvy
                    </span>
                  </motion.h3>
                </div>
                
                {/* Animated underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 200 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                The first analytics platform that understands emotions, not just events
              </motion.p>
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