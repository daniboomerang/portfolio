import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'

const icons = {
  down: ArrowDown,
  forward: ArrowRight,
  external: ArrowUpRight
}

// Ink text on every surface (copper text fails AA at this size); copper carries the
// underline and the arrow. The arrow nudges along its own direction on hover.
const textLinkVariants = cva(
  'group inline-flex items-center gap-2 transition-colors duration-(--duration-base) ease-editorial active:opacity-70 aria-disabled:pointer-events-none aria-disabled:text-muted-foreground aria-disabled:opacity-60',
  {
    variants: {
      variant: {
        cta: 'text-body text-foreground underline decoration-copper decoration-1 underline-offset-[0.35em] hover:decoration-2',
        nav: 'min-h-11 text-small text-muted-foreground hover:text-foreground aria-[current=true]:text-foreground'
      }
    },
    defaultVariants: { variant: 'cta' }
  }
)

const nudge = {
  down: 'group-hover:translate-y-0.5',
  forward: 'group-hover:translate-x-0.5',
  external: 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
}

type TextLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof textLinkVariants> & {
    icon?: keyof typeof icons
    /** Renders the link inert (no href, aria-disabled) — for states that are not available yet. */
    disabled?: boolean
  }

/** The editorial link / CTA: "Explore the story ↓", "Explore ↗", header nav links. */
function TextLink({ variant, icon, disabled, className, children, href, ...props }: TextLinkProps) {
  const Icon = icon ? icons[icon] : null
  const external = icon === 'external'
  return (
    <a
      href={disabled ? undefined : href}
      // Without href an <a> has no link role, and aria-disabled needs one.
      role={disabled ? 'link' : undefined}
      aria-disabled={disabled || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cn(textLinkVariants({ variant }), className)}
      {...props}
    >
      {children}
      {Icon && icon && (
        <Icon
          aria-hidden
          className={cn(
            'size-4 shrink-0 text-copper transition-transform duration-(--duration-base) ease-editorial',
            nudge[icon]
          )}
        />
      )}
    </a>
  )
}

export { TextLink, textLinkVariants, type TextLinkProps }
