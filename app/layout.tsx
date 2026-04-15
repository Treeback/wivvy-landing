import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Wivvy - The Intelligence Layer Behind Viral Indian Content',
  description: 'We analyze thousands of viral videos across Indian creators to uncover repeatable patterns in hooks, storytelling, and engagement — so you can create content that actually performs.',
  keywords: 'viral content, Indian creators, content intelligence, video analytics, hook patterns, content strategy, creator tools, YouTube India, Instagram Reels, engagement patterns',
  authors: [{ name: 'Wivvy' }],
  creator: 'Wivvy',
  publisher: 'Wivvy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wivvy.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wivvy - The Intelligence Layer Behind Viral Indian Content',
    description: 'We decoded what makes Indian content go viral. Analyze patterns across 10,000+ videos to create content that actually performs.',
    url: 'https://wivvy.ai',
    siteName: 'Wivvy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wivvy - Content Intelligence Platform',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wivvy - The Intelligence Layer Behind Viral Indian Content',
    description: 'We decoded what makes Indian content go viral. Analyze patterns across 10,000+ videos to create content that actually performs.',
    images: ['/og-image.png'],
    creator: '@wivvy',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  )
}
