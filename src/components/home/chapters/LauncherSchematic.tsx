import { Compass, Download, Gamepad2, Library, Play, Search, Wallet } from 'lucide-react'
import { Panel } from '@/components/ui'
import { schematics } from '@/content/portfolio'

const sidebar = [
  { icon: Library, label: 'Library' },
  { icon: Compass, label: 'Discover' },
  { icon: Download, label: 'Downloads' }
]

// Abstract covers, deliberately unnamed: no real game is implied.
const covers = ['bg-muted', 'bg-accent', 'bg-secondary', 'bg-muted']

/**
 * Stand-in for the Elixir Games launcher until a real screenshot is supplied: a dark desktop
 * window with library navigation, a featured cover with play and download, cover tiles, the
 * wallet connection and the three desktop platforms. Drawn in DOM with panel tokens.
 */
export function LauncherSchematic() {
  return (
    <Panel role='img' aria-label={schematics.launcher} className='mt-8 flex flex-col border border-rule text-small'>
      <div className='flex items-center gap-3 border-b border-rule px-4 py-3'>
        <span className='flex gap-1.5'>
          <span className='size-2 rounded-full bg-rule-strong' />
          <span className='size-2 rounded-full bg-rule-strong' />
          <span className='size-2 rounded-full bg-rule-strong' />
        </span>
        <span className='flex min-w-0 flex-1 items-center gap-2 border border-rule px-2 py-1 text-muted-foreground'>
          <Search className='size-3.5 shrink-0' />
          <span className='truncate font-mono text-label uppercase'>Search games</span>
        </span>
        <span className='flex shrink-0 items-center gap-2 border border-moss px-2 py-1 font-mono text-label uppercase'>
          <Wallet className='size-3.5 text-moss' />
          <span className='hidden sm:inline'>Connect wallet</span>
        </span>
      </div>
      <div className='grid grid-cols-[auto_minmax(0,1fr)]'>
        <ul className='flex flex-col gap-1 border-r border-rule p-3'>
          {sidebar.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={
                i === 0
                  ? 'flex items-center gap-2 bg-accent px-2 py-1.5'
                  : 'flex items-center gap-2 px-2 py-1.5 text-muted-foreground'
              }
            >
              <Icon className='size-4 shrink-0' />
              <span className='hidden sm:inline'>{label}</span>
            </li>
          ))}
        </ul>
        <div className='flex flex-col gap-3 p-3 sm:p-4'>
          <div className='relative flex min-h-40 flex-col justify-end gap-3 overflow-hidden border border-rule bg-muted p-4 pt-14 sm:aspect-video sm:min-h-0'>
            <Gamepad2 className='absolute top-4 right-4 size-6 text-muted-foreground' />
            <span className='font-mono text-label uppercase text-muted-foreground'>Featured game</span>
            <span className='flex flex-wrap gap-2'>
              <span className='flex items-center gap-2 bg-moss px-3 py-1.5 font-mono text-label uppercase text-moss-foreground'>
                <Play className='size-3.5' />
                Play
              </span>
              <span className='flex items-center gap-2 border border-rule-strong px-3 py-1.5 font-mono text-label uppercase'>
                <Download className='size-3.5' />
                Download
              </span>
            </span>
          </div>
          <div className='grid grid-cols-4 gap-2'>
            {covers.map((bg, i) => (
              <span key={i} className={`aspect-[3/4] border border-rule ${bg}`} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-x-4 gap-y-1 border-t border-rule px-4 py-2 font-mono text-label uppercase text-muted-foreground'>
        <span>macOS</span>
        <span>Windows</span>
        <span>Linux</span>
      </div>
    </Panel>
  )
}
