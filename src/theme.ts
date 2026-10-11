// theme.ts — light/dark toggle. Writes data-theme on <html> (what Tiny Wire's dark
// tokens key on) and remembers the choice in localStorage as 'tw-theme'.
import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
const KEY = 'tw-theme'

function current(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(current)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* private mode: the toggle still works for this page load */
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}
