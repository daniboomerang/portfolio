import type * as React from 'react'
import { cn } from '@/lib/utils'

type PullQuoteProps = React.HTMLAttributes<HTMLElement> & {
  /** Optional attribution under the quote. */
  cite?: React.ReactNode
}

/** A large italic serif quote with a copper rule on its leading edge. */
function PullQuote({ cite, className, children, ...props }: PullQuoteProps) {
  return (
    <figure className={cn('flex max-w-measure flex-col gap-4 border-l-2 border-copper pl-6', className)} {...props}>
      <blockquote className='font-display text-quote italic text-foreground'>
        <p>“{children}”</p>
      </blockquote>
      {cite && <figcaption className='font-mono text-label uppercase text-muted-foreground'>{cite}</figcaption>}
    </figure>
  )
}

export { PullQuote, type PullQuoteProps }
