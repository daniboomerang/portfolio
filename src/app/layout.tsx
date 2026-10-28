import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { COLOR_SCHEME_SCRIPT, DEFAULT_SCHEME } from '@/lib/color-scheme'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

// Instrument Serif is the editorial display face; IBM Plex Sans / Mono carry body and labels.
const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM%20Plex%20Sans:wght@400;500;600;700&family=IBM%20Plex%20Serif:wght@400;500;600;700&family=IBM%20Plex%20Mono:wght@400;500;600;700&display=swap'

export const metadata: Metadata = {
  title: 'Dani Estevez — Software Engineer',
  description: '18 years building software. Interfaces, infrastructure, and the judgment connecting them.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // The page is static: <html> ships with the default scheme and the inline script corrects
  // it from the visitor's cookie before first paint — hence suppressHydrationWarning.
  return (
    <html lang='en' data-theme={DEFAULT_SCHEME} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: COLOR_SCHEME_SCRIPT }} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='stylesheet' href={FONTS_URL} />
      </head>
      <body className='min-h-screen bg-background text-foreground'>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
