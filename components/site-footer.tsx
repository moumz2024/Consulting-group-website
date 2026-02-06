"use client"

import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">lc</span>
              <span>le <span className="text-primary">collectif</span></span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider opacity-50">
              {t.footer.navigation}
            </h4>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
              <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.home}
              </Link>
              <Link href="/#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.services}
              </Link>
              <Link href="/#team" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.team}
              </Link>
              <Link href="/blog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.nav.blog}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider opacity-50">
              {t.nav.contact}
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:hello@lecollectif.dev"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4 text-primary" />
                hello@lecollectif.dev
              </a>
              <span className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4 text-primary" />
                +33 1 23 45 67 89
              </span>
              <span className="flex items-center gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 text-primary" />
                Paris, France
              </span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider opacity-50">
              {t.footer.legal}
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.footer.privacy}
              </Link>
              <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8 text-center">
          <p className="text-xs opacity-40">
            &copy; {new Date().getFullYear()} le collectif. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
