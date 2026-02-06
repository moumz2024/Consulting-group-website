"use client"

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
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.blog.label}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.blog.title}
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.blog.description}
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const content = post[locale]
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-background p-8 transition-colors hover:bg-secondary"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {content.category}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    {content.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {content.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      {t.blog.readMore}
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {post.date}
                    </span>
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
