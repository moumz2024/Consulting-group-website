"use client"

import { useState, type FormEvent } from "react"
import { useLocale } from "@/lib/i18n/locale-context"

export function ContactSection() {
  const { t } = useLocale()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus("success")
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="bg-secondary px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.contact.label}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.contact.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:hello@duodigital.dev" className="hover:text-foreground transition-colors">
                hello@duodigital.dev
              </a>
              <span>+33 1 23 45 67 89</span>
              <span>Paris, France</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-foreground">
                {t.contact.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-foreground">
                {t.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-foreground">
                {t.contact.form.subject}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-foreground">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? t.contact.form.sending : t.contact.form.send}
            </button>
            {status === "success" && (
              <p className="text-sm text-foreground">{t.contact.form.success}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">{t.contact.form.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
