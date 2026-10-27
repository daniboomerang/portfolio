'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  COLOR_SCHEME_ATTRIBUTE,
  COLOR_SCHEME_COOKIE,
  COLOR_SCHEME_COOKIE_MAX_AGE,
  type ColorScheme,
  DEFAULT_SCHEME
} from '@/lib/color-scheme'
import { Toggle } from './toggle'

export function ColorSchemeToggle() {
  const [scheme, setScheme] = useState<ColorScheme>(DEFAULT_SCHEME)

  useEffect(() => {
    const initial = document.documentElement.getAttribute(COLOR_SCHEME_ATTRIBUTE)
    if (initial === 'light' || initial === 'dark') setScheme(initial)
  }, [])

  function flip() {
    const next: ColorScheme = scheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute(COLOR_SCHEME_ATTRIBUTE, next)
    // biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API lacks Safari/Firefox support; document.cookie is the cross-browser write path
    document.cookie = `${COLOR_SCHEME_COOKIE}=${next}; Path=/; Max-Age=${COLOR_SCHEME_COOKIE_MAX_AGE}; SameSite=Lax`
    setScheme(next)
  }

  const Icon = scheme === 'dark' ? Sun : Moon
  const label = scheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  // A toggle button carries its state in `aria-pressed`, so its name is static and names
  // the thing toggled ('Dark mode'); `title` is the sighted tooltip for what a click does.
  return (
    <Toggle pressed={scheme === 'dark'} onPressedChange={flip} aria-label='Dark mode' title={label}>
      <Icon className='h-4 w-4' />
    </Toggle>
  )
}
