"use client"

import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {t.hero.tagline}
        </p>
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {t.hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.hero.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Minimal decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-border" />
      </div>
    </section>
  )
}
