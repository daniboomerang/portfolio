'use client'

import { CircleDot, type LucideIcon } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'

type WorkflowStepProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title'> & {
  icon: LucideIcon
  title: string
  detail?: string
  /** The step whose detail is open. Shown by border weight and a marker, not by colour alone. */
  selected?: boolean
}

/** A node in the Vinaya workflow diagram. A real button: click, Enter and Space select it. */
function WorkflowStep({ icon: Icon, title, detail, selected = false, className, ...props }: WorkflowStepProps) {
  return (
    <button
      type='button'
      aria-pressed={selected}
      className={cn(
        'group relative flex min-h-11 w-full items-start gap-3 border bg-card p-4 pr-8 text-left text-card-foreground transition-[border-color,background-color] duration-(--duration-base) ease-editorial',
        'hover:border-rule-strong hover:bg-muted active:bg-accent',
        'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-rule disabled:hover:bg-card',
        selected ? 'border-2 border-copper' : 'border-rule',
        className
      )}
      {...props}
    >
      <Icon aria-hidden className='mt-0.5 size-5 shrink-0' />
      <span className='flex flex-col gap-1'>
        <span className='font-mono text-label font-semibold uppercase'>{title}</span>
        {detail && <span className='text-small text-muted-foreground'>{detail}</span>}
      </span>
      {selected && <CircleDot aria-hidden className='absolute top-2 right-2 size-4 text-copper' />}
    </button>
  )
}

export { WorkflowStep, type WorkflowStepProps }
