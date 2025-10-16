'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Button from './ui/Button'

const CTABanner = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-24 relative bg-gray-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 mb-6">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span>Limited time offer: 3 months free for early adopters</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to understand your users
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> like never before?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join forward-thinking teams using emotional intelligence to drive growth. 
            Start your free trial today.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="work@email.com"
              className="flex-1 px-5 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all"
              required
            />
            
            <Button 
              type="submit" 
              variant="primary" 
              className="group px-8 py-3 font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
            >
              {submitted ? 'Check your email!' : 'Start Free Trial'}
              {!submitted && <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </Button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: submitted ? 1 : 0 }}
            className="text-green-600 text-sm mb-8 flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Welcome to Wivvy! Check your inbox for next steps.
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-8">Trusted by innovative teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
              <div className="text-2xl font-bold text-gray-400">Shopify</div>
              <div className="text-2xl font-bold text-gray-400">Stripe</div>
              <div className="text-2xl font-bold text-gray-400">Notion</div>
              <div className="text-2xl font-bold text-gray-400">Linear</div>
              <div className="text-2xl font-bold text-gray-400">Figma</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner