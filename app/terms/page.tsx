'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indian-gold/5 via-indian-saffron/5 to-indian-crimson/5">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indian-gold/20 via-indian-saffron/20 to-indian-crimson/20 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-indian-gold/30 to-indian-saffron/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-indian-maroon mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-indian-crimson max-w-3xl leading-relaxed">
                Please read these terms and conditions carefully before using Culture Hatti services.
              </p>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-indian-maroon hover:text-indian-crimson hover:bg-indian-gold/20">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-indian-gold via-indian-saffron to-indian-crimson"></div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Culture Hatti ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">2. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By using Culture Hatti, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          {/* Products and Services */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">3. Products and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Culture Hatti offers authentic Indian crafts, jewelry, bags, and cultural products. We strive to provide accurate product descriptions and images, but variations may occur due to the handmade nature of our products.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>All products are handcrafted by skilled artisans</li>
              <li>Product images are for reference and may vary slightly</li>
              <li>We reserve the right to modify product offerings</li>
              <li>Prices are subject to change without notice</li>
            </ul>
          </section>

          {/* Orders and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">4. Orders and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you place an order with Culture Hatti, you agree to the following terms:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>All orders are subject to acceptance and availability</li>
              <li>Payment must be made in full before order processing</li>
              <li>We accept various payment methods as displayed during checkout</li>
              <li>Order confirmation will be sent via email</li>
              <li>We reserve the right to cancel orders at our discretion</li>
            </ul>
          </section>

          {/* Shipping and Delivery */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">5. Shipping and Delivery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We aim to deliver your orders promptly and safely:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Delivery times vary by location and product availability</li>
              <li>Shipping costs are calculated at checkout</li>
              <li>Risk of loss transfers to you upon delivery</li>
              <li>We are not responsible for delays caused by third-party carriers</li>
              <li>International shipping may be subject to customs duties</li>
            </ul>
          </section>

          {/* Returns and Refunds */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">6. Returns and Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our return policy is designed to ensure your satisfaction:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Returns must be initiated within 30 days of delivery</li>
              <li>Products must be in original condition with tags</li>
              <li>Custom or personalized items may not be returnable</li>
              <li>Return shipping costs are the customer's responsibility</li>
              <li>Refunds will be processed within 5-7 business days</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on Culture Hatti, including text, images, logos, and designs, is protected by intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">8. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Culture Hatti shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or products.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of India. Any disputes will be resolved in the courts of India.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-indian-gold/10 rounded-lg">
              <p className="text-indian-maroon font-semibold">Culture Hatti</p>
              <p className="text-gray-700">Email: support@culturehatti.com</p>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-indian-maroon mb-4">12. Updates to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update these Terms at any time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated Terms.
            </p>
          </section>

          <div className="mt-8 p-6 bg-gradient-to-r from-indian-gold/10 to-indian-saffron/10 rounded-lg border border-indian-gold/20">
            <p className="text-indian-maroon font-semibold text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}