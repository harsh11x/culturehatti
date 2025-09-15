import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowLeft, Heart, Star, ShoppingCart } from 'lucide-react'

export default function KidsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-300 mb-4">
              <span className="text-green-800 font-semibold text-sm">Kids' Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Kids' <span className="text-green-700">Collection</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our adorable collection of soft toys, gifts, and accessories 
              designed especially for little ones, bringing joy and comfort to children.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white px-8 py-3">
                <OptimizedLink href="/products">
                  View All Products
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-3">
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
              Kids' <span className="text-green-700">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of kids' toys, gifts, and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Soft Toys */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🧸</div>
                    <h3 className="text-xl font-bold text-gray-900">Soft Toys</h3>
                    <p className="text-gray-600 text-sm">Cuddly & Safe</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Soft Toys</h3>
                  <p className="text-gray-600 mb-4">Adorable soft toys for children</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Kids' Jewelry */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💎</div>
                    <h3 className="text-xl font-bold text-gray-900">Kids' Jewelry</h3>
                    <p className="text-gray-600 text-sm">Safe & Beautiful</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kids' Jewelry</h3>
                  <p className="text-gray-600 mb-4">Safe and beautiful jewelry for kids</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Educational Toys */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🧩</div>
                    <h3 className="text-xl font-bold text-gray-900">Educational Toys</h3>
                    <p className="text-gray-600 text-sm">Learning & Fun</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Toys</h3>
                  <p className="text-gray-600 mb-4">Fun and educational toys for kids</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Kids' Clothes */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">👕</div>
                    <h3 className="text-xl font-bold text-gray-900">Kids' Clothes</h3>
                    <p className="text-gray-600 text-sm">Comfortable & Stylish</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kids' Clothes</h3>
                  <p className="text-gray-600 mb-4">Comfortable and stylish clothes for kids</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Kids' Accessories */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🎀</div>
                    <h3 className="text-xl font-bold text-gray-900">Kids' Accessories</h3>
                    <p className="text-gray-600 text-sm">Cute & Safe</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kids' Accessories</h3>
                  <p className="text-gray-600 mb-4">Cute and safe accessories for kids</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Kids' Books */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="text-xl font-bold text-gray-900">Kids' Books</h3>
                    <p className="text-gray-600 text-sm">Educational & Fun</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kids' Books</h3>
                  <p className="text-gray-600 mb-4">Educational and fun books for kids</p>
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
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