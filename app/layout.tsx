import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Wivvy - Turn User Behavior into Emotional Insights',
  description: 'The first analytics platform that understands emotions, not just events. Decode the psychology behind every click to build products that truly resonate with your users.',
  keywords: 'emotional analytics, user behavior analysis, AI analytics, user psychology, conversion optimization, user experience analytics',
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
    title: 'Wivvy - Turn User Behavior into Emotional Insights',
    description: 'The first analytics platform that understands emotions, not just events. Decode the psychology behind every click.',
    url: 'https://wivvy.ai',
    siteName: 'Wivvy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wivvy - Emotional Analytics Platform',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wivvy - Turn User Behavior into Emotional Insights',
    description: 'The first analytics platform that understands emotions, not just events. Decode the psychology behind every click.',
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
  themeColor: '#6366f1',
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