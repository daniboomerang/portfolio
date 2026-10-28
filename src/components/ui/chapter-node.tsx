import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'
import { cn } from '@/lib/utils'

// The numbered circle a chapter hangs from on the thread. Numbers on the filled variants are
// large bold type, so copper and moss fills keep AA contrast for large text.
const chapterNodeVariants = cva(
  'inline-flex size-node shrink-0 items-center justify-center rounded-full border font-mono text-lg font-bold tabular-nums transition-colors duration-(--duration-base) ease-editorial',
  {
    variants: {
      variant: {
        outline: 'border-rule-strong bg-background text-foreground',
        moss: 'border-moss bg-moss text-moss-foreground',
        copper: 'border-copper bg-copper text-copper-foreground'
      }
    },
    defaultVariants: { variant: 'outline' }
  }
)

type ChapterNodeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof chapterNodeVariants> & {
    number: number
  }

function ChapterNode({ number, variant, className, ...props }: ChapterNodeProps) {
  return (
    <span className={cn(chapterNodeVariants({ variant }), className)} {...props}>
      {String(number).padStart(2, '0')}
    </span>
  )
}

export { ChapterNode, chapterNodeVariants, type ChapterNodeProps }
