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
    title: "Gooey Crunch",
    category: "Ecommerce",
    image: "/placeholder.svg?height=400&width=400",
    size: "small",
    link: "#",
  },
  {
    title: "Kaizen Talent",
    category: "Marketing Agency",
    image: "/placeholder.svg?height=400&width=400",
    size: "small",
    link: "#",
  },
]

export function WorksSection() {
  return (
    <section className="px-6 py-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[var(--font-display)] text-5xl md:text-6xl tracking-tight text-center mb-16 italic">
          OUR WORKS
        </h2>

        <div className="space-y-4">
          {/* Large featured work */}
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
