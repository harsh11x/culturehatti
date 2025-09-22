'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, Shield, MapPin, Package } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">शिपिंग जानकारी | Shipping Information</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Learn about our shipping policies, delivery times, and tracking information for your traditional Indian purchases.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Shipping Options */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Free Standard Shipping</h3>
                  <p className="text-green-700 text-sm">Orders over ₹2,000 - 5-7 business days</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Express Shipping</h3>
                  <p className="text-blue-700 text-sm">₹199 - 2-3 business days</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-2">Same Day Delivery</h3>
                  <p className="text-purple-700 text-sm">₹399 - Available in select cities</p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Timeline */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Delivery Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Order Processing</p>
                      <p className="text-gray-600 text-sm">1-2 business days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Packaging & Dispatch</p>
                      <p className="text-gray-600 text-sm">Same day</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">In Transit</p>
                      <p className="text-gray-600 text-sm">2-5 business days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Delivered</p>
                      <p className="text-gray-600 text-sm">At your doorstep</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Coverage */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Shipping Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <h3 className="font-semibold text-red-800">Metro Cities</h3>
                    <p className="text-red-700 text-sm">Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <h3 className="font-semibold text-amber-800">Tier 1 Cities</h3>
                    <p className="text-amber-700 text-sm">Ahmedabad, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Bhopal</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h3 className="font-semibold text-orange-800">Tier 2 & 3 Cities</h3>
                    <p className="text-orange-700 text-sm">All major cities and towns across India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Packaging & Safety */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Packaging & Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold text-red-900">Premium Packaging</p>
                      <p className="text-gray-600 text-sm">All items are carefully wrapped in traditional Indian packaging</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold text-red-900">Damage Protection</p>
                      <p className="text-gray-600 text-sm">Insurance coverage for all shipments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold text-red-900">Secure Delivery</p>
                      <p className="text-gray-600 text-sm">OTP verification for all deliveries</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-red-900"></div>}>
        <BazaarFooter />
      </Suspense>
    </div>
  )
}