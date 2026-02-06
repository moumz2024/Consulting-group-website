import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Mono } from "next/font/google"
import { LocaleProvider } from "@/lib/i18n/locale-context"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "le collectif | Consulting & Development",
  description:
    "A collective of two friends combining DevOps, Backend, Design, Mobile & Frontend expertise. We build digital products that matter.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#171a1f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
