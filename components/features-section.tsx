"use client"

import { Heart, Truck, Shield, Award, Users, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: "Handpicked Quality",
      description: "Every item is carefully selected by our expert curators to ensure the highest quality and authenticity."
    },
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      description: "Enjoy free shipping on all orders above ₹2000. Fast and secure delivery to your doorstep."
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "All our products come with certificates of authenticity from verified artisans and manufacturers."
    },
    {
      icon: Award,
      title: "Master Artisans",
      description: "We work directly with skilled craftsmen who have been perfecting their art for generations."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Your purchase directly supports local communities and helps preserve traditional Indian craftsmanship."
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Our dedicated team is always ready to help you with any questions or concerns."
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-5 left-5 w-20 h-20 bg-yellow-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-5 right-5 w-16 h-16 bg-red-400/10 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-orange-400/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-slide-in-up">
          <h2 className="text-2xl font-bold mb-2">
            <span className="gradient-text-red">Why Choose Culture Hatti?</span>
          </h2>
          <p className="text-red-700 text-sm animate-fade-in-scale">हमारे साथ क्यों चुनें? | What makes us special</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center p-3 rounded-lg premium-hover card-3d animate-fade-in-scale glass-effect" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse-glow">
                  <IconComponent className="h-5 w-5 text-red-800 animate-rotate-3d" />
                </div>
                <h3 className="text-sm font-semibold text-red-900 mb-1 gradient-text-red">{feature.title}</h3>
                <p className="text-xs text-red-700 leading-tight">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
