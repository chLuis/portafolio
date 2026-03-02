import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.15 175) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16 lg:gap-20">
        {/* Left: Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Status badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-muted-foreground bg-card px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-exalted opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-exalted" />
            </span>
            <span className="font-mono text-xs text-foreground">
              Disponible para proyectos
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Luis Chrestia
          </h1>

          {/* Typewriter role */}
          <div className="mb-6 flex items-center justify-center md:justify-start">
            <span className="font-mono text-lg text-exalted sm:text-xl">
              Fullstack Developer
            </span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-exalted" />
          </div>

          <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
            Construyo aplicaciones rapidas, escalables y optimizadas para SEO
            con React y Next.js. Foco en arquitectura limpia, rendimiento real y
            experiencia de usuario.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver proyectos
              <ArrowDown size={14} className="-rotate-90" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
            >
              Contactar
            </Link>
            <Link
              href="https://drive.google.com/file/d/1O2Zxa60--lhCllmv8skuEBvneyTdOQ1D/view?usp=sharing"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={14} />
              CV
            </Link>
          </div>

          {/* Social */}
          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <Link
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={16} />
            </Link>
            <Link
              href={`https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Email"
            >
              <Mail size={16} />
            </Link>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="relative shrink-0">
          <div className="relative">
            {/* Glow ring behind photo */}
            <div className="absolute -inset-1 rounded-full bg-primary/20 blur-xl" />

            {/* Photo container */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-border sm:h-64 sm:w-64 lg:h-72 lg:w-72">
              <Image
                src="/photo.webp"
                alt="Luis Chrestia - Fullstack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge - experience */}
            <div className="absolute -right-2 bottom-8 rounded-lg border border-border bg-card px-3 py-2 shadow-lg sm:-right-4">
              <p className="font-mono text-xs text-muted-foreground">Exp.</p>
              <p className="text-lg font-bold text-foreground">
                +3{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  años
                </span>
              </p>
            </div>

            {/* Floating badge - projects */}
            {/* <div className="absolute -left-2 top-8 rounded-lg border border-border bg-card px-3 py-2 shadow-lg sm:-left-4">
              <p className="font-mono text-xs text-muted-foreground">
                Proyectos
              </p>
              <p className="text-lg font-bold text-foreground">
                +10{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  prod
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="#about"
          className="group flex flex-col items-center gap-2"
          aria-label="Scroll hacia abajo"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 transition-colors group-hover:text-primary">
            scroll
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1 transition-colors group-hover:border-primary/50">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-muted-foreground/50 transition-colors group-hover:bg-primary" />
          </div>
        </Link>
      </div>
    </section>
  )
}
