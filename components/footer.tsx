export function Footer() {
  return (
    <footer className="border-t border-border px-2 sm:px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-mono text-xs text-muted-foreground">
          {"Luis Chrestia"} &mdash; {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Construido con Next.js, Tailwind CSS y Vercel.
        </p>
      </div>
    </footer>
  )
}
