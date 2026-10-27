'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { AnimatePresence, type HTMLMotionProps, motion } from 'motion/react'
import { Toggle as TogglePrimitive } from 'radix-ui'
import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * animate-ui's toggle: a Radix toggle rendered as a motion button, with an animated
 * highlight behind the content while it is pressed. Upstream composes three primitives
 * (Toggle, ToggleHighlight, ToggleItem) through a context; the portfolio only ever needs
 * the composed control, so they are folded into one component here.
 */
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted/40 hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,background-color,box-shadow] duration-200 ease-in-out aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent shadow-xs hover:bg-accent/40 hover:text-accent-foreground'
      },
      size: {
        default: 'h-9 px-2 min-w-9',
        sm: 'h-8 px-1.5 min-w-8',
        lg: 'h-10 px-2.5 min-w-10',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type ToggleProps = Omit<HTMLMotionProps<'button'>, 'onChange'> &
  VariantProps<typeof toggleVariants> & {
    pressed?: boolean
    defaultPressed?: boolean
    onPressedChange?: (pressed: boolean) => void
  }

function Toggle({
  className,
  variant,
  size,
  pressed,
  defaultPressed = false,
  onPressedChange,
  disabled,
  children,
  ...props
}: ToggleProps) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultPressed)
  const isPressed = pressed ?? uncontrolled
  const state = isPressed ? 'on' : 'off'

  function handlePressedChange(next: boolean) {
    setUncontrolled(next)
    onPressedChange?.(next)
  }

  // The real pressed state is announced once, by the button Radix renders; the inner
  // highlight and content are presentational.
  return (
    <TogglePrimitive.Root pressed={isPressed} onPressedChange={handlePressedChange} disabled={disabled} asChild>
      <motion.button
        data-slot='toggle'
        className='relative rounded-md outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]'
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <AnimatePresence>
          {isPressed && (
            <motion.div
              data-slot='toggle-highlight'
              data-state={state}
              className='bg-accent rounded-md'
              style={{ position: 'absolute', zIndex: 0, inset: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <motion.div
          data-slot='toggle-item'
          data-state={state}
          data-disabled={disabled}
          className={cn(toggleVariants({ variant, size }), className, 'cursor-pointer disabled:cursor-not-allowed')}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {children as React.ReactNode}
        </motion.div>
      </motion.button>
    </TogglePrimitive.Root>
  )
}

export { Toggle, toggleVariants, type ToggleProps }
