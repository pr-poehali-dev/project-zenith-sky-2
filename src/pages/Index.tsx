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
      </div>
      <Footer />
    </div>
  )
}

export default Index