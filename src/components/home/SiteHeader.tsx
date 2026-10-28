import { ColorSchemeToggle, MonoLabel, TextLink } from '@/components/ui'
import { nav, profile } from '@/content/portfolio'
import { cn } from '@/lib/utils'

/** DANI ESTEVEZ / SOFTWARE ENGINEER, then Story · Work · Contact and the scheme toggle. */
export function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={cn('border-b border-rule bg-background/90 backdrop-blur', className)}>
      <nav
        aria-label='Main'
        className='mx-auto flex h-header max-w-content items-center justify-between gap-4 px-gutter'
      >
        <a href='/' className='flex min-h-11 items-center gap-4'>
          <span className='whitespace-nowrap font-display text-base uppercase tracking-wordmark text-foreground sm:text-lg'>{profile.name}</span>
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
