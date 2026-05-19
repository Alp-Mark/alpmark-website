'use client'

import { motion } from 'framer-motion'
import { Zap, AlertCircle, Brain, BarChart3, Lock, CheckCircle } from 'lucide-react'

export default function ProductPage() {
  const features = [
    {
      icon: Zap,
      title: 'Recommendations',
      description: 'AI-powered insights backed by explainable reasoning. Every recommendation shows its confidence score and data sources.',
      color: 'from-brand-blue to-brand-cyan',
    },
    {
      icon: AlertCircle,
      title: 'Alerts',
      description: 'Real-time detection of margin erosion, overstock risk, and customer churn. Get notified before problems become costly.',
      color: 'from-brand-red to-orange-500',
    },
    {
      icon: Brain,
      title: 'Simulations',
      description: 'Run what-if scenarios on pricing, inventory, and ad spend without affecting live operations.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Metrics & Insights',
      description: 'Dashboard of your key metrics with instant drill-downs into the data that matters to your margins.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Lock,
      title: 'Approvals & Audit',
      description: 'Transparent workflow. Every decision is logged and verifiable. You maintain complete control.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: CheckCircle,
      title: 'Verification',
      description: 'Connect to your data sources and verify every recommendation against live data.',
      color: 'from-blue-500 to-indigo-500',
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
            Decision Intelligence <span className="gradient-text">Made Simple</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Every feature is designed around explainability. You see the reasoning, verify the data, and stay in control.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-all group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className={`mb-4 inline-block p-4 bg-gradient-to-r ${feature.color} rounded-lg`}>
                    <IconComponent className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                  <motion.div
                    className="mt-6 h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-cyan"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trust Markers on Every Recommendation
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                title: 'Freshness',
                description: 'Last updated timestamp so you know how current the insight is',
              },
              {
                title: 'Confidence',
                description: 'Statistical confidence score showing the strength of the recommendation',
              },
              {
                title: 'Rationale',
                description: 'Clear explanation of the reasoning and supporting data sources',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200"
                variants={itemVariants}
              >
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-brand-blue to-brand-cyan">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            See It in Action
          </motion.h2>

          <motion.p
            className="text-xl text-white text-opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Book a demo to see how AlpMark transforms your decision-making process.
          </motion.p>

          <motion.button
            className="bg-white text-brand-blue px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Schedule Demo
          </motion.button>
        </div>
      </section>
    </main>
  )
}
