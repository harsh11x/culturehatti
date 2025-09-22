'use client'

import { Suspense, lazy, useState } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Truck, RotateCcw, Shield, Clock, MapPin, Phone, Mail, CheckCircle, XCircle, AlertCircle, Search, Package, ArrowRight } from "lucide-react"

export default function ShippingReturnsPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isTracking, setIsTracking] = useState(false)

  const trackOrder = () => {
    if (!trackingNumber.trim()) return
    
    setIsTracking(true)
    // Simulate API call
    setTimeout(() => {
      const mockResult = {
        orderNumber: trackingNumber,
        status: 'In Transit',
        currentLocation: 'Mumbai Distribution Center',
        estimatedDelivery: '2024-01-15',
        trackingHistory: [
          { date: '2024-01-10', status: 'Order Placed', location: 'Delhi' },
          { date: '2024-01-11', status: 'Processing', location: 'Delhi Warehouse' },
          { date: '2024-01-12', status: 'Shipped', location: 'Delhi' },
          { date: '2024-01-13', status: 'In Transit', location: 'Mumbai Distribution Center' }
        ]
      }
      setTrackingResult(mockResult)
      setIsTracking(false)
    }, 2000)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'in transit': return 'bg-blue-100 text-blue-800'
      case 'processing': return 'bg-yellow-100 text-yellow-800'
      case 'shipped': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }
  const shippingInfo = {
    domestic: {
      title: "भारत में शिपिंग | Domestic Shipping",
      description: "We deliver across India with fast and secure shipping options.",
      options: [
        {
          type: "Standard Delivery",
          duration: "5-7 business days",
          cost: "₹99",
          description: "Regular shipping to most locations",
          icon: <Truck className="h-6 w-6 text-blue-600" />
        },
        {
          type: "Express Delivery",
          duration: "2-3 business days",
          cost: "₹199",
          description: "Fast delivery to metro cities",
          icon: <Clock className="h-6 w-6 text-green-600" />
        },
        {
          type: "Same Day Delivery",
          duration: "Same day",
          cost: "₹299",
          description: "Available in select cities",
          icon: <Shield className="h-6 w-6 text-purple-600" />
        }
      ]
    },
    international: {
      title: "अंतर्राष्ट्रीय शिपिंग | International Shipping",
      description: "We ship worldwide with tracking and insurance.",
      options: [
        {
          type: "Standard International",
          duration: "10-15 business days",
          cost: "₹1,999",
          description: "Economical shipping worldwide",
          icon: <MapPin className="h-6 w-6 text-blue-600" />
        },
        {
          type: "Express International",
          duration: "5-7 business days",
          cost: "₹2,999",
          description: "Fast international delivery",
          icon: <Clock className="h-6 w-6 text-green-600" />
        }
      ]
    }
  }

  const returnPolicy = {
    title: "वापसी नीति | Return Policy",
    description: "We offer hassle-free returns within 30 days of delivery.",
    conditions: [
      {
        condition: "Return Window",
        details: "30 days from delivery date",
        icon: <CheckCircle className="h-5 w-5 text-green-600" />
      },
      {
        condition: "Item Condition",
        details: "Must be unused with original tags",
        icon: <CheckCircle className="h-5 w-5 text-green-600" />
      },
      {
        condition: "Original Packaging",
        details: "Include all original packaging and accessories",
        icon: <CheckCircle className="h-5 w-5 text-green-600" />
      },
      {
        condition: "Return Shipping",
        details: "Free return shipping for defective items",
        icon: <CheckCircle className="h-5 w-5 text-green-600" />
      },
      {
        condition: "Custom Items",
        details: "Made-to-order items cannot be returned",
        icon: <XCircle className="h-5 w-5 text-red-600" />
      },
      {
        condition: "Jewelry Returns",
        details: "Jewelry must be in original condition",
        icon: <AlertCircle className="h-5 w-5 text-yellow-600" />
      }
    ]
  }

  const exchangePolicy = {
    title: "एक्सचेंज नीति | Exchange Policy",
    description: "Exchange for different size, color, or style within 15 days.",
    process: [
      {
        step: "1",
        title: "Request Exchange",
        description: "Contact us within 15 days of delivery"
      },
      {
        step: "2",
        title: "Get Approval",
        description: "We'll approve your exchange request"
      },
      {
        step: "3",
        title: "Ship Item",
        description: "Send back the original item"
      },
      {
        step: "4",
        title: "Receive New Item",
        description: "Get your new item delivered"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium mb-6 border border-amber-200">
              <Truck className="h-4 w-4" />
              Shipping & Returns
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">शिपिंग व वापसी | Shipping & Returns</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Fast, secure delivery across India and worldwide. Easy returns and exchanges for your peace of mind.
            </p>
          </div>

          {/* Order Tracking Widget */}
          <Card className="mb-12 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Package className="h-6 w-6 text-blue-600" />
                Track Your Order
              </CardTitle>
              <p className="text-gray-600">Enter your order number to track your package in real-time</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tracking" className="text-red-800 font-semibold">Order Number</Label>
                    <div className="flex gap-2">
                      <Input
                        id="tracking"
                        placeholder="Enter your order number"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && trackOrder()}
                      />
                      <Button 
                        onClick={trackOrder} 
                        disabled={!trackingNumber.trim() || isTracking}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {isTracking ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Search className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p>• Order numbers are sent via email after purchase</p>
                    <p>• Tracking updates every 6-12 hours</p>
                    <p>• Contact support if you need help</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  {trackingResult ? (
                    <div className="w-full space-y-4">
                      <div className="text-center p-4 bg-white border rounded-lg">
                        <Badge className={`mb-2 ${getStatusColor(trackingResult.status)}`}>
                          {trackingResult.status}
                        </Badge>
                        <h3 className="font-semibold text-lg">Order #{trackingResult.orderNumber}</h3>
                        <p className="text-sm text-gray-600">Current Location: {trackingResult.currentLocation}</p>
                        <p className="text-sm text-gray-600">Estimated Delivery: {trackingResult.estimatedDelivery}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Tracking History:</h4>
                        {trackingResult.trackingHistory.map((item: any, index: number) => (
                          <div key={index} className="flex items-center gap-3 p-2 bg-white border rounded text-sm">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <div className="flex-1">
                              <p className="font-medium">{item.status}</p>
                              <p className="text-gray-600">{item.location} • {item.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-6 bg-gray-50 border-2 border-gray-200 rounded-lg">
                      <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">Enter Order Number</h3>
                      <p className="text-gray-500">Track your package to see real-time updates</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Information */}
          <div className="space-y-12">
            {/* Domestic Shipping */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  {shippingInfo.domestic.title}
                </CardTitle>
                <p className="text-gray-600">{shippingInfo.domestic.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {shippingInfo.domestic.options.map((option, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        {option.icon}
                        <div>
                          <h3 className="font-semibold text-lg">{option.type}</h3>
                          <Badge className="bg-blue-100 text-blue-800">{option.cost}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                      <p className="text-sm font-medium text-green-600">{option.duration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* International Shipping */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Truck className="h-6 w-6 text-green-600" />
                  {shippingInfo.international.title}
                </CardTitle>
                <p className="text-gray-600">{shippingInfo.international.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {shippingInfo.international.options.map((option, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        {option.icon}
                        <div>
                          <h3 className="font-semibold text-lg">{option.type}</h3>
                          <Badge className="bg-green-100 text-green-800">{option.cost}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                      <p className="text-sm font-medium text-green-600">{option.duration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Return Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <RotateCcw className="h-6 w-6 text-purple-600" />
                  {returnPolicy.title}
                </CardTitle>
                <p className="text-gray-600">{returnPolicy.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {returnPolicy.conditions.map((condition, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                      {condition.icon}
                      <div>
                        <h4 className="font-semibold mb-1">{condition.condition}</h4>
                        <p className="text-sm text-gray-600">{condition.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exchange Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Shield className="h-6 w-6 text-orange-600" />
                  {exchangePolicy.title}
                </CardTitle>
                <p className="text-gray-600">{exchangePolicy.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {exchangePolicy.process.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-orange-600 font-bold text-lg">{step.step}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Information */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-red-800">Shipping Notes:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• All orders are processed within 1-2 business days</li>
                    <li>• Delivery times may vary during festivals and holidays</li>
                    <li>• We provide tracking information for all shipments</li>
                    <li>• Signature may be required for delivery</li>
                    <li>• International orders may be subject to customs duties</li>
                    <li>• We insure all shipments for their full value</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-red-800">Return Process:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Contact our customer service to initiate returns</li>
                    <li>• We'll provide a return authorization number</li>
                    <li>• Pack items securely in original packaging</li>
                    <li>• Include the return form with your package</li>
                    <li>• Refunds processed within 5-7 business days</li>
                    <li>• Store credit available for exchanges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Need Help with Shipping or Returns?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-gray-600 mb-2">+91 98765 43210</p>
                  <p className="text-xs text-gray-500">Mon-Sat: 9AM-8PM</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-gray-600 mb-2">support@culture-hatti.com</p>
                  <p className="text-xs text-gray-500">24/7 Support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-2">Available on website</p>
                  <p className="text-xs text-gray-500">Instant Support</p>
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
