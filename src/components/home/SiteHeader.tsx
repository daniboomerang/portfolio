import { ColorSchemeToggle, MonoLabel, TextLink } from '@/components/ui'
import { nav, profile } from '@/content/portfolio'
import { cn } from '@/lib/utils'

/**
 * DANI ESTEVEZ / SOFTWARE ENGINEER, then Story · Work · Contact and the scheme toggle. Below
 * about 360px the links wrap under the name instead of pushing the page sideways.
 */
export function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={cn('border-b border-rule bg-background/90 backdrop-blur', className)}>
      <nav
        aria-label='Main'
        className='mx-auto flex min-h-header max-w-content flex-wrap items-center justify-between gap-x-4 px-gutter'
      >
        <a href='/' className='flex min-h-11 items-center gap-4'>
          <span className='whitespace-nowrap font-display text-base uppercase tracking-normal text-foreground sm:text-lg sm:tracking-wordmark'>
            {profile.name}
          </span>
          <MonoLabel className='hidden md:inline'>{profile.role}</MonoLabel>
        </a>
        <div className='flex items-center gap-2 sm:gap-6'>
          <ul className='flex items-center gap-3 sm:gap-6'>
            {nav.map((item) => (
              <li key={item.href}>
                <TextLink variant='nav' href={item.href}>
                  {item.label}
                </TextLink>
              </li>
            ))}
          </ul>
          <ColorSchemeToggle />
        </div>
      </nav>
    </header>
  )
}
