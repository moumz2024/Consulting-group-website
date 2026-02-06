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

const serviceColors: Record<string, string> = {
  "mobile-apps": "bg-blue-50 text-blue-600",
  "e-commerce": "bg-emerald-50 text-emerald-600",
  websites: "bg-amber-50 text-amber-600",
  "developer-missions": "bg-rose-50 text-rose-600",
  consulting: "bg-sky-50 text-sky-600",
  "mvp-startup": "bg-teal-50 text-teal-600",
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
  const nextService =
    t.services.items[(currentIndex + 1) % t.services.items.length]
  const prevService =
    t.services.items[
      (currentIndex - 1 + t.services.items.length) % t.services.items.length
    ]

  if (!service) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground">
              Service not found
            </h1>
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
  const color = serviceColors[slug] || "bg-teal-50 text-teal-600"

  return (
    <>
      <SiteHeader />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.nav.services}
          </Link>

          {/* Header */}
          <div className="mt-8 flex items-start gap-5">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${color}`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {service.title}
              </h1>
              <p className="mt-2 text-muted-foreground">{service.short}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-border" />

          {/* Description */}
          <div>
            {service.description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-6 text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Features */}
          <div className="mt-12 rounded-2xl border border-border bg-primary/5 p-8">
            <h2 className="text-lg font-bold text-foreground">
              {t.services.label}
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center rounded-2xl border border-border bg-card p-12 text-center">
            <h3 className="text-xl font-bold text-foreground">
              {t.contact.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.contact.description}
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <Link
              href={`/services/${prevService.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-border p-6 transition-all hover:shadow-md hover:border-primary/20"
            >
              <ArrowLeft className="h-4 w-4 text-primary transition-transform group-hover:-translate-x-1" />
              <div>
                <p className="text-xs text-muted-foreground">Previous</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {prevService.title}
                </p>
              </div>
            </Link>
            <Link
              href={`/services/${nextService.slug}`}
              className="group flex items-center justify-end gap-3 rounded-2xl border border-border p-6 text-right transition-all hover:shadow-md hover:border-primary/20"
            >
              <div>
                <p className="text-xs text-muted-foreground">Next</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {nextService.title}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
