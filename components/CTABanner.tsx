'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const marqueeRow1 = [
  'Hook Analysis', 'Pattern Matching', 'Hindi NLP', 'Trend Detection',
  '3-Second Retention Scoring', 'Cross-Platform Tracking', 'Cultural Signal Processing',
  'Engagement Prediction', 'Format Clustering', 'Emotion Mapping',
]

const marqueeRow2 = [
  'Creator Benchmarking', 'Niche Intelligence', 'Real-Time Monitoring', 'Geopolitical Triggers',
  'Story Arc Detection', 'Audience Sentiment', 'Virality Scoring', 'Content DNA Extraction',
  'Multi-Language Analysis', 'Delivery Style Classification',
]

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
      <section className="py-24 relative border-t border-white/[0.04] overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">The engine</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Powered by AI.
              <br />
              <span className="text-gray-500">Driven by patterns.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              We don&apos;t use generic AI. We train specialized models on Indian content —
              Hindi hooks, regional storytelling, cultural context — so the insights
              are specific, not surface-level.
            </p>
          </motion.div>
        </div>

        {/* Marquee rows */}
        <div className="space-y-4 py-4">
          {/* Row 1 → right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <motion.div
              animate={{ x: [0, -1600] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 whitespace-nowrap"
            >
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-gray-400 font-medium"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Row 2 ← left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <motion.div
              animate={{ x: [-1600, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 whitespace-nowrap"
            >
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-gray-400 font-medium"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="container mx-auto px-6 mt-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"
          >
            <span className="text-gray-600">&ldquo;</span>
            <span className="text-white">This is not a tool. </span>
            <span className="text-gradient-yellow">This is an advantage.</span>
            <span className="text-gray-600">&rdquo;</span>
          </motion.p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative" id="cta">
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
                {submitted ? 'You\'re in!' : 'Request Early Access'}
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
