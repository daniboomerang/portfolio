import { Code, FileText, type LucideIcon, Search, ShieldCheck, SquareCheck } from 'lucide-react'

/**
 * Fixture data for /system. Names, dates and step labels follow the design brief; the step
 * details are placeholder descriptions so the components can be seen with realistic lengths.
 * The real chapters take their copy from `src/content/portfolio.ts`.
 */

export const timelineFixture = [
  { year: '2008', company: 'Zennio', role: 'Software Engineer', detail: 'C · embedded / home automation' },
  { year: '2010', company: 'Amadeus', role: 'Software Engineer', detail: 'Java · GDS / booking systems' },
  { year: '2013', company: 'Freelance', role: 'Full Stack Developer', detail: 'Angular · web applications' },
  { year: '2016', company: 'Conferize', role: 'Frontend Developer', detail: 'React · GraphQL' },
  { year: '2020', company: 'Sherpany', role: 'Frontend Engineer', detail: 'TypeScript · React' }
]

export const workflowFixture: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: FileText, title: 'Brief', detail: 'Fixture: the task and its context.' },
  { icon: Code, title: 'Developer', detail: 'Fixture: an agent implements it.' },
  { icon: Search, title: 'Code review', detail: 'Fixture: runs in parallel with security.' },
  { icon: ShieldCheck, title: 'Security review', detail: 'Fixture: runs in parallel with code review.' },
  { icon: SquareCheck, title: 'Accepted', detail: 'Fixture: checks passed. Not a deploy.' }
]

export const swatches = [
  { name: 'Paper', token: '--background', className: 'bg-background' },
  { name: 'Ink', token: '--foreground', className: 'bg-foreground' },
  { name: 'Muted', token: '--muted-foreground', className: 'bg-muted-foreground' },
  { name: 'Copper', token: '--copper', className: 'bg-copper' },
  { name: 'Moss', token: '--moss', className: 'bg-moss' },
  { name: 'Card', token: '--card', className: 'bg-card' },
  { name: 'Rule', token: '--rule', className: 'bg-rule' },
  { name: 'Rule strong', token: '--rule-strong', className: 'bg-rule-strong' },
  { name: 'Panel', token: '--panel', className: 'bg-panel' }
]

export const typeScale = [
  { role: 'Display', token: 'text-display', spec: 'Instrument Serif · clamp(48px, 6.5vw, 104px) / 0.98' },
  { role: 'Chapter', token: 'text-chapter', spec: 'Instrument Serif · clamp(34px, 4vw, 64px) / 1.04' },
  { role: 'Title', token: 'text-title', spec: 'Instrument Serif · clamp(24px, 2.2vw, 32px) / 1.15' },
  { role: 'Quote', token: 'text-quote', spec: 'Instrument Serif italic · clamp(26px, 3vw, 44px) / 1.2' },
  { role: 'Lede', token: 'text-lede', spec: 'IBM Plex Sans · clamp(18px, 1.4vw, 21px) / 1.55' },
  { role: 'Body', token: 'text-body', spec: 'IBM Plex Sans · 16–18px / 1.6' },
  { role: 'Small', token: 'text-small', spec: 'IBM Plex Sans · 14px / 1.5' },
  { role: 'Label', token: 'text-label', spec: 'IBM Plex Mono · 12px / 1.4 · uppercase · 0.14em' }
]

export const spacing = [
  { name: 'Gutter', token: '--spacing-gutter', value: 'clamp(24px, 5vw, 80px)', className: 'w-gutter' },
  { name: 'Section', token: '--spacing-section', value: 'clamp(80px, 10vw, 160px)', className: 'w-section' },
  { name: 'Header', token: '--spacing-header', value: '64px', className: 'w-header' },
  { name: 'Node', token: '--spacing-node', value: '48px', className: 'w-node' }
]

export const motionTokens = [
  {
    name: 'Fast',
    token: '--duration-fast',
    className: 'duration-(--duration-fast)',
    value: '150ms',
    use: 'Colour and underline changes'
  },
  {
    name: 'Base',
    token: '--duration-base',
    className: 'duration-(--duration-base)',
    value: '250ms',
    use: 'Arrows, borders, chevrons'
  },
  {
    name: 'Reveal',
    token: '--duration-reveal',
    className: 'duration-(--duration-reveal)',
    value: '500ms',
    use: 'Section reveals (12–24px lift)'
  },
  {
    name: 'Drift',
    token: '--duration-drift',
    className: 'duration-(--duration-drift)',
    value: '9s',
    use: 'Hero diagram float (4px)'
  },
  {
    name: 'Editorial ease',
    token: '--ease-editorial',
    className: 'duration-(--duration-reveal)',
    value: 'cubic-bezier(0.22, 1, 0.36, 1)',
    use: 'Every transition'
  }
]
