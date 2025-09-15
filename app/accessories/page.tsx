import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowLeft, Heart, Star, ShoppingCart } from 'lucide-react'

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full border border-red-300 mb-4">
              <span className="text-red-800 font-semibold text-sm">Accessories Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Beautiful <span className="text-red-700">Accessories</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Complete your look with our stunning collection of traditional and modern accessories, 
              designed to add the perfect finishing touch to your style.
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
              Accessory <span className="text-red-700">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of traditional and modern accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Hair Accessories */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🌸</div>
                    <h3 className="text-xl font-bold text-gray-900">Hair Accessories</h3>
                    <p className="text-gray-600 text-sm">Clips & Pins</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hair Accessories</h3>
                  <p className="text-gray-600 mb-4">Beautiful hair clips and pins</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Brooches */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🦋</div>
                    <h3 className="text-xl font-bold text-gray-900">Brooches</h3>
                    <p className="text-gray-600 text-sm">Elegant & Traditional</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Brooches</h3>
                  <p className="text-gray-600 mb-4">Traditional brooches for sarees and suits</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Belts */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔗</div>
                    <h3 className="text-xl font-bold text-gray-900">Belts</h3>
                    <p className="text-gray-600 text-sm">Traditional & Modern</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Belts</h3>
                  <p className="text-gray-600 mb-4">Stylish belts for every outfit</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Scarves */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🧣</div>
                    <h3 className="text-xl font-bold text-gray-900">Scarves</h3>
                    <p className="text-gray-600 text-sm">Silk & Cotton</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scarves</h3>
                  <p className="text-gray-600 mb-4">Beautiful scarves and stoles</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Handkerchiefs */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🧻</div>
                    <h3 className="text-xl font-bold text-gray-900">Handkerchiefs</h3>
                    <p className="text-gray-600 text-sm">Embroidered & Plain</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Handkerchiefs</h3>
                  <p className="text-gray-600 mb-4">Traditional embroidered handkerchiefs</p>
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Keychains */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔑</div>
                    <h3 className="text-xl font-bold text-gray-900">Keychains</h3>
                    <p className="text-gray-600 text-sm">Traditional & Modern</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Keychains</h3>
                  <p className="text-gray-600 mb-4">Beautiful keychains and charms</p>
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
