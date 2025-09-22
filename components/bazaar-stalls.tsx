"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Heart, ShoppingBag, Sparkles, Crown, Gem, Gift } from "lucide-react"
import { useState, useCallback } from "react"

export function BazaarStalls() {
  const [hoveredStall, setHoveredStall] = useState<string | null>(null)

  const handleStallHover = useCallback((stallId: string | null) => {
    setHoveredStall(stallId)
  }, [])

  const stalls = [
    {
      id: "womens",
      title: "श्रीमती संग्रह",
      englishTitle: "Women's Collection",
      subtitle: "Sarees • Salwar Suits • Traditional Jewelry",
      description:
        "Handwoven silk sarees from Banaras, elegant cotton suits from Punjab, and exquisite jewelry crafted by master artisans from Rajasthan",
      image: "/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg",
      color: "from-rose-100 via-pink-50 to-red-50",
      borderColor: "border-rose-300",
      hoverBorder: "hover:border-rose-500",
      accent: "rose-600",
      items: ["Banarasi Silk", "Kanjeevaram", "Chanderi Cotton", "Kundan Jewelry"],
      featured: true,
      icon: Crown,
      shopType: "Traditional Saree Emporium",
    },
    {
      id: "mens",
      title: "पुरुष वस्त्र",
      englishTitle: "Men's Ethnic Wear",
      subtitle: "Kurtas • Sherwanis • Traditional Accessories",
      description:
        "Royal sherwanis from Lucknow, comfortable cotton kurtas, and traditional accessories for the modern Indian gentleman",
      image: "/handsome-indian-man-in-traditional-kurta-and-ethni.jpg",
      color: "from-amber-100 via-yellow-50 to-orange-50",
      borderColor: "border-amber-300",
      hoverBorder: "hover:border-amber-500",
      accent: "amber-600",
      items: ["Lucknowi Kurtas", "Silk Sherwanis", "Nehru Jackets", "Leather Mojaris"],
      icon: Gem,
      shopType: "Gentleman's Ethnic Store",
    },
    {
      id: "kids",
      title: "बाल वस्त्र",
      englishTitle: "Kids' Traditional Wear",
      subtitle: "Mini Kurtas • Baby Lehengas • Festive Collection",
      description:
        "Adorable ethnic wear for little princes and princesses, specially designed for Indian festivals and celebrations",
      image: "/cute-indian-children-in-colorful-traditional-cloth.jpg",
      color: "from-green-100 via-emerald-50 to-teal-50",
      borderColor: "border-green-300",
      hoverBorder: "hover:border-green-500",
      accent: "green-600",
      items: ["Mini Kurta Sets", "Baby Lehengas", "Dhoti Kurtas", "Traditional Caps"],
      icon: Heart,
      shopType: "Children's Heritage Store",
    },
    {
      id: "gifts",
      title: "उपहार संग्रह",
      englishTitle: "Heritage Gifts & Crafts",
      subtitle: "Handicrafts • Home Decor • Festive Essentials",
      description:
        "Authentic Indian handicrafts, traditional brass items, wooden artifacts, and festive decorations from various states of India",
      image: "/beautiful-indian-handicrafts-brass-items-decorativ.jpg",
      color: "from-purple-100 via-violet-50 to-indigo-50",
      borderColor: "border-purple-300",
      hoverBorder: "hover:border-purple-500",
      accent: "purple-600",
      items: ["Brass Artifacts", "Wooden Crafts", "Festive Diyas", "Traditional Paintings"],
      icon: Gift,
      shopType: "Heritage Craft House",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-cream-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-amber-200 shadow-lg">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-amber-700" />
              <span className="text-amber-900 font-semibold text-sm">Our Traditional Shops</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">Explore Our Bazaar Stalls</h2>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Step into our traditional Indian bazaar where each stall represents generations of craftsmanship,
              authentic heritage, and the rich cultural legacy of incredible India.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {stalls.map((stall, index) => {
            const IconComponent = stall.icon
            return (
              <Card
                key={stall.id}
                className={`group overflow-hidden ${stall.borderColor} border-2 ${stall.hoverBorder} transition-all duration-300 hover:shadow-xl bg-white ${
                  hoveredStall === stall.id ? "scale-[1.02] shadow-lg" : ""
                }`}
                onMouseEnter={() => handleStallHover(stall.id)}
                onMouseLeave={() => handleStallHover(null)}
              >
                <div className={`bg-gradient-to-br ${stall.color} p-2 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-8 h-8">
                    <div className="w-full h-full bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-8 h-8">
                    <div className="w-full h-full bg-gradient-to-tr from-white/20 to-transparent rounded-tr-full"></div>
                  </div>

                  <CardContent className="p-0 bg-white/95 backdrop-blur-sm rounded-xl">
                    <div className="flex flex-col h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={stall.image || "/placeholder.svg"}
                          alt={stall.englishTitle}
                          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <Badge
                          className={`absolute top-3 left-3 bg-${stall.accent} text-white shadow-md text-xs px-2 py-1`}
                        >
                          {stall.shopType}
                        </Badge>
                        {stall.featured && (
                          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md text-xs">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            Premium
                          </Badge>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                          <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg border border-amber-200">
                            <IconComponent className={`h-6 w-6 text-${stall.accent}`} />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="text-center mb-4">
                            <h3 className="text-xl font-bold text-amber-900 font-serif mb-2">{stall.title}</h3>
                            <h4 className="text-lg font-semibold text-red-700 mb-2">{stall.englishTitle}</h4>
                            <p className={`text-${stall.accent} font-medium text-sm`}>{stall.subtitle}</p>
                          </div>

                          <p className="text-gray-600 mb-4 leading-relaxed text-center text-sm">{stall.description}</p>

                          <div className="flex flex-wrap gap-1 mb-4 justify-center">
                            {stall.items.map((item) => (
                              <Badge
                                key={item}
                                variant="outline"
                                className={`text-xs py-1 px-2 border-${stall.accent} text-${stall.accent} hover:bg-${stall.accent}/10 transition-colors`}
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          className={`w-full group/btn text-sm py-3 bg-${stall.accent} hover:bg-${stall.accent}/90 hover:shadow-md transition-all duration-300`}
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Shop Now
                          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 border-3 border-amber-300 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-lg"></div>

          <div className="flex items-center justify-between mb-10 relative z-10">
            <div>
              <h3 className="text-4xl font-bold text-amber-900 mb-3 font-serif">Trending in the Bazaar</h3>
              <p className="text-amber-700 text-lg">Handpicked favorites from our artisan partners</p>
            </div>
            <Button
              variant="outline"
              className="hover:bg-amber-50 transition-colors bg-white border-2 border-amber-300 text-amber-800"
            >
              View All Trending
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                name: "Banarasi Silk Saree",
                price: "₹12,999",
                originalPrice: "₹15,999",
                image: "/elegant-banarasi-silk-saree-with-gold-work.jpg",
                discount: "19%",
              },
              {
                name: "Embroidered Kurta",
                price: "₹2,499",
                originalPrice: "₹3,499",
                image: "/white-cotton-kurta-with-embroidery-for-men.jpg",
                discount: "29%",
              },
              {
                name: "Kundan Jewelry Set",
                price: "₹8,999",
                originalPrice: "₹12,999",
                image: "/traditional-kundan-jewelry-set-with-earrings.jpg",
                discount: "31%",
              },
              {
                name: "Brass Diya Set",
                price: "₹899",
                originalPrice: "₹1,299",
                image: "/decorative-brass-diyas-oil-lamps-for-diwali.jpg",
                discount: "31%",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <CardContent className="p-5">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs">-{product.discount}</Badge>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm leading-tight">{product.name}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-primary font-bold text-lg">{product.price}</p>
                    <p className="text-muted-foreground line-through text-sm">{product.originalPrice}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
