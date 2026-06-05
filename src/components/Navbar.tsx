import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = ["Главная", "Курсы", "Преподаватели", "Блог", "Контакты"];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Главная");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          <a
            href="https://t.me/nastasia_pristupa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-teal transition-colors px-3 py-2"
          >
            <Icon name="Send" size={15} />
            Telegram
          </a>
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
  );
}