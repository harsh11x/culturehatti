import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { OptimizedLink } from '@/components/performance/optimized-link'
import { ArrowLeft, Heart, Star, Award, Users, Truck, Clock, MapPin, Phone, Mail } from 'lucide-react'

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 relative overflow-hidden" style={{backgroundColor: '#730021'}}>
        {/* Traditional Indian Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Cpath d='M40 0c0 0-20 20-20 40s20 40 20 40 20-20 20-40S40 0 40 0zm0 20c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z'/%3E%3Cpath d='M40 10c0 0-15 15-15 30s15 30 15 30 15-15 15-30S40 10 40 10zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Ornate Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full animate-float border-2 border-yellow-300/30"></div>
          <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full animate-float delay-1000 border-2 border-yellow-300/30"></div>
          <div className="absolute bottom-16 left-1/4 w-28 h-28 bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 rounded-full animate-float delay-500 border-2 border-yellow-300/30"></div>
        </div>
        
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            {/* Ornate Badge */}
            <div className="inline-block relative mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-yellow-300 shadow-lg">
                <span className="text-yellow-900 font-bold text-sm sm:text-base tracking-wide">॥ Our Story ॥</span>
              </div>
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-yellow-400">Heritage</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto mb-6 sm:mb-8 drop-shadow-md">
              Discover the rich history and tradition behind Culture Hatti, 
              where every piece tells a story of Indian craftsmanship and cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-yellow-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-yellow-400">
                <OptimizedLink href="/products">
                  Explore Our Products
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-yellow-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold transform hover:scale-105 hover:shadow-lg transition-all duration-300">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
        {/* Traditional Indian Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M50 0c0 0-25 25-25 50s25 50 25 50 25-25 25-50S50 0 50 0zm0 25c13.8 0 25 11.2 25 25s-11.2 25-25 25-25-11.2-25-25 11.2-25 25-25z'/%3E%3Cpath d='M50 15c0 0-20 20-20 35s20 35 20 35 20-20 20-35S50 15 50 15zm0 20c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
              {/* Ornate Badge */}
              <div className="inline-block relative mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-400 to-amber-400 rounded-full border-2 border-red-300 shadow-lg">
                  <span className="text-red-900 font-bold text-sm sm:text-base tracking-wide">॥ The Story of Culture Hatti ॥</span>
                </div>
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-red-300 to-amber-300 rounded-full opacity-30 animate-pulse"></div>
                </div>
                
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Story of <span className="text-red-700">Culture Hatti</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Preserving Indian heritage through authentic craftsmanship
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {/* Mission Card */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-red-400/30 overflow-hidden transform hover:scale-105 animate-fade-in-up delay-200">
                {/* Ornate Frame */}
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-red-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-red-300 rounded-xl opacity-40"></div>
                  
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg mr-4 sm:mr-6 animate-spin-slow">
                        <Award className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      At Culture Hatti, we are dedicated to preserving and promoting the rich heritage of Indian craftsmanship. 
                      Our mission is to bring authentic, handcrafted Indian jewelry, bags, and accessories to customers worldwide, 
                      while supporting local artisans and their traditional techniques passed down through generations.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Heritage Card */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-amber-400/30 overflow-hidden transform hover:scale-105 animate-fade-in-up delay-400">
                {/* Ornate Frame */}
              <div className="relative">
                  <div className="absolute inset-0 border-2 border-amber-400 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-amber-300 rounded-xl opacity-40"></div>
                  
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg mr-4 sm:mr-6 animate-spin-slow delay-500">
                        <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Our Heritage</h3>
                        </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      Founded with a deep respect for Indian culture and tradition, Culture Hatti has been curating 
                      the finest collection of traditional Indian crafts. Each piece in our collection represents 
                      centuries of artistic heritage, passed down through generations of skilled artisans who 
                      have dedicated their lives to perfecting these ancient techniques.
                    </p>
                      </div>
                        </div>
                      </div>

              {/* Commitment Card */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-red-500/30 overflow-hidden transform hover:scale-105 animate-fade-in-up delay-600">
                {/* Ornate Frame */}
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-red-500 rounded-xl opacity-60"></div>
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-red-400 rounded-xl opacity-40"></div>
                  
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center shadow-lg mr-4 sm:mr-6 animate-spin-slow delay-1000">
                        <Star className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Our Commitment</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      We are committed to maintaining the highest standards of quality and authenticity. 
                      Every product in our collection is carefully selected to ensure it meets our strict 
                      criteria for craftsmanship, materials, and cultural significance. We work directly 
                      with master artisans to ensure each piece tells its own unique story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 relative overflow-hidden" style={{backgroundColor: '#730021'}}>
        {/* Traditional Indian Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Cpath d='M40 0c0 0-20 20-20 40s20 40 20 40 20-20 20-40S40 0 40 0zm0 20c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z'/%3E%3Cpath d='M40 10c0 0-15 15-15 30s15 30 15 30 15-15 15-30S40 10 40 10zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Ornate Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-16 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full animate-float border-2 border-yellow-300/30"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full animate-float delay-1000 border-2 border-yellow-300/30"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 rounded-full animate-float delay-500 border-2 border-yellow-300/30"></div>
            </div>

        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            {/* Ornate Badge */}
            <div className="inline-block relative mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-2 border-yellow-300 shadow-lg">
                <span className="text-yellow-900 font-bold text-sm sm:text-base tracking-wide">॥ Our Values ॥</span>
                    </div>
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-yellow-400">Values</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto drop-shadow-md">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Authenticity */}
            <div className="text-center group animate-fade-in-up delay-200">
              <div className="relative mx-auto mb-6 sm:mb-8">
                {/* Ornate Frame */}
                <div className="absolute inset-0 border-2 border-yellow-400 rounded-full opacity-60"></div>
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-full opacity-40"></div>
                
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-spin-slow relative z-10">
                  <Award className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-900" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Authenticity</h3>
              <p className="text-yellow-100 leading-relaxed text-sm sm:text-base lg:text-lg drop-shadow-md">
                We ensure every product is authentic and represents true Indian craftsmanship
              </p>
              </div>
              
            {/* Quality */}
            <div className="text-center group animate-fade-in-up delay-400">
              <div className="relative mx-auto mb-6 sm:mb-8">
                {/* Ornate Frame */}
                <div className="absolute inset-0 border-2 border-yellow-400 rounded-full opacity-60"></div>
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-full opacity-40"></div>
                
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-spin-slow delay-500 relative z-10">
                  <Star className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-900" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Quality</h3>
              <p className="text-yellow-100 leading-relaxed text-sm sm:text-base lg:text-lg drop-shadow-md">
                We maintain the highest standards of quality in all our products and services
              </p>
            </div>

            {/* Heritage */}
            <div className="text-center group animate-fade-in-up delay-600">
              <div className="relative mx-auto mb-6 sm:mb-8">
                {/* Ornate Frame */}
                <div className="absolute inset-0 border-2 border-yellow-400 rounded-full opacity-60"></div>
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border border-yellow-300 rounded-full opacity-40"></div>
                
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-spin-slow delay-1000 relative z-10">
                  <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-yellow-900" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Heritage</h3>
              <p className="text-yellow-100 leading-relaxed text-sm sm:text-base lg:text-lg drop-shadow-md">
                We preserve and promote Indian cultural heritage through our products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
        {/* Traditional Indian Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M50 0c0 0-25 25-25 50s25 50 25 50 25-25 25-50S50 0 50 0zm0 25c13.8 0 25 11.2 25 25s-11.2 25-25 25-25-11.2-25-25 11.2-25 25-25z'/%3E%3Cpath d='M50 15c0 0-20 20-20 35s20 35 20 35 20-20 20-35S50 15 50 15zm0 20c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="text-center animate-fade-in-up">
            {/* Ornate Badge */}
            <div className="inline-block relative mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-400 to-amber-400 rounded-full border-2 border-red-300 shadow-lg">
                <span className="text-red-900 font-bold text-sm sm:text-base tracking-wide">॥ Ready to Explore ॥</span>
              </div>
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-red-300 to-amber-300 rounded-full opacity-30 animate-pulse"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Explore Our <span className="text-red-700">Collection?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
              Discover the beauty of Indian heritage through our carefully curated collection
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-red-500">
                <OptimizedLink href="/products">
                  Shop Now
                </OptimizedLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold transform hover:scale-105 hover:shadow-lg transition-all duration-300">
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