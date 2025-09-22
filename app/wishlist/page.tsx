'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, Trash2, Eye } from "lucide-react"
import { useFirebaseAuth } from "@/contexts/FirebaseAuthContext"
import Link from "next/link"

export default function WishlistPage() {
  const { isAuthenticated } = useFirebaseAuth()
  
  // Mock wishlist data
  const wishlistItems = [
    {
      id: "1",
      name: "Banarasi Silk Saree",
      price: 25000,
      image: "/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg",
      category: "Sarees",
      inStock: true
    },
    {
      id: "2", 
      name: "Traditional Gold Jewelry Set",
      price: 45000,
      image: "/beautiful-indian-handicrafts-brass-items-decorativ.jpg",
      category: "Jewelry",
      inStock: true
    },
    {
      id: "3",
      name: "Handwoven Cotton Kurta",
      price: 3500,
      image: "/handsome-indian-man-in-traditional-kurta-and-ethni.jpg",
      category: "Kurtas",
      inStock: false
    }
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
        <BazaarHeader />
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <Heart className="h-24 w-24 text-red-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-red-900 mb-4">Login Required</h1>
              <p className="text-xl text-red-700 mb-8">Please login to view your wishlist</p>
              <div className="flex gap-4 justify-center">
                <Link href="/login">
                  <Button className="bg-red-800 hover:bg-red-900 text-white">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
          <BazaarFooter />
        </Suspense>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">मेरी पसंद | My Wishlist</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Save your favorite traditional Indian items and come back to them later.
            </p>
          </div>

          {wishlistItems.length === 0 ? (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="text-center py-20">
                <Heart className="h-24 w-24 text-red-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-red-900 mb-4">Your Wishlist is Empty</h2>
                <p className="text-gray-600 mb-8">Start adding items you love to your wishlist!</p>
                <Link href="/">
                  <Button className="bg-red-800 hover:bg-red-900 text-white">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    {!item.inStock && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-600 text-white">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs mb-2">{item.category}</Badge>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-2xl font-bold text-red-600">₹{item.price.toLocaleString()}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-red-800 hover:bg-red-900 text-white"
                        disabled={!item.inStock}
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {wishlistItems.length > 0 && (
            <div className="text-center mt-12">
              <Link href="/">
                <Button variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
        <BazaarFooter />
      </Suspense>
    </div>
  )
}
