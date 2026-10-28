'use client'

import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * The one place reduced motion is decided. `reducedMotion='user'` drops every transform and
 * layout animation below it for visitors who ask the OS for reduced motion; opacity fades
 * stay. Wraps every route from the root layout, so `/` and `/system` behave the same.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>
}
