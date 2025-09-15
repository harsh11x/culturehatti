import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowLeft, Heart, Star, Award, Users, Truck } from 'lucide-react'

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-amber-100 rounded-full border border-red-300 mb-4">
              <span className="text-red-800 font-semibold text-sm">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-700">Heritage</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover the rich history and tradition behind Culture Hatti, 
              where every piece tells a story of Indian craftsmanship and cultural heritage.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-red-700 hover:bg-red-800 text-white px-8 py-3">
                <OptimizedLink href="/products">
                  Explore Our Products
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" className="border-red-700 text-red-700 hover:bg-red-50 px-8 py-3">
                <OptimizedLink href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </OptimizedLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                The Story of <span className="text-red-700">Culture Hatti</span>
              </h2>
              <p className="text-lg text-gray-600">
                Preserving Indian heritage through authentic craftsmanship
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-red-50 to-amber-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  At Culture Hatti, we are dedicated to preserving and promoting the rich heritage of Indian craftsmanship. 
                  Our mission is to bring authentic, handcrafted Indian jewelry, bags, and accessories to customers worldwide, 
                  while supporting local artisans and their traditional techniques.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-red-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Heritage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded with a deep respect for Indian culture and tradition, Culture Hatti has been curating 
                  the finest collection of traditional Indian crafts. Each piece in our collection represents 
                  centuries of artistic heritage, passed down through generations of skilled artisans.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-amber-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to maintaining the highest standards of quality and authenticity. 
                  Every product in our collection is carefully selected to ensure it meets our strict 
                  criteria for craftsmanship, materials, and cultural significance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-700">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Authenticity */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure every product is authentic and represents true Indian craftsmanship
              </p>
            </div>

            {/* Quality */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of quality in all our products and services
              </p>
            </div>

            {/* Heritage */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                We preserve and promote Indian cultural heritage through our products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Explore Our <span className="text-red-700">Collection?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover the beauty of Indian heritage through our carefully curated collection
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-red-700 hover:bg-red-800 text-white px-8 py-3">
                <OptimizedLink href="/products">
                  Shop Now
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" className="border-red-700 text-red-700 hover:bg-red-50 px-8 py-3">
                <OptimizedLink href="/contact">
                  Contact Us
                </OptimizedLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}