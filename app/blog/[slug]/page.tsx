"use client"

import React from "react"
import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { blogPosts } from "@/lib/blog-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, ArrowRight } from "lucide-react"

function renderContent(content: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let currentParagraph: string[] = []

  function flushParagraph() {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join("\n")
      elements.push(
        <p
          key={`p-${elements.length}`}
          className="mb-6 text-muted-foreground leading-relaxed"
        >
          {text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={i} className="font-semibold text-foreground">
                  {part.slice(2, -2)}
                </strong>
              )
            }
            return part
          })}
        </p>
      )
      currentParagraph = []
    }
  }

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flushParagraph()
      elements.push(
        <h2
          key={`h-${elements.length}`}
          className="mb-4 mt-10 text-xl font-bold text-foreground"
        >
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith("- ")) {
      flushParagraph()
      elements.push(
        <li
          key={`li-${elements.length}`}
          className="mb-2 ml-4 text-muted-foreground text-sm leading-relaxed list-disc"
        >
          {line.slice(2)}
        </li>
      )
    } else if (line.trim() === "") {
      flushParagraph()
    } else {
      currentParagraph.push(line)
    }
  }
  flushParagraph()

  return elements
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const { locale, t } = useLocale()

  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  const post = blogPosts[postIndex]
  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length]
  const prevPost =
    blogPosts[(postIndex - 1 + blogPosts.length) % blogPosts.length]

  if (!post) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground">
              Article not found
            </h1>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.blog.allPosts}
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    )
  }

  const content = post[locale]

  return (
    <>
      <SiteHeader />
      <main className="px-6 pt-32 pb-24">
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.blog.allPosts}
          </Link>

          {/* Header */}
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {content.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {content.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {content.excerpt}
            </p>
          </div>

          {/* Cover image */}
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          {/* Content */}
          <div className="mt-10">{renderContent(content.content)}</div>

          {/* CTA */}
          <div className="mt-16 flex flex-col items-center rounded-2xl border border-border bg-primary/5 p-10 text-center">
            <h3 className="text-xl font-bold text-foreground">
              {t.contact.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.contact.description}
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Post navigation */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-border p-6 transition-all hover:shadow-md hover:border-primary/20"
            >
              <ArrowLeft className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Previous</p>
                <p className="mt-1 truncate text-sm font-medium text-foreground">
                  {prevPost[locale].title}
                </p>
              </div>
            </Link>
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center justify-end gap-3 rounded-2xl border border-border p-6 text-right transition-all hover:shadow-md hover:border-primary/20"
            >
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Next</p>
                <p className="mt-1 truncate text-sm font-medium text-foreground">
                  {nextPost[locale].title}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
