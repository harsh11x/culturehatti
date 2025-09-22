'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, Trash2, Eye, X } from "lucide-react"
import { useFirebaseAuth } from "@/contexts/FirebaseAuthContext"
import Link from "next/link"

interface WishlistSliderProps {
  isOpen: boolean
  onClose: () => void
}

export function WishlistSlider({ isOpen, onClose }: WishlistSliderProps) {
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
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        
        {/* Slider */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-red-900">My Wishlist</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center">
                <Heart className="h-16 w-16 text-red-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-900 mb-2">Login Required</h3>
                <p className="text-gray-600 mb-6">Please login to view your wishlist</p>
                <div className="space-y-2">
                  <Button className="w-full bg-red-800 hover:bg-red-900 text-white">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full border-red-800 text-red-800 hover:bg-red-50">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Slider */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-red-900">My Wishlist</h2>
              {wishlistItems.length > 0 && (
                <Badge className="bg-red-600 text-white">{wishlistItems.length}</Badge>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {wishlistItems.length === 0 ? (
              <div className="flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-red-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Your Wishlist is Empty</h3>
                  <p className="text-gray-600 mb-6">Start adding items you love!</p>
                  <Link href="/" onClick={onClose}>
                    <Button className="bg-red-800 hover:bg-red-900 text-white">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="text-xs mb-1">{item.category}</Badge>
                      <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                      <p className="text-sm font-semibold text-red-600">₹{item.price.toLocaleString()}</p>
                      {!item.inStock && (
                        <p className="text-xs text-red-600">Out of Stock</p>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {wishlistItems.length > 0 && (
            <div className="border-t p-4">
              <Link href="/" onClick={onClose}>
                <Button className="w-full bg-red-800 hover:bg-red-900 text-white">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
