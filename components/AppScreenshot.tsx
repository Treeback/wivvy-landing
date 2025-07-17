'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Youtube, Brain, Sparkles, Link2, TrendingUp, Zap, Clock, Users, Target, FileText, Lightbulb, Star } from 'lucide-react'
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
  color: string
  icon: any
  relatedTo?: string[]
}

export default function AppScreenshot() {
  const [showModal, setShowModal] = useState(false)
  const [videoLink, setVideoLink] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showConnections, setShowConnections] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  // Generate random particles data
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
  }, [])

  const processingMessages: ProcessingMessage[] = [
    { text: "Reading your mind... just kidding, reading the video!", icon: Brain, color: "text-polygon-purple" },
    { text: "Extracting golden nuggets of wisdom ✨", icon: Star, color: "text-polygon-yellow" },
    { text: "Connecting the dots in your knowledge universe", icon: Link2, color: "text-polygon-blue" },
    { text: "Finding patterns you didn't know existed", icon: TrendingUp, color: "text-polygon-green" },
    { text: "Organizing thoughts at the speed of light", icon: Zap, color: "text-polygon-pink" },
    { text: "Creating your personalized insight map", icon: Sparkles, color: "text-polygon-purple" },
  ]

  // Your existing knowledge nodes
  const knowledgeNodes: KnowledgeNode[] = [
    { id: 'k1', title: 'API Performance Meeting', type: 'meeting', x: 20, y: 30, color: 'from-blue-500 to-blue-600', icon: Users },
    { id: 'k2', title: 'System Design Goals', type: 'personal', x: 70, y: 20, color: 'from-green-500 to-green-600', icon: Target },
    { id: 'k3', title: 'Microservices Research', type: 'research', x: 40, y: 60, color: 'from-purple-500 to-purple-600', icon: FileText },
    { id: 'k4', title: 'Team Scaling Plans', type: 'planning', x: 80, y: 50, color: 'from-pink-500 to-pink-600', icon: TrendingUp },
    { id: 'k5', title: 'Q4 Technical Roadmap', type: 'document', x: 30, y: 80, color: 'from-yellow-500 to-yellow-600', icon: Clock },
    { id: 'new', title: 'Building Scalable APIs', type: 'video', x: 50, y: 45, color: 'from-red-500 to-red-600', icon: Youtube, relatedTo: ['k1', 'k2', 'k3', 'k4'] },
  ]

  const runIngestionDemo = async () => {
    // Reset states
    setShowModal(false)
    setVideoLink('')
    setIsProcessing(false)
    setCurrentMessageIndex(0)
    setShowConnections(false)
    setSelectedNode(null)

    // Wait and show modal
    await new Promise(resolve => setTimeout(resolve, 2000))
    setShowModal(true)
    
    // Type the video link
    await new Promise(resolve => setTimeout(resolve, 1000))
    const link = 'https://youtube.com/watch?v=scalable-apis-2024'
    for (let i = 0; i <= link.length; i++) {
      setVideoLink(link.slice(0, i))
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    // Start processing
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsProcessing(true)

    // Show processing messages
    for (let i = 0; i < processingMessages.length; i++) {
      setCurrentMessageIndex(i)
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    // Close modal and show connections
    setShowModal(false)
    setIsProcessing(false)
    await new Promise(resolve => setTimeout(resolve, 500))
    setShowConnections(true)
    
    // Auto-select the new video node
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSelectedNode('new')

    // Hold final state
    await new Promise(resolve => setTimeout(resolve, 8000))
  }

  useEffect(() => {
    runIngestionDemo()
    const interval = setInterval(runIngestionDemo, 25000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <div className="glass-card rounded-xl overflow-hidden backdrop-blur-sm relative">
          <div className="flex items-center justify-between p-4 border-b border-polygon-border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-polygon-text-secondary">Wivvy - Your Digital Mind</span>
          </div>

          <div className="h-[600px] relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-polygon-purple/5 via-transparent to-polygon-blue/5" />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-polygon-purple/20 rounded-full"
                  initial={{ 
                    x: `${particle.x}%`, 
                    y: `${particle.y}%`,
                    scale: particle.scale
                  }}
                  animate={{
                    y: [`${particle.y}%`, '-10%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay
                  }}
                />
              ))}
            </div>

            {/* Main content area - Knowledge Graph */}
            <div className="relative h-full p-8">
              {/* Add button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="absolute top-8 right-8 btn-primary flex items-center gap-2 z-10"
                animate={!showModal && !showConnections ? {
                  scale: [1, 1.05, 1],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: !showModal && !showConnections ? Infinity : 0,
                  repeatDelay: 1
                }}
              >
                <Plus size={20} />
                Add to Mind
              </motion.button>

              {/* Knowledge nodes */}
              <svg className="absolute inset-0 w-full h-full">
                {/* Connection lines */}
                <AnimatePresence>
                  {showConnections && knowledgeNodes.find(n => n.id === 'new')?.relatedTo?.map((relatedId, i) => {
                    const fromNode = knowledgeNodes.find(n => n.id === 'new')
                    const toNode = knowledgeNodes.find(n => n.id === relatedId)
                    if (!fromNode || !toNode) return null

                    return (
                      <motion.line
                        key={`${fromNode.id}-${toNode.id}`}
                        x1={`${fromNode.x}%`}
                        y1={`${fromNode.y}%`}
                        x2={`${toNode.x}%`}
                        y2={`${toNode.y}%`}
                        stroke="url(#gradient)"
                        strokeWidth={selectedNode === 'new' || hoveredNode === relatedId ? 3 : 1.5}
                        strokeDasharray={selectedNode === 'new' ? '0' : '5,5'}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: 1, 
                          opacity: selectedNode === 'new' || hoveredNode === relatedId ? 0.8 : 0.3 
                        }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    )
                  })}
                </AnimatePresence>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Knowledge nodes */}
              {knowledgeNodes.map((node) => (
                <motion.div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  initial={node.id === 'new' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                  animate={
                    node.id === 'new' && showConnections 
                      ? { scale: 1, opacity: 1 } 
                      : node.id !== 'new' 
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: node.id === 'new' ? 0.5 : 0 }}
                  onHoverStart={() => setHoveredNode(node.id)}
                  onHoverEnd={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(node.id)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredNode === node.id || selectedNode === node.id ? 1.1 : 1,
                    }}
                    className="relative"
                  >
                    {/* Glow effect */}
                    {(selectedNode === node.id || (node.id === 'new' && showConnections)) && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${node.color} rounded-full blur-xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    )}
                    
                    {/* Node content */}
                    <div className={`relative bg-gradient-to-r ${node.color} p-4 rounded-full shadow-lg`}>
                      <node.icon size={24} className="text-white" />
                    </div>
                    
                    {/* Label */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredNode === node.id || selectedNode === node.id || node.id === 'new' ? 1 : 0,
                        y: hoveredNode === node.id || selectedNode === node.id || node.id === 'new' ? 0 : 10
                      }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap"
                    >
                      <div className="bg-polygon-card px-3 py-1 rounded-lg text-xs font-medium">
                        {node.title}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Insight panel */}
              <AnimatePresence>
                {selectedNode === 'new' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute bottom-8 right-8 w-80 glass-card rounded-lg p-4"
                  >
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Lightbulb size={18} className="text-polygon-yellow" />
                      AI Insights
                    </h3>
                    <div className="space-y-2 text-sm text-polygon-text-secondary">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        This video perfectly complements your API performance discussions from last week&apos;s meeting.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        The scalability patterns align with your microservices research and Q4 roadmap goals.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        Consider applying these concepts to your team scaling plans.
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
              {showModal && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20"
                  onClick={() => !isProcessing && setShowModal(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="glass-card rounded-xl p-6 w-full max-w-md m-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {!isProcessing ? (
                      <React.Fragment>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">Add to Your Mind</h3>
                          <button
                            onClick={() => setShowModal(false)}
                            className="text-polygon-text-tertiary hover:text-white transition-colors"
                          >
                            <X size={20} />
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm text-polygon-text-secondary mb-2 block">
                              Paste a link, type a thought, or upload a file
                            </label>
                            <input
                              type="text"
                              value={videoLink}
                              onChange={(e) => setVideoLink(e.target.value)}
                              placeholder="https://..."
                              className="w-full px-4 py-3 bg-polygon-card border border-polygon-border rounded-lg focus:border-polygon-purple focus:outline-none transition-colors"
                            />
                          </div>
                          
                          <div className="flex gap-3">
                            <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                              <Brain size={18} />
                              Quick Thought
                            </button>
                            <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                              <FileText size={18} />
                              Upload File
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => setIsProcessing(true)}
                            className="w-full btn-primary flex items-center justify-center gap-2"
                          >
                            <Sparkles size={18} />
                            Add to Mind
                          </button>
                        </div>
                      </React.Fragment>
                    ) : (
                      <div className="text-center py-8">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="inline-block mb-6"
                        >
                          {processingMessages[currentMessageIndex].icon && React.createElement(
                            processingMessages[currentMessageIndex].icon,
                            {
                              size: 48,
                              className: processingMessages[currentMessageIndex].color
                            }
                          )}
                        </motion.div>
                        
                        <motion.p
                          key={currentMessageIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-lg font-medium mb-2"
                        >
                          {processingMessages[currentMessageIndex].text}
                        </motion.p>
                        
                        <div className="flex justify-center gap-1 mt-4">
                          {processingMessages.map((_, i) => (
                            <motion.div
                              key={i}
                              className={`h-1 rounded-full transition-all ${
                                i <= currentMessageIndex ? 'w-8 bg-polygon-purple' : 'w-1 bg-polygon-border'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}