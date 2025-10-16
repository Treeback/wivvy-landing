'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, Building2, ArrowRight } from 'lucide-react'
import Button from './ui/Button'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly')

  const tiers = [
    {
      name: 'Starter',
      icon: Sparkles,
      description: 'Perfect for individual creators and small teams',
      monthlyPrice: 29 as number,
      yearlyPrice: 24 as number, // ~20% discount
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 10,000 monthly events',
        'Basic emotional analytics',
        'Real-time dashboard',
        '7-day data retention',
        'Email support',
        'Single website tracking',
        'Basic user personas',
        'CSV export'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      icon: Zap,
      description: 'Advanced analytics for growing businesses',
      monthlyPrice: 149 as number,
      yearlyPrice: 119 as number, // ~20% discount
      color: 'from-indigo-600 to-purple-600',
      features: [
        'Up to 100,000 monthly events',
        'Advanced emotional insights',
        'Multi-channel integration',
        '90-day data retention',
        'Priority support',
        'Up to 5 websites',
        'Custom user segments',
        'API access',
        'Team collaboration (5 seats)',
        'Advanced export options',
        'A/B testing insights',
        'Custom dashboards'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building2,
      description: 'Custom solutions for large organizations',
      monthlyPrice: 'Custom' as 'Custom',
      yearlyPrice: 'Custom' as 'Custom',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Unlimited events',
        'White-label options',
        'Unlimited data retention',
        'Dedicated account manager',
        'Unlimited websites',
        'Custom AI models',
        'SLA guarantee',
        'On-premise deployment option',
        'Unlimited seats',
        'Advanced security features',
        'Custom integrations',
        'Training & onboarding'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <section className="py-24 relative bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Simple, Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose the plan that
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              fits your needs
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. 
            Upgrade or cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <motion.div
                className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: billingCycle === 'yearly' ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1 text-green-600 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl ${
                tier.popular ? 'ring-2 ring-indigo-600 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Tier Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                    <tier.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                    <p className="text-sm text-gray-600">{tier.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {typeof tier.monthlyPrice === 'number' ? (
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">
                        ${billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice}
                      </span>
                      <span className="ml-2 text-gray-600">/month</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">Custom</span>
                      <p className="text-sm text-gray-600 mt-1">Contact us for pricing</p>
                    </div>
                  )}
                  {billingCycle === 'yearly' && typeof tier.monthlyPrice === 'number' && typeof tier.yearlyPrice === 'number' && (
                    <p className="text-sm text-gray-500 mt-1">
                      Billed annually (${tier.yearlyPrice * 12})
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  variant={tier.popular ? 'primary' : 'secondary'}
                  className={`w-full py-3 font-medium ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 w-4 h-4 inline-block" />
                </Button>

                {/* Features */}
                <div className="mt-8 space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    What's included
                  </h4>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Need a custom plan? <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Contact our sales team</a>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Pricing