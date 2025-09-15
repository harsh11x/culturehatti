'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useCart } from '@/components/providers/CartProvider'
import { ShoppingCart, X, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

interface CartSliderProps {
  children: React.ReactNode
  className?: string
}

export function CartSlider({ children, className }: CartSliderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  
  // Safely get cart state with fallback
  let items: any[] = []
  let removeItem: (id: string) => void = () => {}
  let updateQuantity: (id: string, quantity: number) => void = () => {}
  
  try {
    const cart = useCart()
    items = cart?.items || []
    removeItem = cart?.removeItem || (() => {})
    updateQuantity = cart?.updateQuantity || (() => {})
  } catch (error) {
    console.warn('Cart context not available:', error)
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleCartClick = () => {
    // Check if user is logged in (you can implement proper auth check here)
    const isLoggedIn = false // Replace with actual auth check
    
    if (!isLoggedIn) {
      setShowAuthModal(true)
      return
    }
    
    setIsOpen(true)
  }

  return (
    <>
      <div className={className} onClick={handleCartClick}>
        {children}
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {totalItems}
          </Badge>
        )}
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-blue-500" />
              Cart ({totalItems})
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some products to your cart to see them here</p>
                <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white">
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🛍️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-600 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg font-bold">₹{totalPrice}</span>
                  </div>
                  <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">Please login or sign up to access your cart and profile.</p>
            <div className="flex gap-4">
              <Button asChild className="flex-1 bg-blue-700 hover:bg-blue-800 text-white">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 border-blue-700 text-blue-700 hover:bg-blue-50">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
            <Button 
              variant="ghost" 
              className="w-full mt-4" 
              onClick={() => setShowAuthModal(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
