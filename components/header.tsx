'use client'

import { Search, ShoppingBag, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartSlider } from '@/components/cart/CartSlider'
import { WishlistSlider } from '@/components/wishlist/WishlistSlider'
import { AuthModal } from '@/components/auth/AuthModal'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <>
    <header className="border-b-4 border-indian-gold text-white sticky top-0 z-50 shadow-lg relative" style={{backgroundColor: '#730021'}}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 text-sm text-indian-gold border-b-2 border-indian-gold/30">
          <div className="flex items-center gap-6">
            <span>🕉️ Blessed handwoven treasures from ancient looms</span>
            <span className="text-indian-gold">•</span>
            <span>Crafted by master artisans of Bharat</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Royal Court: +91 98765 43210</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-12">
            <div className="text-center">
              <div className="text-xs text-indian-gold mb-1 tracking-widest">॥ श्री ॥</div>
              <h1 className="text-4xl font-bold text-indian-gold tracking-wide">Culture Hatti</h1>
              <div className="text-xs text-indian-gold mt-1 tracking-widest">संस्कृति हट्टी</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indian-gold to-transparent mt-2"></div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/women"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                साड़ी (Sarees)
              </a>
              <a
                href="/women"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                सूट (Suits)
              </a>
              <a
                href="/jewelry"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                आभूषण (Jewelry)
              </a>
              <a
                href="/bags"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                थैले (Bags)
              </a>
              <a
                href="/men"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                कुर्ता (Men's Kurta)
              </a>
            </nav>
            
            {/* Login/Signup Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-indian-gold text-indian-gold hover:bg-indian-gold hover:text-indian-maroon font-semibold px-4 py-2 transition-all duration-200"
                onClick={() => setShowAuthModal(true)}
              >
                Login
              </Button>
              <Button
                size="sm"
                className="bg-indian-gold hover:bg-indian-crimson text-indian-maroon font-semibold px-4 py-2 shadow-lg transition-all duration-200"
                onClick={() => setShowAuthModal(true)}
              >
                Sign Up
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 bg-white/10 border-2 border-indian-gold/30 px-4 py-3 min-w-[320px]">
              <Search className="h-5 w-5 text-indian-gold" />
              <Input
                placeholder="खोजें... Search for royal attire"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg text-white placeholder:text-indian-gold/70"
              />
            </div>
            <Button variant="ghost" size="icon" className="border-2 border-indian-gold/30 hover:bg-indian-gold/20 text-indian-gold" onClick={() => setShowAuthModal(true)}>
              <User className="h-6 w-6" />
            </Button>
            <WishlistSlider className="border-2 border-indian-gold/30 hover:bg-indian-gold/20 text-indian-gold">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-6 w-6" />
              </Button>
            </WishlistSlider>
            <CartSlider className="border-2 border-indian-gold/30 hover:bg-indian-gold/20 text-indian-gold">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-6 w-6" />
              </Button>
            </CartSlider>
          </div>
        </div>
      </div>
    </header>

    {/* Auth Modal */}
    <AuthModal 
      isOpen={showAuthModal} 
      onClose={() => setShowAuthModal(false)} 
    />
  </>
  )
}
