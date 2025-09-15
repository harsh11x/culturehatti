import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowLeft, Heart, Star, ShoppingCart } from 'lucide-react'

export default function WomenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-300 mb-4">
              <span className="text-pink-800 font-semibold text-sm">Women's Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Women's <span className="text-pink-700">Collection</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our stunning collection of traditional and contemporary jewelry, sarees, 
              and accessories designed to celebrate the beauty and elegance of Indian women.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-pink-700 hover:bg-pink-800 text-white px-8 py-3">
                <OptimizedLink href="/products">
                  View All Products
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" className="border-pink-700 text-pink-700 hover:bg-pink-50 px-8 py-3">
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
              Women's <span className="text-pink-700">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of women's jewelry, sarees, and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Sarees */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">👗</div>
                    <h3 className="text-xl font-bold text-gray-900">Sarees</h3>
                    <p className="text-gray-600 text-sm">Traditional & Designer</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sarees</h3>
                  <p className="text-gray-600 mb-4">Beautiful traditional and designer sarees</p>
                  <Button className="w-full bg-pink-700 hover:bg-pink-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Women's Jewelry */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💎</div>
                    <h3 className="text-xl font-bold text-gray-900">Women's Jewelry</h3>
                    <p className="text-gray-600 text-sm">Necklaces, Earrings & More</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Women's Jewelry</h3>
                  <p className="text-gray-600 mb-4">Exquisite jewelry for every occasion</p>
                  <Button className="w-full bg-pink-700 hover:bg-pink-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Lehengas */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">👘</div>
                    <h3 className="text-xl font-bold text-gray-900">Lehengas</h3>
                    <p className="text-gray-600 text-sm">Bridal & Party</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lehengas</h3>
                  <p className="text-gray-600 mb-4">Stunning lehengas for special occasions</p>
                  <Button className="w-full bg-pink-700 hover:bg-pink-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Suits */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">👚</div>
                    <h3 className="text-xl font-bold text-gray-900">Suits</h3>
                    <p className="text-gray-600 text-sm">Kurta Sets & More</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Suits</h3>
                  <p className="text-gray-600 mb-4">Elegant kurta sets and suits</p>
                  <Button className="w-full bg-pink-700 hover:bg-pink-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Women's Bags */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">👜</div>
                    <h3 className="text-xl font-bold text-gray-900">Women's Bags</h3>
                    <p className="text-gray-600 text-sm">Handbags & Clutches</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Women's Bags</h3>
                  <p className="text-gray-600 mb-4">Stylish bags for every occasion</p>
                  <Button className="w-full bg-pink-700 hover:bg-pink-800 text-white">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Women's Accessories */}
            <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">✨</div>
                    <h3 className="text-xl font-bold text-gray-900">Women's Accessories</h3>
                    <p className="text-gray-600 text-sm">Complete Your Look</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Women's Accessories</h3>
                  <p className="text-gray-600 mb-4">Beautiful accessories to complete your look</p>
                  <Button className="w-full bg-pink-700 hover:bg-pink-800 text-white">
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