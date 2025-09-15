'use client'

import { useState, useEffect } from 'react'
import { ResponsiveProductCard } from '@/components/responsive-product-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowRight, Sparkles } from 'lucide-react'

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

export function FeaturedProductsClient() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (response.ok) {
          const data = await response.json()
          setProducts(data.slice(0, 8)) // Show only first 8 products
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="default" className="bg-indian-gold/20 text-indian-maroon hover:bg-indian-gold/30 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg font-semibold border border-indian-gold mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Featured Collection
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-indian-maroon mb-4">
              Handpicked Treasures
            </h2>
            <p className="text-lg text-indian-crimson max-w-2xl mx-auto">
              Discover our curated selection of authentic Indian crafts and jewelry
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-64 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="default" className="bg-indian-gold/20 text-indian-maroon hover:bg-indian-gold/30 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg font-semibold border border-indian-gold mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Featured Collection
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-indian-maroon mb-4">
            Handpicked Treasures
          </h2>
          <p className="text-lg text-indian-crimson max-w-2xl mx-auto">
            Discover our curated selection of authentic Indian crafts and jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ResponsiveProductCard 
              key={product._id || product.id} 
              product={{
                ...product,
                images: product.image ? [product.image] : [],
                originalPrice: product.originalPrice || product.price,
                rating: product.rating || 0,
                reviews: product.reviews || 0,
                colors: product.colors || ['Default'],
                sizes: product.sizes || ['One Size'],
                stock: product.stock || 10,
                category: product.category || 'General'
              }} 
            />
          ))}
        </div>

        <div className="text-center">
          <OptimizedLink href="/jewelry">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indian-gold to-indian-saffron hover:from-indian-saffron hover:to-indian-crimson text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </OptimizedLink>
        </div>
      </div>
    </div>
  )
}
