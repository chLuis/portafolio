import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const links = [
  {
    label: "Email",
    value: process.env.NEXT_PUBLIC_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: process.env.NEXT_PUBLIC_LINKEDIN,
    href: `https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN}`,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: process.env.NEXT_PUBLIC_GITHUB,
    href: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB}`,
    icon: Github,
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-2 sm:px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
          Contacto
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Hablemos
        </h2>
        <p className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-muted-foreground">
          Si tenes un proyecto en mente, una oportunidad laboral o simplemente
          queres conversar sobre tecnologia, escribime.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 sm:w-auto"
            >
              <link.icon
                size={18}
                className="text-primary min-w-4"
              />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{link.label}</p>
                <p className="text-sm font-medium text-foreground">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-auto text-muted-foreground transition-colors group-hover:text-primary min-w-4"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
