import * as React from 'react'
import { cn } from '@/lib/utils'

const defaultSizeByLevel = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base'
}

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl'
}

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: keyof typeof defaultSizeByLevel
  size?: keyof typeof sizeClasses
  weight?: keyof typeof weightClasses
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, size, weight = 'bold', className, children, ...props }, ref) => {
    const Tag = `h${level}` as const
    const sizeClass = size ? sizeClasses[size] : defaultSizeByLevel[level]

    return (
      <Tag ref={ref} className={cn(sizeClass, weightClasses[weight], 'tracking-tight', className)} {...props}>
        {children}
      </Tag>
    )
  }
)
Heading.displayName = 'Heading'

export { Heading, type HeadingProps }
