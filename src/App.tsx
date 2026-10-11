// App.tsx — the one page. Replace its contents with the wire; keep the theme toggle.
import { useTheme } from './theme'

export default function App() {
  const [theme, toggle] = useTheme()
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col gap-(--space-16) p-(--space-24)">
      <header className="flex items-center justify-between">
        <span className="text-(length:--text-xs) font-(--weight-semibold) tracking-(--tracking-caps) text-(--text-tertiary) uppercase">
          Tiny App
        </span>
        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          className="rounded-(--radius) border border-(--border) bg-(--surface) px-(--space-12) py-(--space-6) text-(length:--text-md) text-(--text-secondary) hover:text-(--text-primary)"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      <section className="rounded-(--radius) border border-(--border) bg-(--surface) p-(--space-24) shadow-(--shadow-card)">
        <h1 className="font-(family-name:--font-heading) text-(length:--text-xl) font-(--weight-bold) tracking-(--tracking-tight) text-(--text-primary)">
          Start from the wire
        </h1>
        <p className="mt-(--space-8) text-(length:--text-md) text-(--text-secondary)">
          Tokens and fonts come from Tiny Wire. Edit this page, run <code>/ship</code>, send the
          link.
        </p>
      </section>
    </main>
  )
}
