import Icon from "@/components/ui/icon";

const COURSES = [
  {
    id: 1,
    tag: "Бесплатно",
    title: "Как найти первых учениц без блогерства",
    desc: "15 минут. Никакой воды. Схема, по которой вы начнёте набирать учениц уже через неделю.",
    price: "Бесплатно",
    duration: "15 минут",
    badge: "Урок на YouTube",
    color: "teal",
    icon: "Play",
    href: "https://youtu.be/epXalXYoEKM?si=2SY07OO-Bo3gM8eh",
    cta: "Смотреть бесплатный урок",
  },
  {
    id: 2,
    tag: "Курс",
    title: "Первые клиенты за 7 дней",
    desc: "Для мастеров, которые хотят перестать зависеть от салона, найти учениц без рекламы и зарабатывать больше, работая меньше.",
    price: "1 490 ₽",
    oldPrice: "2 990 ₽",
    duration: "до 10 июня",
    badge: "Горячая цена",
    color: "coral",
    icon: "Sparkles",
    href: "https://t.me/nastasia_pristupa",
    cta: "Записаться на курс",
    features: ["Схема поиска учениц", "Шаблоны сообщений", "Разборы ошибок", "Закрытый Telegram-чат"],
  },
];

const NASTASIA_PHOTO = "https://cdn.poehali.dev/projects/75a07d50-1829-4ba4-acc6-b89b0e38e295/bucket/77e12cbe-c76f-43ee-b6ec-eaf1654e2da8.jpeg";

const TEACHERS = [
  {
    name: "Настасья Приступа",
    role: "Онлайн-наставник по маникюру",
    bio: "10 лет в профессии, более 2000 учеников по всей России. Автор методики «Мастер с характером».",
    emoji: "💅",
    photo: NASTASIA_PHOTO,
    courses: 4,
  },
];

const BLOG_POSTS = [
  {
    date: "02 июня 2026",
    tag: "Психология",
    title: "10 фраз для защиты своих границ",
    excerpt: "Как говорить «нет» клиентам без чувства вины и сохранить нервную систему в порядке.",
    readTime: "5 мин",
  },
  {
    date: "28 мая 2026",
    tag: "Маркетинг",
    title: "Как набрать первых 100 клиентов без бюджета",
    excerpt: "Пошаговая инструкция для мастеров, которые только начинают путь к своей студии.",
    readTime: "8 мин",
  },
  {
    date: "20 мая 2026",
    tag: "Бизнес",
    title: "Почему мастера выгорают и как этого избежать",
    excerpt: "Три главные причины профессионального выгорания и практические способы восстановления.",
    readTime: "6 мин",
  },
];

export default function CoursesSection() {
  return (
    <>
      {/* COURSES */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-coral" />
              <span className="section-label">Обучение, которое работает</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Выбери свой<br /><em className="text-teal not-italic">формат</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course, i) => (
              <div
                key={course.id}
                className="group relative bg-card border border-border rounded-2xl p-6 card-hover overflow-hidden flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${course.color === "coral" ? "bg-coral" : "bg-teal"}`} />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`tag-pill ${course.color === "coral" ? "bg-coral/10 text-coral" : "bg-teal/10 text-teal"}`}>
                      {course.tag}
                    </span>
                    {course.badge && (
                      <span className="tag-pill bg-secondary text-muted-foreground">{course.badge}</span>
                    )}
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${course.color === "coral" ? "bg-coral/10" : "bg-teal/10"}`}>
                    <Icon name={course.icon as "Play" | "Sparkles"} size={20} className={course.color === "coral" ? "text-coral" : "text-teal"} />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold mb-2 leading-snug group-hover:text-coral transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.desc}
                </p>

                {course.features && (
                  <ul className="flex flex-col gap-1.5 mb-6">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={14} className="text-teal shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={13} /> {course.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="font-display text-2xl font-bold">{course.price}</span>
                    {"oldPrice" in course && course.oldPrice && (
                      <span className="ml-2 text-sm text-muted-foreground line-through">{course.oldPrice}</span>
                    )}
                  </div>
                  <a
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      course.color === "coral"
                        ? "bg-coral text-[hsl(220,20%,6%)] hover:opacity-90 hover-glow"
                        : "bg-teal text-[hsl(220,20%,6%)] hover:opacity-90 hover-glow-teal"
                    }`}
                  >
                    {course.cta} <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBINAR PROMO BANNER */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden border border-coral/20 p-10 md:p-16"
            style={{ background: "linear-gradient(135deg, hsl(28 95% 58% / 0.08), hsl(175 70% 45% / 0.08))" }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5"
              style={{ background: "hsl(28, 95%, 58%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-5"
              style={{ background: "hsl(175, 70%, 45%)" }}
            />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                  <span className="section-label">Бесплатный вебинар · 15 июня</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 leading-tight">
                  Как стать <em className="text-coral not-italic">наставником</em><br />и зарабатывать на знаниях
                </h2>
                <p className="text-muted-foreground mb-1">📅 15 июня · 19:00 МСК · Бесплатно</p>
                <p className="text-sm text-muted-foreground">Ведёт: Настасья Приступа. Места ограничены.</p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="https://t.me/nastasia_pristupa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-coral text-[hsl(220,20%,6%)] font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity hover-glow whitespace-nowrap text-center"
                >
                  Записаться бесплатно →
                </a>
                <p className="text-xs text-center text-muted-foreground">Регистрация через Telegram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-teal" />
              <span className="section-label">Преподаватели</span>
              <div className="h-px w-12 bg-teal" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              Учись у <em className="text-coral not-italic">лучших</em>
            </h2>
          </div>

          {/* Личная история Настасьи */}
          <div className="mb-10 rounded-2xl border border-teal/20 p-8 md:p-10"
            style={{ background: "linear-gradient(135deg, hsl(175 70% 45% / 0.06), hsl(28 95% 58% / 0.06))" }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 mx-auto md:mx-0 border-2 border-teal/30">
                <img
                  src="https://cdn.poehali.dev/projects/75a07d50-1829-4ba4-acc6-b89b0e38e295/bucket/77e12cbe-c76f-43ee-b6ec-eaf1654e2da8.jpeg"
                  alt="Настасья Приступа"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-teal" />
                  <span className="section-label">Основатель платформы</span>
                </div>
                <h3 className="font-display text-3xl font-bold mb-2">Настасья Приступа</h3>
                <p className="text-teal text-sm font-medium mb-4">Онлайн-наставник по маникюру · @nastasia_pristupa</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  10 лет я делала маникюр, выгорала, боялась остаться без клиентов. А потом поняла:
                  учить других — кайфовее, чем делать самой. Создала систему «Первые клиенты за 7 дней»
                  и запустила эту платформу. Здесь я собираю авторские курсы и экспертов для мастеров бьюти-сферы.
                  Добро пожаловать.
                </p>
                <a
                  href="https://t.me/nastasia_pristupa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal text-[hsl(220,20%,6%)] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm hover-glow-teal"
                >
                  <Icon name="Send" size={15} />
                  Подписаться в Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEACHERS.map((teacher, i) => (
              <div
                key={teacher.name}
                className="bg-card border border-border rounded-2xl p-8 card-hover text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-6">
                  {teacher.photo ? (
                    <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center text-4xl">
                      {teacher.emoji}
                    </div>
                  )}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{teacher.name}</h3>
                <p className="text-teal text-sm font-medium mb-4">{teacher.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{teacher.bio}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Icon name="BookOpen" size={13} />
                  <span>{teacher.courses} курса</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-coral" />
                <span className="section-label">Блог</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Статьи для<br /><em className="text-teal not-italic">роста</em>
              </h2>
            </div>
            <button className="self-start md:self-auto flex items-center gap-2 text-muted-foreground hover:text-coral transition-colors text-sm font-medium">
              Все статьи <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <article
                key={post.title}
                className="group bg-card border border-border rounded-2xl p-6 card-hover cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag-pill bg-coral/10 text-coral">{post.tag}</span>
                  <span className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                    <Icon name="Clock" size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 leading-snug group-hover:text-coral transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 group-hover:text-coral transition-colors">
                    Читать <Icon name="ArrowRight" size={12} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}