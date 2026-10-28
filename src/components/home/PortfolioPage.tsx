'use client'

import { motion, useScroll, useSpring } from 'motion/react'
import { AiEra } from './chapters/AiEra'
import { BuiltWithPeople } from './chapters/BuiltWithPeople'
import { Contact } from './chapters/Contact'
import { Ownership } from './chapters/Ownership'
import { Vinaya } from './chapters/Vinaya'
import { Work } from './chapters/Work'
import { Hero } from './Hero'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function PortfolioPage() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div
        aria-hidden
        className='fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-copper'
        style={{ scaleX: progress }}
      />

      <SiteHeader className='fixed inset-x-0 top-0 z-40' />

      <main id='top'>
        <Hero />
        <BuiltWithPeople />
        <AiEra />
        <Ownership />
        <Vinaya />
        <Work />
        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}
