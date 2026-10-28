'use client'

import { Code } from 'lucide-react'
import { MotionConfig } from 'motion/react'
import { type ReactNode, useState } from 'react'
import { Hero } from '@/components/home/Hero'
import { HeroDiagram } from '@/components/home/HeroDiagram'
import { SiteHeader } from '@/components/home/SiteHeader'
import { VinayaWorkflow } from '@/components/home/chapters/VinayaWorkflow'
import {
  ChapterHeader,
  ChapterNode,
  ExhibitFrame,
  ExpandableDetail,
  Heading,
  MonoLabel,
  Panel,
  PullQuote,
  RevisionArrow,
  Separator,
  Text,
  TextLink,
  Timeline,
  TimelineStop,
  WorkflowStep
} from '@/components/ui'
import { cn } from '@/lib/utils'
import { motionTokens, spacing, swatches, timelineFixture, typeScale, workflowFixture } from './fixtures'

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className='flex flex-col gap-8 border-t border-rule pt-10'>
      <div className='flex flex-col gap-2'>
        <Heading id={id} level={2} size='title' weight='normal' className='font-display'>
          {title}
        </Heading>
        {intro && (
          <Text size='small' className='max-w-measure text-muted-foreground'>
            {intro}
          </Text>
        )}
      </div>
      {children}
    </section>
  )
}

/** A labelled specimen cell. */
function Specimen({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <MonoLabel as='p'>{label}</MonoLabel>
      {children}
    </div>
  )
}

/** Renders the same content on the light paper surface and on the dark Vinaya panel. */
function Surfaces({ children }: { children: ReactNode }) {
  return (
    <div className='grid gap-6 lg:grid-cols-2'>
      <div className='flex flex-col gap-8 border border-rule bg-background p-6 sm:p-8'>
        <MonoLabel as='p' tone='ink'>
          Paper surface
        </MonoLabel>
        {children}
      </div>
      <Panel className='flex flex-col gap-8 p-6 sm:p-8'>
        <MonoLabel as='p' tone='ink'>
          Panel surface
        </MonoLabel>
        {children}
      </Panel>
    </div>
  )
}

function WorkflowDemo() {
  const [selected, setSelected] = useState(1)
  const step = (index: number, item = workflowFixture[index]!) => (
    <WorkflowStep
      icon={item.icon}
      title={item.title}
      detail={item.detail}
      selected={selected === index}
      onClick={() => setSelected(index)}
    />
  )
  return (
    <div className='flex flex-col gap-6'>
      <div className='grid gap-3 md:grid-cols-[1fr_1fr_1.2fr_1fr] md:items-center'>
        {step(0)}
        {step(1)}
        <div className='flex flex-col gap-3'>
          {step(2)}
          {step(3)}
        </div>
        {step(4)}
      </div>
      <div className='hidden md:grid md:grid-cols-[1fr_1fr_1.2fr_1fr]'>
        <RevisionArrow className='col-start-2 col-end-4 mx-[25%]' />
      </div>
      <RevisionArrow className='md:hidden' />
      <Text size='small' className='text-muted-foreground' aria-live='polite'>
        Selected: {workflowFixture[selected]?.title}. Click, or Tab and press Enter, to select a step.
      </Text>
    </div>
  )
}

export function SystemPage() {
  return (
    <>
      <SiteHeader className='sticky top-0 z-40' />
      <main className='mx-auto flex max-w-content flex-col gap-section px-gutter py-16'>
        <header className='flex flex-col gap-4'>
          <MonoLabel as='p'>/system</MonoLabel>
          <Heading level={1} size='display' weight='normal' className='font-display'>
            Design system
          </Heading>
          <Text size='lede' className='max-w-measure text-muted-foreground'>
            Every token and editorial component of the portfolio, on fixture data. Hover, focus-visible and pressed
            states are live: use the pointer and Tab. The header above and the hero at the end are the real ones. Use
            the toggle in the header to check the dark scheme.
          </Text>
        </header>

        <Section id='colour' title='Colour tokens' intro='Semantic variables in globals.css, redeclared by the panel.'>
          <Surfaces>
            <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
              {swatches.map((swatch) => (
                <li key={swatch.token} className='flex flex-col gap-2'>
                  <span className={cn('h-14 border border-rule', swatch.className)} />
                  <span className='text-small text-foreground'>{swatch.name}</span>
                  <MonoLabel className='normal-case'>{swatch.token}</MonoLabel>
                </li>
              ))}
            </ul>
          </Surfaces>
        </Section>

        <Section id='type' title='Typography' intro='Editorial serif display, sans body, mono micro-labels.'>
          <ul className='flex flex-col'>
            {typeScale.map((type) => (
              <li
                key={type.token}
                className='grid gap-2 border-b border-rule py-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8'
              >
                <div className='flex flex-col gap-1'>
                  <MonoLabel tone='ink'>{type.role}</MonoLabel>
                  <MonoLabel className='normal-case'>{type.token}</MonoLabel>
                  <span className='text-small text-muted-foreground'>{type.spec}</span>
                </div>
                <p
                  className={cn(
                    'text-foreground',
                    type.token,
                    ['text-display', 'text-chapter', 'text-title'].includes(type.token) && 'font-display',
                    type.token === 'text-quote' && 'font-display italic',
                    type.token === 'text-label' && 'font-mono uppercase'
                  )}
                >
                  I build software. And the systems behind it.
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id='layout' title='Layout and spacing'>
          <ul className='flex flex-col gap-4'>
            {spacing.map((space) => (
              <li key={space.token} className='grid items-center gap-2 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8'>
                <div className='flex flex-col gap-1'>
                  <MonoLabel tone='ink'>{space.name}</MonoLabel>
                  <MonoLabel className='normal-case'>
                    {space.token} · {space.value}
                  </MonoLabel>
                </div>
                <span className={cn('h-3 bg-copper', space.className)} />
              </li>
            ))}
            <li className='grid items-center gap-2 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-8'>
              <div className='flex flex-col gap-1'>
                <MonoLabel tone='ink'>Content / measure</MonoLabel>
                <MonoLabel className='normal-case'>max-w-content 1160px · max-w-measure 62ch</MonoLabel>
              </div>
              <Text size='body' className='max-w-measure border-x border-copper px-3'>
                Body copy stays under about 62 characters per line, so a paragraph reads in one sweep and never
                stretches across the whole content width.
              </Text>
            </li>
          </ul>
        </Section>

        <Section
          id='motion'
          title='Motion'
          intro='Point at a row to run its duration. Reduced motion removes movement (CSS and motion/react); content never waits on it.'
        >
          <ul className='flex flex-col'>
            {motionTokens.map((token) => (
              <li
                key={token.token}
                className='group grid items-center gap-2 border-b border-rule py-4 sm:grid-cols-[12rem_minmax(0,1fr)_minmax(0,1fr)] sm:gap-8'
              >
                <div className='flex flex-col gap-1'>
                  <MonoLabel tone='ink'>{token.name}</MonoLabel>
                  <MonoLabel className='normal-case'>
                    {token.token} · {token.value}
                  </MonoLabel>
                </div>
                <span className='text-small text-muted-foreground'>{token.use}</span>
                <span className='relative h-3 border-b border-rule'>
                  <span
                    className={cn(
                      'absolute top-0 left-0 size-3 rounded-full bg-copper transition-[left] ease-editorial group-hover:left-[calc(100%-0.75rem)]',
                      token.className
                    )}
                  />
                </span>
              </li>
            ))}
          </ul>
          <div className='grid gap-6 md:grid-cols-2'>
            <Specimen label='Your motion setting: the planes float once'>
              <MotionConfig reducedMotion='user'>
                <HeroDiagram className='max-w-sm border border-rule' />
              </MotionConfig>
            </Specimen>
            <Specimen label='Reduced motion: static, everything visible'>
              <MotionConfig reducedMotion='always'>
                <HeroDiagram className='max-w-sm border border-rule' />
              </MotionConfig>
            </Specimen>
          </div>
        </Section>

        <Section id='editorial' title='Editorial components'>
          <Surfaces>
            <Specimen label='Section header'>
              <ChapterHeader
                number={2}
                title='The AI era.'
                lead='Then the way I built software changed.'
                level={3}
                node='outline'
              />
            </Specimen>
            <Specimen label='Rule'>
              <Separator />
            </Specimen>
            <Specimen label='Pull quote'>
              <PullQuote>I wanted to keep using agents. I needed a better way to work with them.</PullQuote>
            </Specimen>
            <Specimen label='Body copy'>
              <Text size='body' className='max-w-measure'>
                Built the Electron and Next.js launcher from scratch. Led four frontend engineers. Shipped on macOS,
                Windows and Linux.
              </Text>
            </Specimen>
            <Specimen label='Mono label / date'>
              <div className='flex flex-wrap gap-6'>
                <MonoLabel as='time' tone='ink' dateTime='2021'>
                  2021 – 2023
                </MonoLabel>
                <MonoLabel>Lead frontend engineer</MonoLabel>
                <MonoLabel tone='moss'>Since May 2026</MonoLabel>
              </div>
            </Specimen>
            <Specimen label='Link / CTA'>
              <div className='flex flex-wrap gap-8'>
                <TextLink href='#editorial' icon='down'>
                  Explore the story
                </TextLink>
                <TextLink href='https://attalabs.dev/' icon='external'>
                  Explore
                </TextLink>
                <TextLink href='mailto:estevez.dani@gmail.com' icon='forward'>
                  Let’s build something together
                </TextLink>
              </div>
            </Specimen>
            <Specimen label='Work exhibit frame'>
              <ExhibitFrame
                label='Illustrative schematic'
                caption='A labelled schematic stands in until a real preview is supplied.'
              >
                <div className='flex aspect-[16/9] items-end gap-3 pt-8'>
                  {['h-2/5', 'h-3/4', 'h-1/2', 'h-5/6', 'h-3/5'].map((height) => (
                    <span key={height} className={cn('flex-1 border border-rule bg-muted', height)} />
                  ))}
                </div>
              </ExhibitFrame>
            </Specimen>
          </Surfaces>
        </Section>

        <Section id='story' title='Story elements'>
          <Specimen label='Timeline stop (horizontal; scrolls inside itself on small screens, with the hint line)'>
            <Timeline label='Early career, 2008 to 2021 (fixture)' hint='Scroll for more'>
              {timelineFixture.map((stop, i) => (
                <TimelineStop key={stop.year} {...stop} selected={i === 4} />
              ))}
            </Timeline>
          </Specimen>
          <Specimen label='Chapter node on the thread'>
            <ol className='flex flex-col gap-10 border-l border-copper pl-0'>
              {(
                [
                  [1, 'moss', 'Built with people.'],
                  [3, 'outline', 'Faster was only part of it.'],
                  [4, 'copper', 'So I built the loop.']
                ] as const
              ).map(([n, variant, title]) => (
                <li key={n} className='flex items-center gap-2'>
                  <ChapterNode number={n} variant={variant} className='-translate-x-1/2' />
                  <span className='font-display text-title'>{title}</span>
                </li>
              ))}
            </ol>
          </Specimen>
          <Specimen label='Dark panel · workflow step nodes · revision arrow · expandable detail'>
            <Panel className='flex flex-col gap-10 p-6 sm:p-10'>
              <ChapterHeader
                number={4}
                node='copper'
                level={3}
                eyebrow='Vinaya / The turning point'
                title='So I built the loop.'
                lead='At first, I was the loop. Then the rules became code.'
              />
              <WorkflowDemo />
              <ExpandableDetail summary='What needed my judgment? (fixture)'>
                Fixture detail. The real chapter shows one labelled recorded run, or a clearly labelled illustrative
                example.
              </ExpandableDetail>
            </Panel>
          </Specimen>
        </Section>

        <Section
          id='states'
          title='Interaction states'
          intro='Hover, focus-visible and active are live on every control. Selected, disabled and expanded are set here.'
        >
          <Surfaces>
            <Specimen label='Link: rest · disabled'>
              <div className='flex flex-wrap gap-8'>
                <TextLink href='#states' icon='forward'>
                  Hover, Tab or press me
                </TextLink>
                <TextLink disabled icon='forward'>
                  Disabled
                </TextLink>
              </div>
            </Specimen>
            <Specimen label='Workflow step: default · selected · disabled · static (read-only)'>
              <div className='grid gap-3 sm:grid-cols-2'>
                <WorkflowStep icon={Code} title='Default' />
                <WorkflowStep icon={Code} title='Selected' selected />
                <WorkflowStep icon={Code} title='Disabled' disabled />
                <WorkflowStep icon={Code} title='Static' detail='Not a control.' static />
              </div>
            </Specimen>
            <Specimen label='Expandable detail: collapsed · expanded'>
              <div className='flex flex-col gap-4'>
                <ExpandableDetail summary='Collapsed'>Hidden until opened.</ExpandableDetail>
                <ExpandableDetail summary='Expanded' defaultOpen>
                  Open by default: readable without hovering, operable with Enter or Space.
                </ExpandableDetail>
              </div>
            </Specimen>
            <Specimen label='Chapter node: outline · moss · copper'>
              <div className='flex gap-4'>
                <ChapterNode number={2} />
                <ChapterNode number={1} variant='moss' />
                <ChapterNode number={4} variant='copper' />
              </div>
            </Specimen>
          </Surfaces>
        </Section>
      </main>

      {/* Full width, outside the content column, so it lays out exactly as on the home page. */}
      <section aria-labelledby='composition' className='flex flex-col gap-8 pb-section'>
        <div className='mx-auto flex w-full max-w-content flex-col gap-2 border-t border-rule px-gutter pt-10'>
          <Heading id='composition' level={2} size='title' weight='normal' className='font-display'>
            Header and hero
          </Heading>
          <Text size='small' className='text-muted-foreground'>
            The real components, as rendered on the home page (inert here: the live header is at the top).
          </Text>
        </div>
        {/* A specimen, not a second page: inert keeps its nav, toggle and h1 out of the tab order
            and the accessibility tree. */}
        <div inert className='border-y border-rule'>
          <SiteHeader />
          <Hero />
        </div>
      </section>

      <section aria-labelledby='chapter-diagram' className='flex flex-col gap-8 pb-section'>
        <div className='mx-auto flex w-full max-w-content flex-col gap-2 border-t border-rule px-gutter pt-10'>
          <Heading id='chapter-diagram' level={2} size='title' weight='normal' className='font-display'>
            Chapter 04 workflow
          </Heading>
          <Text size='small' className='text-muted-foreground'>
            The real static Vinaya loop from the home page, on the panel: static steps, the parallel review group, the
            Checks gate and the revision arrow from review back to Developer.
          </Text>
        </div>
        <Panel className='mx-auto w-full max-w-content px-gutter py-10'>
          <VinayaWorkflow />
        </Panel>
      </section>
    </>
  )
}
