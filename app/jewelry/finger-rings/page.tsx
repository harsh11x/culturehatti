'use client'

import { useState, useEffect } from 'react'
import { ResponsiveProductCard } from '@/components/responsive-product-card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

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

export default function FingerRingsPage() {
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
      
      console.log('🔄 Fetching finger rings products...')
      
      // Fetch all products first
      const response = await fetch('/api/products?limit=100')
        
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
        
      const data = await response.json()
      console.log('📦 Raw API response:', data)
      
      if (data.success) {
        const allProducts = data.data || []
        console.log(`📊 Total products received: ${allProducts.length}`)
        
        // Filter to show only finger rings products
        const ringsProducts = allProducts.filter((product: Product) => {
          const isRings = product.name.toLowerCase().includes('ring') ||
                         product.name.toLowerCase().includes('finger') ||
                         product.name.toLowerCase().includes('anguthi') ||
                         product.subcategory === 'rings' ||
                         product.subcategory === 'finger-rings' ||
                         (product.subcategory === 'jewelry' && product.name.toLowerCase().includes('ring'))
          
          console.log(`🔍 Product: ${product.name}, Is Rings: ${isRings}`)
          return isRings
        })
        
        console.log(`✅ Found ${ringsProducts.length} finger rings products from ${allProducts.length} total products`)
        setProducts(ringsProducts)
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
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-red-900 font-medium">Loading Finger Rings...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-red-600 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-red-900 mb-4">Error Loading Products</h1>
            <p className="text-red-700 mb-4">{error}</p>
            <button 
              onClick={fetchProducts}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/traditional-indian-jewelry.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-red-900 mb-6">
            <span className="block">Finger Rings</span>
            <span className="block text-3xl lg:text-5xl text-amber-800">Culture Hatti</span>
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite collection of traditional Indian finger rings and anguthis, 
            featuring intricate designs and premium craftsmanship.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-900 mb-4">
            Finger Rings Collection
          </h2>
          <p className="text-lg text-amber-800">
            {products.length} beautiful finger rings to choose from
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-amber-600 text-6xl mb-4">💍</div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-2">No Finger Rings Found</h3>
            <p className="text-amber-700 mb-6">We're currently updating our finger rings collection. Please check back soon!</p>
            <button 
              onClick={fetchProducts}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
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
