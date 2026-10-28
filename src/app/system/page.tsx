import type { Metadata } from 'next'
import { SystemPage } from '@/components/system/SystemPage'

export const metadata: Metadata = {
  title: 'Design system — Dani Estevez',
  description: 'Every token and editorial component of the portfolio, on fixture data.',
  robots: { index: false }
}

export default function Page() {
  return <SystemPage />
}
