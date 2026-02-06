"use client"

import { useState } from "react"
import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { Menu, X } from "lucide-react"

function FlagFR({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" aria-hidden="true">
      <rect width="213.3" height="480" fill="#002395" />
      <rect x="213.3" width="213.4" height="480" fill="#fff" />
      <rect x="426.7" width="213.3" height="480" fill="#ED2939" />
    </svg>
  )
}

function FlagGB({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" aria-hidden="true">
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
      <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
    </svg>
  )
}

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
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">lc</span>
          <span>le <span className="text-primary">collectif</span></span>
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
            className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Switch language"
          >
            {locale === "en" ? (
              <>
                <FlagFR className="h-4 w-5 rounded-sm" />
                <span>FR</span>
              </>
            ) : (
              <>
                <FlagGB className="h-4 w-5 rounded-sm" />
                <span>EN</span>
              </>
            )}
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
              className="flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {locale === "en" ? (
                <>
                  <FlagFR className="h-4 w-5 rounded-sm" />
                  <span>Francais</span>
                </>
              ) : (
                <>
                  <FlagGB className="h-4 w-5 rounded-sm" />
                  <span>English</span>
                </>
              )}
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
