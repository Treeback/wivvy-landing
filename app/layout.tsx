import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Wivvy — A consumer-tech studio for the next wave of young India',
  description:
    'Wivvy is a startup studio building playful, emotional, internet-native apps for young India. First product: Milke — less scrolling, more us.',
  keywords:
    'Wivvy, Milke, consumer tech, Indian startup studio, Gen Z apps, couple app, social apps, AI companions, lifestyle tools, India',
  authors: [{ name: 'Wivvy' }],
  creator: 'Wivvy',
  publisher: 'Wivvy',
  metadataBase: new URL('https://wivvy.ai'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Wivvy — Building apps for the way young India feels, connects, and lives.',
    description:
      'A consumer-tech studio creating internet-native products for everyday moments — relationships, memories, and AI-led personal experiences.',
    url: 'https://wivvy.ai',
    siteName: 'Wivvy',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wivvy — A consumer-tech studio for young India',
    description: 'Building playful, emotional, internet-native apps. First product: Milke.',
    creator: '@wivvy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F2',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
