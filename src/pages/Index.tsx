import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"


const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-20">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-center mb-10 mt-6">
              <div className="flex flex-col gap-2 flex-1">
                <span className="text-accent font-mono text-xs tracking-widest uppercase mb-1">Атмосфера</span>
                <h2 className="text-foreground font-bold text-2xl md:text-3xl leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Место, где хочется возвращаться
                </h2>
                <p className="text-muted-foreground font-mono text-sm mt-2 leading-relaxed">
                  Никаких строгих дресс-кодов и формальностей. Chill Work — это пространство, где молодёжь работает в комфорте: уютные зоны, музыка, кофе и люди на одной волне.
                </p>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-4">
                  <span className="text-accent font-mono text-sm min-w-fit">// 01</span>
                  <div>
                    <span className="text-foreground font-mono text-sm font-semibold">Рабочие зоны</span>
                    <p className="text-muted-foreground font-mono text-xs mt-1">Столы, розетки, быстрый Wi-Fi — всё чтобы фокусироваться на задачах</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent font-mono text-sm min-w-fit">// 02</span>
                  <div>
                    <span className="text-foreground font-mono text-sm font-semibold">Зоны отдыха</span>
                    <p className="text-muted-foreground font-mono text-xs mt-1">Мягкие диваны, настолки, уголки для перезарядки между спринтами</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent font-mono text-sm min-w-fit">// 03</span>
                  <div>
                    <span className="text-foreground font-mono text-sm font-semibold">Сообщество</span>
                    <p className="text-muted-foreground font-mono text-xs mt-1">Нетворкинг, коллаборации и ивенты с теми, кто думает как ты</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {["Свободная атмосфера", "Гибкий график", "Быстрый Wi-Fi", "Кофе и снеки", "Ивенты", "Нетворкинг"].map((tag) => (
                <span key={tag} className="bg-secondary text-foreground font-mono text-xs px-4 py-2 rounded-full border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mx-4 md:mx-0 mt-6 mb-0 px-6 md:px-20 py-14">
          <span className="text-accent font-mono text-xs tracking-widest uppercase mb-3 block">Тарифы</span>
          <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-10 leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
            Работай, когда тебе удобно
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Дневной */}
            <div className="bg-card border border-border rounded-3xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200">
              <div className="text-2xl">☀️</div>
              <div>
                <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mb-1">Дневной</p>
                <p className="text-foreground font-mono text-xs">06:00 — 14:00</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="text-foreground font-bold text-3xl" style={{ fontFamily: "var(--font-montserrat)" }}>1 200</span>
                <span className="text-muted-foreground font-mono text-sm ml-1">₽/смена</span>
              </div>
            </div>

            {/* Вечерний */}
            <div className="bg-card border border-border rounded-3xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200">
              <div className="text-2xl">🌆</div>
              <div>
                <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mb-1">Вечерний</p>
                <p className="text-foreground font-mono text-xs">14:00 — 22:00</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="text-foreground font-bold text-3xl" style={{ fontFamily: "var(--font-montserrat)" }}>1 400</span>
                <span className="text-muted-foreground font-mono text-sm ml-1">₽/смена</span>
              </div>
            </div>

            {/* Ночной */}
            <div className="bg-card border border-border rounded-3xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200">
              <div className="text-2xl">🌙</div>
              <div>
                <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mb-1">Ночной</p>
                <p className="text-foreground font-mono text-xs">22:00 — 06:00</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="text-foreground font-bold text-3xl" style={{ fontFamily: "var(--font-montserrat)" }}>1 100</span>
                <span className="text-muted-foreground font-mono text-sm ml-1">₽/смена</span>
              </div>
            </div>

            {/* Абонемент / Безлимит */}
            <div className="bg-primary rounded-3xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200 relative overflow-hidden">
              <div className="absolute top-3 right-4 bg-primary-foreground/20 text-primary-foreground font-mono text-[10px] px-2 py-0.5 rounded-full tracking-widest uppercase">Выгоднее всего</div>
              <div className="text-2xl">⚡</div>
              <div>
                <p className="text-primary-foreground/70 font-mono text-xs uppercase tracking-widest mb-1">Безлимит</p>
                <p className="text-primary-foreground font-mono text-xs">Весь год · любое время</p>
                <p className="text-primary-foreground/60 font-mono text-xs mt-1">Абонемент — от 3 дней</p>
              </div>
              <div className="mt-auto pt-4 border-t border-primary-foreground/20">
                <span className="text-primary-foreground font-bold text-3xl" style={{ fontFamily: "var(--font-montserrat)" }}>43 000</span>
                <span className="text-primary-foreground/70 font-mono text-sm ml-1">₽/год</span>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default Index