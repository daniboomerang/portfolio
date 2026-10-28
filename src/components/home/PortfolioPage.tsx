'use client'

import { Separator, Text } from '@/components/ui'
import { motion, useScroll, useSpring } from 'motion/react'
import { links, profile } from '@/content/portfolio'
import { CareerTimeline } from './CareerTimeline'
import { Hero } from './Hero'
import { ProductGrid } from './ProductGrid'
import { Reveal } from './Reveal'
import { SiteHeader } from './SiteHeader'
import { Story } from './Story'

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
        <Separator className='mx-auto max-w-3xl' />
        <Story />
        <Separator className='mx-auto max-w-3xl' />
        <CareerTimeline />
        <Separator className='mx-auto max-w-3xl' />
        <ProductGrid />
      </main>

      <footer id='contact' className='border-t border-border px-6 py-16'>
        <Reveal className='mx-auto flex max-w-5xl flex-col items-center gap-6 text-center'>
          <Text className='font-serif text-2xl text-foreground'>Let’s build something that holds.</Text>
          <div className='flex flex-wrap justify-center gap-5'>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='text-sm text-muted-foreground transition-colors hover:text-primary'
              >
                {link.label}
              </a>
            ))}
          </div>
          <Text size='xs' className='font-mono text-muted-foreground'>
            {profile.name} · {profile.location}
          </Text>
        </Reveal>
      </footer>
    </>
  )
}
