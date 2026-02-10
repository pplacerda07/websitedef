"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"

const features = [
  {
    title: "The Process",
    description:
      "A holistic view of how we transform abstract ideas into tangible digital experiences, starting with a strong foundation.",
  },
  {
    title: "Strategy → Structure → Code",
    description:
      "We align on your audience and brand first, then translate that into a clear site structure, content hierarchy, and a maintainable build. What we decide strategically is reflected in the codebase.",
  },
  {
    title: "Design + Motion with Restraint",
    description:
      "Polished UI and scroll-based interactions that support the message—designed to feel premium, stay accessible, and remain performant.",
  },
  {
    title: "Production Delivery (Vercel)",
    description:
      "Fully deployed on Vercel with a production-ready setup for speed, stability, and clean releases—built to launch smoothly and evolve safely.",
  },
  {
    title: "SEO, Measurement & Maintenance",
    description:
      "Technical SEO foundations, Google tracking setup, and monthly maintenance for updates and continuous refinement—so the website stays healthy over time.",
  },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map scroll progress (0 to 1) to index (0 to 3)
      // Slight buffer at the end to ensure the last one stays active
      const index = Math.min(features.length - 1, Math.floor(latest * features.length))
      setActiveIndex(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">
        {/* Left Column: Arc Visual (1/3 width) */}
        <div className="w-1/3 h-full relative flex items-center bg-black/10 backdrop-blur-sm border-r border-white/5">
          <div className="absolute right-0 top-0 w-[50vh] h-[100vh] flex items-center justify-center">
            {/* SVG Arc Container */}
            <svg
              viewBox="0 0 200 800"
              className="w-full h-full overflow-visible"
              style={{ transform: "translateX(-2px)" }}
            >
              <defs>
                <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="10%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="90%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>

              {/* The Curve Line */}
              <path
                d="M 1,0 C 180,200 180,600 1,800"
                fill="none"
                stroke="url(#arc-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Nodes - Calculated for distribution along the tall curve */}
              {features.map((_, index) => {
                const positions = [
                  { x: 74, y: 120 },    // 1. Intro (Start) - Aligned to curve
                  { x: 125, y: 260 },   // 2. Strategy - Adjusted right
                  { x: 135, y: 400 },   // 3. Design (Apex)
                  { x: 125, y: 540 },   // 4. Production - Adjusted right
                  { x: 74, y: 680 },    // 5. SEO (End) - Aligned to curve
                ]
                const pos = positions[index]

                const isActive = index === activeIndex
                const isPast = index < activeIndex

                return (
                  <g key={index}>
                    {/* Glow effect for active */}
                    {isActive && (
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        r="50"
                        fill="rgba(255,255,255,0.05)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      />
                    )}

                    {/* The Node Circle - 3x bigger (was 4/8 -> now 12/24) */}
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? 24 : 12}
                      fill={isActive || isPast ? "#fff" : "#1a1a1a"}
                      stroke={isActive ? "rgba(255,255,255,0.5)" : "#333"}
                      strokeWidth="3"
                      animate={{
                        r: isActive ? 24 : 12,
                        fill: isActive ? "#ffffff" : isPast ? "#888888" : "#1a1a1a",
                        stroke: isActive ? "rgba(255,255,255,0.8)" : "#333",
                      }}
                      style={{ zIndex: 10 }}
                    />
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* Right Column: Content (2/3 width) */}
        <div className="w-2/3 h-full flex flex-col justify-center px-12 lg:px-24">
          <div className="relative h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="space-y-6">
                  <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
                    {features[activeIndex].title}
                  </h2>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                    <span className="text-xs font-mono text-white/50">0{activeIndex + 1}</span>
                    <span className="text-xs font-mono text-white/50">/</span>
                    <span className="text-xs font-mono text-white/50">05</span>
                  </div>

                  <p className="text-lg text-white/60 max-w-xl leading-relaxed mt-4">
                    {features[activeIndex].description}
                  </p>

                  <div className="relative">
                    {/* 0. Intro Animation (New) */}
                    {activeIndex === 0 && (
                      <div className="mt-8 h-40 w-full max-w-lg relative overflow-visible flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <motion.div
                            className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.div
                            className="absolute inset-4 rounded-full bg-white/10 border border-white/20"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.2, 0.6] }}
                            transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-white/80 font-mono text-xs tracking-widest uppercase">
                            Start
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 1. HTML Coding Animation (Was 0) */}
                    {activeIndex === 1 && (
                      <div className="absolute -top-32 -right-4 md:-right-12 p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 font-mono text-[10px] text-blue-300 leading-tight opacity-80 shadow-2xl skew-x-[-5deg] skew-y-[-2deg] transform rotate-2">
                        {[
                          "<header>",
                          "  <nav>",
                          "    <link>Home</link>",
                          "  </nav>",
                          "</header>"
                        ].map((line, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: [0, 1, 1, 0], x: [10, 0, 0, 10] }}
                            transition={{
                              delay: i * 0.5,
                              duration: 4,
                              times: [0, 0.1, 0.9, 1],
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="whitespace-pre"
                          >
                            <span className="text-pink-400">{line.match(/<[^>]+>/g)?.[0] || line}</span>
                            {line.replace(/<[^>]+>/g, "")}
                            {line.match(/<\/[^>]+>/g)?.[0]}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* 2. Bow and Arrow Animation (Was 0/Strategy) */}
                    {activeIndex === 1 && (
                      <div className="mt-24 h-40 w-full max-w-sm relative overflow-visible">
                        {/* Note: This was attached to Strategy (now index 1) */}
                        <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
                          {/* Target - Placed lower right to catch the falling arrow */}
                          <motion.g transform="translate(350, 120)">
                            <circle cx="0" cy="0" r="20" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
                            <circle cx="0" cy="0" r="14" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
                            <circle cx="0" cy="0" r="4" fill="white" opacity="0.9" />
                          </motion.g>

                          {/* Bow Group - Rotated to shoot up */}
                          <motion.g transform="translate(50, 100) rotate(-45)">
                            {/* Bow Body */}
                            <path
                              d="M 0,-30 Q 30,0 0,30"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />

                            {/* String */}
                            <motion.path
                              d="M 0,-30 L 0,30"
                              stroke="rgba(255,255,255,0.5)"
                              strokeWidth="1"
                              animate={{
                                d: [
                                  "M 0,-30 L 0,30",           // Idle
                                  "M 0,-30 L -20,0 L 0,30",   // Pulled back
                                  "M 0,-30 L 0,30",           // Snap
                                  "M 0,-30 L 0,30",           // Wait
                                ]
                              }}
                              transition={{
                                duration: 4,
                                ease: "easeInOut",
                                times: [0, 0.35, 0.36, 1], // Pull until 0.35, snap at 0.36
                                repeat: Infinity
                              }}
                            />
                          </motion.g>

                          {/* Arrow - Parabolic Flight */}
                          <motion.g
                            initial={{ x: 50, y: 100, rotate: -45, opacity: 1 }}
                            animate={{
                              x: [50, 30, 50, 130, 210, 290, 350, 350],  // At 0.36 (index 2), x moves back to 50 (synced with string)
                              y: [100, 120, 100, 30, 10, 50, 120, 120],  // At 0.36 (index 2), y moves back to 100 (synced with string)
                              rotate: [-45, -45, -45, -25, 0, 25, 45, 45],
                              opacity: [1, 1, 1, 1, 1, 1, 1, 0]
                            }}
                            transition={{
                              duration: 4,
                              ease: "linear",
                              times: [0, 0.35, 0.36, 0.5, 0.65, 0.8, 0.95, 1], // Sync point at 0.36
                              repeat: Infinity
                            }}
                            style={{ transformOrigin: "center" }}
                          >
                            <line x1="-20" y1="0" x2="20" y2="0" stroke="white" strokeWidth="2" />
                            <path d="M 15,-5 L 20,0 L 15,5" fill="none" stroke="white" strokeWidth="2" />
                          </motion.g>
                        </svg>
                      </div>
                    )}

                    {/* 3. Rain Animation (Feature 2 - Design) */}
                    {activeIndex === 2 && (
                      <div className="mt-8 h-40 w-full max-w-xl relative overflow-visible flex items-end justify-center pb-4">
                        <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="water-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
                              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                            </linearGradient>
                          </defs>

                          {/* Subtle gradient at the bottom to suggest depth without a hard line */}
                          <rect x="0" y="85" width="400" height="30" fill="url(#water-grad)" className="blur-xl" />

                          {/* Rain Drops & Ripples */}
                          {/* Generating fixed random positions for a consistent loop */}
                          {[
                            { x: 50, delay: 0 },
                            { x: 120, delay: 0.8 },
                            { x: 200, delay: 1.5 },
                            { x: 280, delay: 0.4 },
                            { x: 350, delay: 2.1 },
                            { x: 80, delay: 2.5 },
                            { x: 240, delay: 3.2 },
                            { x: 160, delay: 3.8 },
                            { x: 320, delay: 4.2 },
                            { x: 30, delay: 4.8 }
                          ].map((drop, i) => (
                            <g key={i}>
                              {/* Falling Drop - Blue */}
                              <motion.circle
                                cx={drop.x} cy="0" r="3"
                                fill="#60a5fa"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{
                                  y: [-20, 85],
                                  opacity: [0, 1, 1, 0],
                                  scaleY: [1, 1.5, 0.5] // Stretch while falling, squash on impact
                                }}
                                transition={{
                                  duration: 1.5,
                                  ease: "easeIn",
                                  delay: drop.delay,
                                  repeat: Infinity,
                                  repeatDelay: 2
                                }}
                              />

                              {/* Ripple - White, appears on impact */}
                              <motion.ellipse
                                cx={drop.x} cy="85" rx="2" ry="0.5"
                                fill="none"
                                stroke="white"
                                strokeWidth="1.5"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                  opacity: [0, 0.8, 0],
                                  scale: [0.5, 3],
                                  strokeWidth: [1.5, 0]
                                }}
                                transition={{
                                  duration: 1.2,
                                  ease: "easeOut",
                                  delay: drop.delay + 1.5, // Matches drop fall duration
                                  repeat: Infinity,
                                  repeatDelay: 2.3 // (1.5 duration + 2 delay) - 1.2 duration = 2.3 wait
                                }}
                              />
                            </g>
                          ))}

                          {/* Foreground Depth Overlay - Adds a "glassy" volume in front of the ripples */}
                          <defs>
                            <linearGradient id="depth-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
                              <stop offset="100%" stopColor="rgba(96, 165, 250, 0.15)" />
                            </linearGradient>
                          </defs>
                          <rect x="0" y="80" width="400" height="20" fill="url(#depth-grad)" className="blur-sm" />
                        </svg>
                      </div>
                    )}

                    {/* 4. Production Delivery Animation (Feature 3 - Production) */}
                    {activeIndex === 3 && (
                      <div className="mt-8 h-32 w-full max-w-3xl relative overflow-visible flex items-center justify-center">
                        <svg viewBox="0 0 600 100" className="w-full h-full overflow-visible">
                          {/* Base Line (Dark) */}
                          <line x1="50" y1="50" x2="550" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />

                          {/* Progress Line (Draws L->R) */}
                          <motion.line
                            x1="50" y1="50" x2="550" y2="50"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 4.0, ease: "linear" }}
                          />

                          {/* Travelling Dot */}
                          <motion.circle
                            r="4" fill="white"
                            initial={{ cx: 50, cy: 50, opacity: 0 }}
                            animate={{ cx: 550, opacity: 1 }}
                            transition={{ duration: 4.0, ease: "linear" }}
                          />
                          {/* Glow for Dot */}
                          <motion.circle
                            r="8" fill="white" opacity="0.5"
                            initial={{ cx: 50, cy: 50, opacity: 0 }}
                            animate={{ cx: 550, opacity: 0.5 }}
                            transition={{ duration: 4.0, ease: "linear" }}
                            className="blur-sm"
                          />

                          {/* Nodes */}
                          {[
                            { x: 50, label: "Build", delay: 0 },
                            { x: 300, label: "Review", delay: 2.0 },
                            { x: 550, label: "", delay: 4.0 }
                          ].map((node, i) => (
                            <g key={i}>
                              {/* Node Circle */}
                              <motion.circle
                                cx={node.x} cy="50" r="6"
                                fill="#1a1a1a"
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="2"
                                animate={{
                                  fill: ["#1a1a1a", "#ffffff"],
                                  stroke: ["rgba(255,255,255,0.2)", "#ffffff"]
                                }}
                                transition={{ duration: 0.3, delay: node.delay }}
                              />

                              {/* Label */}
                              {node.label && (
                                <motion.text
                                  x={node.x} y="65"
                                  textAnchor="middle"
                                  fill="white"
                                  fontSize="12"
                                  fontFamily="var(--font-mono)"
                                  initial={{ opacity: 0.3, y: 70 }}
                                  animate={{ opacity: 1, y: 65 }}
                                  transition={{ duration: 0.3, delay: node.delay }}
                                >
                                  {node.label}
                                </motion.text>
                              )}
                            </g>
                          ))}

                          {/* "Live" End State */}
                          <motion.g
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 4.0, duration: 0.4, ease: "backOut" }}
                          >
                            {/* Checkmark Icon at End Node */}
                            <path
                              d="M 546,50 L 549,53 L 554,47"
                              fill="none"
                              stroke="#ef4444"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />

                            {/* "Live" Text */}
                            <text
                              x="550" y="65"
                              textAnchor="middle"
                              fill="#ef4444"
                              fontSize="12"
                              fontWeight="bold"
                              fontFamily="var(--font-mono)"
                            >
                              Live
                            </text>
                          </motion.g>

                        </svg>
                      </div>
                    )}

                    {/* 5. SEO & Maintenance Animation (Feature 4 - Maintenance) */}
                    {activeIndex === 4 && (
                      <div className="mt-8 h-40 w-full max-w-lg relative overflow-visible flex flex-col items-center justify-center">
                        <div className="flex items-end justify-between w-full px-8 pb-4">

                          {/* 1. SEO Icon - Page with Tag */}
                          <motion.div
                            className="relative w-16 h-20 flex items-center justify-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0 }}
                          >
                            <svg viewBox="0 0 64 80" className="w-full h-full overflow-visible">
                              {/* Page Outline */}
                              <motion.path
                                d="M 12,10 L 42,10 L 52,20 L 52,70 L 12,70 Z"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                              />
                              <path d="M 42,10 L 42,20 L 52,20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />

                              {/* Tag <> */}
                              <motion.g
                                transform="translate(32, 40)"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                              >
                                <path d="M -8,0 L -12,5 L -8,10" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M 8,0 L 12,5 L 8,10" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="-3" y1="12" x2="3" y2="-2" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                              </motion.g>
                            </svg>
                          </motion.div>

                          {/* 2. Analytics Icon - Bar Chart */}
                          <motion.div
                            className="relative w-20 h-20 flex items-end justify-center gap-1.5 pb-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {[25, 45, 35].map((h, i) => ( // Modest heights
                              <motion.div
                                key={i}
                                className="w-3 rounded-t-sm bg-white"
                                initial={{ height: 0 }}
                                animate={{ height: h }}
                                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                              />
                            ))}
                            {/* Axis line */}
                            <div className="absolute bottom-1 left-3 right-3 h-0.5 bg-white/30" />
                          </motion.div>

                          {/* 3. Maintenance Icon - Rotate Refresh */}
                          <motion.div
                            className="relative w-16 h-20 flex items-center justify-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            <svg viewBox="0 0 60 60" className="w-full h-full overflow-visible">
                              <motion.g
                                style={{ transformOrigin: "center" }}
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 180 }}
                                transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
                              >
                                <path
                                  d="M 30,12 A 18,18 0 1,1 15,45"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                                <path d="M 30,8 L 30,16 L 38,12 Z" fill="white" />
                              </motion.g>
                              {/* Gear/Center dot */}
                              <circle cx="30" cy="30" r="4" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
                            </svg>
                          </motion.div>

                        </div>

                        {/* Status & Caption */}
                        <motion.div
                          className="flex flex-col items-center gap-3 mt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                            Measured. Maintained. Improved.
                          </p>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
