'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'sonner'

interface WishlistItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  image?: string
  category?: string
  subcategory?: string
  colors?: string[]
  sizes?: string[]
  stock?: number
  rating?: number
  reviews?: number
  badge?: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  isInWishlist: (id: string) => boolean
  toggleItem: (item: WishlistItem) => void
  clearWishlist: () => void
  totalItems: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist')
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist)
        setItems(parsedWishlist)
        console.log('[WishlistProvider] Loaded wishlist from localStorage:', parsedWishlist.length, 'items')
      }
    } catch (error) {
      console.error('[WishlistProvider] Error loading wishlist from localStorage:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save wishlist to localStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('wishlist', JSON.stringify(items))
        console.log('[WishlistProvider] Saved wishlist to localStorage:', items.length, 'items')
      } catch (error) {
        console.error('[WishlistProvider] Error saving wishlist to localStorage:', error)
      }
    }
  }, [items, isLoaded])

  const addItem = (item: WishlistItem) => {
    setItems(prevItems => {
      // Check if item already exists
      const existingItem = prevItems.find(existingItem => existingItem.id === item.id)
      if (existingItem) {
        toast.info('Item is already in your wishlist')
        return prevItems
      }

      const newItems = [...prevItems, item]
      toast.success('Added to wishlist')
      return newItems
    })
  }

  const removeItem = (id: string) => {
    setItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== id)
      toast.success('Removed from wishlist')
      return newItems
    })
  }

  const isInWishlist = (id: string) => {
    return items.some(item => item.id === id)
  }

  const toggleItem = (item: WishlistItem) => {
    if (isInWishlist(item.id)) {
      removeItem(item.id)
    } else {
      addItem(item)
    }
  }

  const clearWishlist = () => {
    setItems([])
    toast.success('Wishlist cleared')
  }

  const totalItems = items.length

  const value: WishlistContextType = {
    items,
    addItem,
    removeItem,
    isInWishlist,
    toggleItem,
    clearWishlist,
    totalItems
  }

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}
