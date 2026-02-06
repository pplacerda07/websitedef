import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-1 bg-black/20 backdrop-blur-md border-b border-white/5">
      <nav className="flex items-center gap-8">
        <Link href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
          About
        </Link>
        <Link href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
          Services
        </Link>
      </nav>

      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo-fiora.png"
          alt="FIORA"
          width={140}
          height={40}
          className="w-auto object-contain h-20"
          priority
        />
      </Link>

      <nav className="flex items-center gap-8">
        <Link href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
          Cases
        </Link>
        <Link href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  )
}
