"use client"

import { useState, type FormEvent } from "react"
import { useLocale } from "@/lib/i18n/locale-context"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const { t } = useLocale()
  const { ref: titleRef, isVisible: titleVisible } = useAnimateOnScroll(0.2)
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
    <section id="contact" className="bg-secondary/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Info side */}
            <div className="lg:col-span-2">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium text-primary">
                {t.contact.label}
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {t.contact.description}
              </p>

              <div className="mt-10 flex flex-col gap-5">
                <a
                  href="mailto:hello@lecollectif.dev"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">hello@lecollectif.dev</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-foreground"
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-foreground"
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium text-foreground"
                  >
                    {t.contact.form.subject}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-foreground"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? t.contact.form.sending : t.contact.form.send}
                </button>
                {status === "success" && (
                  <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-700">
                    {t.contact.form.success}
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-700">
                    {t.contact.form.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
