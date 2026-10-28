import { MonoLabel, TextLink } from '@/components/ui'
import { footerLinks, profile, provenance } from '@/content/portfolio'

/** The page footer: profile links, then the name, location and build provenance. */
export function SiteFooter() {
  return (
    <footer className='border-t border-rule'>
      <div className='mx-auto flex max-w-content flex-col gap-6 px-gutter py-12 md:flex-row md:items-center md:justify-between'>
        <ul className='flex flex-wrap gap-x-8 gap-y-2'>
          {footerLinks.map((link) => (
            <li key={link.href}>
              <TextLink variant='nav' href={link.href} target='_blank' rel='noreferrer'>
                {link.label}
              </TextLink>
            </li>
          ))}
        </ul>
        <div className='flex flex-wrap gap-x-6 gap-y-2'>
          <MonoLabel>
            {profile.name} · {profile.location}
          </MonoLabel>
          <MonoLabel>{provenance}</MonoLabel>
        </div>
      </div>
    </footer>
  )
}
