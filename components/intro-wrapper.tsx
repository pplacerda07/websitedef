"use client"

import type React from "react"
import { Preloader } from "@/components/preloader"

export function IntroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      {children}
    </>
  )
}
