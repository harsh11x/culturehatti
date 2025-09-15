'use client'

import { useState, useEffect } from 'react'
import { ResponsiveProductCard } from '@/components/responsive-product-card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { JewelryNavigation } from '@/components/jewelry-navigation'
import { Badge } from '@/components/ui/badge'

interface Product {
  _id?: string
  id?: string
  name: string
  price: number
  originalPrice: number
  images: string[]
  rating: number
  reviews: number
  colors: string[]
  sizes: string[]
  stock: number
  badge?: string
  category?: string
  subcategory?: string
}

export default function MensJewelryPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      console.log('🔄 Fetching men\'s jewelry products...')
      
      const response = await fetch('/api/products?limit=100')
        
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
        
      const data = await response.json()
      console.log('📦 Raw API response:', data)
      
      if (data.success) {
        const allProducts = data.data || []
        console.log(`📊 Total products received: ${allProducts.length}`)
        
        // Filter to show only men's jewelry products
        const mensJewelryProducts = allProducts.filter((product: Product) => {
          const isMensJewelry = product.category === 'men' && (
            product.subcategory === 'jewelry' ||
            product.name.toLowerCase().includes('men') ||
            product.name.toLowerCase().includes('male') ||
            product.name.toLowerCase().includes('kada') ||
            product.name.toLowerCase().includes('chain') ||
            product.name.toLowerCase().includes('ring') ||
            product.name.toLowerCase().includes('bracelet')
          )
          
          console.log(`🔍 Product: ${product.name}, Category: ${product.category}, Subcategory: ${product.subcategory}, Is Men's Jewelry: ${isMensJewelry}`)
          return isMensJewelry
        })
        
        console.log(`✅ Found ${mensJewelryProducts.length} men's jewelry products from ${allProducts.length} total products`)
        setProducts(mensJewelryProducts)
      } else {
        throw new Error(data.message || 'Failed to fetch products')
      }
    } catch (err) {
      console.error('❌ Error fetching products:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch products')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-indian-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-indian-maroon font-medium">Loading Men's Jewelry...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-indian-crimson text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-indian-maroon mb-4">Error Loading Products</h1>
            <p className="text-indian-crimson mb-4">{error}</p>
            <button 
              onClick={fetchProducts}
              className="bg-indian-crimson text-white px-6 py-2 rounded-lg hover:bg-indian-maroon transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
      <Header />
      <JewelryNavigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indian-gold/20 via-indian-saffron/20 to-indian-crimson/20 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-indian-gold/30 to-indian-saffron/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-indian-gold/20 to-indian-saffron/20 text-indian-maroon hover:bg-indian-gold/30 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg font-semibold border border-indian-gold">
              👔 Men's Collection
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-indian-maroon mb-6">
            <span className="block">Men's Jewelry</span>
            <span className="block text-3xl lg:text-5xl text-indian-gold">Kadas & Chains</span>
          </h1>
          <p className="text-xl text-indian-crimson max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite collection of traditional Indian men's jewelry, including kadas, chains, rings, 
            and bracelets crafted with premium materials and authentic designs.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indian-maroon mb-4">
            Men's Jewelry Collection
          </h2>
          <p className="text-lg text-indian-crimson">
            {products.length} beautiful men's jewelry pieces to choose from
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-indian-gold text-6xl mb-4">👔</div>
            <h3 className="text-2xl font-semibold text-indian-maroon mb-2">No Men's Jewelry Found</h3>
            <p className="text-indian-crimson mb-6">We're currently updating our men's jewelry collection. Please check back soon!</p>
            <button 
              onClick={fetchProducts}
              className="bg-indian-crimson text-white px-6 py-3 rounded-lg hover:bg-indian-maroon transition-colors"
            >
              Refresh Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ResponsiveProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
