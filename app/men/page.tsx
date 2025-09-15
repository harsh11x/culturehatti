import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowLeft, Heart, Star, ShoppingCart } from 'lucide-react'

export default function MenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-300 mb-4">
              <span className="text-blue-800 font-semibold text-sm">Men's Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Men's <span className="text-blue-700">Collection</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our elegant collection of traditional and contemporary jewelry and accessories 
              designed specifically for the modern gentleman.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3">
                <OptimizedLink href="/products">
                  View All Products
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-3">
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
              Men's <span className="text-blue-700">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of men's jewelry and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Men's Rings */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💍</div>
                    <h3 className="text-xl font-bold text-gray-900">Men's Rings</h3>
                    <p className="text-gray-600 text-sm">Traditional & Modern</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Men's Rings</h3>
                  <p className="text-gray-600 mb-4">Elegant rings for the modern gentleman</p>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Men's Bracelets */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">⌚</div>
                    <h3 className="text-xl font-bold text-gray-900">Men's Bracelets</h3>
                    <p className="text-gray-600 text-sm">Leather & Metal</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Men's Bracelets</h3>
                  <p className="text-gray-600 mb-4">Stylish bracelets for men</p>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Men's Necklaces */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">📿</div>
                    <h3 className="text-xl font-bold text-gray-900">Men's Necklaces</h3>
                    <p className="text-gray-600 text-sm">Chains & Pendants</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Men's Necklaces</h3>
                  <p className="text-gray-600 mb-4">Traditional and modern necklaces</p>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Men's Watches */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">⌚</div>
                    <h3 className="text-xl font-bold text-gray-900">Men's Watches</h3>
                    <p className="text-gray-600 text-sm">Traditional & Modern</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Men's Watches</h3>
                  <p className="text-gray-600 mb-4">Elegant watches for every occasion</p>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Men's Cufflinks */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔗</div>
                    <h3 className="text-xl font-bold text-gray-900">Cufflinks</h3>
                    <p className="text-gray-600 text-sm">Formal & Casual</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cufflinks</h3>
                  <p className="text-gray-600 mb-4">Elegant cufflinks for formal wear</p>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Men's Accessories */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">👔</div>
                    <h3 className="text-xl font-bold text-gray-900">Men's Accessories</h3>
                    <p className="text-gray-600 text-sm">Complete Your Look</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Men's Accessories</h3>
                  <p className="text-gray-600 mb-4">Complete your look with our accessories</p>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
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