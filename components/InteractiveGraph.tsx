'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const InteractiveGraph = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null)

  const nodes = [
    { id: 1, label: 'Product Launch', x: 30, y: 40, connections: [2, 3] },
    { id: 2, label: 'Marketing Strategy', x: 60, y: 20, connections: [1, 4] },
    { id: 3, label: 'User Research', x: 20, y: 70, connections: [1, 5] },
    { id: 4, label: 'Q4 Goals', x: 80, y: 50, connections: [2, 5] },
    { id: 5, label: 'Team Meeting', x: 50, y: 80, connections: [3, 4] },
  ]

  const insights = {
    1: 'This connects to your meeting last week about MVP features',
    2: 'Related to 3 previous campaigns you analyzed',
    3: 'Insights from 12 user interviews are linked here',
    4: 'Your quarterly review notes have similar themes',
    5: 'Action items from this are tracked in 4 tasks',
  }

  return (
    <section className="py-20 bg-wivvy-bg/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your mind, visualized
          </h2>
          <p className="text-xl text-gray-400">
            Hover over nodes to see how everything connects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 bg-wivvy-bg border border-wivvy-grid rounded-xl overflow-hidden">
            <svg className="absolute inset-0 w-full h-full">
              {nodes.map(node => (
                node.connections.map(targetId => {
                  const target = nodes.find(n => n.id === targetId)
                  if (!target || node.id > targetId) return null

                  return (
                    <motion.line
                      key={`${node.id}-${targetId}`}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${target.x}%`}
                      y2={`${target.y}%`}
                      stroke={activeNode === node.id || activeNode === targetId ? '#4D8CFF' : '#1B2330'}
                      strokeWidth={activeNode === node.id || activeNode === targetId ? '2' : '1'}
                      strokeDasharray={activeNode === node.id || activeNode === targetId ? '0' : '5,5'}
                      animate={{
                        opacity: activeNode === null || activeNode === node.id || activeNode === targetId ? 1 : 0.2
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )
                })
              ))}
            </svg>

            {nodes.map((node) => (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onHoverStart={() => setActiveNode(node.id)}
                onHoverEnd={() => setActiveNode(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`
                  px-4 py-2 rounded-lg border transition-all duration-300
                  ${activeNode === node.id 
                    ? 'bg-wivvy-blue/20 border-wivvy-blue text-white' 
                    : 'bg-wivvy-bg border-wivvy-grid text-gray-300 hover:border-wivvy-blue/50'
                  }
                `}>
                  <span className="text-sm font-medium">{node.label}</span>
                </div>

                <AnimatePresence>
                  {activeNode === node.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -40, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      className="absolute left-1/2 transform -translate-x-1/2 bg-wivvy-bg border border-wivvy-blue rounded-lg p-3 w-64 text-center"
                    >
                      <p className="text-sm text-gray-300">{insights[node.id as keyof typeof insights]}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveGraph