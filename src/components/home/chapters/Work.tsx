import Image from 'next/image'
import onchainCard from '@/assets/onchain-rewind-card.png'
import { ExhibitFrame, ExpandableDetail, Heading, MonoLabel, Text, TextLink } from '@/components/ui'
import { demo, ui, work } from '@/content/portfolio'
import { Reveal } from '../Reveal'
import { Chapter } from './Chapter'
import { WorkSchematic } from './WorkSchematic'

/** The Onchain Rewind demo: its own exhibit, framed as a three-day frontend demo, never a Zerion product. */
function DemoExhibit() {
  return (
    <article
      aria-labelledby='demo-title'
      className='grid items-center gap-12 border-t border-rule pt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20'
    >
      <Reveal className='flex flex-col gap-6'>
        <MonoLabel as='p'>{demo.eyebrow}</MonoLabel>
        <Heading id='demo-title' level={3} size='chapter' weight='normal' className='font-display text-foreground'>
          {demo.name}
        </Heading>
        <MonoLabel as='p' tone='ink' className='self-start border border-rule-strong px-2 py-1'>
          {demo.badge}
        </MonoLabel>
        <div className='flex max-w-measure flex-col gap-2'>
          <Text size='body' className='text-foreground'>
            {demo.body}
          </Text>
          <Text size='body' className='text-foreground'>
            {demo.ownership}
          </Text>
        </div>
        <ExpandableDetail summary={demo.context.summary}>{demo.context.body}</ExpandableDetail>
        <div className='flex flex-wrap gap-x-10 gap-y-4'>
          {demo.links.map((link) => (
            <TextLink key={link.href} href={link.href} icon='external'>
              {link.label}
            </TextLink>
          ))}
        </div>
        <MonoLabel as='p'>
          <span className='sr-only'>{ui.stackPrefix}</span>
          {demo.stack.join(' · ')}
        </MonoLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <ExhibitFrame label={demo.image.label}>
          <Image
            src={onchainCard}
            alt={demo.image.alt}
            className='mt-8 h-auto w-full'
            sizes='(min-width: 1024px) 50vw, 100vw'
          />
        </ExhibitFrame>
      </Reveal>
    </article>
  )
}

/** 05 — the independent projects developed through Vinaya, then the Onchain Rewind demo. */
export function Work() {
  return (
    <Chapter id='work' number={5} title={work.title} lead={work.lead}>
      <ul className='grid gap-x-16 gap-y-20 md:grid-cols-2'>
        {work.items.map((item, i) => (
          <li key={item.name} className='min-w-0'>
            <Reveal delay={(i % 2) * 0.1} className='flex flex-col gap-6 border-t border-rule pt-8'>
              <div className='flex flex-col gap-3'>
                <Heading level={3} size='title' weight='normal' className='font-display text-foreground'>
                  {item.name}
                </Heading>
                <Text size='body' className='text-muted-foreground'>
                  {item.summary}
                  {item.note && ` ${item.note}`}
                </Text>
                {item.link && (
                  <TextLink href={item.link.href} icon='external' className='self-start wrap-anywhere'>
                    {item.link.label}
                  </TextLink>
                )}
              </div>
              <ExhibitFrame label={ui.workSchematicLabel}>
                <div className='pt-6'>
                  <WorkSchematic variant={item.preview} />
                </div>
              </ExhibitFrame>
            </Reveal>
          </li>
        ))}
      </ul>
      <DemoExhibit />
    </Chapter>
  )
}
