import { ArrowRight } from 'lucide-react'
import { Heading, MonoLabel, Text } from '@/components/ui'
import { vinaya } from '@/content/portfolio'
import { Reveal } from '../Reveal'
import { Chapter } from './Chapter'
import { VinayaWorkflow } from './VinayaWorkflow'

const line = { vectorEffect: 'non-scaling-stroke' as const }

/** "What needed my judgment?" — one example, labelled as illustrative, readable without interaction. */
function Judgment() {
  const { judgment } = vinaya
  return (
    <section
      aria-labelledby='judgment-title'
      className='grid gap-10 border border-rule p-6 sm:p-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16'
    >
      <div className='flex flex-col gap-4'>
        <Heading id='judgment-title' level={3} size='title' weight='normal' className='font-display'>
          {judgment.heading}
        </Heading>
        <Text size='body' className='text-muted-foreground'>
          {judgment.lead}
        </Text>
        <MonoLabel as='p' tone='ink' className='self-start border border-rule-strong px-2 py-1'>
          {judgment.label}
        </MonoLabel>
      </div>
      <ol className='flex flex-col'>
        {judgment.steps.map((step, i) => (
          <li
            key={step.question}
            className='grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1 border-t border-rule py-4 first:border-t-0 first:pt-0'
          >
            <span aria-hidden className='font-mono text-label text-copper'>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className='font-mono text-label font-semibold uppercase'>{step.question}</span>
            <Text size='small' className='col-start-2 text-muted-foreground'>
              {step.answer}
            </Text>
          </li>
        ))}
      </ol>
    </section>
  )
}

/** The Atta Engine strip: the execution machinery under the loop, deliberately small. */
function EngineStrip() {
  const { engine } = vinaya
  return (
    <div className='flex flex-col gap-6 border-y border-rule py-6 lg:flex-row lg:items-center lg:justify-between'>
      <div className='flex max-w-measure flex-col gap-1'>
        <MonoLabel as='p' tone='ink' className='font-semibold'>
          {engine.name}
        </MonoLabel>
        <Text size='small' className='text-muted-foreground'>
          {engine.caption} {engine.detail}
        </Text>
      </div>
      <ol className='flex flex-wrap items-center gap-3 lg:shrink-0 lg:flex-nowrap'>
        {engine.stages.map((stage, i) => (
          <li key={stage} className='flex items-center gap-3'>
            <span className='border border-rule-strong px-4 py-2 font-mono text-label uppercase'>{stage}</span>
            {i < engine.stages.length - 1 && <ArrowRight aria-hidden className='size-4 text-copper' />}
          </li>
        ))}
      </ol>
    </div>
  )
}

/** 04 — the dark Vinaya centrepiece: the loop, the ownership line, a judgment example, the engine. */
export function Vinaya() {
  return (
    <Chapter
      id='vinaya'
      number={4}
      node='copper'
      panel
      eyebrow={vinaya.eyebrow}
      title={vinaya.title}
      lead={vinaya.lead}
      aside={
        <div className='flex max-w-xs flex-col gap-3 lg:text-right'>
          <MonoLabel as='p'>{vinaya.since}</MonoLabel>
          <MonoLabel as='p' tone='ink'>
            {vinaya.ownership}
          </MonoLabel>
        </div>
      }
    >
      <Reveal>
        <VinayaWorkflow />
      </Reveal>
      <Reveal>
        <Judgment />
      </Reveal>
      <Reveal className='flex flex-col gap-section'>
        <EngineStrip />
        <div className='flex flex-col gap-6'>
          <p className='font-display text-chapter text-foreground'>{vinaya.close}</p>
          {/* The outgoing line branches toward the work in chapter 05. */}
          <svg viewBox='0 0 800 120' aria-hidden className='h-auto w-full'>
            <path
              d='M40 0 V40 C40 80 140 80 220 120 M40 40 C40 90 360 80 420 120 M40 40 C40 100 560 80 620 120 M40 40 V120'
              className='fill-none stroke-copper'
              {...line}
            />
            <circle cx={40} cy={40} r={5} className='fill-copper' />
          </svg>
        </div>
      </Reveal>
    </Chapter>
  )
}
