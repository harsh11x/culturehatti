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
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-200/30 to-amber-200/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-red-100/20 to-amber-100/20 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 animate-fade-in-up">
                <div className="text-center lg:text-left">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-300 mb-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <span className="text-amber-800 font-semibold text-sm">Culture Hatti</span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up delay-200">
                    <span className="text-red-800 animate-fade-in-left delay-300">Authentic</span>
                    <br />
                    <span className="text-amber-700 animate-fade-in-left delay-400">Handcrafted</span>
                    <br />
                    <span className="text-red-800 animate-fade-in-left delay-500">Indian</span>
                    <br />
                    <span className="text-amber-600 animate-fade-in-left delay-600">Treasures</span>
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-700">
                    Discover our finest collection of traditional Indian jewelry, elegant bags, and beautiful accessories. 
                    Crafted by master artisans preserving centuries-old Indian heritage and craftsmanship.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-8 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
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
                    className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg font-semibold transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <OptimizedLink href="/our-story">
                      Our Story
                    </OptimizedLink>
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                  <div className="text-center lg:text-left bg-white/80 p-4 rounded-lg shadow-sm border border-amber-200 transform hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-900">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-2 animate-spin-slow">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-800">Free Shipping</div>
                    <div className="text-xs text-gray-600">On orders above ₹999</div>
                  </div>

                  <div className="text-center lg:text-left bg-white/80 p-4 rounded-lg shadow-sm border border-amber-200 transform hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-1000">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-2 animate-spin-slow delay-500">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-800">5000+ Customers</div>
                    <div className="text-xs text-gray-600">Trusted Heritage</div>
                  </div>

                  <div className="text-center lg:text-left bg-white/80 p-4 rounded-lg shadow-sm border border-amber-200 transform hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-1100">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-2 animate-spin-slow delay-1000">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-800">Certified Quality</div>
                    <div className="text-xs text-gray-600">Authentic Heritage</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Product Slideshow */}
              <div className="relative order-1 lg:order-2 animate-fade-in-right">
                <div className="transform hover:scale-105 transition-all duration-500">
                  <ProductSlideshow />
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-red-200/40 to-amber-200/40 rounded-full animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full animate-float delay-1000"></div>
                <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-red-300/40 to-amber-300/40 rounded-full animate-float delay-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full border border-red-300 mb-4 transform hover:scale-105 transition-all duration-300">
                <span className="text-red-800 font-semibold text-sm">Our Collections</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Handpicked <span className="text-red-700">Heritage</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each piece tells a story of tradition, craftsmanship, and timeless beauty
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {/* Jewelry Collection */}
              <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-200">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="text-5xl mb-4 animate-bounce">💎</div>
                    <h3 className="text-xl font-bold text-gray-900">Jewelry</h3>
                    <p className="text-gray-600 text-sm mt-2">Traditional & Modern</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-amber-500/0 group-hover:from-red-500/10 group-hover:to-amber-500/10 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Exquisite Jewelry</h3>
                  <p className="text-gray-600 mb-4">From traditional gold to contemporary designs</p>
                  <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white transform hover:scale-105 transition-all duration-300">
                    <OptimizedLink href="/jewelry">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Bags Collection */}
              <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-400">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="text-5xl mb-4 animate-bounce delay-200">👜</div>
                    <h3 className="text-xl font-bold text-gray-900">Bags</h3>
                    <p className="text-gray-600 text-sm mt-2">Elegant & Functional</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-red-500/0 group-hover:from-amber-500/10 group-hover:to-red-500/10 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stylish Bags</h3>
                  <p className="text-gray-600 mb-4">Perfect blend of style and functionality</p>
                  <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white transform hover:scale-105 transition-all duration-300">
                    <OptimizedLink href="/bags">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Accessories Collection */}
              <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-600">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="text-5xl mb-4 animate-bounce delay-400">✨</div>
                    <h3 className="text-xl font-bold text-gray-900">Accessories</h3>
                    <p className="text-gray-600 text-sm mt-2">Complete Your Look</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-amber-500/0 group-hover:from-red-500/10 group-hover:to-amber-500/10 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Beautiful Accessories</h3>
                  <p className="text-gray-600 mb-4">Add the perfect finishing touch</p>
                  <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white transform hover:scale-105 transition-all duration-300">
                    <OptimizedLink href="/accessories">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Suits & Sarees Collection */}
              <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-800">
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="text-5xl mb-4 animate-bounce delay-600">👗</div>
                    <h3 className="text-xl font-bold text-gray-900">Suits & Sarees</h3>
                    <p className="text-gray-600 text-sm mt-2">Traditional & Modern</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-blue-500/0 group-hover:from-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Elegant Suits & Sarees</h3>
                  <p className="text-gray-600 mb-4">Traditional sarees and modern suits for every occasion</p>
                  <Button asChild className="w-full bg-gradient-to-r from-pink-700 to-blue-700 hover:from-pink-800 hover:to-blue-800 text-white transform hover:scale-105 transition-all duration-300">
                    <OptimizedLink href="/women">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full animate-float delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full animate-float delay-500"></div>
          </div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-red-100 rounded-full border border-amber-300 mb-4 transform hover:scale-105 transition-all duration-300">
                <span className="text-amber-800 font-semibold text-sm">Shop by Category</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                For Every <span className="text-red-700">Generation</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Special collections designed for every age and gender
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Men's Collection */}
              <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-200">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="text-5xl mb-4 animate-bounce">👔</div>
                    <h3 className="text-xl font-bold text-gray-900">Men's Collection</h3>
                    <p className="text-gray-600 text-sm mt-2">Traditional Jewelry</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Men's Jewelry</h3>
                  <p className="text-gray-600 mb-4">Elegant pieces for the modern gentleman</p>
                  <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white transform hover:scale-105 transition-all duration-300">
                    <OptimizedLink href="/men">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Women's Collection */}
              <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-400">
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="text-5xl mb-4 animate-bounce delay-200">👗</div>
                    <h3 className="text-xl font-bold text-gray-900">Women's Collection</h3>
                    <p className="text-gray-600 text-sm mt-2">Jewelry & Sarees</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Women's Collection</h3>
                  <p className="text-gray-600 mb-4">Beautiful pieces for every occasion</p>
                  <Button asChild className="w-full bg-pink-700 hover:bg-pink-800 text-white transform hover:scale-105 transition-all duration-300">
                    <OptimizedLink href="/women">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>

              {/* Kids' Collection */}
              <div className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-600">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="text-5xl mb-4 animate-bounce delay-400">🧸</div>
                    <h3 className="text-xl font-bold text-gray-900">Kids' Collection</h3>
                    <p className="text-gray-600 text-sm mt-2">Soft Toys & Gifts</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kids' Collection</h3>
                  <p className="text-gray-600 mb-4">Adorable pieces for little ones</p>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800 text-white transform hover:scale-105 transition-all duration-300">
                    <OptimizedLink href="/kids">Explore Collection</OptimizedLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-red-200/10 to-amber-200/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/10 to-orange-200/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-red-300/10 to-amber-300/10 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full border border-red-300 mb-4 transform hover:scale-105 transition-all duration-300">
                <span className="text-red-800 font-semibold text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-red-700">Culture Hatti</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are committed to preserving Indian heritage through authentic craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <div className="text-center group animate-fade-in-up delay-200">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6 animate-spin-slow">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Free Shipping</h3>
                <p className="text-gray-600 leading-relaxed">
                  Free shipping on orders above ₹999 across India
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group animate-fade-in-up delay-400">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6 animate-spin-slow delay-500">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our products meet the highest standards of materials and craftsmanship
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group animate-fade-in-up delay-600">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6 animate-spin-slow delay-1000">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Heritage Preservation</h3>
                <p className="text-gray-600 leading-relaxed">
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
