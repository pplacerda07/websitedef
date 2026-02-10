"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import Image from "next/image"

function TypewriterText() {
  const words = ["design", "develop", "build", "delivery"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = 150
    const deletingSpeed = 75
    const pauseTime = 2000

    const handleType = () => {
      const fullWord = words[currentWordIndex]

      if (isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullWord.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex])

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover object-center" priority />
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay for smooth transition to content below */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.03) 2px,
                rgba(255,255,255,0.03) 4px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.03) 2px,
                rgba(255,255,255,0.03) 4px
              )
            `,
          }}
        />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[120px] animate-pulse-slow z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/[0.015] rounded-full blur-[100px] animate-pulse-slower z-10" />

      <div className="absolute top-24 left-6 z-20">
        <p className="text-xs text-foreground/60">Creative</p>
        <p className="text-xs text-foreground/60">studio</p>
      </div>

      <div className="absolute top-24 right-6 z-20">
        <ArrowUpRight className="w-8 h-8 text-foreground" strokeWidth={1.5} />
      </div>

      <div className="max-w-4xl mx-auto w-full z-20 text-center">
        <div className="flex flex-col items-center justify-center relative">
          {/* Blur effect behind title */}
          <div className="absolute inset-0 bg-black/40 blur-[80px] rounded-full z-0 transform scale-125" />

          <h1
            className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight relative z-20 drop-shadow-2xl"
          >
            <span className="block italic text-foreground/90 mb-2">You imagine</span>
            <span className="block text-foreground filter drop-shadow-lg font-thin">
              We <TypewriterText />
            </span>
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="relative w-14 h-14">
          {/* Rotating text */}
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <defs>
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[8px] fill-foreground/60 uppercase tracking-[0.3em]">
              <textPath href="#circlePath">SCROLL TO EXPLORE • SCROLL TO EXPLORE •</textPath>
            </text>
          </svg>
          {/* Center arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  )
}
