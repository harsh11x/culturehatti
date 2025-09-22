"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingBag, Star, Filter, Grid, List, Search, Gift } from "lucide-react"

export function GiftsStall() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "Brass Handicraft Set",
      price: 4999,
      originalPrice: 7499,
      category: "handicrafts",
      image: "/beautiful-indian-handicrafts-brass-items-decorativ.jpg",
      rating: 4.9,
      reviews: 123,
      colors: ["Antique Gold", "Bronze"],
      description: "Exquisite brass handicraft collection with traditional designs",
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      name: "Silk Scarf Collection",
      price: 1899,
      originalPrice: 2799,
      category: "accessories",
      image: "/elegant-banarasi-silk-saree-with-gold-work.jpg",
      rating: 4.7,
      reviews: 89,
      colors: ["Royal Blue", "Emerald", "Maroon"],
      description: "Luxurious silk scarves with traditional Indian motifs",
      inStock: true,
    },
    {
      id: 3,
      name: "Jewelry Gift Box",
      price: 6999,
      originalPrice: 9999,
      category: "jewelry",
      image: "/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg",
      rating: 4.8,
      reviews: 156,
      colors: ["Gold", "Silver"],
      description: "Curated jewelry collection in beautiful gift packaging",
      inStock: true,
    },
    {
      id: 4,
      name: "Incense & Candle Set",
      price: 899,
      originalPrice: 1299,
      category: "home",
      image: "/traditional-indian-brass-diya-oil-lamp.jpg",
      rating: 4.6,
      reviews: 234,
      colors: ["Natural"],
      description: "Aromatic incense sticks and traditional candles",
      inStock: true,
    },
  ]

  const categories = [
    { value: "all", label: "All Gifts" },
    { value: "handicrafts", label: "Handicrafts" },
    { value: "jewelry", label: "Jewelry" },
    { value: "accessories", label: "Accessories" },
    { value: "home", label: "Home Decor" },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background pattern-paisley">
      {/* Gifts Stall Header */}
      <div className="relative bg-gradient-to-b from-chart-5/10 to-background py-12">
        <div className="absolute inset-0 pattern-mandala opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-card rounded-full px-6 py-2 mb-4 border-2 border-chart-5/20">
              <span className="text-chart-5 font-medium">उपहार संग्रह • Gifts Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-chart-5 mb-4 font-serif text-shadow-warm">
              Treasures & Gifts Stall
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked treasures and meaningful gifts that celebrate Indian heritage
            </p>
          </div>

          {/* Decorative gift boxes */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-16 h-16 bg-chart-5/20 rounded-lg animate-gentle-sway flex items-center justify-center">
              <Gift className="h-8 w-8 text-chart-5" />
            </div>
            <div className="w-20 h-20 bg-chart-5/30 rounded-lg animate-gentle-sway delay-300 flex items-center justify-center">
              <Gift className="h-10 w-10 text-chart-5" />
            </div>
            <div className="w-16 h-16 bg-chart-5/20 rounded-lg animate-gentle-sway delay-600 flex items-center justify-center">
              <Gift className="h-8 w-8 text-chart-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-2xl p-6 border border-border mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search gifts and handicrafts..." className="pl-10" />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Price Range
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-chart-5/30"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    viewMode === "grid" ? "h-64" : "h-48"
                  }`}
                />
                {product.featured && (
                  <Badge className="absolute top-3 left-3 bg-chart-5 text-white">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Featured
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className={`${viewMode === "list" ? "flex gap-6" : ""}`}>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-chart-5 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-muted-foreground">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-3">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.colors.map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-chart-5">₹{product.price.toLocaleString()}</span>
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  </div>

                  <div className={`${viewMode === "list" ? "flex flex-col justify-end" : ""}`}>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-chart-5 hover:bg-chart-5/90 text-white">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      {viewMode === "grid" && (
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            Load More Gifts
          </Button>
        </div>
      </div>
    </div>
  )
}
