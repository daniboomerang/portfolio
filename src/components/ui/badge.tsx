'use client'

import { type HTMLMotionProps, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const sizeClasses = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base'
}

const variantClasses = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  destructive: 'bg-destructive text-destructive-foreground',
  outline: 'border border-border bg-background text-foreground'
}

type BadgeProps = HTMLMotionProps<'div'> & {
  size?: keyof typeof sizeClasses
  variant?: keyof typeof variantClasses
}

/** animate's motion badge: springs up on hover, down on tap. */
function Badge({ size = 'md', variant = 'default', className, ...props }: BadgeProps) {
  return (
    <motion.div
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-md transition-all',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    />
  )
}

export { Badge, type BadgeProps }
