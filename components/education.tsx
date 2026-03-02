"use client"

import { useState } from "react"
import { SectionHeading } from "./section-heading"

type TrackKey = "academica" | "bootcamp" | "autodidacta"

interface TrackItem {
  title: string
  institution: string
  status: string
  highlights: string[]
}

interface Track {
  key: TrackKey
  label: string
  tagline: string
  items: TrackItem[]
}

const tracks: Track[] = [
  {
    key: "academica",
    label: "Academica",
    tagline: "La base que me dio criterio tecnico",
    items: [
      {
        title: "Técnico Universitario en Programación",
        institution: "UTN FRT",
        status: "Completado",
        highlights: [
          "Algoritmos, estructuras de datos y complejidad computacional",
          "Bases de datos relacionales y modelado de datos",
          "Ingenieria de software y metodologias de desarrollo",
          "Paradigmas de programacion: imperativo, OOP y funcional",
        ],
      },
    ],
  },
  {
    key: "bootcamp",
    label: "Bootcamps",
    tagline: "Formacion intensiva orientada a produccion",
    items: [
      {
        title: "Fullstack Web Developer",
        institution: "Rolling Code School",
        status: "Completado",
        highlights: [
          "Desarrollo frontend con React y ecosistema moderno",
          "Backend con Node.js, Express y MongoDB",
          "Proyectos integradores con deploy real",
          "Metodologias agiles y trabajo en equipo",
        ],
      },
      {
        title: "Backend Especializado",
        institution: "Rolling Code School",
        status: "Completado",
        highlights: [
          "Arquitectura de APIs REST y buenas practicas",
          "Autenticacion, autorizacion y seguridad",
          "Bases de datos avanzadas y optimizacion de queries",
          "Testing e integracion continua",
        ],
      },
    ],
  },
  {
    key: "autodidacta",
    label: "Autodidacta",
    tagline: "Aprendizaje continuo enfocado en problemas reales",
    items: [
      {
        title: "Cursos especializados en Udemy",
        institution: "Udemy",
        status: "Continuo",
        highlights: [
          "React avanzado: patterns, performance y arquitectura",
          "Next.js App Router, SSR, ISR y optimizacion",
          "TypeScript estricto aplicado a proyectos reales",
          "Tailwind CSS y sistemas de diseno",
        ],
      },
    ],
  },
]

export function Education() {
  const [activeTrack, setActiveTrack] = useState<TrackKey>("academica")

  const current = tracks.find((t) => t.key === activeTrack)!

  return (
    <section className="px-2 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Formacion"
          title="Rutas de aprendizaje"
          description="No sigo un camino lineal. Combino formacion academica, bootcamps intensivos y aprendizaje autodidacta orientado a resolver problemas reales."
        />

        {/* Track selector */}
        <div className="relative mb-10 grid grid-cols-3 gap-2">
          <div className={`absolute left-0 top-0 h-full w-1/3 bg-primary rounded-md transition-all ${activeTrack === "academica" ? "" : activeTrack === "bootcamp" ? "translate-x-full" : "translate-x-[200%]"}`} />
          {tracks.map((track) => (
            <button
              key={track.key}
              onClick={() => setActiveTrack(track.key)}
              className={`relative rounded-lg px-1 sm:px-5 py-2 text-sm transition-all cursor-pointer ${activeTrack === track.key ? "text-black font-extrabold" : "text-primary"}`}
            >
              {track.label}
              {/* {activeTrack === track.key && (
                <span className="absolute -bottom-px left-1/2 h-px w-8 -translate-x-1/2 bg-primary" />
              )} */}
            </button>
          ))}
        </div>

        {/* Active track content */}
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          {/* Track header */}


          {/* Items */}
          <div className="flex flex-col gap-8">
            {current.items.map((item, index) => (
              <div
                key={item.title}
                className={`relative ${index < current.items.length - 1
                  ? "pb-8 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-px before:bg-border/50"
                  : ""
                  }`}
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-mono text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                  </div>
                  <span
                    className={`flex-shrink-0 rounded-full px-3 py-1 font-mono text-xs ${item.status === "En curso"
                      ? "bg-primary/15 text-primary"
                      : item.status === "Continuo"
                        ? "bg-primary/15 text-primary"
                        : "border border-border text-muted-foreground"
                      }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
