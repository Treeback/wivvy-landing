'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Youtube, Brain, Sparkles, Link2, TrendingUp, Zap, Clock, Users, Target, FileText, Lightbulb, Star, Network, Layers, GitBranch, ArrowUpRight, BookOpen, Coffee, Heart, DollarSign, Smile, AlertCircle, Shield, Compass, BarChart, MessageCircle, Activity, Moon, Sun, User, UserPlus, ChevronRight, Briefcase, GraduationCap, Flame, ChevronUp } from 'lucide-react'
import React, { useEffect, useState, useMemo } from 'react'

interface ProcessingMessage {
  text: string
  icon: any
  color: string
}

interface KnowledgeNode {
  id: string
  title: string
  type: string
  x: number
  y: number
  xMobile?: number
  yMobile?: number
  color: string
  icon: any
  category?: string
  relatedTo?: string[]
  affinity?: number
}

interface Person {
  id: string
  name: string
  role: string
  avatar: string
  connectionStrength: number
}

interface Insight {
  id: string
  title: string
  description: string
  impact: string
  icon: any
  color: string
  type: 'career' | 'emotional' | 'psychological' | 'relationship' | 'wellness'
  percentage?: number
}

export default function AppScreenshot() {
  const [showModal, setShowModal] = useState(false)
  const [videoLink, setVideoLink] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showConnections, setShowConnections] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [activeInsight, setActiveInsight] = useState<number>(0)
  const [showTransformation, setShowTransformation] = useState(false)
  const [showInsights, setShowInsights] = useState(false)
  const [showGlow, setShowGlow] = useState(false)
  const [selectedTab, setSelectedTab] = useState<'insights' | 'emotions' | 'people'>('insights')
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const processingMessages: ProcessingMessage[] = [
    { text: "Analyzing content and emotional context...", icon: Brain, color: "text-purple-600" },
    { text: "Mapping psychological patterns ✨", icon: Activity, color: "text-yellow-600" },
    { text: "Connecting to your knowledge network", icon: Link2, color: "text-blue-600" },
    { text: "Identifying affected relationships", icon: Users, color: "text-pink-600" },
    { text: "Calculating ripple effects", icon: Network, color: "text-green-600" },
    { text: "Generating personalized insights", icon: Sparkles, color: "text-purple-600" },
  ]

  // People in your network
  const people: Person[] = [
    { id: 'p1', name: 'Sarah Chen', role: 'Team Lead', avatar: '👩‍💼', connectionStrength: 85 },
    { id: 'p2', name: 'Michael Park', role: 'Mentor', avatar: '👨‍🏫', connectionStrength: 92 },
    { id: 'p3', name: 'Alex Rivera', role: 'Colleague', avatar: '👤', connectionStrength: 67 },
    { id: 'p4', name: 'Dr. Thompson', role: 'Therapist', avatar: '👨‍⚕️', connectionStrength: 78 },
    { id: 'p5', name: 'Jamie Liu', role: 'Best Friend', avatar: '👫', connectionStrength: 95 },
  ]

  // Miro-style sticky notes with mobile positions
  const knowledgeNodes: KnowledgeNode[] = [
    { id: 'k1', title: 'API Architecture', type: 'technical', x: 15, y: 15, xMobile: 20, yMobile: 10, color: 'bg-yellow-300', icon: Briefcase, category: 'career', relatedTo: ['k4', 'k7', 'new'], affinity: 0.9 },
    { id: 'k2', title: 'System Design', type: 'learning', x: 50, y: 12, xMobile: 70, yMobile: 10, color: 'bg-green-300', icon: GraduationCap, category: 'growth', relatedTo: ['k1', 'k5', 'new'], affinity: 0.95 },
    { id: 'k3', title: 'AI/ML Basics', type: 'learning', x: 85, y: 18, xMobile: 20, yMobile: 25, color: 'bg-blue-300', icon: Brain, category: 'growth', relatedTo: ['k2', 'k6', 'k11'], affinity: 0.6 },
    { id: 'k4', title: 'Team Dynamics', type: 'social', x: 12, y: 45, xMobile: 70, yMobile: 25, color: 'bg-purple-300', icon: Users, category: 'career', relatedTo: ['k1', 'k7', 'k8'], affinity: 0.8 },
    { id: 'k5', title: 'Leadership Skills', type: 'growth', x: 88, y: 42, xMobile: 20, yMobile: 40, color: 'bg-pink-300', icon: Target, category: 'career', relatedTo: ['k2', 'k3', 'new'], affinity: 0.7 },
    { id: 'k6', title: 'Public Speaking', type: 'skill', x: 28, y: 32, xMobile: 70, yMobile: 40, color: 'bg-orange-300', icon: MessageCircle, category: 'growth', relatedTo: ['k3', 'k9', 'new'], affinity: 0.5 },
    { id: 'k7', title: 'Work-Life Balance', type: 'wellness', x: 72, y: 28, xMobile: 20, yMobile: 55, color: 'bg-red-300', icon: Heart, category: 'wellness', relatedTo: ['k1', 'k4', 'k10'], affinity: 0.7 },
    { id: 'new', title: 'Scalable APIs', type: 'video', x: 50, y: 50, xMobile: 45, yMobile: 47, color: 'bg-teal-300', icon: Youtube, category: 'new', relatedTo: ['k1', 'k2', 'k5', 'k11'], affinity: 1.0 },
    { id: 'k8', title: 'Stress Management', type: 'health', x: 25, y: 68, xMobile: 70, yMobile: 55, color: 'bg-indigo-300', icon: Shield, category: 'wellness', relatedTo: ['k4', 'k9', 'new'], affinity: 0.85 },
    { id: 'k9', title: 'Mindfulness Practice', type: 'mental', x: 75, y: 72, xMobile: 20, yMobile: 70, color: 'bg-cyan-300', icon: Activity, category: 'wellness', relatedTo: ['k6', 'k8', 'k10'], affinity: 0.6 },
    { id: 'k10', title: 'Creative Projects', type: 'personal', x: 18, y: 85, xMobile: 70, yMobile: 70, color: 'bg-lime-300', icon: Lightbulb, category: 'personal', relatedTo: ['k7', 'k9', 'k11'], affinity: 0.4 },
    { id: 'k11', title: 'Side Business', type: 'entrepreneurship', x: 50, y: 88, xMobile: 20, yMobile: 85, color: 'bg-amber-300', icon: DollarSign, category: 'personal', relatedTo: ['k10', 'new', 'k12'], affinity: 0.75 },
    { id: 'k12', title: 'Family Time', type: 'relationships', x: 82, y: 82, xMobile: 70, yMobile: 85, color: 'bg-violet-300', icon: Users, category: 'personal', relatedTo: ['k11', 'k5', 'k3'], affinity: 0.3 },
  ]

  // Emotional patterns
  const emotionalPatterns: Insight[] = [
    {
      id: 'e1',
      title: 'Confidence Surge',
      description: 'Technical learning directly boosts your leadership confidence',
      impact: '+45% self-assurance',
      icon: Flame,
      color: 'from-orange-500 to-red-500',
      type: 'emotional',
      percentage: 78
    },
    {
      id: 'e2',
      title: 'Anxiety Triggers',
      description: 'New challenges spike stress but fuel growth',
      impact: 'Manageable with mindfulness',
      icon: AlertCircle,
      color: 'from-yellow-500 to-orange-500',
      type: 'emotional',
      percentage: 62
    },
    {
      id: 'e3',
      title: 'Joy Patterns',
      description: 'Learning + creating = peak happiness state',
      impact: 'Optimal flow achieved',
      icon: Smile,
      color: 'from-green-500 to-emerald-500',
      type: 'emotional',
      percentage: 88
    },
  ]

  // Enhanced insights
  const insights: Insight[] = [
    {
      id: 'i1',
      title: 'Career Acceleration Path',
      description: 'This API knowledge + your leadership skills = Senior Architect role ready',
      impact: '$65K salary increase potential',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      type: 'career',
      percentage: 92
    },
    {
      id: 'i2',
      title: 'Stress-Performance Balance',
      description: 'Your stress peaks before breakthroughs. New content shows how to maintain peak without burnout.',
      impact: '2x productivity, 50% less stress',
      icon: Activity,
      color: 'from-purple-500 to-pink-500',
      type: 'psychological',
      percentage: 75
    },
    {
      id: 'i3',
      title: 'Network Effect Opportunity',
      description: 'Sarah and Michael are working on similar problems - collaboration opportunity detected',
      impact: 'Potential partnership worth $30K',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      type: 'relationship',
      percentage: 83
    },
  ]

  const runIngestionDemo = async () => {
    // Reset states
    setShowModal(false)
    setVideoLink('')
    setIsProcessing(false)
    setCurrentMessageIndex(0)
    setShowConnections(false)
    setShowTransformation(false)
    setShowInsights(false)
    setShowGlow(false)
    setSelectedNode(null)
    setActiveInsight(0)
    setShowMobileSidebar(false)

    // Wait and show modal
    await new Promise(resolve => setTimeout(resolve, 2000))
    setShowModal(true)
    
    // Type the video link
    await new Promise(resolve => setTimeout(resolve, 1000))
    const link = 'https://youtube.com/watch?v=scalable-apis-masterclass'
    for (let i = 0; i <= link.length; i++) {
      setVideoLink(link.slice(0, i))
      await new Promise(resolve => setTimeout(resolve, 40))
    }

    // Start processing
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsProcessing(true)

    // Show processing messages
    for (let i = 0; i < processingMessages.length; i++) {
      setCurrentMessageIndex(i)
      await new Promise(resolve => setTimeout(resolve, 1800))
    }

    // Close modal and show transformation
    setShowModal(false)
    setIsProcessing(false)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Show connections first
    setShowConnections(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Add new node and glow affected connections
    setShowTransformation(true)
    setShowGlow(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show insights
    setShowInsights(true)
    
    // On mobile, show sidebar after insights
    if (isMobile) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setShowMobileSidebar(true)
    }
    
    // Cycle through tabs
    await new Promise(resolve => setTimeout(resolve, 4000))
    setSelectedTab('emotions')
    await new Promise(resolve => setTimeout(resolve, 4000))
    setSelectedTab('people')
    await new Promise(resolve => setTimeout(resolve, 4000))
    setSelectedTab('insights')

    // Hold final state
    await new Promise(resolve => setTimeout(resolve, 3000))
  }

  useEffect(() => {
    runIngestionDemo()
    const interval = setInterval(runIngestionDemo, 35000)
    return () => clearInterval(interval)
  }, [isMobile])

  const visibleNodes = showTransformation ? knowledgeNodes : knowledgeNodes.filter(n => n.id !== 'new')

  return React.createElement(
    'section',
    { className: "container mx-auto px-4 md:px-6 py-10 md:py-20" },
    React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "relative max-w-7xl mx-auto"
      },
      React.createElement(
        'div',
        { className: "glass-card rounded-xl overflow-hidden backdrop-blur-sm relative" },
        React.createElement(
          'div',
          { className: "flex items-center justify-between p-3 md:p-4 border-b border-polygon-border" },
          React.createElement(
            'div',
            { className: "flex items-center space-x-2" },
            React.createElement('div', { className: "w-3 h-3 rounded-full bg-red-500" }),
            React.createElement('div', { className: "w-3 h-3 rounded-full bg-yellow-500" }),
            React.createElement('div', { className: "w-3 h-3 rounded-full bg-green-500" })
          ),
          React.createElement(
            'span',
            { className: "text-xs md:text-sm text-polygon-text-secondary" },
            'Wivvy - Your Second Brain'
          )
        ),
        React.createElement(
          'div',
          { className: `${isMobile ? 'block' : 'flex'} h-[600px] md:h-[700px] relative` },
          // Main graph area
          React.createElement(
            'div',
            { className: "flex-1 relative overflow-hidden bg-gray-50 h-full" },
            
            // Miro-style grid background
            React.createElement(
              'div',
              { 
                className: "absolute inset-0",
                style: {
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: isMobile ? '20px 20px' : '25px 25px'
                }
              }
            ),

            // Add button
            React.createElement(
              motion.button,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                onClick: () => setShowModal(true),
                className: `absolute ${isMobile ? 'top-4 right-4' : 'top-6 right-6'} bg-blue-500 hover:bg-blue-600 text-white ${isMobile ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} rounded-lg flex items-center gap-2 z-10 shadow-lg`,
                animate: !showModal && !showConnections ? {
                  scale: [1, 1.05, 1],
                } : {},
                transition: {
                  duration: 2,
                  repeat: !showModal && !showConnections ? Infinity : 0,
                  repeatDelay: 1
                }
              },
              React.createElement(Plus, { size: isMobile ? 16 : 20 }),
              isMobile ? 'Add' : 'Add Content'
            ),

            // Knowledge graph SVG for connections
            React.createElement(
              'svg',
              { 
                className: "absolute inset-0 w-full h-full pointer-events-none",
                style: { zIndex: 1 }
              },
              // Connection lines
              React.createElement(
                AnimatePresence,
                null,
                showConnections && visibleNodes.map(node => 
                  node.relatedTo?.map((relatedId) => {
                    const toNode = visibleNodes.find(n => n.id === relatedId)
                    if (!toNode) return null

                    const isAffected = showGlow && (node.affinity > 0.7 || toNode.affinity > 0.7)
                    const glowIntensity = showGlow ? Math.max(node.affinity || 0, toNode.affinity || 0) : 0

                    const x1 = isMobile && node.xMobile ? node.xMobile : node.x
                    const y1 = isMobile && node.yMobile ? node.yMobile : node.y
                    const x2 = isMobile && toNode.xMobile ? toNode.xMobile : toNode.x
                    const y2 = isMobile && toNode.yMobile ? toNode.yMobile : toNode.y

                    return React.createElement(motion.line, {
                      key: `${node.id}-${relatedId}`,
                      x1: `${x1}%`,
                      y1: `${y1}%`,
                      x2: `${x2}%`,
                      y2: `${y2}%`,
                      stroke: isAffected ? `rgba(251, 146, 60, ${0.3 + glowIntensity * 0.5})` : "rgba(0,0,0,0.2)",
                      strokeWidth: isAffected ? (isMobile ? 1.5 : 2) + glowIntensity : 1,
                      initial: { pathLength: 0, opacity: 0 },
                      animate: { 
                        pathLength: 1, 
                        opacity: 1,
                      },
                      transition: { 
                        duration: 1,
                      }
                    })
                  })
                )
              )
            ),

            // Knowledge nodes (Miro-style sticky notes)
            React.createElement(
              'div',
              { className: "absolute inset-0", style: { zIndex: 2 } },
              visibleNodes.map((node) => {
                const isAffected = showGlow && node.affinity > 0.5
                const glowScale = showGlow ? 1 + (node.affinity * 0.2) : 1
                
                const xPos = isMobile && node.xMobile ? node.xMobile : node.x
                const yPos = isMobile && node.yMobile ? node.yMobile : node.y
                
                return React.createElement(
                  motion.div,
                  {
                    key: node.id,
                    className: "absolute",
                    style: {
                      left: `${xPos}%`,
                      top: `${yPos}%`,
                      transform: 'translate(-50%, -50%)'
                    },
                    initial: { 
                      scale: node.id === 'new' ? 0 : 1,
                      opacity: node.id === 'new' ? 0 : 1
                    },
                    animate: {
                      scale: node.id === 'new' && showTransformation ? glowScale : isAffected ? glowScale : 1,
                      opacity: 1
                    },
                    transition: { 
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 1
                    },
                    onHoverStart: () => !isMobile && setHoveredNode(node.id),
                    onHoverEnd: () => !isMobile && setHoveredNode(null),
                    onClick: () => setSelectedNode(node.id)
                  },
                  React.createElement(
                    motion.div,
                    {
                      animate: {
                        scale: hoveredNode === node.id ? 1.05 : 1,
                        rotate: hoveredNode === node.id ? -2 : 0,
                      },
                      className: "relative cursor-pointer"
                    },
                    // Shadow for depth
                    React.createElement(
                      'div',
                      { 
                        className: `absolute inset-0 bg-black/10 rounded-lg transform translate-x-1 translate-y-1`,
                        style: { zIndex: -1 }
                      }
                    ),
                    
                    // Sticky note
                    React.createElement(
                      'div',
                      {
                        className: `${node.color} ${isMobile ? 'p-2' : 'p-4'} rounded-lg shadow-md relative`,
                        style: { 
                          width: isMobile ? '100px' : '140px',
                          filter: isAffected ? 'brightness(1.1)' : 'none',
                          boxShadow: isAffected ? `0 0 20px rgba(251, 146, 60, ${node.affinity})` : undefined
                        }
                      },
                      React.createElement(
                        'div',
                        { className: isMobile ? "space-y-1" : "space-y-2" },
                        React.createElement(node.icon, { size: isMobile ? 18 : 24, className: "text-gray-800" }),
                        React.createElement(
                          'div',
                          { className: `${isMobile ? 'text-xs' : 'text-sm'} font-semibold text-gray-900 leading-tight` },
                          node.title
                        )
                      ),
                      // Affinity indicator
                      isAffected && React.createElement(
                        'div',
                        { className: `absolute -top-2 -right-2 bg-orange-500 rounded-full ${isMobile ? 'w-6 h-6 text-xs' : 'w-8 h-8 text-xs'} flex items-center justify-center font-bold text-white shadow-md` },
                        Math.round(node.affinity * 100) + '%'
                      )
                    )
                  )
                )
              })
            ),

            // Mobile bottom sheet trigger
            isMobile && showInsights && React.createElement(
              motion.button,
              {
                initial: { y: 100 },
                animate: { y: 0 },
                onClick: () => setShowMobileSidebar(true),
                className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-3 flex items-center gap-2 z-10"
              },
              React.createElement(Sparkles, { size: 20, className: "text-blue-600" }),
              React.createElement('span', { className: "text-sm font-medium text-gray-800" }, 'View Insights')
            )
          ),

          // Desktop Sidebar / Mobile Bottom Sheet
          !isMobile ? React.createElement(
            'div',
            { className: "w-96 border-l border-gray-200 bg-white flex flex-col" },
            // Tabs
            React.createElement(
              'div',
              { className: "flex border-b border-gray-200" },
              ['insights', 'emotions', 'people'].map(tab => 
                React.createElement(
                  'button',
                  {
                    key: tab,
                    onClick: () => setSelectedTab(tab as any),
                    className: `flex-1 px-4 py-3 text-sm font-medium capitalize transition-colors ${
                      selectedTab === tab 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`
                  },
                  tab
                )
              )
            ),

            // Tab content
            React.createElement(
              'div',
              { className: "flex-1 overflow-y-auto p-4 space-y-4" },
              // Insights tab
              selectedTab === 'insights' && insights.map((insight, index) => 
                React.createElement(
                  motion.div,
                  {
                    key: insight.id,
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: showInsights ? 1 : 0, x: showInsights ? 0 : 20 },
                    transition: { delay: index * 0.1 },
                    className: "bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100"
                  },
                  React.createElement(
                    'div',
                    { className: "flex items-start gap-3" },
                    React.createElement(
                      'div',
                      { className: `p-2 rounded-lg bg-gradient-to-r ${insight.color}` },
                      React.createElement(insight.icon, { size: 20, className: "text-white" })
                    ),
                    React.createElement(
                      'div',
                      { className: "flex-1" },
                      React.createElement('h4', { className: "font-semibold text-sm text-gray-900" }, insight.title),
                      React.createElement('p', { className: "text-xs text-gray-600 mt-1" }, insight.description)
                    )
                  ),
                  React.createElement(
                    'div',
                    { className: "space-y-2" },
                    React.createElement(
                      'div',
                      { className: "flex justify-between text-xs" },
                      React.createElement('span', { className: "text-gray-500" }, 'Impact'),
                      React.createElement('span', { className: "text-blue-600 font-medium" }, insight.impact)
                    ),
                    insight.percentage && React.createElement(
                      'div',
                      { className: "w-full bg-gray-200 rounded-full h-2" },
                      React.createElement(
                        motion.div,
                        {
                          className: `bg-gradient-to-r ${insight.color} h-2 rounded-full`,
                          initial: { width: '0%' },
                          animate: { width: showInsights ? `${insight.percentage}%` : '0%' },
                          transition: { delay: index * 0.1 + 0.3, duration: 0.8 }
                        }
                      )
                    )
                  )
                )
              ),

              // Emotions tab
              selectedTab === 'emotions' && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'div',
                  { className: "text-sm text-gray-600 mb-4" },
                  'Emotional patterns detected from your content'
                ),
                emotionalPatterns.map((pattern, index) => 
                  React.createElement(
                    motion.div,
                    {
                      key: pattern.id,
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: showInsights ? 1 : 0, x: showInsights ? 0 : 20 },
                      transition: { delay: index * 0.1 },
                      className: "bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100"
                    },
                    React.createElement(
                      'div',
                      { className: "flex items-center gap-3" },
                      React.createElement(
                        'div',
                        { className: `p-2 rounded-lg bg-gradient-to-r ${pattern.color}` },
                        React.createElement(pattern.icon, { size: 20, className: "text-white" })
                      ),
                      React.createElement(
                        'div',
                        { className: "flex-1" },
                        React.createElement('h4', { className: "font-semibold text-sm text-gray-900" }, pattern.title),
                        React.createElement('p', { className: "text-xs text-gray-600 mt-1" }, pattern.description)
                      ),
                      React.createElement(
                        'div',
                        { className: "text-2xl font-bold text-blue-600" },
                        pattern.percentage + '%'
                      )
                    ),
                    React.createElement(
                      'div',
                      { className: "flex items-center gap-2 text-xs" },
                      React.createElement(ArrowUpRight, { size: 12, className: "text-green-600" }),
                      React.createElement('span', { className: "text-gray-600" }, pattern.impact)
                    )
                  )
                )
              ),

              // People tab
              selectedTab === 'people' && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'div',
                  { className: "text-sm text-gray-600 mb-4" },
                  'People connected to this content'
                ),
                people.map((person, index) => 
                  React.createElement(
                    motion.div,
                    {
                      key: person.id,
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: showInsights ? 1 : 0, x: showInsights ? 0 : 20 },
                      transition: { delay: index * 0.1 },
                      className: "bg-gray-50 rounded-lg p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100"
                    },
                    React.createElement(
                      'div',
                      { className: "text-3xl" },
                      person.avatar
                    ),
                    React.createElement(
                      'div',
                      { className: "flex-1" },
                      React.createElement('h4', { className: "font-semibold text-sm text-gray-900" }, person.name),
                      React.createElement('p', { className: "text-xs text-gray-600" }, person.role)
                    ),
                    React.createElement(
                      'div',
                      { className: "text-right" },
                      React.createElement(
                        'div',
                        { className: "text-xs text-gray-500 mb-1" },
                        'Connection'
                      ),
                      React.createElement(
                        'div',
                        { className: "flex items-center gap-2" },
                        React.createElement(
                          'div',
                          { className: "w-16 bg-gray-200 rounded-full h-2" },
                          React.createElement(
                            motion.div,
                            {
                              className: `bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full`,
                              initial: { width: '0%' },
                              animate: { width: showInsights ? `${person.connectionStrength}%` : '0%' },
                              transition: { delay: index * 0.1 + 0.3, duration: 0.8 }
                            }
                          )
                        ),
                        React.createElement(
                          'span',
                          { className: "text-xs font-medium text-gray-700" },
                          person.connectionStrength + '%'
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  motion.button,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "w-full mt-4 p-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  },
                  React.createElement(UserPlus, { size: 16 }),
                  'Add Connection'
                )
              )
            )
          ) : null,

          // Mobile Bottom Sheet
          isMobile && React.createElement(
            AnimatePresence,
            null,
            showMobileSidebar && React.createElement(
              motion.div,
              {
                initial: { y: '100%' },
                animate: { y: 0 },
                exit: { y: '100%' },
                transition: { type: 'spring', damping: 30 },
                className: "fixed inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-2xl z-50 max-h-[70vh]"
              },
              // Handle
              React.createElement(
                'div',
                { 
                  className: "p-4 border-b border-gray-200",
                  onClick: () => setShowMobileSidebar(false)
                },
                React.createElement('div', { className: "w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3" }),
                React.createElement(
                  'div',
                  { className: "flex items-center justify-between" },
                  React.createElement('h3', { className: "text-lg font-semibold text-gray-900" }, 'Insights'),
                  React.createElement(ChevronUp, { size: 20, className: "text-gray-500" })
                )
              ),
              // Tabs
              React.createElement(
                'div',
                { className: "flex border-b border-gray-200" },
                ['insights', 'emotions', 'people'].map(tab => 
                  React.createElement(
                    'button',
                    {
                      key: tab,
                      onClick: () => setSelectedTab(tab as any),
                      className: `flex-1 px-4 py-3 text-sm font-medium capitalize transition-colors ${
                        selectedTab === tab 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-600'
                      }`
                    },
                    tab
                  )
                )
              ),
              // Content
              React.createElement(
                'div',
                { className: "overflow-y-auto p-4 space-y-4 max-h-[50vh]" },
                selectedTab === 'insights' && insights.map((insight, index) => 
                  React.createElement(
                    'div',
                    {
                      key: insight.id,
                      className: "bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100"
                    },
                    React.createElement(
                      'div',
                      { className: "flex items-start gap-3" },
                      React.createElement(
                        'div',
                        { className: `p-2 rounded-lg bg-gradient-to-r ${insight.color}` },
                        React.createElement(insight.icon, { size: 18, className: "text-white" })
                      ),
                      React.createElement(
                        'div',
                        { className: "flex-1" },
                        React.createElement('h4', { className: "font-semibold text-sm text-gray-900" }, insight.title),
                        React.createElement('p', { className: "text-xs text-gray-600 mt-1" }, insight.description)
                      )
                    ),
                    React.createElement(
                      'div',
                      { className: "space-y-2" },
                      React.createElement(
                        'div',
                        { className: "flex justify-between text-xs" },
                        React.createElement('span', { className: "text-gray-500" }, 'Impact'),
                        React.createElement('span', { className: "text-blue-600 font-medium" }, insight.impact)
                      )
                    )
                  )
                ),
                selectedTab === 'emotions' && emotionalPatterns.map((pattern) => 
                  React.createElement(
                    'div',
                    {
                      key: pattern.id,
                      className: "bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100"
                    },
                    React.createElement(
                      'div',
                      { className: "flex items-center gap-3" },
                      React.createElement(
                        'div',
                        { className: `p-2 rounded-lg bg-gradient-to-r ${pattern.color}` },
                        React.createElement(pattern.icon, { size: 18, className: "text-white" })
                      ),
                      React.createElement(
                        'div',
                        { className: "flex-1" },
                        React.createElement('h4', { className: "font-semibold text-sm text-gray-900" }, pattern.title),
                        React.createElement('p', { className: "text-xs text-gray-600 mt-1" }, pattern.description)
                      ),
                      React.createElement(
                        'div',
                        { className: "text-xl font-bold text-blue-600" },
                        pattern.percentage + '%'
                      )
                    )
                  )
                ),
                selectedTab === 'people' && people.map((person) => 
                  React.createElement(
                    'div',
                    {
                      key: person.id,
                      className: "bg-gray-50 rounded-lg p-3 flex items-center gap-3 border border-gray-100"
                    },
                    React.createElement(
                      'div',
                      { className: "text-2xl" },
                      person.avatar
                    ),
                    React.createElement(
                      'div',
                      { className: "flex-1" },
                      React.createElement('h4', { className: "font-semibold text-sm text-gray-900" }, person.name),
                      React.createElement('p', { className: "text-xs text-gray-600" }, person.role)
                    ),
                    React.createElement(
                      'span',
                      { className: "text-xs font-medium text-gray-700" },
                      person.connectionStrength + '%'
                    )
                  )
                )
              )
            )
          ),

          // Modal
          React.createElement(
            AnimatePresence,
            null,
            showModal && React.createElement(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 p-4",
                onClick: () => !isProcessing && setShowModal(false)
              },
              React.createElement(
                motion.div,
                {
                  initial: { scale: 0.9, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.9, opacity: 0 },
                  className: `bg-white rounded-xl p-6 w-full ${isMobile ? 'max-w-sm' : 'max-w-md'} shadow-xl`,
                  onClick: (e: React.MouseEvent) => e.stopPropagation()
                },
                !isProcessing ? React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(
                    'div',
                    { className: "flex items-center justify-between mb-4" },
                    React.createElement('h3', { className: "text-lg font-semibold text-gray-900" }, 'Add to Your Mind'),
                    React.createElement(
                      'button',
                      {
                        onClick: () => setShowModal(false),
                        className: "text-gray-400 hover:text-gray-600 transition-colors"
                      },
                      React.createElement(X, { size: 20 })
                    )
                  ),
                  
                  React.createElement(
                    'div',
                    { className: "space-y-4" },
                    React.createElement(
                      'div',
                      null,
                      React.createElement(
                        'label',
                        { className: "text-sm text-gray-600 mb-2 block" },
                        'Paste a link, type a thought, or upload a file'
                      ),
                      React.createElement('input', {
                        type: "text",
                        value: videoLink,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setVideoLink(e.target.value),
                        placeholder: "https://...",
                        className: "w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                      })
                    ),
                    
                    React.createElement(
                      'div',
                      { className: `flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3` },
                      React.createElement(
                        'button',
                        { className: "flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors" },
                        React.createElement(Brain, { size: 18, className: "text-gray-600" }),
                        'Quick Thought'
                      ),
                      React.createElement(
                        'button',
                        { className: "flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors" },
                        React.createElement(FileText, { size: 18, className: "text-gray-600" }),
                        'Upload File'
                      )
                    ),
                    
                    React.createElement(
                      'button',
                      { 
                        onClick: () => setIsProcessing(true),
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                      },
                      React.createElement(Sparkles, { size: 18 }),
                      'Add to Mind'
                    )
                  )
                ) : React.createElement(
                  'div',
                  { className: "text-center py-8" },
                  React.createElement(
                    motion.div,
                    {
                      animate: { rotate: 360 },
                      transition: { duration: 3, repeat: Infinity, ease: "linear" },
                      className: "inline-block mb-6"
                    },
                    processingMessages[currentMessageIndex].icon && React.createElement(
                      processingMessages[currentMessageIndex].icon,
                      {
                        size: isMobile ? 36 : 48,
                        className: processingMessages[currentMessageIndex].color
                      }
                    )
                  ),
                  
                  React.createElement(
                    motion.p,
                    {
                      key: currentMessageIndex,
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className: `${isMobile ? 'text-base' : 'text-lg'} font-medium text-gray-800 mb-2`
                    },
                    processingMessages[currentMessageIndex].text
                  ),
                  
                  React.createElement(
                    'div',
                    { className: "flex justify-center gap-1 mt-4" },
                    processingMessages.map((_, i) => 
                      React.createElement(motion.div, {
                        key: i,
                        className: `h-1 rounded-full transition-all ${
                          i <= currentMessageIndex ? 'w-8 bg-blue-500' : 'w-1 bg-gray-300'
                        }`
                      })
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
}