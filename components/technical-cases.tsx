import { SectionHeading } from "./section-heading"
import { Bug, RefreshCw, Zap, Database } from "lucide-react"

const cases = [
  {
    icon: Bug,
    title: "Sorting incorrecto en React",
    description:
      "Detecte y resolvi un problema de ordenamiento en listas renderizadas por React donde el estado mutado causaba re-renders incorrectos. La solucion: copias inmutables del array antes de sort().",
  },
  {
    icon: RefreshCw,
    title: "Revalidaciones en Next.js",
    description:
      "Implemente estrategias de revalidacion (ISR + on-demand) para mantener datos frescos sin sacrificar performance en paginas con alto trafico.",
  },
  {
    icon: Zap,
    title: "Optimizacion de carrusel con Embla",
    description:
      "Reduje el bundle size y mejore la fluidez del carrusel usando lazy loading de imagenes y configuracion optimizada de Embla Carousel.",
  },
  {
    icon: Database,
    title: "Estado persistido con Zustand",
    description:
      "Disene una solucion de carrito de compras con Zustand persist middleware, manejando hidratacion correcta en SSR para evitar mismatches.",
  },
]

export function TechnicalCases() {
  return (
    <section className="px-2 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Casos tecnicos"
          title="Problemas resueltos"
          description="Desafios tecnicos concretos que enfrente y como los resolvi. Esto demuestra criterio mas alla del codigo."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-exalted"
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
