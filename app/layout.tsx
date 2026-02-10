import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Preloader } from "@/components/preloader"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "WEN LAUNCH - Full-Service Web3 Agency",
  description:
    "The first full-stack Web3 creative agency integrating AI technology to deliver best-in-class client experience.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload logo for instant preloader display */}
        <link rel="preload" href="/images/logo-eagle.png" as="image" />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden ${bebasNeue.variable}`}>
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
