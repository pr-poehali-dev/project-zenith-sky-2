import Icon from "@/components/ui/icon"

export default function Footer() {
  return (
    <footer className="w-full px-6 relative py-[0] mt-28 h-auto mb-0 bg-card">
      <div className="absolute top-8 right-6 text-accent text-2xl">+</div>
      <div className="absolute top-1/2 right-12 text-accent text-lg transform -translate-y-1/2">*</div>
      <div className="absolute bottom-12 right-20 text-accent text-xl">+</div>
      <div className="absolute top-16 right-32 text-accent text-sm">*</div>
      <div className="absolute bottom-8 right-8 text-accent text-lg">*</div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 max-w-lg mt-8">
            <h2
              className="text-foreground text-4xl md:text-5xl mb-8 leading-[3.5rem] md:leading-[4rem] font-semibold text-center md:text-left mt-0"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Работай. Отдыхай. Повторяй.
            </h2>

            <div className="space-y-4 text-foreground">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Chill Work — место, где продуктивность и расслабленность живут рядом.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Мы создали пространство, в котором молодёжь может делать крутые вещи в своём темпе.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-center md:justify-end items-center mt-10 md:mt-0">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-secondary border border-border rounded-2xl p-6">
                <p className="text-accent text-3xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>24/7</p>
                <p className="text-muted-foreground font-mono text-xs mt-1">Доступ</p>
              </div>
              <div className="bg-secondary border border-border rounded-2xl p-6">
                <p className="text-accent text-3xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>∞</p>
                <p className="text-muted-foreground font-mono text-xs mt-1">Вдохновение</p>
              </div>
              <div className="bg-secondary border border-border rounded-2xl p-6">
                <p className="text-accent text-3xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>5+</p>
                <p className="text-muted-foreground font-mono text-xs mt-1">Зон отдыха</p>
              </div>
              <div className="bg-secondary border border-border rounded-2xl p-6">
                <p className="text-accent text-3xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>0</p>
                <p className="text-muted-foreground font-mono text-xs mt-1">Дресс-кодов</p>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="w-full px-6 py-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 border-t border-border mt-16">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-foreground font-mono text-xl font-bold">Готов попробовать Chill Work?</h2>
            <p className="text-muted-foreground font-mono font-normal text-sm">Забронируй место и приходи работать в своё удовольствие</p>
          </div>

          <a href="mailto:hello@chillwork.ru">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono flex items-center gap-2">
              Забронировать место
              <Icon name="ArrowUpRight" size={20} />
            </button>
          </a>
        </div>

        <div className="w-full px-6 py-4 border-t border-border flex md:flex-row items-center justify-between gap-2 flex-row">
          <p className="text-muted-foreground text-sm font-mono">2025 Chill Work</p>
          <p className="text-muted-foreground text-sm font-mono">poehali.dev</p>
        </div>
      </div>
    </footer>
  )
}