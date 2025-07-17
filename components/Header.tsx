'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from './ui/Button'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-polygon-bg/80 backdrop-blur-lg border-b border-polygon-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            <span className="text-gradient">W</span>
            <span className="text-white">ivvy</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How it Works
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#signin" className="text-gray-300 hover:text-white transition-colors">
            Sign In
          </Link>
        </div>

        <Button variant="primary" size="sm" className="btn-primary">
          Request Early Access
        </Button>
      </nav>
    </motion.header>
  )
}

export default Header