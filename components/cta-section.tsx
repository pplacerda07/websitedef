"use client"

interface CTASectionProps {
    onContactClick: () => void
}

export function CTASection({ onContactClick }: CTASectionProps) {
    return (
        <section className="relative w-full py-20 md:py-32 bg-background flex flex-col items-center justify-center text-center px-6 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <h2 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white leading-[0.9]">
                    MAKE DESIGN<br />
                    <span className="text-white/50">YOUR COMPETITIVE EDGE</span>
                </h2>

                <div>
                    <button
                        onClick={onContactClick}
                        className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-neutral-950 transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
                    >
                        <span className="relative text-sm tracking-widest uppercase font-bold">Start a Project</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
