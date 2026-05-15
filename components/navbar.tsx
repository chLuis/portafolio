"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { label: "Sobre mi", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Experiencia", href: "/#experience" },
  { label: "Formación", href: "/#education" },
  { label: "Contacto", href: "/#contact" },
]

const getSectionId = (href: string) => href.replace("/#", "")

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(navLinks[0].href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(getSectionId(link.href)))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) {
      return
    }

    const updateFromHash = () => {
      const hash = window.location.hash

      if (!hash) {
        return
      }

      const matchingLink = navLinks.find((link) => link.href.endsWith(hash))

      if (matchingLink) {
        setActiveSection(matchingLink.href)
      }
    }

    updateFromHash()

    const updateActiveSection = () => {
      const offset = 140
      const scrollPosition = window.scrollY + offset

      const currentSection = sections.find((section, index) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        const isLastSection = index === sections.length - 1

        if (isLastSection) {
          return scrollPosition >= sectionTop
        }

        return scrollPosition >= sectionTop && scrollPosition < sectionBottom
      })

      if (!currentSection) {
        return
      }

      const matchingLink = navLinks.find(
        (link) => getSectionId(link.href) === currentSection.id,
      )

      if (matchingLink) {
        setActiveSection(matchingLink.href)
      }
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection)
    window.addEventListener("resize", updateActiveSection)
    window.addEventListener("hashchange", updateFromHash)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
      window.removeEventListener("hashchange", updateFromHash)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6  ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <Link
          href="#"
          className="text-xl font-extrabold text-exalted"
        >
          LC
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={activeSection === link.href ? "page" : undefined}
                className={`text-sm transition-colors ${activeSection === link.href
                  ? "font-semibold text-primary"
                  : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground md:hidden"
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={activeSection === link.href ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-md px-3 py-3 text-sm transition-colors ${activeSection === link.href
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
