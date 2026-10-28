import type * as React from 'react'
import { cn } from '@/lib/utils'
import { MonoLabel } from './mono-label'

type ExhibitFrameProps = React.HTMLAttributes<HTMLElement> & {
  /** Says what the preview is — "Illustrative schematic", "Screenshot" — so a concept never passes as a product shot. */
  label: string
  caption?: React.ReactNode
}

/** A work exhibit: a framed preview (screenshot or labelled schematic) with an honest label and a caption. */
function ExhibitFrame({ label, caption, className, children, ...props }: ExhibitFrameProps) {
  return (
    <figure className={cn('flex flex-col gap-3', className)} {...props}>
      <div className='relative overflow-hidden border border-rule bg-card p-6 shadow-sm'>
        <MonoLabel className='absolute top-3 right-3 border border-rule bg-background px-2 py-1'>{label}</MonoLabel>
        {children}
      </div>
      {caption && <figcaption className='text-small text-muted-foreground'>{caption}</figcaption>}
    </figure>
  )
}

export { ExhibitFrame, type ExhibitFrameProps }
