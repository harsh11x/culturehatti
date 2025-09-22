'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react"
import { useCart } from "@/components/providers/CartProvider"
import { useFirebaseAuth } from "@/contexts/FirebaseAuthContext"
import Link from "next/link"

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart()
  const { isAuthenticated } = useFirebaseAuth()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
        <BazaarHeader />
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <ShoppingBag className="h-24 w-24 text-red-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-red-900 mb-4">Login Required</h1>
              <p className="text-xl text-red-700 mb-8">Please login to view your cart</p>
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
              <span className="gradient-text-red">मेरी टोकरी | My Cart</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Review your selected traditional Indian items before checkout.
            </p>
          </div>

          {items.length === 0 ? (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="text-center py-20">
                <ShoppingBag className="h-24 w-24 text-red-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-red-900 mb-4">Your Cart is Empty</h2>
                <p className="text-gray-600 mb-8">Add some beautiful traditional items to your cart!</p>
                <Link href="/">
                  <Button className="bg-red-800 hover:bg-red-900 text-white">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ShoppingBag className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.color && `Color: ${item.color}`}
                            {item.size && ` • Size: ${item.size}`}
                          </p>
                          <p className="text-lg font-bold text-red-600">₹{item.price.toLocaleString()}</p>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-16 text-center h-8"
                              min="1"
                            />
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-red-900">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal ({totalItems} items)</span>
                        <span>₹{totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-green-600">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>Included</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <Link href="/checkout" className="block">
                        <Button className="w-full bg-red-800 hover:bg-red-900 text-white">
                          Proceed to Checkout
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full border-red-800 text-red-800 hover:bg-red-50"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
