import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
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
                <a
                  href="https://t.me/nastasia_pristupa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-coral/10 transition-colors">
                    <Icon name="Send" size={18} className="text-muted-foreground group-hover:text-coral transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Telegram</div>
                    <div className="text-sm font-medium group-hover:text-coral transition-colors">@nastasia_pristupa</div>
                  </div>
                </a>
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
    </>
  );
}