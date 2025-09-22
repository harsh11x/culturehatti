"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"
import Link from "next/link"

export function BazaarFooter() {
  return (
    <footer className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
      {/* Sanskrit Shloka Section */}
      <div className="bg-red-900 py-8 border-b border-yellow-400">
        <div className="container mx-auto px-6 text-center">
          <p className="text-yellow-200 text-lg font-medium">
            ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
          </p>
          <p className="text-yellow-300 text-sm mt-2">
            (May all beings be happy, may all beings be healthy)
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-yellow-400 font-serif mb-2">॥ श्री ॥ Culture Hatti</h2>
              <span className="block text-sm text-white mb-4">संस्कृति हट्टी</span>
            </div>
            <p className="text-yellow-100 mb-4 leading-relaxed text-sm">
              भारत की समृद्ध वस्त्र विरासत का संरक्षण प्रामाणिक हस्तनिर्मित पारंपरिक पोशाक के माध्यम से।
            </p>
            <p className="text-yellow-200 mb-6 leading-relaxed text-sm">
              Preserving India's rich textile heritage through authentic handcrafted traditional wear.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-colors h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-colors h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-colors h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-colors h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4">त्वरित लिंक | Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sarees" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  साड़ी (Sarees)
                </Link>
              </li>
              <li>
                <Link href="/kurtas" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  सूट व लहंगा (Suits & Lehengas)
                </Link>
              </li>
              <li>
                <Link href="/jewelry" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  आभूषण (Jewelry)
                </Link>
              </li>
              <li>
                <Link href="/handicrafts" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  थैले व सामान (Bags & Accessories)
                </Link>
              </li>
              <li>
                <Link href="/kids" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  पुरुष कुर्ता (Men's Kurta)
                </Link>
              </li>
              <li>
                <Link href="/" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  नई आगमन (New Arrivals)
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4">ग्राहक सेवा | Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/size-guide" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  साइज़ गाइड (Size Guide)
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  शिपिंग व वापसी (Shipping & Returns)
                </Link>
              </li>
              <li>
                <Link href="/care-instructions" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  देखभाल निर्देश (Care Instructions)
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  ऑर्डर ट्रैक करें (Track Your Order)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  सामान्य प्रश्न (FAQs)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-yellow-100 hover:text-yellow-300 transition-colors font-medium text-sm">
                  संपर्क करें (Contact Us)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4">संपर्क में रहें | Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-yellow-200 font-medium text-xs">राजदरबार | Royal Court</p>
                  <p className="text-yellow-100 text-xs">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-yellow-200 font-medium text-xs">संदेश | Message</p>
                  <p className="text-yellow-100 text-xs">hello@culturehatti.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-yellow-200 font-medium text-xs">पता | Address</p>
                  <p className="text-yellow-100 text-xs">
                    123 Heritage Street, Cultural District
                    <br />
                    New Delhi, Bharat
                  </p>
                </div>
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-yellow-400 mb-3">समाचार पत्र | Newsletter</h4>
            <div className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="अपना ईमेल दर्ज करें..." 
                className="bg-white/10 border-yellow-400 text-white placeholder:text-yellow-200 px-2 py-1.5 rounded text-xs" 
              />
              <Button className="bg-yellow-400 text-red-900 hover:bg-yellow-300 font-semibold px-3 py-1.5 rounded text-xs">
                सदस्यता (Subscribe)
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-400"></div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-yellow-200 mb-4">
            <span>॥ धन्यवाद |</span>
            <span>© २०२४ Culture Hatti. सभी अधिकार सुरक्षित | All rights reserved</span>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-yellow-300 mb-4">
            <Link href="/privacy" className="hover:text-yellow-200 transition-colors">
              गोपनीयता नीति | Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-200 transition-colors">
              नियम और शर्तें | Terms & Conditions
            </Link>
            <Link href="/about" className="hover:text-yellow-200 transition-colors">
              हमारे बारे में | About Us
            </Link>
            <Link href="/careers" className="hover:text-yellow-200 transition-colors">
              करियर | Careers
            </Link>
            <Link href="/blog" className="hover:text-yellow-200 transition-colors">
              ब्लॉग | Blog
            </Link>
          </div>
          
          <div className="text-yellow-300 text-sm">
            भारतीय विरासत का संरक्षण १९९९ से | Preserving Indian Heritage Since 1999
          </div>
        </div>
      </div>
    </footer>
  )
}
