"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ReviewSection() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center py-24 bg-background overflow-visible">
            <div className="container mx-auto px-6 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center h-full">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div>
                            <h2 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.9]">
                                REAL WORDS<br />
                                <span className="text-white/50">FROM REAL WORK</span>
                            </h2>
                        </div>

                        <div className="space-y-8 max-w-xl">
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                                We do not sell hype. We build websites with clear structure, strong performance, and measurable foundations, so the result is visible in the experience.
                            </p>

                            <div className="relative pl-6 border-l-2 border-white/20">
                                <blockquote className="text-xl md:text-2xl font-light text-white italic leading-relaxed">
                                    "We were on a simple WordPress site before. It worked, but it felt a bit generic and it was not that easy to keep updated. ESP Barcelona took the time to understand our brand and built a website that feels cleaner and faster. The animations are subtle and the site is easier to manage. We also like that we can finally track what people do and keep improving it."
                                </blockquote>
                            </div>

                            <div className="space-y-1">
                                <h3 className="font-[var(--font-display)] text-3xl tracking-wide text-white">
                                    NOVELA CAFÉ
                                </h3>
                                <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
                                    Website delivered on Vercel with SEO foundations and Google tracking in place.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image Interaction */}
                    <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] max-w-lg mx-auto lg:ml-auto group cursor-none">
                        {/* The "Real" Photo (Color) - Always visible underneath */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg">
                            <Image
                                src="/images/novela-real.jpeg"
                                alt="Novela Café Owner - Real Photo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* The "Drawing" (B&W) - On top, fades out on hover */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg transition-opacity duration-700 ease-in-out group-hover:opacity-0 z-10 bg-white/5">
                            <Image
                                src="/images/novela-drawing.png?v=2"
                                alt="Novela Café Owner - Illustration"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Optional: Add a subtle border/frame */}
                        <div className="absolute inset-0 rounded-lg border border-white/10 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    )
}
