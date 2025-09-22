"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Crown, Gem } from "lucide-react"

export function HaveliGate() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-red-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-mandala opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200 p-12">
          {/* Simplified gate design */}
          <div className="w-full max-w-4xl h-64 border-4 border-amber-300 rounded-t-full border-b-0 mx-auto relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 -mt-20">
        <div className="mb-12">
          <div className="mb-8 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
              <Crown className="h-4 w-4 text-amber-600" />
              <span className="text-amber-800 font-semibold text-sm">AUTHENTIC • TRADITIONAL</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 font-serif">
              कल्चर हाट्टी
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6 font-serif">CULTURE HATTI</h2>
            <p className="text-lg text-amber-800 font-medium">Traditional Indian Bazaar Experience</p>
          </div>

          <p className="text-lg text-amber-900 mb-10 leading-relaxed max-w-3xl mx-auto bg-white/90 p-6 rounded-xl shadow-md border border-amber-100">
            {"Experience the magic of India's traditional bazaars from the comfort of your home. "}
            {"Discover authentic handwoven sarees, elegant kurtas, exquisite jewelry, and unique handicrafts "}
            {"crafted by master artisans across India."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Enter Bazaar
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-amber-600 text-amber-800 hover:bg-amber-50 hover:text-amber-900 px-8 py-4 text-lg font-semibold rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Crown className="mr-2 h-5 w-5" />
            View Collections
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-amber-400 to-orange-500"></div>
    </section>
  )
}
