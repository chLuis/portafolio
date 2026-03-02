"use client"

import { useState } from "react"
import { SectionHeading } from "./section-heading"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"

interface Project {
  title: string
  context: string
  role: string
  stack: string[]
  decisions: string[]
  results: string[]
  demo?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: "Sistema de Gestión de Inventario",
    context:
      "Plataforma integral para la gestión de inventario de una ferreteria. El sistema permite gestionar productos, clientes, proveedores, ventas y compras.",
    role: "Desarrollo fullstack del sistema completo, desde la arquitectura hasta el deploy.",
    stack: ["Next.js", "React", "TypeScript", "MySQL", "Node.js", "Tailwind"],
    decisions: [
      "Implemente SSR para mejorar tiempos de carga y SEO.",
      "Normalice datos en MySQL para consultas eficientes.",
      "Separe logica de presentacion con arquitectura por capas.",
      "Valide datos con Zod en cliente y servidor.",
    ],
    results: [
      "Reduccion de tiempos de atención al cliente.",
      "Mejor experiencia de uso para administradores."
    ],
    demo: "#"
  },
  {
    title: "Sistema de Turnos / Agenda",
    context:
      "Aplicacion para gestion de turnos y agenda con logica de negocio compleja: disponibilidad, cancelaciones y reprogramaciones.",
    role: "Desarrollo del frontend y la logica de disponibilidad de turnos.",
    stack: ["React", "Next.js", "Zustand", "Tailwind", "Node.js", "Express"],
    decisions: [
      "Manejo de estado con Zustand para sincronizacion en tiempo real.",
      "Implementacion de validacion de disponibilidad en servidor.",
      "Diseno responsivo mobile-first para uso desde celular.",
    ],
    results: [
      "Logica de turnos robusta sin conflictos de horarios.",
      "UX optimizada para dispositivos moviles.",
      "Reduccion del 60% en errores de agendamiento.",
    ],
    demo: "#",
    repo: "#",
  },
  {
    title: "Ecommerce",
    context:
      "Tienda online con catalogo de productos, carrito de compras persistido, checkout y gestion de ordenes.",
    role: "Desarrollo frontend completo con integracion a backend existente.",
    stack: ["Next.js", "React", "Zustand", "Tailwind", "Shadcn/ui"],
    decisions: [
      "Use Zustand con persist middleware para carrito persistido.",
      "Implemente SSR + ISR para paginas de producto optimizadas.",
      "Optimice carrusel de imagenes con Embla Carousel.",
      "Validaciones de checkout con Zod.",
    ],
    results: [
      "Performance score de 95+ en Lighthouse.",
      "Carrito persistido mejorando conversion.",
      "Experiencia mobile impecable.",
    ],
    demo: "#",
    repo: "#",
  },
  {
    title: "Dashboard Financiero",
    context:
      "Panel de visualizacion de datos financieros con graficos interactivos, filtros dinamicos y reportes.",
    role: "Desarrollo del dashboard completo con integracion de datos en tiempo real.",
    stack: ["Next.js", "React", "TypeScript", "Recharts", "Tailwind", "Shadcn/ui"],
    decisions: [
      "Use Recharts para graficos optimizados y accesibles.",
      "Implemente filtros dinamicos con URL search params.",
      "Arquitectura de componentes reutilizables para widgets.",
    ],
    results: [
      "Visualizacion clara de metricas clave.",
      "Filtrado eficiente sin recarga de pagina.",
      "Componentes reutilizables para futuros dashboards.",
    ],
    demo: "#",
    repo: "#",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group rounded-xl border border-border bg-card transition-colors hover:border-exalted">
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.context}
        </p>

        {/* Stack pills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        {expanded && (
          <div className="mt-4 space-y-4 border-t border-border pt-4">
            <div>
              <h4 className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
                Decisiones tecnicas
              </h4>
              <ul className="space-y-1">
                {project.decisions.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
                Resultados
              </h4>
              <ul className="space-y-1">
                {project.results.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-sm text-primary transition-opacity hover:opacity-80"
          >
            {expanded ? "Ver menos" : "Ver detalles"}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <div className="flex items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`Demo de ${project.title}`}
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`Repositorio de ${project.title}`}
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-2 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Proyectos"
          title="Trabajo seleccionado"
          description="Proyectos que demuestran criterio tecnico, capacidad de resolver problemas reales y atencion al detalle."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
