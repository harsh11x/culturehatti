"use client"

import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "The Banarasi saree I purchased exceeded all my expectations. The quality is exceptional and the craftsmanship is truly authentic. Culture Hatti has become my go-to for all traditional wear.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      rating: 5,
      text: "I've been looking for authentic Indian handicrafts for my home, and Culture Hatti delivered exactly what I needed. The brass items are beautifully crafted and the customer service is outstanding.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "As someone who loves Indian culture, I was thrilled to find Culture Hatti. The traditional jewelry collection is stunning, and the shipping to the US was fast and secure. Highly recommended!",
      image: "/placeholder-user.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-24 h-24 bg-yellow-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-red-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text-red">What Our Customers Say</span>
          </h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto animate-fade-in-scale">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Culture Hatti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 relative premium-hover card-3d animate-fade-in-scale glass-effect" style={{animationDelay: `${index * 0.2}s`}}>
              <Quote className="h-8 w-8 text-amber-600 mb-4 animate-rotate-3d" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse-glow" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 animate-float"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 gradient-text-red">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-scale">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 glass-effect premium-hover">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text animate-pulse-glow">4.9</div>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current animate-rotate-3d" style={{animationDelay: `${i * 0.2}s`}} />
                ))}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text animate-pulse-glow">10K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text animate-pulse-glow">50+</div>
              <div className="text-sm text-gray-600">Artisan Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
