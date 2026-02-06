"use client"

import Image from "next/image"
import { useLocale } from "@/lib/i18n/locale-context"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const memberImages = ["/images/team-backend.jpg", "/images/team-frontend.jpg"]

export function TeamSection() {
  const { t } = useLocale()
  const { ref: titleRef, isVisible: titleVisible } = useAnimateOnScroll(0.2)

  return (
    <section id="team" className="bg-secondary/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`max-w-2xl transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium text-primary">
            {t.team.label}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.team.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {t.team.members.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} image={memberImages[index]} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({
  member,
  index,
  image,
}: {
  member: { name: string; role: string; bio: string; skills: readonly string[] }
  index: number
  image: string
}) {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>(0.15)

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl border border-border bg-card transition-all duration-600 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
