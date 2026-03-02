import { SectionHeading } from "./section-heading"
import { Briefcase } from "lucide-react"

interface Job {
  company: string
  role: string
  period: string
  impact: string[]
}

const jobs: Job[] = [
  {
    company: "Pigmalion Software",
    role: "Fullstack Developer",
    period: "06/2025 - 12/2025",
    impact: [
      "Desarrollo de aplicaciones web con React y Next.js.",
      "Optimizacion de rendimiento y experiencia de usuario.",
    ],
  },
  {
    company: "Movil Renta",
    role: "Frontend Developer",
    period: "11/2024 - 06/2025",
    impact: [
      "Desarrollo de interfaces de usuario con Next.js y TypeScript.",
      "Mejora de performance y accesibilidad en aplicaciones existentes.",
      "Internacionalización de aplicaciones.",
      "Integración de pasarelas de pago Payway.",
      "Integracion con APIs REST y manejo de estado complejo.",
    ],
  },
  {
    company: "Freelance",
    role: "Fullstack Developer",
    period: "12/2023 - 11/2024",
    impact: [
      "Sistemas reales implementados para clientes.",
      "Consultoria técnica en performance.",
      "Integración de pasarelas de pago Mercado Pago",
      "Entrega de soluciones end-to-end.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-2 sm:px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Experiencia"
          title="Trayectoria profesional"
          description="Roles donde genere impacto real con tecnologia."
        />

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute top-0 bottom-0 left-[18px] w-px bg-gradient-to-b from-primary/60 via-border to-transparent lg:left-1/2 lg:-translate-x-px" />

          <div className="flex flex-col gap-10 lg:gap-14">
            {jobs.map((job, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={job.company} className="relative">
                  {/* ---- DESKTOP (lg+): alternating layout ---- */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_40px_1fr] lg:items-start">
                    {/* Left column */}
                    {isLeft ? (
                      <TimelineCard job={job} align="right" />
                    ) : (
                      <TimelinePeriod period={job.period} align="right" />
                    )}

                    {/* Center dot */}
                    <div className="flex justify-center pt-6">
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/40 bg-card shadow-[0_0_12px_rgba(45,212,191,0.15)]">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    {/* Right column */}
                    {isLeft ? (
                      <TimelinePeriod period={job.period} align="left" />
                    ) : (
                      <TimelineCard job={job} align="left" />
                    )}
                  </div>

                  {/* ---- MOBILE / TABLET (< lg): left-aligned timeline ---- */}
                  <div className="flex gap-5 lg:hidden">
                    {/* Dot */}
                    <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-card shadow-[0_0_12px_rgba(45,212,191,0.15)]">
                      <Briefcase className="h-3.5 w-3.5 text-primary" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 pb-0">
                      <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium tracking-wider text-primary">
                        {job.period}
                      </span>
                      <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-foreground">
                            {job.company}
                          </h3>
                          <span className="text-sm text-muted-foreground">
                            / {job.role}
                          </span>
                        </div>
                        <ImpactList items={job.impact} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ job, align }: { job: Job; align: "left" | "right" }) {
  return (
    <div className={`pt-2 ${align === "right" ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block w-full rounded-xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/30`}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            {job.company}
          </h3>
          <span className="text-sm text-muted-foreground">/ {job.role}</span>
        </div>
        <ImpactList items={job.impact} />
      </div>
    </div>
  )
}

function TimelinePeriod({
  period,
  align,
}: {
  period: string
  align: "left" | "right"
}) {
  return (
    <div
      className={`flex items-start pt-6 ${align === "right" ? "justify-end pr-2" : "justify-start pl-2"
        }`}
    >
      <span className="rounded-full bg-primary/10 px-4 py-1.5 font-mono text-sm font-medium tracking-wider text-primary">
        {period}
      </span>
    </div>
  )
}

function ImpactList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
        >
          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  )
}
