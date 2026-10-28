import type * as React from 'react'
import { cn } from '@/lib/utils'

const toneClasses = {
  muted: 'text-muted-foreground',
  ink: 'text-foreground',
  moss: 'text-moss'
}

type MonoLabelProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'span' | 'p' | 'time' | 'div'
  tone?: keyof typeof toneClasses
  dateTime?: string
}

/** Small uppercase monospaced micro-label: eyebrows, dates, locations, stack lines. */
function MonoLabel({ as: Tag = 'span', tone = 'muted', className, ...props }: MonoLabelProps) {
  return <Tag className={cn('font-mono text-label uppercase', toneClasses[tone], className)} {...props} />
}

export { MonoLabel, type MonoLabelProps }
