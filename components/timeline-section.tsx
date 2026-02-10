"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const timelineItems = [
    {
        day: "Day 1–2",
        title: "Alignment",
        description:
            "We map your audience, goals, and brand direction. Then we define the site structure, key sections, and content priorities.",
    },
    {
        day: "Day 3–6",
        title: "Design System + Layout",
        description:
            "We set the visual language (type, spacing, components) and design the page flow with a clear hierarchy and intentional UX.",
    },
    {
        day: "Day 7–11",
        title: "Build + Motion",
        description:
            "We develop the website with a clean component structure and implement purposeful animations—premium feel, strong performance, accessible by default.",
    },
    {
        day: "Day 12–14",
        title: "SEO + Tracking + QA",
        description:
            "We set technical SEO foundations, configure Google measurement, and run QA across devices to ensure everything is stable and consistent.",
    },
    {
        day: "Day 15",
        title: "Launch (Vercel)",
        description:
            "We deploy on Vercel with a production-ready setup and hand over a website that’s live, tracked, and maintainable.",
    },
]

export function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Track scroll progress of the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    // Smooth opacity for header entrance
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
    const headerY = useTransform(scrollYProgress, [0, 0.2], [50, 0])

    // Fluid Yellow Line Drawing
    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1])

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black py-24 px-6 md:px-12 overflow-hidden z-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

            {/* Fluid Yellow Line SVG */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full opacity-20 md:opacity-100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M 50,0 Q 90,25 50,50 Q 10,75 50,100"
                        fill="none"
                        stroke="#FACC15"
                        strokeWidth="2"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        style={{ pathLength }}
                    />
                    {/* Glow effect duplicate */}
                    <motion.path
                        d="M 50,0 Q 90,25 50,50 Q 10,75 50,100"
                        fill="none"
                        stroke="#FACC15"
                        strokeWidth="6"
                        strokeOpacity="0.2"
                        strokeLinecap="round"
                        className="blur-md"
                        vectorEffect="non-scaling-stroke"
                        style={{ pathLength }}
                    />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <motion.div style={{ opacity: headerOpacity, y: headerY }} className="text-center mb-20 space-y-4">
                    <h2 className="text-lg md:text-xl font-mono text-white/60 tracking-widest uppercase">
                        Quickness and Excellence
                    </h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-display)] text-white tracking-tight">
                        15 days to delivery.
                    </h3>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l border-white/10 ml-4 md:ml-0 pl-12 md:pl-0">
                    <div className="md:space-y-24 space-y-16">
                        {timelineItems.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>

                {/* Integrity Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-32 pt-12 border-t border-white/10 text-center"
                >
                    <p className="text-sm md:text-base text-white/40 max-w-2xl mx-auto leading-relaxed">
                        * Timelines depend on content readiness and feedback speed—our process stays structured either way.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

function TimelineItem({ item, index }: { item: typeof timelineItems[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1])
    const x = useTransform(scrollYProgress, [0, 1], [20, 0])

    // Highlight calculations
    const isLast = index === timelineItems.length - 1

    return (
        <div ref={ref} className="relative md:grid md:grid-cols-12 md:gap-12 group">
            {/* Dot on the timeline */}
            <div className="absolute -left-[54px] md:left-auto md:right-full md:mr-[-7px] top-2 md:top-3">
                <motion.div
                    style={{ opacity: scrollYProgress }}
                    className="w-3 h-3 rounded-full bg-white relative z-20"
                >
                    <div className="absolute inset-0 bg-white blur-md opacity-50" />
                </motion.div>
            </div>

            {/* Day / Timeframe (Left Column on Desktop) */}
            <motion.div
                style={{ opacity }}
                className="col-span-4 text-left md:text-right mb-2 md:mb-0"
            >
                <span className="text-2xl md:text-3xl font-[var(--font-display)] text-white">
                    {item.day}
                </span>
            </motion.div>

            {/* Content (Right Column on Desktop) */}
            <motion.div
                style={{ opacity, x }}
                className="col-span-8 space-y-3"
            >
                <h4 className="text-xl font-medium text-white/90">{item.title}</h4>
                <p className="text-lg text-white/60 leading-relaxed max-w-md">
                    {item.description}
                </p>
            </motion.div>
        </div>
    )
}
