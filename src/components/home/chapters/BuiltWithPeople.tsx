import { ExhibitFrame, Heading, MonoLabel, Text, Timeline, TimelineStop } from '@/components/ui'
import { builtWithPeople, type WorkFeature } from '@/content/portfolio'
import { cn } from '@/lib/utils'
import { Reveal } from '../Reveal'
import { Chapter } from './Chapter'
import { LauncherSchematic } from './LauncherSchematic'
import { QuestsSchematic } from './QuestsSchematic'

const previews = {
  launcher: LauncherSchematic,
  quests: QuestsSchematic
}

/** A large work feature. `flip` puts the preview first on wide screens, so features alternate. */
function Feature({ feature, flip }: { feature: WorkFeature; flip?: boolean }) {
  const Preview = previews[feature.preview]
  const titleId = `${feature.id}-title`
  return (
    <article
      aria-labelledby={titleId}
      className='grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20'
    >
      <Reveal className={cn('flex flex-col gap-6', flip && 'lg:order-2')}>
        <p className='flex flex-col gap-2'>
          <MonoLabel>{feature.period}</MonoLabel>
          <MonoLabel tone='ink' className='font-semibold'>
            {feature.company}
          </MonoLabel>
          <MonoLabel>{feature.role}</MonoLabel>
        </p>
        <Heading id={titleId} level={3} size='title' weight='normal' className='font-display text-foreground'>
          {feature.heading}
        </Heading>
        <Text size='body' className='max-w-measure text-foreground'>
          {feature.body}
        </Text>
        <MonoLabel as='p'>
          <span className='sr-only'>Stack: </span>
          {feature.stack.join(' · ')}
        </MonoLabel>
      </Reveal>
      <Reveal delay={0.1} className={cn(flip && 'lg:order-1')}>
        <ExhibitFrame label='Illustrative schematic' caption={feature.previewCaption}>
          <Preview />
        </ExhibitFrame>
      </Reveal>
    </article>
  )
}

/** 01 — the early-career timeline, then the Elixir Games and Game7 features. */
export function BuiltWithPeople() {
  const { foundations, features } = builtWithPeople
  return (
    <Chapter id='story' number={1} node='moss' title={builtWithPeople.title}>
      <Reveal className='flex flex-col gap-4'>
        <MonoLabel as='p'>
          {foundations.label} / {foundations.period}
        </MonoLabel>
        <Timeline label={`${foundations.label}, ${foundations.period}`} hint='Scroll for more'>
          {foundations.stops.map((stop) => (
            <TimelineStop key={stop.year} {...stop} />
          ))}
        </Timeline>
      </Reveal>
      {features.map((feature, i) => (
        <Feature key={feature.id} feature={feature} flip={i % 2 === 1} />
      ))}
    </Chapter>
  )
}
