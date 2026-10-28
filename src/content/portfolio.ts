/**
 * Every fact on the page, in one place. The copy is the owner's approved design brief
 * (DESIGN_BRIEF.md), cross-checked against Daniel's own published profile (github.com/daniboomerang
 * README) and CV — nothing here is invented copy, and private CV details (phone, date of birth)
 * are deliberately left out.
 */

export type ExternalLink = {
  label: string
  href: string
}

export type FoundationStop = {
  year: string
  company: string
  role: string
  detail: string
}

export type WorkFeature = {
  id: string
  company: string
  period: string
  role: string
  heading: string
  body: string
  stack: string[]
  /** Which labelled schematic stands in for the missing product screenshot. */
  preview: 'launcher' | 'quests'
  previewCaption: string
}

export type AiPhase = {
  date: string
  title: string
  body: string
}

export type VinayaStage = {
  title: string
  detail: string
}

export type Work = {
  name: string
  summary: string
  /** Absent when the work has no public URL (Vinaya Studio runs locally). */
  link?: ExternalLink
  note?: string
  preview: 'home' | 'claims' | 'runs' | 'orbit'
}

export const profile = {
  name: 'Dani Estevez',
  role: 'Software Engineer',
  location: 'Thailand · GMT+7',
  email: 'estevez.dani@gmail.com'
}

/** Header navigation: chapter 01, chapter 05 and the contact chapter. */
export const nav: ExternalLink[] = [
  { label: 'Story', href: '/#story' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/#contact' }
]

/** Approved hero copy (design brief). Each headline entry is one desktop line. */
export const hero = {
  headline: ['I build software.', 'And the systems', 'behind it.'],
  summary: '18 years building software. Interfaces, infrastructure, and the judgment connecting them.',
  cta: { label: 'Explore the story', href: '#story' }
}

/** 01 — Built with people. */
export const builtWithPeople = {
  title: 'Built with people.',
  foundations: {
    label: 'The foundations',
    period: '2008–2021',
    stops: [
      { year: '2008', company: 'Zennio', role: 'Software Engineer', detail: 'C · embedded / home automation' },
      { year: '2010', company: 'Amadeus', role: 'Software Engineer', detail: 'Java · GDS / booking systems' },
      { year: '2013', company: 'Freelance', role: 'Full Stack Developer', detail: 'Angular · web applications' },
      { year: '2016', company: 'Conferize', role: 'Frontend Developer', detail: 'React · GraphQL' },
      { year: '2020', company: 'Sherpany', role: 'Frontend Engineer', detail: 'TypeScript · React' }
    ] satisfies FoundationStop[]
  },
  features: [
    {
      id: 'elixir',
      company: 'Elixir Games',
      period: '2021–2023',
      role: 'Lead Frontend Engineer',
      heading: 'Games. Wallets. Three platforms.',
      body: 'Built the Electron and Next.js launcher from scratch. Led four frontend engineers. Shipped on macOS, Windows and Linux.',
      stack: ['Phantom', 'EVM wallets', 'Multi-chain dApps'],
      preview: 'launcher',
      previewCaption:
        'A desktop games launcher: library, play and download, wallet connection. Not a product screenshot.'
    },
    {
      id: 'game7',
      company: 'Game7',
      period: '2023–March 2026',
      role: 'Senior Frontend Architect',
      heading: 'Quests. Rewards. Shared foundations.',
      body: 'Built the Summon admin console and user portal. Many brands, one component contract.',
      stack: ['Next.js', 'TypeScript', 'TanStack Query', 'wagmi', 'viem'],
      preview: 'quests',
      previewCaption: 'Quests, progress and reward claims, rendered by one component contract in several brands.'
    }
  ] satisfies WorkFeature[]
}

/** 02 — The AI era. */
export const aiEra = {
  title: 'The AI era.',
  lead: 'Then the way I built software changed.',
  phases: [
    {
      date: 'Late 2022',
      title: 'A conversation beside the editor.',
      body: 'ChatGPT helped me move faster. I kept the thinking.'
    },
    {
      date: 'Early 2024',
      title: 'A pair inside the editor.',
      body: 'At Game7, I learned to build with AI, decision by decision. The architecture, the dependencies—even the folder structure.'
    },
    {
      date: 'Spring 2026',
      title: 'All in with agents.',
      body: 'Since April, full time on my own work. More work could move without me. Ownership still mattered.'
    }
  ] satisfies AiPhase[]
}

/** 03 — Faster was only part of it. */
export const ownership = {
  title: 'Faster was only part of it.',
  lead: 'Unwanted dependencies. Pull requests too large to review. Decisions the team never learned from.',
  quote: 'I wanted to keep using agents. I needed a better way to work with them.'
}

/** 04 — Vinaya, the turning point. The workflow is static here; its interaction is the next ticket. */
export const vinaya = {
  eyebrow: 'Vinaya / The turning point',
  title: 'So I built the loop.',
  lead: 'At first, I was the loop. Then the rules became code.',
  since: 'Since May 2026',
  ownership: 'Architecture, contracts and checks by me. Agents implement. I remain responsible.',
  stages: {
    brief: { title: 'Brief', detail: 'The task, its context and its contract.' },
    developer: { title: 'Developer', detail: 'An agent implements the brief.' },
    codeReview: { title: 'Code review', detail: 'Correctness, architecture and tests.' },
    securityReview: { title: 'Security review', detail: 'Risks and unsafe changes.' },
    checks: { title: 'Checks', detail: 'Deterministic gates must pass. Approval alone is not enough.' },
    accepted: { title: 'Accepted', detail: 'Ready to merge. Not a deploy.' }
  } satisfies Record<string, VinayaStage>,
  workflowLabel: 'The Vinaya loop, in order',
  parallelLabel: 'In parallel',
  revision: 'Revise',
  revisionNote: 'review can send the work back to Developer.',
  judgment: {
    heading: 'What needed my judgment?',
    lead: 'Not every change is obvious. I review the record, understand the context, and make the call when it matters.',
    label: 'Illustrative example · not a recorded run',
    steps: [
      { question: 'What changed?', answer: 'An agent formats one date label by adding a new date library.' },
      {
        question: 'What could go wrong?',
        answer: 'Code review flags a new dependency for a single call site. Security review finds no risk.'
      },
      { question: 'What did the checks say?', answer: 'Typecheck, lint and build pass. The change is still wrong.' },
      {
        question: 'My decision',
        answer:
          'No new dependency: use the platform’s date formatting. Back to the developer, with the rule written down.'
      }
    ]
  },
  engine: {
    name: 'Atta Engine',
    caption: 'The machinery underneath.',
    detail: 'Agent teams written as specifications and compiled into executable flows.',
    stages: ['Define', 'Compile', 'Execute']
  },
  close: 'Then I used it to build.'
}

/** 05 — The work that came through it. The owner states each was developed through Vinaya. */
export const work = {
  title: 'The work that came through it.',
  lead: 'Independent projects, each developed through Vinaya. Not the workflow itself.',
  items: [
    {
      name: 'AttaLabs',
      summary: 'The home for my work.',
      link: { label: 'attalabs.dev', href: 'https://attalabs.dev/' },
      preview: 'home'
    },
    {
      name: 'Herald',
      summary: 'Claims connected to evidence.',
      link: { label: 'herald.attalabs.dev', href: 'https://herald.attalabs.dev/' },
      preview: 'claims'
    },
    {
      name: 'Vinaya Portal / Studio',
      summary: 'The loop, building its own interfaces.',
      link: { label: 'vinaya.attalabs.dev', href: 'https://vinaya.attalabs.dev/' },
      note: 'Studio runs locally.',
      preview: 'runs'
    },
    {
      name: 'Vāda',
      summary: 'Agents thinking together.',
      link: { label: 'vada.attalabs.dev', href: 'https://vada.attalabs.dev/' },
      preview: 'orbit'
    }
  ] satisfies Work[]
}

/** The separate demo exhibit in chapter 05. "Three days" is the core demo build only. */
export const demo = {
  name: 'Onchain Rewind',
  eyebrow: 'Three days. One deliberate test.',
  badge: 'Frontend demo · Built through Vinaya',
  body: 'A frontend application demo built to test the harness.',
  ownership: 'Architecture, stack, design system and visual direction by me.',
  context: {
    summary: 'About this demo',
    body: 'Created for a Zerion frontend application, using onchain data. It is my demo — not an official Zerion product, and not a commercial product.'
  },
  links: [
    { label: 'Try the demo', href: 'https://zerion.attalabs.dev/' },
    { label: 'Inspect the build history', href: 'https://zerion.attalabs.dev/dev-stats' }
  ] satisfies ExternalLink[],
  stack: ['TanStack Start', 'React', 'TypeScript', 'viem'],
  image: {
    alt: 'The Onchain Rewind social card: the title “Onchain Rewind”, the line “Your wallet’s year, played back”, and a ring of coloured particles on a dark background.',
    label: 'Social card from the demo'
  }
}

/** 06 — Good software takes people. */
export const contact = {
  title: 'Good software takes people.',
  lead: 'I love building these systems. I also miss building with a team.',
  cta: { label: 'Let’s build something together', href: `mailto:${profile.email}` }
}

/** Footer links. No CV download exists in the repo yet, so "My full story" carries the long form. */
export const footerLinks: ExternalLink[] = [
  { label: 'GitHub', href: 'https://github.com/daniboomerang' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/estevezdani/' },
  { label: 'AttaLabs', href: 'https://attalabs.dev/' },
  { label: 'My full story', href: 'https://herald.attalabs.dev/daniboomerang' }
]

/** Only what reflects the real workflow: this portfolio is built through Fredrin tickets. */
export const provenance = 'Built with Fredrin.'
