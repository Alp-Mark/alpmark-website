'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Zap, AlertCircle, Brain, BarChart3, CheckCircle } from 'lucide-react'

export default function Home() {
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

  const outcomes = [
    {
      icon: BarChart3,
      title: 'Margin Protection',
      description: 'Real-time insights to maintain healthy margins',
    },
    {
      icon: AlertCircle,
      title: 'Overstock Alerts',
      description: 'Catch inventory risks before they become losses',
    },
    {
      icon: Zap,
      title: 'Churn Detection',
      description: 'Identify at-risk customers early',
    },
    {
      icon: Brain,
      title: 'Ad Spend Efficiency',
      description: 'Optimize marketing budget allocation',
    },
  ]

  const integrations = ['Shopify', 'Meta Ads', 'Google Ads', 'WooCommerce']

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center overflow-hidden section-padding">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Logo */}
            <motion.div
              className="mb-8 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative w-24 h-24">
                <svg viewBox="0 0 500 400" className="w-full h-full">
                  <motion.path
                    d="M 50 350 L 120 180 L 420 50"
                    stroke="url(#blueGradient)"
                    strokeWidth="60"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                  />
                  <motion.path
                    d="M 120 280 L 200 180 L 420 220"
                    stroke="#FF3B30"
                    strokeWidth="50"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0052CC" />
                      <stop offset="100%" stopColor="#00B4D8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
              variants={itemVariants}
            >
              Trusted Decisions for <span className="gradient-text">D2C Brands</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Recommendations, alerts, and simulations on data you can verify.
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Decision intelligence that explains itself. We never execute actions—you stay in control.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              variants={itemVariants}
            >
              <Link href="#demo">
                <button className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:shadow-lg">
                  Book a Demo <ChevronRight size={20} />
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="border-2 border-brand-blue text-brand-blue hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all">
                  See How It Works
                </button>
              </Link>
            </motion.div>

            {/* Integrations */}
            <motion.div
              className="mb-12"
              variants={itemVariants}
            >
              <p className="text-gray-600 text-sm uppercase tracking-wide mb-4">Trusted by integrations</p>
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-brand-blue rounded-full" />
                    {integration}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Floating graphic */}
          <motion.div
            className="mt-16 relative h-64 md:h-80"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-cyan to-transparent opacity-10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Real Outcomes for <span className="gradient-text">Real Businesses</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon
              return (
                <motion.div
                  key={index}
                  className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="mb-4 inline-block p-3 bg-brand-blue bg-opacity-10 rounded-lg">
                    <IconComponent className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{outcome.title}</h3>
                  <p className="text-gray-600">{outcome.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Built on Trust
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
                title: 'Explainable',
                description: 'Every recommendation shows its reasoning, confidence, and data sources',
              },
              {
                title: 'Verifiable',
                description: 'You stay in control. We never execute actions in your platforms',
              },
              {
                title: 'Auditable',
                description: 'Complete audit trails for compliance and transparency',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6"
                variants={itemVariants}
              >
                <CheckCircle className="text-brand-red mx-auto mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-blue to-brand-cyan">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Make Smarter Decisions?
          </motion.h2>

          <motion.p
            className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how AlpMark helps D2C brands make confident, data-backed decisions.
          </motion.p>

          <motion.button
            className="bg-white text-brand-blue px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book Your Demo Today
          </motion.button>
        </div>
      </section>
    </main>
  )
}
