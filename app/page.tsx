import { IntroWrapper } from "@/components/intro-wrapper"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WorksSection } from "@/components/works-section"

export default function Home() {
  return (
    <IntroWrapper>
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <WorksSection />
      </main>
    </IntroWrapper>
  )
}
