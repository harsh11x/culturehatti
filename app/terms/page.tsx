'use client'

import { Suspense, lazy } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">नियम और शर्तें | Terms & Conditions</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Culture Hatti's website and services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, please do 
                  not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">2. Use License</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on Culture Hatti's website 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                  of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">3. Product Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strive to provide accurate product descriptions and images. However, we do not warrant that 
                  product descriptions or other content is accurate, complete, reliable, current, or error-free.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All products are handcrafted by skilled artisans, and slight variations in color, texture, or 
                  design are natural and add to the uniqueness of each piece.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">4. Pricing and Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All prices are listed in Indian Rupees (INR) and are subject to change without notice. We reserve 
                  the right to modify prices at any time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Payment must be made in full before order processing. We accept various payment methods including 
                  credit cards, debit cards, UPI, and net banking through secure payment gateways.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">5. Shipping and Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We ship to addresses within India. Delivery times may vary depending on the location and product 
                  availability. We will provide tracking information once your order is shipped.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Risk of loss and title for products purchased pass to you upon delivery to the carrier.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">6. Returns and Refunds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We offer a 30-day return policy for most items. Items must be in original condition with tags 
                  and packaging intact. Custom or personalized items are not eligible for return.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Refunds will be processed within 5-7 business days after we receive the returned item.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">7. User Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, 
                  and current at all times. You are responsible for safeguarding the password and for all activities 
                  that occur under your account.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may not use as a username the name of another person or entity or that is not lawfully 
                  available for use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">8. Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                  of the website, to understand our practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Culture Hatti, nor its directors, employees, partners, agents, suppliers, or 
                  affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of India. Any dispute arising out of 
                  or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Punjab, India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any new terms 
                  taking effect.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900">12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> legal@culture-hatti.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91 98765 43210</p>
                  <p className="text-gray-700"><strong>Address:</strong> 123 Heritage Street, Amritsar, Punjab 143001, India</p>
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
