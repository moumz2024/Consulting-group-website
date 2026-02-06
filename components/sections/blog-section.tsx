"use client"

import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { blogPosts } from "@/lib/blog-data"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const { locale, t } = useLocale()
  const posts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.blog.label}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.blog.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.blog.description}
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            {t.blog.allPosts}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {posts.map((post) => {
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
                <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {content.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {content.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  {t.blog.readMore}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-4 font-mono text-xs text-muted-foreground/60">
                  {post.date}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.blog.allPosts}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}
