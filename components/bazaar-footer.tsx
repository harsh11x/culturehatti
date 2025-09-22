"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart, Star, Award, Shield, Truck, Clock, Users, Globe, Zap } from "lucide-react"
import Link from "next/link"

export function BazaarFooter() {
  return (
    <footer className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white relative overflow-hidden">
      {/* Enhanced Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-yellow-400/50 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-12 h-12 border border-yellow-400/30 rounded-full"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-pulse"></div>
      </div>
      
      {/* Sanskrit Shloka Section */}
      <div className="bg-gradient-to-r from-red-950 to-red-900 py-16 border-b border-yellow-400/30 relative">
        <div className="text-center px-6 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Star className="h-12 w-12 text-yellow-400 animate-pulse" />
              <div className="absolute inset-0 h-12 w-12 border-2 border-yellow-400/30 rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-yellow-200 text-2xl md:text-3xl font-bold tracking-wide leading-relaxed mb-4">
              ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
            </p>
            <p className="text-yellow-300 text-lg font-medium italic">
              (May all beings be happy, may all beings be healthy)
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Trust Badges */}
      <div className="bg-gradient-to-r from-red-800/60 to-red-700/60 py-12 border-b border-yellow-400/20 relative">
        <div className="px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2 tracking-wide">Why Choose Culture Hatti?</h3>
            <p className="text-yellow-200/80 text-sm">Trusted by thousands of customers worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group flex flex-col items-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-yellow-400" />
              </div>
              <span className="text-yellow-200 text-sm font-bold mb-1">Authentic Products</span>
              <span className="text-yellow-300/80 text-xs">Handpicked & Verified</span>
            </div>
            <div className="group flex flex-col items-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-yellow-400" />
              </div>
              <span className="text-yellow-200 text-sm font-bold mb-1">Secure Payment</span>
              <span className="text-yellow-300/80 text-xs">SSL Encrypted</span>
            </div>
            <div className="group flex flex-col items-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-yellow-400" />
              </div>
              <span className="text-yellow-200 text-sm font-bold mb-1">Free Shipping</span>
              <span className="text-yellow-300/80 text-xs">Worldwide Delivery</span>
            </div>
            <div className="group flex flex-col items-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-yellow-400" />
              </div>
              <span className="text-yellow-200 text-sm font-bold mb-1">24/7 Support</span>
              <span className="text-yellow-300/80 text-xs">Always Here for You</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-24 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-900 font-bold text-lg">॥</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-yellow-400 font-serif tracking-wide">Culture Hatti</h2>
                  <span className="block text-sm text-yellow-100 font-medium tracking-wider">संस्कृति हट्टी</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-yellow-100 leading-relaxed text-sm font-medium">
                भारत की समृद्ध वस्त्र विरासत का संरक्षण प्रामाणिक हस्तनिर्मित पारंपरिक पोशाक के माध्यम से।
              </p>
              <p className="text-yellow-200 leading-relaxed text-sm">
                Preserving India's rich textile heritage through authentic handcrafted traditional wear.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">25+</div>
                <div className="text-xs text-yellow-200">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">10K+</div>
                <div className="text-xs text-yellow-200">Happy Customers</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 h-12 w-12 rounded-full shadow-lg hover:shadow-yellow-400/25 group">
                <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="icon" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 h-12 w-12 rounded-full shadow-lg hover:shadow-yellow-400/25 group">
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="icon" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 h-12 w-12 rounded-full shadow-lg hover:shadow-yellow-400/25 group">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="icon" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 h-12 w-12 rounded-full shadow-lg hover:shadow-yellow-400/25 group">
                <Youtube className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6 tracking-wide">त्वरित लिंक | Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sarees" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  साड़ी (Sarees)
                </Link>
              </li>
              <li>
                <Link href="/kurtas" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  सूट व लहंगा (Suits & Lehengas)
                </Link>
              </li>
              <li>
                <Link href="/jewelry" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  आभूषण (Jewelry)
                </Link>
              </li>
              <li>
                <Link href="/handicrafts" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  थैले व सामान (Bags & Accessories)
                </Link>
              </li>
              <li>
                <Link href="/mens" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  पुरुष कुर्ता (Men's Kurta)
                </Link>
              </li>
              <li>
                <Link href="/" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  नई आगमन (New Arrivals)
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6 tracking-wide">ग्राहक सेवा | Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/size-guide" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  साइज़ गाइड (Size Guide)
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  शिपिंग व वापसी (Shipping & Returns)
                </Link>
              </li>
              <li>
                <Link href="/care-instructions" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  देखभाल निर्देश (Care Instructions)
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  ऑर्डर ट्रैक करें (Track Your Order)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  सामान्य प्रश्न (FAQs)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-yellow-100 hover:text-yellow-300 transition-all duration-300 font-semibold text-sm flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  संपर्क करें (Contact Us)
                </Link>
              </li>
            </ul>
          </div>

          {/* Enhanced Contact Info & Newsletter */}
          <div>
            <h4 className="text-xl font-bold text-yellow-400 mb-6 tracking-wide">संपर्क में रहें | Stay Connected</h4>
            <div className="space-y-4 mb-8">
              <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-yellow-200 font-bold text-sm">राजदरबार | Royal Court</p>
                  <p className="text-yellow-100 text-sm font-medium">+91 98765 43210</p>
                  <p className="text-yellow-300/70 text-xs">Mon-Sat: 9AM-8PM</p>
                </div>
              </div>
              <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-yellow-200 font-bold text-sm">संदेश | Message</p>
                  <p className="text-yellow-100 text-sm font-medium">hello@culturehatti.com</p>
                  <p className="text-yellow-300/70 text-xs">24/7 Support</p>
                </div>
              </div>
              <div className="group flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-yellow-200 font-bold text-sm">पता | Address</p>
                  <p className="text-yellow-100 text-sm font-medium">
                    123 Heritage Street, Cultural District
                    <br />
                    New Delhi, Bharat 110001
                  </p>
                  <p className="text-yellow-300/70 text-xs">Visit Our Showroom</p>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide">समाचार पत्र | Newsletter</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-yellow-400/20">
                <p className="text-yellow-200 text-sm font-medium mb-3">Get exclusive offers & updates</p>
                <Input 
                  type="email" 
                  placeholder="अपना ईमेल दर्ज करें..." 
                  className="bg-white/10 border-yellow-400/50 text-white placeholder:text-yellow-200/80 px-4 py-3 rounded-lg text-sm font-medium focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 mb-3" 
                />
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 hover:from-yellow-300 hover:to-yellow-400 font-bold px-4 py-3 rounded-lg text-sm shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 group">
                  <span className="group-hover:scale-105 transition-transform">सदस्यता (Subscribe)</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-400/30"></div>

      {/* Enhanced Bottom Footer */}
      <div className="py-12 px-6 bg-gradient-to-r from-red-950 to-red-900 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        
        <div className="text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-yellow-200 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-lg">॥ धन्यवाद |</span>
            </div>
            <span className="font-medium text-base">© २०२४ Culture Hatti. सभी अधिकार सुरक्षित | All rights reserved</span>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-yellow-300 mb-8">
            <Link href="/privacy" className="hover:text-yellow-200 transition-all duration-300 font-semibold hover:underline hover:scale-105 transform">
              गोपनीयता नीति | Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-200 transition-all duration-300 font-semibold hover:underline hover:scale-105 transform">
              नियम और शर्तें | Terms & Conditions
            </Link>
            <Link href="/about" className="hover:text-yellow-200 transition-all duration-300 font-semibold hover:underline hover:scale-105 transform">
              हमारे बारे में | About Us
            </Link>
            <Link href="/careers" className="hover:text-yellow-200 transition-all duration-300 font-semibold hover:underline hover:scale-105 transform">
              करियर | Careers
            </Link>
            <Link href="/blog" className="hover:text-yellow-200 transition-all duration-300 font-semibold hover:underline hover:scale-105 transform">
              ब्लॉग | Blog
            </Link>
          </div>
          
          <div className="text-yellow-300 text-sm font-bold tracking-wide mb-4">
            भारतीय विरासत का संरक्षण १९९९ से | Preserving Indian Heritage Since 1999
          </div>
          
          {/* Additional Trust Indicators */}
          <div className="flex justify-center items-center gap-6 text-xs text-yellow-300/80">
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span>Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>10K+ Customers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
