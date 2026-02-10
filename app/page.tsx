"use client"

import { useState } from "react"
import { IntroWrapper } from "@/components/intro-wrapper"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WorksSection } from "@/components/works-section"
import { ReviewSection } from "@/components/review-section"
import { TimelineSection } from "@/components/timeline-section"
import { CTASection } from "@/components/cta-section"
import { ContactModal } from "@/components/contact-modal"

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <IntroWrapper>
      <main className="min-h-screen bg-background">
        <Header onContactClick={() => setIsContactOpen(true)} />
        <HeroSection />
        <FeaturesSection />
        <WorksSection />
        <TimelineSection />
        <ReviewSection />
        <CTASection onContactClick={() => setIsContactOpen(true)} />
      </main>
      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
    </IntroWrapper>
  )
}
