import type { ReactNode } from 'react'
import { ChapterHeader, type ChapterHeaderProps, Panel } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Reveal } from '../Reveal'

type ChapterProps = {
  id: string
  number: number
  title: ReactNode
  eyebrow?: ReactNode
  lead?: ReactNode
  node?: ChapterHeaderProps['node']
  /** Draws the chapter on the deep charcoal Vinaya panel, full bleed. */
  panel?: boolean
  /** Sits beside the chapter header on wide screens (chapter 04's ownership line). */
  aside?: ReactNode
  /** Closes the page: keeps bottom room. Paper chapters otherwise end flush, so the next
      chapter's top space is the only gap between them. */
  last?: boolean
  className?: string
  children: ReactNode
}

/**
 * One numbered chapter of the portfolio page: the header on the thread, then the body,
 * aligned with the title on wide screens. Every chapter section is labelled by its heading.
 */
export function Chapter({
  id,
  number,
  title,
  eyebrow,
  lead,
  node,
  panel,
  aside,
  last,
  className,
  children
}: ChapterProps) {
  const titleId = `${id}-title`
  const inner = (
    <div className={cn('mx-auto max-w-content px-gutter pt-section', (panel || last) && 'pb-section', className)}>
      <Reveal className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end'>
        <ChapterHeader titleId={titleId} number={number} title={title} eyebrow={eyebrow} lead={lead} node={node} />
        {aside}
      </Reveal>
      <div className='mt-16 flex flex-col gap-section md:mt-20 md:pl-indent'>{children}</div>
    </div>
  )
  return panel ? (
    <Panel as='section' id={id} aria-labelledby={titleId}>
      {inner}
    </Panel>
  ) : (
    <section id={id} aria-labelledby={titleId}>
      {inner}
    </section>
  )
}
