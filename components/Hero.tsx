'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from './ui/Button'
import GraphAnimation from './GraphAnimation'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GraphAnimation />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Rebuild your mind's</span>
            <span className="block text-gradient">infrastructure.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your memories, thoughts, content, and conversations—captured, connected, 
            and organized in one intelligent space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="btn-primary group">
              Request Early Access
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              See how it works
              <ChevronDown className="animate-bounce" size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-polygon-bg to-transparent" />
    </section>
  )
}

export default Hero