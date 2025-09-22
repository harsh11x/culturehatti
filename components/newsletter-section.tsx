"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift, Star } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-orange-400/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-slide-in-up">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse-glow">
              <Gift className="h-4 w-4 animate-rotate-3d" />
              Special Offers & Updates
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text-red">Stay Connected with Indian Heritage</span>
            </h2>
            <p className="text-xl text-red-700 max-w-2xl mx-auto animate-fade-in-scale">
              Subscribe to our newsletter and be the first to know about new collections, 
              exclusive offers, and stories from our artisan partners.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 glass-effect premium-hover animate-fade-in-scale">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full glass-effect"
                />
              </div>
              <Button className="bg-red-800 hover:bg-red-900 text-white px-8 premium-hover animate-shimmer">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-red-600 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center premium-hover card-3d animate-fade-in-scale" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Gift className="h-8 w-8 text-amber-600 animate-rotate-3d" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 gradient-text-red">Exclusive Offers</h3>
              <p className="text-gray-600 text-sm">Get access to special discounts and early bird offers</p>
            </div>
            
            <div className="text-center premium-hover card-3d animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Star className="h-8 w-8 text-amber-600 animate-rotate-3d" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 gradient-text-red">New Collections</h3>
              <p className="text-gray-600 text-sm">Be the first to discover our latest curated collections</p>
            </div>
            
            <div className="text-center premium-hover card-3d animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Mail className="h-8 w-8 text-amber-600 animate-rotate-3d" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 gradient-text-red">Artisan Stories</h3>
              <p className="text-gray-600 text-sm">Learn about the craftsmen behind our beautiful products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
