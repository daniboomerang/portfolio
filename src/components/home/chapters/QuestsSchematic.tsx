import { Check, Circle, Wallet } from 'lucide-react'
import { cn } from '@/lib/utils'

const quests = [
  { name: 'Explore', progress: 'w-full', done: true },
  { name: 'Complete a quest', progress: 'w-2/3', done: false },
  { name: 'Claim reward', progress: 'w-1/4', done: false }
]

// One component contract, three brands: only the accent and the mark change between variants.
// Each layer is positioned with its own z-index: a transformed sibling would otherwise paint
// over an untransformed one regardless of source order.
const brands = [
  {
    name: 'Brand C',
    mark: 'bg-foreground',
    bar: 'bg-foreground',
    layer: 'z-0 translate-x-10 -translate-y-10 opacity-50'
  },
  { name: 'Brand B', mark: 'bg-copper', bar: 'bg-copper', layer: 'z-10 translate-x-5 -translate-y-5 opacity-75' },
  { name: 'Brand A', mark: 'bg-moss', bar: 'bg-moss', layer: 'z-20' }
]

function Variant({ brand, front }: { brand: (typeof brands)[number]; front: boolean }) {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-4 border border-rule-strong bg-background p-4 text-small [grid-area:1/1]',
        brand.layer
      )}
    >
      <div className='flex items-center justify-between gap-3'>
        <span className='flex items-center gap-2 font-mono text-label uppercase'>
          <span className={cn('size-3', brand.mark)} />
          {brand.name}
        </span>
        <span className='flex items-center gap-1.5 border border-rule px-2 py-0.5 font-mono text-label text-muted-foreground'>
          <Wallet className='size-3.5' />
          0x12…ab
        </span>
      </div>
      {front && (
        <>
          <span className='font-display text-title'>Quests</span>
          <ul className='flex flex-col gap-3'>
            {quests.map((quest) => (
              <li key={quest.name} className='flex items-center gap-3 border border-rule p-3'>
                {quest.done ? (
                  <Check className='size-4 shrink-0 text-moss' />
                ) : (
                  <Circle className='size-4 shrink-0 text-muted-foreground' />
                )}
                <span className='flex min-w-0 flex-1 flex-col gap-1.5'>
                  <span className='truncate'>{quest.name}</span>
                  <span className='h-1 w-full bg-muted'>
                    <span className={cn('block h-full', quest.progress, brand.bar)} />
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <span className='self-start bg-foreground px-3 py-1.5 font-mono text-label uppercase text-background'>
            Claim reward
          </span>
        </>
      )}
    </div>
  )
}

/**
 * Stand-in for the Game7 Summon portal until real product material is supplied: quests with
 * progress, a reward claim and the wallet, layered in three brand variants of one contract.
 */
export function QuestsSchematic() {
  return (
    <div
      role='img'
      aria-label='Schematic of a quests portal: three quests with progress bars, a Claim reward button and a connected wallet, shown as three layered brand variants of the same components.'
      className='grid pt-14 pr-10 pb-2'
    >
      {brands.map((brand, i) => (
        <Variant key={brand.name} brand={brand} front={i === brands.length - 1} />
      ))}
    </div>
  )
}
