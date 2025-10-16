'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Brain, Sparkles, TrendingUp, Target, DollarSign, AlertCircle, Folder, Hash, BarChart3, CheckCircle2, ArrowUp, ArrowDown, Activity, Users, ChevronDown, Search, Settings, Calendar, Command } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface Project {
  id: string
  name: string
  icon: any
  health: number
  momentum: 'up' | 'down' | 'stable'
  kpis: {
    name: string
    value: string | number
    type: 'currency' | 'percentage' | 'number'
    change: number
    target?: string | number
  }[]
  lastUpdate: string
  status: 'active' | 'at-risk' | 'healthy'
}

export default function AppScreenshot() {
  const [activeProject, setActiveProject] = useState('p1')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [animatedKPIs, setAnimatedKPIs] = useState<Record<string, boolean>>({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects: Project[] = [
    {
      id: 'p1',
      name: 'SaaS Product',
      icon: Folder,
      health: 85,
      momentum: 'up',
      status: 'healthy',
      lastUpdate: '2 hours ago',
      kpis: [
        { name: 'MRR', value: '$12,450', type: 'currency', change: 15, target: '$15,000' },
        { name: 'Active Users', value: 2841, type: 'number', change: 8 },
        { name: 'Churn Rate', value: '5.2%', type: 'percentage', change: -2 },
        { name: 'NPS Score', value: 72, type: 'number', change: 5 }
      ]
    },
    {
      id: 'p2',
      name: 'AI Consulting',
      icon: Brain,
      health: 92,
      momentum: 'up',
      status: 'healthy',
      lastUpdate: '1 day ago',
      kpis: [
        { name: 'Revenue', value: '$8,200', type: 'currency', change: 28 },
        { name: 'Client Projects', value: 3, type: 'number', change: 0 },
        { name: 'Pipeline Value', value: '$45,000', type: 'currency', change: 12 },
        { name: 'Utilization', value: '78%', type: 'percentage', change: 5 }
      ]
    },
    {
      id: 'p3',
      name: 'Content Business',
      icon: BarChart3,
      health: 67,
      momentum: 'down',
      status: 'at-risk',
      lastUpdate: '5 hours ago',
      kpis: [
        { name: 'Monthly Views', value: '125K', type: 'number', change: -8 },
        { name: 'Subscribers', value: 5420, type: 'number', change: -3 },
        { name: 'Engagement Rate', value: '3.2%', type: 'percentage', change: -12 },
        { name: 'Ad Revenue', value: '$1,850', type: 'currency', change: -15 }
      ]
    }
  ]

  const currentProject = projects.find(p => p.id === activeProject) || projects[0]

  useEffect(() => {
    // Animate KPIs when project changes
    const newAnimated: Record<string, boolean> = {}
    currentProject.kpis.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedKPIs(prev => ({ ...prev, [`${currentProject.id}-${index}`]: true }))
      }, index * 100)
    })
    setAnimatedKPIs(newAnimated)
  }, [activeProject])

  const runDemo = async () => {
    // Cycle through projects
    await new Promise(resolve => setTimeout(resolve, 3000))
    setActiveProject('p2')
    
    await new Promise(resolve => setTimeout(resolve, 4000))
    setActiveProject('p3')
    
    await new Promise(resolve => setTimeout(resolve, 3000))
    setShowCreateModal(true)
    
    await new Promise(resolve => setTimeout(resolve, 3000))
    setShowCreateModal(false)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    setActiveProject('p1')
  }

  useEffect(() => {
    runDemo()
    const interval = setInterval(runDemo, 20000)
    return () => clearInterval(interval)
  }, [])

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
        { className: "bg-[#0C0C0C] rounded-xl overflow-hidden border border-[#1A1A1A] shadow-2xl" },
        
        // Linear-style header
        React.createElement(
          'div',
          { className: "flex items-center justify-between h-12 px-4 border-b border-[#1A1A1A] bg-[#050505]" },
          React.createElement(
            'div',
            { className: "flex items-center gap-3" },
            React.createElement('div', { className: "w-3 h-3 rounded-full bg-[#FF5F57]" }),
            React.createElement('div', { className: "w-3 h-3 rounded-full bg-[#FFBD2E]" }),
            React.createElement('div', { className: "w-3 h-3 rounded-full bg-[#28CA42]" })
          ),
          React.createElement(
            'div',
            { className: "flex items-center gap-2" },
            React.createElement(Command, { size: 14, className: "text-gray-500" }),
            React.createElement('span', { className: "text-xs text-gray-500" }, 'K')
          )
        ),

        React.createElement(
          'div',
          { className: "flex h-[600px] md:h-[700px]" },
          
          // Linear-style sidebar
          React.createElement(
            'div',
            { className: "w-60 bg-[#0A0A0A] border-r border-[#1A1A1A] flex flex-col" },
            
            // User section
            React.createElement(
              'div',
              { className: "p-4 border-b border-[#1A1A1A]" },
              React.createElement(
                'div',
                { className: "flex items-center gap-3" },
                React.createElement(
                  'div',
                  { className: "w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-medium" },
                  'JD'
                ),
                React.createElement(
                  'div',
                  { className: "flex-1" },
                  React.createElement('div', { className: "text-sm font-medium text-white" }, 'Jane Doe'),
                  React.createElement('div', { className: "text-xs text-gray-500" }, 'Founder')
                )
              )
            ),

            // Search
            React.createElement(
              'div',
              { className: "p-3 border-b border-[#1A1A1A]" },
              React.createElement(
                'div',
                { className: "flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] rounded-md" },
                React.createElement(Search, { size: 14, className: "text-gray-500" }),
                React.createElement('input', {
                  type: "text",
                  placeholder: "Search",
                  className: "bg-transparent text-sm text-white placeholder-gray-500 outline-none flex-1"
                })
              )
            ),

            // Projects list
            React.createElement(
              'div',
              { className: "flex-1 overflow-y-auto" },
              React.createElement(
                'div',
                { className: "px-3 py-2" },
                React.createElement(
                  'div',
                  { className: "flex items-center justify-between mb-2" },
                  React.createElement('span', { className: "text-xs font-medium text-gray-500 uppercase tracking-wider" }, 'Projects'),
                  React.createElement(
                    motion.button,
                    {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: () => setShowCreateModal(true),
                      className: "text-gray-500 hover:text-white transition-colors"
                    },
                    React.createElement(Plus, { size: 14 })
                  )
                ),
                React.createElement(
                  'div',
                  { className: "space-y-1" },
                  projects.map(project => 
                    React.createElement(
                      motion.button,
                      {
                        key: project.id,
                        onClick: () => setActiveProject(project.id),
                        whileHover: { x: 2 },
                        className: `w-full flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors ${
                          activeProject === project.id 
                            ? 'bg-[#1A1A1A] text-white' 
                            : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]/50'
                        }`
                      },
                      React.createElement(project.icon, { size: 16 }),
                      React.createElement('span', { className: "text-sm flex-1 text-left" }, project.name),
                      project.status === 'at-risk' && React.createElement(
                        'span',
                        { className: "w-2 h-2 rounded-full bg-orange-500" }
                      )
                    )
                  )
                )
              ),

              // Bottom section
              React.createElement(
                'div',
                { className: "p-3 border-t border-[#1A1A1A]" },
                React.createElement(
                  'button',
                  { className: "flex items-center gap-2 px-2 py-1.5 text-sm text-gray-400 hover:text-white transition-colors" },
                  React.createElement(Settings, { size: 16 }),
                  'Settings'
                )
              )
            )
          ),

          // Main content area
          React.createElement(
            'div',
            { className: "flex-1 bg-[#0C0C0C] overflow-hidden" },
            
            // Project header
            React.createElement(
              'div',
              { className: "border-b border-[#1A1A1A] px-6 py-4" },
              React.createElement(
                'div',
                { className: "flex items-center justify-between" },
                React.createElement(
                  'div',
                  { className: "flex items-center gap-3" },
                  React.createElement(currentProject.icon, { size: 24, className: "text-white" }),
                  React.createElement(
                    'div',
                    null,
                    React.createElement('h1', { className: "text-xl font-semibold text-white" }, currentProject.name),
                    React.createElement(
                      'div',
                      { className: "flex items-center gap-4 mt-1" },
                      React.createElement(
                        'span',
                        { className: `text-sm ${currentProject.status === 'healthy' ? 'text-green-500' : currentProject.status === 'at-risk' ? 'text-orange-500' : 'text-gray-500'}` },
                        currentProject.status === 'healthy' ? '● Healthy' : currentProject.status === 'at-risk' ? '● At Risk' : '● Active'
                      ),
                      React.createElement(
                        'span',
                        { className: "text-sm text-gray-500" },
                        'Updated ',
                        currentProject.lastUpdate
                      )
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { className: "flex items-center gap-2" },
                  React.createElement(
                    'button',
                    { className: "px-3 py-1.5 bg-[#1A1A1A] text-white text-sm rounded-md hover:bg-[#2A2A2A] transition-colors" },
                    'Add KPI'
                  ),
                  React.createElement(
                    'button',
                    { className: "px-3 py-1.5 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors flex items-center gap-1" },
                    React.createElement(Sparkles, { size: 14 }),
                    'Get Insights'
                  )
                )
              )
            ),

            // Health & Momentum
            React.createElement(
              'div',
              { className: "px-6 py-4 border-b border-[#1A1A1A]" },
              React.createElement(
                'div',
                { className: "grid grid-cols-2 gap-4" },
                React.createElement(
                  'div',
                  { className: "bg-[#1A1A1A]/50 rounded-lg p-4" },
                  React.createElement(
                    'div',
                    { className: "flex items-center justify-between mb-2" },
                    React.createElement('span', { className: "text-sm text-gray-400" }, 'Project Health'),
                    React.createElement('span', { className: "text-2xl font-bold text-white" }, currentProject.health + '%')
                  ),
                  React.createElement(
                    'div',
                    { className: "w-full bg-[#2A2A2A] rounded-full h-2" },
                    React.createElement(
                      motion.div,
                      {
                        className: `h-2 rounded-full ${currentProject.health > 80 ? 'bg-green-500' : currentProject.health > 60 ? 'bg-yellow-500' : 'bg-red-500'}`,
                        initial: { width: '0%' },
                        animate: { width: `${currentProject.health}%` },
                        transition: { duration: 1, ease: "easeOut" }
                      }
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { className: "bg-[#1A1A1A]/50 rounded-lg p-4" },
                  React.createElement(
                    'div',
                    { className: "flex items-center justify-between mb-2" },
                    React.createElement('span', { className: "text-sm text-gray-400" }, 'Momentum'),
                    React.createElement(
                      'div',
                      { className: "flex items-center gap-1" },
                      currentProject.momentum === 'up' 
                        ? React.createElement(ArrowUp, { size: 20, className: "text-green-500" })
                        : currentProject.momentum === 'down'
                        ? React.createElement(ArrowDown, { size: 20, className: "text-red-500" })
                        : React.createElement(Activity, { size: 20, className: "text-yellow-500" }),
                      React.createElement(
                        'span',
                        { className: `text-lg font-bold ${currentProject.momentum === 'up' ? 'text-green-500' : currentProject.momentum === 'down' ? 'text-red-500' : 'text-yellow-500'}` },
                        currentProject.momentum === 'up' ? 'Rising' : currentProject.momentum === 'down' ? 'Falling' : 'Stable'
                      )
                    )
                  ),
                  React.createElement(
                    'div',
                    { className: "text-xs text-gray-500 mt-1" },
                    'Based on KPI trends over last 30 days'
                  )
                )
              )
            ),

            // KPIs Grid
            React.createElement(
              'div',
              { className: "p-6" },
              React.createElement('h2', { className: "text-lg font-semibold text-white mb-4" }, 'Key Performance Indicators'),
              React.createElement(
                'div',
                { className: "grid grid-cols-2 gap-4" },
                currentProject.kpis.map((kpi, index) => {
                  const kpiKey = `${currentProject.id}-${index}`
                  const isAnimated = animatedKPIs[kpiKey]
                  
                  return React.createElement(
                    motion.div,
                    {
                      key: kpiKey,
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: index * 0.1 },
                      className: "bg-[#1A1A1A]/30 rounded-lg p-4 border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors"
                    },
                    React.createElement(
                      'div',
                      { className: "flex items-start justify-between mb-3" },
                      React.createElement(
                        'div',
                        null,
                        React.createElement('div', { className: "text-sm text-gray-400 mb-1" }, kpi.name),
                        React.createElement(
                          motion.div,
                          {
                            className: "text-2xl font-bold text-white",
                            initial: { scale: 0.5, opacity: 0 },
                            animate: isAnimated ? { scale: 1, opacity: 1 } : {},
                            transition: { type: "spring", stiffness: 200 }
                          },
                          kpi.value
                        )
                      ),
                      React.createElement(
                        'div',
                        { className: `flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
                          kpi.change > 0 ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                        }` },
                        kpi.change > 0 ? React.createElement(ArrowUp, { size: 12 }) : React.createElement(ArrowDown, { size: 12 }),
                        Math.abs(kpi.change) + '%'
                      )
                    ),
                    kpi.target && React.createElement(
                      'div',
                      { className: "text-xs text-gray-500" },
                      'Target: ',
                      kpi.target
                    )
                  )
                })
              )
            ),

            // AI Insights preview
            React.createElement(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: currentProject.status === 'at-risk' ? 1 : 0, y: currentProject.status === 'at-risk' ? 0 : 20 },
                className: "mx-6 mb-6"
              },
              currentProject.status === 'at-risk' && React.createElement(
                'div',
                { className: "bg-orange-500/10 border border-orange-500/30 rounded-lg p-4" },
                React.createElement(
                  'div',
                  { className: "flex items-start gap-3" },
                  React.createElement(AlertCircle, { size: 20, className: "text-orange-500 mt-0.5" }),
                  React.createElement(
                    'div',
                    { className: "flex-1" },
                    React.createElement('h3', { className: "text-sm font-medium text-orange-500 mb-1" }, 'AI Alert: Project Needs Attention'),
                    React.createElement('p', { className: "text-sm text-gray-400" }, 
                      'Engagement metrics are declining. Consider pivoting content strategy or increasing marketing efforts.'
                    )
                  )
                )
              )
            )
          )
        ),

        // Create Project Modal
        React.createElement(
          AnimatePresence,
          null,
          showCreateModal && React.createElement(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",
              onClick: () => setShowCreateModal(false)
            },
            React.createElement(
              motion.div,
              {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                className: "bg-[#1A1A1A] rounded-lg p-6 w-full max-w-md border border-[#2A2A2A]",
                onClick: (e: React.MouseEvent) => e.stopPropagation()
              },
              React.createElement(
                'div',
                { className: "flex items-center justify-between mb-4" },
                React.createElement('h3', { className: "text-lg font-semibold text-white" }, 'Create New Project'),
                React.createElement(
                  'button',
                  {
                    onClick: () => setShowCreateModal(false),
                    className: "text-gray-400 hover:text-white transition-colors"
                  },
                  React.createElement(X, { size: 20 })
                )
              ),
              React.createElement(
                'div',
                { className: "space-y-4" },
                React.createElement('input', {
                  type: "text",
                  placeholder: "Project name",
                  className: "w-full px-3 py-2 bg-[#0C0C0C] border border-[#2A2A2A] rounded-md text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                }),
                React.createElement(
                  'div',
                  { className: "grid grid-cols-2 gap-2" },
                  ['SaaS', 'Consulting', 'Content', 'E-commerce'].map(type =>
                    React.createElement(
                      'button',
                      {
                        key: type,
                        className: "px-3 py-2 bg-[#0C0C0C] border border-[#2A2A2A] rounded-md text-sm text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
                      },
                      type
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { className: "bg-purple-500/10 border border-purple-500/30 rounded-lg p-3" },
                  React.createElement(
                    'div',
                    { className: "flex items-center gap-2 mb-2" },
                    React.createElement(Sparkles, { size: 16, className: "text-purple-500" }),
                    React.createElement('span', { className: "text-sm font-medium text-purple-500" }, 'AI will suggest KPIs')
                  ),
                  React.createElement('p', { className: "text-xs text-gray-400" }, 
                    'Based on your project type, we\'ll recommend the most important metrics to track'
                  )
                ),
                React.createElement(
                  'button',
                  { className: "w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors" },
                  'Create Project'
                )
              )
            )
          )
        )
      )
    )
  )
}