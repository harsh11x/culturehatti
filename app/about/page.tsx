'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Award, Globe, Shield, Truck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">हमारे बारे में | About Us</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Discover the story behind Culture Hatti - your gateway to authentic Indian heritage and traditional craftsmanship.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-8 border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-red-900 text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                At Culture Hatti, we are dedicated to preserving and promoting the rich cultural heritage of India. 
                Our mission is to connect traditional artisans with modern customers, ensuring that authentic Indian 
                craftsmanship continues to thrive in today's world.
              </p>
            </CardContent>
          </Card>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Founded in 2020, Culture Hatti began as a small initiative to support local artisans in Punjab 
                  and across India. What started as a passion project has grown into a platform that celebrates 
                  the diversity and beauty of Indian culture.
                </p>
                <p className="text-gray-700">
                  We work directly with master craftsmen, ensuring fair wages and preserving traditional techniques 
                  that have been passed down through generations. Every product tells a story of heritage, skill, 
                  and cultural pride.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Authenticity</h4>
                    <p className="text-sm text-gray-600">Every product is genuinely crafted by skilled artisans</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Community</h4>
                    <p className="text-sm text-gray-600">Supporting artisan communities and preserving traditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality</h4>
                    <p className="text-sm text-gray-600">Handpicked products that meet our high standards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-2 border-amber-200">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-sm text-gray-600">Serving customers worldwide with authentic Indian products</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-amber-200">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Trusted Platform</h3>
                <p className="text-sm text-gray-600">Secure transactions and guaranteed authenticity</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-amber-200">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Quick and safe delivery to your doorstep</p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <Card className="border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-red-900 text-center">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center mb-6">
                Our diverse team of cultural enthusiasts, technology experts, and business professionals 
                work together to bring you the best of Indian heritage.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Cultural Experts</h4>
                  <p className="text-sm text-gray-600">Ensuring authenticity and cultural accuracy</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Award className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">Maintaining the highest standards</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Customer Care</h4>
                  <p className="text-sm text-gray-600">Dedicated to your satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
        <BazaarFooter />
      </Suspense>
    </div>
  )
}
