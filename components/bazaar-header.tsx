"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Search, Heart, User, Menu, X } from "lucide-react"
import { useCart } from "@/components/providers/CartProvider"
import { useFirebaseAuth } from "@/contexts/FirebaseAuthContext"
import { AuthModal } from "@/components/auth-modal"
import { CartSlider } from "@/components/cart-slider"
import { WishlistSlider } from "@/components/wishlist-slider"
import Link from "next/link"

export function BazaarHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const { totalItems } = useCart()
  const { user, isAuthenticated } = useFirebaseAuth()

  return (
    <>
        <header className="sticky top-0 z-50 culture-hatti-gradient border-b-2 border-golden shadow-lg backdrop-blur-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 py-3">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="text-yellow-200 font-medium">
              ॐ Blessed handwoven treasures from ancient looms • Crafted by master artisans
            </div>
            <div className="text-yellow-200 font-medium">
              Royal Court: +91 98765 43210
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-yellow-400 font-serif">॥ श्री ॥ Culture Hatti</h1>
                    <span className="block text-sm text-white font-medium">संस्कृति हट्टी</span>
                  </div>
              </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/sarees" className="text-white hover:text-yellow-400 transition-all duration-200 font-medium border-b-2 border-transparent hover:border-yellow-400 pb-1">
              साड़ी (Sarees)
            </a>
            <a href="/kurtas" className="text-white hover:text-yellow-400 transition-all duration-200 font-medium border-b-2 border-transparent hover:border-yellow-400 pb-1">
              सूट (Suits)
            </a>
            <a href="/jewelry" className="text-white hover:text-yellow-400 transition-all duration-200 font-medium border-b-2 border-transparent hover:border-yellow-400 pb-1">
              आभूषण (Jewelry)
            </a>
            <a href="/handicrafts" className="text-white hover:text-yellow-400 transition-all duration-200 font-medium border-b-2 border-transparent hover:border-yellow-400 pb-1">
              थैले (Bags)
            </a>
            <a href="/kids" className="text-white hover:text-yellow-400 transition-all duration-200 font-medium border-b-2 border-transparent hover:border-yellow-400 pb-1">
              कुर्ता (Men's Kurta)
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
                {/* Login/Signup Buttons */}
                <div className="hidden md:flex items-center gap-2">
                  {isAuthenticated ? (
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm">Welcome, {user?.displayName || user?.email}</span>
                      <Link href="/profile">
                        <Button className="bg-yellow-400 text-red-900 hover:bg-yellow-300 font-semibold px-4 py-2 rounded-lg">
                          Profile
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Button 
                        className="bg-yellow-400 text-red-900 hover:bg-yellow-300 font-semibold px-4 py-2 rounded-lg"
                        onClick={() => {
                          setAuthMode('login')
                          setIsAuthModalOpen(true)
                        }}
                      >
                        Login
                      </Button>
                      <Button 
                        className="bg-yellow-500 text-white hover:bg-yellow-400 font-semibold px-4 py-2 rounded-lg"
                        onClick={() => {
                          setAuthMode('signup')
                          setIsAuthModalOpen(true)
                        }}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white/10 border border-yellow-400 rounded-full px-4 py-2 w-64">
              <Search className="h-4 w-4 text-yellow-400 mr-3" />
              <input
                type="text"
                placeholder="खोजें... Search"
                className="bg-transparent border-none outline-none flex-1 text-sm text-white placeholder:text-yellow-200"
              />
            </div>

                {/* Action Icons */}
                <div className="flex items-center gap-3">
                  <Link href="/profile">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-colors">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsWishlistOpen(true)}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/10 transition-colors relative"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    {totalItems > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                        {totalItems}
                      </Badge>
                    )}
                  </Button>
                </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-yellow-400 bg-red-800/50">
            <nav className="flex flex-col space-y-3">
              <a href="#womens" className="text-white hover:text-yellow-400 transition-colors font-medium px-4 py-2 rounded-md hover:bg-white/10">
                साड़ी (Sarees)
              </a>
              <a href="#mens" className="text-white hover:text-yellow-400 transition-colors font-medium px-4 py-2 rounded-md hover:bg-white/10">
                सूट (Suits)
              </a>
              <a href="#jewelry" className="text-white hover:text-yellow-400 transition-colors font-medium px-4 py-2 rounded-md hover:bg-white/10">
                आभूषण (Jewelry)
              </a>
              <a href="#bags" className="text-white hover:text-yellow-400 transition-colors font-medium px-4 py-2 rounded-md hover:bg-white/10">
                थैले (Bags)
              </a>
              <a href="#mens" className="text-white hover:text-yellow-400 transition-colors font-medium px-4 py-2 rounded-md hover:bg-white/10">
                कुर्ता (Men's Kurta)
              </a>
            </nav>
          </div>
            )}
          </div>
        </header>

        {/* Auth Modal */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          mode={authMode}
          onModeChange={setAuthMode}
        />

        {/* Cart Slider */}
        <CartSlider
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        {/* Wishlist Slider */}
        <WishlistSlider
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
        />
      </>
    )
  }