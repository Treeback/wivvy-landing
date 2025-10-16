'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'

const ProblemStatement = () => {
  const problems = [
    {
      title: "Surface-level analytics",
      description: "You track clicks and conversions, but miss the deeper emotional drivers that actually influence behavior."
    },
    {
      title: "Static user personas", 
      description: "Demographics and segments can't capture the dynamic psychological states that drive real decisions."
    },
    {
      title: "Guesswork strategies",
      description: "Without emotional context, you're making critical product and marketing decisions based on incomplete data."
    }
  ]

  const solutions = [
    {
      title: "Emotional intelligence",
      description: "Decode sentiment, tone, and psychological patterns from every user interaction at scale."
    },
    {
      title: "Dynamic profiles",
      description: "Build living user profiles that evolve based on emotional states and behavioral cues."
    },
    {
      title: "Predictive insights",
      description: "Anticipate user needs and reactions before they happen, based on deep psychological patterns."
    }
  ]

  return (
    <section className="py-24 relative bg-gray-50" id="problem-solution">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The analytics gap no one talks about
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional tools show what happened. Wivvy reveals why it happened.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4" />
                  Current Reality
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What you're missing</h3>
              </div>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  With Wivvy
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What you'll gain</h3>
              </div>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <a href="#how-it-works" className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors group">
              See how it works
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement