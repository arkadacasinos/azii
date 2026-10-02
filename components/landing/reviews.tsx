import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Дмитрий',
    date: '28 сентября 2026',
    text: 'Играю в Азино777 уже полгода. Вывод на СБП реально приходит за пару минут, бонусы отыгрываются честно. Рекомендую всем, кто ищет надёжное казино с быстрыми выплатами.',
  },
  {
    name: 'Анна',
    date: '25 сентября 2026',
    text: 'Понравилась мобильная версия — всё летает даже на старом телефоне. Зарегистрировалась за минуту, сразу получила фриспины и выиграла на слоте. Поддержка отвечает быстро.',
  },
  {
    name: 'Сергей',
    date: '21 сентября 2026',
    text: 'Azino777 — одно из немногих казино, где реально платят. Кэшбэк приходит каждую неделю, поддержка отвечает быстро. Всё прозрачно и без обмана.',
  },
  {
    name: 'Марина',
    date: '18 сентября 2026',
    text: 'Долго выбирала казино и остановилась на Азино777. Огромный выбор слотов, удобный интерфейс и щедрые бонусы. Вывод на карту пришёл за пять минут, как и обещали.',
  },
  {
    name: 'Игорь',
    date: '15 сентября 2026',
    text: 'Играю через зеркало, когда основной сайт блокируют. Всё работает стабильно, баланс сохраняется. Азино777 — мой выбор уже больше года, ни разу не подводили.',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-display text-2xl font-bold text-balance sm:text-3xl">
          Отзывы игроков об Азино777
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="font-semibold text-foreground">{r.name}</span>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
