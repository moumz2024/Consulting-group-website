"use client"

import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import {
  Smartphone,
  ShoppingCart,
  Globe,
  Users,
  MessageSquare,
  Rocket,
  ArrowRight,
} from "lucide-react"

const serviceIcons = [Smartphone, ShoppingCart, Globe, Users, MessageSquare, Rocket]

export function ServicesSection() {
  const { t } = useLocale()

  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.services.label}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.services.description}
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between bg-background p-8 transition-colors hover:bg-secondary"
              >
                <div>
                  <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  {t.services.cta}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
