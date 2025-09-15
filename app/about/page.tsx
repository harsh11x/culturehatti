import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowLeft, Heart, Users, Award, Truck, Star } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 rounded-full flex items-center justify-center border-4 border-amber-300 shadow-lg">
              <span className="text-white font-bold text-3xl drop-shadow-lg">🇮🇳</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-red-900 mb-4">
            Culture Hatti
          </h2>
          <p className="text-xl text-red-700 mb-6">संस्कृति हट्टी</p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Preserving and sharing India's rich cultural heritage.
            <br />
            <span className="italic text-red-600">
              Preserving and sharing the rich cultural heritage of India through authentic handcrafted products.
            </span>
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-red-900">Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Culture Hatti was born from a deep love and respect for the rich cultural traditions of India. 
                Our journey began with a simple mission: to preserve and share the exquisite craftsmanship that 
                has been passed down through generations of skilled artisans.
              </p>
              <p>
                Our journey began in the ancient cities and villages of India, where we met artisans who still 
                create beautiful jewelry, bags, and accessories using traditional methods.
              </p>
              <p>
                Every piece in our collection tells a story - of skilled hands that have perfected their craft, 
                of traditions that have survived the test of time, and of a culture that continues to inspire 
                and enchant people around the world.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/artisan-working.jpg"
                alt="Traditional artisan at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-red-100 to-amber-100 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-red-900 mb-4">Our Mission</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-red-900 mb-2">Preserve Heritage</h4>
              <p className="text-gray-700">
                Preserving Indian culture and traditions for future generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-red-900 mb-2">Support Artisans</h4>
              <p className="text-gray-700">
                Empowering traditional craftspeople and ensuring fair compensation for their exceptional skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-red-900 mb-2">Quality Excellence</h4>
              <p className="text-gray-700">
                Maintaining the highest standards of craftsmanship in every product we offer.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-red-900 text-center mb-12">ਸਾਡੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ • Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-bold text-red-900">Authenticity</h4>
                <p className="text-sm text-gray-600">
                  Every product is genuinely handcrafted using traditional methods.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-bold text-red-900">Fair Trade</h4>
                <p className="text-sm text-gray-600">
                  We ensure fair compensation and working conditions for all artisans.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="font-bold text-red-900">Sustainability</h4>
                <p className="text-sm text-gray-600">
                  Using eco-friendly materials and sustainable production practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">❤️</span>
                </div>
                <h4 className="font-bold text-red-900">Passion</h4>
                <p className="text-sm text-gray-600">
                  Deep love and respect for Indian culture drives everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-red-900 text-center mb-12">ਸਾਨੂੰ ਕਿਉਂ ਚੁਣੋ • Why Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-2">Premium Quality</h4>
                <p className="text-gray-700 text-sm">
                  Each product undergoes rigorous quality checks to ensure excellence.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-2">Fast Shipping</h4>
                <p className="text-gray-700 text-sm">
                  Quick and secure delivery to your doorstep across India.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-2">Customer Satisfaction</h4>
                <p className="text-gray-700 text-sm">
                  Thousands of happy customers trust us for authentic products.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-2">Expert Craftsmanship</h4>
                <p className="text-gray-700 text-sm">
                  Products made by master artisans with decades of experience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-2">Cultural Authenticity</h4>
                <p className="text-gray-700 text-sm">
                  Genuine traditional designs and techniques preserved for generations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">24/7</span>
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-2">Customer Support</h4>
                <p className="text-gray-700 text-sm">
                  Round-the-clock assistance for all your queries and concerns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-lg p-12">
          <h3 className="text-3xl font-bold mb-4">ਸਾਡੇ ਨਾਲ ਜੁੜੋ • Join Our Journey</h3>
          <p className="text-xl mb-8 opacity-90">
            Be part of preserving Punjab's rich cultural heritage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
                Explore Our Collection
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
