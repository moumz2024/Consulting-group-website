"use client"

import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
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
const serviceColors = [
  "bg-blue-50 text-blue-600",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-rose-50 text-rose-600",
  "bg-sky-50 text-sky-600",
  "bg-teal-50 text-teal-600",
]

function ServiceCard({
  service,
  index,
  cta,
}: {
  service: { slug: string; title: string; short: string }
  index: number
  cta: string
}) {
  const { ref, isVisible } = useAnimateOnScroll<HTMLAnchorElement>(0.1)
  const Icon = serviceIcons[index]
  const color = serviceColors[index]

  return (
    <Link
      ref={ref}
      key={service.slug}
      href={`/services/${service.slug}`}
      className={`group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.short}
      </p>
      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}

export function ServicesSection() {
  const { t } = useLocale()
  const { ref: titleRef, isVisible: titleVisible } = useAnimateOnScroll(0.2)

  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`max-w-2xl transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium text-primary">
            {t.services.label}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.services.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              cta={t.services.cta}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
