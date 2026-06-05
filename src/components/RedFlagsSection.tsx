const FLAGS = [
  {
    title: "«Что-то так лень идти, может, перенесём?»",
    situation: "Я уже в студии. Инструменты разложены. Время забронировано.",
    why: "Клиент не ценит чужое время. Сегодня «лень», завтра «забыла», послезавтра «проспала». Вы будете терять деньги и нервы.",
    answer: null,
  },
  {
    title: "«У меня вообще-то время идёт, мне быстрее надо»",
    situation: "Вы работаете в своём темпе, чтобы сделать качественно. Он подгоняет.",
    why: "Он купил маникюр, а не вас в рабство. Подгоняя, он заставляет вас рисковать качеством и его же безопасностью.",
    answer: "«Я работаю аккуратно, чтобы вам понравилось. Если вам нужно быстрее — возможно, вы ошиблись мастером».",
  },
  {
    title: "«Давай ты старую цену для меня оставишь, ну я же к тебе давно хожу»",
    situation: "Я — такой же человек. Я тоже хочу есть, платить за квартиру, покупать лекарства детям. Мои расходы растут. Мои навыки растут. Моя цена растёт.",
    why: "Клиент не ценит ваше развитие. Он хочет, чтобы вы работали для него в убыток, потому что «он же давно ходит».",
    answer: "«Я вас очень ценю. Поэтому для вас я всегда сделаю работу с максимальным качеством. Но цена для всех одна. Если для вас это проблема — я пойму, если вы решите уйти».",
  },
  {
    title: "«У тебя больничный, значит, времени много»",
    situation: "У меня температура 39. Я еле стою на ногах.",
    why: "Клиент не видит в вас человека. Вы для него — автомат по выдаче красоты. Если вы заболели — он не посочувствует, а использует.",
    answer: "«Я на больничном. Значит, я не работаю. Ни для кого. Выздоравливайте и вы, чтобы не заразиться от меня».",
  },
  {
    title: "«Запишите меня сегодня, мне срочно, завтра в отпуск»",
    situation: "У моего ребёнка ротавирус. Я между вызовами скорой и горшком.",
    why: "Чужие проблемы для такого клиента важнее ваших. Он не слышит слово «нет».",
    answer: "«Я сейчас не работаю. Могу предложить вам другой день или другого мастера. Срочность — не моя проблема».",
  },
];

export default function RedFlagsSection() {
  return (
    <section id="red-flags" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[hsl(var(--coral)/0.15)] text-coral text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Красные флаги
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Токсичные клиенты: <br className="hidden md:block" />узнай и отпусти
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Реальные фразы, которые мастер слышит каждый день. И как на них отвечать без извинений.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {FLAGS.map((flag, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-red-500 text-xl leading-none mt-0.5 shrink-0">✕</span>
                <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug">
                  {flag.title}
                </h3>
              </div>

              <p className="text-foreground text-sm mb-4 leading-relaxed pl-6">
                {flag.situation}
              </p>

              <div className="mb-4 pl-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Почему это красный флаг:
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{flag.why}</p>
              </div>

              {flag.answer && (
                <div className="border-l-2 border-coral pl-4 ml-6">
                  <p className="text-xs font-semibold text-coral uppercase tracking-wider mb-1">
                    Что я отвечаю:
                  </p>
                  <p className="text-sm text-foreground leading-relaxed italic">{flag.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
