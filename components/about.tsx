import { SectionHeading } from "@/components/section-heading"
import { Code2, Gauge, Layout, Server } from "lucide-react"

const differentiators = [
  {
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Implementación de SSR, ISR y optimización SEO real para mejorar métricas clave de rendimiento.",
  },
  {
    icon: Code2,
    title: "Estado avanzado",
    description:
      "Manejo de estado complejo con Zustand, persist middleware y patrones escalables.",
  },
  {
    icon: Layout,
    title: "Arquitectura limpia",
    description:
      "Diseño de arquitecturas limpias en Next.js App Router con separacion de responsabilidades.",
  },
  {
    icon: Server,
    title: "Sistemas reales",
    description:
      "Experiencia con sistemas productivos: agenda, alquiler de vehículos, ecommerce, gestión académica y dashboards.",
  },
]

export function About() {
  return (
    <section id="about" className="px-2 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Sobre mi"
          title="Perfil profesional"
          description="Especializado en React y Next.js con experiencia fullstack complementaria. Foco en performance, arquitectura y experiencia de usuario en proyectos reales."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
