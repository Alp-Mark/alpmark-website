import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AlpMark Labs - Decision Intelligence for D2C Brands',
  description: 'Trusted decisions for D2C brands — recommendations, alerts, and simulations on data you can verify.',
  keywords: ['D2C', 'decision intelligence', 'analytics', 'recommendations'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
