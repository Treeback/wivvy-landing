'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Milke', href: '#milke' },
  { name: 'Studio', href: '#philosophy' },
  { name: "What's next", href: '#future' },
  { name: 'Careers', href: '#careers' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-page">
        <nav
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 md:px-6 ${
            scrolled
              ? 'border-ink/10 bg-white/80 shadow-[0_8px_30px_-12px_rgba(20,20,31,0.18)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link href="#top" className="flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-violet" />
              <span className="absolute inset-[3px] rounded-full bg-coral" />
              <span className="absolute inset-[7px] rounded-full bg-lime" />
            </span>
            <span className="text-xl font-extrabold tracking-tightest text-ink lowercase">
              wivvy
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="mailto:hello@wivvy.ai"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-violet"
            >
              Say hi
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-ink/10 bg-white/70 p-2 text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-ink/10 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-ink/80 hover:bg-ink/5"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="mailto:hello@wivvy.ai"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-ink px-4 py-3 text-center text-base font-semibold text-cream"
              >
                Say hi
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
