"use client"

import { useState } from "react"
import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const { locale, setLocale, t } = useLocale()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.team, href: "/#team" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: "/#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          duo<span className="text-muted-foreground">digital</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "fr" : "en")}
            className="rounded-md border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Switch language"
          >
            {locale === "en" ? "FR" : "EN"}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 py-6 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setLocale(locale === "en" ? "fr" : "en")
                setMobileOpen(false)
              }}
              className="w-fit rounded-md border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {locale === "en" ? "FR" : "EN"}
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
