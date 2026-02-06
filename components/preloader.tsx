"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [moveToHeader, setMoveToHeader] = useState(false)

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30) // 1500ms total (50 steps * 30ms)

    // Start move to header animation at 1200ms
    const moveTimer = setTimeout(() => setMoveToHeader(true), 1200)

    // Remove from DOM at 1800ms (dar tempo pra animação completar)
    const removeTimer = setTimeout(() => setLoading(false), 1800)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(moveTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  // Prevent scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [loading])

  if (!loading) return null

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-300 ${
        moveToHeader ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo container with move animation */}
      <div
        className={`relative flex flex-col items-center justify-center transition-all duration-700 ease-out ${
          moveToHeader
            ? "translate-y-[-45vh] scale-[0.15] md:scale-[0.12]"
            : "translate-y-0 scale-100"
        }`}
        style={{ willChange: "transform" }}
      >
        {/* Outer ambient glow - SEM bordas */}
        <div
          className="absolute h-[350px] w-[350px] scale-150 rounded-full bg-white/[0.03] blur-[80px] md:h-[500px] md:w-[500px]"
          style={{ willChange: "transform, opacity" }}
        />

        {/* Secondary pulsing glow */}
        <div
          className="absolute h-[350px] w-[350px] scale-125 rounded-full bg-white/[0.02] blur-[60px] animate-[pulse-slow_3000ms_ease-in-out_infinite] md:h-[500px] md:w-[500px]"
          style={{ willChange: "transform, opacity" }}
        />

        {/* Main logo with breathing animation */}
        <div
          className="relative animate-[scaleUp_800ms_ease-out_forwards,breathe_2000ms_ease-in-out_infinite_800ms]"
           style={{ willChange: "transform, opacity" }}>

          <Image
            src="/images/logo-eagle.png"
            alt="Logo"
            width={400}
            height={400}
            priority
            className="h-[500px] w-[500px] object-contain opacity-[0.98] md:h-[650px] md:w-[650px]"
            style={{
              filter:
                "drop-shadow(0 0 15px rgba(255,255,255,0.15)) drop-shadow(0 0 40px rgba(255,255,255,0.08))",
            }}
          />
        </div>

        {/* Progress Bar */}
        <div className="mt-12 w-[280px] md:w-[400px]">
          {/* Progress bar container */}
          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            {/* Progress fill with glow */}
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-white/40 via-white/60 to-white/40 shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Moving shine effect */}
            <div
              className="absolute top-0 h-full w-[20%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_1500ms_ease-in-out_infinite]"
              style={{ left: `${progress - 10}%` }}
            />
          </div>

          {/* Progress percentage */}
          <p className="mt-3 text-center text-xs font-light tracking-wider text-white/40">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  )
}
