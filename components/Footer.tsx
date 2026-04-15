import Link from 'next/link'
import { Twitter, Instagram, Youtube } from 'lucide-react'
import Logo from './ui/Logo'

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Logo size="sm" className="text-black" />
              </div>
              <span className="text-lg font-bold text-white">Wivvy</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The intelligence layer behind viral Indian content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Product</h4>
            <div className="space-y-2">
              <Link href="#how-it-works" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">
                How it Works
              </Link>
              <Link href="#insights" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Insights
              </Link>
              <Link href="#use-cases" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Use Cases
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              <Link href="/blog" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Blog
              </Link>
              <Link href="/community" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Community
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">
                About
              </Link>
              <Link href="/privacy" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; 2025 Wivvy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
