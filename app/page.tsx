import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductShowcase } from "@/components/product-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"

// Lazy load components
const BazaarFooter = lazy(() => import("@/components/bazaar-footer").then(module => ({ default: module.BazaarFooter })))

export default function HomePage() {
  return (
        <div className="min-h-screen heritage-texture bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <BazaarHeader />
      <main>
        <HeroSection />
        <ProductShowcase />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      
      <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
        <BazaarFooter />
      </Suspense>
    </div>
  )
}
