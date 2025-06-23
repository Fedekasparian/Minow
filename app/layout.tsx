import type { Metadata } from 'next'
import './globals.css'

// Importing global styles
export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

// Root layout para toda la aplicación
// Este layout envuelve toda la aplicación y define la estructura HTML básica
// Incluye el elemento <html> y <body> para Next.js
// También puedes agregar metadatos globales, enlaces a fuentes, etc.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
