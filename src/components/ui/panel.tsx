import type * as React from 'react'
import { cn } from '@/lib/utils'

type PanelProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div' | 'article'
}

/**
 * The deep charcoal Vinaya surface. `data-surface='panel'` re-declares the palette (see
 * globals.css), so everything inside keeps using the same semantic token classes.
 */
function Panel({ as: Tag = 'div', className, ...props }: PanelProps) {
  return <Tag data-surface='panel' className={cn('bg-background text-foreground', className)} {...props} />
}

export { Panel, type PanelProps }
