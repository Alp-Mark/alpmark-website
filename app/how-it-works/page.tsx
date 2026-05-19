'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Plug, Zap, Brain, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Plug,
      title: 'Connect',
      description: 'Link your Shopify, Meta Ads, Google Ads, and WooCommerce accounts securely.',
      details: 'One-click integration via OAuth. We never store your credentials.',
    },
    {
      number: 2,
      icon: Zap,
      title: 'Sync',
      description: 'Real-time data sync keeps your metrics fresh and accurate.',
      details: 'Continuous updates every 15 minutes. Historical data always available.',
    },
    {
      number: 3,
      icon: Brain,
      title: 'Recommend',
      description: 'Our intelligence engine analyzes patterns and generates actionable recommendations.',
      details: 'Deterministic logic means the same data always produces the same recommendation.',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Approve & Track',
      description: 'You review, approve, and execute. We never touch your ad accounts or inventory.',
      details: 'Full audit trail. Every decision is logged and verifiable.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How AlpMark <span className="gradient-text">Works</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            A simple 4-step journey from data to decision
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="mb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isLast = index === steps.length - 1

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="flex gap-8">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold text-xl mb-4 flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {step.number}
                      </motion.div>

                      {!isLast && (
                        <motion.div
                          className="w-1 h-32 bg-gradient-to-b from-brand-blue to-brand-cyan"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <div className="mb-4 inline-block p-3 bg-gray-100 rounded-lg">
                        <IconComponent className="text-brand-blue" size={24} />
                      </div>

                      <h3 className="text-3xl font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-lg text-gray-600 mb-4 max-w-xl">{step.description}</p>

                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-blue">
                        <p className="text-gray-700 text-sm">{step.details}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Principle */}
      <section className="section-padding bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-md p-12 rounded-2xl border border-white border-opacity-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Decision Intelligence, Not Automation
            </h2>

            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto mb-8">
              AlpMark makes recommendations. You make decisions. We never execute actions in your ad platforms or inventory systems. You stay in complete control—always.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={24} />
                <span>You verify the data</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={24} />
                <span>You see the reasoning</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle size={24} />
                <span>You execute the action</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Connect your data sources and see recommendations in minutes.
          </motion.p>

          <motion.button
            className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 transition-all"
            whileHover={{ x: 5 }}
          >
            Start Free Trial <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>
    </main>
  )
}
