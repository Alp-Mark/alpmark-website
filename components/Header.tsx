'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '/product' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-bold text-2xl">
          <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-gray-900">AlpMark</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#demo">
            <button className="bg-brand-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
              Demo
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-brand-blue font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold mt-4">
              Demo
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
