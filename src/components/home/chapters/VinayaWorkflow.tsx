import {
  ArrowDown,
  ArrowRight,
  CircleCheck,
  Code,
  FileText,
  ListChecks,
  Search,
  ShieldCheck,
  Undo2
} from 'lucide-react'
import type { ReactNode } from 'react'
import { MonoLabel, RevisionArrow, WorkflowStep } from '@/components/ui'
import { vinaya } from '@/content/portfolio'

const { stages } = vinaya

// Static nodes: icon above the title, so five columns fit the content width.
const node = 'flex-col gap-2 p-3 pr-3'

/** One stage of the loop, with the connector to the next stage (down when stacked, right on wide screens). */
function Stage({ children, last }: { children: ReactNode; last?: boolean }) {
  return (
    <li className='relative flex flex-col items-center gap-3'>
      {children}
      {!last && (
        <span
          aria-hidden
          className='flex justify-center text-copper lg:absolute lg:top-1/2 lg:left-full lg:w-8 lg:-translate-y-1/2'
        >
          <ArrowDown className='size-4 lg:hidden' />
          <ArrowRight className='hidden size-4 lg:block' />
        </span>
      )}
    </li>
  )
}

/**
 * The Vinaya loop as a static, readable diagram: Brief, Developer, Code review and Security
 * review in parallel, the Checks gate, Accepted. The revision path leaves the review stage
 * and returns to Developer. Selecting a stage is the next redesign ticket.
 */
export function VinayaWorkflow() {
  return (
    <figure aria-labelledby='vinaya-workflow-caption' className='flex flex-col gap-6'>
      <figcaption id='vinaya-workflow-caption' className='sr-only'>
        {vinaya.workflowLabel}
      </figcaption>
      <ol className='grid gap-3 lg:grid-cols-5 lg:items-center lg:gap-x-8'>
        <Stage>
          <WorkflowStep static icon={FileText} className={node} {...stages.brief} />
        </Stage>
        <Stage>
          <WorkflowStep static icon={Code} className={node} {...stages.developer} />
        </Stage>
        <Stage>
          <div className='flex w-full flex-col gap-2 border border-dashed border-rule-strong p-2'>
            <MonoLabel as='p' className='px-1'>
              {vinaya.parallelLabel}
            </MonoLabel>
            <ul className='flex flex-col gap-2'>
              <li>
                <WorkflowStep static icon={Search} className={node} {...stages.codeReview} />
              </li>
              <li>
                <WorkflowStep static icon={ShieldCheck} className={node} {...stages.securityReview} />
              </li>
            </ul>
          </div>
        </Stage>
        <Stage>
          <WorkflowStep static icon={ListChecks} className={node} {...stages.checks} />
        </Stage>
        <Stage last>
          <WorkflowStep static icon={CircleCheck} className={node} {...stages.accepted} />
        </Stage>
      </ol>
      {/* The return path: from the centre of the review stage back to the centre of Developer.
          The wrapper spans those two columns; each margin is half a column (25% less a quarter gap).
          -mt-6 cancels the figure's gap so the right leg starts at the review group's bottom edge. */}
      <div className='hidden lg:-mt-6 lg:grid lg:grid-cols-5 lg:gap-x-8'>
        <div className='col-start-2 col-end-4'>
          <RevisionArrow label={vinaya.revision} className='mx-[calc(25%-0.5rem)]' />
        </div>
      </div>
      <p className='flex items-center gap-2 text-small text-foreground lg:hidden'>
        <Undo2 aria-hidden className='size-4 shrink-0 text-copper' />
        {vinaya.revision}: {vinaya.revisionNote}
      </p>
    </figure>
  )
}
