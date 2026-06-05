import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/75a07d50-1829-4ba4-acc6-b89b0e38e295/files/8f09e940-0cc2-41d1-bc8d-47cd7153a3fb.jpg";

export default function HeroSection() {
  return (
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
  );
}
