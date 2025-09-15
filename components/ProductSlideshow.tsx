'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react'

interface Product {
  _id?: string
  id?: string
  name: string
  price: number
  originalPrice?: number
  image?: string
  category: string
  subcategory?: string
  colors?: string[]
  sizes?: string[]
  stock?: number
  rating?: number
  reviews?: number
  badge?: string
}

export function ProductSlideshow() {
  const [products, setProducts] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (response.ok) {
          const data = await response.json()
          setProducts(data.slice(0, 6)) // Show only first 6 products
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    )
  }

  if (loading) {
    return (
      <div className="py-16 lg:py-24 bg-gradient-to-br from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="default" className="bg-indian-gold/20 text-indian-maroon hover:bg-indian-gold/30 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg font-semibold border border-indian-gold mb-4">
              Featured Products
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-indian-maroon mb-4">
              Our Best Sellers
            </h2>
          </div>
          <div className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="py-16 lg:py-24 bg-gradient-to-br from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="default" className="bg-indian-gold/20 text-indian-maroon hover:bg-indian-gold/30 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg font-semibold border border-indian-gold mb-4">
              Featured Products
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-indian-maroon mb-4">
              Our Best Sellers
            </h2>
            <p className="text-lg text-indian-crimson max-w-2xl mx-auto">
              Discover the most loved products from our collection
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Empty State Image */}
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-indian-gold/10 to-indian-saffron/10">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-6">🏪</div>
                        <p className="text-indian-maroon font-semibold text-xl">Culture Hatti</p>
                        <p className="text-indian-crimson text-sm mt-2">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty State Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-indian-maroon mb-2">
                      Products Coming Soon
                    </h3>
                    <p className="text-indian-crimson text-lg mb-4">
                      We're curating amazing products for you
                    </p>
                    <p className="text-gray-600 mb-6">
                      Our team is working hard to bring you the finest collection of authentic Indian crafts and jewelry. 
                      Check back soon to discover our handpicked treasures!
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-indian-gold fill-current" />
                      <span className="text-sm text-gray-600">Quality Assured</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-5 w-5 text-indian-crimson fill-current" />
                      <span className="text-sm text-gray-600">Handcrafted</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-indian-crimson via-indian-saffron to-indian-gold hover:from-indian-maroon hover:via-indian-deepSaffron hover:to-indian-deepGold text-white px-8 py-3 text-lg font-semibold shadow-lg"
                    >
                      <OptimizedLink href="/products">
                        Browse All Products
                      </OptimizedLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentProduct = products[currentIndex]

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="default" className="bg-indian-gold/20 text-indian-maroon hover:bg-indian-gold/30 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg font-semibold border border-indian-gold mb-4">
            Featured Products
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-indian-maroon mb-4">
            Our Best Sellers
          </h2>
          <p className="text-lg text-indian-crimson max-w-2xl mx-auto">
            Discover the most loved products from our collection
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  {currentProduct.image ? (
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indian-gold/20 to-indian-saffron/20">
                      <div className="text-center">
                        <div className="text-6xl mb-4">✨</div>
                        <p className="text-indian-maroon font-semibold">Culture Hatti</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-indian-maroon mb-2">
                    {currentProduct.name}
                  </h3>
                  <p className="text-indian-crimson text-lg mb-4">
                    {currentProduct.category}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-indian-gold">
                    ₹{currentProduct.price.toLocaleString()}
                  </span>
                  {currentProduct.originalPrice && currentProduct.originalPrice > currentProduct.price && (
                    <span className="text-xl text-gray-500 line-through">
                      ₹{currentProduct.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {currentProduct.rating && (
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(currentProduct.rating || 0)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {currentProduct.rating} ({currentProduct.reviews || 0} reviews)
                    </span>
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  <OptimizedLink href={`/product/${currentProduct._id || currentProduct.id}`}>
                    <Button className="bg-gradient-to-r from-indian-gold to-indian-saffron hover:from-indian-saffron hover:to-indian-crimson text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      View Details
                    </Button>
                  </OptimizedLink>
                  
                  <Button variant="outline" size="icon" className="border-indian-gold text-indian-gold hover:bg-indian-gold hover:text-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex
                          ? 'bg-indian-gold'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
