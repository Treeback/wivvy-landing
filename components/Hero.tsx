'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart3 } from 'lucide-react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-50 via-purple-50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 via-indigo-50 to-transparent rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/3" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Introducing the future of user analytics</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-center leading-tight tracking-tight"
          >
            <span className="text-gray-900">Understand the</span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                emotional why
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-0 h-4 bg-gradient-to-r from-indigo-100 to-purple-100 -z-10 rounded"
              />
            </span>
            <br />
            <span className="text-gray-900">behind every decision</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-center leading-relaxed mt-8"
          >
            Wivvy transforms behavioral data into deep psychographic insights, 
            revealing what your users feel—not just what they click.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              variant="primary" 
              className="group px-8 py-4 text-base font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Free Trial
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="secondary" 
              className="px-8 py-4 text-base font-medium border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm"
          >
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
              <div>
                <div className="font-semibold text-gray-900">47% higher engagement</div>
                <div className="text-gray-500">average improvement</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-indigo-600">3.2x</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Better conversion</div>
                <div className="text-gray-500">than traditional analytics</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Abstract visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl"
        >
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent" />
            <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path 
                d="M0,60 C150,20 350,80 600,60 C850,40 1050,100 1200,60 L1200,120 L0,120 Z" 
                fill="url(#waveGradient)" 
                opacity="0.1"
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero