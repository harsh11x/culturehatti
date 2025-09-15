'use client'

import { Search, ShoppingBag, User, Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartSlider } from '@/components/cart/CartSlider'
import { WishlistSlider } from '@/components/wishlist/WishlistSlider'
import { AuthModal } from '@/components/auth/AuthModal'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
    <header className="border-b-4 border-indian-gold text-white sticky top-0 z-50 shadow-lg relative" style={{backgroundColor: '#730021'}}>
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Top Info Bar - Hidden on very small screens */}
        <div className="hidden xs:flex items-center justify-between py-2 text-xs sm:text-sm text-indian-gold border-b border-indian-gold/30">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden sm:inline">🕉️ Blessed handwoven treasures from ancient looms</span>
            <span className="hidden sm:inline text-indian-gold">•</span>
            <span className="text-xs sm:text-sm">Crafted by master artisans</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm">Royal Court: +91 98765 43210</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-3 sm:py-4 md:py-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-xs sm:text-sm text-indian-gold mb-1 tracking-widest">॥ श्री ॥</div>
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indian-gold tracking-wide">Culture Hatti</h1>
              <div className="text-xs sm:text-sm text-indian-gold mt-1 tracking-widest">संस्कृति हट्टी</div>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indian-gold to-transparent mt-1 sm:mt-2"></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
              <a
                href="/women"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm xl:text-base 2xl:text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                साड़ी (Sarees)
              </a>
              <a
                href="/women"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm xl:text-base 2xl:text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                सूट (Suits)
              </a>
              <a
                href="/jewelry"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm xl:text-base 2xl:text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                आभूषण (Jewelry)
              </a>
              <a
                href="/bags"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm xl:text-base 2xl:text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                थैले (Bags)
              </a>
              <a
                href="/men"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm xl:text-base 2xl:text-lg border-b-2 border-transparent hover:border-indian-gold pb-1"
              >
                कुर्ता (Men's Kurta)
              </a>
            </nav>
            
            {/* Desktop Login/Signup Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-indian-gold text-indian-gold hover:bg-indian-gold hover:text-indian-maroon font-semibold px-2 xl:px-4 py-1 xl:py-2 text-xs xl:text-sm transition-all duration-200"
                onClick={() => setShowAuthModal(true)}
              >
                Login
              </Button>
              <Button
                size="sm"
                className="bg-indian-gold hover:bg-indian-crimson text-indian-maroon font-semibold px-2 xl:px-4 py-1 xl:py-2 text-xs xl:text-sm shadow-lg transition-all duration-200"
                onClick={() => setShowAuthModal(true)}
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Right Side - Search, Auth, Cart */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
            {/* Desktop Search */}
            <div className="hidden md:flex items-center gap-2 bg-white/10 border border-indian-gold/30 px-2 lg:px-4 py-2 lg:py-3 min-w-[200px] lg:min-w-[320px]">
              <Search className="h-4 w-4 lg:h-5 lg:w-5 text-indian-gold" />
              <Input
                placeholder="खोजें... Search"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm lg:text-lg text-white placeholder:text-indian-gold/70"
              />
            </div>

            {/* Mobile Search Icon */}
            <Button variant="ghost" size="icon" className="md:hidden border border-indian-gold/30 hover:bg-indian-gold/20 text-indian-gold h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>

            {/* Auth Button */}
            <Button variant="ghost" size="icon" className="border border-indian-gold/30 hover:bg-indian-gold/20 text-indian-gold h-8 w-8 lg:h-10 lg:w-10" onClick={() => setShowAuthModal(true)}>
              <User className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>

            {/* Wishlist */}
            <WishlistSlider className="border border-indian-gold/30 hover:bg-indian-gold/20 text-indian-gold">
              <Button variant="ghost" size="icon" className="relative h-8 w-8 lg:h-10 lg:w-10">
                <Heart className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </WishlistSlider>

            {/* Cart */}
            <CartSlider className="border border-indian-gold/30 hover:bg-indian-gold/20 text-indian-gold">
              <Button variant="ghost" size="icon" className="relative h-8 w-8 lg:h-10 lg:w-10">
                <ShoppingBag className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </CartSlider>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden border border-indian-gold/30 hover:bg-indian-gold/20 text-indian-gold h-8 w-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-indian-gold/30 py-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="/women"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm py-2 border-b border-indian-gold/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                साड़ी (Sarees)
              </a>
              <a
                href="/women"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm py-2 border-b border-indian-gold/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                सूट (Suits)
              </a>
              <a
                href="/jewelry"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm py-2 border-b border-indian-gold/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                आभूषण (Jewelry)
              </a>
              <a
                href="/bags"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm py-2 border-b border-indian-gold/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                थैले (Bags)
              </a>
              <a
                href="/men"
                className="text-white hover:text-indian-gold transition-colors font-semibold text-sm py-2 border-b border-indian-gold/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                कुर्ता (Men's Kurta)
              </a>
              
              {/* Mobile Auth Buttons */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-indian-gold text-indian-gold hover:bg-indian-gold hover:text-indian-maroon font-semibold text-xs"
                  onClick={() => {
                    setShowAuthModal(true)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-indian-gold hover:bg-indian-crimson text-indian-maroon font-semibold text-xs"
                  onClick={() => {
                    setShowAuthModal(true)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
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
