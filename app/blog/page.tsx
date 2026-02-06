"use client"

import Image from "next/image"
import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { blogPosts } from "@/lib/blog-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const { locale, t } = useLocale()

  return (
    <>
      <SiteHeader />
      <main className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium text-primary">
              {t.blog.label}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.blog.title}
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.blog.description}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const content = post[locale]
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={content.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {content.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                      {content.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {content.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                      {t.blog.readMore}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
