import { ArrowUp } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'

type RevisionArrowProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string
}

/**
 * The return path in the workflow diagram: leaves the review stage (right edge), runs back
 * underneath and points up into the step it returns to (left edge). Size it with the parent
 * so its two ends sit under the right steps.
 */
function RevisionArrow({ label = 'Revise', className, ...props }: RevisionArrowProps) {
  return (
    <div
      role='img'
      aria-label={`${label}: returns from review to the developer`}
      className={cn('relative h-8 border-x border-b border-copper', className)}
      {...props}
    >
      <ArrowUp aria-hidden className='absolute top-0 left-0 size-4 -translate-x-1/2 -translate-y-1/2 text-copper' />
      <span className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background px-2 font-mono text-label uppercase text-foreground'>
        {label}
      </span>
    </div>
  )
}

export { RevisionArrow, type RevisionArrowProps }
