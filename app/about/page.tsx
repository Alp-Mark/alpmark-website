'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Rocket } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      title: 'Explainability First',
      description: 'We believe every recommendation must show its reasoning. No black boxes.',
    },
    {
      title: 'Trust Over Features',
      description: 'We build for trust. That means transparency, verification, and you staying in control.',
    },
    {
      title: 'Data Integrity',
      description: 'Your data is sacred. We never sell it, never use it for other purposes, never execute actions without you.',
    },
    {
      title: 'Founder-Focused',
      description: 'We build for D2C operators who need real answers, not dashboards. Simple, direct, useful.',
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
            About <span className="gradient-text">AlpMark Labs</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We're building the decision intelligence platform for D2C brands that don't want another dashboard—they want answers they can trust.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              D2C founders are drowning in data. Metrics dashboards are everywhere. But when it comes time to make a critical decision—about pricing, ad spend, or inventory—they're flying blind.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              They can't trust their dashboards. Data is siloed. Calculations don't line up. And they have no idea if a recommendation is good or if it's just algorithmic noise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're fixing that. AlpMark takes your messy data from Shopify, ad platforms, and analytics tools, synthesizes it into something verifiable, and surfaces recommendations you can actually trust. Not another dashboard. Real decision intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Built by Founders, For Founders
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our team comes from D2C, analytics, and data engineering. We've felt the pain of making decisions with bad data. Now we're fixing it.
          </motion.p>

          <motion.div
            className="bg-gradient-to-r from-brand-blue to-brand-cyan p-12 rounded-2xl text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Rocket className="mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">Backed by leading investors</h3>
            <p className="text-white text-opacity-90">
              We're focused on building the most trusted decision intelligence platform for D2C founders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Talk
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Curious about how AlpMark can help your brand make smarter decisions?
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="#demo">
              <button className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
                Schedule a Demo <ArrowRight size={20} />
              </button>
            </Link>
            <a href="mailto:hello@alpmarklabs.com">
              <button className="border-2 border-brand-blue text-brand-blue hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all">
                Get in Touch
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
