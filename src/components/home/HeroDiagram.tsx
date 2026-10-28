'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { distance, duration } from '@/lib/motion'

/** Points of an isometric plane (a 2:1 rhombus) centred on cx, cy with half-width w. */
function plane(cx: number, cy: number, w: number) {
  return `${cx - w},${cy} ${cx},${cy - w / 2} ${cx + w},${cy} ${cx},${cy + w / 2}`
}

const line = { vectorEffect: 'non-scaling-stroke' as const }

/** A gentle, slow float. MotionProvider turns it off for reduced-motion visitors. */
function Drift({ delay, children }: { delay: number; children: ReactNode }) {
  return (
    <motion.g
      animate={{ y: [0, -distance.drift, 0] }}
      transition={{ duration: duration.drift, delay, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
    >
      {children}
    </motion.g>
  )
}

function CopperNode({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={11} className='fill-copper/15' />
      <circle cx={x} cy={y} r={5} className='fill-copper' />
    </g>
  )
}

function Joint({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r={3} className='fill-background stroke-foreground/60' {...line} />
}

/**
 * The hero's sparse architectural drawing: floating planes, fine connectors, a few copper
 * nodes. Editable SVG drawn in token colours, so it follows the colour scheme.
 */
export function HeroDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 560 460'
      role='img'
      aria-label='Line drawing of floating architectural planes joined by fine connectors, with three copper nodes'
      className={cn('h-auto w-full', className)}
    >
      {/* Lowest plane and the small plane floating beside it. */}
      <Drift delay={1.2}>
        <polygon points={plane(340, 365, 140)} className='fill-card stroke-foreground/50' {...line} />
        <polygon
          points={plane(340, 365, 84)}
          className='fill-none stroke-rule-strong'
          strokeDasharray='3 5'
          {...line}
        />
        <CopperNode x={340} y={365} />
      </Drift>
      <Drift delay={2.4}>
        <polygon points={plane(100, 300, 60)} className='fill-card stroke-foreground/50' {...line} />
        <path d='M160 300 H230 V350' className='fill-none stroke-foreground/40' {...line} />
        <Joint x={230} y={350} />
      </Drift>

      {/* The main plane, with a faint construction grid. */}
      <polygon points={plane(270, 215, 190)} className='fill-card stroke-foreground/60' {...line} />
      <path
        d='M175 167.5 L365 262.5 M365 167.5 L175 262.5'
        className='fill-none stroke-rule-strong'
        strokeDasharray='3 5'
        {...line}
      />
      <path d='M80 215 V280 M460 215 V355' className='fill-none stroke-foreground/40' {...line} />
      <Joint x={80} y={280} />
      <Joint x={460} y={355} />

      {/* Top plane and the pillars that hold it above the main one. */}
      <Drift delay={0}>
        <path d='M190 90 V160 M450 90 V210 M320 155 V240' className='fill-none stroke-foreground/40' {...line} />
        <Joint x={190} y={160} />
        <Joint x={450} y={210} />
        <CopperNode x={320} y={240} />
        <polygon points={plane(320, 90, 130)} className='fill-card stroke-foreground/60' {...line} />
        <path d='M255 57.5 L385 122.5' className='fill-none stroke-rule-strong' strokeDasharray='3 5' {...line} />
        <CopperNode x={320} y={90} />
      </Drift>
    </svg>
  )
}
