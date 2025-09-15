'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useWishlist } from '@/components/providers/WishlistProvider'
import { useCart } from '@/components/providers/CartProvider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { 
  Heart, 
  ArrowLeft,
  Package,
  ShoppingCart,
  Trash2,
  Star
} from 'lucide-react'
import { toast } from 'sonner'

export default function WishlistPage() {
  const { items, removeItem, clearWishlist, totalItems } = useWishlist()
  const { addItem } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      size: item.sizes?.[0] || 'One Size',
      color: item.colors?.[0] || 'Default'
    })
    toast.success('Added to cart')
  }

  const handleRemoveFromWishlist = (id: string) => {
    removeItem(id)
  }

  const handleClearWishlist = () => {
    clearWishlist()
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-indian-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-indian-maroon font-medium">Loading Wishlist...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indian-gold/20 via-indian-saffron/20 to-indian-crimson/20 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-indian-gold/30 to-indian-saffron/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-6">
                <Badge className="bg-gradient-to-r from-indian-gold/20 to-indian-saffron/20 text-indian-maroon hover:bg-indian-gold/30 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg font-semibold border border-indian-gold">
                  ❤️ Your Wishlist
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-indian-maroon mb-6">
                <span className="block">My Wishlist</span>
                <span className="block text-3xl lg:text-5xl text-indian-gold">Saved Items</span>
              </h1>
              <p className="text-xl text-indian-crimson max-w-3xl leading-relaxed">
                Your favorite Culture Hatti items are saved here. Add them to cart when you're ready to purchase.
              </p>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-indian-maroon hover:text-indian-crimson hover:bg-indian-gold/20">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-indian-gold via-indian-saffron to-indian-crimson"></div>
      </div>

      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-indian-gold text-6xl mb-4">❤️</div>
            <h3 className="text-2xl font-semibold text-indian-maroon mb-2">Your Wishlist is Empty</h3>
            <p className="text-indian-crimson mb-6">Start adding items you love to your wishlist!</p>
            <Link href="/products">
              <Button className="bg-indian-crimson text-white px-6 py-3 rounded-lg hover:bg-indian-maroon transition-colors">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Wishlist Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-indian-maroon mb-2">
                  Your Wishlist ({totalItems} items)
                </h2>
                <p className="text-indian-crimson">
                  Items you've saved for later
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleClearWishlist}
                className="border-indian-crimson text-indian-crimson hover:bg-indian-crimson hover:text-white"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Wishlist
              </Button>
            </div>

            {/* Wishlist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <Card key={item.id} className="border border-indian-gold/30 hover:border-indian-gold transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-4">
                    <div className="relative">
                      {/* Item Image */}
                      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-indian-gold/30 to-indian-saffron/30 flex items-center justify-center">
                            <div className="text-center text-indian-maroon">
                              <div className="text-4xl mb-2">💎</div>
                              <div className="text-sm font-bold">No Image</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Remove from Wishlist Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/90 hover:bg-red-100 text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveFromWishlist(item.id)}
                      >
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>

                      {/* Item Details */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-indian-maroon text-sm line-clamp-2">
                          {item.name}
                        </h3>
                        
                        {item.badge && (
                          <Badge className="bg-indian-gold/20 text-indian-maroon text-xs">
                            {item.badge}
                          </Badge>
                        )}

                        <div className="flex items-center space-x-2">
                          {item.rating && (
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 fill-indian-gold text-indian-gold" />
                              <span className="text-xs text-indian-crimson">{item.rating}</span>
                            </div>
                          )}
                          {item.reviews && (
                            <span className="text-xs text-indian-crimson">({item.reviews})</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-indian-maroon">₹{item.price.toLocaleString()}</span>
                            {item.originalPrice && item.originalPrice > item.price && (
                              <span className="text-sm text-gray-500 line-through">
                                ₹{item.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <Button
                          onClick={() => handleAddToCart(item)}
                          className="w-full bg-indian-crimson hover:bg-indian-maroon text-white text-sm py-2"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}
