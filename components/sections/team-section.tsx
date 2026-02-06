"use client"

import { useLocale } from "@/lib/i18n/locale-context"
import { Server, Palette } from "lucide-react"

const memberIcons = [Server, Palette]

export function TeamSection() {
  const { t } = useLocale()

  return (
    <section id="team" className="bg-secondary px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.team.label}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.team.description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {t.team.members.map((member, index) => {
            const Icon = memberIcons[index]
            return (
              <div
                key={member.name}
                className="rounded-lg border border-border bg-background p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
