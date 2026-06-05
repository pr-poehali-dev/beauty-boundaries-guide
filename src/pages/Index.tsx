import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/75a07d50-1829-4ba4-acc6-b89b0e38e295/files/8f09e940-0cc2-41d1-bc8d-47cd7153a3fb.jpg";

const COURSES = [
  {
    id: 1,
    tag: "Маникюр",
    title: "Профессиональный маникюр с нуля",
    desc: "От базовых техник до сложных дизайнов. Практика на каждом модуле.",
    price: "12 900 ₽",
    duration: "6 недель",
    students: "340",
    color: "coral",
    icon: "Sparkles",
  },
  {
    id: 2,
    tag: "Бизнес",
    title: "Открой свою студию красоты",
    desc: "Юридические вопросы, маркетинг, найм персонала и финансовое планирование.",
    price: "19 900 ₽",
    duration: "8 недель",
    students: "182",
    color: "teal",
    icon: "TrendingUp",
  },
  {
    id: 3,
    tag: "Психология",
    title: "Работа с трудными клиентами",
    desc: "Как ставить границы, управлять конфликтами и сохранять нервы в любой ситуации.",
    price: "7 900 ₽",
    duration: "3 недели",
    students: "520",
    color: "coral",
    icon: "Heart",
  },
  {
    id: 4,
    tag: "SMM",
    title: "Продвижение в соцсетях для мастеров",
    desc: "Контент-план, Reels, Stories, таргет. Привлечение клиентов без бюджета.",
    price: "9 900 ₽",
    duration: "4 недели",
    students: "417",
    color: "teal",
    icon: "Megaphone",
  },
];

const TEACHERS = [
  {
    name: "Настасья Приступа",
    role: "Онлайн-наставник по маникюру",
    bio: "10 лет в профессии, более 2000 учеников по всей России. Автор методики «Мастер с характером».",
    emoji: "💅",
    courses: 4,
  },
  {
    name: "Ирина Волкова",
    role: "Бизнес-коуч для beauty-мастеров",
    bio: "Владелец 3 студий, консультант по развитию beauty-бизнеса. MBA, 7 лет в coaching.",
    emoji: "🚀",
    courses: 2,
  },
  {
    name: "Мария Соколова",
    role: "SMM-специалист и маркетолог",
    bio: "Помогла 150+ мастерам выстроить очередь клиентов через Instagram и TikTok.",
    emoji: "✨",
    courses: 3,
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

const NAV_ITEMS = ["Главная", "Курсы", "Преподаватели", "Блог", "Контакты"];

export default function Index() {
  const [activeNav, setActiveNav] = useState("Главная");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background text-foreground font-body">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" onClick={() => setActiveNav("Главная")}>
            <div className="w-8 h-8 rounded-full gradient-coral-teal flex items-center justify-center">
              <span className="text-xs font-bold text-white font-display">А</span>
            </div>
            <span className="font-display text-xl font-semibold tracking-tight">
              Арт<span className="text-coral">Мастер</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeNav === item
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
              Войти
            </button>
            <button className="bg-coral text-[hsl(220,20%,6%)] text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity hover-glow">
              Начать обучение
            </button>
            <button
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => { setActiveNav(item); setMobileMenuOpen(false); }}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeNav === item ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        {/* Decorative blobs */}
        <div
          className="absolute top-32 right-20 w-72 h-72 rounded-full opacity-10 animate-float"
          style={{ background: "radial-gradient(circle, hsl(28, 95%, 58%), transparent 70%)" }}
        />
        <div
          className="absolute bottom-40 left-10 w-56 h-56 rounded-full animate-float"
          style={{ background: "radial-gradient(circle, hsl(175, 70%, 45%), transparent 70%)", opacity: 0.07, animationDelay: "3s" }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-48 right-1/4 w-4 h-4 border-2 border-coral/40 rotate-45 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-64 left-1/3 w-6 h-6 border-2 border-teal/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-coral/30 rounded-full animate-float" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div className="h-px w-12 bg-teal" />
              <span className="section-label">Образовательная платформа</span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.95] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Учись. <br />
              <em className="text-coral not-italic">Расти.</em> <br />
              Зарабатывай.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Онлайн-курсы и вебинары для мастеров бьюти-сферы. От техник до бизнеса — всё, чтобы выйти на новый уровень.
            </p>

            <div className="flex flex-wrap gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <button className="group flex items-center gap-2 bg-coral text-[hsl(220,20%,6%)] font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 hover-glow text-base">
                Смотреть курсы
                <Icon name="ArrowRight" size={18} />
              </button>
              <button className="flex items-center gap-2 border border-border text-foreground font-medium px-8 py-4 rounded-full hover:border-teal hover:text-teal transition-all duration-300 text-base">
                <Icon name="Play" size={18} />
                Как это работает
              </button>
            </div>

            <div className="flex flex-wrap gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[["1 200+", "Учеников"], ["28", "Курсов"], ["12", "Экспертов"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-4xl font-bold text-coral">{num}</div>
                  <div className="text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-coral" />
                <span className="section-label">Наши курсы</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
                Популярные<br /><em className="text-teal not-italic">программы</em>
              </h2>
            </div>
            <button className="self-start md:self-auto flex items-center gap-2 text-muted-foreground hover:text-teal transition-colors text-sm font-medium">
              Все курсы <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course, i) => (
              <div
                key={course.id}
                className="group relative bg-card border border-border rounded-2xl p-6 card-hover cursor-pointer overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${course.color === "coral" ? "bg-coral" : "bg-teal"}`} />

                <div className="flex items-start justify-between mb-4">
                  <span className={`tag-pill ${course.color === "coral" ? "bg-coral/10 text-coral" : "bg-teal/10 text-teal"}`}>
                    {course.tag}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${course.color === "coral" ? "bg-coral/10" : "bg-teal/10"}`}>
                    <Icon name={course.icon as "Sparkles" | "TrendingUp" | "Heart" | "Megaphone"} size={20} className={course.color === "coral" ? "text-coral" : "text-teal"} />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold mb-2 leading-snug group-hover:text-coral transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {course.desc}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={13} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={13} /> {course.students} учеников
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold">{course.price}</span>
                  <button className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    course.color === "coral"
                      ? "bg-coral text-[hsl(220,20%,6%)] hover:opacity-90 hover-glow"
                      : "bg-teal text-[hsl(220,20%,6%)] hover:opacity-90 hover-glow-teal"
                  }`}>
                    Записаться <Icon name="ArrowRight" size={14} />
                  </button>
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
                  <span className="section-label">Ближайший вебинар</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 leading-tight">
                  Как стать <em className="text-coral not-italic">наставником</em><br />и зарабатывать на знаниях
                </h2>
                <p className="text-muted-foreground mb-2">📅 15 июня 2026 · 19:00 МСК · Бесплатно</p>
                <p className="text-sm text-muted-foreground">Ведёт: Настасья Приступа</p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <button className="bg-coral text-[hsl(220,20%,6%)] font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity hover-glow whitespace-nowrap">
                  Зарегистрироваться →
                </button>
                <p className="text-xs text-center text-muted-foreground">Осталось 47 мест</p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEACHERS.map((teacher, i) => (
              <div
                key={teacher.name}
                className="bg-card border border-border rounded-2xl p-8 card-hover text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-4xl mx-auto mb-6">
                  {teacher.emoji}
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

      {/* CONTACTS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-teal" />
                <span className="section-label">Контакты</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Остались<br /><em className="text-coral not-italic">вопросы?</em>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Напишите нам — ответим в течение 2 часов в рабочее время. Или запишитесь на бесплатную консультацию.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: "Mail", label: "Email", value: "hello@artmaster.ru" },
                  { icon: "MessageCircle", label: "Telegram", value: "@artmaster_edu" },
                  { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-coral/10 transition-colors">
                      <Icon name={contact.icon as "Mail" | "MessageCircle" | "Phone"} size={18} className="text-muted-foreground group-hover:text-coral transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{contact.label}</div>
                      <div className="text-sm font-medium group-hover:text-coral transition-colors">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">Напишите нам</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Как вас зовут?"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="your@email.ru"
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Сообщение</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Ваш вопрос или пожелание..."
                    rows={4}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-coral text-[hsl(220,20%,6%)] font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity hover-glow">
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full gradient-coral-teal flex items-center justify-center">
              <span className="text-xs font-bold text-white font-display">А</span>
            </div>
            <span className="font-display text-lg font-semibold">
              Арт<span className="text-coral">Мастер</span>
            </span>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            {["Курсы", "Вебинары", "Блог", "Контакты"].map((item) => (
              <button key={item} className="hover:text-foreground transition-colors">{item}</button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://t.me/nastasia_pristupa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-teal transition-colors"
            >
              <Icon name="Send" size={13} />
              t.me/nastasia_pristupa
            </a>
            <p className="text-xs text-muted-foreground">© 2026 АртМастер.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}