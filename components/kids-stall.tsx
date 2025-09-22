"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingBag, Star, Filter, Grid, List, Search } from "lucide-react"

export function KidsStall() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "Kids Lehenga Choli Set",
      price: 2999,
      originalPrice: 4499,
      category: "lehengas",
      image: "/cute-indian-children-in-colorful-traditional-cloth.jpg",
      rating: 4.8,
      reviews: 67,
      colors: ["Pink", "Purple", "Yellow"],
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      description: "Beautiful traditional lehenga choli set for little princesses",
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      name: "Boys Kurta Pajama",
      price: 1899,
      originalPrice: 2799,
      category: "kurtas",
      image: "/handsome-indian-man-in-traditional-kurta-and-ethni.jpg",
      rating: 4.6,
      reviews: 89,
      colors: ["White", "Cream", "Light Blue"],
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      description: "Comfortable cotton kurta pajama set for boys",
      inStock: true,
    },
    {
      id: 3,
      name: "Kids Sharara Set",
      price: 3499,
      originalPrice: 4999,
      category: "shararas",
      image: "/beautiful-indian-woman-in-colorful-saree-with-jewe.jpg",
      rating: 4.7,
      reviews: 45,
      colors: ["Mint Green", "Peach", "Lavender"],
      sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      description: "Trendy sharara set perfect for festivals and parties",
      inStock: true,
    },
    {
      id: 4,
      name: "Traditional Dhoti Kurta",
      price: 2199,
      originalPrice: 3299,
      category: "dhotis",
      image: "/handwoven-dhoti-kurta-set-traditional.jpg",
      rating: 4.5,
      reviews: 34,
      colors: ["White", "Cream", "Saffron"],
      sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      description: "Traditional dhoti kurta set for cultural events",
      inStock: true,
    },
  ]

  const categories = [
    { value: "all", label: "All Items" },
    { value: "lehengas", label: "Lehengas" },
    { value: "kurtas", label: "Kurtas" },
    { value: "shararas", label: "Shararas" },
    { value: "dhotis", label: "Dhotis" },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background pattern-paisley">
      {/* Kids Stall Header */}
      <div className="relative bg-gradient-to-b from-secondary/10 to-background py-12">
        <div className="absolute inset-0 pattern-mandala opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-card rounded-full px-6 py-2 mb-4 border-2 border-secondary/20">
              <span className="text-secondary font-medium">बच्चों का संग्रह • Kids Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4 font-serif text-shadow-warm">
              Little Ones Stall
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Adorable traditional wear for your little princes and princesses
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="w-12 h-16 bg-pink-200/30 rounded-full animate-gentle-sway"></div>
            <div className="w-16 h-20 bg-yellow-200/30 rounded-full animate-gentle-sway delay-300"></div>
            <div className="w-12 h-16 bg-purple-200/30 rounded-full animate-gentle-sway delay-600"></div>
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
                <Input placeholder="Search kids wear..." className="pl-10" />
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
                Age & Size
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
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30"
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
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
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
                      <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
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
                      {product.colors.slice(0, 3).map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-secondary">₹{product.price.toLocaleString()}</span>
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
                      <Button className="flex-1 bg-secondary hover:bg-secondary/90">
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
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
