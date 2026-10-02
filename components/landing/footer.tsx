const hashtags = [
  { label: '#Азино777Официальный', href: '#overview' },
  { label: '#АзиноМобайл', href: '#mobile' },
  { label: '#Азино777ОфициальныйСайт', href: '#overview' },
  { label: '#Азино', href: '#why' },
  { label: '#Азино777', href: '#bonus' },
  { label: '#Азино777Играть', href: '#slots' },
  { label: '#Azino777Официальный', href: '#block' },
  { label: '#Azino777', href: '#payments' },
  { label: '#Azino777Казино', href: '#slots' },
  { label: '#Азино777Казино', href: '#slots' },
  { label: '#АзиноКазино', href: '#slots' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {hashtags.map((h) => (
            <a
              key={h.label}
              href={h.href}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {h.label}
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-border px-4 py-1.5 text-sm font-semibold text-muted-foreground">
            18+
          </span>
          <p className="text-sm text-muted-foreground">
            Азартные игры могут вызывать зависимость. Играйте ответственно.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 Азино777. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
