import { TextLink } from '@/components/ui'
import { contact } from '@/content/portfolio'
import { Reveal } from '../Reveal'
import { Chapter } from './Chapter'

/** 06 — Good software takes people: the one contact call to action. */
export function Contact() {
  return (
    <Chapter id='contact' number={6} last title={contact.title} lead={contact.lead}>
      <Reveal>
        <TextLink href={contact.cta.href} icon='forward' className='text-lede'>
          {contact.cta.label}
        </TextLink>
      </Reveal>
    </Chapter>
  )
}
