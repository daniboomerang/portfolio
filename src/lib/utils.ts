import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// The editorial type scale in globals.css (`text-display`, `text-label`…) must read as font
// sizes, or tailwind-merge drops them as a colour clash with `text-foreground`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['display', 'chapter', 'title', 'quote', 'lede', 'body', 'small', 'label'] }]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
