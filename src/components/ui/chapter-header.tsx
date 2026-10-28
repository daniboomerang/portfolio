import type * as React from 'react'
import { cn } from '@/lib/utils'
import { ChapterNode, type ChapterNodeProps } from './chapter-node'
import { Heading } from './heading'
import { MonoLabel } from './mono-label'
import { Text } from './text'

type ChapterHeaderProps = Omit<React.HTMLAttributes<HTMLElement>, 'title'> & {
  number: number
  title: React.ReactNode
  /** Mono micro-label above the title, e.g. "Vinaya / The turning point". */
  eyebrow?: React.ReactNode
  /** One-line subheading under the title. */
  lead?: React.ReactNode
  node?: ChapterNodeProps['variant']
  level?: 2 | 3
  /** id on the heading, for the section's aria-labelledby. */
  titleId?: string
}

/** Section header: chapter number on the thread, eyebrow, serif title, short lead. */
function ChapterHeader({
  number,
  title,
  eyebrow,
  lead,
  node,
  level = 2,
  titleId,
  className,
  ...props
}: ChapterHeaderProps) {
  return (
    <header className={cn('grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-6 gap-y-3', className)} {...props}>
      <ChapterNode number={number} variant={node} aria-hidden className='mt-1' />
      <div className='flex flex-col gap-3'>
        {eyebrow && <MonoLabel as='p'>{eyebrow}</MonoLabel>}
        <Heading id={titleId} level={level} size='chapter' weight='normal' className='font-display text-foreground'>
          <span className='sr-only'>Chapter {number}: </span>
          {title}
        </Heading>
        {lead && (
          <Text size='lede' className='max-w-measure text-muted-foreground'>
            {lead}
          </Text>
        )}
      </div>
    </header>
  )
}

export { ChapterHeader, type ChapterHeaderProps }
