import { Dice5 } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Dice5 className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-foreground">
            Азино<span className="text-primary">777</span>
          </span>
        </a>
        <a
          href="#register"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Вход / Регистрация
        </a>
      </div>
    </header>
  )
}
