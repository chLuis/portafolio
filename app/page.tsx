import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stack } from "@/components/stack"
import { Projects } from "@/components/projects"
import { TechnicalCases } from "@/components/technical-cases"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-full overflow-clip">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <TechnicalCases />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
