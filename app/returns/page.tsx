'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw, Clock, Shield, Package, CheckCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">रिटर्न नीति | Returns Policy</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Our hassle-free return policy ensures your complete satisfaction with your traditional Indian purchases.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Return Policy */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">30-Day Return Window</h3>
                  <p className="text-green-700 text-sm">Return any item within 30 days of delivery</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Free Return Shipping</h3>
                  <p className="text-blue-700 text-sm">We cover return shipping costs for eligible items</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-2">Full Refund</h3>
                  <p className="text-purple-700 text-sm">100% money back guarantee</p>
                </div>
              </CardContent>
            </Card>

            {/* Return Process */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  How to Return
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Contact Support</p>
                      <p className="text-gray-600 text-sm">Email or call our customer service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Get Return Label</p>
                      <p className="text-gray-600 text-sm">We'll send you a prepaid return label</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Package & Ship</p>
                      <p className="text-gray-600 text-sm">Pack the item and drop it off</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Receive Refund</p>
                      <p className="text-gray-600 text-sm">Refund processed within 5-7 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Return Conditions */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Return Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-800">✅ Eligible for Return</h3>
                    <ul className="text-green-700 text-sm mt-1 space-y-1">
                      <li>• Items in original condition</li>
                      <li>• With original tags and packaging</li>
                      <li>• Within 30 days of delivery</li>
                      <li>• Defective or damaged items</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <h3 className="font-semibold text-red-800">❌ Not Eligible for Return</h3>
                    <ul className="text-red-700 text-sm mt-1 space-y-1">
                      <li>• Customized or personalized items</li>
                      <li>• Items damaged by customer</li>
                      <li>• Used or worn items</li>
                      <li>• Items without original packaging</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exchange Policy */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Exchange Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2">Size Exchange</h3>
                    <p className="text-blue-700 text-sm">Free size exchange within 15 days</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-800 mb-2">Color Exchange</h3>
                    <p className="text-purple-700 text-sm">Exchange for different color if available</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-2">Product Exchange</h3>
                    <p className="text-green-700 text-sm">Exchange for different product of same value</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact for Returns */}
          <div className="mt-12 text-center">
            <Card className="border-2 border-amber-200 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-red-900">Need Help with Returns?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our customer service team is here to help you with any return or exchange requests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-red-800 hover:bg-red-900 text-white">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Start Return Process
                  </Button>
                  <Button variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
                    <Clock className="h-4 w-4 mr-2" />
                    Track Return Status
                  </Button>
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