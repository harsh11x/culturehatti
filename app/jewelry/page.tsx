import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowLeft, Heart, Star, ShoppingCart } from 'lucide-react'

export default function JewelryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full border border-red-300 mb-4">
              <span className="text-red-800 font-semibold text-sm">Jewelry Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Exquisite <span className="text-red-700">Indian Jewelry</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our finest collection of traditional and contemporary Indian jewelry, 
              crafted by master artisans preserving centuries-old techniques.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-red-700 hover:bg-red-800 text-white px-8 py-3">
                <OptimizedLink href="/products">
                  View All Products
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" className="border-red-700 text-red-700 hover:bg-red-50 px-8 py-3">
                <OptimizedLink href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </OptimizedLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Jewelry <span className="text-red-700">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of traditional Indian jewelry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Necklaces */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">📿</div>
                    <h3 className="text-xl font-bold text-gray-900">Necklaces</h3>
                    <p className="text-gray-600 text-sm">Traditional & Modern</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Necklaces</h3>
                  <p className="text-gray-600 mb-4">Elegant necklaces for every occasion</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Earrings */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💎</div>
                    <h3 className="text-xl font-bold text-gray-900">Earrings</h3>
                    <p className="text-gray-600 text-sm">Studs & Danglers</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Earrings</h3>
                  <p className="text-gray-600 mb-4">Beautiful earrings to complete your look</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bangles */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔔</div>
                    <h3 className="text-xl font-bold text-gray-900">Bangles</h3>
                    <p className="text-gray-600 text-sm">Traditional & Modern</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bangles</h3>
                  <p className="text-gray-600 mb-4">Classic bangles for every wrist</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Rings */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💍</div>
                    <h3 className="text-xl font-bold text-gray-900">Rings</h3>
                    <p className="text-gray-600 text-sm">Finger Rings</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rings</h3>
                  <p className="text-gray-600 mb-4">Elegant rings for every finger</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bracelets */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">⌚</div>
                    <h3 className="text-xl font-bold text-gray-900">Bracelets</h3>
                    <p className="text-gray-600 text-sm">Traditional & Modern</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bracelets</h3>
                  <p className="text-gray-600 mb-4">Stylish bracelets for every occasion</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Anklets */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔗</div>
                    <h3 className="text-xl font-bold text-gray-900">Anklets</h3>
                    <p className="text-gray-600 text-sm">Traditional Anklets</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Anklets</h3>
                  <p className="text-gray-600 mb-4">Beautiful anklets for traditional wear</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}