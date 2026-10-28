import { Heading, MonoLabel, Text, TextLink } from '@/components/ui'
import { hero, profile } from '@/content/portfolio'
import { HeroDiagram } from './HeroDiagram'

/**
 * First screen: the approved headline (one desktop line per entry), the summary, the story
 * link and the location, with the architectural drawing beside it — under it on narrow
 * screens. The text renders visible from the server; only the drawing moves, once.
 */
export function Hero() {
  return (
    <section
      aria-labelledby='hero-title'
      className='mx-auto grid max-w-content items-center gap-12 px-gutter pt-32 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:pt-40'
    >
      <div className='flex flex-col gap-8'>
        <Heading id='hero-title' level={1} size='display' weight='normal' className='font-display text-foreground'>
          {hero.headline.map((line, i) => (
            <span key={line} className='lg:block'>
              {line}
              {i < hero.headline.length - 1 && ' '}
            </span>
          ))}
        </Heading>
        <Text size='lede' className='max-w-measure text-muted-foreground'>
          {hero.summary}
        </Text>
        <div className='flex flex-wrap items-center gap-x-10 gap-y-4'>
          <TextLink href={hero.cta.href} icon='down'>
            {hero.cta.label}
          </TextLink>
          <MonoLabel>{profile.location}</MonoLabel>
        </div>
      </div>
      <HeroDiagram className='mx-auto max-w-md lg:max-w-none' />
    </section>
  )
}
