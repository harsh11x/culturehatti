"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Search, Heart, User, Menu, X, Phone, Mail, Star } from "lucide-react"
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
        <header className="sticky top-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 border-b-2 border-yellow-400 shadow-2xl backdrop-blur-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-950 to-red-900 py-2 border-b border-yellow-400/30">
        <div>
          <div className="flex justify-between items-center text-xs px-6">
            <div className="flex items-center gap-4 text-yellow-200">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-400" />
                <span className="font-medium">Premium Heritage Collection</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <span>•</span>
                <span>Authentic Handcrafted</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-yellow-200">
              <div className="hidden sm:flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>hello@culturehatti.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-red-800/90 to-red-700/90 backdrop-blur-sm">
        <div className="flex items-center justify-between py-5 px-6">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                  <div className="text-center group-hover:scale-105 transition-transform duration-300">
                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 font-serif tracking-wide">॥ श्री ॥ Culture Hatti</h1>
                    <span className="block text-xs md:text-sm text-yellow-100 font-medium tracking-wider">संस्कृति हट्टी</span>
                  </div>
              </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/sarees" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-sm tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1 hover:shadow-lg">
              साड़ी (Sarees)
            </Link>
            <Link href="/kurtas" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-sm tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1 hover:shadow-lg">
              सूट (Suits)
            </Link>
            <Link href="/jewelry" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-sm tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1 hover:shadow-lg">
              आभूषण (Jewelry)
            </Link>
            <Link href="/handicrafts" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-sm tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1 hover:shadow-lg">
              थैले (Bags)
            </Link>
            <Link href="/mens" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-sm tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1 hover:shadow-lg">
              कुर्ता (Men's)
            </Link>
            <Link href="/womens" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-sm tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1 hover:shadow-lg">
              महिला (Women's)
            </Link>
            <Link href="/gifts" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-sm tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1 hover:shadow-lg">
              उपहार (Gifts)
            </Link>
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
            <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm border border-yellow-400/50 rounded-full px-4 py-2.5 w-72 shadow-lg hover:bg-white/15 transition-all duration-300">
              <Search className="h-4 w-4 text-yellow-400 mr-3" />
              <input
                type="text"
                placeholder="खोजें... Search products"
                className="bg-transparent border-none outline-none flex-1 text-sm text-white placeholder:text-yellow-200/80 font-medium"
              />
            </div>

                {/* Action Icons */}
                <div className="flex items-center gap-2">
                  <Link href="/profile">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/15 hover:text-yellow-400 transition-all duration-300 rounded-full p-2">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/15 hover:text-yellow-400 transition-all duration-300 rounded-full p-2"
                    onClick={() => setIsWishlistOpen(true)}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/15 hover:text-yellow-400 transition-all duration-300 rounded-full p-2 relative"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    {totalItems > 0 && (
                      <Badge className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 text-xs h-5 w-5 flex items-center justify-center rounded-full font-bold shadow-lg">
                        {totalItems}
                      </Badge>
                    )}
                  </Button>
                </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/15 hover:text-yellow-400 transition-all duration-300 rounded-full p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-yellow-400/50 bg-gradient-to-r from-red-800/80 to-red-700/80 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2 px-6">
              <Link href="/sarees" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-white/10 border-l-4 border-transparent hover:border-yellow-400">
                साड़ी (Sarees)
              </Link>
              <Link href="/kurtas" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-white/10 border-l-4 border-transparent hover:border-yellow-400">
                सूट (Suits)
              </Link>
              <Link href="/jewelry" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-white/10 border-l-4 border-transparent hover:border-yellow-400">
                आभूषण (Jewelry)
              </Link>
              <Link href="/handicrafts" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-white/10 border-l-4 border-transparent hover:border-yellow-400">
                थैले (Bags)
              </Link>
              <Link href="/mens" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-white/10 border-l-4 border-transparent hover:border-yellow-400">
                कुर्ता (Men's)
              </Link>
              <Link href="/womens" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-white/10 border-l-4 border-transparent hover:border-yellow-400">
                महिला (Women's)
              </Link>
              <Link href="/gifts" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-white/10 border-l-4 border-transparent hover:border-yellow-400">
                उपहार (Gifts)
              </Link>
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