'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"

// Lazy load components
const MensStall = lazy(() => import("@/components/mens-stall").then(module => ({ default: module.MensStall })))

export default function KurtasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">कुर्ता संग्रह | Kurta Collection</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Explore our premium collection of traditional kurtas and sherwanis, featuring authentic Lucknowi craftsmanship and royal heritage designs for the modern Indian gentleman.
            </p>
          </div>
          
          <Suspense fallback={
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
            </div>
          }>
            <MensStall />
          </Suspense>
        </div>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
        <BazaarFooter />
      </Suspense>
    </div>
  )
}
