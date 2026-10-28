import type * as React from 'react'
import { cn } from '@/lib/utils'

type TimelineProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Names the scroll region for assistive tech, e.g. "Early career, 2008 to 2021". */
  label: string
}

/**
 * A thin horizontal timeline. On narrow screens it scrolls sideways inside itself (never the
 * page); the region is focusable so arrow keys scroll it, and a fading edge shows there is more.
 */
function Timeline({ label, className, children, ...props }: TimelineProps) {
  return (
    <div
      role='region'
      aria-label={label}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable region must be keyboard-reachable to scroll it
      tabIndex={0}
      className={cn(
        'overflow-x-auto overscroll-x-contain pb-2 [mask-image:linear-gradient(to_right,black_85%,transparent)] md:[mask-image:none]',
        className
      )}
      {...props}
    >
      <ol className='relative flex min-w-max gap-10 pt-6 before:absolute before:inset-x-0 before:top-6 before:h-px before:bg-rule-strong md:min-w-0 md:justify-between'>
        {children}
      </ol>
    </div>
  )
}

type TimelineStopProps = React.LiHTMLAttributes<HTMLLIElement> & {
  year: string
  company: string
  role: string
  detail?: string
  /** Highlights one stop (the selected or current one). */
  selected?: boolean
}

/** One stop: a small node on the line, then year, company, role and domain. */
function TimelineStop({ year, company, role, detail, selected, className, ...props }: TimelineStopProps) {
  return (
    <li
      aria-current={selected || undefined}
      className={cn('relative flex w-40 flex-col gap-1 pt-5', className)}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          'absolute top-0 left-0 size-dot -translate-y-1/2 rounded-full border border-copper',
          selected ? 'bg-copper ring-4 ring-copper/20' : 'bg-background'
        )}
      />
      <span className='font-mono text-label text-muted-foreground'>{year}</span>
      <span className='font-mono text-label font-semibold uppercase text-foreground'>{company}</span>
      <span className='text-small text-foreground'>{role}</span>
      {detail && <span className='text-small text-muted-foreground'>{detail}</span>}
    </li>
  )
}

export { Timeline, TimelineStop, type TimelineProps, type TimelineStopProps }
