import { ArrowUpRight, ArrowDown } from "lucide-react"
import Image from "next/image"

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
            <span className="block italic text-foreground/90">WE ARE</span>
            <span className="block text-foreground filter drop-shadow-lg">WEB DESIGN</span>
            <span className="block text-foreground/30 italic">AGENCY</span>
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16 z-20">
        <div className="relative w-24 h-24">
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
