import { ArrowRight, Heart, Star, Truck, Award, Users, ShoppingCart as CartIcon, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ResponsiveProductCard } from "@/components/responsive-product-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedProductsClient } from "@/components/featured-products-client"
import { OptimizedLink } from "@/components/performance/optimized-link"
import { ProductSlideshow } from "@/components/ProductSlideshow"
import ClientWrapper from "@/components/client-wrapper"

interface Product {
  _id: string
  name: string
  description: string
  price: number
  originalPrice: number
  category: string
  images: string[]
  colors: string[]
  sizes: string[]
  stock: number
  rating: number
  reviews: number
  isActive: boolean
  badge?: string
}

export default function HomePage() {
  return (
    <ClientWrapper>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* Header */}
        <Header />

      {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 overflow-hidden" style={{backgroundColor: '#730021'}}>
          {/* Traditional Indian Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Cpath d='M30 0c0 0-15 15-15 30s15 30 15 30 15-15 15-30S30 0 30 0zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3Cpath d='M30 5c0 0-10 10-10 25s10 25 10 25 10-10 10-25S30 5 30 5zm0 10c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Ornate Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 opacity-20">
              <div className="w-full h-full border-2 border-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 border border-yellow-300 rounded-full"></div>
              <div className="absolute inset-4 border border-yellow-200 rounded-full"></div>
            </div>
            <div className="absolute top-32 sm:top-40 right-16 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 opacity-15">
              <div className="w-full h-full border-2 border-yellow-400 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute inset-1 border border-yellow-300 rounded-full"></div>
            </div>
            <div className="absolute bottom-16 sm:bottom-20 left-1/4 w-16 sm:w-28 h-16 sm:h-28 opacity-20">
              <div className="w-full h-full border-2 border-yellow-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute inset-2 border border-yellow-300 rounded-full"></div>
            </div>
        </div>

          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1 animate-fade-in-up">
                <div className="text-center lg:text-left">
                  {/* Ornate Badge */}
                  <div className="inline-block relative mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300">
                    <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-yellow-300 shadow-lg">
                      <span className="text-yellow-900 font-bold text-sm sm:text-base tracking-wide">॥ Culture Hatti ॥</span>
                    </div>
                    <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
                </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up delay-200">
                    <span className="text-yellow-300 animate-fade-in-left delay-300 drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Authentic</span>
                    <br />
                    <span className="text-yellow-400 animate-fade-in-left delay-400 drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Handcrafted</span>
                    <br />
                    <span className="text-yellow-300 animate-fade-in-left delay-500 drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Indian</span>
                    <br />
                    <span className="text-yellow-500 animate-fade-in-left delay-600 drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Treasures</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-yellow-100 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-700 drop-shadow-2xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                    Discover our finest collection of traditional Indian jewelry, elegant bags, and beautiful accessories. 
                    Crafted by master artisans preserving centuries-old Indian heritage and craftsmanship.
                  </p>
              </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start animate-fade-in-up delay-800">
                <Button
                  asChild
                  size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-yellow-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-yellow-400"
                >
                  <OptimizedLink href="/products">
                    Shop Collection
                      <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                  </OptimizedLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                    className="border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-yellow-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <OptimizedLink href="/our-story">
                    Our Story
                  </OptimizedLink>
                </Button>
              </div>

                {/* Features with Traditional Design */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                  <div className="text-center lg:text-left bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm border border-yellow-400/30 transform hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-900">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-3 sm:mb-4 animate-spin-slow border-2 border-yellow-300">
                      <Truck className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-900" />
                  </div>
                    <div className="text-sm sm:text-base font-bold text-yellow-200" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Free Shipping</div>
                    <div className="text-xs sm:text-sm text-yellow-300" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>On orders above ₹999</div>
                  </div>

                  <div className="text-center lg:text-left bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm border border-yellow-400/30 transform hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-1000">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-3 sm:mb-4 animate-spin-slow delay-500 border-2 border-yellow-300">
                      <Users className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-900" />
                </div>
                    <div className="text-sm sm:text-base font-bold text-yellow-200" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>5000+ Customers</div>
                    <div className="text-xs sm:text-sm text-yellow-300" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Trusted Heritage</div>
                  </div>

                  <div className="text-center lg:text-left bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-sm border border-yellow-400/30 transform hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-1100 sm:col-span-1">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-700 to-yellow-800 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-3 sm:mb-4 animate-spin-slow delay-1000 border-2 border-yellow-300">
                      <Award className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-900" />
                    </div>
                    <div className="text-sm sm:text-base font-bold text-yellow-200" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Certified Quality</div>
                    <div className="text-xs sm:text-sm text-yellow-300" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Authentic Heritage</div>
                  </div>
                  </div>
                </div>

              {/* Right Content - Product Slideshow with Ornate Frame */}
              <div className="relative order-1 lg:order-2 animate-fade-in-right">
                <div className="relative transform hover:scale-105 transition-all duration-500">
                  {/* Ornate Golden Frame */}
                  <div className="absolute inset-0 border-4 border-yellow-400 rounded-2xl shadow-2xl">
                    <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-yellow-300 rounded-2xl opacity-50"></div>
                    <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-yellow-200 rounded-2xl opacity-30"></div>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-yellow-400 rounded-full opacity-60"></div>
                  
                  <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-xl p-6 sm:p-8">
                    <ProductSlideshow />
                  </div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-yellow-400/40 to-yellow-500/40 rounded-full animate-float border-2 border-yellow-300/50"></div>
                <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-yellow-500/40 to-yellow-600/40 rounded-full animate-float delay-1000 border-2 border-yellow-300/50"></div>
                <div className="absolute top-1/2 -right-3 sm:-right-4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-br from-yellow-600/40 to-yellow-700/40 rounded-full animate-float delay-500 border-2 border-yellow-300/50"></div>
            </div>
          </div>
        </div>
      </section>

        {/* Collections Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 relative overflow-hidden" style={{backgroundColor: '#730021'}}>
          {/* Traditional Indian Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Cpath d='M30 0c0 0-15 15-15 30s15 30 15 30 15-15 15-30S30 0 30 0zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3Cpath d='M30 5c0 0-10 10-10 25s10 25 10 25 10-10 10-25S30 5 30 5zm0 10c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
            </div>
          
          {/* Ornate Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full animate-float border-2 border-yellow-300/30"></div>
            <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full animate-float delay-1000 border-2 border-yellow-300/30"></div>
            <div className="absolute bottom-16 left-1/4 w-28 h-28 bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 rounded-full animate-float delay-500 border-2 border-yellow-300/30"></div>
          </div>
          
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
              {/* Ornate Badge */}
              <div className="inline-block relative mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-yellow-300 shadow-lg">
                  <span className="text-yellow-900 font-bold text-sm sm:text-base tracking-wide">॥ Our Collections ॥</span>
        </div>
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
      </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                Handpicked <span className="text-yellow-400">Heritage</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto drop-shadow-2xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                Each piece tells a story of tradition, craftsmanship, and timeless beauty
              </p>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {/* Jewelry Collection */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400/30 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-200">
                {/* Ornate Frame */}
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-xl opacity-40"></div>
                  
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 animate-bounce">💎</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Jewelry</h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">Traditional & Modern</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-amber-500/0 group-hover:from-red-500/10 group-hover:to-amber-500/10 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Exquisite Jewelry</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">From traditional gold to contemporary designs</p>
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border-2 border-red-500">
                    <OptimizedLink href="/jewelry">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Bags Collection */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400/30 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-400">
                {/* Ornate Frame */}
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-xl opacity-40"></div>
                  
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 animate-bounce delay-200">👜</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Bags</h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">Elegant & Functional</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-red-500/0 group-hover:from-amber-500/10 group-hover:to-red-500/10 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Stylish Bags</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">Perfect blend of style and functionality</p>
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border-2 border-amber-500">
                    <OptimizedLink href="/bags">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Accessories Collection */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400/30 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-600">
                {/* Ornate Frame */}
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-xl opacity-40"></div>
                  
                  <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 animate-bounce delay-400">✨</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Accessories</h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">Complete Your Look</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Beautiful Accessories</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">Add the perfect finishing touch</p>
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border-2 border-purple-500">
                    <OptimizedLink href="/accessories">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Suits & Sarees Collection */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400/30 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-800">
                {/* Ornate Frame */}
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-xl opacity-40"></div>
                  
                  <div className="aspect-square bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 animate-bounce delay-600">👗</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Suits & Sarees</h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">Traditional & Modern</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-blue-500/0 group-hover:from-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Elegant Suits & Sarees</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">Traditional sarees and modern suits for every occasion</p>
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border-2 border-pink-500">
                    <OptimizedLink href="/women">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>
            </div>
        </div>
      </section>

        {/* Categories Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 relative overflow-hidden" style={{backgroundColor: '#730021'}}>
          {/* Traditional Indian Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Cpath d='M40 0c0 0-20 20-20 40s20 40 20 40 20-20 20-40S40 0 40 0zm0 20c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z'/%3E%3Cpath d='M40 10c0 0-15 15-15 30s15 30 15 30 15-15 15-30S40 10 40 10zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Ornate Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-16 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full animate-float border-2 border-yellow-300/30"></div>
            <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full animate-float delay-1000 border-2 border-yellow-300/30"></div>
            <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 rounded-full animate-float delay-500 border-2 border-yellow-300/30"></div>
          </div>
          
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
              {/* Ornate Badge */}
              <div className="inline-block relative mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-yellow-300 shadow-lg">
                  <span className="text-yellow-900 font-bold text-sm sm:text-base tracking-wide">॥ Shop by Category ॥</span>
                </div>
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                For Every <span className="text-yellow-400">Generation</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto drop-shadow-2xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                Special collections designed for every age and gender
              </p>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {/* Men's Collection */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400/30 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-200">
                {/* Ornate Frame */}
                  <div className="relative">
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-xl opacity-40"></div>
                  
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 animate-bounce">👔</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Men's Collection</h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">Traditional Jewelry</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Men's Jewelry</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">Elegant pieces for the modern gentleman</p>
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border-2 border-blue-500">
                    <OptimizedLink href="/men">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Women's Collection */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400/30 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-400">
                {/* Ornate Frame */}
                  <div className="relative">
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-xl opacity-40"></div>
                  
                  <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 animate-bounce delay-200">👗</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Women's Collection</h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">Jewelry & Sarees</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Women's Collection</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">Beautiful pieces for every occasion</p>
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border-2 border-pink-500">
                    <OptimizedLink href="/women">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Kids' Collection */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400/30 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-600">
                {/* Ornate Frame */}
                  <div className="relative">
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-xl opacity-40"></div>
                  
                  <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 animate-bounce delay-400">🧸</div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Kids' Collection</h3>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">Soft Toys & Gifts</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Kids' Collection</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">Adorable pieces for little ones</p>
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border-2 border-green-500">
                    <OptimizedLink href="/kids">Explore Collection</OptimizedLink>
                  </Button>
          </div>
        </div>
            </div>
        </div>
      </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 relative overflow-hidden" style={{backgroundColor: '#730021'}}>
          {/* Traditional Indian Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Cpath d='M50 0c0 0-25 25-25 50s25 50 25 50 25-25 25-50S50 0 50 0zm0 25c13.8 0 25 11.2 25 25s-11.2 25-25 25-25-11.2-25-25 11.2-25 25-25z'/%3E%3Cpath d='M50 15c0 0-20 20-20 35s20 35 20 35 20-20 20-35S50 15 50 15zm0 20c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Ornate Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full animate-float border-2 border-yellow-300/30"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full animate-float delay-1000 border-2 border-yellow-300/30"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 rounded-full animate-float delay-500 border-2 border-yellow-300/30"></div>
          </div>
          
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
              {/* Ornate Badge */}
              <div className="inline-block relative mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-yellow-300 shadow-lg">
                  <span className="text-yellow-900 font-bold text-sm sm:text-base tracking-wide">॥ Why Choose Culture Hatti ॥</span>
                </div>
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                Why Choose <span className="text-yellow-400">Culture Hatti</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto drop-shadow-2xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                We are committed to preserving Indian heritage through authentic craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {/* Feature 1 */}
              <div className="text-center group animate-fade-in-up delay-200">
                <div className="relative mx-auto mb-6 sm:mb-8">
                  {/* Ornate Frame */}
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-full opacity-40"></div>
                  
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-spin-slow relative z-10">
                    <Truck className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-900" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Free Shipping</h3>
                <p className="text-yellow-100 leading-relaxed text-sm sm:text-base lg:text-lg drop-shadow-2xl" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
                  Free shipping on orders above ₹999 across India
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group animate-fade-in-up delay-400">
                <div className="relative mx-auto mb-6 sm:mb-8">
                  {/* Ornate Frame */}
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-full opacity-40"></div>
                  
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-spin-slow delay-500 relative z-10">
                    <Award className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-900" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Premium Quality</h3>
                <p className="text-yellow-100 leading-relaxed text-sm sm:text-base lg:text-lg drop-shadow-2xl" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
                  Our products meet the highest standards of materials and craftsmanship
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group animate-fade-in-up delay-600">
                <div className="relative mx-auto mb-6 sm:mb-8">
                  {/* Ornate Frame */}
                  <div className="absolute inset-0 border-2 border-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-full opacity-40"></div>
                  
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-spin-slow delay-1000 relative z-10">
                    <Users className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-900" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Heritage Preservation</h3>
                <p className="text-yellow-100 leading-relaxed text-sm sm:text-base lg:text-lg drop-shadow-2xl" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
                  We work to preserve centuries-old Indian heritage and culture
                </p>
              </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <Footer />
      </div>
    </ClientWrapper>
  )
}