import * as React from 'react'
import { cn } from '@/lib/utils'

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
}

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'p' | 'span' | 'div' | 'label'
  size?: keyof typeof sizeClasses
  weight?: keyof typeof weightClasses
  muted?: boolean
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as: Tag = 'p', size = 'md', weight, muted, className, children, ...props }, ref) => {
    return (
      <Tag
        ref={ref as any}
        className={cn(sizeClasses[size], weight && weightClasses[weight], muted && 'text-muted-foreground', className)}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)
Text.displayName = 'Text'

export { Text, type TextProps }
