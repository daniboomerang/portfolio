import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { COLOR_SCHEME_SCRIPT, DEFAULT_SCHEME } from '@/lib/color-scheme'
import './globals.css'

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=IBM%20Plex%20Sans:wght@400;500;600;700&family=IBM%20Plex%20Serif:wght@400;500;600;700&family=IBM%20Plex%20Mono:wght@400;500;600;700&display=swap'

export const metadata: Metadata = {
  title: 'Daniel Estevez — AI Systems Engineer',
  description:
    'Fifteen years shipping production software, four building with AI agents every day. The story, the career, and the products of Atta Labs.'
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
      <body className='min-h-screen bg-background text-foreground'>{children}</body>
    </html>
  )
}
