'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
    <section className="py-20 bg-gradient-to-b from-polygon-bg to-polygon-bg/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Help us build Wivvy
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Early users get direct feedback loop + lifetime 40% discount
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 glass-card border border-polygon-border rounded-lg focus:border-polygon-purple focus:outline-none transition-all hover:border-polygon-purple/50"
              required
            />
            
            <Button type="submit" variant="primary" className="btn-primary">
              {submitted ? 'Thanks!' : 'Request Access'}
            </Button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: submitted ? 1 : 0 }}
            className="mt-4 text-green-400 text-sm"
          >
            We'll be in touch soon!
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner