import { Heading, MonoLabel, Text } from '@/components/ui'
import { aiEra } from '@/content/portfolio'
import { Reveal } from '../Reveal'
import { Chapter } from './Chapter'

const line = { vectorEffect: 'non-scaling-stroke' as const }

/** An editor pane: a frame with a few lines of "code". */
function Pane({ x, y, w = 70, h = 84 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} className='fill-card stroke-foreground/50' {...line} />
      <path
        d={`M${x + 8} ${y + 14} h${w * 0.5} M${x + 8} ${y + 26} h${w * 0.65} M${x + 14} ${y + 38} h${w * 0.4} M${x + 14} ${y + 50} h${w * 0.55} M${x + 8} ${y + 62} h${w * 0.3}`}
        className='stroke-rule-strong'
        {...line}
      />
    </g>
  )
}

/**
 * The personal transition in three drawings: one conversation beside the editor, then a pair
 * of panes inside it, then parallel streams of work.
 */
function PhaseDrawing({ phase }: { phase: number }) {
  return (
    <svg viewBox='0 0 220 120' aria-hidden className='h-auto w-full max-w-xs'>
      {phase === 0 && (
        <>
          <Pane x={40} y={18} />
          <path d='M128 34 h56 v26 h-40 l-8 8 v-8 h-8 z' className='fill-card stroke-foreground/50' {...line} />
          <path d='M138 44 h34 M138 51 h22' className='stroke-rule-strong' {...line} />
          <path d='M112 60 H128' className='stroke-copper' {...line} />
          <circle cx={128} cy={60} r={3} className='fill-copper' />
        </>
      )}
      {phase === 1 && (
        <>
          <Pane x={36} y={18} />
          <Pane x={114} y={18} />
          <path d='M106 60 H114' className='stroke-copper' {...line} />
          <circle cx={110} cy={60} r={3.5} className='fill-copper' />
        </>
      )}
      {phase === 2 && (
        <>
          <path
            d='M20 60 C60 60 70 22 110 22 M20 60 C60 60 70 60 110 60 M20 60 C60 60 70 98 110 98'
            className='fill-none stroke-copper'
            {...line}
          />
          <circle cx={20} cy={60} r={4} className='fill-copper' />
          <Pane x={110} y={8} w={86} h={28} />
          <Pane x={110} y={46} w={86} h={28} />
          <Pane x={110} y={84} w={86} h={28} />
        </>
      )}
    </svg>
  )
}

/** 02 — three dated phases of building with AI, each with its drawing. */
export function AiEra() {
  return (
    <Chapter id='ai-era' number={2} title={aiEra.title} lead={aiEra.lead}>
      <ol className='grid gap-16 md:grid-cols-3 md:gap-0'>
        {aiEra.phases.map((phase, i) => (
          <li key={phase.date} className='md:border-l md:border-rule md:px-8 md:first:border-l-0 md:first:pl-0'>
            <Reveal delay={i * 0.1} className='flex flex-col gap-4'>
              <PhaseDrawing phase={i} />
              <MonoLabel as='p'>{phase.date}</MonoLabel>
              <Heading level={3} size='title' weight='normal' className='font-display text-foreground'>
                {phase.title}
              </Heading>
              <Text size='body' className='text-muted-foreground'>
                {phase.body}
              </Text>
            </Reveal>
          </li>
        ))}
      </ol>
    </Chapter>
  )
}
