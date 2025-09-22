"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Truck } from "lucide-react"

export function HeroSection() {
  return (
        <section className="relative bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 py-20 lg:py-32 pattern-mandala overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-red-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-amber-400/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-up">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium animate-pulse-glow">
                      <Star className="h-4 w-4 animate-rotate-3d" />
                      Premium Indian Heritage Collection
                    </div>
                    
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                      <span className="gradient-text-red">Discover Authentic</span>
                      <span className="gradient-text block">Indian Culture</span>
                    </h1>
                    
                    <p className="text-xl text-red-700 leading-relaxed max-w-lg animate-fade-in-scale">
                      Experience the rich heritage of India through our curated collection of traditional 
                      sarees, elegant kurtas, exquisite jewelry, and handcrafted treasures from master artisans.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 text-lg font-semibold premium-hover animate-shimmer">
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-8 py-4 text-lg font-semibold premium-hover">
                    Watch Story
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-red-700">Authentic Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-red-700">Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm text-red-700">4.9/5 Rating</span>
                  </div>
                </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-scale">
                <div className="relative z-10 card-3d">
                  <img
                    src="/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg"
                    alt="Beautiful Indian woman in traditional saree"
                    className="w-full h-[600px] object-cover rounded-2xl shadow-2xl premium-hover"
                  />
                </div>
            
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 z-20 border-2 border-yellow-400 glass-effect animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Premium Quality</p>
                      <p className="text-sm text-red-600">Handpicked items</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20 border-2 border-yellow-400 glass-effect animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Authentic</p>
                      <p className="text-sm text-red-600">Certified origin</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  )
}
