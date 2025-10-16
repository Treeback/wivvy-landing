import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'
import Logo from './ui/Logo'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Logo size="md" className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Wivvy</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The emotional intelligence engine that transforms user data into deeper connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Product</h4>
            <div className="space-y-2">
              <Link href="#how-it-works" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                How it Works
              </Link>
              <Link href="#benefits" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Benefits
              </Link>
              <Link href="#use-cases" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Use Cases
              </Link>
              <Link href="#pricing" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              <Link href="/docs" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Documentation
              </Link>
              <Link href="/api" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                API Reference
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Blog
              </Link>
              <Link href="/community" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Community
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                About
              </Link>
              <Link href="/careers" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Careers
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Wivvy. All rights reserved. Made with ❤️ in San Francisco.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-indigo-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-indigo-600 transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-indigo-600 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer