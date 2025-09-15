"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, X, Menu, ChevronDown } from "lucide-react"
import { WishlistIcon } from '@/components/wishlist/WishlistIcon'
import { CartSidebar } from '@/components/cart/CartSidebar'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [juttiSubmenuOpen, setJuttiSubmenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-amber-100 hover:text-amber-300 hover:bg-red-700/50"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-red-900 via-red-800 to-amber-900 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-amber-600">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center border-2 border-amber-300">
                  <span className="text-white font-bold text-lg">🇮🇳</span>
                </div>
                  <div>
                    <span className="text-lg font-bold text-amber-200">Culture Hatti</span>
                    <br />
                    <span className="text-sm text-amber-300">संस्कृति हट्टी</span>
                  </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-100 hover:text-amber-300"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-4">
              <Link
                href="/"
                className="block text-amber-100 hover:text-amber-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-red-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Jutti Submenu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-amber-100 hover:text-amber-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-red-800/50 transition-colors"
                  onClick={() => setJuttiSubmenuOpen(!juttiSubmenuOpen)}
                >
                  <span>Jewelry</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${juttiSubmenuOpen ? "rotate-180" : ""}`} />
                </button>

                {juttiSubmenuOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/men"
                      className="block text-amber-200 hover:text-amber-300 py-2 px-4 rounded-lg hover:bg-red-800/30 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Men's Jewelry
                    </Link>
                    <Link
                      href="/women"
                      className="block text-amber-200 hover:text-amber-300 py-2 px-4 rounded-lg hover:bg-red-800/30 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Women's Jewelry
                    </Link>
                    <Link
                      href="/kids"
                      className="block text-amber-200 hover:text-amber-300 py-2 px-4 rounded-lg hover:bg-red-800/30 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Kids' Jewelry
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/fulkari"
                className="block text-amber-100 hover:text-amber-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-red-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bags & Purses
              </Link>

              <Link
                href="/about"
                className="block text-amber-100 hover:text-amber-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-red-800/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="p-6 border-t border-amber-600">
              <div className="flex items-center justify-center space-x-4">
                <WishlistIcon className="text-amber-100 hover:text-amber-300 hover:bg-red-800/50" />
                <CartSidebar>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-amber-100 hover:text-amber-300 hover:bg-red-800/50 relative"
                  >
                    <ShoppingBag className="h-6 w-6" />
                  </Button>
                </CartSidebar>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
