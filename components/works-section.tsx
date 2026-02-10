import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const works = [
  {
    title: "Novela",
    category: "Coffee & Brunch",
    image: "/images/novela.png",
    size: "large",
    link: "https://v0-code-adaptation.vercel.app/",
  },
  {
    title: "LYRA Studio",
    category: "Fashion Ecommerce",
    image: "/images/lyra.png",
    size: "small",
    link: "https://design02-portfolio-el.aura.build/",
  },
  {
    title: "Wallet",
    category: "Finance Platform",
    image: "/images/wallet.png",
    size: "small",
    link: "https://design-portfolio-elitelead.aura.build/",
  },
]

export function WorksSection() {
  return (
    <section className="px-6 pb-24 pt-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center w-screen relative left-1/2 -translate-x-1/2 mb-16">
          <div className="flex-1 h-[2px] bg-[#FACC15]" />
          <h2 className="font-[var(--font-display)] text-5xl md:text-6xl tracking-tight italic px-6 shrink-0 text-foreground">
            OUR WORKS
          </h2>
          <div className="flex-1 h-[2px] bg-[#FACC15]" />
        </div>

        <div className="space-y-4">
          {/* Large featured work with Eagle */}
          <div className="relative">
            <Link href={works[0].link} className="block relative group overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src={works[0].image || "/placeholder.svg"}
                alt={works[0].title}
                width={800}
                height={600}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <p className="text-sm text-foreground/80">
                  {works[0].title} / {works[0].category}
                </p>
                <ArrowRight className="w-5 h-5 text-foreground/80" strokeWidth={1.5} />
              </div>
            </Link>

            {/* Standing Eagle on Top Right */}

          </div>

          {/* Two column works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {works.slice(1).map((work, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  width={400}
                  height={400}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <p className="text-sm text-foreground/80">
                    {work.title} / {work.category}
                  </p>
                  <ArrowRight className="w-5 h-5 text-foreground/80" strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
