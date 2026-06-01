import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="container-page py-20">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-violet" />
                <span className="absolute inset-[4px] rounded-full bg-coral" />
                <span className="absolute inset-[9px] rounded-full bg-lime" />
              </span>
              <span className="text-3xl font-extrabold lowercase tracking-tightest">wivvy</span>
            </div>
            <p className="heading-display mt-6 max-w-md text-balance text-3xl leading-snug text-cream/90 md:text-4xl">
              Built for the next wave of{' '}
              <span className="italic text-lime">young India.</span>
            </p>
            <p className="mt-4 text-sm text-cream/55">wivvy.ai — Bengaluru / Mumbai</p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm md:text-base">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-cream/40">
                Explore
              </p>
              <Link href="#milke" className="block text-cream/85 hover:text-cream">
                Milke
              </Link>
              <Link href="#future" className="block text-cream/85 hover:text-cream">
                What's next
              </Link>
              <Link href="#careers" className="block text-cream/85 hover:text-cream">
                Careers
              </Link>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-cream/40">
                Connect
              </p>
              <a
                href="mailto:hello@wivvy.ai"
                className="block text-cream/85 hover:text-cream"
              >
                hello@wivvy.ai
              </a>
              <a
                href="https://instagram.com/wivvy"
                target="_blank"
                rel="noreferrer"
                className="block text-cream/85 hover:text-cream"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/wivvy"
                target="_blank"
                rel="noreferrer"
                className="block text-cream/85 hover:text-cream"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="relative mt-16 select-none overflow-hidden">
          <div className="heading-display whitespace-nowrap text-[28vw] leading-none tracking-tightest text-cream/[0.06] md:text-[22vw]">
            wivvy
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Wivvy Labs. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://instagram.com/wivvy" aria-label="Instagram" className="hover:text-cream">
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/company/wivvy"
              aria-label="LinkedIn"
              className="hover:text-cream"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
