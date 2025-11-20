import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sathvik Gaddam | Software Developer',
  description: 'Software Developer specializing in cloud computing, machine learning, and full-stack development. MS in IT at University of Florida.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
