'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { distance, duration, ease } from '@/lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Seconds to wait after the element enters the viewport — staggers siblings. */
  delay?: number
}

/**
 * Fades and lifts its children in the first time they scroll into view. Reduced motion is
 * handled once, by the root `MotionProvider` and the `[data-reveal]` rule in globals.css (which
 * also covers visitors without JavaScript, via the layout's <noscript>), not per instance.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: distance.reveal }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      transition={{ duration: duration.reveal, delay, ease: ease.editorial }}
    >
      {children}
    </motion.div>
  )
}
