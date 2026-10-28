'use client'

import { ChevronDown } from 'lucide-react'
import { Collapsible } from 'radix-ui'
import type * as React from 'react'
import { cn } from '@/lib/utils'

type ExpandableDetailProps = Omit<React.ComponentProps<typeof Collapsible.Root>, 'title'> & {
  summary: React.ReactNode
}

/** Extra technical detail behind an explicit control. Closed content is not rendered for anyone. */
function ExpandableDetail({ summary, className, children, ...props }: ExpandableDetailProps) {
  return (
    <Collapsible.Root className={cn('border-y border-rule', className)} {...props}>
      <Collapsible.Trigger className='group flex min-h-11 w-full items-center justify-between gap-4 py-3 text-left text-small font-medium text-foreground hover:text-muted-foreground'>
        {summary}
        <ChevronDown
          aria-hidden
          className='size-4 shrink-0 text-copper transition-transform duration-(--duration-base) ease-editorial group-data-[state=open]:rotate-180'
        />
      </Collapsible.Trigger>
      <Collapsible.Content className='pb-4 text-small text-muted-foreground'>{children}</Collapsible.Content>
    </Collapsible.Root>
  )
}

export { ExpandableDetail, type ExpandableDetailProps }
