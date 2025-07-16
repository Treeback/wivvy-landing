import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Wivvy - Rebuild your mind\'s infrastructure',
  description: 'AI thinking assistant that ingests unstructured data and organizes it into connected notes and a living graph of ideas.',
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