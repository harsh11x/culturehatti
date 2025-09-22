'use client'

import { Suspense, lazy, useState } from "react"
import { BazaarHeader } from "@/components/bazaar-header"
import { BazaarFooter } from "@/components/bazaar-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "What is Culture Hatti?",
      answer: "Culture Hatti is an online marketplace dedicated to authentic Indian traditional products. We connect skilled artisans with customers who appreciate genuine Indian craftsmanship, including sarees, kurtas, jewelry, and handicrafts."
    },
    {
      question: "How do I place an order?",
      answer: "To place an order, browse our products, select the items you want, add them to your cart, and proceed to checkout. You'll need to create an account or login, provide shipping details, and complete the payment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI payments, net banking, and digital wallets through our secure payment gateway. All transactions are encrypted and secure."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary by location. For metro cities, delivery typically takes 2-3 business days. For other cities, it may take 5-7 business days. We provide tracking information once your order is shipped."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within India. We're working on expanding our shipping to international destinations. Please check back with us for updates on international shipping."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with tags and packaging intact. Custom or personalized items cannot be returned. Please contact our customer service to initiate a return."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all our products are authentic and handcrafted by skilled artisans. We work directly with master craftsmen and ensure that every product meets our quality standards. Each item comes with a certificate of authenticity."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can use this tracking number on our website or the courier company's website to track your package's location."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 24 hours of placing it, provided it hasn't been shipped yet. For orders that have already been shipped, you can return the items following our return policy."
    },
    {
      question: "Do you offer custom sizes?",
      answer: "Yes, we offer custom sizing for many of our products, especially sarees and kurtas. Please contact our customer service team with your measurements, and we'll work with our artisans to create a custom piece for you."
    },
    {
      question: "How do I care for my traditional garments?",
      answer: "Traditional garments require special care. Silk items should be dry cleaned, while cotton items can be hand washed in cold water. Always follow the care instructions provided with your purchase. Store items in a cool, dry place away from direct sunlight."
    },
    {
      question: "What if I receive a damaged product?",
      answer: "If you receive a damaged product, please contact us immediately with photos of the damage. We'll arrange for a replacement or full refund, and we'll cover the return shipping costs."
    },
    {
      question: "Do you have a physical store?",
      answer: "Currently, we operate as an online marketplace. However, we're planning to open physical stores in major cities. Follow our social media channels for updates on store openings."
    },
    {
      question: "How can I become a seller on Culture Hatti?",
      answer: "We welcome skilled artisans and traditional product makers to join our platform. Please contact us at partners@culture-hatti.com with details about your products and craftsmanship. We'll review your application and get back to you."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer beautiful traditional gift wrapping for all our products. You can select the gift wrapping option during checkout. We also include a personalized message card with your gift."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley">
      <BazaarHeader />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-red">सामान्य प्रश्न | Frequently Asked Questions</span>
            </h1>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Find answers to common questions about our products, services, and policies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6" />
                  Common Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-4 h-auto text-left"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </Button>
                    {openItems.includes(index) && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="mt-8 border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-red-900 text-center">Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-6">
                  If you couldn't find the answer to your question, our customer service team is here to help.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Email Support</h4>
                    <p className="text-sm text-gray-600">support@culture-hatti.com</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Phone Support</h4>
                    <p className="text-sm text-gray-600">+91 98765 43210</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Live Chat</h4>
                    <p className="text-sm text-gray-600">Available 9 AM - 8 PM</p>
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
