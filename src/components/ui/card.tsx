'use client'

import { type HTMLMotionProps, motion } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type CardProps = HTMLAttributes<HTMLDivElement>

/** animate's motion card: lifts 2px on hover. */
const Card = ({ className, ...props }: HTMLMotionProps<'div'>) => (
  <motion.div
    className={cn('rounded-lg border border-border bg-card text-card-foreground shadow-sm', className)}
    whileHover={{ y: -2, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
    {...props}
  />
)

const CardHeader = ({ className, ...props }: CardProps) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
)

const CardTitle = ({ className, children, ...props }: CardProps) => (
  <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ className, ...props }: CardProps) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
)

// Upstream is `p-6 pt-0` (top padding expected from a CardHeader sibling); `pt-6` restores it
// for cards that are only a CardContent. It sits before the caller's className so an explicit
// `pt-*` still wins.
const CardContent = ({ className, ...props }: CardProps) => <div className={cn('p-6 pt-6', className)} {...props} />

const CardFooter = ({ className, ...props }: CardProps) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
