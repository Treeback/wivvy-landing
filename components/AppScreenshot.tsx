'use client'

import { motion } from 'framer-motion'
import { Plus, Link2, Brain, FileText, Mic } from 'lucide-react'

const AppScreenshot = () => {
  const nodes = [
    { id: 1, label: 'Idea', icon: Brain, x: 200, y: 150 },
    { id: 2, label: 'Memory', icon: Brain, x: 350, y: 100 },
    { id: 3, label: 'Meeting Note', icon: FileText, x: 300, y: 250 },
    { id: 4, label: 'Task', icon: FileText, x: 150, y: 300 },
    { id: 5, label: 'Link', icon: Link2, x: 450, y: 200 },
  ]

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
  ]

  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <div className="bg-wivvy-bg/50 border border-wivvy-grid rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="flex items-center justify-between p-4 border-b border-wivvy-grid">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-gray-400">Wivvy - Mind Graph</span>
          </div>

          <div className="flex h-[600px]">
            <div className="w-64 border-r border-wivvy-grid p-4 space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full gradient-blue text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 glow-blue"
              >
                <Plus size={20} />
                Ingest Now
              </motion.button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-wivvy-grid/30 hover:bg-wivvy-grid/50 cursor-pointer transition-colors">
                  <Brain size={18} className="text-wivvy-blue" />
                  <span className="text-sm">Thoughts</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-wivvy-grid/30 hover:bg-wivvy-grid/50 cursor-pointer transition-colors">
                  <FileText size={18} className="text-wivvy-blue" />
                  <span className="text-sm">Documents</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-wivvy-grid/30 hover:bg-wivvy-grid/50 cursor-pointer transition-colors">
                  <Link2 size={18} className="text-wivvy-blue" />
                  <span className="text-sm">Links</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-wivvy-grid/30 hover:bg-wivvy-grid/50 cursor-pointer transition-colors">
                  <Mic size={18} className="text-wivvy-blue" />
                  <span className="text-sm">Voice Notes</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative p-8">
              <svg className="absolute inset-0 w-full h-full">
                {connections.map((conn, i) => {
                  const fromNode = nodes.find(n => n.id === conn.from)
                  const toNode = nodes.find(n => n.id === conn.to)
                  if (!fromNode || !toNode) return null

                  return (
                    <motion.line
                      key={i}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                    />
                  )
                })}
                <defs>
                  <linearGradient id="gradient">
                    <stop offset="0%" stopColor="#4D8CFF" />
                    <stop offset="100%" stopColor="#7AA9FF" />
                  </linearGradient>
                </defs>
              </svg>

              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: node.x, top: node.y }}
                >
                  <div className="bg-wivvy-bg border border-wivvy-blue/50 rounded-lg p-4 hover:border-wivvy-blue transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <node.icon size={20} className="text-wivvy-blue" />
                      <span className="text-sm font-medium">{node.label}</span>
                    </div>
                    <div className="absolute -inset-4 bg-wivvy-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-80 border-l border-wivvy-grid p-4">
              <h3 className="text-sm font-medium mb-4 text-gray-300">AI Suggestions</h3>
              <div className="space-y-3">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-wivvy-grid/30 rounded-lg p-3 border border-wivvy-grid hover:border-wivvy-blue/50 transition-colors"
                >
                  <p className="text-sm text-gray-300">
                    Connect "Meeting Note" with "Q4 Planning" based on similar topics
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-wivvy-grid/30 rounded-lg p-3 border border-wivvy-grid hover:border-wivvy-blue/50 transition-colors"
                >
                  <p className="text-sm text-gray-300">
                    Your idea about "API redesign" relates to 3 previous thoughts
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AppScreenshot