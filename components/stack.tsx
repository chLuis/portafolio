import { SectionHeading } from "./section-heading"

interface Tech {
  name: string
}

interface Category {
  title: string
  items: Tech[]
}

const categories: Category[] = [
  {
    title: "Frontend Web & Mobile",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "Expo" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "Zustand" },
      { name: "Shadcn/ui" },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "APIs REST" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Cloudinary" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "Metodologias agiles" },
    ],
  },
]

export function Stack() {
  return (
    <section id="stack" className="px-2 sm:px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Stack"
          title="Tecnologias"
          description="Las herramientas con las que trabajo dia a dia para construir productos solidos."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="mb-5 font-mono text-xs tracking-widest text-primary uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
