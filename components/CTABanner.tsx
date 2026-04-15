'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu } from 'lucide-react'

export default function CTABanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <>
      {/* AI Section */}
      <section className="py-24 relative border-t border-white/[0.04]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sky-400/10 border border-sky-400/20 mb-8">
              <Cpu className="w-7 h-7 text-sky-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powered by AI. Driven by patterns.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              We use AI to analyze thousands of videos, but what we deliver is clarity — real
              insights into what works, what doesn&apos;t, and why.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative" id="cta">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/[0.04] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Start creating with clarity
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
              Join creators and teams who are no longer guessing what works.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-5 py-4 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/10 transition-all text-base"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg shadow-white/10 whitespace-nowrap"
              >
                {submitted ? 'You\'re in!' : 'Get Access'}
                {!submitted && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              </button>
            </form>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-emerald-400"
              >
                Welcome to Wivvy. Check your inbox for next steps.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
