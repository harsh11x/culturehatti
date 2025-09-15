'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Heart, X, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

interface WishlistSliderProps {
  children: React.ReactNode
  className?: string
}

export function WishlistSlider({ children, className }: WishlistSliderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  
  // Mock wishlist data - replace with actual wishlist context
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '1',
      name: 'Traditional Gold Necklace',
      price: 25000,
      image: '💎'
    },
    {
      id: '2', 
      name: 'Handcrafted Silver Earrings',
      price: 8500,
      image: '✨'
    }
  ])

  const handleWishlistClick = () => {
    // Check if user is logged in (you can implement proper auth check here)
    const isLoggedIn = false // Replace with actual auth check
    
    if (!isLoggedIn) {
      setShowAuthModal(true)
      return
    }
    
    setIsOpen(true)
  }

  const removeFromWishlist = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id))
  }

  const addToCart = (item: any) => {
    // TODO: Add to cart functionality
    console.log('Adding to cart:', item)
    alert('Added to cart!')
  }

  return (
    <>
      <div className={className} onClick={handleWishlistClick}>
        {children}
        {wishlistItems.length > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {wishlistItems.length}
          </Badge>
        )}
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Wishlist ({wishlistItems.length})
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-6">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-600 mb-6">Add some products to your wishlist to see them here</p>
                <Button asChild className="bg-red-700 hover:bg-red-800 text-white">
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{item.image}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">₹{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-blue-600 border-blue-600 hover:bg-blue-50"
                          onClick={() => addToCart(item)}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-600 hover:bg-red-50"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total Items:</span>
                    <span className="text-lg font-bold">{wishlistItems.length}</span>
                  </div>
                  <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white">
                    <Link href="/products">Continue Shopping</Link>
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
            <p className="text-gray-600 mb-6">Please login or sign up to access your wishlist.</p>
            <div className="flex gap-4">
              <Button asChild className="flex-1 bg-red-700 hover:bg-red-800 text-white">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 border-red-700 text-red-700 hover:bg-red-50">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4 border-gray-300 text-gray-700 hover:bg-gray-50" 
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
