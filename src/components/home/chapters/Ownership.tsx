import { PullQuote } from '@/components/ui'
import { ownership } from '@/content/portfolio'
import { Reveal } from '../Reveal'
import { Chapter } from './Chapter'

const line = { vectorEffect: 'non-scaling-stroke' as const }

// Fine lines from scattered starting points, gathering into one copper node that leads on
// into the Vinaya chapter.
const strands = [
  'M0 30 C300 30 520 120 760 200',
  'M60 120 C320 110 540 160 760 200',
  'M180 0 C380 40 560 150 760 200',
  'M0 210 C280 200 520 210 760 200',
  'M120 260 C360 250 560 220 760 200',
  'M380 10 C520 60 640 150 760 200',
  'M300 280 C480 270 640 230 760 200'
]

/** 03 — the ownership problem, the pull quote, and branching lines gathering toward 04. */
export function Ownership() {
  return (
    <Chapter id='ownership' number={3} title={ownership.title} lead={ownership.lead}>
      <Reveal>
        <PullQuote>{ownership.quote}</PullQuote>
      </Reveal>
      <svg viewBox='0 0 800 300' aria-hidden className='h-auto w-full' preserveAspectRatio='xMidYMid meet'>
        {strands.map((d) => (
          <path key={d} d={d} className='fill-none stroke-rule-strong' {...line} />
        ))}
        <path d='M760 200 V300' className='stroke-copper' {...line} />
        <circle cx={760} cy={200} r={14} className='fill-copper/15' />
        <circle cx={760} cy={200} r={6} className='fill-copper' />
      </svg>
    </Chapter>
  )
}
