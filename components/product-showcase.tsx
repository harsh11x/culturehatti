"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Heart, ShoppingBag, MapPin, Clock, Users, IndianRupee } from "lucide-react"

export function ProductShowcase() {
  const categories = [
    {
      id: "womens",
      title: "Women's Collection",
      subtitle: "Traditional Sarees & Ethnic Wear",
      description: "Discover our exquisite collection of handwoven sarees, featuring authentic Banarasi, Kanjeevaram, and Chanderi masterpieces crafted by skilled artisans across India.",
      image: "/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg",
      items: ["Banarasi Silk", "Kanjeevaram", "Chanderi Cotton", "Kundan Jewelry"],
      featured: true,
      color: "from-pink-50 to-rose-50",
      accent: "rose-600",
      artisanInfo: { location: "Varanasi, Uttar Pradesh", artisan: "Master Weaver Collective", price: "₹2,500 onwards" }
    },
    {
      id: "mens",
      title: "Men's Collection",
      subtitle: "Traditional Kurtas & Sherwanis",
      description: "Explore our premium collection of traditional kurtas and sherwanis, featuring authentic Lucknowi craftsmanship and royal heritage designs for the modern Indian gentleman.",
      image: "/handsome-indian-man-in-traditional-kurta-and-ethni.jpg",
      items: ["Lucknowi Kurtas", "Silk Sherwanis", "Nehru Jackets", "Leather Mojaris"],
      color: "from-amber-50 to-orange-50",
      accent: "amber-600",
      artisanInfo: { location: "Lucknow, Uttar Pradesh", artisan: "Heritage Tailors", price: "₹1,800 onwards" }
    },
    {
      id: "kids",
      title: "Kids' Collection",
      subtitle: "Traditional Children's Wear",
      description: "Dress your little ones in charming traditional Indian outfits, featuring festival wear and cultural designs that celebrate Indian heritage with comfort and style.",
      image: "/cute-indian-children-in-colorful-traditional-cloth.jpg",
      items: ["Festival Wear", "School Uniforms", "Party Dresses", "Traditional Toys"],
      color: "from-green-50 to-emerald-50",
      accent: "green-600",
      artisanInfo: { location: "Chandigarh, Punjab", artisan: "Family Crafters", price: "₹800 onwards" }
    },
    {
      id: "gifts",
      title: "Handicrafts Collection",
      subtitle: "Traditional Art & Decor",
      description: "Discover authentic Indian handicrafts and traditional artifacts, featuring handcrafted decor, brass items, and cultural souvenirs from skilled artisans across India.",
      image: "/beautiful-indian-handicrafts-brass-items-decorativ.jpg",
      items: ["Home Decor", "Brass Items", "Traditional Art", "Festival Gifts"],
      color: "from-purple-50 to-violet-50",
      accent: "purple-600",
      artisanInfo: { location: "Delhi, India", artisan: "Artisan Collective", price: "₹500 onwards" }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 pattern-paisley relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-orange-400/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium mb-6 border border-amber-200">
            <MapPin className="h-4 w-4" />
            Heritage Collections
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text-red">Explore Our Collections</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-scale">
            Discover authentic Indian craftsmanship through our curated collections, featuring traditional artisans and heritage techniques from across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card key={category.id} className="group overflow-hidden premium-hover card-3d animate-fade-in-scale" style={{animationDelay: `${index * 0.2}s`}}>
              <div className={`bg-gradient-to-br ${category.color} p-1 animate-shimmer`}>
                <CardContent className="p-0 bg-white rounded-lg glass-effect">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-120 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {category.featured && (
                      <Badge className="absolute top-4 right-4 bg-amber-600 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    
                    {/* Artisan Info Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white">
                        <MapPin className="h-3 w-3 mr-1" />
                        {category.artisanInfo.location}
                      </Badge>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100 premium-hover animate-shimmer">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Shop Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 font-medium mb-2">{category.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                    </div>
                    
                    {/* Artisan Information */}
                    <div className="mb-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-600" />
                          <span className="font-medium text-gray-700">{category.artisanInfo.artisan}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <IndianRupee className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-700">{category.artisanInfo.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Items */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured Items:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <Badge key={item} variant="outline" className="text-xs text-gray-600 border-gray-300">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full group/btn bg-amber-600 hover:bg-amber-700 text-white">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

            <div className="text-center animate-fade-in-scale">
              <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50">
                <MapPin className="mr-2 h-5 w-5" />
                View All Collections
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
      </div>
    </section>
  )
}
