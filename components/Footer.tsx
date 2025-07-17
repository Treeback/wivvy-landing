import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-polygon-bg/50 border-t border-polygon-border mt-32">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-gradient">W</span>
                <span className="text-white">ivvy</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Because your mind deserves better infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-medium">Product</h4>
            <div className="space-y-2">
              <Link href="#features" className="block text-gray-400 hover:text-white text-sm">
                Features
              </Link>
              <Link href="#how-it-works" className="block text-gray-400 hover:text-white text-sm">
                How it Works
              </Link>
              <Link href="#pricing" className="block text-gray-400 hover:text-white text-sm">
                Pricing
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-medium">Legal</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-medium">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-polygon-border text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Wivvy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer