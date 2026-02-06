"use client"

import { use } from "react"
import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Smartphone,
  ShoppingCart,
  Globe,
  Users,
  MessageSquare,
  Rocket,
} from "lucide-react"

const serviceIcons: Record<string, typeof Smartphone> = {
  "mobile-apps": Smartphone,
  "e-commerce": ShoppingCart,
  websites: Globe,
  "developer-missions": Users,
  consulting: MessageSquare,
  "mvp-startup": Rocket,
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const { t } = useLocale()

  const service = t.services.items.find((s) => s.slug === slug)
  const currentIndex = t.services.items.findIndex((s) => s.slug === slug)
  const nextService = t.services.items[(currentIndex + 1) % t.services.items.length]
  const prevService =
    t.services.items[(currentIndex - 1 + t.services.items.length) % t.services.items.length]

  if (!service) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground">Service not found</h1>
            <Link
              href="/#services"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    )
  }

  const Icon = serviceIcons[slug] || Globe

  return (
    <>
      <SiteHeader />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.nav.services}
          </Link>

          {/* Header */}
          <div className="mt-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
              <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {service.title}
              </h1>
              <p className="mt-2 text-muted-foreground">{service.short}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-border" />

          {/* Description */}
          <div className="prose-sm text-foreground leading-relaxed">
            {service.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-6 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Features */}
          <div className="mt-12 rounded-lg border border-border bg-secondary p-8">
            <h2 className="text-lg font-semibold text-foreground">
              {t.services.label}
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center rounded-lg border border-border bg-background p-12 text-center">
            <h3 className="text-xl font-semibold text-foreground">{t.contact.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.contact.description}</p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <Link
              href={`/services/${prevService.slug}`}
              className="group flex items-center gap-3 rounded-lg border border-border p-6 transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-x-1" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">Previous</p>
                <p className="mt-1 text-sm font-medium text-foreground">{prevService.title}</p>
              </div>
            </Link>
            <Link
              href={`/services/${nextService.slug}`}
              className="group flex items-center justify-end gap-3 rounded-lg border border-border p-6 text-right transition-colors hover:bg-secondary"
            >
              <div>
                <p className="font-mono text-xs text-muted-foreground">Next</p>
                <p className="mt-1 text-sm font-medium text-foreground">{nextService.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
