import { schematics, type Work } from '@/content/portfolio'

const line = { vectorEffect: 'non-scaling-stroke' as const }

/** Small labelled line drawings that stand in for the missing product screenshots in chapter 05. */
export function WorkSchematic({ variant }: { variant: Work['preview'] }) {
  return (
    <svg viewBox='0 0 240 140' role='img' aria-label={schematics[variant]} className='h-auto w-full'>
      {variant === 'home' && (
        <>
          <rect x={10} y={10} width={220} height={120} className='fill-background stroke-foreground/50' {...line} />
          <path d='M10 28 H230 M20 19 h30 M180 19 h40' className='stroke-rule-strong' {...line} />
          <path d='M24 52 h120 M24 66 h90' className='stroke-foreground/60' strokeWidth={4} />
          <path d='M24 84 h150 M24 92 h120' className='stroke-rule-strong' {...line} />
          <rect x={24} y={104} width={56} height={16} className='fill-none stroke-rule-strong' {...line} />
          <rect x={90} y={104} width={56} height={16} className='fill-none stroke-rule-strong' {...line} />
          <circle cx={196} cy={66} r={6} className='fill-copper' />
        </>
      )}
      {variant === 'claims' && (
        <>
          {[30, 70, 110].map((y) => (
            <path key={y} d={`M20 ${y} h70`} className='stroke-foreground/60' strokeWidth={4} />
          ))}
          {[22, 46, 70, 94, 118].map((y) => (
            <rect
              key={y}
              x={170}
              y={y - 7}
              width={50}
              height={14}
              className='fill-background stroke-rule-strong'
              {...line}
            />
          ))}
          <path
            d='M96 30 C130 30 140 22 170 22 M96 30 C130 30 140 46 170 46 M96 70 C130 70 140 70 170 70 M96 110 C130 110 140 94 170 94 M96 110 C130 110 140 118 170 118'
            className='fill-none stroke-copper'
            {...line}
          />
        </>
      )}
      {variant === 'runs' && (
        <>
          <rect x={10} y={10} width={220} height={120} className='fill-background stroke-foreground/50' {...line} />
          {[30, 52, 74, 96, 118].map((y, i) => (
            <g key={y}>
              <circle cx={28} cy={y} r={4} className={i === 1 ? 'fill-copper' : 'fill-moss'} />
              <path d={`M42 ${y} h${110 - i * 12}`} className='stroke-rule-strong' {...line} />
              <path d={`M190 ${y} h24`} className='stroke-rule-strong' {...line} />
            </g>
          ))}
        </>
      )}
      {variant === 'orbit' && (
        <>
          <ellipse cx={120} cy={70} rx={100} ry={36} className='fill-none stroke-rule-strong' {...line} />
          <ellipse cx={120} cy={70} rx={60} ry={58} className='fill-none stroke-rule-strong' {...line} />
          <circle cx={120} cy={70} r={18} className='fill-background stroke-foreground/60' {...line} />
          <circle cx={20} cy={70} r={6} className='fill-foreground/70' />
          <circle cx={168} cy={36} r={6} className='fill-copper' />
          <circle cx={120} cy={128} r={6} className='fill-moss' />
        </>
      )}
    </svg>
  )
}
