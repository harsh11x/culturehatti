'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useWishlist } from '@/components/providers/WishlistProvider'
import { Heart } from 'lucide-react'
import Link from 'next/link'

interface WishlistIconProps {
  className?: string
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function WishlistIcon({ className, variant = 'ghost', size = 'icon' }: WishlistIconProps) {
  const [mounted, setMounted] = useState(false)
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Safely get wishlist state
  let wishlistState = null
  try {
    const { totalItems } = useWishlist()
    wishlistState = { totalItems }
  } catch (error) {
    console.warn('Wishlist context not available:', error)
  }

  useEffect(() => {
    if (mounted && wishlistState) {
      setItemCount(wishlistState.totalItems || 0)
    }
  }, [mounted, wishlistState])

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size={size}
        className={`relative ${className}`}
      >
        <Heart className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Link href="/wishlist">
      <Button
        variant={variant}
        size={size}
        className={`relative ${className}`}
      >
        <Heart className="h-5 w-5" />
        {itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white font-bold text-xs">
            {itemCount > 99 ? '99+' : itemCount}
          </Badge>
        )}
      </Button>
    </Link>
  )
}
