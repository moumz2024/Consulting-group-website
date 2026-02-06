"use client"

import Image from "next/image"
import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { blogPosts } from "@/lib/blog-data"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { ArrowRight } from "lucide-react"

function BlogCard({
  post,
  locale,
  readMore,
  index,
}: {
  post: (typeof blogPosts)[0]
  locale: "en" | "fr"
  readMore: string
  index: number
}) {
  const { ref, isVisible } = useAnimateOnScroll<HTMLAnchorElement>(0.1)
  const content = post[locale]

  return (
    <Link
      ref={ref}
      href={`/blog/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
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
        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
          {content.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {content.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
          {readMore}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export function BlogSection() {
  const { locale, t } = useLocale()
  const { ref: titleRef, isVisible: titleVisible } = useAnimateOnScroll(0.2)
  const posts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`flex items-end justify-between transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium text-primary">
              {t.blog.label}
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.blog.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.blog.description}
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent md:flex"
          >
            {t.blog.allPosts}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              locale={locale}
              readMore={t.blog.readMore}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.blog.allPosts}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
