import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowLeft, Heart, Star, ShoppingCart, Filter, Search } from 'lucide-react'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full border border-red-300 mb-4">
              <span className="text-red-800 font-semibold text-sm">All Products</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-700">Collection</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our complete collection of authentic Indian jewelry, bags, and accessories. 
              Each piece is carefully selected to represent the finest in Indian craftsmanship.
            </p>
            <div className="flex justify-center gap-4">
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

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              Showing all products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              All <span className="text-red-700">Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our complete collection of authentic Indian products
            </p>
          </div>

          {/* Empty State */}
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-100 to-amber-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Available</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We're currently updating our product catalog. New products will be added soon through our admin panel.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-red-700 hover:bg-red-800 text-white px-8 py-3">
                <OptimizedLink href="/jewelry">
                  Browse Jewelry
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" className="border-red-700 text-red-700 hover:bg-red-50 px-8 py-3">
                <OptimizedLink href="/bags">
                  Browse Bags
                </OptimizedLink>
              </Button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Quick <span className="text-red-700">Categories</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💎</div>
                      <h3 className="text-lg font-bold text-gray-900">Jewelry</h3>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white text-sm">
                      <OptimizedLink href="/jewelry">View Collection</OptimizedLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">👜</div>
                      <h3 className="text-lg font-bold text-gray-900">Bags</h3>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white text-sm">
                      <OptimizedLink href="/bags">View Collection</OptimizedLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">✨</div>
                      <h3 className="text-lg font-bold text-gray-900">Accessories</h3>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white text-sm">
                      <OptimizedLink href="/accessories">View Collection</OptimizedLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-red-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">👔</div>
                      <h3 className="text-lg font-bold text-gray-900">Men's</h3>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white text-sm">
                      <OptimizedLink href="/men">View Collection</OptimizedLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}