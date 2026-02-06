"use client"

import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
              duo<span className="text-muted-foreground">digital</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.footer.navigation}
            </h4>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
              <Link href="/" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/#services" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                {t.nav.services}
              </Link>
              <Link href="/#team" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                {t.nav.team}
              </Link>
              <Link href="/blog" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                {t.nav.blog}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.nav.contact}
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:hello@duodigital.dev"
                className="flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
                hello@duodigital.dev
              </a>
              <span className="flex items-center gap-2 text-sm text-foreground">
                <Phone className="h-4 w-4 text-muted-foreground" />
                +33 1 23 45 67 89
              </span>
              <span className="flex items-center gap-2 text-sm text-foreground">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Paris, France
              </span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.footer.legal}
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} duodigital. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
