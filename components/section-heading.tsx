interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
        {label}
      </p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
