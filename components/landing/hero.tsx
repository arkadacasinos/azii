import { ShieldCheck, Zap, Gift } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'Лицензия' },
  { icon: Zap, label: 'Выплаты СБП 5 мин' },
  { icon: Gift, label: 'Бонус 100%' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            Азино<span className="text-primary">777</span> — официальный сайт и
            рабочее зеркало казино
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Играйте в лицензированные слоты и игровые автоматы онлайн. Быстрая
            регистрация, бонус 100% на первый депозит и мгновенные выплаты на
            СБП и карты.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <a
            href="#register"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
          >
            Играть в Азино777
          </a>

          <ul className="mt-10 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-3">
            {[
              'Более 3000 слотов и live-игр',
              'Бонус 100% на первый депозит',
              'Вывод средств за 5 минут',
            ].map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
